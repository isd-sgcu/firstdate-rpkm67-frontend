'use client';

import { useState, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useAuth } from '@/context/AuthContext';
import { getAccessToken } from '@/utils/auth';
import { apiClient } from '@/utils/axios';
import { User } from '@/types/user';
import UploadProfilePicture from '@/components/register/UploadProfilePicture';
import {
  StyledInput,
  StyledSelect,
} from '@/components/register/StyledComponents';
import EditIcon from '@public/edit/edit-icon.svg';
import CurvedLineIcon from '@public/curved-line.svg';
import Button from '@/components/register/Button';

type RegisterUser = Pick<
  User,
  | 'title'
  | 'firstname'
  | 'lastname'
  | 'nickname'
  | 'faculty'
  | 'year'
  | 'tel'
  | 'parent_tel'
  | 'parent'
  | 'food_allergy'
  | 'drug_allergy'
  | 'illness'
>;

export default function Register() {
  const router = useRouter();

  const { user, resetContext } = useAuth();
  const userId = user?.id;
  const [formData, setFormData] = useState<RegisterUser>({
    title: user?.title || '',
    firstname: user?.firstname || '',
    lastname: user?.lastname || '',
    nickname: user?.nickname || '',
    faculty: user?.faculty || '',
    year: user?.year || 0,
    tel: user?.tel || '',
    parent_tel: user?.parent_tel || '',
    parent: user?.parent || '',
    food_allergy: user?.food_allergy || '',
    drug_allergy: user?.drug_allergy || '',
    illness: user?.illness || '',
  });
  const [errors, setErrors] = useState<string[]>([]);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.name === 'year' ? +e.target.value : e.target.value,
    });
  };

  const validateForm = (): boolean => {
    const formErrors: string[] = [];
    if (!formData.title) formErrors.push('title');
    if (!formData.firstname) formErrors.push('firstname');
    if (!formData.lastname) formErrors.push('lastname');
    if (!formData.nickname) formErrors.push('nickname');
    if (!formData.faculty) formErrors.push('faculty');
    if (!formData.year) formErrors.push('year');
    if (!formData.tel) formErrors.push('tel');
    if (!formData.parent_tel) formErrors.push('parent_tel');
    if (!formData.parent) formErrors.push('parent');
    setErrors(formErrors);
    return formErrors.length === 0;
  };

  async function updateUserProfile(userData: RegisterUser) {
    try {
      const accessToken = await getAccessToken();
      const response = await apiClient.patch(
        `/user/profile/${userId}`,
        userData,
        { headers: { Authorization: `Bearer ${accessToken}` } }
      );
      console.log('User profile updated successfully:', response.data);
    } catch (error) {
      console.error('Error updating user profile:', error);
    }
  }

  const handleSubmit = () => {
    if (validateForm()) {
      updateUserProfile(formData).then(() => {
        resetContext();
        router.push('/home');
      });
    }
  };

  return (
    <div className="flex items-center flex-col w-[95%] min-h-[calc(95vw*(801/371))] my-[5%] mx-auto bg-white rounded-b-lg rounded-t-full  border-[1px] border-black">
      <div className="flex flex-col py-10 px-10">
        <div className="flex flex-col items-center">
          <Image
            src={EditIcon}
            alt="edit-icon"
            className="mb-2"
          />
          <h2 className="text-2xl font-bold mb-4">แก้ไขข้อมูล</h2>
          <Image
            src={CurvedLineIcon}
            alt="curved-line-icon"
            className="mb-6"
          />
          <div className="flex flex-col mb-4">
            <UploadProfilePicture />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col space-y-2">
            <h3 className="text-xl font-semibold text-center">ข้อมูลส่วนตัว</h3>
            <StyledSelect
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              error={errors.includes('title')}
            >
              <option
                disabled
                value=""
              >
                คำนำหน้า
              </option>
              <option value="นาย">นาย</option>
              <option value="นาง">นาง</option>
              <option value="นางสาว">นางสาว</option>
              <option value="เด็กชาย">เด็กชาย</option>
              <option value="เด็กหญิง">เด็กหญิง</option>
            </StyledSelect>
            <StyledInput
              type="text"
              name="firstname"
              placeholder="ชื่อจริง"
              value={formData.firstname}
              onChange={handleInputChange}
              error={errors.includes('firstname')}
            />
            <StyledInput
              type="text"
              name="lastname"
              placeholder="นามสกุล"
              value={formData.lastname}
              onChange={handleInputChange}
              error={errors.includes('lastname')}
            />
            <StyledInput
              type="text"
              name="nickname"
              placeholder="ชื่อเล่น"
              value={formData.nickname}
              onChange={handleInputChange}
              error={errors.includes('nickname')}
            />
            <div className="flex space-x-2">
              <StyledSelect
                name="faculty"
                value={formData.faculty}
                onChange={handleInputChange}
                error={errors.includes('faculty')}
              >
                <option
                  disabled
                  value=""
                >
                  คณะ
                </option>
                <option value="21">วิศวกรรมศาสตร์ 1</option>
                <option value="22">วิศวกรรมศาสตร์ 2</option>
              </StyledSelect>
              <StyledSelect
                name="year"
                value={formData.year}
                onChange={handleInputChange}
                error={errors.includes('year')}
              >
                <option
                  disabled
                  value={0}
                >
                  ชั้นปี
                </option>
                <option value={1}>1</option>
                <option value={2}>2</option>
              </StyledSelect>
            </div>
            <StyledInput
              type="text"
              name="tel"
              placeholder="เบอร์โทรศัพท์"
              value={formData.tel}
              onChange={handleInputChange}
              error={errors.includes('tel')}
            />
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-center">
              ข้อมูลผู้ปกครอง
            </h3>
            <StyledInput
              type="text"
              name="parent_tel"
              placeholder="เบอร์โทรศัพท์"
              value={formData.parent_tel}
              onChange={handleInputChange}
              error={errors.includes('parent_tel')}
            />
            <StyledSelect
              name="parent"
              value={formData.parent}
              onChange={handleInputChange}
              error={errors.includes('parent')}
            >
              <option
                disabled
                value=""
              >
                ความสัมพันธ์
              </option>
              <option value="บิดา">บิดา</option>
              <option value="มารดา">มารดา</option>
            </StyledSelect>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-center">
              ข้อมูลด้านสุขภาพ
            </h3>
            <StyledInput
              type="text"
              name="food_allergy"
              placeholder="อาหารที่แพ้"
              value={formData.food_allergy}
              onChange={handleInputChange}
              error={errors.includes('food_allergy')}
            />
            <StyledInput
              type="text"
              name="drug_allergy"
              placeholder="ยาที่แพ้"
              value={formData.drug_allergy}
              onChange={handleInputChange}
              error={errors.includes('drug_allergy')}
            />
            <StyledInput
              type="text"
              name="illness"
              placeholder="โรคประจำตัว"
              value={formData.illness}
              onChange={handleInputChange}
              error={errors.includes('illness')}
            />
          </div>
          <div className="flex flex-col items-center gap-4 mt-6">
            <Image
              src={CurvedLineIcon}
              alt="curved-line-icon"
              className="mb-2"
            />
            <Button
              variant="pink"
              onClick={handleSubmit}
            >
              ยืนยันข้อมูล
            </Button>
            <Button
              variant="white"
              onClick={() => router.push('/home')}
            >
              ยกเลิก
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

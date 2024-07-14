'use client';

import { useState, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useAuth } from '@/context/AuthContext';
import { getAccessToken } from '@/utils/auth';
import { apiClient } from '@/utils/axios';
import UploadProfilePicture from '@/components/register/UploadProfilePicture';
import {
  StyledInput,
  StyledSelect,
} from '@/components/register/StyledComponents';
import EditIcon from '@public/edit/edit-icon.svg';
import CurvedLineIcon from '@public/curved-line.svg';
import Button from '@/components/register/Button';
import { major } from '@/utils/register';
import toast from 'react-hot-toast';
import Spinner from '@/components/Spinner';
import { UserDTO } from '@/dtos/userDTO';

type RegisterUser = Pick<
  UserDTO,
  'title' | 'firstname' | 'lastname' | 'nickname' | 'faculty' | 'year' | 'tel'
>;

export default function Edit() {
  const router = useRouter();
  const [upload, setUpload] = useState(false);
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
    setErrors(formErrors);

    const isError = formErrors.length !== 0;
    if (isError) {
      toast.error('โปรดกรอกข้อมูลให้ครบ');
    }

    return !isError;
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
      setUpload(true);
      updateUserProfile(formData).then(async () => {
        setUpload(true);
        resetContext();
        toast.success('เเก้ไขข้อมูลสำเร็จ');
        router.push('/home');
      });
    }
  };

  return (
    <div className="flex items-center flex-col w-[95%] min-h-[calc(95vw*(801/371))] my-[5%] mx-auto bg-white rounded-b-lg rounded-t-full  border-[1px] border-black">
      {upload && (
        <div className="z-[999] fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center">
          <Spinner />
        </div>
      )}

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
            <label className="flex flex-col items-start w-1/2">
              คำนำหน้าชื่อ
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
            </label>

            <label>
              <span>ชื่อจริง</span>
              <StyledInput
                type="text"
                name="firstname"
                placeholder="ชื่อจริง"
                value={formData.firstname}
                onChange={handleInputChange}
                error={errors.includes('firstname')}
              />
            </label>

            <label>
              <span>นามสกุล</span>
              <StyledInput
                type="text"
                name="lastname"
                placeholder="นามสกุล"
                value={formData.lastname}
                onChange={handleInputChange}
                error={errors.includes('lastname')}
              />
            </label>

            <label>
              <span>ชื่อเล่น</span>
              <StyledInput
                type="text"
                name="nickname"
                placeholder="ชื่อเล่น"
                value={formData.nickname}
                onChange={handleInputChange}
                error={errors.includes('nickname')}
              />
            </label>

            <div className="flex space-x-2">
              <label>
                <span>คณะ</span>
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
                  {major.map((m) => (
                    <option
                      value="21"
                      key={m.id}
                    >
                      {m.name}
                    </option>
                  ))}
                </StyledSelect>
              </label>

              <label>
                <span>ชั้นปี</span>
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
              </label>
            </div>

            <label>
              <span>เบอร์โทรศัพท์</span>
              <div className="flex items-center">
                <StyledInput
                  type="text"
                  name="tel"
                  placeholder="เบอร์โทรศัพท์"
                  value={formData.tel}
                  onChange={handleInputChange}
                  error={errors.includes('tel')}
                />
              </div>
            </label>
          </div>

          <div className="flex flex-col items-center gap-4 mt-6">
            <Image
              src={CurvedLineIcon}
              alt="curved-line-icon"
              className="mb-2"
            />
            <Button
              variant="fuchsia"
              onClick={handleSubmit}
            >
              ยืนยันข้อมูล
            </Button>
            <Button
              variant="white"
              onClick={() => router.push('/staff/home')}
            >
              ยกเลิก
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

'use client';

import { useState, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';
import StarIcon from '@public/star.svg';
import Image from 'next/image';
import { useAuth } from '@/context/AuthContext';
import { getAccessToken } from '@/utils/auth';
import { apiClient } from '@/utils/axios';
import UploadProfilePicture from '@/components/(main)/register/UploadProfilePicture';
import {
  StyledInput,
  StyledSelect,
} from '@/components/(main)/register/StyledComponents';
import Button from '@/components/(main)/register/Button';
import { major } from '@/utils/register';
import toast from 'react-hot-toast';
import { UserDTO } from '@/dtos/userDTO';
import Border from '@/components/firstdate/Border';
import Spinner from '@/components/firstdate/Spinner';
import Pdpa from '@/components/(main)/pdpa';

type RegisterUser = Pick<
  UserDTO,
  'title' | 'firstname' | 'lastname' | 'nickname' | 'faculty' | 'year' | 'tel'
>;

export default function Register() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<RegisterUser>({
    title: '',
    firstname: '',
    lastname: '',
    nickname: '',
    faculty: '',
    year: 0,
    tel: '',
  });
  const [isPdpaOpen, setIsPdpaOpen] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const router = useRouter();
  const { user, resetContext } = useAuth();
  const userId = user?.id;
  const [upload, setUpload] = useState(false);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.name === 'year' ? +e.target.value : e.target.value,
    });
  };

  const validateStep = (): boolean => {
    const stepErrors: string[] = [];
    switch (currentStep) {
      case 0:
        // Note: validate in the UploadProfilePicture Component
        break;
      case 1:
        if (!formData.title) stepErrors.push('title');
        if (!formData.firstname) stepErrors.push('firstname');
        if (!formData.lastname) stepErrors.push('lastname');
        if (!formData.nickname) stepErrors.push('nickname');
        if (!formData.faculty) stepErrors.push('faculty');
        if (!formData.year) stepErrors.push('year');
        if (!formData.tel) stepErrors.push('tel');
        break;
    }

    setErrors(stepErrors);
    const isError = stepErrors.length !== 0;
    if (isError) {
      toast.error('โปรดกรอกข้อมูลให้ครบ');
    }

    return !isError;
  };

  const handlePrevStep = () => {
    setCurrentStep((currentStep) => currentStep - 1);
  };

  async function updateUserProfile(userData: RegisterUser) {
    try {
      const accessToken = await getAccessToken();
      const response = await apiClient.patch(
        `/user/profile/${userId}`,
        userData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log('User profile updated successfully:', response.data);
    } catch (error) {
      console.error('Error updating user profile:', error);
    }
  }

  const handleSubmit = () => {
    if (validateStep()) {
      setIsPdpaOpen(true);
    }
  };

  const handlePdpaSuccess = async () => {
    setUpload(true);
    updateUserProfile(formData)
      .then(async () => {
        if (!user) return;
        toast.success('ลงทะเบียนสำเร็จ');

        const isStaff = user.role == 'staff';
        const newPath = isStaff ? '/firstdate/staff/home' : '/register-done';

        await resetContext();
        router.push(newPath);
      })
      .catch(() => setUpload(false));
    console.log('Form submitted', formData);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="flex flex-col space-y-10">
            <h2 className="text-2xl font-bold text-center">อัปโหลดรูปภาพ</h2>
            <UploadProfilePicture onNext={() => setCurrentStep(1)} />
          </div>
        );
      case 1:
        return (
          <div className="flex flex-col space-y-4">
            <h2 className="text-2xl font-bold text-center">ข้อมูลส่วนตัว</h2>
            <label className="w-3/5">
              <span>คำนำหน้าชื่อ</span>
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
                <option value="อื่นๆ">อื่นๆ</option>
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

            <div className="flex flex-row justify-between gap-2">
              <label className="w-4/5 flex flex-col">
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
                      key={m.id}
                      value={m.id}
                    >
                      {m.name}
                    </option>
                  ))}
                </StyledSelect>
              </label>

              <label className="w-2/5 flex flex-col">
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

            <label className="flex flex-col">
              <span>เบอร์โทรศัพท์</span>
              <StyledInput
                type="text"
                name="tel"
                placeholder="เบอร์โทรศัพท์"
                value={formData.tel}
                onChange={handleInputChange}
                error={errors.includes('tel')}
              />
            </label>

            <div className="flex flex-col items-center gap-4">
              <Button
                variant="fuchsia"
                onClick={handleSubmit}
              >
                ยืนยันข้อมูล
              </Button>
              <Button
                variant="white"
                onClick={handlePrevStep}
              >
                ย้อนกลับ
              </Button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Border variant="white-brown">
      {upload && (
        <div className="z-[999] fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center">
          <Spinner />
        </div>
      )}
      <div className="my-auto flex flex-col items-center justify-center">
        <Image
          src={StarIcon}
          alt="star"
          className="mb-4"
        />
        <div className="w-full max-w-md">
          <div className="space-y-6">{renderStep()}</div>
        </div>
      </div>
      <Pdpa
        isOpen={isPdpaOpen}
        onOpenChange={setIsPdpaOpen}
        onSuccess={handlePdpaSuccess}
      />
    </Border>
  );
}

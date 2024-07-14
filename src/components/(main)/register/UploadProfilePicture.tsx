import React, { useState, useEffect, ChangeEvent } from 'react';
import { useAuth } from '@/context/AuthContext';
import { getAccessToken } from '@/utils/auth';
import { apiClient } from '@/utils/axios';
import Button from './Button';
import imgPlaceholder from '@public/register-placeholder.svg';
import Image from 'next/image';
import { Icon } from '@iconify/react/dist/iconify.js';
import Spinner from '@/components/firstdate/Spinner';

interface UploadProfilePictureProps {
  onNext?: () => void;
}

const UploadProfilePicture: React.FC<UploadProfilePictureProps> = ({
  onNext,
}) => {
  const [photo, setPhoto] = useState<File | null>(null);
  const [currentPhotoUrl, setCurrentPhotoUrl] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [uploading, setUploading] = useState<boolean>(false);
  const { user, resetContext } = useAuth();
  const userId = user?.id;

  useEffect(() => {
    if (user) {
      setCurrentPhotoUrl(user?.photoUrl);
    }
  }, [user]);

  const handlePhotoChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPhoto(file);
      setErrorMessage(null);
      setCurrentPhotoUrl(null);
      await handlePhotoUpload(file);
    }
  };

  const handlePhotoUpload = async (file: File) => {
    if (!file) return;

    const formData = new FormData();
    formData.append('picture', file);

    setUploading(true);
    try {
      const accessToken = await getAccessToken();
      const response = await apiClient.put(
        `/user/picture/${userId}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      console.log('Photo uploaded successfully:', response.data);
      setCurrentPhotoUrl(response.data.photo_url);
      resetContext();
    } catch (error) {
      console.error('Error uploading photo:', error);
    } finally {
      setUploading(false);
    }
  };

  const handleNextClick = () => {
    if (!photo && !currentPhotoUrl) {
      setErrorMessage('โปรดอัพโหลดรูปภาพ');
      return;
    }
    if (onNext) {
      onNext();
    }
  };

  return (
    <>
      {uploading && (
        <div className="fixed inset-0 -top-10 flex items-center justify-center bg-black bg-opacity-20 z-[999]">
          <Spinner />
        </div>
      )}
      <div className="relative mb-4">
        <div className="w-40 h-56 rounded-t-full p-2 bg-white rounded-lg flex items-center justify-center overflow-hidden border border-gray-300 shadow-md">
          {photo ? (
            <img
              src={URL.createObjectURL(photo)}
              alt="Profile"
              className="w-full h-full object-contain object-center rounded-t-full"
            />
          ) : currentPhotoUrl ? (
            <img
              src={currentPhotoUrl}
              alt="Profile"
              className="w-full h-full object-contain object-center rounded-t-full"
            />
          ) : (
            <div className="rounded-t-full -mt-6">
              <Image
                src={imgPlaceholder}
                alt="image-placeholder"
              />
            </div>
          )}
        </div>
        <input
          type="file"
          accept="image/*"
          onChange={handlePhotoChange}
          className="absolute inset-0 opacity-0 cursor-pointer"
        />
        <div className="absolute bottom-0 right-[50%] transform translate-x-1/2 translate-y-1/2 pointer-events-none">
          <div className="bg-project-fuchsia rounded-full p-2 flex items-center justify-center shadow-md">
            <Icon
              icon="gravity-ui:plus"
              className="text-2xl text-project-cream"
            />
          </div>
        </div>
      </div>
      {errorMessage && (
        <div className="text-red-500 mb-2 text-center">{errorMessage}</div>
      )}
      {onNext ? (
        <div className="flex flex-col items-center">
          <Button
            variant="pink"
            onClick={handleNextClick}
          >
            ต่อไป
          </Button>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default UploadProfilePicture;

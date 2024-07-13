import React, { useState, useEffect, ChangeEvent } from 'react';
import { useAuth } from '@/context/AuthContext';
import { getAccessToken } from '@/utils/auth';
import { apiClient } from '@/utils/axios';
import Spinner from '../Spinner';
import Button from './Button';

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
  const { user } = useAuth();
  const userId = user?.id;

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const accessToken = await getAccessToken();
        const response = await apiClient.get(`/user/${userId}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setCurrentPhotoUrl(response.data.user.photo_url);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    if (userId) {
      fetchUserProfile();
    }
  }, []);

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
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 z-[999]">
          <Spinner />
        </div>
      )}
      <div className="relative mb-4">
        <div className="w-40 h-56 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden border border-gray-300">
          {photo ? (
            <img
              src={URL.createObjectURL(photo)}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          ) : currentPhotoUrl ? (
            <img
              src={currentPhotoUrl}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-24 w-24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
          )}
        </div>
        <input
          type="file"
          accept="image/*"
          onChange={handlePhotoChange}
          className="absolute inset-0 opacity-0 cursor-pointer"
        />
        <div className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2">
          <div className="bg-pink-500 rounded-full p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0c-1.104 0-2 .896-2 2v2h-2c-1.104 0-2 .896-2 2s.896 2 2 2h2v2c0 1.104.896 2 2 2s2-.896 2-2v-2h2c1.104 0 2-.896 2-2s-.896-2-2-2h-2v-2c0-1.104-.896-2-2-2z" />
            </svg>
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

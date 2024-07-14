import React from 'react';
import Image from 'next/image';
import successicon from '@public/success.svg';
import { CheckIn } from '@/types/checkIn';
interface FailureModalProps {
  isOpen: boolean;
  message: string;
  onClose: () => void;
  userData: CheckIn | null;
}

const FailureModal: React.FC<FailureModalProps> = ({
  isOpen,
  onClose,
  userData,
}) => {
  const modalClasses = `fixed inset-0 z-50 overflow-y-auto bg-gray-500 bg-opacity-75 transition-all ease-in-out duration-300 ${
    isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
  }`;

  const modalContentClasses = `relative w-72 h-60 bg-white rounded-lg shadow-lg`;

  return (
    <div
      className={modalClasses + ' flex justify-center items-center text-center'}
    >
      <div className={modalContentClasses}>
        <h2 className="text-xl font-semibold mt-6 mb-4">Confirmation!</h2>
        <div className="flex justify-center items-center">
          {' '}
          <Image
            src={successicon}
            alt="success"
          />
        </div>

        <h1 className="text-center mt-5">สแกนสำเร็จ ยินดีต้อนรับ</h1>
        <h1 className="text-center text-project-fuchsia">
          {userData?.firstName} {userData?.lastName}{' '}
          {userData?.checkIn.email.split('@').at(0)}
        </h1>
        <div className="flex flex-col items-center mx-auto justify-center">
          <button
            onClick={onClose}
            className="mt-5 w-32 h-10 text-white rounded-lg bg-project-fuchsia flex justify-center items-center"
          >
            สแกนต่อ
          </button>
        </div>
      </div>
    </div>
  );
};

export default FailureModal;

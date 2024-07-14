import React from 'react';
import Image from 'next/image';
import Failicon from '@public/fail.svg';
interface FailModalProps {
  isOpen: boolean;
  message: string;
  onClose: () => void;
}

const FailModal: React.FC<FailModalProps> = ({ isOpen, onClose }) => {
  const modalClasses = `fixed inset-0 z-50 overflow-y-auto bg-gray-500 bg-opacity-75 transition-all ease-in-out duration-300 ${
    isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
  }`;

  const modalContentClasses = `relative w-72 h-60 bg-white rounded-lg shadow-lg`;

  return (
    <div
      className={modalClasses + ' flex justify-center items-center text-center'}
    >
      <div className={modalContentClasses}>
        <h2 className="text-xl font-semibold mt-6 mb-4">Invalid QR-Code</h2>
        <div className="flex justify-center items-center">
          {' '}
          <Image
            src={Failicon}
            alt="Fail"
          />
        </div>

        <h1 className="text-center mt-5">สแกนไม่สำเร็จ โปรดลองอีกครั้ง</h1>
        <div className="flex flex-col items-center mx-auto justify-center">
          <button
            onClick={onClose}
            className="mt-5 w-32 h-10 text-white rounded-lg bg-project-fuchsia flex justify-center items-center"
          >
            สแกนอีกครั้ง
          </button>
        </div>
      </div>
    </div>
  );
};

export default FailModal;

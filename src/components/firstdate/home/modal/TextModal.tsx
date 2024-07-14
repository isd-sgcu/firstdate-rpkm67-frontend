import React from 'react';
import BorderLeftDown from '@public/stamp/border-left-down.svg';
import BorderRightDown from '@public/stamp/border-right-down.svg';
import BorderLeft from '@public/stamp/border-left.svg';
import BorderRight from '@public/stamp/border-right.svg';
import Image from 'next/image';

interface ModalProps {
  title: string;
  placeholder: string;
  onClose: () => void;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
  children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  title,
  placeholder,
  onClose,
  value,
  onChange,
  onClick,
  children,
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="flex flex-col items-center justify-center bg-white p-6 space-y-6 rounded-3xl shadow-lg max-w-md w-full">
        <div className="flex justify-between items-center w-full mb-4">
          <Image
            src={BorderLeft}
            alt="border-left"
          />
          <Image
            src={BorderRight}
            alt="border-right"
          />
        </div>
        <h1 className="text-3xl font-semibold mb-2 text-center">{title}</h1>
        {children}
        <div className="mb-4 w-full px-8">
          <input
            type="text"
            placeholder={placeholder}
            className="w-full h-12 border border-black text-xl rounded-lg placeholder-gray-400 px-4" // Adjust padding
            value={value}
            onChange={onChange}
          />
        </div>
        <button
          onClick={() => {
            onClick && onClick();
            onClose();
          }}
          className="text-black px-10 py-2 rounded-xl max-w-lg text-xl font-normal bg-project-pink"
        >
          ส่งคำตอบ
        </button>
        <div className="flex justify-between items-center w-full mt-4">
          <Image
            src={BorderLeftDown}
            alt="border-left-down"
          />
          <Image
            src={BorderRightDown}
            alt="border-right-down"
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;

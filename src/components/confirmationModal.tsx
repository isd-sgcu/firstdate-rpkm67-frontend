// components/ConfirmationModal.tsx
import Link from 'next/link';
import React, { useState } from 'react';

interface ConfirmationModalProps {
  isOpen: boolean;
  title: string;
  message: string;
  onConfirm: () => void;
  onClose: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  isOpen,
  title,
  message,
  onConfirm,
  onClose,
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleConfirm = async () => {
    setIsSubmitting(true);
    try {
      await onConfirm();
      onClose();
    } catch (error) {
      console.error('Confirmation failed:', error);
      setIsSubmitting(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  const modalClasses = `fixed inset-0 z-50 overflow-y-auto bg-gray-500 bg-opacity-75 transition-all ease-in-out duration-300 ${
    isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
  }`;

  const modalContentClasses = `relative w-80 h-80 bg-white rounded-lg shadow-lg`;

  return (
    <div
      className={modalClasses + ' flex justify-center items-center text-center'}
    >
      <div className={modalContentClasses}>
        <h2 className="text-xl font-semibold mt-6 mb-4">{title}</h2>
        <h1 className="text-center mt-5">รายละเอียด</h1>
        <div className="border border-b-black mx-16 mt-6"></div>
        <h1 className="text-center mt-6">เงื่อนไข</h1>
        <div className="flex flex-col items-center mx-auto justify-center">
          <button
            onClick={handleConfirm}
            // href="rewarddone"
            className="mt-3 w-64 h-12 font-medium text-white text-xl rounded-lg bg-project-fuchsia flex justify-center items-center"
          >
            ยืนยันการแลกรับรางวัล
          </button>
          <Link
            href=""
            className="mt-4 w-64 h-12 font-medium text-black text-xl rounded-lg border-black border flex justify-center items-center"
            onClick={onClose}
          >
            ยกเลิก
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;

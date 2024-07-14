import React, { useRef } from 'react';
import BorderLeftDown from '@public/stamp/border-left-down.svg';
import BorderRightDown from '@public/stamp/border-right-down.svg';
import BorderLeft from '@public/stamp/border-left.svg';
import BorderRight from '@public/stamp/border-right.svg';
import Image from 'next/image';

interface OTPModalProps {
  activityId: string;
  activityName: string;
  onClose: () => void;
  onSubmit: (activityId: string, pin_code: string) => void;
}

const OTPModal: React.FC<OTPModalProps> = ({
  activityId,
  activityName,
  onClose,
  onSubmit,
}) => {
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
  const pinCodeRef = useRef<string>('');

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = e.target;

    if (value.length === 1 && index < inputsRef.current.length - 1) {
      inputsRef.current[index + 1]?.focus();
    }

    // Update the pin code
    pinCodeRef.current = inputsRef.current
      .map((input) => input?.value || '')
      .join('');

    // Check if pin code is complete
    if (pinCodeRef.current.length === 6) {
      onSubmit(activityId, pinCodeRef.current);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="flex flex-col items-center justify-center bg-white p-6 rounded-3xl shadow-lg max-w-md w-full">
        <div className="flex justify-between items-center w-full">
          <Image
            src={BorderLeft}
            alt="border-left"
          />
          <Image
            src={BorderRight}
            alt="border-right"
          />
        </div>
        <div className="flex flex-col items-center justify-center space-y-10">
          <div className="flex flex-col items-center justify-center space-y-8">
            <h1 className="text-4xl font-semibold text-center">
              {activityName}
            </h1>
            <div className="flex space-x-2">
              {Array(6)
                .fill(0)
                .map((_, index) => (
                  <input
                    key={index}
                    ref={(el) => {
                      inputsRef.current[index] = el;
                    }}
                    type="text"
                    maxLength={1}
                    inputMode="numeric"
                    pattern="[0-9]*"
                    placeholder="0"
                    className="w-14 h-14 border border-black text-center text-xl rounded-lg placeholder-gray-400"
                    onChange={(e) => handleInputChange(e, index)}
                  />
                ))}
            </div>
            <div className="flex items-center justify-center flex-col">
              <h3 className="font-normal text-xl">
                กรุณากรอก OTP เพื่อทำการยืนยันกิจกรรม
              </h3>
              <p className="font-normal underline">สถานที่รับ OTP</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white px-10 py-2 rounded-xl max-w-lg text-xl font-semibold bg-project-fuchsia"
          >
            ย้อนกลับ
          </button>
        </div>
        <div className="flex justify-between items-center w-full">
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

export default OTPModal;

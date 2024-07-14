import React from 'react';
import Image from 'next/image';

interface BottomButtonProps {
  onClick: () => void;
  src: string;
  text: string;
}

const BottomButton: React.FC<BottomButtonProps> = ({ onClick, src, text }) => {
  return (
    <div className="flex flex-col items-center text-center gap-y-[0.44vh]">
      <button
        className="w-[4.8vh] h-[4.8vh] rounded-full flex justify-center items-center shadow-[0px_3px_4px_.5px_#00000048] hover:scale-105"
        onClick={onClick}
      >
        <Image
          src={src}
          alt={`${text} Icon`}
          style={{ width: '2.63vh', height: '2.63vh' }}
        />
      </button>
      <div>{text}</div>
    </div>
  );
};

export default BottomButton;

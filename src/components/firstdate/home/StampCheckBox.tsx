import React from 'react';
import Image from 'next/image';

interface StampCheckBoxProps {
  text: string;
  stampImage: string;
  collected?: boolean;
  onClick?: () => void;
}

const StampCheckBox: React.FC<StampCheckBoxProps> = ({
  text,
  stampImage,
  collected,
  onClick,
}) => {
  return (
    <div
      className="flex flex-col items-center space-y-1"
      onClick={onClick}
    >
      {collected ? (
        <Image
          src={stampImage}
          alt="Stamp"
          className="w-11 h-11"
        />
      ) : (
        <div className="w-11 h-11 bg-white shadow-md"></div>
      )}
      <p className="text-[0.55rem] max-w-16 text-center">{text}</p>
    </div>
  );
};

export default StampCheckBox;

import React from 'react';
import { Icon } from '@iconify/react';

interface EmergencyCallProps {
  text: string;
  phoneNumber: string;
}

const EmergencyCallBlock: React.FC<EmergencyCallProps> = ({
  text,
  phoneNumber,
}) => {
  return (
    <div className="shadow-[0_2px_4px_0px_rgba(0,0,0,0.25)] rounded-xl flex items-center flex-row justify-between px-3 py-1">
      <div className="flex flex-col gap-y-1">
        <p className="font-athiti text-base	font-medium text-black text-nowrap">
          {text}
        </p>
        <p className="font-athiti text-base	font-medium text-black opacity-50">
          {phoneNumber}
        </p>
      </div>
      <div className="flex justify-center items-center">
        <a href={`tel:${phoneNumber}`}>
          <button className="shadow-[0_0_4px_0px_rgba(0,0,0,0.25)] flex rounded-full flex-cols size-11 bg-project-fuchsia justify-center items-center">
            <Icon
              icon="fluent:call-connecting-20-filled"
              className="text-white"
              width={24}
              height={24}
            />
          </button>
        </a>
      </div>
    </div>
  );
};

export default EmergencyCallBlock;

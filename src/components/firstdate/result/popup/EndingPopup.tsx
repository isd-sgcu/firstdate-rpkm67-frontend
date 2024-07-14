import Image from 'next/image';
import React, { useCallback } from 'react';
import BACKGOUNDIMG from '@public/ending/popup/background.svg';
import Link from 'next/link';

interface EndingPopupProps {
  onOpenChange: (isOpen: boolean) => void;
}

const EndingPopup: React.FC<EndingPopupProps> = (props) => {
  const { onOpenChange } = props;
  const handleOnClick = useCallback(() => {
    onOpenChange(false);
  }, [onOpenChange]);

  return (
    <div className="relative w-[80%] max-w-[373px] min-h-[calc(100vw*(235/373))] flex items-center justify-center">
      <Image
        alt="backgound"
        src={BACKGOUNDIMG}
        quality={100}
        fill
        className="z-[-1]"
      />
      <div className="text-2xl">
        <div className="text-white text-center mb-6">
          ต้องการสิ้นสุดการเดินทาง ?
        </div>
        <div className="flex justify-center gap-4">
          <button
            onClick={handleOnClick}
            className="bg-white rounded-md text-project-light-gray px-4"
          >
            ยกเลิก
          </button>
          <Link href={'/firstdate/result'}>
            <button className="bg-project-fuchsia text-white rounded-md px-4">
              ตกลง
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EndingPopup;

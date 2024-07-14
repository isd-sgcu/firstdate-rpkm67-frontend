import CongratsWhite from '@public/congrats/congratsWhite.png';
import CongratsBlack from '@public/congrats/congratsBlack.png';
import CongratsIcon from '@public/congrats/congratsIcon.svg';
import Image from 'next/image';
import { Icon } from '@iconify/react/dist/iconify.js';
import Link from 'next/link';

interface CongratsPopupProps {
  score: number;
  handleOnClose: () => void;
}
const CongratsPopup: React.FC<CongratsPopupProps> = ({
  score,
  handleOnClose,
}) => {
  const isCollectAll = score === 11;
  return (
    <div
      style={{
        backgroundImage: isCollectAll
          ? `url(${CongratsBlack.src})`
          : `url(${CongratsWhite.src})`,
      }}
      className={`w-full aspect-[333/535] bg-contain bg-no-repeat bg-center flex flex-col items-center pt-[20%]`}
    >
      <div className="flex h-[10%] items-center">
        <span
          className={`font-athiti font-semibold text-2xl md:text-3xl ${isCollectAll ? 'text-white' : 'text-project-fuchsia'}`}
        >
          ยินดีด้วย
        </span>
      </div>
      <div className="flex flex-1 justify-evenly flex-col w-full items-center pt-[10%] pb-[15%]">
        <Image
          src={CongratsIcon}
          alt="congratsIcon"
          className="w-1/3 aspect-square"
        />
        <span
          className={`text-center font-athiti font-medium text-xl mt-8 ${isCollectAll && 'text-white'}`}
        >
          ตอนนี้สะสมครบ
          <span className="font-semibold">
            {isCollectAll ? 'ครบทั้งหมด' : ` ${score} แต้ม`}
          </span>
          แล้ว!
          <br />
          สามารถแลกรับของรางวัลได้เลย!
        </span>
        <div className="flex flex-col px-[15%] items-center w-full mt-4 gap-5">
          <Link
            className="w-full h-12 flex items-center justify-center rounded-lg bg-project-fuchsia gap-1"
            href="/firstdate/reward"
          >
            <Icon
              icon="solar:gift-bold"
              className="text-white w-6 h-6"
            />
            <span className="font-athiti font-medium text-xl text-white">
              แลกรับเลย!
            </span>
          </Link>
          <button
            className="w-full h-12 flex items-center justify-center rounded-lg bg-project-cream gap-1"
            onClick={handleOnClose}
          >
            <span className="font-athiti font-medium text-xl">
              กลับไปเดินทางต่อ
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CongratsPopup;

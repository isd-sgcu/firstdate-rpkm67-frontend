import Image from 'next/image';
import EmergencyIcon from '@public/emergency-contact/emergency-icon.svg';

export default function EmergencyCircles() {
  return (
    <div className="mt-2 flex flex-col gap-y-4 items-center">
      <p className="font-athiti font-medium">เหตุฉุกเฉิน</p>
      <div className="size-[221px] bg-project-gray/50 rounded-full flex flex-col items-center justify-center">
        <div className="size-[185px] bg-project-gray rounded-full flex flex-col items-center justify-center">
          <a href="tel:022180000">
            <div className="size-[163px] bg-project-fuchsia rounded-full flex flex-col items-center justify-center">
              <Image
                src={EmergencyIcon}
                alt="emergency icon"
                className=""
              ></Image>
              <p className="text-white text-xs">ศูนย์ รปภ. จุฬาฯ</p>
              <p className="text-white text-xs">02-218-0000</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

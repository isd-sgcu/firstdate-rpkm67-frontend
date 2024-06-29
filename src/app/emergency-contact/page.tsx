import Border from '@/components/Border';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import EmergencyCallBlock from '@/components/emergency-contact/emergency-call-block';
import object from '@/assets/emergency-contact/Objects.svg';
import EmergencyIcon from '@/assets/emergency-contact/emergency-icon.svg';

export default function Emergency() {
  return (
    <main className="w-full h-screen flex justify-center items-center flex-col">
      <Border variant="transparent">
        <div className="mt-7 flex flex-col items-center">
          <h1 className="text-center text-4xl text-balance font-season italic ">
            Emergency Contact
          </h1>
          <Image
            src={object}
            alt="object"
          ></Image>
        </div>
        <div className="mt-2 flex flex-col gap-y-4 items-center">
          <p className="font-athiti font-medium">เหตุฉุกเฉิน</p>
          <div className="size-[221px] bg-project-gray/50 rounded-full flex flex-col items-center justify-center">
            <div className="size-[185px] bg-project-gray rounded-full flex flex-col items-center justify-center">
              <a href="tel:022180000">
                <div className="size-[163px] bg-project-fuchsia rounded-full flex flex-col items-center justify-center text-white text-xs">
                  <Image
                    src={EmergencyIcon}
                    alt="emergency icon"
                    className=""
                  ></Image>
                  <p className="">ศูนย์ รปภ. จุฬาฯ</p>
                  <p>02-218-0000</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex flex-col gap-y-3">
            <EmergencyCallBlock
              text="เหตุภายนอกมหาวิทยาลัย"
              phoneNumber="191"
            />
            <EmergencyCallBlock
              text="อุบัติเหตุร้ายแรง"
              phoneNumber="1669"
            />
          </div>
        </div>
        <div className="flex flex-col gap-y-4 mt-8 items-center">
          <Image
            src={object}
            alt="object"
          ></Image>
          <a href="/home">
            <button className="w-64 p-2 rounded-lg border-[1px] border-project-fuchsia">
              <div className="w-full flex flex-row gap-x-2 text-project-fuchsia justify-center items-center">
                <Icon
                  icon="ion:chevron-back"
                  width={24}
                  height={24}
                />
                <p className="font-athiti text-xl font-medium">
                  กลับสู่หน้าหลัก
                </p>
              </div>
            </button>
          </a>
        </div>
      </Border>
    </main>
  );
}

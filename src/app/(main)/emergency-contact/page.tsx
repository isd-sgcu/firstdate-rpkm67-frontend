import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import object from '@public/emergency-contact/Objects.svg';
import EmergencyCircles from '@/components/firstdate/emergency-contact/EmergencyCircles';
import EmergencyCallBlock from '@/components/firstdate/emergency-contact/EmergencyCallBlock';
import Border from '@/components/firstdate/Border';

export default function Emergency() {
  return (
    <Border variant="transparent">
      <div className="mt-[20%] flex flex-col items-center gap-y-3">
        <h1 className="w-4/5 text-center font-light text-4xl font-season italic ">
          Emergency Contact
        </h1>
        <Image
          src={object}
          alt="object"
        ></Image>
      </div>
      <EmergencyCircles />
      <div className="mt-4 flex flex-col gap-y-3 w-3/4">
        <EmergencyCallBlock
          text="เหตุภายนอกมหาวิทยาลัย"
          phoneNumber="191"
        />
        <EmergencyCallBlock
          text="อุบัติเหตุร้ายแรง"
          phoneNumber="1669"
        />
      </div>
      <div className="w-full flex flex-col gap-y-4 mt-7 items-center">
        <Image
          src={object}
          alt="object"
        ></Image>
        <Link
          className="w-[60%] p-2 rounded-lg border-[1px] border-project-fuchsia"
          href="/home"
        >
          <div className="flex flex-row gap-x-2 text-project-fuchsia justify-center items-center">
            <Icon
              icon="ion:chevron-back"
              width={24}
              height={24}
            />
            <p className="font-athiti text-xl font-medium text-nowrap">
              กลับสู่หน้าหลัก
            </p>
          </div>
        </Link>
      </div>
    </Border>
  );
}

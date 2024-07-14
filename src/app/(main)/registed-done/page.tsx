import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import SGCUlogo from '@public/registered/SGCUlogo.svg';
import CU108 from '@public/registered/CU108.svg';
import sparkle from '@public/registered/sparkle.svg';
import registered from '@public/registered/registered.png';
import dot from '@public/registered/dot.svg';
import Border from '@/components/firstdate/Border';
import Flowers from '@/components/(main)/finish-register/flowers';

export default function Registered() {
  return (
    <Border
      variant="white-brown"
      className="p-[10%]"
    >
      <div>
        <Image
          src={SGCUlogo}
          alt="SGCU logo"
        ></Image>
      </div>
      <div className="flex flex-col items-center mt-20 mb-11 z-10">
        <h1 className="text-project-brown font-season italic text-5xl font-bold">
          Welcome,
        </h1>
        <Image
          className="-mt-1"
          src={CU108}
          alt="CU108"
        ></Image>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex flex-row justify-between w-11/12 z-10">
          <Image
            src={sparkle}
            alt="left sparkle"
          ></Image>
          <Image
            src={sparkle}
            alt="right sparkle"
            className="scale-x-[-1]"
          ></Image>
        </div>
        <Image
          src={registered}
          alt="registered"
          className="-mt-16"
        ></Image>
      </div>
      <div className="my-5">
        <Image
          src={dot}
          alt="dot"
        ></Image>
      </div>
      <div className="font-athiti text-base font-semibold text-center text-nowrap z-10">
        <p>‘แล้วพบกัน’</p>
        <p>วันที่ 21 กรกฎาคม | เวลา 8.00 น.</p>
        <p>จุฬาลงกรณ์มหาวิทยาลัย</p>
      </div>
      <div className="w-5/6 mt-9 z-10">
        <Link
          href="/home"
          className="flex flex-row items-center justify-center bg-project-fuchsia px-2 py-[10px] gap-x-2 rounded-lg text-white"
        >
          <Icon
            icon="fluent:home-48-filled"
            width={24}
            height={24}
          ></Icon>
          <p className="font-athiti text-xl font-medium">เข้าสู่หน้าหลัก</p>
        </Link>
      </div>
      <Flowers />
    </Border>
  );
}

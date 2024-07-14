'use client';

import FDLogo from '@public/FIrst Date Logo.svg';
import spark from '@public/spark.png';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import Border from '@/components/firstdate/Border';
import MenuList from '@/components/firstdate/MenuList';
import EndingPopupModal from '@/components/firstdate/result/popup/EndingPopupModal';

export default function RewardDone() {
  const [isOpenEndingModal, setIsOpenEndingModal] = useState<boolean>(false);

  return (
    <>
      <Border
        variant="white-brown"
        className="flex flex-col"
      >
        <Image
          src={FDLogo}
          alt="logo"
          className="w-[60%] my-[20%]"
        />
        <h1 className="text-3xl text-center font-semibold text-project-light-gray mb-1">
          แลกรับของรางวัล
          <br />
          สำเร็จ!
        </h1>{' '}
        <Image
          src={spark}
          alt="reward"
          className="w-48 h-auto mt-6 mb-16"
        />
        <button
          onClick={() => setIsOpenEndingModal(true)}
          className="mt-4 w-[70%] py-2 font-medium text-white text-xl rounded-lg bg-project-fuchsia flex justify-center items-center"
        >
          สิ้นสุดการเดินทาง
        </button>
        <Link
          href={'/firstdate/home'}
          className="mt-4 w-[70%] py-2 font-medium text-black text-xl rounded-lg border-black border flex justify-center items-center"
        >
          กลับไปเดินทางต่อ
        </Link>
      </Border>
      <MenuList isRewardPage />
      <EndingPopupModal
        isOpen={isOpenEndingModal}
        onOpenChange={setIsOpenEndingModal}
      />
    </>
  );
}

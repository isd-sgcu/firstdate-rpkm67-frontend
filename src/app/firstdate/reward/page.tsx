'use client';

import FDLogo from '@public/FIrst Date Logo.svg';
import line from '@public/line.svg';
import RewardPlaceholder from '@public/reward/reward-placeholder.svg';
import gift from '@public/gift.svg';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { patchReward } from '@/utils/user';
import { useRouter } from 'next/navigation';
import Border from '@/components/firstdate/Border';
import ConfirmationModal from '@/components/firstdate/confirmationModal';
import NotificationModal from '@/components/firstdate/congratulation/NotificationModal';
import MenuList from '@/components/firstdate/MenuList';

export default function Reward() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const [isOpenCondition, setIsOpenCondition] = useState(false);

  async function handleRedeem() {
    const isSuccess = await patchReward();
    if (isSuccess) {
      router.push('/firstdate/reward-done');
    } else {
      console.log('error patch reward');
    }
  }

  return (
    <>
      <Border
        variant="white-brown"
        className="flex flex-col"
      >
        <Image
          src={FDLogo}
          alt="logo"
          className="w-44 my-[10%]"
        />
        <h1 className="text-3xl text-center font-semibold text-project-light-gray mb-1">
          แลกรับของรางวัล
        </h1>{' '}
        <h1 className="text-xl text-center font-semibold text-project-light-gray mb-3">
          กรุณาแสดงหน้านี้กับเจ้าหน้าที่
        </h1>
        <div className="w-[70%] mx-auto">
          <Image
            src={RewardPlaceholder}
            alt="reward-image"
            className="mx-auto"
          />
        </div>
        <p
          className="text-center underline cursor-pointer mt-2"
          onClick={() => setIsOpenCondition(true)}
        >
          รายละเอียด เงื่อนไขต่างๆ
        </p>
        <h1 className="text-center font-bold mt-2">สถานที่รับรางวัล</h1>
        <div className="text-center mt-1 mx-5">รอโทนี่</div>
        <Image
          src={line}
          alt="Line"
          className="w-56 h-3 mb-3"
        />
        <h1 className="text-center font-semibold text-project-fuchsia">
          *สำหรับเจ้าหน้าที่
        </h1>
        <button
          onClick={() => setIsOpen(true)}
          className="mt-4 w-[60%] py-2 font-medium text-white text-xl rounded-lg bg-project-fuchsia flex justify-center items-center"
        >
          <Image
            src={gift}
            alt="gift"
            className="mr-2 w-6 h-6"
          />
          แลกรับเลย!
        </button>
        <Link
          href="/firstdate/home"
          className="mt-4 w-[60%] py-2 font-medium text-black text-xl rounded-lg border-black border flex justify-center items-center"
        >
          กลับ
        </Link>
        <ConfirmationModal
          isOpen={isOpen}
          title="ยืนยันการแลกรับของรางวัล"
          onClose={() => setIsOpen(false)}
          handleRedeem={handleRedeem}
        />
        <NotificationModal
          isOpen={isOpenCondition}
          onOpenChange={setIsOpenCondition}
        />
      </Border>
      <MenuList isRewardPage />
    </>
  );
}

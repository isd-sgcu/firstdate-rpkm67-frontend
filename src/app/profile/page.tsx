'use client';

import Border from '@/components/Border';
import FDLogo from '@public/FIrst Date Logo.svg';
import bowLine from '@public/stat/bowline.svg';
import MenuList from '@/components/MenuList';
import Image from 'next/image';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import UserInfo from '@/components/profile/userInfo';
import StatBars from '@/components/profile/statBars';

export default function Profile() {
  const { user } = useAuth();
  if (!user) return;

  return (
    <>
      <div className="relative flex justify-center items-center w-full">
        <Border variant="light-pink">
          <div className="absolute top-[7%] w-[70%] flex flex-col items-center z-10">
            <Image
              src={FDLogo}
              alt="logo"
              className="w-[60%] mb-2"
            />
            <UserInfo user={user} />
            <Image
              src={bowLine}
              alt="bowLine"
              className="w-[45%] mb-3 mt-1"
            />
            <StatBars stamp={user?.stamp} />
          </div>
          <div className="absolute bottom-[5%] w-[65%] h-[6%] z-10 drop-shadow">
            <Link
              href="/firstdate/home"
              className="flex flex-row items-center justify-center bg-project-pink px-2 py-[10px] h-[100%] gap-x-2 rounded-lg text-white"
            >
              <p className="font-athiti text-xl font-medium text-black">
                กลับไปเดินทางต่อ
              </p>
            </Link>
          </div>
        </Border>
        <MenuList />
      </div>
    </>
  );
}

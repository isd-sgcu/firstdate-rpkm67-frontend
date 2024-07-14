'use client';

import FDLogo from '@public/FIrst Date Logo.svg';
import placeholder from '@public/placeholder.svg';
import Image from 'next/image';
import { Icon } from '@iconify/react/dist/iconify.js';
import { useAuth } from '@/context/AuthContext';
import Border from '@/components/firstdate/Border';
import MenuList from '@/components/firstdate/MenuList';
import { getMajorNameById } from '@/utils/register';

export default function AdminInfo() {
  const { user, logout } = useAuth();
  return (
    <main className="flex justify-center items-center flex-col bg-2">
      <Border
        variant="light-pink-2"
        className="flex flex-col"
      >
        <Image
          src={FDLogo}
          alt="logo"
          className="w-44 mt-5 mb-5"
        />
        <div className="relative w-36 h-48 rounded-t-full bg-white drop-shadow-xl flex items-center justify-center overflow-hidden">
          <Image
            src={user?.photoUrl || placeholder}
            alt="profile"
            fill
            className="p-1.5 rounded-t-full object-center object-contain"
          />
        </div>

        <div className="flex justify-center items-center text-2xl gap-2 font-semibold mt-4">
          <div>{user?.firstname}</div>
          <div>#{user?.year}</div>
        </div>
        <div>{user && getMajorNameById(user?.faculty)}</div>
        <div className="text-lg mt-2 text-gray-500">
          {user?.email.split('@')[0]}
        </div>
      </Border>
      <div className="absolute bottom-28 flex flex-col items-center">
        <Icon
          icon="humbleicons:logout"
          className="cursor-pointer w-12 h-12 p-3 rounded-full bg-white text-black shadow-lg"
          onClick={() => {
            logout();
          }}
        />
        <span className="font-athiti font-medium">ออกจากระบบ</span>
      </div>
      <MenuList />
    </main>
  );
}

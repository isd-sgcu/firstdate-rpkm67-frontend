import { Icon } from '@iconify/react';
import { User } from '@/types/user';
import { cn } from '@/lib/utils';
import placeholder from '@public/placeholder.svg';
import Image from 'next/image';
import Link from 'next/link';

interface UserInfoProps {
  user: User;
}

export default function UserInfo({ user }: UserInfoProps) {
  return (
    <div className="w-auto h-full">
      <div className="flex justify-center gap-2">
        <div className="flex justify-center items-center w-[66px]">
          <Link
            className="mt-8 flex items-center flex-col"
            href="/edit"
          >
            <Icon
              icon="ri:edit-fill"
              className="size-11 p-2.5 rounded-full bg-white text-black drop-shadow"
            />
            <span className="text-center font-medium text-base">
              แก้ไขข้อมูล
            </span>
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center text-center">
          <div className="flex justify-center items-center w-[16vh] h-[22vh] mb-2 bg-white rounded-t-full drop-shadow">
            <Image
              src={user?.photoUrl || placeholder}
              alt="profile"
              fill
              className={cn('w-full rounded-t-full p-1.5', {
                'object-cover': user?.photoUrl,
              })}
            />
          </div>
          <div className="flex justify-center items-center font-semibold text-xl gap-2 max-w-36">
            <span>{user?.firstname}</span>
            <span>{user?.lastname}</span>
            <span>#{user?.year}</span>
          </div>
          <span className="font-semibold text-xl">{user?.faculty}</span>
        </div>
        <div className="flex justify-center items-center w-[66px]">
          <Link
            className="mt-8 flex items-center flex-col"
            href="/firstdate/map"
          >
            <Icon
              icon="material-symbols:map"
              className="size-11 p-2.5 rounded-full bg-white text-black drop-shadow"
            />
            <span className="text-center font-medium text-base">แผนที่</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

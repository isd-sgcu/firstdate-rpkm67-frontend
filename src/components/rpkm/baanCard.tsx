import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { cn } from '@/lib/utils';
// import { useState } from 'react';

import baan from '@/../public/baanCard/baan.svg';
import Badge from '@/components/rpkm/sizeBadge';

interface BaanCardProps {
  image: string | undefined;
  name: string;
  size: 'S' | 'M' | 'L' | 'XL' | 'XXL';
  number: number; // dunno what to call it
  isShake: boolean;
}

export default function page({
  image,
  name,
  size,
  number,
  isShake,
}: BaanCardProps) {
  return (
    <div
      className={cn(
        'w-[100px] h-[140px] bg-white p-1 flex flex-col gap-y-1 shadow-[0_2px_4px_0px_rgba(0,0,0,0.25)]',
        { 'animate-shake': isShake }
      )}
    >
      <Image
        src={image ? image : baan}
        alt="Baan image"
        className="w-full"
      ></Image>
      <div className="flex flex-row justify-between items-center">
        <div className="text-project-light-gray font-medium text-xs">
          {name}
        </div>
        <Badge baanSize={size}></Badge>
      </div>
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row gap-x-[2px] items-center">
          <div className="text-[9px]">
            <span className="text-[#68A987]">{number}</span>/500
          </div>
          <Icon
            icon="ic:round-person"
            width={12}
            height={12}
          ></Icon>
        </div>
        <Link href={'/somewhere'}>
          <Icon icon="mingcute:arrows-right-line"></Icon>
        </Link>
      </div>
    </div>
  );
}

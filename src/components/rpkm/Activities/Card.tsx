import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';

interface CardProps {
  name: string;
  image: string;
  imageClassName?: string;
  content: string;
  href: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  name,
  className,
  image,
  imageClassName,
  href,
  content,
}) => {
  return (
    <div className="drop-shadow-lg">
      <div
        className={cn(
          'bg-[#FFFEF7] [clip-path:polygon(1rem_0,calc(100%-1rem)_0,100%_1rem,100%_calc(100%-1rem),calc(100%-1rem)_100%,1rem_100%,0_calc(100%-1rem),0_1rem)] flex flex-col p-5 text-[#313131]',
          className
        )}
      >
        <p className="font-semibold text-center w-full">{name}</p>
        <Image
          src={image}
          alt="activity image"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: 'auto', height: 'auto' }}
          className={cn('w-full', imageClassName)}
        />
        <div className="flex flex-col gap-y-[2px] mt-1">
          <hr className="h-[2px] bg-[#414643] w-full" />
          <hr className="h-[2px] bg-[#414643] w-full" />
        </div>
        <p className="text-sm m-2">{content}</p>
        <Link
          className="flex w-full justify-end text-sm font-semibold underline"
          href={href}
        >
          ดูทั้งหมด
        </Link>
      </div>
    </div>
  );
};

export default Card;
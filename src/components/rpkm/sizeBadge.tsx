import { Icon } from '@iconify/react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  baanSize: 'S' | 'M' | 'L' | 'XL' | 'XXL';
}

const badgeColors = {
  S: {
    background: 'text-[#EAE3C3]',
    textStyle: 'text-[#183F86] text-[8px] top-[2px] left-[5.7px]',
  },
  M: {
    background: 'text-[#EFD08B]',
    textStyle: 'text-[#183F86] text-[8px] top-[2px] left-[5px]',
  },
  L: {
    background: 'text-[#67AB88]',
    textStyle: 'text-[#183F86] text-[8px] top-[2px] left-[6.2px]',
  },
  XL: {
    background: 'text-[#EB9096]',
    textStyle: 'text-[#000] text-[8px] top-[2px] left-[3.5px]',
  },
  XXL: {
    background: 'text-[#414643]',
    textStyle: 'text-[#FFF] text-[5px] top-[4px] left-[3.5px]',
  },
};

export default function badge({ baanSize }: BadgeProps) {
  const { background, textStyle } = badgeColors[baanSize];
  return (
    <div className="relative">
      <Icon
        icon="typcn:starburst"
        className={background}
      ></Icon>
      <span className={cn('absolute font-semibold', textStyle)}>
        {baanSize}
      </span>
    </div>
  );
}

import { cn } from '@/lib/utils';
import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';

interface MenuIconProps {
  isActive: boolean;
  handleOnClick: () => void;
  name: string;
  iconify: string;
}

const MenuIcon = (props: MenuIconProps) => {
  const { isActive, handleOnClick, name, iconify } = props;

  return (
    <div className="flex flex-col items-center justify-center">
      <Icon
        icon={iconify}
        className={cn('w-11 h-11 p-3 rounded-full cursor-pointer', {
          'bg-project-fuchsia text-white': isActive,
          'bg-white text-black': !isActive,
        })}
        onClick={handleOnClick}
      />
      <span className="font-athiti font-medium">{name}</span>
    </div>
  );
};

export default MenuIcon;

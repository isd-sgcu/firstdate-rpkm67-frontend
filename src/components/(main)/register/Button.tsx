import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps {
  variant: 'pink' | 'white' | 'fuchsia';
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant,
  children,
  onClick,
  className,
}) => {
  const baseStyles =
    'w-32 h-12 font-medium text-xl rounded-lg flex items-center justify-center drop-shadow-md';
  const variantStyles = {
    pink: 'bg-project-pink text-black',
    white: 'bg-white text-project-fuchsia border-[1px] border-project-fuchsia',
    fuchsia: 'bg-project-fuchsia text-white',
  };

  return (
    <button
      onClick={onClick}
      className={cn(baseStyles, variantStyles[variant], className)}
    >
      {children}
    </button>
  );
};

export default Button;

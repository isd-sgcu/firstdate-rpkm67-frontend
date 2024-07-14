import React from 'react';
import darkPinkBorder from '@public/border/darkPinkBorder.svg';
import lightPinkBorder from '@public/border/lightPinkBorder.svg';
import lightPinkBorder2 from '@public/border/lightPinkBorder2.svg';
import whiteBrownBorder from '@public/border/whiteBrownBorder.svg';
import transparentBorder from '@public/border/transparentBorder.svg';
import whiteBorder from '@public/border/whiteBorder.svg';
import { cn } from '@/lib/utils';

interface BorderProps {
  variant:
    | 'dark-pink'
    | 'light-pink'
    | 'light-pink-2'
    | 'white-brown'
    | 'transparent'
    | 'white';
  className?: string;
  children?: React.ReactNode;
}

const borderStyles = {
  'dark-pink': {
    base: '',
    style: {
      backgroundImage: `url(${darkPinkBorder.src})`,
    },
  },
  'light-pink': {
    base: 'bg-opacity-70',
    style: {
      backgroundImage: `url(${lightPinkBorder.src})`,
    },
  },
  'light-pink-2': {
    base: 'bg-opacity-70',
    style: {
      backgroundImage: `url(${lightPinkBorder2.src})`,
    },
  },
  'white-brown': {
    base: '',
    style: {
      backgroundImage: `url(${whiteBrownBorder.src})`,
    },
  },
  transparent: {
    base: 'bg-opacity-70',
    style: {
      backgroundImage: `url(${transparentBorder.src})`,
    },
  },
  white: {
    base: '',
    style: {
      backgroundImage: `url(${whiteBorder.src})`,
    },
  },
};

const Border: React.FC<BorderProps> = ({
  variant = 'dark-pink',
  className,
  children,
}) => {
  const { base, style } = borderStyles[variant];

  return (
    <div
      className={cn(
        'flex items-center flex-col w-[95%] min-h-[calc(95vw*(801/371))] my-[5%] mx-auto bg-contain bg-no-repeat bg-top',
        base,
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
};

export default Border;

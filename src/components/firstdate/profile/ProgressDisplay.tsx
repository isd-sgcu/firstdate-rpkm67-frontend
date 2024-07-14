'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { statConfig } from './statConfig';
import { cn } from '@/lib/utils';
import Sparkle from '@public/stat/sparkle.svg';

export interface ProgressDisplayProps {
  point: number;
  type: 'pointA' | 'pointB' | 'pointC' | 'pointD';
}

const calculatePoint = (point: number, maxPoint: number): number => {
  return Math.min(1, point / maxPoint) * 100;
};

const ProgressDisplay = ({ point, type }: ProgressDisplayProps) => {
  const { icon, color, label, text, maxPoint } = statConfig[type];
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setPercentage(calculatePoint(point, maxPoint));
  }, [point, maxPoint]);

  return (
    <div className="relative flex items-center flex-col w-10 h-auto ">
      <div
        className={cn(
          'absolute shadow-white shadow-xl w-full h-56 z-10 rounded-t-full',
          {
            hidden: percentage < 100,
          }
        )}
      />
      <div
        className={`relative flex justify-center w-full h-56 z-20 bg-white rounded-t-full drop-shadow`}
      >
        <div
          className={cn(
            `transition-all ease-out duration-700 absolute bottom-0 w-full bg-gradient-to-t ${color[1]}`,
            {
              [color[2]]: percentage === 100,
              'rounded-t-full': percentage === 100,
            }
          )}
          style={{
            height: `${percentage}%`,
          }}
        />
        <div className="absolute flex flex-col justify-center items-center top-4 size-8 rounded-full">
          <Image
            src={percentage === 100 ? icon[1] : icon[0]}
            alt={label}
            className={cn('size-[30px] p-0.5', {
              [color[0]]: percentage === 100,
              'rounded-full': percentage === 100,
            })}
          />
          <Image
            src={Sparkle}
            alt="Sparkle"
            className={cn('mt-1.5', {
              'opacity-0': percentage < 100,
            })}
          />
        </div>
        <div
          className={cn('absolute bottom-1 font-semibold text-2xl text-black', {
            'text-white': percentage >= 20,
          })}
        >
          {label}.
        </div>
      </div>
      <span className="text-center text-[10px] leading-none mt-1.5 w-12 z-30">
        {text}
      </span>
    </div>
  );
};

export default ProgressDisplay;

'use client';

import { cn } from '@/lib/utils';
import { useState } from 'react';

import BaanCard from '@/components/rpkm/baanCard';
import baanExample from '@/../public/baanCard/baanExample.svg';

export default function Page() {
  const [isShake, setIsShake] = useState(false);

  const handleOnClick = () => {
    setIsShake(!isShake);
  };

  return (
    <div className="grid grid-rows-2 grid-cols-3 gap-4 m-4">
      <BaanCard
        name="Boe"
        size="S"
        image={baanExample}
        number={20}
        isShake={isShake}
      />
      <BaanCard
        name="Boe"
        size="M"
        image={baanExample}
        number={45}
        isShake={false}
      />
      <BaanCard
        name="Boe"
        size="L"
        image={baanExample}
        number={122}
        isShake={isShake}
      />
      <BaanCard
        name="Yim"
        size="XL"
        image={baanExample}
        number={298}
        isShake={false}
      />
      <BaanCard
        name="SoeiTee"
        size="XXL"
        image={baanExample}
        number={375}
        isShake={isShake}
      />
      <button
        className={cn('bg-red-400', { 'bg-green-400': isShake })}
        onClick={handleOnClick}
      >
        Click here
      </button>
    </div>
  );
}

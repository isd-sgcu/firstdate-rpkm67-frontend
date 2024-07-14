'use client';
import Pin from './utils/Pin';
import { Fragment, useEffect, useState } from 'react';
import Image from 'next/image';
import line from '@/../public/line.svg';
import { PinDTO } from '@/dtos/pinDTO';
import { getAllPins, resetPin } from '@/utils/pin';

export default function PinGroup() {
  const [pins, setPins] = useState<PinDTO[] | null>(null);

  useEffect(() => {
    const fetchUserEstamp = async (): Promise<void> => {
      const pins = await getAllPins();
      setPins(pins ?? null);
    };
    fetchUserEstamp();
  }, []);

  const handleReset = async (ind: number) => {
    if (!pins) return;
    const updatedPins: PinDTO[] = [...pins];
    const pin = await resetPin(pins[ind].activity_id);
    if (pin) {
      updatedPins[ind] = pin;
    }
    setPins(updatedPins);
  };

  return (
    <section className="py-3 w-full">
      <div className="py-3 flex flex-col justify-center items-center">
        <h1 className="font-season italic text-xl">Workshop</h1>
        <Image
          src={line}
          alt="line"
        />
      </div>
      <div className="relative group cursor-pointer w-full h-1/2 z-50">
        <div className="relative px-7 py-6 bg-white h-full ring-2 overflow-scroll ring-gray-900/5 rounded-lg flex flex-col items-center">
          {pins ? (
            pins.map((data: PinDTO, index: number) => (
              <Fragment key={data.activity_id}>
                <Pin
                  otp={data}
                  index={index}
                  handleClick={handleReset}
                />
                {index !== 8 && <hr className="w-4/5" />}
              </Fragment>
            ))
          ) : (
            <h1 className="font-season font-bold text-2xl">No Data</h1>
          )}
        </div>
      </div>
    </section>
  );
}

'use client';
import Border from '@/components/Border';
import MenuList from '@/components/MenuList';

import Scan from '@/components/qrscanner/QRScanner';
import Mode from '@/components/staff/home/Mode';
import PinGroup from '@/components/staff/home/otp/PinGroup';
import { useCallback, useState } from 'react';
import Border from '@/components/firstdate/Border';
import TwoCircleMenu from '@/components/firstdate/TwoCircleMenu';

export type StaffHomeMode = 'QR-Reader' | 'OTP';

export default function Staff() {
  const [mode, setMode] = useState<StaffHomeMode>('QR-Reader');
  const handleClick = useCallback((value: StaffHomeMode) => {
    setMode(() => value);
  }, []);

  return (
    <Border
      variant="white"
      className="p-[10%] h-[calc(95vw*(801/371))]"
    >
      <section className="font-season italic text-4xl grid place-items-center py-8">
        <h1>Welcome,</h1>
        <h1>Staff</h1>
      </section>
      <section className="w-full rounded-3xl bg-white text-project-light-gray flex item-center justify-between shadow-md">
        <Mode
          variant="QR-Reader"
          mode={mode}
          handleOnClick={handleClick}
        />
        <Mode
          variant="OTP"
          mode={mode}
          handleOnClick={handleClick}
        />
      </section>
      {mode === 'QR-Reader' ? (
        <div className="pt-8 w-full">
          <Scan />
        </div>
      ) : (
        <PinGroup />
      )}
      <MenuList />
    </Border>
  );
}

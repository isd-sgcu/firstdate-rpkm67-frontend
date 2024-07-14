import FDLogo from '@public/FIrst Date Logo.svg';
import MapImage from '@public/map.svg';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import Border from '@/components/firstdate/Border';

export default function Map() {
  return (
    <main className="w-full h-screen flex justify-center items-center flex-col bg-2">
      <Border variant="white">
        <div className="flex w-full justify-center">
          <Image
            src={FDLogo}
            alt="logo"
            className="w-44"
          />
        </div>
        <div className="font-season italic text-2xl mt-6">Map</div>
        <Image
          src={MapImage}
          alt="map"
          className="w-full aspect-auto mt-5"
        />
        <div className="font-season italic text-2xl text-center p-4 mt-5 bg-project-fuchsia">
          Lorem ipsum dolor sit
        </div>
      </Border>
      <div className="absolute top-6 right-4 flex flex-col items-center">
        <Icon
          icon="icon-park-solid:people"
          className="w-11 h-11 p-3 rounded-full bg-white text-black"
        />
        <span className="font-athiti font-medium">โปรไฟล์</span>
      </div>
    </main>
  );
}

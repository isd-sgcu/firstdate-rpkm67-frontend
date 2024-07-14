'use client';

import Image from 'next/image';
import { useToPng } from '@hugocxl/react-to-image';

import { useAuth } from '@/context/AuthContext';

import CardTitle from '@/components/firstdate/result/CardTitle';
import CardImage from '@/components/firstdate/result/CardImage';

import Logo from '@public/FIrst Date Logo.svg';
import DownloadIcon from '@public/ending/download.svg';
import MenuList from '@/components/firstdate/MenuList';
import Border from '@/components/firstdate/Border';

export default function Ending() {
  const { user } = useAuth();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, convert, ref] = useToPng<HTMLDivElement>({
    quality: 1,
    onStart: () => {
      const toHide = document.getElementsByClassName(
        'to-hide'
      ) as HTMLCollectionOf<HTMLElement>;
      for (const element of toHide) {
        element.style.visibility = 'hidden';
      }
      const mainContainer = document.getElementById(
        'main-containter'
      ) as HTMLElement;

      mainContainer.style.backgroundImage = `url('/bg-1.svg')`;
      mainContainer.style.backgroundRepeat = 'repeat';
      mainContainer.style.backgroundSize = 'cover';
    },
    onSuccess: (data) => {
      const toHide = document.getElementsByClassName(
        'to-hide'
      ) as HTMLCollectionOf<HTMLElement>;
      for (const element of toHide) {
        element.style.visibility = 'visible';
      }
      const mainContainer = document.getElementById(
        'main-containter'
      ) as HTMLElement;

      mainContainer.style.backgroundImage = ``;
      mainContainer.style.backgroundRepeat = '';
      mainContainer.style.backgroundSize = '';

      const link = document.createElement('a');
      link.download = 'card.png';
      link.href = data;
      link.click();
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return (
    <main
      className="w-full"
      id="main-containter"
      ref={ref}
    >
      <div className="to-hide">
        <MenuList isRewardPage />
      </div>

      <Border variant="white">
        <Image
          src={Logo}
          alt="logo"
          className="w-[50%] mt-[10%]"
        />
        <h1 className="font-season italic mt-3 text-2xl text-light-gray">
          My card
        </h1>
        {/* using <img> instead of next <Image> because it have a bug when convert to png */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={'/ending/divider.png'}
          alt="divider"
          className="w-44 m-3"
        />
        <CardTitle stamp={user?.stamp} />
        <CardImage stamp={user?.stamp} />
        <div className="flex flex-col justify-center w-4/5 text-center mt-2 text-sm text-light-gray">
          <p>
            “ไม่ว่าคุณจะเป็นคนแบบไหน ผ่านเรื่องอะไรมาบ้าง
            ยินดีต้อนรับเข้าสู่จุฬาลงกรณ์มหาวิทยาลัย
          </p>
          <p>พื้นที่ที่จะให้คุณได้ค้นหา สร้างตัวตน </p>
          <p>และเบ่งบานในแบบของคุณ”</p>
        </div>
        <div className="flex justify-center w-2/3 flex-col gap-y-2 mt-4 text-xl">
          <button
            onClick={convert}
            className="w-full border rounded-md border-project-fuchsia py-2 flex flex-row items-center justify-center to-hide"
          >
            <Image
              src={DownloadIcon}
              alt="download icon"
            />
            <p className="text-project-fuchsia">บันทึกการ์ด</p>
          </button>
          <a
            href="/firstdate/home"
            className="w-full bg-project-pink rounded-md py-2 mb-[5%] text-center text-light-gray to-hide"
          >
            กลับไปเดินทางต่อ
          </a>
        </div>
      </Border>
    </main>
  );
}

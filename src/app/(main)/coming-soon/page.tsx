import Image from 'next/image';
import Border from '@/components/firstdate/Border';
import Welcome from '@/components/firstdate/Welcome';
import Back_To_Menu from '@/components/firstdate/coming-soon/back_to_menu';
import Coming_Soon from '@public/comingsoon.svg';

export default function Home() {
  return (
    <Border
      variant="transparent"
      className="flex flex-col"
    >
      {' '}
      <Welcome containerClassName="mt-[20%]" />
      <h1 className="text-2xl text-center font-semibold text-project-light-gray mb-7">
        รับเพื่อนก้าวใหม่ 2024
      </h1>
      <Image
        src={Coming_Soon}
        alt="Coming Soon"
        className="w-64 h-14 mb-6"
      />
      <h1 className="text-xl text-center font-semibold text-project-light-gray mb-10">
        พร้อมให้ลงทะเบียน
        <br />
        ในวันที่ 18 กรกฎาคม 2567
      </h1>
      <Back_To_Menu />
    </Border>
  );
}

'use client';
import modalStyles from '@/components/rpkm/Modal/ModalStyle';
import Base from '@/components/rpkm/freshy-night/Base';
import Card from '@/components/rpkm/freshy-night/rules/Card';
import MIC from '@public/rpkm/freshy-night/mic.svg';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { useAuth } from '@/context/AuthContext';
import { createCheckIn } from '@/utils/checkin';
import toast from 'react-hot-toast';
interface RulesData {
  imgUrl?: string;
  description?: string;
}
const setOfRules: RulesData[] = [
  { description: 'description' },
  { imgUrl: '', description: 'description' },
  { imgUrl: '', description: 'description' },
  { imgUrl: '', description: 'description' },
  { imgUrl: '', description: 'description' },
  { imgUrl: '', description: 'description' },
];
export default function Rules() {
  const { button } = modalStyles['red'];
  const { user } = useAuth();

  const handleClick = async () => {
    if (!user) {
      toast.error('เกิดข้อผิดพลาดในการดึงข้อมูล');
      return;
    }
    const resp = await createCheckIn(
      user.id,
      user.email,
      'freshy-night-confirm'
    );
    if (resp) {
      toast.success('สำเร็จ');
    } else {
      toast.error('เกิดข้อผิดพลาด');
    }
  };

  return (
    <div className="min-h-screen w-full grid place-items-center">
      <Base
        className="p-[10%] h-[calc(50vw*(801/371))] gap-6"
        withBus={true}
      >
        <section className="drop-shadow-lg relative font-sopha text-stroke text-stroke-rpkm-blue -mt-12 -ml-8">
          <span className="text-9xl text-rpkm-green">กฏ</span>
          <span className="text-8xl text-rpkm-yellow">กติกา</span>
          <Image
            src={MIC}
            alt="Microphone"
            width={60}
            height={60}
            className="absolute top-[30%] left-[95%]"
          />
          <span className="absolute text-7xl text-rpkm-pink left-[30%] w-5/6 top-[60%]">
            ภายในงาน
          </span>
        </section>

        <div className="grid grid-cols-3 grid-rows-2 place-items-center w-full h-full gap-4">
          {setOfRules.map((e: RulesData, i: number) => (
            <Card
              imgUrl={e.imgUrl}
              description={e.description}
              num={i + 1}
              key={i}
            />
          ))}
        </div>

        <button
          onClick={handleClick}
          className="p-1 inv-rad inv-rad-2 bg-rpkm-yellow"
        >
          <div
            className={cn(
              'py-[0.3rem] px-6 inv-rad inv-rad-2',
              button['accept-background']
            )}
          >
            ยอมรับข้อตกลง
          </div>
        </button>
      </Base>
    </div>
  );
}
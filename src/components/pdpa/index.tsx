'use client';

import { cn } from '@/lib/utils';
import { useCallback, useState } from 'react';

const titles: string[] = [
  'นโยบายความเป็นส่วนตัว',
  'ระบบลงลงทะเบียนเข้าร่วมกิจกรรม',
  'งานวันแรกพบนิสิตใหม่ 2024',
  'จุฬาลงกรณ์มหาวิทยาลัย',
];

const description: string[] = [
  `การเก็บรวบรวมข้อมูลส่วนบุคคลของท่านมีวัตถุประสงค์เพื่อดำเนินการในการทำงานของฝ่ายที่เกี่ยวข้อง
     การจัดเก็บรูปภาพและวิดีโอของท่าน และให้ความช่วยเหลือระหว่างท่าน ฝ่ายเนื้อหา และฝ่ายอำนวยการ 
     งานวันแรกพบนิสิตใหม่ 2024`,
  `โดยข้อมูลส่วนบุคคลจะถูกเก็บโดยฝ่ายเนื้อหาและ
    ฝ่ายอำนวยการ งานวันแรกพบนิสิตใหม่ 2024 ซึ่งมีฐานะเป็นผู้ควบคุมข้อมูลส่วนบุคคลของท่าน 
    ได้แก่ ชื่อ นามสกุล และข้อมูลติดต่อกลับตามที่เจ้าของข้อมูลส่วนบุคคล ได้ให้ข้อมูลไว้ รวมไปถึงภาพถ่ายและวิดีโอ`,
  `ท่านมีสิทธิตามที่บัญญัติไว้ในพระราชบัญญัติคุ้มครอง ข้อมูลส่วนบุคคล พ.ศ. 2562 ได้แก่ 
    สิทธิในการเพิกถอนความยินยอมในการประมวลผลข้อมูลส่วนบุคคล สิทธิในการเข้าถึงข้อมูลส่วนบุคคล 
    สิทธิในการลบข้อมูลส่วนบุคคล สิทธิในการระงับการใช้ข้อมูลส่วนบุคคล สิทธิในการแก้ไขข้อมูลส่วนบุคคล`,
  `การใช้และเปิดเผยข้อมูลส่วนบุคคลของท่านเป็นไป
    เพื่อวัตถุประสงค์ในการดำเนินการตาม
    รายละเอียดที่แจ้งไว้เท่านั้น`,
];

interface PdpaProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  onSuccess: () => void;
}

export default function Pdpa(props: PdpaProps) {
  const { isOpen, onOpenChange, onSuccess } = props;
  const [isChecked, setIsChecked] = useState(false);
  const containerClassName = cn(
    'fixed inset-0 z-10 flex justify-center items-center bg-black bg-opacity-25',
    {
      'opacity-0 pointer-events-none': !isOpen,
    }
  );

  const handleOnClose = useCallback(() => {
    onOpenChange(false);
  }, [onOpenChange]);

  const handleOnSuccess = useCallback(() => {
    onSuccess();
    handleOnClose();
  }, [onSuccess, handleOnClose]);

  return (
    <div className={containerClassName}>
      <div className="relative flex flex-col justify-center items-center w-[90%] h-[90%] overflow-y-scroll overflow-x-hidden bg-white p-6 rounded-[20px]">
        <div className="absolute right-4 top-4">
          <button onClick={handleOnClose}>
            <svg
              className="w-10 h-10"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-width="1.5"
                d="m8.464 15.535l7.072-7.07m-7.072 0l7.072 7.07"
              />
            </svg>
          </button>
        </div>
        <h1 className="mt-[400px] font-semibold text-5xl">PDPA</h1>
        <div className="my-8 border border-black h-[1px] w-[95%]"></div>
        <h2 className="text-center text-xl font-semibold">
          {titles.map((title, index) => (
            <p key={index}>{title}</p>
          ))}
        </h2>
        <article className="mt-5 p-2 max-w-sm text-base">
          {description.map((section, index) => (
            <p
              key={index}
              className="mb-4"
            >
              {section}
            </p>
          ))}
        </article>
        <div className="flex justify-center items-center gap-4">
          <div
            className={`relative min-w-8 h-8 rounded-full 
                        ${isChecked ? 'bg-project-fuchsia' : 'bg-white border border-black'} `}
          >
            <input
              id="accept"
              type="checkbox"
              className="absolute h-8 w-8 opacity-0"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
            />
            {isChecked && (
              <svg
                className="pointer-events-none absolute inset-0 m-auto h-5 w-5 fill-current text-white"
                viewBox="0 0 20 20"
              >
                <path
                  d="M16.7,5.3c-0.4-0.4-1-0.4-1.4,0L7.4,13.2L4.7,10.6c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l3.3,3.3c0.2,0.2,0.4,0.3,0.7,0.3
                    s0.5-0.1,0.7-0.3l8.7-8.7C17.1,6.3,17.1,5.7,16.7,5.3z"
                />
              </svg>
            )}
          </div>
          <label
            htmlFor="accept"
            className="font-medium text-base"
          >
            ฉันยอมรับเงื่อนไขและยินยอมให้เปิดเผยข้อมูลส่วนบุคคล
          </label>
        </div>
        <button
          className={`mt-4 px-[10%] py-2 h-12 font-medium text-white text-xl rounded-lg bg-project-fuchsia
                ${isChecked ? 'opacity-100' : 'opacity-50'}`}
          disabled={!isChecked}
          onClick={handleOnSuccess}
        >
          รับทราบและยินยอม
        </button>
      </div>
    </div>
  );
}

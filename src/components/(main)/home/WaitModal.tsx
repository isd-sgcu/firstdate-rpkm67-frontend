import React, { useEffect, useState } from 'react';
import waitbackgroundouter from '@public/home/wait-background-outer.svg';
import waitbackgroundinner from '@public/home/wait-background-inner.svg';
import calendar from '@public/home/icon/calendar.svg';
import something from '@public/home/something.svg';
import line from '@public/home/line.svg';
import Image from 'next/image';

interface WaitModalProps {
  modal: boolean;
  setModal: (value: boolean) => void;
  event: 'first-date' | 'rup-peun';
}

const WaitModal: React.FC<WaitModalProps> = ({ modal, setModal, event }) => {
  const [firstDateDate, setFirstDateDate] = useState('');
  const [rupPeunDate, setRupPeunDate] = useState('');

  useEffect(() => {
    const firstDate = process.env.NEXT_PUBLIC_FIRST_DATE_DATE;
    const rupPuenDate = process.env.NEXT_PUBLIC_RUP_PEUN_DATE;

    if (firstDate) {
      const firstDateObj = new Date(firstDate);
      const thaiFormattedFirstDate = firstDateObj.toLocaleDateString('th-TH', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
      setFirstDateDate(thaiFormattedFirstDate);
    }

    if (rupPuenDate) {
      const rupPuenDateObj = new Date(rupPuenDate);
      const thaiFormattedRupPuenDate = rupPuenDateObj.toLocaleDateString(
        'th-TH',
        {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }
      );
      setRupPeunDate(thaiFormattedRupPuenDate);
    }
  }, []);
  if (!modal) return null;
  return (
    <div className="z-10 inset-0 fixed flex justify-center">
      <div className="bg-black w-full h-full fixed self-center opacity-50" />

      <div className="w-[calc(100vh*(72/156)*(9/10))] h-[64vh] relative self-center flex flex-col justify-center">
        <div
          className="w-4/5 h-full opacity-100 self-center flex justify-self-center justify-center bg-contain bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${waitbackgroundouter.src})` }}
        >
          <div
            className="w-11/12 h-[46vh] opacity-100 self-center justify-self-center bg-contain bg-no-repeat bg-center flex flex-col items-center justify-around"
            style={{ backgroundImage: `url(${waitbackgroundinner.src})` }}
          >
            <Image
              src={line}
              alt="line"
              style={{ width: '70%' }}
            />
            <div className="h-4/5 w-5/6 flex flex-col items-center pt-[15%] gap-y-[1.7vh]">
              <div className="w-full flex flex-col items-center">
                <Image
                  src={calendar}
                  alt="line"
                  style={{ width: '60%' }}
                />
                <p className="text-[3.51vh] font-semibold">อดใจรออีกนิด</p>
                <p className="text-[1.75vh] font-semibold">
                  พร้อมใช้งานวันที่{' '}
                  {event == 'first-date' ? firstDateDate : rupPeunDate}
                </p>
              </div>
              <Image
                src={something}
                alt="something"
                style={{ width: '37%' }}
              />
              <button
                className="w-full bg-[#313131] h-[5.26vh] rounded-lg drop-shadow-md place-content-center hover:brightness-105 text-white text-[2.2vh]"
                onClick={() => setModal(false)}
              >
                ตกลง
              </button>
            </div>
            <Image
              src={line}
              alt="line"
              style={{ width: '70%' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitModal;

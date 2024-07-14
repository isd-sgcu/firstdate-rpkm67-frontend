import React, { useEffect, useState } from 'react';
import qrbackgroundouter from '@public/home/qr-background-outer.svg';
import qrbackgroundinner from '@public/home/qr-background-inner.svg';
import qrhead from '@public/home/qr-head.svg';
import { useQRCode } from 'next-qrcode';

interface QrCodeModalProps {
  setModal: (value: boolean) => void;
  modal: boolean;
  userid: string;
}

const QrCodeModal: React.FC<QrCodeModalProps> = ({
  modal,
  setModal,
  userid,
}) => {
  const [viewportHeight, setViewportHeight] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setViewportHeight(0.25 * window.innerHeight);
    };

    // Initial setup
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  const { Canvas } = useQRCode();

  // Conditional rendering based on modal prop
  if (!modal) return null;

  return (
    <div className="z-10 inset-0 fixed flex justify-center bg-black bg-opacity-50 self-center">
      <div className="w-[calc(100vh*(72/156)*(9/10))] h-[64vh] relative self-center flex flex-col justify-center">
        <div
          className="w-2/3 h-[14.4vh] absolute opacity-100 self-center justify-self-center bg-contain bg-no-repeat top-0"
          style={{ backgroundImage: `url(${qrhead.src})` }}
        />

        <div
          className="w-4/5 h-full opacity-100 self-center flex justify-self-center justify-center bg-contain bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${qrbackgroundouter.src})` }}
        >
          <div
            className="w-11/12 h-[46vh] opacity-100 self-center justify-self-center bg-contain bg-no-repeat bg-center flex flex-col items-center justify-around pt-[5vh] pb-[2vh]"
            style={{ backgroundImage: `url(${qrbackgroundinner.src})` }}
          >
            <Canvas
              text={userid}
              options={{
                width: viewportHeight,
              }}
            />

            <button
              className="h-[4.23vh] w-[13.76vh] bg-white border-[0.1vh] border-rose-600 rounded-[1vh] text-[2.12vh]"
              onClick={() => setModal(false)}
            >
              ย้อนกลับ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QrCodeModal;

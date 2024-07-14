import { Icon } from '@iconify/react/dist/iconify.js';
import Divider from '@public/congrats/divider.svg';
import Image from 'next/image';

interface NotificationContextProps {
  onClickShowCondition: () => void;
  handleOnClose: () => void;
}
const NotificationContext: React.FC<NotificationContextProps> = ({
  onClickShowCondition,
  handleOnClose,
}) => {
  return (
    <>
      <Image
        src={Divider}
        alt="divider"
        className="w-full h-4 bg-cover px-[15%]"
      />
      <div className="flex flex-1 flex-col items-center justify-center w-full">
        <div className="w-[40%] aspect-square">
          <Icon
            icon="mdi:sms-failed"
            className="w-full h-full text-project-fuchsia"
          />
        </div>
        <span className="text-center font-athiti font-medium text-xl mt-8">
          ยังไม่ถึงเงื่อนไขที่กำหนด
          <br />
          ในการรับรางวัลนะ!
        </span>
        <div className="flex flex-col px-[15%] items-center w-full mt-4 gap-5">
          <button
            className="w-full h-12 flex items-center justify-center rounded-lg bg-white border border-project-fuchsia"
            onClick={onClickShowCondition}
          >
            <span className="font-athiti font-medium text-xl text-project-fuchsia">
              ดูเงื่อนไขการรับรางวัล
            </span>
          </button>
          <button
            className="w-full h-12 flex items-center justify-center rounded-lg bg-project-light-gray"
            onClick={handleOnClose}
          >
            <span className="font-athiti font-medium text-xl text-white">
              กลับไปเดินทางต่อ
            </span>
          </button>
        </div>
      </div>
      <Image
        src={Divider}
        alt="divider"
        className="w-full h-4 bg-cover px-[15%]"
      />
    </>
  );
};

export default NotificationContext;

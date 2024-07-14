import { PinDTO } from '@/dtos/pinDTO';
import { Icon } from '@iconify/react/dist/iconify.js';

interface PinProps {
  otp: PinDTO;
  index: number;
  handleClick(ind: number): void;
}

export default function Pin(props: PinProps) {
  const { otp, index, handleClick } = props;
  return (
    <section className="flex w-full items-center justify-between">
      <div className="flex flex-col justify-evenly">
        <h1>{otp.activity_id}</h1>
        <h1 className="text-4xl ">
          {otp.code.substring(0, 3)} {otp.code.substring(3, 6)}
        </h1>
      </div>
      <div>
        <Icon
          icon="tabler:reload"
          className="w-6 h-6 text-black"
          onClick={() => handleClick(index)}
        />
      </div>
    </section>
  );
}

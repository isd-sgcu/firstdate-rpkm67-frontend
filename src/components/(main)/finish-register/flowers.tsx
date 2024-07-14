import Image from 'next/image';
import flower1 from '@public/registered/flower1.png';
import flower2 from '@public/registered/flower2.png';

export default function Flowers() {
  return (
    <div className="overflow-hidden absolute top-0 left-0 right-0 w-full h-screen">
      <Image
        src={flower2}
        alt="top left flower"
        className="absolute w-56 -left-16 -top-7 rotate-[113deg]"
      ></Image>
      <Image
        src={flower2}
        alt="top left flower"
        className="absolute w-56 -right-16 -top-7 rotate-[247deg] scale-x-[-1] bg-no-repeat"
      ></Image>
      <Image
        src={flower1}
        alt="bottom left flower"
        className="absolute w-56 -left-20 -bottom-1"
      ></Image>
      <Image
        src={flower1}
        alt="bottom left flower"
        className="absolute w-56 -right-20 -bottom-1"
      ></Image>
    </div>
  );
}

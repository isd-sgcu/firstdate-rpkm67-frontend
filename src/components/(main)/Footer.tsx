import Image from 'next/image';
import Link from 'next/link';
import INSTAGRAM from '@public/footer/instagram-logo.svg';
import ISD_LOGO from '@public/footer/isd-logo.svg';
import SGCU_LOGO from '@public/footer/sgcu-logo.svg';

export default function Footer() {
  return (
    <footer className="relative w-full bg-blue-400 text-center">
      <section className="bg-gradient-footer text-xs lg:text-xl font-medium grid grid-cols-1 gap-y-4 p-4">
        <div className="flex gap-4 justify-center">
          <Image
            src={ISD_LOGO}
            alt="ฝ่ายพัฒนาระบบสารสนเทศ"
            width={44}
            height={44}
          />
          <Image
            src={SGCU_LOGO}
            alt="องค์การบริหารสโมสรนิสิตจุฬาลงกรณ์มหาวิทยาลัย"
            width={44}
            height={44}
          />
        </div>
        <p>
          พัฒนาโดยฝ่ายพัฒนาระบบสารสนเทศ
          <br />
          องค์การบริหารสโมสรนิสิตจุฬาลงกรณ์มหาวิทยาลัย
        </p>
        <hr className="w-1/5 mx-auto" />
        <p>
          Developed by Information System Development &lt;ISD&gt;,
          <br />
          Student Government Chulalongkorn University
        </p>
      </section>
      <section className="bg-white text-base lg:text-3xl pb-2 lg:pb-4 font-medium pt-1 lg:pt-2">
        <h3 className="font-semibold mb-2">Contact us</h3>
        <div className="flex justify-center text-xs gap-x-4">
          <Link href="https://isd.sgcu.in.th">
            <div className="flex flex-col items-center text-center gap-y-1">
              <Image
                src={ISD_LOGO}
                alt="isd-website"
                width={28}
                height={28}
              />
              <p className="underline underline-offset-2 text-xss lg:text-base">
                Website
              </p>
            </div>
          </Link>
          <Link href="https://www.instagram.com/isd.sgcu/">
            <div className="flex flex-col items-center text-center gap-y-1">
              <Image
                src={INSTAGRAM}
                alt="instagram"
                width={28}
                height={28}
              />
              <p className="underline underline-offset-2 text-xss lg:text-base">
                Instagram
              </p>
            </div>
          </Link>
        </div>
      </section>
    </footer>
  );
}

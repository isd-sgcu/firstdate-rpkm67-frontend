'use client';

import Border from '@/components/Border';
import Welcome from '@/components/Welcome';
import Image from 'next/image';
import SGCULOGO from '@public/landing/SGCU-logo.svg';
import { useRouter, useSearchParams } from 'next/navigation';
import Spinner from '@/components/Spinner';
import { Suspense, useCallback, useEffect, useRef } from 'react';
import { useAuth } from '@/context/AuthContext';
import { exchangeGoogleCodeForToken, getGoogleUrl } from '@/utils/auth';
import { isUserRegistered } from '@/utils/user';

export default function page() {
  return (
    <Suspense>
      <Login />
    </Suspense>
  );
}

function Login() {
  const searchParams = useSearchParams();
  const code = searchParams.get('code');
  const router = useRouter();
  const { user, resetContext } = useAuth();
  const googleUrl = useRef<string | null>(null);

  useEffect(() => {
    (async () => {
      const url = await getGoogleUrl();
      if (url) {
        googleUrl.current = url;
      }
    })();
  }, []);

  useEffect(() => {
    if (!code) {
      return;
    }
    (async () => {
      const token = await exchangeGoogleCodeForToken(code);
      if (!token) {
        return;
      }

      const { userId } = token;

      localStorage.setItem('token', JSON.stringify(token.credential));
      localStorage.setItem('userId', userId);
      resetContext();
    })();
  }, [code, resetContext]);

  useEffect(() => {
    if (!user) {
      return;
    }
    const isStaff = user.role == 'staff';
    const isRegistered = isUserRegistered(user);
    let newPath;

    if (isStaff) {
      newPath = isRegistered ? '/staff/home' : '/staff/register';
    } else {
      newPath = isRegistered ? '/home' : '/register';
    }

    router.push(newPath);
  }, [user, router]);

  const handleOnLogin = useCallback(() => {
    if (!googleUrl.current) {
      return;
    }
    router.push(googleUrl.current);
  }, [googleUrl, router]);

  return (
    <Border variant="dark-pink">
      {code && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-20 z-[999]">
          <Spinner />
        </div>
      )}

      <Image
        src={SGCULOGO}
        alt="sgcu-logo"
        className="w-10 mb-20 mt-[10%]"
      />
      <Welcome
        containerClassName="my-0 mb-4"
        cuClassName="text-white text-4xl"
        welcomeClassName="text-white text-6xl"
      />
      <p className="text-center text-white mb-20 text-lg">
        In honor of our wander,
        <br /> you are the answer.
      </p>
      <button
        onClick={handleOnLogin}
        className="bg-white py-2 px-20 rounded-md text-xl font-medium shadow-md mb-4"
      >
        ลงทะเบียน
      </button>
      <p className="mb-20">*โปรดใช้Emailของจุฬาฯในการลงทะเบียน*</p>
      <section className="flex flex-col justify-center items-center font-medium">
        <p className="text-lg">เคยลงทะเบียนมาแล้ว?</p>
        <span
          onClick={handleOnLogin}
          className="underline cursor-pointer"
        >
          เข้าสู่ระบบ
        </span>
      </section>
    </Border>
  );
}

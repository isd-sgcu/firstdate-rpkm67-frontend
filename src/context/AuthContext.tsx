'use client';

import Spinner from '@/components/firstdate/Spinner';
import { User } from '@/types/user';
import { getReceiveGiftCondition } from '@/utils/reward';
import { getUser, isUserRegistered } from '@/utils/user';

import { usePathname, useRouter } from 'next/navigation';
import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

interface IAuthContext {
  user: User | null;
  resetContext: () => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const useAuth = () => useContext(AuthContext);

const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [user, setUser] = useState<User | null>(null);
  const path = usePathname();
  const router = useRouter();
  const [isReady, setisReady] = useState(false);

  const resetContext = useCallback(async () => {
    const userData = await getUser();
    if (userData) {
      localStorage.setItem('user', JSON.stringify(userData));
      setUser(userData);
    }
  }, []);

  const logout = useCallback(() => {
    localStorage.clear();
    window.location.href = '/';
  }, []);

  useEffect(() => {
    if (path == '/') {
      setisReady(true);
      return;
    }

    const userStr = localStorage.getItem('user');
    if (!userStr) {
      return router.push('/');
    }

    const userObj: User = JSON.parse(userStr);
    setUser(userObj);

    const isStaff = userObj.role == 'staff';
    const isStaffPage = path.includes('/staff');
    const isRegistered = isUserRegistered(userObj);

    if (isStaff) {
      if (!isRegistered) {
        return router.push('/staff/register');
      }

      if (!isStaffPage) {
        return router.push('/firstdate/staff/home');
      }
    } else {
      if (!isRegistered) {
        return router.push('/register');
      }

      if (path.split('/').at(-1) == 'reward') {
        const condition = getReceiveGiftCondition(userObj);

        if (condition.status != 'ready') {
          return router.push('/firstdate/home');
        }
      }

      if (isStaffPage) {
        return router.push('/firstdate/home');
      }

      if (path !== 'home') {
        const firstdate = new Date(
          process.env.NEXT_PUBLIC_FIRST_DATE_DATE as string
        );
        const rpkm = new Date(process.env.NEXT_PUBLIC_RUP_PEUN_DATE as string);
        const current = new Date();

        if (
          (path.includes('firstdate') && current < firstdate) ||
          (path.includes('rpkm') && current < rpkm)
        ) {
          return router.push('/home');
        }
      }
    }

    setisReady(true);
  }, [router, path]);

  return (
    <AuthContext.Provider value={{ user, resetContext, logout }}>
      {(user || path == '/') && isReady ? (
        children
      ) : (
        <div className="w-full h-screen flex items-center justify-center bg-black bg-opacity-20">
          <Spinner />
        </div>
      )}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

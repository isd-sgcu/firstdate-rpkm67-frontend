'use client';

import Spinner from '@/components/Spinner';
import { User } from '@/types/user';
import { getUser } from '@/utils/user';

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
    const userStr = localStorage.getItem('user');
    if (path == '/') {
      return;
    }

    if (!userStr) {
      return router.push('/');
    }

    const userObj: User = JSON.parse(userStr);
    setUser(userObj);

    //TODO comeback to activate route protection
    // const isStaff = userObj.role == 'staff';
    // const isRegistered = isUserRegistered(userObj);

    // if (isStaff) {
    //   if (!isRegistered) {
    //     return router.push('/staff/register');
    //   }
    // } else {
    //   if (!isRegistered) {
    //     return router.push('/register');
    //   } else if (path.split('/').at(-1) == 'reward' || 'reward-done') {
    //     const condition = getReceiveGiftCondition(userObj);

    //     if (condition.status != 'ready') {
    //       return router.push('/firstdate/home');
    //     }
    //   }
    // }
  }, [router, path]);

  return (
    <AuthContext.Provider value={{ user, resetContext, logout }}>
      {user || path == '/' ? (
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

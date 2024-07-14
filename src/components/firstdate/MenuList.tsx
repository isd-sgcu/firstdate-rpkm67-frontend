'use client';

import { useAuth } from '@/context/AuthContext';
import { usePathname, useRouter } from 'next/navigation';
import { useCallback, useMemo, useState } from 'react';
import { getReceiveGiftCondition } from '@/utils/reward';
import CongratsModal from './congratulation/CongratsModal';
import MenuIcon from './MenuIcon';

interface TwoCircleMenuProps {
  isRewardPage?: boolean;
}

export default function MenuList({ isRewardPage }: TwoCircleMenuProps) {
  const { user } = useAuth();
  const router = useRouter();
  const currentPath = usePathname().split('/').at(-1);
  const [isCongratOpen, setIsCongratOpen] = useState(false);
  const pathname = usePathname();

  const handleNavigate = useCallback(
    (path: string): void => {
      const isStaff = pathname.includes('/firstdate/staff');
      const url = `/firstdate${isStaff ? '/staff' : ''}/${path}`;
      router.push(url);
    },
    [router, pathname]
  );

  const isPath = useCallback(
    (path: string): boolean => {
      return currentPath == path;
    },
    [currentPath]
  );

  const giftCondition = useMemo(() => {
    if (user) {
      return getReceiveGiftCondition(user);
    }
  }, [user]);

  return (
    <div>
      {giftCondition && (
        <CongratsModal
          isOpen={isCongratOpen}
          onOpenChange={setIsCongratOpen}
          score={giftCondition?.score}
        />
      )}
      {user && (
        <>
          <div className="absolute top-6 right-4 flex flex-col items-center gap-2">
            <MenuIcon
              name="โปรไฟล์"
              isActive={isPath('profile')}
              handleOnClick={() => handleNavigate('profile')}
              iconify="icon-park-solid:people"
            />
            {!isRewardPage && giftCondition?.status != 'recieved' && (
              <div className="relative">
                <MenuIcon
                  name="รางวัล"
                  isActive={false}
                  handleOnClick={() => {
                    setIsCongratOpen(true);
                  }}
                  iconify="solar:gift-bold"
                />
                {giftCondition?.status == 'ready' && (
                  <div className="w-4 h-4 bg-project-fuchsia rounded-full absolute bottom-6"></div>
                )}
              </div>
            )}
          </div>
          <div className="absolute top-6 left-4 flex flex-col items-center">
            <MenuIcon
              name="หน้าหลัก"
              isActive={isPath('home')}
              handleOnClick={() => handleNavigate('home')}
              iconify="icon-park-solid:home"
            />
          </div>
        </>
      )}
    </div>
  );
}

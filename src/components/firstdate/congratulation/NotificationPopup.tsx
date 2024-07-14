'use client';
import ConditionContext from '@/components/firstdate/congratulation/ConditionContext';
import NotificationContext from '@/components/firstdate/congratulation/NotificationContext';
import { cn } from '@/lib/utils';
import NotiBg from '@public/congrats/Noti.png';
import React, { useCallback, useState } from 'react';

interface NotificationPopupProps {
  isDefaultShowCondition?: boolean;
  handleOnClose: () => void;
}

const NotificationPopup: React.FC<NotificationPopupProps> = ({
  isDefaultShowCondition,
  handleOnClose,
}) => {
  const [showCondition, setShowCondition] = useState(
    isDefaultShowCondition ?? false
  );
  const handleOnClickShowCondition = useCallback(() => {
    setShowCondition(true);
  }, [setShowCondition]);

  return (
    <div
      style={{
        backgroundImage: `url(${NotiBg.src})`,
        backgroundSize: '100% 100%',
      }}
      className={cn(
        'w-full bg-no-repeat bg-center flex flex-col items-center py-[16%]',
        {
          'aspect-[390/640]': showCondition,
          'aspect-[333/535]': !showCondition,
        }
      )}
    >
      {showCondition ? (
        <ConditionContext handleOnClose={handleOnClose} />
      ) : (
        <NotificationContext
          onClickShowCondition={handleOnClickShowCondition}
          handleOnClose={handleOnClose}
        />
      )}
    </div>
  );
};

export default NotificationPopup;

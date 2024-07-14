import { cn } from '@/lib/utils';
import { useCallback } from 'react';
import NotificationPopup from './NotificationPopup';

interface NotificationModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

const NotificationModal = ({
  isOpen,
  onOpenChange,
}: NotificationModalProps) => {
  const handleOnClose = useCallback(() => {
    onOpenChange(false);
  }, [onOpenChange]);

  return (
    <div
      className={cn(
        'fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-[999] px-[10%] transition-all',
        {
          'opacity-0 pointer-events-none': !isOpen,
        }
      )}
    >
      <NotificationPopup
        isDefaultShowCondition={true}
        handleOnClose={handleOnClose}
      />
    </div>
  );
};

export default NotificationModal;

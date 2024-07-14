import CongratsPopup from '@/components/firstdate/congratulation/CongratsPopup';
import NotificationPopup from '@/components/firstdate/congratulation/NotificationPopup';
import { useCallback } from 'react';

interface CongratsModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  score: number;
}

const CongratsModal: React.FC<CongratsModalProps> = ({
  isOpen,
  score,
  onOpenChange,
}) => {
  const isEnough = score >= 6;
  const modalClasses = `fixed inset-0 z-50 overflow-y-auto justify-center flex  bg-gray-500 bg-opacity-75 transition-all ease-in-out duration-300 ${
    isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
  }`;

  const handleOnClose = useCallback(() => {
    onOpenChange(false);
  }, [onOpenChange]);

  return (
    <div className={`${modalClasses}`}>
      <div
        className={`w-[calc(100vh*(72/156)*(9/10))] h-full items-center flex shadow-lg`}
      >
        {isEnough ? (
          <CongratsPopup
            score={score}
            handleOnClose={handleOnClose}
          />
        ) : (
          <NotificationPopup handleOnClose={handleOnClose} />
        )}
      </div>
    </div>
  );
};

export default CongratsModal;

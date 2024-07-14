import React from 'react';
import EndingPopup from './EndingPopup';
import { cn } from '@/lib/utils';

interface EndingPopupModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

const EndingPopupModal: React.FC<EndingPopupModalProps> = (props) => {
  const { isOpen, onOpenChange } = props;

  return (
    <div
      className={cn(
        'z-50 fixed inset-0 bg-black bg-opacity-30 transition-all delay-[50] flex justify-center items-center',
        {
          'pointer-events-none opacity-0': !isOpen,
        }
      )}
    >
      <EndingPopup onOpenChange={onOpenChange} />
    </div>
  );
};

export default EndingPopupModal;

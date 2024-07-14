import React, { useState } from 'react';
import TextModal from '@/components/firstdate/home/modal/TextModal';

interface FavoriteClubModalProps {
  activityId: string;
  onClose: () => void;
  onSubmit: (activityId: string, userInput: string) => void; // Add onSubmit prop
}

const FavoriteClubModal: React.FC<FavoriteClubModalProps> = ({
  activityId,
  onClose,
  onSubmit,
}) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleConfirm = () => {
    onSubmit(activityId, inputValue);
    onClose();
  };

  return (
    <TextModal
      title="คุณสนใจชมรมไหน?"
      placeholder="คำตอบ"
      onClose={onClose}
      value={inputValue}
      onChange={handleInputChange}
      onClick={handleConfirm}
    >
      <h2 className="text-xl font-normal text-center mb-4">ชมรมภายใต้ อบจ.</h2>
    </TextModal>
  );
};

export default FavoriteClubModal;

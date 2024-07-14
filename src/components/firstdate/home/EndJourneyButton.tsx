import React from 'react';

interface EndJourneyButton {
  handleOnClick: () => void;
}

const EndJourneyButton = ({ handleOnClick }: EndJourneyButton) => {
  return (
    <div
      className="flex items-center justify-center px-16 py-2 bg-project-fuchsia rounded-xl text-white text-center text-nowrap cursor-pointer"
      onClick={handleOnClick}
    >
      สิ้นสุดการเดินทาง
    </div>
  );
};

export default EndJourneyButton;

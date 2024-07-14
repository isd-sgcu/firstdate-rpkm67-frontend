import React from 'react';

interface StampSubHeadingProps {
  children: React.ReactNode;
}

const StampSubHeading: React.FC<StampSubHeadingProps> = ({ children }) => {
  return <div className="font-season italic text-lg">{children}</div>;
};

export default StampSubHeading;

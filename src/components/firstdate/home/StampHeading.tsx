import React from 'react';

interface StampHeadingProps {
  children: React.ReactNode;
}

const StampHeading: React.FC<StampHeadingProps> = ({ children }) => {
  return <div className="font-season italic text-xl">{children}</div>;
};

export default StampHeading;

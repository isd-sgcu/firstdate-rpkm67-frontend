import React from 'react';

interface StampContainerProps {
  children: React.ReactNode;
}

const StampContainer: React.FC<StampContainerProps> = ({ children }) => {
  return <div className="flex space-x-5">{children}</div>;
};

export default StampContainer;

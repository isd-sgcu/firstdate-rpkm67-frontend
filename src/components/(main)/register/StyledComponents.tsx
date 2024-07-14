import React, { ChangeEvent } from 'react';

interface StyledInputProps {
  type: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
}

export const StyledInput: React.FC<StyledInputProps> = ({
  type,
  name,
  placeholder,
  value,
  onChange,
  error,
}) => (
  <input
    type={type}
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className={`w-full h-[40px] p-2 border-[0.5px] rounded-lg drop-shadow-sm ${
      error ? 'border-red-500' : 'border-black'
    }`}
  />
);

interface StyledSelectProps {
  name: string;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  error?: boolean;
  children: React.ReactNode;
}

export const StyledSelect: React.FC<StyledSelectProps> = ({
  name,
  value,
  onChange,
  error,
  children,
}) => (
  <select
    name={name}
    value={value}
    onChange={onChange}
    className={`w-full h-[40px] p-2 border-[0.5px] rounded-lg drop-shadow-sm ${
      error ? 'border-red-600' : 'border-black'
    }`}
  >
    {children}
  </select>
);

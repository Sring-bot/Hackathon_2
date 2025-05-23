import React from 'react';

interface InputProps {
  type?: 'text' | 'password' | 'email' | 'number';
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  id?: string;
  icon?: React.ReactNode;
  fullWidth?: boolean;
}

const Input: React.FC<InputProps> = ({
  type = 'text',
  placeholder = '',
  value,
  onChange,
  className = '',
  disabled = false,
  required = false,
  name,
  id,
  icon,
  fullWidth = true,
}) => {
  const baseClasses = 'py-2.5 px-4 rounded-full border border-warmth-200 bg-white focus:ring-2 focus:ring-primary-300 focus:border-primary-300 focus:outline-none transition-all duration-200';
  const disabledClasses = disabled ? 'opacity-60 cursor-not-allowed' : '';
  const widthClass = fullWidth ? 'w-full' : '';
  
  return (
    <div className={`relative ${widthClass}`}>
      {icon && (
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
          {icon}
        </div>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
        name={name}
        id={id}
        className={`${baseClasses} ${disabledClasses} ${icon ? 'pl-10' : ''} ${className} ${widthClass}`}
      />
    </div>
  );
};

export default Input;
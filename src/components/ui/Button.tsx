import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'outlined' | 'text';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  fullWidth = false,
}) => {
  const baseClasses = 'rounded-full font-medium transition-all duration-300 ease-bounce-soft focus:outline-none focus:ring-2 focus:ring-offset-2 transform hover:-translate-y-0.5 active:translate-y-0';
  
  const variantClasses = {
    primary: 'bg-primary-500 text-white hover:bg-primary-600 hover:shadow-glow focus:ring-primary-500',
    secondary: 'bg-secondary-300 text-primary-800 hover:bg-secondary-400 hover:shadow-glow focus:ring-secondary-300',
    accent: 'bg-accent-500 text-white hover:bg-accent-600 hover:shadow-glow focus:ring-accent-500',
    outlined: 'bg-transparent border-2 border-primary-500 text-primary-500 hover:bg-primary-50 hover:border-primary-600 hover:text-primary-600 focus:ring-primary-500',
    text: 'bg-transparent text-primary-600 hover:text-primary-800 hover:bg-primary-50 focus:ring-primary-500',
  };
  
  const sizeClasses = {
    sm: 'py-2 px-4 text-sm',
    md: 'py-2.5 px-6 text-base',
    lg: 'py-3 px-8 text-lg',
  };
  
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed transform-none hover:transform-none' : 'cursor-pointer';
  const widthClass = fullWidth ? 'w-full' : '';
  
  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${widthClass} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
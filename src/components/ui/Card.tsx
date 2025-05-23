import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'elevated' | 'flat';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  variant = 'default',
  padding = 'md',
  onClick,
}) => {
  const baseClasses = 'rounded-2xl transition-all duration-400 animate-fade-in';
  
  const variantClasses = {
    default: 'bg-white/90 backdrop-blur-sm shadow-soft hover:shadow-glow',
    elevated: 'bg-white/95 backdrop-blur-sm shadow-md hover:shadow-lg hover:shadow-glow transition-transform hover:-translate-y-1',
    flat: 'bg-warmth-50/80 backdrop-blur-sm border border-warmth-200 hover:bg-warmth-50/90',
  };
  
  const paddingClasses = {
    none: 'p-0',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };
  
  const clickableClass = onClick ? 'cursor-pointer transform transition-transform duration-300 ease-bounce-soft hover:scale-[1.02]' : '';
  
  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${paddingClasses[padding]} ${clickableClass} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;
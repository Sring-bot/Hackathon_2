import React, { useState } from 'react';

interface TooltipProps {
  children: React.ReactNode;
  content: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  className?: string;
}

const Tooltip: React.FC<TooltipProps> = ({
  children,
  content,
  position = 'top',
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  
  const positionClasses = {
    top: 'bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 mb-2',
    bottom: 'top-full left-1/2 transform -translate-x-1/2 translate-y-2 mt-2',
    left: 'right-full top-1/2 transform -translate-y-1/2 -translate-x-2 mr-2',
    right: 'left-full top-1/2 transform -translate-y-1/2 translate-x-2 ml-2',
  };
  
  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div 
          className={`absolute z-10 px-3 py-2 text-sm text-white bg-gray-800 rounded-lg opacity-90 whitespace-nowrap ${positionClasses[position]} ${className}`}
          role="tooltip"
        >
          {content}
          <div 
            className={`absolute w-2 h-2 bg-gray-800 transform rotate-45 ${
              position === 'top' ? 'bottom-0 left-1/2 -translate-x-1/2 translate-y-1' :
              position === 'bottom' ? 'top-0 left-1/2 -translate-x-1/2 -translate-y-1' :
              position === 'left' ? 'right-0 top-1/2 -translate-y-1/2 translate-x-1' :
              'left-0 top-1/2 -translate-y-1/2 -translate-x-1'
            }`}
          ></div>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
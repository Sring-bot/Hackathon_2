import React from 'react';
import { MoodType } from '../../types';

interface MoodIndicatorProps {
  mood: MoodType;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
  className?: string;
}

const MoodIndicator: React.FC<MoodIndicatorProps> = ({
  mood,
  size = 'md',
  showLabel = false,
  className = '',
}) => {
  const moodColors = {
    neutral: 'bg-gray-400',
    happy: 'bg-green-400',
    sad: 'bg-blue-400',
    anxious: 'bg-yellow-400',
    angry: 'bg-red-400',
    calm: 'bg-accent-400',
  };
  
  const moodLabels = {
    neutral: 'Neutral',
    happy: 'Happy',
    sad: 'Sad',
    anxious: 'Anxious',
    angry: 'Angry',
    calm: 'Calm',
  };
  
  const sizeClasses = {
    sm: 'w-2 h-2',
    md: 'w-3 h-3',
    lg: 'w-4 h-4',
  };
  
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className={`${sizeClasses[size]} ${moodColors[mood]} rounded-full`}></div>
      {showLabel && (
        <span className="text-sm text-gray-600">{moodLabels[mood]}</span>
      )}
    </div>
  );
};

export default MoodIndicator;
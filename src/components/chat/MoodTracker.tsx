import React from 'react';
import { MoodType } from '../../types';
import { Smile, Frown, Meh, AlertCircle, Heart, Zap } from 'lucide-react';
import Tooltip from '../ui/Tooltip';

interface MoodTrackerProps {
  currentMood: MoodType;
  onMoodChange: (mood: MoodType) => void;
}

const MoodTracker: React.FC<MoodTrackerProps> = ({ currentMood, onMoodChange }) => {
  const moods: { type: MoodType; icon: React.ReactNode; label: string; color: string }[] = [
    { type: 'happy', icon: <Smile />, label: 'Happy', color: 'text-secondary-500 hover:bg-secondary-50' },
    { type: 'sad', icon: <Frown />, label: 'Sad', color: 'text-accent-500 hover:bg-accent-50' },
    { type: 'anxious', icon: <Zap />, label: 'Anxious', color: 'text-warmth-500 hover:bg-warmth-50' },
    { type: 'angry', icon: <AlertCircle />, label: 'Angry', color: 'text-primary-500 hover:bg-primary-50' },
    { type: 'neutral', icon: <Meh />, label: 'Neutral', color: 'text-gray-500 hover:bg-gray-50' },
    { type: 'calm', icon: <Heart />, label: 'Calm', color: 'text-calm-500 hover:bg-calm-50' },
  ];

  return (
    <div className="bg-white/80 backdrop-blur-sm shadow-soft hover:shadow-glow transition-all duration-300 rounded-full px-4 py-2 animate-fade-in">
      <p className="text-sm text-gray-600 mr-2 hidden md:block">How are you feeling?</p>
      <div className="flex space-x-1">
        {moods.map((mood) => (
          <Tooltip key={mood.type} content={mood.label}>
            <button
              onClick={() => onMoodChange(mood.type)}
              className={`p-2 rounded-full transition-all duration-300 ${mood.color} ${
                currentMood === mood.type 
                  ? 'bg-opacity-20 ring-2 ring-offset-2 ring-' + mood.color.split(' ')[0] + ' transform scale-110'
                  : 'bg-opacity-0 hover:scale-105'
              }`}
              aria-label={`Feeling ${mood.label}`}
            >
              <div className="h-5 w-5">{mood.icon}</div>
            </button>
          </Tooltip>
        ))}
      </div>
    </div>
  );
};

export default MoodTracker;
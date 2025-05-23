import React from 'react';
import { CommunityMatch } from '../../types';
import Card from '../ui/Card';
import MoodIndicator from '../ui/MoodIndicator';
import Button from '../ui/Button';
import { MessageCircle, Clock } from 'lucide-react';

interface CommunityCardProps {
  match: CommunityMatch;
}

const CommunityCard: React.FC<CommunityCardProps> = ({ match }) => {
  const timeAgo = (date: Date): string => {
    const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
    
    let interval = seconds / 31536000;
    if (interval > 1) return `${Math.floor(interval)} years ago`;
    
    interval = seconds / 2592000;
    if (interval > 1) return `${Math.floor(interval)} months ago`;
    
    interval = seconds / 86400;
    if (interval > 1) return `${Math.floor(interval)} days ago`;
    
    interval = seconds / 3600;
    if (interval > 1) return `${Math.floor(interval)} hours ago`;
    
    interval = seconds / 60;
    if (interval > 1) return `${Math.floor(interval)} minutes ago`;
    
    return `${Math.floor(seconds)} seconds ago`;
  };
  
  return (
    <Card variant="elevated" className="hover:scale-[1.01] transition-transform">
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center mb-2">
            <h3 className="text-lg font-medium text-gray-800">{match.username}</h3>
            <div className="ml-2">
              <MoodIndicator mood={match.mood} showLabel />
            </div>
          </div>
          
          <div className="flex items-center text-xs text-gray-500 mb-4">
            <Clock className="h-3 w-3 mr-1" />
            <span>Active {timeAgo(match.lastActive)}</span>
          </div>
          
          <p className="text-sm text-gray-600 mb-4">
            Feeling the same way? Connect with {match.username} for mutual support.
          </p>
        </div>
      </div>
      
      <Button 
        variant="secondary" 
        size="sm" 
        className="w-full flex items-center justify-center"
      >
        <MessageCircle className="h-4 w-4 mr-2" /> Start Conversation
      </Button>
    </Card>
  );
};

export default CommunityCard;
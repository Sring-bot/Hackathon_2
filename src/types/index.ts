export interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  mood?: 'neutral' | 'happy' | 'sad' | 'anxious' | 'angry' | 'calm';
}

export interface User {
  id: string;
  username: string;
  currentMood?: 'neutral' | 'happy' | 'sad' | 'anxious' | 'angry' | 'calm';
}

export interface CommunityMatch {
  id: string;
  username: string;
  mood: 'neutral' | 'happy' | 'sad' | 'anxious' | 'angry' | 'calm';
  lastActive: Date;
}

export type MoodType = 'neutral' | 'happy' | 'sad' | 'anxious' | 'angry' | 'calm';
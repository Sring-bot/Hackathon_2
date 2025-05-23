import React, { useState } from 'react';
import Card from '../components/ui/Card';
import CommunityCard from '../components/community/CommunityCard';
import Button from '../components/ui/Button';
import { mockCommunityMatches, generateUsername } from '../utils/mockData';
import { MoodType } from '../types';
import { Users, RefreshCw, Filter } from 'lucide-react';

const CommunityPage: React.FC = () => {
  const [moodFilter, setMoodFilter] = useState<MoodType | 'all'>('all');
  const [isGeneratingUsername, setIsGeneratingUsername] = useState(false);
  const [username, setUsername] = useState(generateUsername());
  
  const filteredMatches = moodFilter === 'all' 
    ? mockCommunityMatches 
    : mockCommunityMatches.filter(match => match.mood === moodFilter);
  
  const handleGenerateUsername = () => {
    setIsGeneratingUsername(true);
    
    // Simulate generation delay
    setTimeout(() => {
      setUsername(generateUsername());
      setIsGeneratingUsername(false);
    }, 800);
  };
  
  const moods: { value: MoodType | 'all'; label: string }[] = [
    { value: 'all', label: 'All Moods' },
    { value: 'happy', label: 'Happy' },
    { value: 'sad', label: 'Sad' },
    { value: 'anxious', label: 'Anxious' },
    { value: 'angry', label: 'Angry' },
    { value: 'neutral', label: 'Neutral' },
    { value: 'calm', label: 'Calm' },
  ];
  
  return (
    <div className="min-h-screen bg-warmth-50 pt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-display font-bold text-primary-700 mb-4">Community Support</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Connect with others who understand what you're going through. All interactions are anonymous and respectful.
          </p>
        </div>
        
        {/* Username Card */}
        <Card className="mb-8 max-w-2xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-1">Your Anonymous Identity</h3>
              <p className="text-gray-600 mb-4 md:mb-0">
                Your randomly generated username: <span className="font-bold text-primary-600">{username}</span>
              </p>
            </div>
            <Button 
              variant="outlined" 
              size="sm" 
              onClick={handleGenerateUsername}
              disabled={isGeneratingUsername}
              className="flex items-center"
            >
              <RefreshCw className={`h-4 w-4 mr-2 ${isGeneratingUsername ? 'animate-spin' : ''}`} />
              New Username
            </Button>
          </div>
        </Card>
        
        {/* Filter Controls */}
        <div className="bg-white shadow-softer rounded-lg p-4 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center">
              <Filter className="h-5 w-5 text-gray-500 mr-2" />
              <h3 className="text-lg font-medium text-gray-800">Filter by Mood</h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {moods.map((mood) => (
                <button
                  key={mood.value}
                  onClick={() => setMoodFilter(mood.value)}
                  className={`px-4 py-1.5 rounded-full text-sm transition-colors ${
                    moodFilter === mood.value
                      ? 'bg-primary-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {mood.label}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Community Matches */}
        <div>
          <div className="flex items-center mb-6">
            <Users className="h-5 w-5 text-primary-600 mr-2" />
            <h2 className="text-xl font-medium text-gray-800">
              People Feeling Similar ({filteredMatches.length})
            </h2>
          </div>
          
          {filteredMatches.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMatches.map((match) => (
                <CommunityCard key={match.id} match={match} />
              ))}
            </div>
          ) : (
            <Card className="text-center py-12">
              <p className="text-gray-600 mb-4">No community members found with this mood.</p>
              <Button 
                variant="primary" 
                onClick={() => setMoodFilter('all')}
              >
                View All Moods
              </Button>
            </Card>
          )}
        </div>
        
        {/* Privacy Notice */}
        <div className="mt-12 bg-white rounded-lg shadow-soft p-5 max-w-2xl mx-auto">
          <h3 className="text-lg font-medium text-gray-800 mb-2">Privacy Guarantee</h3>
          <p className="text-gray-600 text-sm">
            Your privacy is our priority. No personal data is stored or shared. Conversations are anonymous and we employ end-to-end encryption. You can delete your conversation history at any time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import { MessageCircle } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-700 mb-6 leading-tight">
          Healing Conversations, <span className="text-accent-500">Anonymously</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          A safe space to express your feelings, find support, and connect with others who understand what you're going through.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/chat">
            <Button 
              variant="primary" 
              size="lg" 
              className="flex items-center"
            >
              <MessageCircle className="mr-2 h-5 w-5" /> 
              Start Talking
            </Button>
          </Link>
          
          <Link to="/community">
            <Button 
              variant="outlined" 
              size="lg"
            >
              Join Community
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
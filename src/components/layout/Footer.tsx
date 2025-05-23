import React from 'react';
import { Heart, Info } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-warmth-100 text-primary-600 py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm flex items-center justify-center md:justify-start">
              Made with <Heart className="mx-1 h-4 w-4 text-red-500" /> by EmpathAI
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center">
            <p className="text-xs text-gray-500 mb-2 md:mb-0 md:mr-6">
              Anonymous mental health support - Your privacy is our priority
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="text-sm text-primary-600 hover:text-primary-700 transition-colors">
                
              </a>
              <a href="#" className="text-sm text-primary-600 hover:text-primary-700 transition-colors">
                
              </a>
              <a href="#" className="text-sm text-primary-600 hover:text-primary-700 transition-colors flex items-center">
               
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-4 text-xs text-center text-gray-500">
          <p>EmpathAI is not a replacement for professional mental health services.</p>
          <p>If you're experiencing a crisis, please call 112 or your local emergency services.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import Card from '../ui/Card';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  rating: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, rating }) => {
  return (
    <Card className="h-full hover:scale-[1.01] transition-transform">
      <div className="flex flex-col h-full">
        <div className="flex mb-3">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star 
              key={index}
              className={`h-4 w-4 ${
                index < rating 
                  ? 'text-yellow-400 fill-yellow-400' 
                  : 'text-gray-300'
              }`} 
            />
          ))}
        </div>
        
        <blockquote className="flex-1 text-gray-600 italic mb-4 text-sm md:text-base">
          "{quote}"
        </blockquote>
        
        <footer className="text-right">
          <p className="text-sm font-medium text-gray-800">— {author}</p>
        </footer>
      </div>
    </Card>
  );
};

export default TestimonialCard;
import React from 'react';
import Card from '../ui/Card';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <Card className="h-full hover:translate-y-[-4px] transition-all">
      <div className="flex flex-col items-center text-center">
        <div className="p-4 bg-primary-50 rounded-full mb-4">
          <div className="text-primary-500">
            {icon}
          </div>
        </div>
        <h3 className="text-lg font-medium text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </Card>
  );
};

export default FeatureCard;
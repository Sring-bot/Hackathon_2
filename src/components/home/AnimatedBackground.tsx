import React from 'react';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 opacity-30 pointer-events-none overflow-hidden">
      {/* Nature-inspired floating elements */}
      <div className="absolute top-20 left-[10%] w-32 h-32 bg-primary-100/50 rounded-full blur-xl animate-float-slow"></div>
      <div className="absolute top-[30%] left-[85%] w-40 h-40 bg-secondary-100/50 rounded-full blur-xl animate-float"></div>
      <div className="absolute top-[60%] left-[5%] w-48 h-48 bg-accent-100/50 rounded-full blur-xl animate-float-slower"></div>
      <div className="absolute top-[70%] left-[80%] w-36 h-36 bg-primary-100/50 rounded-full blur-xl animate-float-slow"></div>
      
      {/* Leaf-like shapes */}
      <div className="absolute top-[15%] left-[15%] w-24 h-24 bg-warmth-100/60 rounded-tl-[100px] rounded-br-[100px] transform rotate-45 animate-float blur-sm"></div>
      <div className="absolute top-[65%] left-[55%] w-20 h-20 bg-secondary-100/60 rounded-tr-[80px] rounded-bl-[80px] transform -rotate-12 animate-float-slow blur-sm"></div>
      <div className="absolute top-[35%] left-[75%] w-28 h-28 bg-calm-100/60 rounded-tl-[120px] rounded-br-[120px] transform rotate-12 animate-float-slower blur-sm"></div>
      
      {/* Additional nature elements */}
      <div className="absolute top-[45%] left-[25%] w-16 h-16 bg-primary-200/40 rounded-full blur-lg animate-pulse-slow"></div>
      <div className="absolute top-[85%] left-[40%] w-24 h-24 bg-accent-100/40 rounded-full blur-lg animate-float"></div>
      <div className="absolute top-[10%] left-[60%] w-20 h-20 bg-warmth-200/40 rounded-full blur-lg animate-float-slower"></div>
    </div>
  );
};

export default AnimatedBackground;
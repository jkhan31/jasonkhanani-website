
import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: React.FC<LogoProps> = ({ className = "", size = 'md' }) => {
  const sizeMap = {
    sm: 'w-12 h-6',
    md: 'w-24 h-12',
    lg: 'w-48 h-24',
    xl: 'w-96 h-48'
  };

  return (
    <div 
      className={`inline-block select-none transition-transform hover:scale-105 duration-300 ${sizeMap[size]} ${className}`}
      aria-label="Jason Kester Hanani Signature"
    >
      <svg 
        viewBox="0 0 160 80" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className="w-full h-full drop-shadow-sm"
      >
        <path 
          d="M45,35 Q45,55 45,65 C45,85 25,85 25,75 Q25,65 35,65 M35,65 L55,15 C60,5 65,5 63,15 L52,65 M53,45 Q70,40 68,55 L75,65 M75,65 L95,15 C100,5 105,5 103,15 L92,65 M93,45 Q115,40 110,60 M47,24 A1.5,1.5 0 1 1 46.9,24" 
          stroke="currentColor" 
          strokeWidth="3.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="animate-logo-draw"
        />
      </svg>
      <style>{`
        @keyframes logo-draw {
          from { stroke-dasharray: 600; stroke-dashoffset: 600; }
          to { stroke-dashoffset: 0; }
        }
        .animate-logo-draw {
          stroke-dasharray: 600;
          animation: logo-draw 1.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

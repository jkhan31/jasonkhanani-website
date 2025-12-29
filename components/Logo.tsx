import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: React.FC<LogoProps> = ({ className = "", size = 'md' }) => {
  // We use height as the anchor since the signature is very wide (5:1 aspect ratio)
  const heightMap = {
    sm: 'h-5 md:h-6',
    md: 'h-8 md:h-10',
    lg: 'h-16 md:h-20',
    xl: 'h-32 md:h-40'
  };

  // Explicit dimensions based on 5:1 aspect ratio for CLS prevention
  const dimensionMap = {
    sm: { width: 125, height: 25 },
    md: { width: 200, height: 40 },
    lg: { width: 400, height: 80 },
    xl: { width: 800, height: 160 }
  };

  const logoUrl = "https://see.fontimg.com/api/rf5/K74zp/ZjA0ZDIwYjE0YzZmNDIzYjkzNzA1ZTg1OTgwZGM3MTQudHRm/amto/motterdam.png?r=fs&h=300&w=1500&fg=000000&bg=FFFFFF&tb=1&s=200";

  // Check if the logo is being placed on a dark background based on common utility classes in this app
  const isInverse = className.includes('text-ricePaper') || className.includes('text-white');

  return (
    <div 
      className={`inline-flex items-center select-none transition-transform hover:scale-105 duration-500 will-change-transform ${className}`}
      aria-label="Jason Kester Hanani Signature"
    >
      <img 
        src={logoUrl} 
        alt="jkh signature"
        width={dimensionMap[size].width}
        height={dimensionMap[size].height}
        className={`
          ${heightMap[size]} w-auto object-contain 
          ${isInverse ? 'invert brightness-[1.2] mix-blend-screen' : 'mix-blend-multiply'}
        `}
        loading="eager"
      />
    </div>
  );
};
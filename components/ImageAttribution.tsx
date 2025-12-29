import React from 'react';

interface ImageAttributionProps {
  attribution?: string;
  attributionUrl?: string;
  className?: string;
}

export const ImageAttribution: React.FC<ImageAttributionProps> = ({
  attribution,
  attributionUrl,
  className = '',
}) => {
  if (!attribution) return null;

  // Check if this is an Unsplash image by checking the attribution URL
  const isUnsplashImage = attributionUrl?.includes('unsplash.com');

  return (
    <p className={`text-xs text-sumiInk/60 mt-2 ${className}`}>
      Photo by{' '}
      {attributionUrl ? (
        <a
          href={attributionUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-hankoRust transition-colors"
        >
          {attribution}
        </a>
      ) : (
        <span>{attribution}</span>
      )}
      {isUnsplashImage && (
        <>
          {' '}on{' '}
          <a
            href="https://unsplash.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-hankoRust transition-colors"
          >
            Unsplash
          </a>
        </>
      )}
    </p>
  );
};

import React from 'react';

interface ImageAttributionProps {
  attribution?: string;
  attributionUrl?: string;
  className?: string;
  suppressLink?: boolean;
}

export const ImageAttribution: React.FC<ImageAttributionProps> = ({
  attribution,
  attributionUrl,
  className = '',
  suppressLink = false,
}) => {
  if (!attribution) return null;

  // Check if this is an Unsplash image by properly validating the URL hostname
  const isUnsplashImage = (() => {
    if (!attributionUrl) return false;
    try {
      const url = new URL(attributionUrl);
      // Check if hostname is exactly unsplash.com or a subdomain of unsplash.com
      return url.hostname === 'unsplash.com' || url.hostname.endsWith('.unsplash.com');
    } catch {
      // Invalid URL
      return false;
    }
  })();

  return (
    <p className={`text-xs text-sumiInk/60 mt-2 ${className}`}>
      Photo by{' '}
      {suppressLink ? (
        <>
          <span>{attribution}</span>
          {isUnsplashImage && (
            <>
              {' '}on{' '}
              <span className="underline hover:text-hankoRust transition-colors">Unsplash</span>
            </>
          )}
        </>
      ) : (
        <>
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
        </>
      )}
    </p>
  );
};

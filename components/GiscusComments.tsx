import React, { useEffect, useRef } from 'react';

interface GiscusCommentsProps {
  articleTitle: string;
  articleSlug: string;
}

export const GiscusComments: React.FC<GiscusCommentsProps> = ({ articleTitle, articleSlug }) => {
  const commentsRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = React.useState(false);

  useEffect(() => {
    // Only load Giscus when the component is in viewport (lazy loading)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isLoaded) {
            setIsLoaded(true);
          }
        });
      },
      {
        rootMargin: '200px', // Start loading 200px before it comes into view
      }
    );

    if (commentsRef.current) {
      observer.observe(commentsRef.current);
    }

    return () => {
      if (commentsRef.current) {
        observer.unobserve(commentsRef.current);
      }
    };
  }, [isLoaded]);

  useEffect(() => {
    if (!isLoaded) return;

    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.setAttribute('data-repo', 'jkhan31/jasonkhanani-website');
    script.setAttribute('data-repo-id', process.env.NEXT_PUBLIC_GISCUS_REPO_ID || '');
    script.setAttribute('data-category', 'Article Comments');
    script.setAttribute('data-category-id', process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID || '');
    script.setAttribute('data-mapping', 'specific');
    script.setAttribute('data-term', articleSlug);
    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'top');
    script.setAttribute('data-theme', 'light');
    script.setAttribute('data-lang', 'en');
    script.setAttribute('data-loading', 'lazy');
    script.crossOrigin = 'anonymous';
    script.async = true;

    if (commentsRef.current) {
      commentsRef.current.appendChild(script);
    }

    return () => {
      if (commentsRef.current && commentsRef.current.contains(script)) {
        commentsRef.current.removeChild(script);
      }
    };
  }, [isLoaded, articleSlug]);

  return (
    <div className="mt-16 pt-12 border-t border-sumiInk/10">
      <h2 className="text-2xl font-serif text-sumiInk mb-8">Discussion</h2>
      <div 
        ref={commentsRef}
        className="giscus-comments"
        style={{
          // Custom CSS variables to match design system
          '--color-text-primary': '#1A1A1A',
          '--color-text-secondary': 'rgba(26, 26, 26, 0.6)',
          '--color-bg-primary': '#FAF5F0',
          '--color-bg-secondary': 'rgba(240, 127, 46, 0.05)',
          '--color-border-primary': 'rgba(26, 26, 26, 0.1)',
          '--color-accent': '#F07F2E',
        } as React.CSSProperties}
      >
        {!isLoaded && (
          <div className="text-center py-8 text-sumiInk/50 text-sm">
            Loading comments...
          </div>
        )}
      </div>
    </div>
  );
};

export default GiscusComments;

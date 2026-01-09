import React, { useEffect, useRef } from 'react';
import Giscus from '@giscus/react';

interface GiscusCommentsProps {
  articleTitle: string;
  articleSlug: string;
}

export const GiscusComments: React.FC<GiscusCommentsProps> = ({ articleTitle, articleSlug }) => {
  const commentsRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = React.useState(false);

  // Get environment variables and validate
  const repoId = process.env.NEXT_PUBLIC_GISCUS_REPO_ID;
  const categoryId = process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID;

  // Don't render if required config is missing
  if (!repoId || !categoryId) {
    console.warn('Giscus configuration missing. Comments disabled.');
    return null;
  }

  useEffect(() => {
    // Only load Giscus when the component is in viewport (lazy loading)
    const currentRef = commentsRef.current;
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

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [isLoaded]);

  return (
    <div className="mt-16 pt-12 border-t border-sumiInk/10">
      <h2 className="text-2xl font-serif text-sumiInk mb-8">Discussion</h2>
      <div 
        ref={commentsRef}
        className="giscus-comments"
      >
        {isLoaded ? (
          <Giscus
            id="comments"
            repo="jkhan31/jasonkhanani-website"
            repoId={repoId}
            category="Article Comments"
            categoryId={categoryId}
            mapping="specific"
            term={articleSlug}
            strict="0"
            reactionsEnabled="1"
            emitMetadata="0"
            inputPosition="top"
            theme="light"
            lang="en"
            loading="lazy"
          />
        ) : (
          <div className="text-center py-8 text-sumiInk/50 text-sm">
            Loading comments...
          </div>
        )}
      </div>
    </div>
  );
};

export default GiscusComments;

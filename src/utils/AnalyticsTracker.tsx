import { useEffect } from 'react';
import { useRouter } from 'next/router';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

const AnalyticsTracker: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (typeof window !== 'undefined' && window.gtag) {
        try {
          window.gtag('event', 'page_view', {
            page_path: url,
            page_location: window.location.href,
            page_title: document.title,
          });
        } catch (e) {
          // swallow errors to avoid crashing app if gtag misbehaves
          // console.debug('gtag error', e);
        }
      }
    };

    // Track the initial page load
    handleRouteChange(router.asPath);

    // Subscribe to route changes
    router.events.on('routeChangeComplete', handleRouteChange);

    // Cleanup subscription on unmount
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.asPath, router.events]);

  return null;
};

export default AnalyticsTracker;

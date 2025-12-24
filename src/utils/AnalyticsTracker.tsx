import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

const AnalyticsTracker: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      try {
        window.gtag('event', 'page_view', {
          page_path: location.pathname + location.search,
          page_location: window.location.href,
          page_title: document.title,
        });
      } catch (e) {
        // swallow errors to avoid crashing app if gtag misbehaves
        // console.debug('gtag error', e);
      }
    }
  }, [location]);

  return null;
};

export default AnalyticsTracker;

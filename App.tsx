import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import AnalyticsTracker from './src/utils/AnalyticsTracker';
import { Layout } from './components/Layout';

// Helper function to detect chunk loading errors
const isChunkLoadError = (error: unknown): boolean => {
  if (error instanceof Error) {
    return (
      error.message.includes('Failed to fetch dynamically imported module') ||
      error.message.includes('Importing a module script failed')
    );
  }
  // Check for ChunkLoadError by name property
  return (error as any)?.name === 'ChunkLoadError';
};

// Enhanced retry logic with exponential backoff
const lazyWithRetry = (
  importFunc: () => Promise<{ default: React.ComponentType<any> }>,
  retries = 3
) => {
  return lazy(() => {
    const attemptImport = async (attemptsLeft: number): Promise<{ default: React.ComponentType<any> }> => {
      try {
        return await importFunc();
      } catch (error) {
        if (isChunkLoadError(error)) {
          console.warn(`Chunk load error detected, ${attemptsLeft} attempts remaining`);
          
          // If we have retries left, wait and try again with exponential backoff
          if (attemptsLeft > 0) {
            const delay = Math.pow(2, 3 - attemptsLeft) * 1000; // 1s, 2s, 4s
            await new Promise(resolve => setTimeout(resolve, delay));
            return attemptImport(attemptsLeft - 1);
          }
          
          // No retries left, try reloading the page once
          const hasReloaded = sessionStorage.getItem('page-has-been-force-reloaded');
          if (!hasReloaded) {
            console.warn('All retry attempts failed, reloading page to get latest version');
            sessionStorage.setItem('page-has-been-force-reloaded', 'true');
            window.location.reload();
            // Return a promise that never resolves since we're reloading
            return new Promise(() => {});
          }
          
          // Already reloaded once, show error
          console.error('Chunk load error persists after reload');
        }
        // Re-throw the error if it's not a chunk error or we've exhausted all options
        throw error;
      }
    };
    
    return attemptImport(retries);
  });
};

const Home = lazyWithRetry(() => import('./pages/Home'));
const Evidence = lazyWithRetry(() => import('./pages/Evidence'));
const Framework = lazyWithRetry(() => import('./pages/Framework'));
const Writing = lazyWithRetry(() => import('./pages/Writing'));
const Article = lazyWithRetry(() => import('./pages/Article'));
const Resume = lazyWithRetry(() => import('./pages/Resume'));
const Contact = lazyWithRetry(() => import('./pages/Contact'));

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
    // Clear the reload flag on successful navigation
    sessionStorage.removeItem('page-has-been-force-reloaded');
  }, [pathname]);
  return null;
};

const Loading = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="w-12 h-12 border-0.5 border-hankoRust/20 border-t-hankoRust rounded-full animate-spin" />
  </div>
);

interface ErrorBoundaryState {
  error: Error | null;
}

class ErrorBoundary extends React.Component<{ children: React.ReactNode }, ErrorBoundaryState> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { error: null };
  }
  static getDerivedStateFromError(error: Error) {
    return { error };
  }
  componentDidCatch(error: Error, info: any) {
    console.error('ErrorBoundary caught', error, info);
    
    if (isChunkLoadError(error)) {
      console.warn('Chunk load error detected in ErrorBoundary, attempting reload');
      const hasReloaded = sessionStorage.getItem('page-has-been-force-reloaded');
      if (!hasReloaded) {
        sessionStorage.setItem('page-has-been-force-reloaded', 'true');
        window.location.reload();
      }
    }
  }
  render() {
    if (this.state.error) {
      if (isChunkLoadError(this.state.error)) {
        return (
          <div className="p-12 max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-foxOrange mb-4">Loading Error</h2>
            <p className="text-lg mb-6">
              We're having trouble loading this page. This usually happens after we update the site.
            </p>
            <button
              onClick={() => {
                sessionStorage.removeItem('page-has-been-force-reloaded');
                window.location.reload();
              }}
              className="px-6 py-3 bg-hankoRust text-white rounded-lg hover:bg-hankoRust/90 transition-colors"
            >
              Refresh Page
            </button>
          </div>
        );
      }
      return (
        <div className="p-12 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foxOrange mb-4">Application error</h2>
          <pre className="whitespace-pre-wrap text-sm bg-white/5 p-6 border rounded">{String(this.state.error && this.state.error.stack)}</pre>
        </div>
      );
    }
    return this.props.children as any;
  }
}

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AnalyticsTracker />
      <Layout>
        <ErrorBoundary>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/evidence" element={<Evidence />} />
            <Route path="/framework" element={<Framework />} />
            <Route path="/writing" element={<Writing />} />
            <Route path="/writing/:slug" element={<Article />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
        </ErrorBoundary>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
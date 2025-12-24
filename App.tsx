
import React, { Suspense, lazy } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';

const Home = lazy(() => import('./pages/Home'));
const Evidence = lazy(() => import('./pages/Evidence'));
const Framework = lazy(() => import('./pages/Framework'));
const Writing = lazy(() => import('./pages/Writing'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const Resume = lazy(() => import('./pages/Resume'));
const Contact = lazy(() => import('./pages/Contact'));

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Loading = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="w-12 h-12 border-0.5 border-hankoRust/20 border-t-hankoRust rounded-full animate-spin" />
  </div>
);

class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { error: Error | null }> {
  constructor(props: any) {
    super(props);
    this.state = { error: null };
  }
  static getDerivedStateFromError(error: Error) {
    return { error };
  }
  componentDidCatch(error: Error, info: any) {
    console.error('ErrorBoundary caught', error, info);
  }
  render() {
    if (this.state.error) {
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
    <HashRouter>
      <ScrollToTop />
      <Layout>
        <ErrorBoundary>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/evidence" element={<Evidence />} />
            <Route path="/framework" element={<Framework />} />
            <Route path="/writing" element={<Writing />} />
            <Route path="/writing/:slug" element={<BlogPost />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
        </ErrorBoundary>
      </Layout>
    </HashRouter>
  );
};

export default App;
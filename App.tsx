
import React, { Suspense, lazy } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';

const Home = lazy(() => import('./pages/Home'));
const Evidence = lazy(() => import('./pages/Evidence'));
const Framework = lazy(() => import('./pages/Framework'));
const Writing = lazy(() => import('./pages/Writing'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const Resume = lazy(() => import('./pages/Resume'));

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

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Layout>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/evidence" element={<Evidence />} />
            <Route path="/framework" element={<Framework />} />
            <Route path="/writing" element={<Writing />} />
            <Route path="/writing/:slug" element={<BlogPost />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </Suspense>
      </Layout>
    </HashRouter>
  );
};

export default App;
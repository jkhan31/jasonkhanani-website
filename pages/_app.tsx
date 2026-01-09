import type { AppProps } from 'next/app';
import { Layout } from '../components/Layout';
import AnalyticsTracker from '../src/utils/AnalyticsTracker';
import '../src/index.css';
import '../src/styles.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AnalyticsTracker />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

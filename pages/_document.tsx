import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Default SEO Meta Tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Default Description */}
        <meta 
          name="description" 
          content="Jason Kester Hanani - Industrial Engineer & Systems Architect. Turning messy operations into clear systems through diagnostics and design." 
        />
        
        {/* Open Graph Defaults */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Jason Kester Hanani" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card Defaults */}
        <meta name="twitter:card" content="summary_large_image" />
        
        {/* Favicon */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

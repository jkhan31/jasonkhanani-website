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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

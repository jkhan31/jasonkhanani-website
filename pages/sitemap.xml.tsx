import { GetServerSideProps } from 'next';
import { client } from '../src/client';

const HOSTNAME = 'https://jasonkhanani.com';

// Static routes that should always be in sitemap
const staticRoutes = [
  '/',
  '/evidence',
  '/framework',
  '/writing',
  '/resume',
  '/contact'
];

/**
 * Generate XML sitemap from list of URLs
 */
function generateSiteMap(articleSlugs: string[]) {
  const staticUrls = staticRoutes.map(route => `  <url>
    <loc>${HOSTNAME}${route}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('\n');

  const articleUrls = articleSlugs.map(slug => `  <url>
    <loc>${HOSTNAME}/writing/${slug}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticUrls}
${articleUrls}
</urlset>`;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  try {
    // Fetch published articles from Sanity
    const query = `*[_type == "article" 
      && (
        !defined(status) || 
        status == "published" || 
        (status == "scheduled" && scheduledPublishDate <= now())
      )
    ].slug.current`;
    
    const articleSlugs = await client.fetch(query);

    // Generate sitemap XML
    const sitemap = generateSiteMap(articleSlugs || []);

    // Set response headers
    res.setHeader('Content-Type', 'text/xml; charset=utf-8');
    // Cache for 1 hour, but allow serving stale content for 24 hours while revalidating
    res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400');
    res.write(sitemap);
    res.end();

    return { props: {} };
  } catch (error) {
    console.error('Error generating dynamic sitemap:', error);
    
    // Fallback: generate sitemap with static routes only
    const fallbackSitemap = generateSiteMap([]);
    res.setHeader('Content-Type', 'text/xml; charset=utf-8');
    res.setHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=600');
    res.write(fallbackSitemap);
    res.end();

    return { props: {} };
  }
};

// Component never renders (sitemap is returned in getServerSideProps)
export default function Sitemap() {
  return null;
}

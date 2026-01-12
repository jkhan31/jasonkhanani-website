import { GetServerSideProps } from 'next';
import { client } from '../src/client';

const HOSTNAME = 'https://jasonkhanani.com';

const staticRoutes = [
  '/',
  '/evidence',
  '/framework',
  '/writing',
  '/resume',
  '/contact'
];

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
    const query = `*[_type == "article" 
      && (
        !defined(status) || 
        status == "published" || 
        (status == "scheduled" && scheduledPublishDate <= now())
      )
    ].slug.current`;
    
    const articleSlugs = await client.fetch(query);
    const sitemap = generateSiteMap(articleSlugs || []);

    res.setHeader('Content-Type', 'text/xml; charset=utf-8');
    res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400');
    res.write(sitemap);
    res.end();

    return { props: {} };
  } catch (error) {
    console.error('Error generating dynamic sitemap:', error);
    
    const fallbackSitemap = generateSiteMap([]);
    res.setHeader('Content-Type', 'text/xml; charset=utf-8');
    res.setHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=600');
    res.write(fallbackSitemap);
    res.end();

    return { props: {} };
  }
};

export default function Sitemap() {
  return null;
}

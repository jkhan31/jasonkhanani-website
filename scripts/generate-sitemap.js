import { createClient } from '@sanity/client';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Sanity client configuration
const client = createClient({
  projectId: 'lrta5lyp',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-05-03',
});

const hostname = 'https://jasonkhanani.com';

// Static routes
const staticRoutes = ['/', '/evidence', '/framework', '/writing', '/resume', '/contact'];

async function generateSitemap() {
  try {
    // Query Sanity for all article slugs
    const query = '*[_type == "article"].slug.current';
    const articleSlugs = await client.fetch(query);
    
    console.log(`Found ${articleSlugs.length} articles from Sanity`);
    
    // Combine static routes with article routes
    const allUrls = [
      ...staticRoutes,
      ...articleSlugs.map(slug => `/writing/${slug}`)
    ];
    
    // Generate XML sitemap
    const urlElements = allUrls.map(url => {
      return `  <url>
    <loc>${hostname}${url}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
    }).join('\n');
    
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlElements}
</urlset>`;
    
    // Write to public/sitemap.xml
    const outDir = path.resolve(__dirname, '..', 'public');
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, 'sitemap.xml'), sitemap);
    
    console.log('Sitemap generated successfully to public/sitemap.xml');
    console.log(`Total URLs: ${allUrls.length} (${staticRoutes.length} static + ${articleSlugs.length} articles)`);
  } catch (error) {
    console.error('Error generating sitemap:', error);
    process.exit(1);
  }
}

generateSitemap();

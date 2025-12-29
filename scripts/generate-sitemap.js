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

/**
 * Generate XML sitemap from list of URLs
 */
function generateSitemapXML(urls) {
  const urlElements = urls.map(url => {
    return `  <url>
    <loc>${hostname}${url}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
  }).join('\n');
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlElements}
</urlset>`;
}

async function generateSitemap() {
  try {
    // Query Sanity for all article slugs
    const query = '*[_type == "article"].slug.current';
    let articleSlugs = [];
    
    try {
      articleSlugs = await client.fetch(query);
      console.log(`Found ${articleSlugs.length} articles from Sanity`);
    } catch (fetchError) {
      console.warn('Failed to fetch articles from Sanity, generating sitemap with static routes only:', fetchError);
      // Continue with empty article list - this is acceptable for build time
    }
    
    // Filter out null/undefined slugs
    const validSlugs = Array.isArray(articleSlugs) 
      ? articleSlugs.filter(slug => slug != null && slug !== '')
      : [];
    
    console.log(`Using ${validSlugs.length} valid article slugs`);
    
    // Combine static routes with article routes
    const allUrls = [
      ...staticRoutes,
      ...validSlugs.map(slug => `/writing/${slug}`)
    ];
    
    // Generate XML sitemap
    const sitemap = generateSitemapXML(allUrls);
    
    // Write to public/sitemap.xml
    const outDir = path.resolve(__dirname, '..', 'public');
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, 'sitemap.xml'), sitemap);
    
    console.log('Sitemap generated successfully to public/sitemap.xml');
    console.log(`Total URLs: ${allUrls.length} (${staticRoutes.length} static + ${validSlugs.length} articles)`);
  } catch (error) {
    console.error('Error generating sitemap:', error);
    // Don't fail the build - generate a basic sitemap with static routes only
    const basicSitemap = generateSitemapXML(staticRoutes);
    
    const outDir = path.resolve(__dirname, '..', 'public');
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, 'sitemap.xml'), basicSitemap);
    console.log('Generated basic sitemap with static routes only');
  }
}

generateSitemap();

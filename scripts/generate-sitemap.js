const sitemap = require('sitemap');
const fs = require('fs');
const path = require('path');

const hostname = 'https://jasonkhanani.com'; // Your production domain

const routes = [
  '/',
  '/resume',
  '/writing',
  '/framework',
  '/evidence',
  '/contact',
  // Add any other static routes here
  // For dynamic routes (like blog articles), you'd fetch them here
  // e.g., ...blogArticleSlugs.map(slug => `/writing/${slug}`)
];

const sitemapInstance = sitemap.createSitemap({
  hostname: hostname,
  urls: routes.map(route => ({ url: route, changefreq: 'weekly', priority: 0.8 })),
});

const outDir = path.resolve(__dirname, '..', 'public');
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'sitemap.xml'), sitemapInstance.toString());

console.log('Sitemap generated successfully to public/sitemap.xml');

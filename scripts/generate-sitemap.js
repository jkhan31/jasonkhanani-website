import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

const links = routes.map(route => ({ url: route, changefreq: 'weekly', priority: 0.8 }));

const sitemapStream = new SitemapStream({ hostname });
const xmlBuffer = await streamToPromise(Readable.from(links).pipe(sitemapStream));

const outDir = path.resolve(__dirname, '..', 'public');
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'sitemap.xml'), xmlBuffer.toString());

console.log('Sitemap generated successfully to public/sitemap.xml');

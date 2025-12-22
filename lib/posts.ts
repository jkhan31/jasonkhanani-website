import matter from 'gray-matter';
import readingTime from 'reading-time';

type RawModule = Record<string, string>;

const modules = import.meta.glob('./content/posts/*.md', { eager: true, as: 'raw' }) as RawModule;

export const ARTICLES = Object.entries(modules).map(([filePath, raw]) => {
  const { data, content } = matter(raw);
  const slugMatch = filePath.match(/([^/\\]+)\.md$/);
  const slug = slugMatch ? slugMatch[1] : filePath;
  return {
    slug,
    title: data.title,
    excerpt: data.excerpt,
    date: data.date,
    readTime: data.readTime || readingTime(content).text,
    category: data.category,
    tags: data.tags || [],
    content,
  };
}).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export type Article = typeof ARTICLES[number];

import matter from 'gray-matter';


type RawModule = Record<string, string>;

const modules = import.meta.glob('../content/posts/*.md', { eager: true, query: '?raw', import: 'default' }) as RawModule;

function estimateReadingTime(text: string) {
  const words = (text || '').split(/\s+/).filter(Boolean).length;
  const wpm = 200;
  const minutes = Math.max(1, Math.round(words / wpm));
  return `${minutes} min`;
}

export const ARTICLES = Object.entries(modules).map(([filePath, raw]) => {
  const { data, content } = matter(raw);
  const slugMatch = filePath.match(/([^/\\]+)\.md$/);
  const slug = slugMatch ? slugMatch[1] : filePath;
  return {
    slug,
    title: data.title,
    excerpt: data.excerpt,
    date: data.date,
    readTime: data.readTime || estimateReadingTime(content),
    category: data.category,
    tags: data.tags || [],
    content,
  };
}).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export type Article = typeof ARTICLES[number];

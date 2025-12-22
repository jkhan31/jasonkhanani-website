type RawModule = Record<string, string>;

const modules = import.meta.glob('../content/posts/*.md', { eager: true, query: '?raw', import: 'default' }) as RawModule;

function estimateReadingTime(text: string) {
  const words = (text || '')
    .replace(/---[\s\S]*?---/, '')
    .split(/\s+/)
    .filter(Boolean).length;
  const wpm = 200;
  const minutes = Math.max(1, Math.round(words / wpm));
  return `${minutes} min`;
}

function parseFrontmatter(raw: string) {
  // Simple, safe frontmatter parser for browser environments.
  // Supports basic key: value lines and JSON-style arrays/objects for values.
  const fmMatch = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!fmMatch) return { data: {}, content: raw };
  const fm = fmMatch[1];
  const content = raw.slice(fmMatch[0].length);
  const data: Record<string, any> = {};
  for (const line of fm.split(/\r?\n/)) {
    const kvMatch = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!kvMatch) continue;
    const key = kvMatch[1];
    let val = kvMatch[2].trim();
    if (!val) { data[key] = ''; continue; }
    // Try JSON parse for arrays/objects or quoted strings
    if ((val.startsWith('{') && val.endsWith('}')) || (val.startsWith('[') && val.endsWith(']'))) {
      try { data[key] = JSON.parse(val); continue; } catch {}
    }
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      data[key] = val.slice(1, -1);
      continue;
    }
    // comma-separated list fallback for tags
    if (key.toLowerCase() === 'tags' && val.includes(',')) {
      data[key] = val.split(/\s*,\s*/).filter(Boolean);
      continue;
    }
    data[key] = val;
  }
  return { data, content };
}

export const ARTICLES = Object.entries(modules).map(([filePath, raw]) => {
  const { data, content } = parseFrontmatter(raw);
  const slugMatch = filePath.match(/([^/\\]+)\.md$/);
  const slug = slugMatch ? slugMatch[1] : filePath;
  return {
    slug,
    title: data.title || slug,
    excerpt: data.excerpt || '',
    date: data.date || '',
    readTime: data.readTime || estimateReadingTime(content),
    category: data.category || '',
    tags: data.tags || [],
    content,
  };
}).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export type Article = typeof ARTICLES[number];

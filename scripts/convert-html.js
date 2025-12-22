#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const TurndownService = require('turndown');

function slugify(s) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

async function main() {
  const argv = process.argv.slice(2);
  if (argv.length < 1) {
    console.error('Usage: node convert-html.js <file.html> "Optional Title"');
    process.exit(1);
  }
  const file = argv[0];
  const title = argv[1] || null;
  const html = fs.readFileSync(file, 'utf8');
  const turndown = new TurndownService({ headingStyle: 'atx' });
  const md = turndown.turndown(html);

  const useTitle = title || (md.split('\n').find(l => l.trim().length && l.startsWith('#')) || '').replace(/^#+\s*/, '') || path.basename(file, path.extname(file));
  const slug = slugify(useTitle || 'post');
  const date = new Date().toISOString().slice(0,10);
  const outDir = path.join(__dirname, '..', 'content', 'posts');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
  const filename = `${date}-${slug}.md`;
  const filePath = path.join(outDir, filename);

  const frontmatter = `---\ntitle: "${(useTitle||'Untitled').replace(/"/g,'\\"')}"\ndate: "${date}"\nexcerpt: ""\ncategory: "Tactical"\ntags: []\n---\n\n`;
  fs.writeFileSync(filePath, frontmatter + md);
  console.log('Wrote', filePath);
}

main().catch(err => { console.error(err); process.exit(1); });

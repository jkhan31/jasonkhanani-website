#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const readline = require('readline');

function slugify(s) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

async function ask(question) {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  return new Promise(resolve => rl.question(question, ans => { rl.close(); resolve(ans); }));
}

(async () => {
  const title = process.argv[2] || (await ask('Post title: '));
  if (!title) {
    console.error('Title required');
    process.exit(1);
  }
  const suggestedSlug = slugify(title);
  const slug = process.argv[3] || (await ask(`Slug [${suggestedSlug}]: `)) || suggestedSlug;
  const date = new Date().toISOString().slice(0,10);
  const filename = `${date}-${slug}.md`;
  const outDir = path.join(__dirname, '..', 'content', 'posts');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
  const filePath = path.join(outDir, filename);
  if (fs.existsSync(filePath)) {
    console.error('File already exists:', filePath);
    process.exit(1);
  }
  const frontmatter = `---\ntitle: "${title.replace(/"/g, '\\"')}"\ndate: "${date}"\nexcerpt: ""\ncategory: "Tactical"\ntags: []\n---\n\n`;
  const body = `## TL;DR\n\nWrite a concise summary here.\n\n## Intro\n\nStart your post...\n\n`;
  fs.writeFileSync(filePath, frontmatter + body);
  console.log('Created', filePath);
})();

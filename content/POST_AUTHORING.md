# Authoring Posts for this Site

This document explains the recommended workflow to create new blog posts for this repository, and provides scripts to scaffold new posts and convert content from DOCX/HTML to Markdown.

Summary
- Posts live in `content/posts/` as Markdown (`.md`) files with YAML frontmatter.
- Use the scaffold script to create a new post file quickly.
- Use the conversion scripts to convert Google Doc exports, .docx files, or raw HTML into clean Markdown.

Filename & Frontmatter
- File name format: `YYYY-MM-DD-slug.md` (e.g. `2025-12-22-operational-resilience.md`).
- Required frontmatter fields (YAML at top of file):
  ```yaml
  ---
  title: "Your Post Title"
  date: "2025-12-22"
  excerpt: "One-line summary"
  category: "Tactical"
  tags: ["ops","analytics"]
  ---
  ```

Writing Guidelines
- Use standard Markdown. Headings with `##`, lists, blockquotes are fine.
- For callouts use blockquotes (`> **Note**: ...`) or a bold heading followed by text.
- Tables are supported via GitHub-flavored Markdown.
- Images:
  - Preferred: put images into `public/assets/posts/<slug>/` and reference them with absolute paths: `![alt](/assets/posts/slug/image.jpg)`.
  - External images (Unsplash) are acceptable for drafts.

Code & Syntax Highlighting
- Fenced code blocks are supported. The site uses `rehype-highlight` for syntax highlighting.

Quick Workflow
1. Scaffold a new post (prompts for title & slug):
   ```bash
   npm run new-post
   ```
2. Edit the created file in your editor and write the content.
3. Preview locally:
   ```bash
   npm run dev
   # open http://localhost:3000/writing
   ```
4. Commit & push:
   ```bash
   git add content/posts/YYYY-MM-DD-slug.md
   git commit -m "Add post: Your Title"
   git push
   ```

Converting from Google Docs / DOCX / HTML
- Recommended: export Google Doc as `.docx` then convert with the included script. The script uses `mammoth` to get HTML from DOCX and `turndown` to convert HTML -> Markdown.
- Example:
  ```bash
  npm run convert-docx -- my-article.docx "My New Post Title"
  ```
  This will produce `content/posts/YYYY-MM-DD-my-new-post-title.md`.

- To convert raw HTML:
  ```bash
  npm run convert-html -- snippet.html "Post Title"
  ```

Scripts
- `npm run new-post` — interactive scaffold that creates a dated file in `content/posts/`.
- `npm run convert-docx -- path/to/file.docx "Optional Title"` — converts DOCX to Markdown and writes a post file.
- `npm run convert-html -- path/to/file.html "Optional Title"` — converts HTML to Markdown and writes a post file.

Notes & Caveats
- The converters try to preserve headings, images, and tables, but you should always review output and fix image paths or figure captions.
- If you want to embed React components in posts (MDX), we can enable MDX support later.

Questions or help? Open an issue or DM me and I can convert one of your drafts as a demo.

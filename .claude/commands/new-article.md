# New Article Scaffold

Generate a scaffold for a new Sanity CMS article for jasonkhanani.com.

Ask the user for:
1. **Title** — the article title
2. **Excerpt** — 1-2 sentence summary (shown on article cards and in SEO)
3. **Category** — one of the existing CMS categories (e.g. "Systems Thinking", "Operations", "AI & Automation")
4. **Tags** — comma-separated list of methodology tags (e.g. "Root Cause Analysis, Process Mapping")
5. **Series** — optional series name (leave blank if standalone)
6. **Featured** — should this be pinned to the top of the writing page? (yes/no)

Then output:

1. A **slug** derived from the title (lowercase, hyphens, no special chars)
2. A **Sanity document skeleton** as a JSON object matching the `Article` interface in `types.ts`:
   ```
   {
     _type: "article",
     title: "...",
     slug: { _type: "slug", current: "..." },
     excerpt: "...",
     publishedAt: "<today's ISO date>",
     status: "draft",
     isFeatured: false,
     category: { _type: "reference", _ref: "<categoryId - user must fill>" },
     tags: [],
     body: []
   }
   ```
3. A **content outline** — suggest 4-6 section headings (h2) based on the title and excerpt, following the Hanko Rust / Fox Orange brand voice (analytical, precise, systems-focused)
4. **SEO suggestions** — a `seoTitle` (under 60 chars) and `seoDescription` (under 155 chars)

Remind the user that:
- The JSON skeleton must be imported into Sanity Studio manually or via the Sanity Content API
- Category and tag `_ref` IDs must be looked up from the live Sanity dataset
- Images should be uploaded in Sanity Studio after the document is created
- Set `status` to `"published"` in Studio when ready to go live

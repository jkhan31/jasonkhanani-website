# Case Study Publishing Workflow

A sustainable, automated system for publishing monthly case study blogs to your Next.js + Sanity portfolio.

---

## Overview

Your portfolio uses Next.js 14 (Pages Router), Sanity CMS, and Netlify with ISR (Incremental Static Regeneration). Case studies are published as regular articles using an automated CLI script that:

1. Reads your project folder metadata + markdown
2. Converts markdown → PortableText JSON
3. Uploads images to Sanity Media API
4. Embeds interactive HTML presentations as iframes (if present)
5. Creates article in Sanity (published or scheduled)
6. ISR auto-revalidates within 60 seconds

**Time per article:** ~15 minutes (excluding writing/analysis)

---

## Quick Start

### Prerequisites
- Node.js 18+ installed
- Project dependencies: `npm install`
- Sanity studio dependencies: `cd jasonkhanani-website && npm install`
- `SANITY_API_TOKEN` set in `.env.local` (read/write token)

### One-Command Publishing
```bash
npm run publish-case-study expedia
```

Done. Article goes live at `/writing/expedia-conversion-luxury-hotels`.

---

## Project Folder Structure

Create case study folders in `/portfolio-projects/` following this template:

```
portfolio-projects/expedia-case-study/
├─ CASE_STUDY.md                          # Main content (PortableText-compatible markdown)
├─ Expedia-Marketplace-Analysis.html       # Optional: interactive presentation/slideshow
├─ metadata.json                           # Frontmatter for Sanity publication
├─ images/
│  ├─ hero.jpg                            # Hero image for article cover (1200x630+ recommended)
│  ├─ chart-01.jpg
│  └─ ...                                 # Other inline images referenced in CASE_STUDY.md
└─ README.md                               # Internal notes (not published)
```

### metadata.json Format

```json
{
  "title": "Expedia: Data-Driven Conversion Levers in Luxury Hotels",
  "slug": "expedia-conversion-luxury-hotels",
  "category": "Case Study",
  "tags": [
    "case-study",
    "marketplace-optimization",
    "conversion-funnel",
    "data-analysis"
  ],
  "excerpt": "A 100K-sample analysis revealing why luxury hotel bookings underperform by 27%—and how quality misalignment, not price, drives the gap.",
  "publishedAt": "2026-05-01T00:00:00Z",
  "status": "published",
  "contentPath": "CASE_STUDY.md",
  "heroImagePath": "images/hero.jpg",
  "presentationHtmlPath": "Expedia-Marketplace-Analysis.html"
}
```

**Field Reference:**
- `title` (required): Article headline
- `slug` (required): URL path (auto-generated from title if omitted)
- `category` (required): Set to `"Case Study"`
- `tags` (required): Array of tag strings (will be created if they don't exist)
  - Always include `"case-study"` + domain tags + methodology tags
- `excerpt` (required): 1-2 sentence summary (≤200 chars)
- `publishedAt` (required): ISO 8601 date string for publish date
- `status`: `"published"` (live immediately) or `"draft"` (for preview/scheduling)
- `contentPath`: Relative path to markdown file (default: `"CASE_STUDY.md"`)
- `heroImagePath`: Relative path to hero/cover image (default: `"images/hero.jpg"`)
- `presentationHtmlPath`: Optional relative path to HTML presentation file

### CASE_STUDY.md Format

Write in standard markdown. The script auto-converts to PortableText:

```markdown
# Expedia: Data-Driven Conversion Levers

## Problem Statement

Luxury hotel bookings underperform by 27% compared to budget hotels...

## Methodology

We analyzed 100,000 search results from Kaggle's Expedia dataset...

### Key Findings

1. **Finding 1**: Description
2. **Finding 2**: Description

## Root Cause

The luxury segment has a quality expectation gap...

## Recommendations

- Recommendation 1
- Recommendation 2

## 8-Week Implementation Roadmap

| Phase | Week | Action |
|-------|------|--------|
| Audit | 1-2 | Review luxury hotel quality ratings |
| Experiment | 3-6 | Test new ranking signals |
| Rollout | 7-8 | Deploy changes |

## Success Metrics

- Current conversion rate: 2.20%
- Target: 2.31%
- Expected lift: 0.6pp
```

**Markdown Features Supported:**
- Headings: `##` (H2) and `###` (H3) → PortableText block styles
- Bold/italic: `**bold**` and `*italic*`
- Code: `` `inline` `` and ` ```language / code / ``` ` (fenced code blocks)
- Lists: `- bullet` and `1. numbered`
- Tables: Standard markdown tables
- Links: `[text](url)`
- Images: `![alt text](images/chart.jpg)` → uploaded to Sanity

**Not supported (yet):**
- HTML embeds (use separate presentationHtmlPath instead)
- Custom YouTube embeds (add via Sanity editor post-publish)

---

## Publishing Workflow (Monthly)

### Week 1-2: Analysis & Content Creation
1. Identify case study topic
2. Complete analysis/research
3. Write CASE_STUDY.md in `/portfolio-projects/[project-name]/`
4. Save hero image and any chart images
5. If applicable, create interactive HTML presentation
6. Create `metadata.json` in project folder

### Week 3: Editorial Review
1. Review CASE_STUDY.md for clarity and structure
2. Test image paths (all referenced images must exist)
3. Verify metadata.json is valid JSON
4. Run script in draft mode: `npm run publish-case-study [project-name] --draft`
5. Review on localhost: `npm run dev` → `/writing/[slug]`
6. Refine metadata if needed

### Week 4: Publish
**Option A: Immediate Publish**
```bash
npm run publish-case-study [project-name]
```
Article goes live immediately.

**Option B: Schedule for Future Date**
In `metadata.json`, set:
```json
{
  "publishedAt": "2026-05-01T00:00:00Z",
  "status": "scheduled"
}
```
Article publishes automatically at the scheduled date (ISR revalidates hourly on scheduled articles).

### Verification
- Visit `/writing/[slug]` to verify article is live
- Check article cards appear on `/writing` main page
- Verify images loaded correctly
- Test table of contents navigation (if article has H2/H3 headings)
- Check "Related Articles" section appears

---

## CLI Script Details

The script (`scripts/publish-case-study.js`) handles:

1. **Read metadata.json** from project folder
2. **Parse CASE_STUDY.md** and convert to PortableText JSON:
   - `##` headings → PortableText H2 blocks
   - `###` headings → PortableText H3 blocks
   - Bullet lists → PortableText bullet list type
   - Numbered lists → PortableText number list type
   - Bold/italic/code marks → PortableText marks
   - Tables → Converted to formatted text/code blocks
   - Links → PortableText link marks (detects internal vs external)
   - Images (`![alt](path)`) → Uploaded to Sanity and embedded

3. **Upload images** to Sanity Media API:
   - Hero image → mainImage field
   - Inline images → PortableText image blocks
   - Sets alt text, captions from markdown

4. **Embed interactive HTML** (if presentationHtmlPath provided):
   - Wraps HTML file as iframe block in PortableText
   - Maintains interactivity (Chart.js, etc.)

5. **Create Sanity article** via REST API:
   - Sets all metadata fields (title, slug, category, tags, etc.)
   - Creates tags if they don't exist
   - Sets publish status and date
   - Links to your author record

### Running the Script

```bash
# Publish immediately (status: published)
npm run publish-case-study expedia

# Publish as draft (for preview/review)
npm run publish-case-study expedia --draft

# List available case studies
npm run publish-case-study --list

# Verbose output (debugging)
npm run publish-case-study expedia --verbose
```

### Troubleshooting

**"Host not in allowlist"**
- Ensure `SANITY_API_TOKEN` is set in `.env.local`
- Token must have read/write permissions to production dataset
- Check Sanity project settings → API → CORS (add your machine's IP if behind firewall)

**"Image not found"**
- Verify image paths in `metadata.json` are relative to project folder
- Check that images exist: `ls portfolio-projects/[project]/images/`

**"Tags not created"**
- Tags are auto-created if they don't exist
- Check Sanity Studio → Tags to see what was created

**"Article not appearing on /writing"**
- Verify `status: "published"` in metadata (not "draft")
- Wait 60 seconds for ISR revalidation
- Check article URL: `/writing/[slug]` where slug is from metadata.json

---

## Tag Architecture

Use these tags consistently across case studies:

**Always include:**
- `case-study` — Identifies content type

**By domain/topic:**
- `marketplace-optimization` — E-commerce, search ranking, conversion
- `conversion-funnel` — Metrics, testing, optimization
- `data-analysis` — Statistical findings, causal inference
- `ai-operations` — LLM tools, automation, systems
- `web-application` — Full-stack web projects
- `cli-tool` — Command-line tools, scripts
- `system-design` — Architecture, infrastructure

**By methodology:**
- `statistical-analysis` — A/B tests, correlations
- `causal-inference` — Root cause analysis
- `user-research` — Interviews, surveys
- `design-thinking` — Iterative problem-solving

On the website, filtering works automatically:
- `/writing?category=Case%20Study` → all case studies
- `/writing?tag=marketplace-optimization` → only marketplace cases
- `/writing?tag=case-study&tag=ai-operations` → filtered by multiple tags

---

## Handling Different Project Types

### Web Application Case Study
**metadata.json:**
```json
{
  "tags": ["case-study", "web-application", "system-design", "user-research"]
}
```

**CASE_STUDY.md:**
- Include wireframes/mockups as inline images
- Document tech stack, architecture decisions
- User research findings and quotes
- Implementation timeline

**presentationHtmlPath:**
- Optional: interactive prototype or demo walkthrough

### CLI Tool / Script Case Study
**metadata.json:**
```json
{
  "tags": ["case-study", "cli-tool", "automation", "data-analysis"]
}
```

**CASE_STUDY.md:**
- Start with: "Problem this tool solves"
- Usage examples in fenced code blocks:
  ```bash
  tool-name --flag value
  ```
- Before/after metrics
- Installation & usage guide
- Open source link (if applicable)

### Data Analysis / Research Case Study
**metadata.json:**
```json
{
  "tags": ["case-study", "data-analysis", "statistical-analysis", "marketplace-optimization"]
}
```

**CASE_STUDY.md:**
- Dataset description (source, size, time period)
- Methodology (how you measured)
- Quantitative findings (tables, metrics)
- Statistical significance (p-values, confidence intervals if applicable)
- Root cause analysis
- Actionable recommendations with expected impact

**presentationHtmlPath:**
- Recommended: interactive slides with Chart.js visualizations

---

## Managing Articles

### Unpublish Articles (Hide from Website)

**Via Sanity Studio:**
1. Open Studio → Articles
2. Click article → Set `status: "draft"` → Publish

**Via CLI (from laptop with .env.local):**
```bash
# Create this script: unpublish-articles.mjs
import { createClient } from '@sanity/client'
import dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })

const client = createClient({
  projectId: 'lrta5lyp',
  dataset: 'production',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
  apiVersion: '2023-05-03'
})

async function main() {
  const articles = await client.fetch('*[_type == "article"] {_id, title, status}')
  console.log(`Found ${articles.length} articles`)

  const toUnpublish = articles.filter(a => !a.status || a.status === 'published')
  if (toUnpublish.length === 0) {
    console.log('✅ All already unpublished')
    return
  }

  const result = await client.transaction(
    toUnpublish.map(a => ({ patch: { id: a._id, set: { status: 'draft' } } }))
  ).commit()

  console.log(`✅ Unpublished ${result.length} articles`)
}

main()
```

Run it:
```bash
node unpublish-articles.mjs
```

---

## Content Model (Sanity Schema)

Your articles use the existing **Article** schema (no changes needed for case studies):

**Core Fields:**
- `title` (string, required)
- `slug` (slug, required, auto-generated)
- `category` (reference → category, required)
- `body` (blockContent — rich text with PortableText)
- `mainImage` (image with alt, caption, attribution)
- `excerpt` (text, max 200 chars)
- `status` (draft | published | scheduled)
- `scheduledPublishDate` (datetime, only if scheduled)
- `tags` (array of tag references)
- `isFeatured` (boolean, max 3 articles)
- `relatedArticles` (up to 3 references)
- `series` (optional grouping for multi-part content)
- `publishedAt` (datetime)

**SEO Fields** (collapsible section):
- `seoTitle`, `seoDescription`
- `metaTitle`, `metaDescription` (for social sharing)
- `ogImage` (1200x630 for open graph)
- `keywords` (array for SEO)

**Read-Only:**
- `analytics` — View count and last viewed timestamp

---

## Future: Thought Leadership (Book Reviews, Opinions)

When you're ready to publish book reviews or opinion pieces, the schema can be extended with a `contentType` field:

**Recommended approach:**
Add to article schema:
```ts
contentType: {
  type: 'string',
  options: {
    list: ['essay', 'case-study', 'book-review', 'opinion', 'tutorial'],
    layout: 'radio'
  }
}
```

Then conditionally show additional fields:
```ts
{
  name: 'reviewMetadata',
  hidden: ({ parent }) => parent?.contentType !== 'book-review',
  fields: [
    { name: 'bookTitle', type: 'string' },
    { name: 'author', type: 'string' },
    { name: 'rating', type: 'number', validation: Rule => Rule.min(1).max(5) },
    { name: 'recommendedFor', type: 'array', of: [{ type: 'string' }] }
  ]
}
```

**For now:** Just use tags like `#book-review` or `#opinion`, and the existing schema supports all content types.

---

## Publishing Calendar Template

Create a monthly publishing rhythm:

```
April 2026
├─ Week 1-2: Analyze, write, create Expedia case study
├─ Week 3: Review, refine metadata, test
└─ Week 4 (May 1): Publish

May 2026
├─ Week 1-2: Analyze, write [Case Study 2]
├─ Week 3: Review & test
└─ Week 4 (Jun 1): Publish

[Repeat monthly]
```

**Batch processing option:**
If you have multiple projects analyzed, you can:
1. Write all case study markdown files
2. Create all metadata.json files
3. On publish day, run: `npm run publish-case-study [project1] && npm run publish-case-study [project2]`

---

## Key Files Reference

| File | Purpose |
|------|---------|
| `scripts/publish-case-study.js` | CLI script (run via `npm run publish-case-study`) |
| `/portfolio-projects/_case-study-template/` | Reference structure for new projects |
| `jasonkhanani-website/schemaTypes/article.ts` | Article schema (no changes needed) |
| `pages/writing/[slug].tsx` | Article renderer (renders case studies as-is) |
| `pages/writing.tsx` | Article listing (category filter groups cases studies) |
| `src/client.ts` | Sanity client config |
| `.env.local` | Store `SANITY_API_TOKEN` here (keep secret) |

---

## Sanity Studio Access

**Project ID:** `lrta5lyp`  
**Dataset:** `production`  
**API Version:** `2023-05-03`

Access Sanity Studio:
```bash
npm run dev
# Or: npx sanity studio
```

Navigate to Articles to:
- Review published/drafted articles
- Create tags/categories
- Manually edit article metadata
- View article analytics (views count, last viewed)

---

## Troubleshooting Checklist

- [ ] `SANITY_API_TOKEN` is set in `.env.local`
- [ ] Token has read/write permissions (check Sanity project settings)
- [ ] Project folder structure matches template (metadata.json, CASE_STUDY.md, images/)
- [ ] All image paths in metadata are relative (e.g., `images/hero.jpg`)
- [ ] Markdown syntax is valid (check for unclosed code blocks)
- [ ] Category is set to `"Case Study"`
- [ ] `publishedAt` is a valid ISO 8601 date string
- [ ] `npm install` run in both project root and `jasonkhanani-website/` directory
- [ ] Sanity studio dependencies installed: `cd jasonkhanani-website && npm install`

---

## Support

For issues:
1. Check script output for specific errors
2. Verify `.env.local` has correct token
3. Test article manually in Sanity Studio first (before scripting)
4. Review article on localhost: `npm run dev` → `/writing/[slug]`
5. Wait 60 seconds for ISR revalidation if using Netlify

Happy publishing! 🚀

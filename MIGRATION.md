# Migration from Vite + React Router to Next.js SSG/ISR

## Overview

This portfolio website has been migrated from Vite with React Router (client-side rendering) to Next.js with Static Site Generation (SSG) and Incremental Static Regeneration (ISR).

## Why This Migration?

### Problems with Client-Side Rendering
- **SEO Issues**: Crawlers (Google, NotebookLM) saw empty pages because they don't execute JavaScript
- **Slow Initial Loads**: Content fetched after page load
- **No Pre-rendered Content**: Every visitor had to wait for API calls

### Benefits of Next.js SSG/ISR
- ✅ **Full SEO Support**: All pages pre-rendered with complete HTML
- ✅ **Faster Performance**: Content generated at build time
- ✅ **Automatic Updates**: ISR regenerates pages every 60 seconds
- ✅ **On-Demand Revalidation**: Webhook support for instant updates
- ✅ **Same CMS Workflow**: No changes needed to Sanity content editing

## Architecture Changes

### Before (Vite + React Router)
```
User Request → Empty HTML → JS loads → Fetch from Sanity → Render Content
```

### After (Next.js SSG/ISR)
```
Build Time: Fetch from Sanity → Generate HTML → Deploy
User Request → Full HTML (instant) → Hydrate
Background: ISR regenerates every 60s OR on webhook trigger
```

## How ISR Works

### Automatic Revalidation (60 seconds)
- Every page has `revalidate: 60` in `getStaticProps`
- After 60 seconds, the next visitor triggers a background regeneration
- The visitor sees the current (slightly stale) page immediately
- Future visitors get the fresh page

### On-Demand Revalidation (1-3 seconds)
Set up a Sanity webhook to trigger instant updates:

1. **Create a Sanity Webhook**:
   - Go to your Sanity project settings
   - Add webhook URL: `https://your-domain.com/api/revalidate?secret=YOUR_SECRET`
   - Trigger on: Document changes for type `article`

2. **Configure the Secret**:
   ```bash
   # In your deployment environment (Netlify, Vercel, etc.)
   REVALIDATE_SECRET=your-secure-random-string
   ```

3. **Test the Webhook**:
   ```bash
   curl -X POST https://your-domain.com/api/revalidate?secret=YOUR_SECRET \
     -H "Content-Type: application/json" \
     -d '{"slug": "your-article-slug"}'
   ```

## File Structure

### New Next.js Structure
```
pages/
├── _app.tsx          # Global app wrapper (Layout, Analytics)
├── _document.tsx     # HTML document structure
├── index.tsx         # Homepage (was Home.tsx)
├── evidence.tsx      # Evidence page
├── framework.tsx     # Framework page
├── writing.tsx       # Writing list page  
├── writing/
│   └── [slug].tsx    # Dynamic article pages
├── resume.tsx        # Resume page
├── contact.tsx       # Contact page
└── api/
    └── revalidate.ts # ISR webhook endpoint
```

### Removed Files
- `App.tsx` (routing now handled by Next.js)
- `index.tsx` (entry point replaced by Next.js)
- `vite.config.ts` (replaced by next.config.js)
- `pages/Home.tsx`, `pages/Article.tsx`, etc. (migrated to lowercase)

## Key Code Changes

### 1. Data Fetching (Before)
```typescript
// Client-side fetching in useEffect
const [articles, setArticles] = useState([]);
const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
  const fetchArticles = async () => {
    const result = await client.fetch(query);
    setArticles(result);
    setIsLoading(false);
  };
  fetchArticles();
}, []);
```

### 2. Data Fetching (After)
```typescript
// Server-side fetching at build time
export const getStaticProps: GetStaticProps = async () => {
  const articles = await client.fetch(query);
  
  return {
    props: { articles },
    revalidate: 60, // ISR: regenerate every 60 seconds
  };
};

export default function Page({ articles }: PageProps) {
  // Articles are pre-fetched, no loading state needed
  return <div>{/* render articles */}</div>;
}
```

### 3. Dynamic Routes (Before)
```typescript
// React Router
import { useParams } from 'react-router-dom';

const Article = () => {
  const { slug } = useParams();
  // ... fetch article by slug in useEffect
};
```

### 4. Dynamic Routes (After)
```typescript
// Next.js with getStaticPaths
export const getStaticPaths: GetStaticPaths = async () => {
  const articles = await client.fetch(`*[_type == "article"]{ "slug": slug.current }`);
  
  return {
    paths: articles.map((a) => ({ params: { slug: a.slug } })),
    fallback: 'blocking', // Generate on-demand for new articles
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const article = await client.fetch(query, { slug: params?.slug });
  
  return {
    props: { article },
    revalidate: 60,
  };
};
```

### 5. Navigation (Before)
```typescript
import { Link } from 'react-router-dom';

<Link to="/writing">Writing</Link>
```

### 6. Navigation (After)
```typescript
import Link from 'next/link';

<Link href="/writing">Writing</Link>
```

## Deployment

### Build Process
```bash
npm run build
npm run start  # Production server
```

### Build Output
- Static HTML files in `.next/server/pages/`
- Each page is pre-rendered with full content
- View source shows complete HTML (not empty)

### Environment Variables
Required for production:
```
REVALIDATE_SECRET=your-secure-random-string
```

## Testing Checklist

- ✅ Homepage loads with pre-rendered articles
- ✅ All navigation links work correctly
- ✅ Dynamic routes work (`/writing/[slug]`)
- ✅ Images from Sanity CDN load correctly
- ✅ Styles/Tailwind CSS applied correctly
- ✅ Build completes successfully
- ✅ View page source shows full HTML (not empty <div id="root"></div>)

## ISR Verification

1. **Edit content in Sanity CMS**
2. **Wait 60 seconds** (or trigger webhook)
3. **Refresh the page** - new content appears
4. **No deployment needed!**

## Rollback Plan

If issues arise, the old Vite setup can be restored:
1. Checkout the commit before migration
2. Run `npm install` to restore old dependencies
3. Run `npm run dev` to start Vite dev server

## Resources

- [Next.js Pages Router Documentation](https://nextjs.org/docs/pages)
- [Next.js ISR Documentation](https://nextjs.org/docs/pages/building-your-application/data-fetching/incremental-static-regeneration)
- [Sanity Webhooks Documentation](https://www.sanity.io/docs/webhooks)
- [Current Sanity Project](https://www.sanity.io/manage/personal/project/lrta5lyp)

## Post-Migration Cleanup (Completed)

After migrating to Next.js + Sanity, the following files were removed:

### Removed Files
- `.htaccess` - Empty file, not needed for Next.js deployment
- `scripts/git-commit-and-pr.sh` - Google Docs import automation (obsolete)
- `scripts/n8n_contact_workflow.md` - n8n not in use
- `scripts/n8n_import_workflow_template.json` - n8n not in use
- `content/` directory - Replaced by Sanity CMS
- `admin/` directory - Netlify CMS removed
- `lib/posts.ts` - Markdown loader replaced by Sanity client

### Removed Dependencies
- `react-router-dom` - Replaced by Next.js routing
- `vite` - Replaced by Next.js build system
- `react-markdown`, `remark-gfm`, `gray-matter` - No longer needed (Sanity uses PortableText)
- `googleapis` - Google Docs import automation removed

## Support

For questions about this migration, refer to:
- This MIGRATION.md file
- Next.js documentation linked above
- Git commit history for detailed changes

# Website Architecture

## Overview

This website uses a **hybrid content architecture** that separates static showcase pages from dynamic content pages.

## Page Types

### Hybrid Pages (Sanity CMS)

#### 1. **Home Page** (`pages/Home.tsx`)
- **Purpose**: Marketing landing page showcasing value proposition
- **Content Source**: Sanity CMS (fetches featured articles)
- **Rationale**: Displays latest featured content from Sanity CMS
- **Data**: Displays up to 3 featured articles (marked with `isFeatured` in Sanity). If fewer than 3 are featured, fills remaining slots with most recent articles
- **Constraint**: Maximum of 3 articles can be marked as featured in Sanity at any time

### Standalone Pages (No Sanity CMS Dependency)

These pages are fully self-contained with no external data dependencies. They load instantly without network calls.

#### 2. **Framework Page** (`pages/Framework.tsx`)
- **Purpose**: Explains the PWA (Purpose-Wellbeing Axis) and SFR (Sustainable Feedback Rhythm) frameworks
- **Content Source**: Hardcoded in component
- **Rationale**: Core methodology that rarely changes

#### 3. **Evidence Page** (`pages/Evidence.tsx`)
- **Purpose**: Case studies showcasing quantified business impact
- **Content Source**: CASE_STUDIES array from `constants.ts`
- **Rationale**: High-value content that requires careful curation

#### 4. **Resume Page** (`pages/Resume.tsx`)
- **Purpose**: Professional experience and skills
- **Content Source**: Hardcoded in component
- **Rationale**: Formal document that requires precise control

### Dynamic Pages (Sanity CMS Powered)

These pages fetch content from Sanity CMS for dynamic article management.

#### 5. **Writing Page** (`pages/Writing.tsx`)
- **Purpose**: Browse all articles with filtering and search
- **Content Source**: Sanity CMS via API
- **Rationale**: Centralized place for content discovery, requires latest content
- **Features**: Tag filtering, category filtering, search

#### 6. **Article Page** (`pages/Article.tsx`)
- **Purpose**: Display individual article content with PortableText
- **Content Source**: Sanity CMS via API
- **Rationale**: Rich content rendering with images, embeds, and formatting

#### 7. **Contact Page** (`pages/Contact.tsx`)
- **Purpose**: Contact form submission
- **Content Source**: Netlify Forms
- **Rationale**: Simple form handling

## Data Sources

### Static Content

```
constants.ts             → CASE_STUDIES, EXPERIENCE arrays
```

### Dynamic Content

```
Sanity CMS (lrta5lyp.apicdn.sanity.io)
  └── Article documents with PortableText content
      ├── Used by Home page for featured articles (max 3)
      ├── Used by Writing page for listing
      └── Used by Article page for full content
      
Sanity Studio Features:
  ├── "Featured Articles (Max 3)" view for easy management
  ├── Visual indicators (⭐ FEATURED) in article lists
  ├── Validation prevents more than 3 featured articles
  └── Easy toggle on/off for featured status
```

## Benefits of This Architecture

### 1. **Performance**
- Home page fetches latest featured articles from Sanity
- Framework, Evidence, and Resume pages load instantly (no network calls)
- Optimized featured article selection (max 3)

### 2. **Reliability**
- Home page shows most relevant content (featured + recent)
- Sanity Studio validation prevents configuration errors
- Progressive enhancement: dynamic content enhances experience when available

### 3. **SEO**
- Static content is immediately indexable
- No client-side rendering delay for critical pages
- Consistent content across crawls

### 4. **Content Management**
- Blog articles can be updated frequently via Sanity Studio
- Core pages remain stable and version-controlled
- Clear separation of concerns

### 5. **Development**
- Easy to work on static pages without Sanity access
- Faster local development (no API calls for most pages)
- Simpler testing for standalone pages

## Content Update Workflow

### For Home Page (Featured Articles)
1. **Access Sanity Studio**: Navigate to `/jasonkhanani-website/` or use Sanity Studio
2. **Featured Articles View**: Use the "Featured Articles (Max 3)" view in the sidebar (marked with ⭐) to see all currently featured articles
3. **To Feature an Article**: 
   - Open any article and toggle the "Featured Insight?" checkbox
   - Maximum of 3 articles can be featured at once
   - If 3 are already featured, you'll see a validation error prompting you to unfeature another article first
4. **To Unfeature an Article**: Open the article from the Featured Articles view and uncheck "Featured Insight?"
5. **Visual Indicators**: Featured articles show "⭐ FEATURED" in their subtitle in all article lists
6. **Homepage Display Logic**:
   - Shows up to 3 featured articles (sorted by most recent)
   - If fewer than 3 are featured, fills remaining slots with most recent non-featured articles
   - Total of 3 articles always displayed on homepage

### For Standalone Pages (Framework, Evidence, Resume)
1. Edit the component files or data files (`constants.ts` for Evidence)
2. Commit changes to Git
3. Deploy via CI/CD
4. Content updates are atomic with code deployment

### For Dynamic Pages (Writing, Article)
1. Use Sanity Studio at `/jasonkhanani-website/`
2. Create/edit articles in the CMS
3. Publish changes
4. Content appears immediately on the website
5. No code deployment required

## File Structure

```
pages/
  ├── Home.tsx           # Dynamic (Sanity featured articles)
  ├── Framework.tsx      # Standalone (hardcoded)
  ├── Evidence.tsx       # Standalone (uses constants.ts)
  ├── Resume.tsx         # Standalone (hardcoded)
  ├── Writing.tsx        # Dynamic (Sanity CMS)
  ├── Article.tsx        # Dynamic (Sanity CMS)
  └── Contact.tsx        # Form (Netlify Forms)

lib/
  └── sanityErrorHandler.ts  # Retry logic for Sanity API calls

constants.ts             # CASE_STUDIES, EXPERIENCE arrays

src/
  └── client.ts          # Sanity client configuration

jasonkhanani-website/    # Sanity Studio for content management
  ├── sanity.config.ts   # Custom structure with "Featured Articles" view
  └── schemaTypes/
      └── article.ts     # Article schema with featured validation & preview
```

## Migration Notes

This architecture was established after migrating from:
- Netlify CMS → Removed (admin/ directory deleted)
- Markdown files → Removed (content/ directory deleted)
- Markdown loader → Removed (lib/posts.ts deleted)
- Static fallback articles → Removed (lib/articles.ts deleted)

The Home page dynamically fetches featured articles from Sanity CMS (using the `isFeatured` field, max 3). Sanity Studio provides a dedicated "Featured Articles" view for easy management. The full article library lives in Sanity CMS and is accessed through the Writing page.

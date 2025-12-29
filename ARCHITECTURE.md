# Website Architecture

## Overview

This website uses a **hybrid content architecture** that separates static showcase pages from dynamic content pages.

## Page Types

### Standalone Pages (No Sanity CMS Dependency)

These pages are fully self-contained with no external data dependencies. They load instantly without network calls.

#### 1. **Home Page** (`pages/Home.tsx`)
- **Purpose**: Marketing landing page showcasing value proposition
- **Content Source**: Static ARTICLES array from `lib/articles.ts`
- **Rationale**: Fast first load, no network dependency, stable content
- **Data**: Displays 3 featured articles from static data

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
lib/articles.ts          → ARTICLES array (3 articles for Home page)
constants.ts             → CASE_STUDIES, EXPERIENCE arrays
```

### Dynamic Content

```
Sanity CMS (lrta5lyp.apicdn.sanity.io)
  └── Article documents with PortableText content
      ├── Used by Writing page for listing
      └── Used by Article page for full content
```

## Benefits of This Architecture

### 1. **Performance**
- Home page loads instantly (no network waterfall)
- Critical showcase content is immediately available
- No dependency on Sanity CDN availability for landing page

### 2. **Reliability**
- Landing page works even if Sanity is down
- Core value proposition always accessible
- Progressive enhancement: dynamic content loads separately

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

### For Standalone Pages (Home, Framework, Evidence, Resume)
1. Edit the component files or data files (`lib/articles.ts`, `constants.ts`)
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
  ├── Home.tsx           # Standalone (uses lib/articles.ts)
  ├── Framework.tsx      # Standalone (hardcoded)
  ├── Evidence.tsx       # Standalone (uses constants.ts)
  ├── Resume.tsx         # Standalone (hardcoded)
  ├── Writing.tsx        # Dynamic (Sanity CMS)
  ├── Article.tsx        # Dynamic (Sanity CMS)
  └── Contact.tsx        # Form (Netlify Forms)

lib/
  ├── articles.ts        # Static article data for Home page
  └── sanityErrorHandler.ts  # Retry logic for Sanity API calls

constants.ts             # CASE_STUDIES, EXPERIENCE, exports ARTICLES

src/
  └── client.ts          # Sanity client configuration

jasonkhanani-website/    # Sanity Studio for content management
```

## Migration Notes

This architecture was established after migrating from:
- Netlify CMS → Removed (admin/ directory deleted)
- Markdown files → Removed (content/ directory deleted)
- Markdown loader → Removed (lib/posts.ts deleted)

The static ARTICLES in `lib/articles.ts` serve as curated featured content for the home page, while the full article library lives in Sanity CMS and is accessed through the Writing page.

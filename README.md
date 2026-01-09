# Jason Kester Hanani Portfolio Website

> **Industrial Engineering applied to Remote Operations**  
> A professional portfolio showcasing operational excellence, forensic analysis, and systems architecture expertise.

**Live Site**: [jasonkhanani.com](https://jasonkhanani.com)  
**Version**: 2.5 (Stable Deployment)  
**Status**: ✅ Production-Ready

---

## 🎯 Project Overview

This is the personal portfolio website of **Jason Kester Hanani**, an Industrial Engineer specializing in remote operations optimization. The site demonstrates **€1.5M+ in quantified business impact** through a dual-persona strategy:

- **The Investigator** (Hanko Rust): Data-driven forensic analysis for revenue recovery
- **The Architect** (Fox Orange): Systems design for scalable, async-first workflows

### Core Features

- **Evidence Vault**: Impact-first case studies with quantified metrics
- **Flourishing Framework**: Interactive visualization of the Purpose-Wellbeing Axis (PWA) and Sustainable Feedback Rhythm (SFR)
- **Decision Rigor**: Technical blog with markdown support, syntax highlighting, and tag-based filtering
- **The Dossier**: Print-optimized resume with one-click PDF export
- **Contact System**: Direct communication channels for diagnostic consultations

---

## 🎨 Design System

### Visual Identity: "Rice Paper and Sumi Ink"

The site uses a philosophy of **high contrast, tactile textures, and engineering-grade precision**.

#### Color Palette

| Color | Hex | Purpose |
|-------|-----|---------|
| **Rice Paper** | `#FAF5F0` | Soft, non-clinical background |
| **Sumi Ink** | `#1A1A1A` | High-authority typography |
| **Hanko Rust** | `#802B0A` | Investigator persona highlights |
| **Fox Orange** | `#F07F2E` | Architect persona highlights |
| **Sage** | `#4D6B57` | Future-focused content |

#### Typography

- **Headings**: Source Serif 4 (Academic/Authoritative)
- **Body Text**: Inter (Modern/Functional)
- **Signature**: Motterdam Script (Personal Brand)

#### Tactile Elements

- **bg-noise**: 4% opacity SVG noise for a "printed paper" aesthetic
- **bg-grid**: 30px radial gradient representing systemic order
- **Borders**: 0.5px precision borders for engineering-grade feel

---

## ⚙️ Technical Stack

### Core Technologies

- **Framework**: Next.js 14 (Pages Router)
- **Content Management**: Sanity CMS with PortableText
- **Styling**: Tailwind CSS 3.4.0 with custom configuration
- **Language**: TypeScript 5.8.2 (full type safety)
- **Rendering**: Static Site Generation (SSG) with Incremental Static Regeneration (ISR)

### Key Dependencies

- **Sanity Integration**:
  - `@sanity/client` - Sanity API client
  - `@sanity/image-url` - Image URL builder for Sanity CDN
  - `@portabletext/react` - PortableText rendering

- **UI Components**:
  - `lucide-react` - Modern icon system
  - `react-syntax-highlighter` - Code syntax highlighting
  - `prismjs` - Additional syntax highlighting support

- **Comments & Analytics**:
  - `@giscus/react` - GitHub Discussions-based comments

### Development Tools

- **PostCSS** with Autoprefixer
- **Tailwind CSS Line Clamp** plugin
- **Next.js** for build and development

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ (LTS recommended)
- **npm** 9+ or **yarn** 1.22+

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/jkhan31/jasonkhanani-website.git
   cd jasonkhanani-website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and fill in the required values:
   
   - **SANITY_API_TOKEN**: Get from [Sanity Manage](https://sanity.io/manage) → Your Project → API → Tokens. Create a token with "Editor" permissions.
   - **SANITY_PREVIEW_SECRET**: Generate with `openssl rand -base64 32` or use any random string.
   - **REVALIDATE_SECRET**: Generate with `openssl rand -base64 32` or use any random string.
   - **NEXT_PUBLIC_GISCUS_REPO_ID** & **NEXT_PUBLIC_GISCUS_CATEGORY_ID**: Get from [giscus.app](https://giscus.app) after enabling GitHub Discussions in this repository.

4. **Run the development server**:
   ```bash
   npm run dev
   ```
   
   The site will be available at `http://localhost:3000`

5. **Run Sanity Studio** (optional, for content management):
   ```bash
   cd jasonkhanani-website
   npm run dev
   ```
   
   The Sanity Studio will be available at `http://localhost:3333`

### Build Commands

```bash
# Development server (with hot reload)
npm run dev

# Production build (prebuild generates sitemap, then builds)
npm run build

# Start production server
npm run start

# Run Sanity Studio locally (in separate terminal)
cd jasonkhanani-website
npm run dev
```

---

## 📁 Project Structure

```
jasonkhanani-website/
├── components/           # Reusable React components
│   ├── Layout.tsx       # Header, footer, navigation wrapper
│   ├── Logo.tsx         # Brand signature component
│   ├── SectionHeader.tsx # Consistent page header pattern
│   └── ArticlePreviewCard.tsx # Blog post card component
├── pages/               # Next.js pages (routes)
│   ├── _app.tsx         # Global app wrapper
│   ├── _document.tsx    # HTML document structure
│   ├── index.tsx        # Landing page with hero & value props
│   ├── evidence.tsx     # Case studies showcase
│   ├── framework.tsx    # PWA/SFR interactive visualization
│   ├── writing.tsx      # Blog listing with filters
│   ├── writing/
│   │   └── [slug].tsx   # Individual blog post rendering
│   ├── resume.tsx       # Print-optimized resume
│   ├── contact.tsx      # Contact form and info
│   └── api/             # API routes
│       ├── draft.ts     # Draft mode for Sanity preview
│       ├── exit-draft.ts # Exit draft mode
│       ├── revalidate.ts # ISR webhook endpoint
│       └── track-view.ts # Article view tracking
├── jasonkhanani-website/ # Sanity Studio configuration
│   ├── schemas/         # Sanity schema definitions
│   ├── sanity.config.ts # Studio configuration
│   └── package.json     # Studio dependencies
├── lib/                 # Utility functions
│   ├── sanity.ts        # Sanity client setup
│   └── sanityQueries.ts # GROQ queries
├── scripts/             # Build and automation scripts
│   └── generate-sitemap.js # SEO sitemap generation
├── src/
│   ├── styles.css       # Global styles and tactile elements
│   └── utils/           # Analytics and helpers
├── public/              # Static assets
├── constants.ts         # Case studies and experience data
├── types.ts             # TypeScript type definitions
├── tailwind.config.js   # Design system configuration
├── next.config.js       # Next.js configuration
├── PRD.md               # Product Requirements Document
└── README.md            # This file
```

---

## 📝 Content Management

### Managing Articles with Sanity CMS

This website uses **Sanity CMS** for content management. Articles are created, edited, and published through Sanity Studio.

#### Quick Start

1. **Access Sanity Studio**:
   ```bash
   cd jasonkhanani-website
   npm run dev
   ```
   Open `http://localhost:3333`

2. **Create an Article**:
   - Click "Articles" in sidebar
   - Click "Create" button
   - Fill in required fields (title, slug, excerpt, body, category, published date)
   - Add optional fields (featured image, tags, series)
   - Click "Publish"

3. **Featured Articles**:
   - Toggle "Featured Insight?" to show on homepage
   - Maximum 3 articles can be featured
   - Use "Featured Articles (Max 3)" view to manage

#### Key Features

- **PortableText Editor**: Rich content with headings, formatting, code blocks, callouts, images
- **Image Management**: Upload directly or use Unsplash integration
- **Live Preview**: Presentation tool for real-time preview while editing
- **View Tracking**: Automatic analytics for article views
- **Comments**: GitHub Discussions integration via Giscus
- **Search**: Full-text search across all published articles

#### Content Publishing

**Automatic Updates (ISR)**:
- Pages regenerate automatically every 60 seconds after changes
- No manual deployment needed

**Instant Updates (Optional)**:
- Configure Sanity webhook for immediate revalidation
- See [WORKFLOW.md](./WORKFLOW.md) for webhook setup

For detailed content management instructions, see:
- **[WORKFLOW.md](./WORKFLOW.md)** - Complete Sanity Studio workflow
- **[CONTENT_MANAGEMENT.md](./CONTENT_MANAGEMENT.md)** - Comprehensive content guide (if available)

### Content Guidelines

- **Writing Style**: Technical but accessible, use concrete examples
- **Article Length**: 1000-2000 words recommended
- **Metrics**: Quantify impact wherever possible
- **Persona Alignment**: Tag content with Investigator or Architect focus
- **Maintenance**: Minimum 1 article every 3 weeks (per PRD)

---

## 🏗️ Architecture Details

### Routing Strategy

The site uses **Next.js Pages Router** for server-side rendering with static generation:

- ✅ Full SEO support with pre-rendered HTML
- ✅ Fast page loads with Static Site Generation (SSG)
- ✅ Automatic updates with Incremental Static Regeneration (ISR)
- ✅ On-demand revalidation via webhooks

**Routes**:
- `/` - Home page (SSG with ISR)
- `/evidence` - Case studies (Static)
- `/framework` - PWA/SFR framework (Static)
- `/writing` - Blog listing (SSG with ISR)
- `/writing/[slug]` - Individual articles (SSG with ISR)
- `/resume` - Resume/CV (Static)
- `/contact` - Contact information (Static)
- `/api/*` - API routes for webhooks and tracking

### Data Fetching Strategy

**Static Site Generation (SSG)**:
- Pages are pre-rendered at build time
- Content fetched from Sanity CMS during build
- Full HTML delivered to users (instant load)

**Incremental Static Regeneration (ISR)**:
- Pages automatically regenerate every 60 seconds
- Background regeneration after the revalidation period
- Stale-while-revalidate strategy for optimal performance

**On-Demand Revalidation**:
- Webhook endpoint (`/api/revalidate`) for instant updates
- Triggered by Sanity webhooks when content changes
- Updates appear within 1-3 seconds

### Performance Optimizations

- **Pre-rendering**: All pages generated as static HTML at build time
- **ISR**: Content stays fresh without full rebuilds
- **Code Splitting**: Automatic route-based chunking via Next.js
- **Image Optimization**: Sanity CDN handles automatic optimization
- **CSS Purging**: Tailwind removes unused styles in production

### SEO Features

- Auto-generated `sitemap.xml` on every build
- `robots.txt` for search engine guidance
- Meta descriptions via Next.js Head component
- Semantic HTML structure
- Pre-rendered content for all pages (SSG)
- Open Graph tags for social sharing

---

## 🔧 Configuration

### Tailwind Configuration

Custom design tokens in `tailwind.config.js`:

```javascript
colors: {
  ricePaper: '#FAF5F0',
  sumiInk: '#1A1A1A',
  hankoRust: '#802B0A',
  foxOrange: '#F07F2E',
  sage: '#4D6B57',
}
fontFamily: {
  serif: ['Source Serif 4', 'Georgia', 'serif'],
  sans: ['Inter', 'system-ui', 'sans-serif'],
}
borderWidth: {
  '0.5': '0.5px', // Engineering precision
}
```

### Next.js Configuration

- **Output**: Static export for deployment
- **Images**: Unoptimized (served via Sanity CDN)
- **Trailing Slash**: Enabled for compatibility
- **ESLint**: Disabled during builds

---

## 🌐 Deployment

### Build Process

```bash
# Build for production (automatically runs prebuild to generate sitemap)
npm run build
```

The build process includes:
1. **prebuild**: Generates sitemap by fetching article slugs from Sanity CMS
2. **build**: Creates optimized production bundle with Next.js
3. **export**: Exports static HTML files for deployment

**Note**: The sitemap generation script (`scripts/generate-sitemap.js`) connects to Sanity CMS. Ensure network access to Sanity.io API during build, or the sitemap generation will fail (though the main build will continue).

Output directory: `out/`

### Deployment Platforms

**Recommended**:
- Netlify (current)
- Vercel
- Cloudflare Pages
- Any static hosting service

All work seamlessly with Next.js static export.

### Incremental Static Regeneration (ISR)

**How it works**:
- Pages revalidate every 60 seconds
- First visitor after 60s triggers background regeneration
- Subsequent visitors get the fresh page
- No full rebuild required

**Webhook for instant updates** (optional):
1. Create Sanity webhook: `https://yourdomain.com/api/revalidate?secret=YOUR_SECRET`
2. Set `REVALIDATE_SECRET` in environment variables
3. Content updates appear within 1-3 seconds

See [MIGRATION.md](./MIGRATION.md) for detailed ISR documentation.

### Environment Variables

The following environment variables are required for full functionality:

**Required for CMS features:**
- `SANITY_API_TOKEN` - Sanity API token with Editor permissions (for view tracking and content updates)

**Required for preview mode:**
- `SANITY_PREVIEW_SECRET` - Secret key for enabling draft/preview mode in Sanity Studio

**Required for on-demand revalidation:**
- `REVALIDATE_SECRET` - Secret key for the revalidation API endpoint

**Required for comments:**
- `NEXT_PUBLIC_GISCUS_REPO_ID` - Giscus repository ID from giscus.app
- `NEXT_PUBLIC_GISCUS_CATEGORY_ID` - Giscus category ID for "Article Comments" category

See `.env.example` for a template with detailed instructions.

---

## 🎯 Enhanced CMS Features

### 1. Live Preview with Presentation Tool

The Sanity Studio includes a **Presentation Tool** that allows content editors to see changes in real-time:

- **Access**: Available in Sanity Studio sidebar (after "Structure" and "Vision")
- **Features**: 
  - Visual live preview of articles as you edit
  - Side-by-side editing and preview
  - Click elements in preview to jump to the field in the editor
- **Setup**: Configured automatically when you start Sanity Studio

### 2. View Tracking (Analytics)

Server-side analytics track article views without impacting user experience:

- **Location**: View count displayed in article's "Analytics" section (SEO & Social Metadata fieldset)
- **Data Tracked**: Article reference, timestamp, user agent, referrer
- **Privacy**: All tracking is server-side; no client-side analytics cookies
- **View Data**: Stored in Sanity as `articleView` documents
- **Access**: Visible only to content editors in Sanity Studio

### 3. Comment System with Moderation

GitHub Discussions-based comments powered by Giscus:

- **Location**: Below each article, after related articles
- **Features**:
  - GitHub authentication for commenters
  - Moderation through GitHub's native tools
  - Reactions and threading support
  - Lazy loading for performance
- **Setup**: 
  1. Enable GitHub Discussions in this repository
  2. Go to [giscus.app](https://giscus.app) and configure for this repo
  3. Add the repo ID and category ID to `.env`
- **Styling**: Automatically matches the site's ricePaper and sumiInk design system

### 4. Full-Text Search

Powerful search across all published articles:

- **Location**: Top of the Writing page (`/writing`)
- **Search Scope**: Title, excerpt, body content, tags, and categories
- **Features**:
  - 300ms debounced input (reduces API calls)
  - Highlighted search matches
  - Live results dropdown
  - "No results" state with helpful message
  - Click result to navigate to article
- **Performance**: Uses Sanity's GROQ queries for fast, server-side search

---

## 🌐 Deployment

### Latest Code Review (Dec 2025)

| Category | Score | Status |
|----------|-------|--------|
| Visual Identity & Design | 10/10 | ✅ Perfect |
| Functional Architecture | 9/10 | ✅ Excellent |
| Technical Implementation | 10/10 | ✅ Perfect |
| Content & Messaging | 9/10 | ✅ Strong |
| Code Quality | 10/10 | ✅ Production-ready |
| Security | 10/10 | ✅ No vulnerabilities |

**Overall Assessment**: ✅ **A- (Excellent)** - 90% PRD compliance achieved

### Build Performance

- **Build Time**: ~4.3s (2078 modules)
- **Bundle Size**: 243KB main chunk (78KB gzipped)
- **Time to Interactive**: Sub-5s on 3G
- **Lighthouse Score**: To be measured (estimated 90+)

### Security

- ✅ CodeQL analysis: 0 vulnerabilities
- ✅ Dependency audit: 0 known issues
- ✅ No API keys in code
- ✅ Proper CORS and security headers

---

## 🗺️ Roadmap

### Current: Version 2.5 ✅

- ✅ Core design system implementation
- ✅ Evidence Vault with quantified metrics
- ✅ Interactive PWA/SFR framework
- ✅ Blog system with markdown support
- ✅ Print-optimized resume
- ✅ Mobile-responsive design

### Phase 3: Interactive Authority (Future)

- [ ] Diagnostic Tool: Operational Friction Score calculator
- [ ] Interactive blueprints with Framer Motion
- [ ] Live Desk Status indicator

### Phase 4: Expansion & Lead Gen (Future)

- [ ] Newsletter integration ("The Weekly Audit")
- [ ] Protocol Library (downloadable templates)
- [ ] Dark mode ("Night Architecture")

### Phase 5: Consultancy Pivot (Long-term)

- [ ] Productized services page
- [ ] Client portal with live dashboards
- [ ] Fixed-price audit offerings

See [PRD.md](./PRD.md) for detailed roadmap specifications.

---

## 📄 Documentation

- **[PRD.md](./PRD.md)** - Complete product requirements and vision
- **[MIGRATION.md](./MIGRATION.md)** - Next.js + Sanity migration details
- **[WORKFLOW.md](./WORKFLOW.md)** - Sanity Studio content workflow
- **[ENHANCED_CMS_TESTING.md](./ENHANCED_CMS_TESTING.md)** - Advanced CMS features
- **[WEBSITE_REVIEW.md](./WEBSITE_REVIEW.md)** - Comprehensive technical review (24KB)
- **[REVIEW_SUMMARY.md](./REVIEW_SUMMARY.md)** - Executive summary of review findings

---

## 🤝 Contact & Contribution

### Contact Information

- **Email**: contact@jasonkhanani.com
- **LinkedIn**: [Jason Kester Hanani](https://www.linkedin.com/in/jasonkhanani)
- **Portfolio**: [jasonkhanani.com](https://jasonkhanani.com)

### For Potential Clients

Interested in:
- Revenue leakage diagnostics
- Remote operations audits
- Workflow automation design
- Data forensics for logistics/e-commerce

**→ Request a Diagnostic Call** via the contact page.

### For Developers

This is a personal portfolio site, but the codebase demonstrates:
- Next.js 14 with SSG/ISR architecture
- TypeScript best practices
- Tailwind CSS custom design systems
- Sanity CMS integration
- PortableText rendering

Feel free to reference the code for learning purposes. For questions, reach out via GitHub issues.

---

## 📜 License

Copyright © 2025 Jason Kester Hanani. All rights reserved.

This is a personal portfolio website. The code structure and architecture may be referenced for educational purposes, but please do not copy the content, design, or branding without permission.

---

## 🙏 Acknowledgments

- **Design Philosophy**: Inspired by industrial minimalism and Japanese aesthetic principles
- **Typography**: Source Serif 4 by Adobe, Inter by Rasmus Andersson
- **Icons**: Lucide React icon library
- **Build Tools**: Vite team for incredible DX
- **Community**: React, TypeScript, and Tailwind CSS ecosystems

---

**Built with precision. Deployed with confidence.**  
*Version 2.5 - December 2025*

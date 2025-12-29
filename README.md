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

- **Framework**: React 19.2.3 (ESM modules)
- **Router**: React Router DOM 7.11.0 with HashRouter (zero-config deployment)
- **Build Tool**: Vite 6.2.0 (fast builds, HMR)
- **Styling**: Tailwind CSS 3.4.0 with custom configuration
- **Language**: TypeScript 5.8.2 (full type safety)

### Key Dependencies

- **Content Processing**:
  - `react-markdown` - Markdown rendering
  - `remark-gfm` - GitHub Flavored Markdown support
  - `rehype-highlight` - Syntax highlighting for code blocks
  - `gray-matter` - YAML frontmatter parsing
  - `reading-time` - Automatic reading time estimation

- **Icons & UI**:
  - `lucide-react` - Modern icon system
  - `react-helmet-async` - SEO metadata management

- **Content Management**:
  - `mammoth` - DOCX to HTML conversion
  - `turndown` - HTML to Markdown conversion
  - `googleapis` - Google Drive API integration

### Development Tools

- **PostCSS** with Autoprefixer
- **Tailwind CSS Line Clamp** plugin
- **Vite React Plugin** for optimized builds

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

3. **Run the development server**:
   ```bash
   npm run dev
   ```
   
   The site will be available at `http://localhost:3000`

### Build Commands

```bash
# Development server (with hot reload)
npm run dev

# Production build (includes sitemap generation)
npm run build

# Preview production build
npm run preview

# Create a new blog post
npm run new-post

# Convert DOCX to Markdown
npm run convert-docx -- path/to/file.docx "Post Title"

# Convert HTML to Markdown
npm run convert-html
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
├── pages/               # Route-level page components
│   ├── Home.tsx         # Landing page with hero & value props
│   ├── Evidence.tsx     # Case studies showcase
│   ├── Framework.tsx    # PWA/SFR interactive visualization
│   ├── Writing.tsx      # Blog listing with filters
│   ├── Article.tsx      # Individual blog post rendering
│   ├── Resume.tsx       # Print-optimized resume
│   └── Contact.tsx      # Contact form and info
├── content/
│   ├── posts/           # Markdown blog posts
│   ├── posts.ts         # Post metadata and loading logic
│   └── POST_AUTHORING.md # Content creation guidelines
├── scripts/             # Build and content management scripts
│   ├── generate-sitemap.js # SEO sitemap generation
│   ├── convert-docx.js  # DOCX to Markdown converter
│   └── new-post.js      # Interactive post creation
├── lib/                 # Utility functions
├── src/
│   ├── styles.css       # Global styles and tactile elements
│   └── utils/           # Analytics and helpers
├── public/              # Static assets
├── App.tsx              # Root application with routing
├── constants.ts         # Case studies and experience data
├── types.ts             # TypeScript type definitions
├── tailwind.config.js   # Design system configuration
├── vite.config.ts       # Build configuration
├── PRD.md               # Product Requirements Document
└── README.md            # This file
```

---

## 📝 Content Management

### Adding Blog Posts

#### Method 1: Interactive CLI

```bash
npm run new-post
```

Follow the prompts to create a post with proper frontmatter.

#### Method 2: Manual Creation

Create a new file in `content/posts/` with the following frontmatter:

```markdown
---
title: "Your Post Title"
date: "2025-12-29"
excerpt: "A compelling summary that appears in listings"
category: "Operations" # Operations, Engineering, or Analysis
tags: ["remote work", "systems thinking", "SQL"]
author: "Jason Kester Hanani"
readingTime: "8 min read"
---

Your content here...
```

#### Method 3: Import from Google Docs

See [WORKFLOW.md](./WORKFLOW.md) for automated import from Google Drive.

### Content Guidelines

- **Writing Style**: Technical but accessible, use concrete examples
- **Code Blocks**: Include syntax highlighting language specifiers
- **Metrics**: Quantify impact wherever possible
- **Persona Alignment**: Tag content with Investigator or Architect focus
- **Maintenance**: Minimum 1 tactical post every 3 weeks (per PRD)

---

## 🏗️ Architecture Details

### Routing Strategy

The site uses **HashRouter** for zero-config static deployment:

- ✅ Works with GitHub Pages, Netlify, Vercel without server configuration
- ✅ No rewrite rules needed
- ✅ Client-side routing with clean URLs via hash fragments

**Routes**:
- `/` - Home page
- `/evidence` - Case studies
- `/framework` - PWA/SFR framework
- `/writing` - Blog listing
- `/writing/:slug` - Individual posts
- `/resume` - Resume/CV
- `/contact` - Contact information

### Performance Optimizations

- **Lazy Loading**: All pages are lazy-loaded with React.lazy()
- **Code Splitting**: Automatic route-based chunking via Vite
- **Suspense Boundaries**: Loading states and error handling
- **Image Optimization**: Lazy loading with proper aspect ratios
- **CSS Purging**: Tailwind removes unused styles in production

### SEO Features

- Auto-generated `sitemap.xml` on every build
- `robots.txt` for search engine guidance
- Meta descriptions via React Helmet
- Semantic HTML structure
- Reading time estimation for posts

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

### Vite Configuration

- **Port**: Development server runs on port 3000
- **Aliases**: `@/` maps to project root
- **PostCSS**: Integrated with Tailwind
- **TypeScript**: Full type checking enabled

---

## 🌐 Deployment

### Build Process

```bash
# 1. Generate sitemap (fetches article slugs from Sanity CMS)
npm run prebuild

# 2. Build optimized production bundle
npm run build

# 3. Copy admin files (if using Netlify CMS)
npm run postbuild
```

**Note**: The sitemap generation script (`scripts/generate-sitemap.js`) connects to Sanity CMS to fetch article slugs. Ensure network access to Sanity.io API during build.

Output directory: `dist/`

### Deployment Platforms

**Recommended**:
- Netlify (current)
- Vercel
- GitHub Pages
- Cloudflare Pages

All work seamlessly with HashRouter and static builds.

### Environment Variables

No environment variables required for core functionality. Optional for:
- Google Drive API credentials - For automated content import (see [WORKFLOW.md](./WORKFLOW.md))
- Sanity CMS configuration - For dynamic content and sitemap generation (projectId: `lrta5lyp`)

---

## 📊 Quality Metrics

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
- **[WEBSITE_REVIEW.md](./WEBSITE_REVIEW.md)** - Comprehensive technical review (24KB)
- **[REVIEW_SUMMARY.md](./REVIEW_SUMMARY.md)** - Executive summary of review findings
- **[WORKFLOW.md](./WORKFLOW.md)** - Content import and publishing workflow
- **[content/POST_AUTHORING.md](content/POST_AUTHORING.md)** - Blog writing guidelines

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
- Clean React 19 architecture
- TypeScript best practices
- Tailwind CSS custom design systems
- Static site generation with Vite
- Markdown-based content management

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

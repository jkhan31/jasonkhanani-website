# CLAUDE.md — Jason K Hanani Portfolio

## Project Overview

Personal portfolio and blog for Jason Kester Hanani, an Industrial Engineer specializing in remote operations optimization. The site features two brand personas:
- **Hanko Rust** (`#802B0A`) — The Investigator: forensic, data-driven analysis
- **Fox Orange** (`#F07F2E`) — The Architect: systems design, scalable workflows

Built with Next.js 14 (Pages Router), Sanity CMS, and Tailwind CSS. Deployed on Netlify with ISR.

---

## Development Commands

```bash
npm run dev       # Start development server (localhost:3000)
npm run build     # Production build
npm run start     # Serve production build
npm run lint      # Run ESLint
npm run test      # Run Vitest test suite
```

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14, Pages Router |
| Language | TypeScript 5.8 (strict mode enabled) |
| Styling | Tailwind CSS 3.4 |
| CMS | Sanity (projectId: `lrta5lyp`, dataset: `production`) |
| Deployment | Netlify (`netlify.toml`) |
| Icons | lucide-react |
| Comments | @giscus/react (GitHub Discussions) |

---

## Design System

### Brand Colors (Tailwind tokens)
| Token | Hex | Use |
|-------|-----|-----|
| `ricePaper` | `#FAF5F0` | Page background |
| `sumiInk` | `#1A1A1A` | Primary text |
| `hankoRust` | `#802B0A` | Investigator accent, active nav, CTAs |
| `foxOrange` | `#F07F2E` | Architect accent, links, hover states |
| `sage` | `#4D6B57` | Future-facing, secondary accents |

Always use Tailwind token names — never raw hex values in JSX/TSX.

### Typography
- `font-serif` → Source Serif 4 (headings, pull quotes)
- `font-sans` → Inter (body text, UI labels)
- `font-signature` → Caveat (personal/informal accents)

### Border Convention
Use `border-0.5` (0.5px) for "engineering precision" borders throughout. This is a custom Tailwind token — do not use `border` (1px) for decorative/structural borders.

---

## Project Structure

```
/
├── pages/              # Next.js routes (Pages Router)
│   ├── api/            # 4 API routes: draft, exit-draft, revalidate, track-view
│   └── writing/[slug]  # Dynamic article pages
├── components/         # 12 React components
├── lib/                # sanityErrorHandler.ts (retry logic)
├── src/                # client.ts (Sanity client + urlFor)
├── public/             # Static assets
├── constants.ts        # Case studies data, SITE_URL, SITE_DOMAIN
├── types.ts            # Article, CaseStudy, ContentBlock interfaces
├── tailwind.config.js  # Design system tokens
└── jasonkhanani-website/  # Sanity Studio (separate workspace)
```

---

## Sanity CMS

- **Studio location:** `/jasonkhanani-website/` subdirectory (separate npm workspace)
- **Client:** `src/client.ts` exports `client` and `urlFor`
- **Content types:** article, author, category, tag, series, articleView
- **Draft preview:** `/api/draft.ts` and `/api/exit-draft.ts`
- **View tracking:** `/api/track-view.ts` (POST with `{ articleId }` or `{ slug }`)
- **Revalidation webhook:** `/api/revalidate.ts` (requires `REVALIDATE_SECRET` env var)
- **Required env vars:** `SANITY_API_TOKEN`, `REVALIDATE_SECRET`

**Do not modify Sanity schemas** without also checking Studio sync in `/jasonkhanani-website/schemas/`.

---

## Rendering Patterns

### ISR (Incremental Static Regeneration)
All pages use `revalidate: 60` — pages rebuild every 60 seconds and on-demand via the revalidate webhook from Sanity Studio.

### PortableText
Article body is rendered via `@portabletext/react` with custom `ptComponents` in `pages/writing/[slug].tsx`. Add new block types there as `types.yourBlockType`.

### Image URLs
Always use `urlFor(imageRef).width(N).url()` from `src/client.ts`. Do not construct Sanity CDN URLs manually.

---

## Key Conventions

- **Pages Router** — do not use App Router patterns (`use client`, Server Components, `app/` dir)
- **Mobile-first** — responsive classes go `base → md → lg` (not desktop-first)
- **ISR over SSR** — avoid `getServerSideProps`; prefer `getStaticProps` + `revalidate`
- **`any` for Sanity data** — Sanity query results use `any` types intentionally; don't add false precision with wrong types
- **No raw hex values** — use Tailwind tokens for all brand colors

---

## Deployment

- **Platform:** Netlify
- **Config:** `netlify.toml` (build command: `npm run build`, publish: `.next`)
- **Plugin:** `@netlify/plugin-nextjs` (required for ISR on Netlify)
- **Cache:** HTML = no-cache, static assets = 1 year immutable

**Do not change `output` in `next.config.js`** — static export (`output: 'export'`) breaks ISR.

---

## Private Reference Documents

**`master-experience-bank.md`** — Complete experience inventory (NOT published to website)
- Source of truth for resume content and website copy
- Contains expanded bullets, earlier roles, projects, skills inventory, leadership evidence
- Read before any resume tailoring or fit analysis

**`career-target.md`** — Job search strategy and positioning context (NOT published to website)
- Target: Product Operations / Systems / Execution Clarity Leader (product-adjacent)
- Core value prop: "I design and implement systems that turn product strategy into clear execution and measurable outcomes"
- Website and resume should frame Jason as a **system builder**, not an operations manager
- Read before writing any copy, framing narratives, or advising on role fit

---

## Cautions

- Do not set `output: 'export'` in `next.config.js` — it disables ISR
- Do not remove `@netlify/plugin-nextjs` from `netlify.toml` — ISR runtime requires it
- When editing Sanity queries, test against actual CMS data — field names differ from TypeScript interfaces
- `jasonkhanani-website/` is excluded from the root `tsconfig.json` — it has its own TS config

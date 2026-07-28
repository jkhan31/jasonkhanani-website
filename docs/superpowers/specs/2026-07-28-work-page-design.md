# /work Page: Design Spec

Date: 2026-07-28

## Background

`work-page-for-site.zip` (unzipped to `work-page-for-site/`) was dropped in the
repo root, containing a standalone `work.html` landing page plus six
self-contained interactive demo HTML files. The original task
(`CLAUDE_CODE_INSTRUCTIONS.md`) asked for these to be wired into the site as
an additive `/work` route, without touching the existing `/case-studies` page.

During scoping, it became clear the six new demos overlap thematically with
the site's existing real case studies (`constants.ts` → `CASE_STUDIES`), and
the user decided to consolidate: retire `/case-studies`, and merge real case
studies + illustrative demos + a pre-existing data-analysis deck
(`public/portfolio-projects/expedia-case-study/expedia-deck.html`) into one
unified `/work` page. Four new demos will also be built to give every real
case study a matching interactive demo.

## Goals

- One page, `/work`, replaces `/case-studies` as the site's portfolio hub.
- Every one of the 6 real case studies gets a paired interactive demo
  illustrating "how" the result in the card was likely achieved.
- The 2 existing demos with no matching real case study (Reporting
  Automation, Attribute Enrichment) remain as standalone illustrative cards.
- The Expedia data-analysis deck is included as a distinct "Data Analysis"
  card.
- No SEO/link breakage: `/case-studies` 301s to `/work`.

## Non-goals

- Not rewriting the real case-study copy in `constants.ts` (results, figures,
  wording stay as-is).
- Not rewriting the two standalone demos' copy/content.
- Not restyling the demo files' internal look — they keep their existing
  self-contained ink/paper/green + Inter/JetBrains Mono identity, matching
  the four newly-built demos to that same identity for consistency among all
  eight demo files.
- Not otherwise touching Resume, Writing, Framework, or Contact pages beyond
  the nav-link change and the two `/case-studies` → `/work` internal link
  fixes.

## Card inventory (9 cards on /work)

| Card | Tag | Pairing | Source |
|---|---|---|---|
| Return-to-Exchange Feature Launch | Real Result | + new demo: "Refund vs. Exchange Flow" | `constants.ts` (existing) + new demo (build) |
| Cost-to-Serve Optimization | Real Result | + new demo: "Margin Model" | `constants.ts` (existing) + new demo (build) |
| AI Support Automation | Real Result | + new demo: "Deflection Dashboard" | `constants.ts` (existing) + new demo (build) |
| Payment Handling Fee Design | Real Result | + new demo: "Fee-Tier Benchmarking Tool" | `constants.ts` (existing) + new demo (build) |
| Routing Automation Initiative | Real Result | + existing demo: `sample-project-5-routing-engine.html` | `constants.ts` (existing) + demo (from zip) |
| Global Onboarding Standardization | Real Result | + existing demo: `sample-project-2-handover-automation.html` | `constants.ts` (existing) + demo (from zip) |
| Multi-Marketplace Reporting Automation | Illustrative Demo | standalone, no real-case pair | demo (from zip) |
| Automated Product Attribute Enrichment | Illustrative Demo | standalone, no real-case pair | demo (from zip) |
| Expedia Marketplace Analysis | Data Analysis | standalone | existing deck (new short blurb) |

Note: `sample-project-3-cs-knowledge-base.html` and
`sample-project-6-fraud-resistant-returns.html` from the zip are **not**
used as the demo for Support Automation / Return-to-Exchange, since their
own disclaimer text confirms they model a different underlying case than
the real one. Instead, new demos are built purpose-fit to those two real
cases. These two zip files are simply not included on `/work` at all
(dropped, not orphaned — see Cleanup section).

## New demo specs (built fresh, fictional data throughout)

All four follow the existing demo template: `SAMPLE PROJECT — illustrative
demo, fictional data` disclaimer banner, eyebrow/h1/lede header, a
Problem/Method/Result meta-row, one interactive "try it" panel, then brief
explanatory copy. Self-contained HTML/CSS/JS, Inter + JetBrains Mono, the
existing `--ink/--paper/--green/--gray/--line` palette (extended with an
accent color per demo as the existing six do).

1. **Deflection Dashboard** (pairs with AI Support Automation): simulated
   ticket stream; "Simulate a day" plays tickets resolving via bot (green) or
   escalating to a human (amber); live KPI counter climbs toward a
   fictionalized ~68%-equivalent deflection rate; toggle shows "9–5 only" vs
   "24/7" coverage.
2. **Refund vs. Exchange Flow** (pairs with Return-to-Exchange): side-by-side
   return flow, old (straight to refund) vs. new (surfaces in-stock exchange
   matches first); running counter converts a fictionalized ~15% of
   simulated returns to exchange and tallies preserved revenue.
3. **Margin Model** (pairs with Cost-to-Serve Optimization): pick a
   fictional SKU weight/lane; compare old flat discount fee vs. actual
   cost-per-kg vs. redesigned fee; bar chart shows margin leakage closing
   across weight tiers when toggling old→new pricing.
4. **Fee-Tier Benchmarking Tool** (pairs with Payment Handling Fee Design):
   fictional competitor benchmark table + a margin-sensitivity slider for
   standard vs. COD rates; shows projected revenue uplift and a churn-risk
   trade-off as the slider moves.

## File layout

Consolidate all static, unprocessed demo/deck files under one folder:

```
public/work/
  sample-project-2-handover-automation.html      (from zip, unchanged)
  sample-project-5-routing-engine.html            (from zip, unchanged)
  sample-project-1-reporting-automation.html      (from zip, unchanged)
  sample-project-4-attribute-enrichment.html      (from zip, unchanged)
  deflection-dashboard.html                       (new)
  refund-vs-exchange-flow.html                    (new)
  margin-model.html                               (new)
  fee-tier-benchmarking-tool.html                  (new)
  expedia-deck.html                                (moved from public/portfolio-projects/expedia-case-study/)
```

`public/portfolio-projects/` is removed once `expedia-deck.html` is moved.
`sample-project-3-cs-knowledge-base.html` and
`sample-project-6-fraud-resistant-returns.html` are not copied anywhere (see
Cleanup).

## Route & navigation

- New page: `pages/work.tsx` (Next.js Pages Router, same pattern as
  `pages/framework.tsx` — no own nav/footer markup; `Layout` in `_app.tsx`
  supplies the real site Header/Footer automatically).
- Delete `pages/case-studies.tsx`.
- `components/Layout.tsx`: nav link `{ label: 'Case Studies', path:
  '/case-studies' }` → `{ label: 'Work', path: '/work' }`.
- `pages/index.tsx` (2 links) and `pages/resume.tsx` (1 link): change
  `/case-studies` → `/work`.
- `public/_redirects`: add `/case-studies /work 301` above the existing
  catch-all `/* /index.html 200` line (order matters — Netlify uses
  first-match).

## Visual design of the /work landing page

Built with the site's real Tailwind tokens (`hankoRust`, `foxOrange`,
`ricePaper`, `sumiInk`, `font-serif`, `font-sans`, `border-0.5`), matching
the pattern already used in `case-studies.tsx` and `framework.tsx`. Per
CLAUDE.md convention, no raw hex values in JSX. Note: these tokens currently
resolve to the teal/cream/Lora/DM Sans palette (see tailwind.config.js), so
visually this reproduces `work.html`'s original teal/cream design —
confirmed to be the same underlying palette, not a conflicting one.

Page structure:
1. Hero (adapted copy — see Copy section below).
2. "How I approach this work" panel (adapted from `work.html`'s
   diagnose-first offer panel).
3. Grid of 9 cards (2-column responsive, per existing `CaseCard`/`.grid`
   conventions). Each card shows: tag badge (Real Result / Illustrative Demo
   / Data Analysis), title, 1–2 line description, and either:
   - a single "Open demo →" link (standalone cards), or
   - the real result summary + a secondary "See a sample build like this →"
     link to the demo (paired cards).
4. CTA panel (adapted from `work.html`'s cta-panel, links to `/contact`).
5. Disclaimer note for the demo cards (adapted from `work.html`'s footer
   note — rendered as a page section, not an HTML `<footer>`, to avoid
   colliding with the site's real `<Footer>` landmark).

## Copy approach

- Real case-study card copy: unchanged, pulled from `constants.ts`.
- Existing 4 demo files (routing engine, handover automation, reporting
  automation, attribute enrichment): copy unchanged.
- New 4 demo files: new copy, following the existing demos' voice/format.
- Hero, offer panel, CTA panel: lightly rewritten from `work.html` to
  reflect the page's expanded scope (real case studies + demos + analysis,
  not just "six sample projects"). This supersedes the original
  `CLAUDE_CODE_INSTRUCTIONS.md` instruction not to rewrite copy, which was
  written before the scope expanded to include real case studies.
- Expedia deck card: new short blurb (~2 sentences), since no existing card
  copy exists for it.

## Data wiring

- `constants.ts`'s `CASE_STUDIES` stays the single source of truth for real
  case-study text; no changes to its schema or content.
- `pages/work.tsx` holds a local mapping (case-study id → demo file path)
  for the 6 paired cards, plus a small local array for the 3 unpaired demo
  cards (2 existing demos + Expedia deck). No changes to `types.ts`.

## Cleanup

- Delete `work-page-for-site/` and `work-page-for-site.zip` from repo root.
- Delete `public/portfolio-projects/` (after moving `expedia-deck.html`).
- `sample-project-3-cs-knowledge-base.html` and
  `sample-project-6-fraud-resistant-returns.html` are deleted along with the
  rest of `work-page-for-site/` — not copied into `public/work/`, since they
  aren't used on the page (see Card inventory note above).

## Verification

- Every link on `/work` must resolve: the 8 demo/deck files reachable at
  their exact `public/work/...html` paths, `/contact` valid, nav link valid.
- `npm run build` succeeds.
- `/case-studies` redirects to `/work` (verify via `netlify dev` or by
  inspecting `public/_redirects` ordering — Netlify redirects aren't testable
  under plain `next dev`).
- No remaining references to `/case-studies` or `case-studies.tsx` in the
  codebase except the redirect rule.

# /work Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace `/case-studies` with a consolidated `/work` page pairing all six real case studies with interactive demos (four newly built), plus two standalone demos and the Expedia data-analysis deck.

**Architecture:** A new Next.js Pages Router page (`pages/work.tsx`) rendered inside the existing global `Layout` (real Header/Footer, no page-owned nav). Nine cards pull copy from two sources: `constants.ts`'s `CASE_STUDIES` (real results, unchanged) and a local array in `work.tsx` for demo-only/analysis cards. All interactive demos are self-contained static HTML files served unprocessed from `public/work/`.

**Tech Stack:** Next.js 14 (Pages Router), TypeScript, Tailwind CSS (site's existing token set), plain HTML/CSS/vanilla JS for the static demo files (matching the existing six demos — no build step, no frameworks).

## Global Constraints

- No raw hex values in `.tsx`/`.jsx` — use the site's Tailwind tokens (`hankoRust`, `foxOrange`, `ricePaper`, `sumiInk`, `font-serif`, `font-sans`, `border-0.5`), per CLAUDE.md.
- Do not modify `constants.ts` case-study text/figures — pull as-is.
- Do not modify the copy of the 4 existing zip demo files or the Expedia deck — move only.
- The 4 new demo files use fictional company names and fictional figures throughout (not the real €/% numbers from `constants.ts`) — this is the same convention the existing 6 demos use (see their "SAMPLE PROJECT" disclaimer banners).
- The 4 new demo files match the existing demos' technical format: single self-contained `.html` file, inline `<style>` and `<script>`, `Inter` + `JetBrains Mono` via Google Fonts, `--ink/--paper/--card/--gray/--line` base palette plus one accent pair per file (e.g. `--blue/--blue-bg`), no external JS dependencies, a `.sample-banner` disclaimer at the top.
- This repo has no existing test files and no test runner configured for pages (Vitest is listed in CLAUDE.md but unused). "Tests" in this plan are therefore: `npm run build` succeeding, and explicit grep/manual checks that content and links are present and correct — not unit tests. Do not add a test framework as part of this work (YAGNI — out of scope).
- Adaptation from the standard writing-plans template: the four new-demo tasks below specify exact copy, numbers, and interaction behavior (not pseudocode), but do not pre-embed the full ~300-400 line HTML/CSS/JS source in this document — that would mean writing every demo twice. Follow the spec in each task precisely; there is no ambiguity left for judgment calls.

---

### Task 1: Consolidate static assets into `public/work/`

**Files:**
- Move: `work-page-for-site/sample-project-1-reporting-automation.html` → `public/work/sample-project-1-reporting-automation.html`
- Move: `work-page-for-site/sample-project-2-handover-automation.html` → `public/work/sample-project-2-handover-automation.html`
- Move: `work-page-for-site/sample-project-4-attribute-enrichment.html` → `public/work/sample-project-4-attribute-enrichment.html`
- Move: `work-page-for-site/sample-project-5-routing-engine.html` → `public/work/sample-project-5-routing-engine.html`
- Move: `public/portfolio-projects/expedia-case-study/expedia-deck.html` → `public/work/expedia-deck.html`
- Delete: `work-page-for-site/` (entire folder, including `work.html`, `sample-project-3-cs-knowledge-base.html`, `sample-project-6-fraud-resistant-returns.html` — not used, per spec)
- Delete: `work-page-for-site.zip`
- Delete: `public/portfolio-projects/` (now empty after the move)

**Interfaces:**
- Produces: 5 files reachable at `/work/sample-project-1-reporting-automation.html`, `/work/sample-project-2-handover-automation.html`, `/work/sample-project-4-attribute-enrichment.html`, `/work/sample-project-5-routing-engine.html`, `/work/expedia-deck.html` once served from `public/`. Task 6 links to these exact paths.

- [ ] **Step 1: Move the four zip demo files and the Expedia deck with `git mv`**

```bash
mkdir -p public/work
git mv work-page-for-site/sample-project-1-reporting-automation.html public/work/sample-project-1-reporting-automation.html
git mv work-page-for-site/sample-project-2-handover-automation.html public/work/sample-project-2-handover-automation.html
git mv work-page-for-site/sample-project-4-attribute-enrichment.html public/work/sample-project-4-attribute-enrichment.html
git mv work-page-for-site/sample-project-5-routing-engine.html public/work/sample-project-5-routing-engine.html
git mv public/portfolio-projects/expedia-case-study/expedia-deck.html public/work/expedia-deck.html
```

- [ ] **Step 2: Remove the now-redundant source files/folders**

```bash
git rm -r work-page-for-site
git rm work-page-for-site.zip
git rm -r public/portfolio-projects
```

- [ ] **Step 3: Verify the 5 files exist at their new paths and nothing else remains**

Run: `ls public/work/ && test -d work-page-for-site && echo STILL_EXISTS || echo GONE && test -d public/portfolio-projects && echo STILL_EXISTS || echo GONE`
Expected: `public/work/` lists exactly the 5 files above; both existence checks print `GONE`.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "chore: consolidate work demo assets into public/work/"
```

---

### Task 2: Build new demo — Deflection Dashboard

**Files:**
- Create: `public/work/deflection-dashboard.html`

**Interfaces:**
- Produces: a static file reachable at `/work/deflection-dashboard.html`. Task 6's card for "AI Support Automation" links to this exact path.

**Content spec** (fictional company: "Harlow Marketplace"; pairs conceptually with the real AI Support Automation case study but uses none of its real figures):

- `.sample-banner` text: `SAMPLE PROJECT — illustrative demo built to show methodology, not a real client engagement. Company and figures are fictionalized.`
- Eyebrow: `Portfolio · AI Support Automation`
- H1: `A chatbot that knows what it doesn't know`
- Lede: `A composite scenario based on a common support-ops pattern: business-hours-only coverage creates an SLA backlog overnight and on weekends. The fix routes routine, high-confidence questions to instant automated answers, and sends everything else to a human — with 24/7 coverage either way.`
- Meta-row (4 stat cards): `Coverage` → `Business hours only`, `Method` → `Confidence-gated auto-response`, `Deflection` → `71% (simulated)`, `Coverage after` → `24/7`
- Interactive panel, accent colors `--blue:#3E7BB4; --blue-bg:#EAF2FA` (reuse the existing demos' base palette: `--ink:#1B2432; --paper:#F7F8FA; --card:#FFFFFF; --green:#3EB489; --gray:#8791A1; --line:#E4E8EE`):
  - Title: "Simulate a day of tickets"
  - A "▶ Run the simulation" button. On click, a queue of 12 fictional tickets animates in one at a time (staggered ~400ms), each rendered as a small ticket row with a one-line fictional subject. Use these 12 subjects in order: "Where is my order #HM-2291?", "Can I change my delivery address?", "Item arrived damaged, need replacement", "What's your return window?", "Do you ship to East Malaysia?", "Payment failed but I was charged twice", "How do I track my package?", "Can I cancel an order after checkout?", "The size chart doesn't match what arrived", "Is this item eligible for exchange?", "My discount code didn't apply", "I never received a confirmation email".
  - Each ticket resolves into one of two states after it animates in: `Auto-resolved` (green background) for tickets 1,2,4,5,7,8,10,11,12 (9 tickets), or `Escalated to human` (amber background) for tickets 3,6,9 (3 tickets) — hardcode this mapping so the demo is deterministic.
  - A running counter above the ticket list updates live as each ticket resolves: "X / 12 auto-resolved — Y% deflection" (Y = round(X/12*100)), ending at "9 / 12 auto-resolved — 75% deflection" once all 12 have played.
  - Below the ticket list, a small two-column comparison: "Before" (label: "Business hours only, 9am–6pm") vs "After" (label: "24/7 automated + human backstop").
  - A "↺ Reset" button clears the ticket list and counter back to zero so the simulation can be replayed.
- Closing explanatory section (plain paragraph, ~80-120 words): explain that the underlying logic is a confidence threshold — above it, answer automatically from a template; below it, hand off to a human with full context attached — and that "escalate" is treated as a legitimate, first-class outcome rather than a failure of the automation.
- No external JS dependencies; vanilla JS only, inline `<script>` at the end of `<body>`.

- [ ] **Step 1: Write the file per the content spec above**, using the same document skeleton as `public/work/sample-project-2-handover-automation.html` (DOCTYPE, meta viewport, Google Fonts preconnect for `JetBrains Mono` + `Inter`, `:root` CSS variables, `.wrap`/`.mono`/`.sample-banner`/`.eyebrow`/`header p`/`.meta-row`/`.meta-card` styles reused verbatim from that file for visual consistency across all demo files).

- [ ] **Step 2: Open the file in a browser and manually verify:**
  - The "Run the simulation" button plays all 12 tickets in sequence with staggered timing (not all at once).
  - Exactly 9 end up green/"Auto-resolved" and 3 end up amber/"Escalated to human", matching the hardcoded mapping above.
  - The running counter ends at "9 / 12 auto-resolved — 75% deflection".
  - "Reset" clears state and the simulation can be re-run from scratch.

- [ ] **Step 3: Validate the HTML is well-formed**

Run: `python3 -c "import html.parser; p = html.parser.HTMLParser(); p.feed(open('public/work/deflection-dashboard.html').read())"`
Expected: no exception raised.

- [ ] **Step 4: Commit**

```bash
git add public/work/deflection-dashboard.html
git commit -m "feat: add Deflection Dashboard demo for AI Support Automation"
```

---

### Task 3: Build new demo — Refund vs. Exchange Flow

**Files:**
- Create: `public/work/refund-vs-exchange-flow.html`

**Interfaces:**
- Produces: a static file reachable at `/work/refund-vs-exchange-flow.html`. Task 6's card for "Return-to-Exchange Feature Launch" links to this exact path.

**Content spec** (fictional company: "Marisol Home & Living"):

- `.sample-banner`: `SAMPLE PROJECT — illustrative demo built to show methodology, not a real client engagement. Company and figures are fictionalized.`
- Eyebrow: `Portfolio · Return-to-Exchange Flow`
- H1: `Refund is not the only outcome of a return`
- Lede: `A composite scenario based on a common returns pattern: a customer starts a return, and the flow goes straight to refund without ever checking whether an exchange would satisfy them just as well — even when the exact item is back in stock in another size or color.`
- Meta-row: `Old flow` → `Return → Refund`, `New flow` → `Return → Exchange offer → Refund (if declined)`, `Conversion (simulated)` → `~1 in 6 returns`, `Method` → `In-stock match at return start`
- Interactive panel, accent `--amber:#C98A1F; --amber-bg:#FFF6E8` plus base palette reused from existing demos:
  - Title: "Try both flows"
  - Two side-by-side columns, "Old Flow" and "New Flow", each starting from the same fictional scenario: "Customer returns: Marisol Ceramic Table Lamp, color: Terracotta — reason: 'Wrong color, wanted Sage Green'."
  - "Old Flow" column: a single button "Process refund" — clicking it shows an immediate result box: "Refund issued: $42.00. No exchange offered."
  - "New Flow" column: a button "Check exchange options" — clicking it reveals a small in-stock match card ("Same lamp — Sage Green — In stock") with two buttons, "Accept exchange" and "Decline, refund me instead". Clicking "Accept exchange" shows a result box: "Exchange processed: Terracotta → Sage Green. $0 refunded, revenue retained." Clicking "Decline" shows: "Refund issued: $42.00." (same as old flow, but only after the option was offered).
  - Below both columns, a running fictional tally that increments only when "Accept exchange" is clicked across repeated tries: "Exchanges accepted this session: N" and a static caption stating the illustrative aggregate: "In a 60-day pilot on this pattern, roughly 1 in 6 returns converted to an exchange instead of a refund."
  - A "↺ Reset scenario" button restores both columns to their initial unclicked state.
- Closing explanatory section (~80-120 words): explain that the key change is sequencing — checking for a viable exchange *before* the refund path is offered, not after — and that revenue is preserved by giving the customer a same-value alternative before defaulting to cash back.

- [ ] **Step 1: Write the file per the content spec above**, reusing the shared skeleton/CSS classes from `public/work/sample-project-2-handover-automation.html` as in Task 2.

- [ ] **Step 2: Open the file in a browser and manually verify:**
  - "Old Flow" → "Process refund" immediately shows the refund-only result, no exchange step.
  - "New Flow" → "Check exchange options" reveals the match card; "Accept exchange" shows the exchange result and increments the session tally; "Decline, refund me instead" shows the refund result and does not increment the tally.
  - "Reset scenario" restores both columns without reloading the page.

- [ ] **Step 3: Validate the HTML is well-formed**

Run: `python3 -c "import html.parser; p = html.parser.HTMLParser(); p.feed(open('public/work/refund-vs-exchange-flow.html').read())"`
Expected: no exception raised.

- [ ] **Step 4: Commit**

```bash
git add public/work/refund-vs-exchange-flow.html
git commit -m "feat: add Refund vs. Exchange Flow demo for Return-to-Exchange case study"
```

---

### Task 4: Build new demo — Margin Model

**Files:**
- Create: `public/work/margin-model.html`

**Interfaces:**
- Produces: a static file reachable at `/work/margin-model.html`. Task 6's card for "Cost-to-Serve Optimization" links to this exact path.

**Content spec** (fictional company: "Corvid Logistics Network"):

- `.sample-banner`: `SAMPLE PROJECT — illustrative demo built to show methodology, not a real client engagement. Company and figures are fictionalized.`
- Eyebrow: `Portfolio · Cost-to-Serve Margin Model`
- H1: `A flat shipping discount doesn't know what a package actually weighs`
- Lede: `A composite scenario based on a common cost-to-serve pattern: a flat shipping discount applied evenly across all orders quietly subsidizes the heaviest shipments, while barely denting the margin on light ones.`
- Meta-row: `Old pricing` → `Flat 20% discount, all weights`, `New pricing` → `Tiered by weight band`, `Method` → `Cost-per-kg vs. price comparison`, `Result (simulated)` → `Margin leak closes on 3 of 4 tiers`
- Interactive panel, accent `--teal:#2E8FA6` (reuse existing demos' base palette):
  - Title: "Compare pricing by weight tier"
  - A row of 4 selectable weight-tier chips: `0–2kg`, `2–5kg`, `5–10kg`, `10kg+`. `2–5kg` is selected by default.
  - For each tier, use these exact fictional numbers (cost, old price, new price):
    - `0–2kg`: cost $3.20, old price $4.10, new price $4.00
    - `2–5kg`: cost $6.40, old price $5.10, new price $6.90
    - `5–10kg`: cost $11.80, old price $9.40, new price $12.50
    - `10kg+`: cost $19.50, old price $15.60, new price $20.80
  - For the selected tier, show these 3 numbers side by side: `Actual cost-per-shipment`, `Price charged under old flat discount`, `Price charged under new tiered pricing`.
  - A horizontal bar chart (plain CSS divs sized by inline `width: X%` computed from the fictional numbers above — no charting library) showing cost vs. old price vs. new price for the currently selected tier, updating when a different tier chip is clicked.
  - A toggle switch labeled "Old pricing / New pricing" that, when flipped, recolors the "price" bar: red-tinted when that tier's active price < cost, green-tinted when active price ≥ cost. (Per the numbers above: under old pricing, `2–5kg`, `5–10kg`, and `10kg+` are red; `0–2kg` is green. Under new pricing, all 4 tiers are green.)
- Closing explanatory section (~80-120 words): explain that the fix isn't raising prices everywhere, it's aligning the discount structure with the actual cost driver (weight/lane), so heavy shipments stop being subsidized by revenue from light ones, without discarding the marketing value of "we offer a discount" altogether.

- [ ] **Step 1: Write the file per the content spec above**, reusing the shared skeleton/CSS classes from `public/work/sample-project-2-handover-automation.html` as in Task 2. Use plain divs with inline computed `width` percentages for the bar chart — no external charting library, consistent with the Global Constraints.

- [ ] **Step 2: Open the file in a browser and manually verify:**
  - Clicking each of the 4 weight-tier chips updates the 3 numbers and the bar chart to that tier's fictional values listed above.
  - The old/new pricing toggle recolors the price bar correctly per tier as specified above.
  - Only the `2–5kg` tier is selected by default on page load.

- [ ] **Step 3: Validate the HTML is well-formed**

Run: `python3 -c "import html.parser; p = html.parser.HTMLParser(); p.feed(open('public/work/margin-model.html').read())"`
Expected: no exception raised.

- [ ] **Step 4: Commit**

```bash
git add public/work/margin-model.html
git commit -m "feat: add Margin Model demo for Cost-to-Serve Optimization case study"
```

---

### Task 5: Build new demo — Fee-Tier Benchmarking Tool

**Files:**
- Create: `public/work/fee-tier-benchmarking-tool.html`

**Interfaces:**
- Produces: a static file reachable at `/work/fee-tier-benchmarking-tool.html`. Task 6's card for "Payment Handling Fee Design" links to this exact path.

**Content spec** (fictional company: "Palmetto Marketplace"):

- `.sample-banner`: `SAMPLE PROJECT — illustrative demo built to show methodology, not a real client engagement. Company, competitor names, and figures are fictionalized.`
- Eyebrow: `Portfolio · Payment Handling Fee Design`
- H1: `Where should a handling fee actually sit?`
- Lede: `A composite scenario based on a common pricing-design pattern: introducing a new handling fee risks losing customers if it's out of step with the market, but leaving it at zero means absorbing 100% of payment processing cost.`
- Meta-row: `Standard payment fee (simulated)` → `2.1%`, `COD fee (simulated)` → `3.4%`, `Method` → `Competitor benchmarking + margin sensitivity`, `Projected uplift (simulated)` → `~1.8% of GMV`
- Interactive panel, accent `--purple:#7A5FC7; --purple-bg:#F1EDFC` (reuse existing demos' base palette):
  - A static fictional benchmark table, 5 rows, columns `Platform`, `Standard payment fee`, `COD fee`:
    - Kestrel Market — 1.8% — 2.9%
    - Ombra — 2.4% — 3.6%
    - Ferro Retail — 1.6% — 3.1%
    - Lucent Goods — 2.7% — 3.8%
    - Palmetto (proposed) — 2.1% — 3.4% — this row visually highlighted (distinct background color)
  - Two sliders below the table: "Standard fee %" (range 0.0–4.0, step 0.1, default 2.1) and "COD fee %" (range 0.0–5.0, step 0.1, default 3.4).
  - As either slider moves, two numbers update live:
    - "Projected annual revenue uplift" computed as `uplift_pct = (standardFee * 0.6 + codFee * 0.4) * 0.42`, displayed as `uplift_pct.toFixed(1) + "% of GMV"`. (At the default 2.1 / 3.4, this evaluates to `(2.1*0.6 + 3.4*0.4)*0.42 = (1.26+1.36)*0.42 = 1.10 * ... ` — compute this precisely in the script and confirm it lands close to "~1.8%"; if the constant `0.42` doesn't produce a result near 1.8 at the defaults, adjust the constant so it does, and hardcode whichever constant achieves that. Show your arithmetic in a code comment in the script.)
    - "Estimated churn risk": `"Low"` when standard fee slider < 2.5, `"Moderate"` when 2.5–3.2 inclusive, `"Elevated"` when > 3.2 — computed directly from the standard-fee slider value only.
  - A "Reset to recommended" button that snaps both sliders back to 2.1 / 3.4.
- Closing explanatory section (~80-120 words): explain that the recommendation isn't the cheapest or the most aggressive fee — it's the one benchmarked against the market that recovers meaningful margin without moving the churn-risk band, and that COD is priced higher than standard because it carries genuinely higher processing/handling cost, not because it's an arbitrary upcharge.

- [ ] **Step 1: Write the file per the content spec above**, reusing the shared skeleton/CSS classes from `public/work/sample-project-2-handover-automation.html` as in Task 2. Implement the uplift/churn-risk formulas directly in an inline `<script>` — no external dependencies. Before finalizing, compute the uplift constant by hand (or with a quick `node -e` one-liner) so the default-slider output is close to "~1.8% of GMV" as stated in the meta-row.

- [ ] **Step 2: Open the file in a browser and manually verify:**
  - The benchmark table renders 5 rows with the "Palmetto (proposed)" row visually highlighted.
  - Moving the "Standard fee %" slider updates both the uplift number and the churn-risk label live.
  - At the default slider positions (2.1 / 3.4), the churn-risk label reads "Moderate" and the uplift number is close to "~1.8% of GMV".
  - "Reset to recommended" snaps both sliders back to 2.1 and 3.4.

- [ ] **Step 3: Validate the HTML is well-formed**

Run: `python3 -c "import html.parser; p = html.parser.HTMLParser(); p.feed(open('public/work/fee-tier-benchmarking-tool.html').read())"`
Expected: no exception raised.

- [ ] **Step 4: Commit**

```bash
git add public/work/fee-tier-benchmarking-tool.html
git commit -m "feat: add Fee-Tier Benchmarking Tool demo for Payment Handling Fee Design case study"
```

---

### Task 6: Create `pages/work.tsx`

**Files:**
- Create: `pages/work.tsx`
- Read (for copy source, do not modify): `constants.ts`, `components/SectionHeader.tsx`, `pages/case-studies.tsx` (for the existing `CaseCard`/`DetailItem` visual pattern — this file is deleted in Task 7, so copy its rendering approach, don't import from it), `pages/framework.tsx` (for the page-without-own-nav `<Head>` pattern)

**Interfaces:**
- Consumes: `CASE_STUDIES` from `../constants` (array of `{ id, title, stealthTitle, details, impact }`, per `types.ts`'s `CaseStudy` interface — no changes to that type).
- Produces: default-exported React component `Work`, rendered at route `/work` by Next.js file-based routing. No other file depends on named exports from this file.

**Card data mapping to hardcode inside `work.tsx`** (local `const`, not added to `constants.ts` or `types.ts`) — every one of the 6 `CASE_STUDIES` ids must appear as a key:

```ts
const DEMO_LINKS: Record<string, { href: string; label: string }> = {
  'revenue-preservation': { href: '/work/refund-vs-exchange-flow.html', label: 'See a sample build like this' },
  'network-reengineering': { href: '/work/margin-model.html', label: 'See a sample build like this' },
  'support-automation': { href: '/work/deflection-dashboard.html', label: 'See a sample build like this' },
  'handling-fee-design': { href: '/work/fee-tier-benchmarking-tool.html', label: 'See a sample build like this' },
  'logistics-optimization': { href: '/work/sample-project-5-routing-engine.html', label: 'See a sample build like this' },
  'pmo-standardization': { href: '/work/sample-project-2-handover-automation.html', label: 'See a sample build like this' },
};
```

- [ ] **Step 1: Define `DEMO_LINKS` exactly as above** in `pages/work.tsx`. All 6 keys must match `CASE_STUDIES` ids in `constants.ts` verbatim (`revenue-preservation`, `network-reengineering`, `support-automation`, `handling-fee-design`, `logistics-optimization`, `pmo-standardization`) — copy the ids directly from `constants.ts` rather than retyping them, to avoid typos.

- [ ] **Step 2: Define the 3 standalone demo/analysis cards as a local array:**

```ts
type StandaloneCard = {
  id: string;
  tag: 'Illustrative Demo' | 'Data Analysis';
  title: string;
  description: string;
  tags: string[];
  href: string;
};

const STANDALONE_CARDS: StandaloneCard[] = [
  {
    id: 'reporting-automation',
    tag: 'Illustrative Demo',
    title: 'Multi-Marketplace Reporting Automation',
    description: 'Turning a 3-hour weekly manual report — stitched together from three different marketplace exports — into a 90-second automated one.',
    tags: ['Data reconciliation', 'Reporting'],
    href: '/work/sample-project-1-reporting-automation.html',
  },
  {
    id: 'attribute-enrichment',
    tag: 'Illustrative Demo',
    title: 'Automated Product Attribute Enrichment',
    description: 'A governed AI-tagging system — controlled taxonomies, a five-step decision priority order, and "leave it blank" as a first-class outcome.',
    tags: ['Classification', 'Governed AI tagging'],
    href: '/work/sample-project-4-attribute-enrichment.html',
  },
  {
    id: 'expedia-analysis',
    tag: 'Data Analysis',
    title: 'Expedia Marketplace Analysis',
    description: 'A data-driven diagnosis of conversion levers across 100,000 hotel search sessions — funnel analysis, statistical findings, and an 8-week roadmap.',
    tags: ['Statistical analysis', 'Conversion diagnostics'],
    href: '/work/expedia-deck.html',
  },
];
```

(Copy for `reporting-automation` and `attribute-enrichment` is taken verbatim from the original `work.html` card copy, per the Global Constraints — do not reword it. Copy for `expedia-analysis` is new, since no prior card copy existed for it.)

- [ ] **Step 3: Write the page component.** Structure, in order:
  1. `<Head>` block: `<title>Work — Jason K Hanani</title>`, a meta description (`"Real operational results, illustrative sample builds, and data analysis — how I diagnose and fix operational problems."`), `og:title`, `og:description`, `og:url` = `https://jasonkhanani.com/work/`, `og:type` = `website`, canonical link to the same URL — follow the exact `<Head>` pattern in `pages/framework.tsx` lines 91-102.
  2. A hero `<header>` (reuse `SectionHeader` component or plain markup consistent with `framework.tsx`'s hero pattern): eyebrow `"Operations Diagnosis & AI-Assisted Automation"`, H1 `"Real results, and how they were actually built."`, lede paragraph (new copy, ~2-3 sentences) explaining the page shows real case-study outcomes each paired with an illustrative sample build showing the kind of system behind it, plus a couple of data-analysis and demo-only pieces.
  3. A "How I approach this work" panel — adapt the 4 bullets from the original `work.html` offer-panel verbatim (`Map the real process...`, `Recommend the right fix...`, `Build it directly...`, `Treat "leave it for a human"...`) into a styled Tailwind panel (`bg-white border-0.5 border-hankoRust/20 rounded-xl p-6 md:p-8`, per the `CaseCard` pattern in `case-studies.tsx`).
  4. A responsive grid (`grid grid-cols-1 md:grid-cols-2 gap-6`) rendering 9 cards total:
     - Map over `CASE_STUDIES` (6 cards): each renders `title`, `details` (parsed the same way as `case-studies.tsx`'s private `DetailItem` — write your own local component in `work.tsx` with the same `**Label:** text` bold-markdown-split logic, since importing from `case-studies.tsx` isn't possible after Task 7 deletes it), `impact`, and a tag badge reading `Real Result`. Every card also renders a secondary link/button below the card content using `DEMO_LINKS[study.id].href` and `.label` (all 6 have an entry per Step 1), opening in a new tab (`target="_blank" rel="noopener noreferrer"`).
     - Map over `STANDALONE_CARDS` (3 cards): each renders `title`, `description`, a tag badge showing its `tag` value, the `tags` array as small pill labels (e.g. `text-[11px] font-bold text-sumiInk/60 bg-ricePaper border border-0.5 border-hankoRust/10 rounded-full px-2 py-1`), and a single `"Open demo →"` link to `href` (`target="_blank" rel="noopener noreferrer"`).
  5. A CTA panel (adapt from `work.html`'s `.cta-panel`): dark background (`bg-sumiInk text-ricePaper`), heading `"Have a similar problem?"`, the lede paragraph copied verbatim from the original `work.html` cta-panel text ("If any of this sounds like your team's week..."), and a link styled as a button to `/contact` reading `"Get in touch"`.
  6. A closing disclaimer `<div>` (not a `<footer>` tag, to avoid a second footer landmark alongside the site's real `<Footer>`): the paragraph from `work.html`'s original `<footer>`, verbatim, describing that the sample builds are illustrative.

- [ ] **Step 4: Run the dev server and manually check `/work` in a browser:**

Run: `npm run dev` then visit `http://localhost:3000/work`
Expected: page renders with the real Header/Footer from `Layout`, 9 cards visible, no console errors. All 6 `CASE_STUDIES` cards show a "Real Result" badge and a secondary demo link; the 3 standalone cards show their respective tag and a single "Open demo →" link.

- [ ] **Step 5: Commit**

```bash
git add pages/work.tsx
git commit -m "feat: add consolidated /work page pairing case studies with demos"
```

---

### Task 7: Retire `/case-studies` in favor of `/work`

**Files:**
- Delete: `pages/case-studies.tsx`
- Modify: `components/Layout.tsx` (nav link array)
- Modify: `pages/index.tsx` (2 links)
- Modify: `pages/resume.tsx` (1 link)
- Modify: `public/_redirects`

**Interfaces:**
- Consumes: nothing new.
- Produces: no more references to `/case-studies` anywhere in the codebase except the redirect rule (verified in Task 8).

- [ ] **Step 1: Delete the old page**

```bash
git rm pages/case-studies.tsx
```

- [ ] **Step 2: Update the nav link in `components/Layout.tsx`**

Find the line:
```tsx
    { label: 'Case Studies', path: '/case-studies' },
```
Replace with:
```tsx
    { label: 'Work', path: '/work' },
```

- [ ] **Step 3: Update all `/case-studies` links in `pages/index.tsx`**

Search the file for `href="/case-studies"` (there are 2 occurrences) and change each to `href="/work"`.

- [ ] **Step 4: Update the `/case-studies` link in `pages/resume.tsx`**

Search the file for `href="/case-studies"` (1 occurrence) and change it to `href="/work"`.

- [ ] **Step 5: Add the redirect to `public/_redirects`**

Current content:
```
/admin/*  /admin/index.html  200
/*  /index.html  200
```

New content (the redirect line must come before the catch-all, since Netlify applies the first matching rule):
```
/admin/*  /admin/index.html  200
/case-studies  /work  301
/*  /index.html  200
```

- [ ] **Step 6: Verify no remaining references**

Run: `grep -rn "case-studies" --include="*.tsx" --include="*.ts" .`
Expected: no output (empty).

Run: `grep -n "case-studies" public/_redirects`
Expected: exactly one line, the redirect rule from Step 5.

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "refactor: retire /case-studies in favor of /work, with a 301 redirect"
```

---

### Task 8: Final verification

**Files:** none created; this task only verifies prior work.

- [ ] **Step 1: Run the production build**

Run: `npm run build`
Expected: build succeeds with no type errors or failed page generation for `/work`.

- [ ] **Step 2: Verify every demo/deck file referenced from `pages/work.tsx` exists on disk**

Run:
```bash
for f in refund-vs-exchange-flow.html margin-model.html deflection-dashboard.html fee-tier-benchmarking-tool.html sample-project-5-routing-engine.html sample-project-2-handover-automation.html sample-project-1-reporting-automation.html sample-project-4-attribute-enrichment.html expedia-deck.html; do
  test -f "public/work/$f" && echo "OK: $f" || echo "MISSING: $f"
done
```
Expected: all 9 lines print `OK:`.

- [ ] **Step 3: Verify all 6 `CASE_STUDIES` ids have a `DEMO_LINKS` entry**

Run:
```bash
grep -o "id: '[a-z-]*'" constants.ts | sed "s/id: '//;s/'//" | while read id; do grep -q "'$id':" pages/work.tsx && echo "OK: $id" || echo "MISSING MAPPING: $id"; done
```
Expected: 6 lines, all `OK:`.

- [ ] **Step 4: Confirm cleanup is complete**

Run:
```bash
test -e work-page-for-site.zip && echo STILL_EXISTS || echo GONE
test -d work-page-for-site && echo STILL_EXISTS || echo GONE
test -d public/portfolio-projects && echo STILL_EXISTS || echo GONE
test -f pages/case-studies.tsx && echo STILL_EXISTS || echo GONE
```
Expected: all four print `GONE`.

- [ ] **Step 5: Report final status to the user** — this task has no commit of its own (nothing new to add). If any check above fails, fix it in the relevant earlier task and re-run this task's checks before reporting done.

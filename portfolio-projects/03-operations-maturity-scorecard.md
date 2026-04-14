# 03. Operations Maturity Scorecard

> An interactive 20-question self-assessment that benchmarks marketplace operations maturity across 5 dimensions and outputs a radar chart with a prioritized improvement roadmap.

---

## Overview

| Field | Value |
|-------|-------|
| Status | Planned |
| Persona | Both — The Investigator (diagnostic) + The Architect (framework design) |
| Key Skills | Operations framework design, Six Sigma DMAIC, Next.js, data visualization, thought leadership |
| Stack | Next.js 14 (Pages Router), Recharts, Tailwind CSS — embedded in existing portfolio |
| Dataset | World Bank Logistics Performance Index (LPI) for benchmarking context; scorecard framework self-defined |
| Deployment | Netlify (existing portfolio pipeline) |
| Repo | jkhan31/jasonkhanani-website (new page: `/scorecard`) |

---

## The Case Study

### Company: Meridian Capital
*A Southeast Asian private equity firm with a portfolio of 7 marketplace and logistics businesses across Indonesia, Vietnam, Thailand, and the Philippines. Ticket size: Series B–D. Average hold period: 5 years.*

Meridian's operations value-creation team is responsible for improving portfolio company performance post-acquisition. When they take a board seat in a new company, they spend 6–8 weeks in an operational assessment: interviewing team leads, reviewing metrics, mapping workflows.

The problem is that every assessment ends up in a different PowerPoint. There's no consistent scoring rubric. When the investment committee asks "how does Company A compare to Company B on fulfillment maturity?", the team can't answer with a number — just anecdotes.

The ops director wants a **standardized diagnostic that any portfolio company can complete in 15 minutes**, producing a comparable, trackable score. Something that can be run at acquisition, at 12 months, and at exit — to show operational improvement as a value-creation story.

---

## Problem Statement

There is no industry-standard tool for assessing marketplace operations maturity that:
- Covers the 5 dimensions that actually drive unit economics (fulfillment, returns, seller support, pricing, onboarding)
- Is fast enough for ops managers to complete without analyst support
- Produces a visual output that non-technical stakeholders (board members, investors) can interpret immediately
- Is repeatable — same company, same benchmark, comparable score over time

The gap is a framework problem, not a data problem. The tool needs to operationalize tacit expertise into a structured scoring instrument.

---

## Solution

A single-page web app embedded in the portfolio at `/scorecard`. Users work through 20 questions across 5 operational dimensions. Each question is scored 1–5 (1 = ad hoc / no system, 5 = automated / optimized). On completion, a radar chart and a prioritized roadmap are generated instantly — no login, no email required.

### The 5 Dimensions

| Dimension | What It Measures | Questions |
|-----------|-----------------|-----------|
| **Fulfillment Operations** | Routing logic, carrier management, SLA tracking, exception handling | 4 |
| **Returns Management** | Return rate visibility, processing speed, exchange options, refund SLA | 4 |
| **Seller Support** | Ticket volume, resolution time, self-serve coverage, escalation paths | 4 |
| **Pricing & Fee Logic** | Cost-to-serve visibility, fee structure alignment, dynamic pricing capability | 4 |
| **Seller Onboarding** | Time-to-live, documentation clarity, activation rate, cross-market consistency | 4 |

### Sample Questions

*Fulfillment — Q1:* "How are carrier assignments determined for new orders?"
- 1 — Manual, case-by-case decision by ops staff
- 2 — Basic rules in a spreadsheet (weight/zone)
- 3 — Routing rules configured in the OMS/WMS
- 4 — Automated routing with fallback logic
- 5 — ML-assisted routing with real-time carrier performance weighting

*Returns — Q3:* "Do you offer exchange as an alternative to full returns?"
- 1 — No exchange option exists
- 2 — Exchange is possible but manual/offline
- 3 — Exchange feature exists in the platform
- 4 — Exchange is actively promoted at the return initiation point
- 5 — Exchange conversion is tracked and optimized by category

### Output: Radar Chart + Roadmap

After completing all 20 questions, the user sees:

1. **Radar chart** — pentagon with 5 axes (one per dimension), scored 1–5. Fills green for scores ≥ 4, yellow for 3–3.9, red for < 3.
2. **Maturity band** — overall classification: Reactive (avg < 2), Structured (2–3), Optimized (3–4), Systemic (4–5)
3. **Prioritized roadmap** — top 3 lowest-scoring dimensions with 2 concrete next steps each
4. **Benchmark context** — where this score sits relative to World Bank LPI regional data (SEA vs. global median)

### Optional: Email Results
A simple "Email me this report" field generates a formatted PDF summary (using browser print or a serverless function) and sends it. Acts as a lead capture for advisory/consulting inquiries.

---

## Technical Architecture

Embedded in the existing Next.js 14 portfolio as a new page at `pages/scorecard.tsx`.

```
pages/
└── scorecard.tsx          # Main scorecard page

components/
├── ScorecardQuestion.tsx  # Individual question with 5-option radio
├── ScorecardRadar.tsx     # Recharts RadarChart component
└── ScorecardRoadmap.tsx   # Prioritized recommendation list

constants/
└── scorecardData.ts       # All 20 questions, options, dimension mappings, roadmap copy
```

**State management:** React `useState` — no backend, no database. All scoring logic runs client-side.

**Chart library:** Recharts `RadarChart` — already available in the project ecosystem, consistent with portfolio design system.

**Design:** Uses existing portfolio tokens (`hankoRust`, `foxOrange`, `ricePaper`, `sumiInk`). 0.5px borders. Source Serif 4 for dimension labels, Inter for question text.

---

## Data

**World Bank Logistics Performance Index (LPI)** — publicly available at lpi.worldbank.org. Used for benchmark context text only (e.g., "SEA median LPI score: 3.1 — your fulfillment score of 2.4 is below regional median"). No API integration required — static reference values embedded in `scorecardData.ts`.

**Scorecard framework:** Self-defined, based on Six Sigma DMAIC methodology, ZALORA operational experience, and industry best practice. This is the intellectual property component — the questions and weighting reflect genuine domain expertise.

---

## Success Metrics

| Metric | Definition |
|--------|------------|
| Completion rate | % of users who answer all 20 questions |
| Time-to-complete | Target < 10 minutes |
| Radar chart renders correctly | No layout break on mobile or desktop |
| Roadmap relevance | Each dimension's low-score triggers the correct 2 recommendations |
| No backend dependency | App works fully offline (JS bundle only) |

---

## Mirrors Real Work

Directly applies the Six Sigma Green Belt + PMO standardization experience from ZALORA. The 5 dimensions map to the exact operational areas covered across the 6 case studies on the portfolio: fulfillment (routing automation), returns (exchange launch), seller support (AI automation), pricing (fee design, cost-to-serve), and onboarding (global standardization). This tool makes the framework behind those case studies explicit and interactive.

---

## Build Notes

**Implementation path:**
1. Create `constants/scorecardData.ts` — all questions, options (1–5), dimension keys, recommendation copy
2. Create `ScorecardQuestion` component — radio group with 5 options, progress indicator
3. Wire scoring state: accumulate dimension scores as user progresses
4. Build `ScorecardRadar` using Recharts `RadarChart` — reference Recharts docs for `PolarGrid`, `PolarAngleAxis`, `Radar` components
5. Build `ScorecardRoadmap` — filter bottom 2 dimensions, render 2 recommendations each
6. Add page to `pages/scorecard.tsx`, add nav link

**Claude Code usage:**
- Scaffold `scorecardData.ts` from a plain-English description of each question and its 5 options
- Generate Recharts radar chart from score state
- Write the roadmap recommendation logic (sort dimensions by score, slice bottom 2, map to copy)

**No new dependencies needed** — Recharts is already in the project.

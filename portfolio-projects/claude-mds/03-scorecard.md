# CLAUDE.md — Operations Maturity Scorecard

## What This Is
Interactive 20-question ops maturity assessment embedded in the jasonkhanani-website portfolio at `/scorecard`. No backend. Scores 5 dimensions 1–5, renders a Recharts radar chart + prioritized improvement roadmap.

## This file belongs in: jasonkhanani-website repo (not a separate repo)

## Stack
- Next.js 14, Pages Router — part of the main portfolio repo
- Recharts (RadarChart) — already installed
- Tailwind CSS with portfolio design tokens

## Commands (from portfolio root)
```bash
npm run dev    # localhost:3000 — page at /scorecard
npm run build
npm run lint
```

## Architecture
```
pages/
└── scorecard.tsx

components/
├── ScorecardQuestion.tsx   # radio group, 5 options, progress indicator
├── ScorecardRadar.tsx      # Recharts RadarChart, 5 axes
└── ScorecardRoadmap.tsx    # filter bottom-2 dimensions, show 2 recs each

constants/
└── scorecardData.ts        # all 20 questions, options, dimension keys, roadmap copy
```

## Scoring Logic
- 5 dimensions × 4 questions = 20 total
- Dimension score = avg of its 4 answers (1–5)
- Maturity band: Reactive (<2), Structured (2–3), Optimized (3–4), Systemic (≥4)
- Roadmap: sort dimensions ascending by score → surface bottom 2 → 2 recs each

## Design Rules (mandatory)
- Colors: `hankoRust`, `foxOrange`, `ricePaper`, `sumiInk`, `sage` — no raw hex
- Borders: `border-0.5` only — never `border`
- Fonts: `font-serif` for dimension labels, `font-sans` for question text
- Pages Router only — no `'use client'`, no `app/` dir, no Server Components

## Constraints
- No new npm dependencies — Recharts already in project
- No backend, no API, no database — fully client-side
- `scorecardData.ts` is single source of truth for all copy

## No API Connections Required

## Useful Claude Skills
- `/design-review` — after building the radar chart + question flow
- `/simplify` — after completing all components
- `/new-article` — to write a blog post about the framework when copy is ready

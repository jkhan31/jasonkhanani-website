# CLAUDE.md — Fashion Intelligence Tagger

## What This Is
React web app: input fashion product names → n8n webhook → LLM assigns category + attributes → scored against H&M ground truth (105K articles). V1 is live with food data. V2 upgrades to fashion taxonomy.

## Stack
- Frontend: React 18 + Vite + Tailwind CSS → Netlify
- Backend: n8n (self-hosted VPS) webhook at `VITE_API_URL`
- LLM: Claude Code on VPS via n8n SSH Execute node (Claude Pro subscription — no API cost)
- Ground truth: H&M Personalization Dataset (`articles.csv`, Kaggle 2022)

## Commands
```bash
npm run dev      # localhost:5173
npm run build    # production bundle
npm run preview  # preview build locally
```

## Architecture
```
src/
├── components/
│   ├── InputForm.jsx     # textarea + CSV upload, calls useAPI
│   ├── ResultsTable.jsx  # per-row results with score color coding
│   └── SummaryPanel.jsx  # aggregate: avg score, green/yellow/red counts
├── hooks/
│   └── useAPI.js         # POST to VITE_API_URL, calculates match_score
└── App.jsx
data/
└── hm_articles_sample.json  # 1000-item H&M ground truth (sampled, balanced by category)
```

## Scoring (client-side in useAPI.js)
- Category match: 1 if exact, 0 if mismatch
- Attribute overlap: intersection(ai, truth) / len(truth)
- Final score: (categoryMatch + attributeOverlap) / 2

## n8n Payload Contract
- POST: `{ products: [{ name, brand }] }`
- Response: `[{ name, ai_output: { category, attributes, confidence }, ground_truth: { category, attributes } }]`

## V2 Todo
- [ ] Replace food JSON with H&M articles sample (product_type_name, colour_group_name, product_group_name)
- [ ] Update n8n system prompt to H&M fashion taxonomy
- [ ] Add chain-of-thought instruction to prompt
- [ ] Build SummaryPanel component
- [ ] Add CSV upload to InputForm
- [ ] Delete bash.exe.stackdump from repo

## Constraints
- Match scoring runs client-side — do not move to n8n
- Categories must match H&M `product_type_name` values exactly (case-sensitive)
- No auth, no saved state — stateless demo
- Tailwind only — no inline styles

## Useful Claude Skills
- `/design-review` — after building SummaryPanel
- `/simplify` — after completing V2 migration
- `/deploy-check` — before pushing to Netlify

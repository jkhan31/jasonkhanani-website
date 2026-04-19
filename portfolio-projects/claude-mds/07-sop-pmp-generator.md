# CLAUDE.md — OpsDoc Generator

## What This Is
Web tool that converts messy notes, bullet points, or process descriptions into clean structured documents via LLM. Two document families: SOPs and PMP artifacts. One input area, one LLM call, multiple output templates selected by the user.

## Stack
- Frontend: React 18 + Vite + Tailwind CSS → Netlify
- Backend: n8n (self-hosted VPS) webhook
- LLM: Claude Code on VPS via n8n SSH Execute node (Claude Pro subscription — no API cost)
- Output: Markdown rendered in UI + copy to clipboard + download as .md
- Key env var: `VITE_N8N_URL`

## Commands
```bash
npm run dev      # localhost:5173
npm run build
```

## Architecture
```
src/
├── components/
│   ├── InputArea.jsx         # textarea for messy notes
│   ├── DocTypeSelector.jsx   # pill buttons: SOP | Charter | Risk Register | RACI | Comm Plan
│   ├── OutputPreview.jsx     # rendered markdown (react-markdown)
│   └── ExportBar.jsx         # copy to clipboard, download .md
├── hooks/
│   └── useDocGen.js          # POST { input, doc_type } to VITE_N8N_URL, loading/error state
└── App.jsx
```

## n8n Workflow
```
POST body: { input: string, doc_type: string }
→ Switch node routes by doc_type
→ Each branch: build prompt → n8n SSH Execute → claude -p "{prompt}" on VPS
→ Return { output: string, doc_type: string }
```

## Document Output Templates

| doc_type | Sections |
|----------|---------|
| `sop` | Purpose · Scope · Responsibilities · Procedure (numbered steps) · Related Docs · Version History |
| `charter` | Project Overview · Objectives · Scope · Stakeholders · Milestones · Budget · Assumptions · Risks |
| `risk_register` | Risk ID · Description · Category · Likelihood · Impact · Score · Mitigation · Owner · Status |
| `raci` | Deliverables × Stakeholders matrix (R/A/C/I per cell) |
| `comm_plan` | Audience · Key Message · Channel · Frequency · Owner · Notes |

## Constraints
- Output always rendered as Markdown using react-markdown — no raw HTML
- All prompt templates live in n8n workflow, not frontend
- One LLM call per generation — no multi-step chain needed
- No auth, no saved history — stateless demo
- Tailwind only — no inline styles

## API Connections
- **Claude Code (SSH)** — one SSH call per document generation, via n8n SSH Execute node; uses Claude Pro subscription (no billing)

## Useful Claude Skills
- `/design-review` — after building DocTypeSelector + OutputPreview
- `/simplify` — after completing all components
- `/deploy-check` — before pushing to Netlify
- `/claude-api` — if switching from OpenRouter to Anthropic SDK for better structured output

# CLAUDE.md — AI Operations Assistant

## What This Is
Seller support chatbot. React chat UI → n8n webhook → LLM intent classification → structured response or escalation. Logs deflection metrics to Google Sheets. 5-turn session window, 7 intent types.

## Stack
- Frontend: React 18 + Vite + Tailwind CSS → Netlify
- Backend: n8n (self-hosted VPS) — 2 LLM calls per turn
- LLM: Claude Code on VPS via n8n SSH Execute node (Claude Pro subscription — no API cost)
- Metrics: Google Sheets via n8n Google Sheets node
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
│   ├── ChatWindow.jsx      # message history, intent badge per message, escalation notice
│   ├── MessageInput.jsx    # input field + send, disabled while loading
│   └── MetricsBadge.jsx    # live session deflection rate
├── hooks/
│   └── useChat.js          # session state (5-turn window), POST to VITE_N8N_URL
└── App.jsx
```

## n8n Workflow (2 SSH calls per turn)
```
Step 1 — Intent classification
  n8n SSH Execute → claude -p "Classify intent: {message}" → return { intent, confidence }
  Intents: shipping | payment | return | listing | account | dispute | unknown

Step 2 — Route by intent
  confidence ≥ 0.7 + deflectable intent → fill response template → return { message, deflected: true }
  confidence < 0.7 OR non-deflectable → n8n SSH Execute → claude -p "Summarise for escalation: {context}" → return { message, deflected: false, summary }

Step 3 — Log to Google Sheet
  session_id, intent, deflected (bool), latency_ms, timestamp
```
Note: combining intent + response into a single SSH call reduces latency — worth testing.

## Deflectable Intents
shipping, payment, return, listing → deflect if confidence ≥ 0.7
account, dispute, unknown → always escalate

## Response Templates
Stored as n8n expression variables — not in frontend code. One template per deflectable intent.

## Constraints
- 5-turn session window — clear history after 5 exchanges
- Intent badge always visible per message (transparency)
- No auth — demo mode with synthetic Foundry policy data
- All prompt templates in n8n, not frontend

## API Connections
- **Claude Code (SSH)** — called from n8n SSH Execute node; uses Claude Pro subscription (no billing)
- **Google Sheets API** — write-only, via n8n node (requires Google OAuth in n8n credentials)

## Useful Claude Skills
- `/design-review` — after building ChatWindow + intent badge UI
- `/simplify` — after completing n8n workflow logic
- `/deploy-check` — before pushing to Netlify

# CLAUDE.md — AI Operations Assistant

## What This Is
Seller support chatbot. React chat UI → n8n webhook → LLM intent classification → structured response or escalation. Logs deflection metrics to Google Sheets. 5-turn session window, 7 intent types.

## Stack
- Frontend: React 18 + Vite + Tailwind CSS → Netlify
- Backend: n8n (self-hosted VPS) — 2 LLM calls per turn
- LLM: OpenRouter API (intent classification + response generation)
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

## n8n Workflow (2 calls per turn)
```
Step 1 — Intent classification
  POST to OpenRouter → return { intent, confidence }
  Intents: shipping | payment | return | listing | account | dispute | unknown

Step 2 — Route by intent
  confidence ≥ 0.7 + deflectable intent → fill response template → return { message, deflected: true }
  confidence < 0.7 OR non-deflectable → generate escalation summary → return { message, deflected: false, summary }

Step 3 — Log to Google Sheet
  session_id, intent, deflected (bool), latency_ms, timestamp
```

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
- **OpenRouter API** — 2 calls per user turn (intent + response)
- **Google Sheets API** — write-only, via n8n node (requires Google OAuth in n8n credentials)
- Gemini Flash (Google AI Studio free tier) usable as OpenRouter alternative for intent classification

## Useful Claude Skills
- `/design-review` — after building ChatWindow + intent badge UI
- `/simplify` — after completing n8n workflow logic
- `/deploy-check` — before pushing to Netlify
- `/claude-api` — if switching from OpenRouter to Anthropic SDK directly

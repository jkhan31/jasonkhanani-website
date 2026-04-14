# 05. AI Operations Assistant

> A seller-facing support chatbot that routes operational queries to structured resolution paths — demonstrating how AI can deflect repetitive support tickets while maintaining quality and escalating edge cases.

---

## Overview

| Field | Value |
|-------|-------|
| Status | Planned |
| Persona | The Architect |
| Key Skills | LLM prompt engineering, intent classification, conversation design, n8n workflow architecture, support system design |
| Stack | n8n (self-hosted), OpenRouter API, React + Tailwind frontend, Netlify |
| Dataset | Customer Support on Twitter — Kaggle (3M+ real support conversations from e-commerce brands) |
| Deployment | Netlify (frontend) + n8n VPS (backend) |
| Repo | Planned |

---

## The Case Study

### Company: Foundry Marketplace
*A B2B marketplace connecting 4,000+ African SME sellers with wholesale buyers across the MENA region. Foundry operates in 6 countries: Nigeria, Kenya, Egypt, Morocco, UAE, and Saudi Arabia. Founded in 2021, they have 12 full-time staff, including 3 seller success agents.*

Foundry's seller success team handles everything: shipping queries, payment settlement questions, return disputes, account access issues, listing guidelines. There is no self-serve help center — every question goes to the same shared inbox.

The numbers:
- **Daily ticket volume:** ~85 queries
- **3 agents covering 6 time zones** (shifts overlap only 4 hours/day)
- **Average first response time:** 18 hours
- **SLA target:** 4 hours
- **SLA breach rate:** 67%

The breakdown of ticket types (from a 30-day audit):
- Shipping status / ETA queries: 31%
- Payment settlement timelines: 24%
- Return/dispute initiation: 19%
- Listing & onboarding questions: 15%
- Other / complex: 11%

That means **89% of tickets are answerable with structured, policy-based responses.** The 3 agents are spending most of their day answering the same 8 questions.

---

## Problem Statement

Foundry's support operation is structurally broken — not because the agents are slow, but because there is no automation layer between incoming queries and human response. Every question, regardless of complexity, requires a human to read it, classify it, look up the answer, and type a response.

**The question is not whether AI can help — it's which 89% of tickets can be fully deflected, how to structure the AI's response for each intent, and how to route the remaining 11% to a human with full context.**

---

## Solution

An AI-powered seller support assistant built on n8n + OpenRouter. Sellers interact via a simple chat UI. Queries are classified by intent, routed to a structured response template, and returned instantly. Edge cases escalate to a human queue with the full conversation summary pre-filled.

### Intent Taxonomy (based on Twitter dataset + Foundry use case)

| Intent | Deflectable? | Response Type |
|--------|-------------|---------------|
| Shipping status | Yes (with order ID) | Dynamic lookup → templated response |
| Payment settlement | Yes | Policy-based response (settlement schedule) |
| Return initiation | Yes | Step-by-step process response |
| Listing question | Yes | FAQ retrieval |
| Account access | Partial | Password reset flow or escalate |
| Dispute / complaint | No | Escalate with summary |
| Other / unknown | No | Escalate with summary |

### Core Features

| Feature | Description |
|---------|-------------|
| Intent classifier | LLM classifies incoming message into one of 7 intents before routing |
| Structured response templates | Each deflectable intent has a parameterized response template (e.g., "Your payment for order {order_id} is scheduled for settlement on {date}. Here's what to expect...") |
| Confidence threshold | If intent classification confidence < 0.7, escalate instead of respond |
| Context summary | When escalating, LLM generates a 2-sentence summary of the conversation for the human agent |
| Deflection tracker | n8n logs each conversation: intent, deflected (Y/N), resolution time → displayed in a simple metrics dashboard |
| Multi-turn support | Maintains conversation context across 5 turns before session resets |

### How It Works

```
Seller types message → React chat UI
        ↓
POST to n8n webhook (conversation history + new message)
        ↓
n8n Step 1: Intent classification
  → LLM prompt: "Classify this message into one of 7 intents. Return JSON: {intent, confidence}"
        ↓
n8n Step 2: Route by intent
  → If deflectable + confidence ≥ 0.7: generate structured response
  → If not deflectable or low confidence: generate escalation summary
        ↓
n8n Step 3: Response generation
  → Deflect: fill response template with available context
  → Escalate: generate summary + tag for human queue
        ↓
Response back to chat UI
n8n logs intent + outcome + latency
```

---

## Technical Architecture

**Frontend:** React + Tailwind chat interface. Minimal — input field, message history, intent badge (shows what intent was classified for transparency), escalation notice.

**Backend:** n8n workflow (self-hosted VPS).
- Webhook node: receives POST with `{messages: [...], session_id}`
- HTTP Request node: calls OpenRouter API for intent classification + response generation
- Switch node: routes by intent
- Response templates: stored as n8n expression variables or a small JSON config file
- Logging: n8n writes to a Google Sheet (via n8n Google Sheets node) for metrics tracking

**LLM:** OpenRouter API. Two calls per turn:
1. Intent classification (small/fast model — e.g., `mistral-7b-instruct`)
2. Response generation (slightly larger model for quality — e.g., `google/gemma-2-9b-it`)

**Metrics dashboard:** Simple HTML page reading from the Google Sheet via Sheets API — shows daily deflection rate, top intents, avg response time. No separate backend needed.

---

## Data

**Customer Support on Twitter — Kaggle**
- 3M+ real customer support tweets from major brands including Amazon, Apple, Uber, Airbnb, and others
- Columns: `tweet_id`, `author_id`, `inbound` (bool), `created_at`, `text`, `response_tweet_id`, `in_response_to_tweet_id`
- **Usage in this project:** Used to extract real examples of shipping, payment, and return queries for prompt engineering and intent taxonomy validation. Specifically: filter for Amazon and Airbnb inbound tweets to extract realistic seller/buyer support language patterns.
- Not used as a live data source — used offline to inform prompt design.

**Synthetic policy data:** Foundry's shipping schedules, payment settlement timelines, and return policies are synthetic (written for the demo). This is noted transparently in the UI.

---

## Success Metrics

| Metric | Target |
|--------|--------|
| Deflection rate (demo) | ≥ 75% of test queries fully resolved without escalation |
| Intent classification accuracy | ≥ 85% on a 50-query test set |
| Response latency | < 4 seconds (intent + response generation) |
| Escalation quality | Escalation summaries rated "useful" in manual review |
| Metrics dashboard | Deflection rate visible, updates per session |

---

## Mirrors Real Work

At ZALORA Group, designed and rolled out a regional AI chatbot pilot for seller support that achieved 68% ticket deflection and expanded to 24/7 self-service coverage without additional headcount. This project makes the same architecture visible — intent taxonomy, routing logic, escalation design — built on public tooling (n8n + OpenRouter) that anyone can inspect. The design choices (confidence threshold, context summary for escalations, structured templates over free-form responses) reflect real lessons from the ZALORA deployment.

---

## Build Notes

**n8n workflow structure:**
1. Webhook node (POST trigger)
2. Function node: parse conversation history, extract latest message
3. HTTP Request node: intent classification call to OpenRouter
4. Function node: parse intent + confidence from JSON response
5. Switch node: branch by intent (7 branches)
6. HTTP Request node (per branch): response generation call
7. Function node: format response for frontend
8. Respond to Webhook node: return `{message, intent, deflected, session_id}`
9. Google Sheets node: log conversation metadata

**Prompt engineering notes:**
- Intent classification prompt must enforce JSON output format: `{"intent": "...", "confidence": 0.0–1.0}`
- Use few-shot examples (3–5 per intent) derived from Twitter dataset to improve classification accuracy
- Response generation prompts should include the full conversation history (up to 5 turns) for context

**Claude Code usage:**
- Scaffold the React chat UI component with message history, intent badge, and escalation notice
- Write the n8n workflow JSON export (can be imported directly into self-hosted n8n)
- Generate the 7 response template strings from a plain-English description of each intent's resolution path
- Build the Google Sheets logging integration

**Gemini API alternative:** Gemini Flash (via Google AI Studio free tier) can replace OpenRouter for the intent classification step — higher free tier limits, useful for demos.

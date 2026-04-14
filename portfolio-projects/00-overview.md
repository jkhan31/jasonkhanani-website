# Portfolio Projects — Jason Kester Hanani

A collection of public-facing projects that demonstrate the analytical and systems-design skills applied in professional work across e-commerce and logistics operations. Each project uses publicly available data and tooling so the methodology is fully transparent and reproducible.

---

## Projects at a Glance

| # | Project | Status | Persona | Key Skill Demonstrated | Stack | Dataset |
|---|---------|--------|---------|----------------------|-------|---------|
| 01 | [Fashion Intelligence Tagger](#01-fashion-intelligence-tagger) | V1 Live · V2 Planned | The Architect | LLM prompt engineering, eval metrics | React, n8n, OpenRouter | H&M (Kaggle 2022, 105K articles) |
| 02 | [Unit Economics Analyzer](#02-unit-economics-analyzer) | Planned | The Investigator | Unit economics, margin diagnostics | Python, Pandas, Plotly, Streamlit | Olist Brazilian E-Commerce (Kaggle, 100K orders) |
| 03 | [Operations Maturity Scorecard](#03-operations-maturity-scorecard) | Planned | Both | Framework design, Six Sigma, interactive viz | Next.js, Recharts (in portfolio) | World Bank LPI (reference only) |
| 04 | [Multi-Warehouse Allocation Model](#04-multi-warehouse-allocation-model) | Planned | The Architect | Inventory optimization, linear programming | Python, PuLP, Plotly, Streamlit | M5/Walmart (Kaggle) + USAID data.gov |
| 05 | [AI Operations Assistant](#05-ai-operations-assistant) | Planned | The Architect | Conversation design, intent routing, n8n | React, n8n, OpenRouter/Gemini | Customer Support Twitter (Kaggle) |
| 06 | [Second Brain OS](#06-second-brain-os) | Planned | The Architect | Knowledge architecture, personal automation | Obsidian, n8n, Gemini, GitHub | Personal vault (no public data) |

---

## Toolchain

All projects use zero or minimal-additional-cost tools:

| Tool | Use |
|------|-----|
| **Claude Code** | Primary builder — scaffolding, pipelines, components |
| **n8n** (self-hosted VPS) | Backend workflows, webhooks, LLM orchestration |
| **OpenRouter API** | LLM calls (pay per use, low cost) |
| **Gemini API** (Google AI Studio free tier) | Alternative LLM — generous free limits |
| **Google Workspace** | Sheets (metrics logging), Forms, Docs |
| **Netlify** | Frontend deployment (free tier) |
| **GitHub** | Repo hosting, vault sync (free) |
| **Streamlit Community Cloud** | Python app deployment (free tier) |

---

## 01. Fashion Intelligence Tagger

**Fictional case:** Vela Marketplace (SEA fashion, ~2,000 new SKUs/week) needs to automate product category and attribute tagging to eliminate a 2–3 day listing delay and fix taxonomy inconsistency across 5 markets.

**What it does:** Takes a product name (and optional brand), sends it to an LLM via n8n webhook, returns predicted category + attributes, and scores the prediction against a 105K-article H&M ground truth dataset.

**V1** (live): food data, n8n + OpenRouter, React/Vite. Repo: [github.com/jkhan31/ai-tagging-tool](https://github.com/jkhan31/ai-tagging-tool)
**V2** (planned): H&M fashion dataset, chain-of-thought prompting, bulk CSV upload, aggregate eval panel.

**Mirrors:** Current ZALORA role — AI logic prototyping that reduced manual SKU categorization cycles by 50%+.

→ [Full PRD](./01-ai-tagging-tool.md)

---

## 02. Unit Economics Analyzer

**Fictional case:** Kova Commerce (Brazilian e-commerce) suspects shipping subsidies are eroding margin but can't identify which category + corridor combinations are underwater without a 3-week spreadsheet exercise.

**What it does:** Streamlit app that loads the Olist dataset (100K real orders), runs a DMAIC-style margin diagnostic, and outputs: cost-per-order heatmap by category, margin waterfall, corridor analysis, and a fee redesign simulator with scenario sliders.

**Mirrors:** ZALORA Cost-to-Serve Optimization (€520K annual savings) and Payment Handling Fee Design (€200K projected uplift).

→ [Full PRD](./02-unit-economics-analyzer.md)

---

## 03. Operations Maturity Scorecard

**Fictional case:** Meridian Capital (SEA PE firm, 7 portfolio companies) needs a repeatable 15-minute diagnostic to benchmark operational maturity across companies — replacing ad hoc PowerPoint assessments.

**What it does:** Interactive 20-question assessment across 5 dimensions (Fulfillment, Returns, Seller Support, Pricing & Fees, Onboarding). Scores 1–5 per dimension, outputs a radar chart, overall maturity band, prioritized improvement roadmap, and optional World Bank LPI benchmark context.

**Built into the existing portfolio** as a new page at `/scorecard`. No additional deployment needed.

**Mirrors:** PMO Standardization, Six Sigma Green Belt framework design, and the analytical structure behind all 6 case studies.

→ [Full PRD](./03-operations-maturity-scorecard.md)

---

## 04. Multi-Warehouse Allocation Model

**Fictional case:** Nexara Fulfillment (Indian 3PL, 4 warehouses) loses BRL 45/order on split shipments caused by reactive stock allocation that doesn't account for demand variance or corridor cost differentials.

**What it does:** Python/Streamlit tool with 3 modules: demand forecasting (from M5 Walmart data), corridor cost modeling (from USAID shipment data), and a linear programming optimizer (PuLP) that outputs a reallocation plan minimizing total cost while hitting service level targets.

**Mirrors:** Current ZALORA Multi-Warehouse project (€300K projected uplift) — cross-border inventory logic and route eligibility frameworks.

→ [Full PRD](./04-multi-warehouse-allocation.md)

---

## 05. AI Operations Assistant

**Fictional case:** Foundry Marketplace (B2B Africa/MENA, 3 agents covering 6 time zones) has an 18-hour average first response time against a 4-hour SLA target. 89% of tickets are answerable with structured, policy-based responses.

**What it does:** n8n-powered seller support chatbot. Classifies incoming queries into 7 intents, routes deflectable ones to structured response templates, escalates edge cases with a pre-written context summary for the human agent. Logs deflection rate and intent breakdown to a Google Sheet dashboard.

**Mirrors:** ZALORA AI Support Automation (68% ticket deflection, 24/7 self-service without additional headcount).

→ [Full PRD](./05-ai-operations-assistant.md)

---

## 06. Second Brain OS

**Use case:** Personal knowledge infrastructure. Notes, frameworks, meeting outputs, and research scattered across apps with no synthesis layer and unreliable cross-device access.

**What it does:** Obsidian vault synced across all devices via Git (GitHub private repo + Obsidian Git plugin). n8n workflows handle: weekly digest synthesis (Gemini API), web clipper to vault, "ask my notes" query endpoint, and meeting note formatter. Zero additional cost using existing VPS, GitHub free tier, and Gemini free tier.

**Cross-device sync:** Mac/Windows via Obsidian Git plugin; iPhone/iPad via Working Copy + Obsidian mobile; Android via GitJournal.

**Mirrors:** "Logic Architect" operating model — design the system, automate the repetitive, use AI for synthesis.

→ [Full PRD](./06-second-brain-os.md)

---

## Build Priority

| Priority | Project | Rationale |
|----------|---------|-----------|
| 1 | **Fashion Intelligence Tagger (V2)** | Already have V1 live — upgrade is incremental, highest authenticity |
| 2 | **Operations Maturity Scorecard** | Lowest effort, highest visibility — lives on existing portfolio, no new deployment |
| 3 | **Unit Economics Analyzer** | Strongest data skills anchor — mirrors two major case studies |
| 4 | **Second Brain OS** | Personal infrastructure first — enables better work on everything else |
| 5 | **AI Operations Assistant** | Strongest long-term differentiator — most complex to build |
| 6 | **Multi-Warehouse Allocation Model** | Most technically impressive — build after the others to avoid scope creep |

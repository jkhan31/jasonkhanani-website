# Portfolio Projects — Jason Kester Hanani

A collection of public-facing projects that demonstrate the analytical and systems-design skills applied in professional work across e-commerce and logistics operations. Each project uses publicly available data and tooling so the methodology is fully transparent and reproducible.

---

## Projects at a Glance

| # | Project | Status | Persona | Key Skill Demonstrated | Stack | Dataset |
|---|---------|--------|---------|----------------------|-------|---------|
| 01 | [Fashion Intelligence Tagger](#01-fashion-intelligence-tagger) | V1 Live · V2 Planned | The Architect | LLM prompt engineering, eval metrics | React, n8n, Claude Code SSH | [H&M Personalization Dataset — Kaggle 2022](https://www.kaggle.com/competitions/h-and-m-personalized-fashion-recommendations) |
| 02 | [Unit Economics Analyzer](#02-unit-economics-analyzer) | Planned | The Investigator | Unit economics, margin diagnostics | Python, Pandas, Plotly, Streamlit | [Olist Brazilian E-Commerce — Kaggle](https://www.kaggle.com/datasets/olistbr/brazilian-ecommerce) |
| 03 | [Operations Maturity Scorecard](#03-operations-maturity-scorecard) | Planned | Both | Framework design, Six Sigma, interactive viz | Next.js, Recharts (in portfolio) | [World Bank LPI](https://lpi.worldbank.org/) (reference only) |
| 04 | [Multi-Warehouse Allocation Model](#04-multi-warehouse-allocation-model) | Planned | The Architect | Inventory optimization, linear programming | Python, PuLP, Plotly, Streamlit | [M5 Forecasting — Kaggle](https://www.kaggle.com/competitions/m5-forecasting-accuracy) + [USAID Shipment Pricing — data.gov](https://catalog.data.gov/dataset/supply-chain-shipment-pricing-data) |
| 05 | [AI Operations Assistant](#05-ai-operations-assistant) | Planned | The Architect | Conversation design, intent routing, n8n | React, n8n, Claude Code SSH | [Customer Support on Twitter — Kaggle](https://www.kaggle.com/datasets/thoughtvector/customer-support-on-twitter) |
| 06 | [Second Brain OS](#06-second-brain-os) | ✅ Done | The Architect | Knowledge architecture, Obsidian + Claude Code | Obsidian, GitHub, Claude Code | Personal vault (no public data) |
| 07 | [OpsDoc Generator](#07-opsdoc-generator) | Planned | The Architect | Prompt templates, document generation, n8n | React, n8n, Claude Code SSH | None |
| 08 | [Content Repurposing Engine](#08-content-repurposing-engine) | Planned | The Architect | Claude Code skills, workflow automation | Claude Code skill, n8n SSH | None |
| 09 | [Generalized Second Brain](#09-generalized-second-brain) | Planned | The Architect | Knowledge system design, Claude Code skills | Obsidian, GitHub, Claude Code | Synthetic (generated) |
| 10 | [Mental Check-in Workflow](#10-mental-check-in-workflow) | Planned | The Architect | Telegram bot, n8n, SSH orchestration | Telegram, n8n, Claude Code SSH | Personal vault |

---

## Toolchain

All projects use zero or minimal-additional-cost tools:

| Tool | Use |
|------|-----|
| **Claude Code** | Primary builder — scaffolding, pipelines, components, AI interaction |
| **Claude Code (SSH via n8n VPS)** | AI execution for all LLM tasks — uses Claude Pro subscription, zero API cost |
| **n8n** (self-hosted VPS) | Backend workflows, webhooks, SSH orchestration |
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

**What it does:** Obsidian vault synced across all devices via Git (GitHub private repo + Obsidian Git plugin). Claude Code is the AI interaction layer — open in the vault directory and query notes directly. Zero additional cost.

**Cross-device sync:** Mac/Windows via Obsidian Git plugin; iPhone/iPad via Working Copy + Obsidian mobile.

**Status: ✅ Done — actively used.**

**Mirrors:** "Logic Architect" operating model — design the system, automate the repetitive, use AI for synthesis.

→ [Full PRD](./06-second-brain-os.md)

---

## 07. OpsDoc Generator

**Fictional case:** Ops teams waste hours formatting messy notes into structured SOPs, project charters, and RACI matrices. A single input → clean document in the right template saves 2+ hours per doc.

**What it does:** React web app with n8n backend. User pastes messy notes and selects a document type (SOP / Charter / Risk Register / RACI / Comm Plan). n8n SSHes to VPS and runs Claude Code to generate the structured document. Output rendered as Markdown.

**Mirrors:** PMO standardization work — the same logic behind turning messy process notes into repeatable frameworks.

→ [Full PRD](./claude-mds/07-sop-pmp-generator.md)

---

## 08. Content Repurposing Engine

**Use case:** After publishing a case study or analysis, manually repurposing it for LinkedIn, Twitter, and email is a 1–2 hour task. A Claude Code skill reduces it to under 5 minutes.

**What it does:** Claude Code skill (`/repurpose`) that reads any article markdown file and outputs three formats: a LinkedIn post (hook + insights + CTA), a Twitter/X thread (5–8 tweets), and a TL;DR (3 bullets). Optionally triggered automatically post-publish via n8n SSH.

**No web UI — Claude Code native.**

→ [CLAUDE.md](./claude-mds/08-content-repurposing.md)

---

## 09. Generalized Second Brain

**Use case:** Public forkable version of the personal Second Brain setup — so others can replicate the same Obsidian + Claude Code workflow with a pre-populated dummy vault.

**What it does:** GitHub template repo with: PARA vault structure, synthetic ops professional notes (generated by a Claude Code script), and Claude Code skill files for common vault queries (`/week-summary`, `/open-actions`, `/project-brief`, `/meeting-format`).

**Mirrors:** The personal Second Brain OS — made shareable and reproducible.

→ [CLAUDE.md](./claude-mds/09-generalized-second-brain.md)

---

## 10. Mental Check-in Workflow

**Use case:** Daily or weekly reflections sent via Telegram → automatically structured into a Second Brain note with mood, themes, open questions, and action items extracted by Claude Code.

**What it does:** Telegram bot → n8n workflow → SSH to VPS → Claude Code processes the message → structured markdown note committed to Obsidian vault. n8n replies to Telegram with the extracted summary.

**Mirrors:** Personal operating system — capturing reflection state and converting it to structured knowledge.

→ [CLAUDE.md](./claude-mds/10-mental-checkin.md)

---

## Build Priority

| Priority | Project | Status | Rationale |
|----------|---------|--------|-----------|
| ✅ | **Second Brain OS** | Done | Personal infrastructure — active daily use |
| ✅ | **Expedia Case Study** | Done (publish pending) | Re-enable Writing section to publish |
| 1 | **Fashion Intelligence Tagger (V2)** | V1 Live | V1 exists — upgrade to fashion data is incremental, highest authenticity |
| 2 | **Content Repurposing Engine** | Planned | Claude Code skill — fastest to build, immediate utility for publishing workflow |
| 3 | **Mental Check-in Workflow** | Planned | Telegram + n8n + SSH — extends Second Brain with daily capture |
| 4 | **Unit Economics Analyzer** | Planned | Strongest data skills anchor — mirrors two major case studies |
| 5 | **Generalized Second Brain** | Planned | Public template version of personal system — shareable portfolio artifact |
| 6 | **AI Operations Assistant** | Planned | Strongest long-term differentiator — most complex to build |
| 7 | **OpsDoc Generator** | Planned | Useful demo but lower differentiation |
| 8 | **Multi-Warehouse Allocation Model** | Planned | Most technically impressive — build last to avoid scope creep |
| — | **Operations Maturity Scorecard** | On hold | Needs copy/content before building |

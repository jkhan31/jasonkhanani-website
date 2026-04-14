# 01. Fashion Intelligence Tagger

> AI-powered SKU classification engine that assigns product categories and attributes from text descriptions — evaluated against a ground truth dataset of 105K real fashion articles.

---

## Overview

| Field | Value |
|-------|-------|
| Status | V1 Live · V2 Planned |
| Persona | The Architect |
| Key Skills | LLM prompt engineering, evaluation metrics, n8n workflow design, React |
| Stack | React + Vite + Tailwind, n8n (self-hosted), OpenRouter API, Netlify |
| Dataset | H&M Personalization Dataset — Kaggle 2022 (105K articles, 28.8M transactions) |
| V1 Repo | [github.com/jkhan31/ai-tagging-tool](https://github.com/jkhan31/ai-tagging-tool) |
| V2 Repo | Planned |

---

## The Case Study

### Company: Vela Marketplace
*A multi-category fashion marketplace operating across 5 SEA markets — Indonesia, Philippines, Malaysia, Thailand, Singapore.*

Vela's catalogue operations team processes roughly 2,000 new seller SKUs per week. Every product needs a `product_type`, `product_group`, `color_group`, and a set of usage attributes assigned before it can go live in search. The current process is manual: a content ops specialist opens each listing, reads the title and description, and applies tags from a shared taxonomy spreadsheet.

Average tagging time: **4 minutes per SKU**.
Team size handling this: **3 content ops staff**.
Result: a **2–3 day listing delay** from SKU submission to search visibility.

The deeper problem isn't just speed — it's consistency. Different staff tag the same product type differently depending on which reference document they used last. A "slim-fit chino" gets tagged as both `trousers` and `casual bottoms` depending on who processed it. This inconsistency breaks downstream filters, recommendation engines, and seller analytics.

The ops team has tried taxonomy training sessions and tagging guides, but accuracy drifts back to baseline within 2 weeks. The problem is structural, not behavioral — the process needs to be automated.

---

## Problem Statement

Manual SKU tagging at marketplace scale is too slow, too inconsistent, and too resource-intensive. At 2,000 SKUs/week × 4 min/SKU, the team spends **133 person-hours per week** on a task that could be automated. Taxonomy inconsistency also degrades search quality and seller trust in the platform.

**The question is not whether to automate — it's how accurately an LLM can assign fashion taxonomy from product text alone, and how do you measure it?**

---

## Solution

An AI tagging system that:
1. Accepts a product name (and optional brand) as input
2. Sends it to an LLM via structured prompt
3. Returns predicted `category`, `subcategory`, `color`, and `attributes`
4. Compares the prediction against a curated ground truth dataset
5. Scores accuracy per row and in aggregate

### V1 (Current — food prototype)
The live version at [jkhan31/ai-tagging-tool](https://github.com/jkhan31/ai-tagging-tool) was built as a proof-of-concept using food product data (45-item ground truth, OpenRouter LLM, n8n webhook backend). It demonstrates the core pipeline — input → LLM → ground truth comparison → match score — but uses food categories that don't reflect the actual use case.

### V2 Features (Planned — fashion)

| Feature | Description |
|---------|-------------|
| Fashion taxonomy | Categories and attributes derived from H&M dataset: product_type, product_group, color_group, section (Ladieswear, Menswear, etc.) |
| Bulk input | Paste up to 50 product names at once, or upload a CSV |
| Chain-of-thought prompting | LLM reasons through ambiguous cases before committing to a tag |
| Confidence scoring | LLM returns a confidence level (high / medium / low) alongside each prediction |
| Match score | Per-row: category match (binary) + attribute overlap (intersection / ground truth) |
| Aggregate eval panel | Summary bar: avg match score, % green (>80%), % yellow (50–80%), % red (<50%), breakdown by category |
| Export | Download results as CSV for further analysis |

### How It Works

```
User Input (product names)
        ↓
n8n Webhook (POST /webhook)
        ↓
LLM Prompt (OpenRouter — structured JSON output)
        ↓
Ground Truth Lookup (H&M articles.csv → match by category)
        ↓
Score Calculation (category match + attribute overlap)
        ↓
Response → React Frontend → ResultsTable + SummaryPanel
```

---

## Technical Architecture

**Frontend:** React 18 + Vite + Tailwind CSS — two-panel layout (InputForm + ResultsTable). Deployed on Netlify. Environment variable `VITE_API_URL` points to n8n webhook.

**Backend:** n8n workflow (self-hosted VPS). Receives POST, formats prompt, calls OpenRouter, returns structured JSON.

**LLM:** OpenRouter API — model selectable (default: a cost-efficient model like `google/gemma-2-9b-it` or `mistralai/mistral-7b-instruct`). System prompt defines Vela's taxonomy and output schema.

**Ground Truth:** H&M `articles.csv` loaded into n8n workflow memory (or a lightweight JSON lookup). Contains `article_id`, `product_type_name`, `product_group_name`, `colour_group_name`, `section_name`, `detail_desc`.

**Scoring (in `useAPI.js`):**
```js
// Category match: 1 if exact, 0 if mismatch
// Attribute overlap: intersection(ai_attrs, truth_attrs) / len(truth_attrs)
// Final score: (categoryMatch + attributeOverlap) / 2
```

---

## Data

**H&M Personalization Dataset** — Kaggle 2022 competition dataset.

| File | Rows | Key Columns |
|------|------|-------------|
| articles.csv | 105,542 | article_id, product_type_name, product_group_name, colour_group_name, section_name, detail_desc |
| customers.csv | 1.37M | customer_id, age, membership_status |
| transactions.csv | 28.8M | customer_id, article_id, t_dat, price |

For the tagger, `articles.csv` is the ground truth. The LLM is given a product name/description and asked to predict `product_type_name` and `colour_group_name`. The predicted values are compared against the actual H&M values.

**Why H&M over other options:**
- DeepFashion (2016–2019): Image-focused, limited text attributes, dated taxonomy
- Myntra/paramaggarwal (2017): Rich attributes but 7 years old, Indian market bias
- H&M (2022): Real production e-commerce data, real taxonomy used at scale, recent

---

## Success Metrics

| Metric | Target |
|--------|--------|
| Category accuracy | ≥ 80% exact match on product_type |
| Attribute overlap | ≥ 0.6 average across all products |
| % green (score > 0.8) | ≥ 60% of submitted products |
| Latency per batch (10 items) | < 8 seconds |
| No console errors on live demo | Required |

---

## Mirrors Real Work

At ZALORA Group (current role), built AI logic prototyping using Python and LLMs to iterate on internal business rules. Automated SKU tagging reduced manual categorization cycles by over 50%. This project makes that work visible on public data — same logic, same evaluation approach, verifiable by anyone.

---

## Build Notes

**V1 → V2 migration steps:**
1. Replace `data/products.json` (45 food items) with H&M `articles.csv` subset (1,000–5,000 items, sampled for category balance)
2. Update n8n workflow system prompt: redefine taxonomy to H&M categories and attributes
3. Add chain-of-thought instruction to prompt: `"Think step by step before assigning a category. Consider the product name, likely use, and target customer."`
4. Add `SummaryPanel` component to frontend: aggregate stats bar above ResultsTable
5. Add CSV upload input to `InputForm`
6. Remove `bash.exe.stackdump` from repo

**Claude Code usage:** Use Claude Code to generate the H&M data sampling script, update the n8n prompt template, and scaffold the `SummaryPanel` component.

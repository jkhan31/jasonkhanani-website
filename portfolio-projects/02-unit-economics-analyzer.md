# 02. Unit Economics Analyzer

> A diagnostic tool that identifies where an e-commerce platform is subsidizing unprofitable deliveries — margin waterfall by category, corridor, and seller tier, powered by 100K real orders.

---

## Overview

| Field | Value |
|-------|-------|
| Status | Planned |
| Persona | The Investigator |
| Key Skills | Unit economics modeling, SQL-style data analysis (Pandas), data visualization, DMAIC diagnostic framework |
| Stack | Python, Pandas, Plotly, Streamlit |
| Dataset | Olist Brazilian E-Commerce Dataset — Kaggle (100K orders, 73K products, 3K sellers) |
| Deployment | Streamlit Community Cloud (free) |
| Repo | Planned |

---

## The Case Study

### Company: Kova Commerce
*A Brazilian multi-category e-commerce platform founded in 2018. Operates across 5 product verticals: electronics, home goods, fashion, beauty, and sports. Primarily seller-funded marketplace model — sellers pay a commission + flat shipping subsidy per order.*

Kova grew fast. From 2019 to 2022, GMV tripled as they onboarded sellers aggressively and offered a flat BRL 12 shipping subsidy per order to stay competitive. For most categories, this was fine — the margin math worked.

Then fuel costs surged. And Kova noticed something: their monthly P&L showed declining contribution margin even as GMV grew. The CFO requested a cost-to-serve audit.

The operations team pulled together a spreadsheet. It took 3 weeks and showed average cost-per-delivery by state. It couldn't answer the critical question: **which specific combinations of product category + delivery corridor + seller tier are underwater?**

They had the data. They just didn't have a tool that could slice it fast enough to act on.

---

## Problem Statement

Kova is absorbing shipping costs on an unknown proportion of orders where delivery cost exceeds the commission + subsidy revenue. Without a unit-level diagnostic view, the ops team can't:

- Identify which product categories lose money on average
- See which delivery corridors (origin → destination state pairs) are high-cost outliers
- Model the impact of changing the subsidy structure (e.g., tiered by category weight or distance band)
- Prioritize which seller cohorts to target first with a fee redesign

A monthly spreadsheet built by a 2-person team isn't a diagnostic system — it's a snapshot. **Kova needs a repeatable, interactive margin diagnostic that any ops manager can run in minutes.**

---

## Solution

A Streamlit web app that loads the Olist dataset and runs a full unit economics diagnostic in four modules.

### Module 1 — Cost-Per-Order Heatmap
- Breakdown of freight_value (proxy for shipping cost) vs. payment_value (proxy for revenue) by product category
- Color-coded: green = margin-positive, red = platform subsidizing delivery
- Sortable table + bar chart

### Module 2 — Margin Waterfall
- Revenue per order (payment) → minus freight cost → minus estimated commission (configurable %) → = contribution margin
- Waterfall chart by category showing where margin is made and lost
- "If we capped subsidies at X%, how much do we save?" — scenario slider

### Module 3 — Corridor Analysis
- Origin state → destination state delivery cost heatmap
- Identifies high-cost corridors (e.g., São Paulo → Amazon basin) as targets for surcharge or carrier renegotiation
- Top 10 leakage corridors table

### Module 4 — Fee Redesign Simulator
- Input: proposed tiered shipping fee by category or weight band
- Output: projected change in contribution margin across all orders
- Sensitivity table: "at what fee level does this category break even?"

### How It Works

```
Olist CSVs (local or auto-downloaded)
        ↓
Pandas pipeline: merge orders + order_items + products + geolocation
        ↓
Feature engineering: cost_per_order, margin, corridor key, category
        ↓
Four Streamlit tabs (one per module)
        ↓
Plotly charts + interactive sliders + downloadable CSV output
```

---

## Technical Architecture

**No backend required.** Pure Python data pipeline + Streamlit frontend.

```
olist_data/
├── olist_orders_dataset.csv
├── olist_order_items_dataset.csv
├── olist_products_dataset.csv
├── olist_geolocation_dataset.csv
└── product_category_name_translation.csv

src/
├── data_loader.py       # merge and clean pipeline
├── margin_calc.py       # cost, revenue, margin computations
├── corridor.py          # origin-destination aggregations
├── fee_simulator.py     # scenario modeling
└── app.py               # Streamlit UI
```

**Key libraries:** `pandas`, `plotly`, `streamlit`, `numpy`

**Deployment:** Streamlit Community Cloud — connect GitHub repo, set data path, deploy. Free tier is sufficient.

---

## Data

**Olist Brazilian E-Commerce Dataset** — Kaggle, publicly available, no license restrictions for non-commercial use.

| File | Rows | Key Fields Used |
|------|------|-----------------|
| orders | 99,441 | order_id, customer_id, order_status, order_purchase_timestamp |
| order_items | 112,650 | order_id, product_id, freight_value, price |
| products | 32,951 | product_id, product_category_name, product_weight_g |
| geolocation | 1M | zip_code_prefix, lat, lng, state |
| category_translation | 71 | product_category_name → english name |

**Key derived fields:**
- `freight_value` — actual shipping cost per item (from order_items)
- `payment_value` — total order revenue (from order_payments)
- `delivery_corridor` — `seller_state → customer_state` (from geolocation merge)
- `contribution_margin` — `payment_value - freight_value - (payment_value × commission_rate)`

---

## Success Metrics

| Metric | Definition |
|--------|------------|
| Negative margin categories identified | At least 3 categories where avg freight > avg commission |
| Top-10 loss corridors | Ranked by total freight subsidy absorption |
| Scenario simulator accuracy | Fee change output matches manual spot-check within 2% |
| App load time | < 5 seconds on Streamlit Community Cloud |
| No hardcoded assumptions | All rates (commission %, subsidy cap) configurable via sidebar sliders |

---

## Mirrors Real Work

At ZALORA Group, led a full cost diagnostic + margin sensitivity analysis that identified shipping fee misalignment across seller tiers. Redesigned fee logic within platform constraints, delivering €520K in annual savings. This project replicates that analytical approach on the Olist dataset — the same DMAIC structure (Define → Measure → Analyze → Improve → Control) applied to public e-commerce data anyone can verify.

---

## Build Notes

**Data pipeline approach:**
- Do not load all CSVs into memory at once — merge lazily using `order_id` as the join key
- Cache merged dataframe with `@st.cache_data` to avoid re-running on every widget interaction
- Category translation file needed to convert Portuguese category names to English

**Claude Code usage:**
- Use Claude Code to scaffold the full Pandas merge pipeline from the Olist schema
- Generate the Plotly waterfall chart (non-trivial to configure manually)
- Write the fee simulator logic: given a proposed fee schedule, recompute margin across all orders

**Potential extension:** Add a "returns" tab using `order_status = 'unavailable'` or review data to layer in return rate by category — connects this project to Project 01 (ai-tagging-tool) and the Returns Intelligence concept.

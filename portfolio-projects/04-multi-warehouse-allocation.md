# 04. Multi-Warehouse Stock Allocation Model

> A demand-driven inventory allocation engine that optimizes stock distribution across multiple fulfillment centers — minimizing split shipments, reducing holding cost, and improving delivery SLAs.

---

## Overview

| Field | Value |
|-------|-------|
| Status | Planned |
| Persona | The Architect |
| Key Skills | Inventory optimization, demand forecasting, operations research, Python data modeling, Streamlit |
| Stack | Python, Pandas, Plotly, PuLP (linear programming), Streamlit |
| Datasets | [M5 Forecasting Competition — Kaggle 2020](https://www.kaggle.com/competitions/m5-forecasting-accuracy) (Walmart daily sales) + [USAID Supply Chain Shipment Pricing Data — data.gov](https://catalog.data.gov/dataset/supply-chain-shipment-pricing-data) |
| Deployment | Streamlit Community Cloud (free) |
| Repo | Planned |

---

## The Case Study

### Company: Nexara Fulfillment
*A third-party logistics (3PL) provider operating 4 fulfillment centers across India: North (Delhi NCR), South (Bangalore), East (Kolkata), and West (Mumbai). Nexara serves 120 D2C and marketplace brands with a combined SKU catalogue of ~40,000 active items.*

Nexara's operations team manages stock allocation manually. Each Monday, an allocation analyst pulls a report from their WMS, eyeballs current stock levels and recent sales velocity, and redistributes units across the 4 warehouses using an Excel model built 3 years ago.

The model doesn't account for demand seasonality, promotional calendars, or carrier cost differentials between zones. It also can't run "what if" scenarios fast enough to be useful — a reallocation calculation takes half a day.

The results show up in the data: 18% of Nexara's monthly orders require a split shipment (dispatched from 2 warehouses), adding BRL 45 per split in extra carrier cost. North warehouse consistently runs out of fast-moving fashion SKUs in Q4. West warehouse routinely holds 60+ days of slow-moving electronics inventory.

A recurring comment in Nexara's quarterly ops review: "We have the inventory — it's just in the wrong place."

---

## Problem Statement

Nexara's stock allocation problem has two dimensions:

1. **Demand mismatch:** Allocation doesn't account for regional demand variance or forecasted velocity. Stock goes where it was last sent, not where it's needed next.

2. **Cost blindness:** Split shipments and long-haul corridors are more expensive than intra-region fulfillment, but the Excel model treats all warehouses as cost-equivalent.

**The goal is an allocation model that takes current stock levels + demand forecasts + corridor costs and outputs a reallocation plan that minimizes total cost while meeting regional service levels.**

---

## Solution

A Streamlit app with three modules: demand forecasting, cost modeling, and allocation optimization.

### Module 1 — Demand Forecast by Region
- Uses M5 dataset (Walmart daily sales) as a demand proxy, mapped to 4 simulated regions (North, South, East, West)
- 28-day rolling average + simple seasonality adjustment
- Output: forecasted units needed by region × SKU category for the next 30 days

### Module 2 — Corridor Cost Model
- Uses USAID supply chain pricing data as a proxy for inter-warehouse transfer costs
- Maps origin warehouse → destination warehouse cost per unit by weight band
- Also models split shipment cost premium vs. single-warehouse fulfillment

### Module 3 — Allocation Optimizer
- Linear programming model (PuLP) that minimizes total cost (holding + transfer + split premium)
- Subject to: total stock constraints, minimum regional service level (≥ X days of demand coverage)
- Output: recommended units to transfer per warehouse pair, projected cost savings vs. current state
- "What if" sliders: adjust service level target, change transfer cost assumptions, add a 5th warehouse

### How It Works

```
M5 demand data (Kaggle)
        ↓
Demand aggregation by region/category → 30-day forecast
        ↓
USAID cost data → corridor cost matrix
        ↓
PuLP LP model: minimize cost subject to service level constraints
        ↓
Output: allocation plan table + Plotly sankey/flow chart + savings estimate
        ↓
Streamlit UI with module tabs and "what if" controls
```

---

## Technical Architecture

```
data/
├── m5_sales_train_evaluation.csv      # Walmart daily sales (M5 competition)
├── SCMS_Delivery_History_Dataset.csv  # USAID supply chain pricing
└── warehouse_config.json              # 4 warehouse locations, current stock levels (synthetic)

src/
├── demand_model.py       # Rolling average + seasonality from M5 data
├── cost_model.py         # Corridor cost matrix from USAID data
├── optimizer.py          # PuLP LP formulation
├── visualizations.py     # Plotly charts (sankey, bar, heatmap)
└── app.py                # Streamlit multi-tab UI
```

**Key libraries:** `pandas`, `numpy`, `plotly`, `pulp`, `streamlit`

**Note on PuLP:** PuLP is a Python LP/MILP modeler that interfaces with open-source solvers (CBC, GLPK). No license cost. Sufficient for this problem size.

---

## Data

### [M5 Forecasting Competition — Kaggle 2020](https://www.kaggle.com/competitions/m5-forecasting-accuracy)
- **Source:** Walmart real daily unit sales data, 2011–2016
- **Coverage:** 30,490 time series across 3,049 products, 10 stores, 3 states (CA, TX, WI)
- **Mapping to use case:** Store → Warehouse, State → Region, Product categories → mapped to Nexara SKU categories
- **Key files:** `sales_train_evaluation.csv` (unit sales by day), `calendar.csv` (dates + events), `sell_prices.csv` (prices)

### [USAID Supply Chain Shipment Pricing Data — data.gov](https://catalog.data.gov/dataset/supply-chain-shipment-pricing-data)
- **Source:** USAID SCMS (Supply Chain Management System) actual delivery cost data
- **Coverage:** ~10,000 shipment records with origin, destination, weight, freight cost, mode
- **Mapping to use case:** Shipment freight cost / weight → cost-per-kg by corridor → scaled to Nexara's typical SKU weights

**Synthetic data for warehouses:** Current stock levels and warehouse capacities are generated synthetically (seeded for reproducibility) since this data doesn't exist in public datasets.

---

## Success Metrics

| Metric | Target |
|--------|--------|
| Split shipment reduction (modeled) | ≥ 15% reduction vs. baseline allocation |
| Optimizer runtime | < 10 seconds for 4-warehouse, 50-SKU scenario |
| Demand forecast MAE | ≤ 20% mean absolute error (30-day horizon) |
| Cost savings estimate | Quantified in absolute units (currency or %) |
| What-if scenarios | At least 3 levers configurable by user |

---

## Mirrors Real Work

At ZALORA Group, currently designing cross-border inventory logic and route eligibility frameworks for a Multi-Warehouse project with €300K projected annual revenue uplift. The allocation optimizer here mirrors the same structural problem: given N warehouses and M demand signals, how do you assign stock to minimize cost while hitting service level targets? This project makes that work visible on public data with a full optimization model.

---

## Build Notes

**LP formulation sketch:**

```
Minimize: Σ (transfer_cost[i][j] × units_transferred[i][j]) + Σ (split_premium × split_shipments[k])

Subject to:
  stock_after[i] = stock_before[i] - Σ outbound[i][j] + Σ inbound[j][i]  ∀ warehouses i
  stock_after[i] ≥ demand_forecast[i] × service_level_days               ∀ warehouses i
  units_transferred[i][j] ≥ 0                                            ∀ pairs i,j
  stock_after[i] ≤ warehouse_capacity[i]                                  ∀ warehouses i
```

**Claude Code usage:**
- Generate the PuLP LP formulation from the constraint description above
- Build the demand aggregation pipeline from M5 CSV format
- Create the Plotly Sankey diagram for stock flow visualization (complex to configure manually)

**Alternative deployment:** Google Colab notebook — allows interactive exploration without Streamlit setup. Good as a companion to the Streamlit app for technical reviewers who want to see the raw model.

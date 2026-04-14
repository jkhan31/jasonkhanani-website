# CLAUDE.md — Multi-Warehouse Stock Allocation Model

## What This Is
Streamlit app with 3 modules: demand forecasting (M5/Walmart data), corridor cost modeling (USAID shipment data), and a PuLP linear programming optimizer that outputs a stock reallocation plan minimizing cost while hitting service level targets.

## Stack
- Python 3.11+, pandas, numpy, plotly, pulp, streamlit
- LP solver: CBC (ships free with PuLP — no license needed)
- Deployment: Streamlit Community Cloud

## Commands
```bash
pip install -r requirements.txt
streamlit run src/app.py        # localhost:8501
```

## Architecture
```
data/
├── m5_sales_train_evaluation.csv   # Walmart daily sales — Kaggle M5 competition
├── SCMS_Delivery_History.csv       # USAID supply chain pricing — data.gov
└── warehouse_config.json           # 4 warehouses: name, capacity, current stock (synthetic)
src/
├── demand_model.py                 # rolling avg + seasonality from M5 data
├── cost_model.py                   # origin→destination cost matrix from USAID data
├── optimizer.py                    # PuLP LP formulation
├── visualizations.py               # Plotly sankey (flow), heatmap, bar charts
└── app.py                          # Streamlit 3-tab UI with sidebar controls
requirements.txt
```

## LP Formulation (optimizer.py)
```
Minimize:  Σ transfer_cost[i][j] × units[i][j]
Subject to:
  stock_after[i] ≥ demand_forecast[i] × service_level_days   (service constraint)
  stock_after[i] ≤ warehouse_capacity[i]                      (capacity constraint)
  units[i][j] ≥ 0                                             (non-negativity)
```

## Data Mapping
- M5 stores → 4 warehouses (North/South/East/West)
- M5 product categories → warehouse SKU categories
- USAID freight_cost / product_weight_grams → cost-per-kg by corridor

## Constraints
- 4 warehouses only — read names/config from warehouse_config.json, never hardcode
- CBC solver only — do not require CPLEX, Gurobi, or any commercial solver
- All sidebar controls: service level %, transfer cost multiplier, rebalance horizon (days)
- Use `@st.cache_data` on data loading — never reload M5 CSV on widget interaction

## No API Connections Required

## Useful Claude Skills
- `/simplify` — after building the optimizer and visualizations (most complex code)
- `/deploy-check` — before deploying to Streamlit Cloud

# CLAUDE.md — Unit Economics Analyzer

## What This Is
Streamlit app for e-commerce margin diagnostics. Loads Olist Brazilian E-Commerce dataset (100K orders), runs 4 analysis modules: cost-per-order heatmap, margin waterfall, corridor analysis, fee redesign simulator. No backend — pure Python.

## Stack
- Python 3.11+, pandas, numpy, plotly, streamlit
- Deployment: Streamlit Community Cloud (free)
- Data: Olist dataset from Kaggle (local CSVs, gitignored)

## Commands
```bash
pip install -r requirements.txt
streamlit run src/app.py        # localhost:8501
```

## Architecture
```
data/                           # Olist CSVs — download from Kaggle, not committed
src/
├── data_loader.py              # merge 5 CSVs → master_df, cached with @st.cache_data
├── margin_calc.py              # freight_value, payment_value, contribution_margin
├── corridor.py                 # seller_state → customer_state aggregations
├── fee_simulator.py            # scenario: adjust fee → recompute margin across all orders
└── app.py                      # Streamlit UI, 4 tabs + sidebar sliders
requirements.txt
```

## Key Data Joins
```
orders (order_id)
  → order_items (order_id) → products (product_id)
  → order_payments (order_id)
  → geolocation (zip_code_prefix) for seller + customer state
```
Translate Portuguese categories via `product_category_name_translation.csv`.

## Key Derived Fields
- `freight_value` — shipping cost per item (order_items)
- `payment_value` — total revenue (order_payments)
- `delivery_corridor` — `seller_state + "→" + customer_state`
- `contribution_margin` — `payment_value - freight_value - (payment_value × commission_rate)`

## Constraints
- Merge lazily on order_id — do not load all CSVs into memory simultaneously
- All rates (commission %, subsidy cap) via `st.sidebar` sliders — no hardcoded values
- Use `@st.cache_data` on merged dataframe — never reload on widget interaction
- No backend, no API calls, no auth

## No API Connections Required

## Useful Claude Skills
- `/simplify` — after building the data pipeline
- `/deploy-check` — before pushing to Streamlit Community Cloud

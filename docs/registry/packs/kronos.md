# Kronos

- **URL:** https://github.com/shiyu-coder/Kronos
- **License:** MIT
- **Status:** active (22.3k stars, AAAI 2026 accepted, latest update Nov 2025)
- **Last reviewed:** 2026-04-30
- **Tags:** #ai #ml #fintech #research

## What it is

The first open-source **foundation model for financial candlesticks (K-lines)**, trained on data from 45+ global exchanges. Uses a two-stage framework: hierarchical tokenization converts continuous OHLCV market data into discrete tokens, then an autoregressive Transformer forecasts future prices. Available in 4 sizes (mini 4.1M, small 24.7M, base 102.3M, large 499.2M parameters). Fine-tuning pipeline included for adapting to specific markets (e.g. Chinese A-share via Qlib).

## When to install

- Project is quant research or financial timeseries forecasting.
- Need a pretrained baseline before training a custom price model.
- Interactive forecasting demos (live BTC/USDT 24h forecast example included).
- Comparing classical models (ARIMA, GARCH, LSTM) against a transformer foundation model.

## When NOT to install

- Live trading with real capital — this is a forecasting model, not a trading system.
- Non-finance projects.
- Compliance-sensitive deployments without separate risk and execution layers.

## How to install

```bash
git clone https://github.com/shiyu-coder/Kronos.git
cd Kronos
pip install -r requirements.txt
```

## Fit signals

- TECHNICAL-PLAN.md mentions OHLCV, candlestick prediction, or quantitative finance.
- Project handles 45+-exchange-style global market data.
- Team comfortable with PyTorch / Transformer fine-tuning.

## Conflicts and overlaps

- Pairs with `tradingagents` (multi-agent debate framework — could use Kronos as the technical-analyst input).
- Pairs with `vibe-trading` (broad finance workspace — Kronos can plug in as a forecasting backbone).
- Different shape from `autohedge` and `fincept-terminal` (those are systems; Kronos is a model).

## Notes

⚠️ Forecasting is not investment advice. Always pair with an explicit risk-management layer before any deployment. AAAI 2026 acceptance is a meaningful credibility signal — preferred academic baseline for new quant work.

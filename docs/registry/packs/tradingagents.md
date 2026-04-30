# TradingAgents (Tauric Research) ⭐

- **URL:** https://github.com/TauricResearch/TradingAgents
- **License:** Apache-2.0
- **Status:** active (57.5k stars, v0.2.4 April 2026, 149 commits — pre-1.0)
- **Last reviewed:** 2026-04-30
- **Tags:** #fintech #agents #ai #research

## What it is

A multi-agent financial trading framework built on **LangGraph** that mirrors real-world trading-firm dynamics. Specialized LLM agents — Fundamentals Analyst, Sentiment Analyst, News Analyst, Technical Analyst, Bullish + Bearish Researchers, Trader, Risk Manager, Portfolio Manager — engage in **structured multi-round debates** to evaluate market conditions and make trading decisions. Supports backtesting and paper trading via a simulated exchange (no live execution). Features cross-ticker learning via persistent decision logging at `~/.tradingagents/memory/trading_memory.md`.

The most academically-grounded fintech pack in the registry — citation: Xiao et al. (2025), arXiv:2412.20138.

## When to install

- **Research and backtesting** of multi-agent trading strategies.
- Quant teams wanting an LLM-debate framework instead of single-model trading bots.
- Comparing strategies across multiple LLM providers (GPT-5.x, Gemini 3.x, Claude 4.x, Grok 4.x, local Ollama).
- Educational use for understanding how institutional trading workflows can be modeled with agents.

## When NOT to install

- **Live trading with real capital** — explicitly out of scope. The repo states: *"It is not intended as financial, investment, or trading advice."*
- Non-finance projects.
- Production deployments — pre-1.0, framework actively iterating; live-trading use not documented.

## How to install

```bash
git clone https://github.com/TauricResearch/TradingAgents.git
pip install .
# Or via Docker:
docker compose run --rm tradingagents
```

Requires API keys for at least one of: OpenAI, Google, Anthropic, xAI, DeepSeek, Qwen, GLM, OpenRouter, or local Ollama.

## Python API example

```python
from tradingagents.graph.trading_graph import TradingAgentsGraph
from tradingagents.default_config import DEFAULT_CONFIG

ta = TradingAgentsGraph(debug=True, config=DEFAULT_CONFIG.copy())
_, decision = ta.propagate("NVDA", "2026-01-15")
```

## Fit signals

- Project involves quant research, multi-agent LLM coordination, or trading simulation.
- Team values academically-grounded frameworks (paper-backed).
- Stack uses LangGraph or is open to it.

## Conflicts and overlaps

- **Overlaps with `autohedge` (experimental, real-money) and `vibe-trading` (mature, multi-platform export):**
  - Want academic rigor + multi-agent debates → `tradingagents`.
  - Want broad market coverage + strategy export to TradingView/MT5 → `vibe-trading`.
  - Want autonomous real-money trading on Solana (with all caveats) → `autohedge`.
- All three are **research/simulation by default**. None replace a licensed trading entity.

## Notes

- ⚠️ **Pre-1.0** — checkpoint resume, decision logging, and backtesting fidelity are recent additions. Expect breaking changes.
- ⚠️ **Financial risk warning:** "Trading performance may vary based on many factors, including the chosen backbone language models, model temperature, trading periods, the quality of data, and other non-deterministic factors."
- Persistent memory injects past lessons into future analyses — powerful but read it before sharing the file across teams (it logs realized returns).
- Pair with `legal-compliance-agent` and `trailofbits-skills` if seriously evaluating any live deployment.

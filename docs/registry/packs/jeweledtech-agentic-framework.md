# JeweledTech Agentic Framework

- **URL:** https://github.com/jeweledtech/agentic-framework
- **License:** MIT
- **Status:** active (17 stars)
- **Last reviewed:** 2026-05-09
- **Tags:** #agents #experimental

## What it is

An orchestration-agnostic framework for scaffolding multi-agent business systems — "operate a fully functional company through a hierarchy of AI agents covering sales, marketing, engineering, customer service, back-office, and security." Ships with 15+ pre-built agents, 87 n8n workflows, FastAPI endpoints, and a demo UI. Supports Anthropic Claude, OpenAI, Ollama, and LiteLLM as LLM providers.

Targets entrepreneurs and SMBs that want to operate a "digital workforce" without integrating dozens of point tools.

## When to install

- Solo founder or small team wants a starting scaffold for multi-department AI ops.
- Already running n8n and want a curated 87-workflow head start instead of building from zero.
- Researching how to organize agents into business departments (sales, eng, support).
- Need a demoable "AI company in a box" for client pitches or workshops.

## When NOT to install

- Single-agent or single-department use case — overkill.
- Production-grade multi-tenant SaaS — this is solo / SMB scope.
- Strict compliance environment without time to audit each of the 87 workflows.
- 17 stars suggests early-stage adoption — verify maintenance cadence before betting on it.

## How to install

```bash
git clone https://github.com/jeweledtech/agentic-framework
cd agentic-framework
# Follow upstream — FastAPI + n8n + Ollama or cloud provider
docker compose up
```

## Fit signals

- Project is "build a company / agency / SMB ops layer" rather than "build a single feature."
- Team uses n8n already.
- Comfort with Python (89% of codebase) and FastAPI.

## Conflicts and overlaps

- Conceptual overlap with `gstack` (23-agent virtual engineering team) — gstack is **engineering-only**; this framework is **business-wide**.
- Conceptual overlap with `optio` (K8s ticket-to-PR workflow) — Optio is engineering ops; this covers wider business ops.
- Composes with `agent-exchange` (AEX) if multiple of these "digital workforces" need to transact.

## Notes

- MIT — safe for commercial use.
- ⚠️ **Low star count (17)** at last review — early-stage adoption signal. Treat as experimental and verify activity before relying on it.
- 87 n8n workflows is significant scaffolding — even partial reuse may justify the install.
- Strong fit for `vibe-coders` building business automation; weaker fit for production engineering teams.

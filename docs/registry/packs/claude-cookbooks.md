# Anthropic Claude Cookbooks

- **URL:** https://github.com/anthropics/claude-cookbooks
- **License:** MIT
- **Status:** active (41.9k stars, 550+ commits, official Anthropic project)
- **Last reviewed:** 2026-04-30
- **Tags:** #cookbook #foundations #ai

## What it is

Official Anthropic-maintained collection of Jupyter notebooks demonstrating practical patterns for working with the Claude API. Covers classification, RAG, tool use, multimodal vision, multi-agent flows, and prompt caching. Copy-paste reference code, not a framework.

## When to install

- Project integrates Claude into a Python backend.
- Team needs RAG, tool-use, or multi-agent patterns specifically for Claude.
- Onboarding to the Anthropic API and want hands-on examples.

## When NOT to install

- Project uses a different LLM provider (OpenAI, Gemini, etc.) — use that provider's cookbook instead.
- Stack is not Python.
- Need a production framework, not recipe notebooks.

## How to install

No install — clone and run the notebooks.

```bash
git clone https://github.com/anthropics/claude-cookbooks.git
export ANTHROPIC_API_KEY=...
```

## Fit signals

- Python backend.
- TECHNICAL-PLAN.md mentions Claude API or Anthropic SDK.
- Project needs RAG, tool calling, or multimodal features.

## Conflicts and overlaps

- Direct mirror of `openai-cookbook` for the OpenAI ecosystem — choose based on which LLM you use, or install both if multi-provider.

## Notes

Official source, kept current with the latest API capabilities. Always check upstream first before copying older patterns from training-data cutoffs.

# OpenAI Cookbook

- **URL:** https://github.com/openai/openai-cookbook
- **License:** MIT
- **Status:** active (73.1k stars, 1,380+ commits, official OpenAI project)
- **Last reviewed:** 2026-04-30
- **Tags:** #cookbook #foundations #ai

## What it is

Official OpenAI-maintained collection of example code and guides for the OpenAI API. Mostly Jupyter notebooks covering chat completions, embeddings, function calling, RAG, fine-tuning, and assistants. Copy-paste reference code organized at cookbook.openai.com.

## When to install

- Project integrates OpenAI models (GPT-4, GPT-5, embeddings, DALL-E, Whisper).
- Team needs RAG, function calling, or assistants-API patterns.
- Onboarding to the OpenAI API and want hands-on examples.

## When NOT to install

- Project uses a different LLM provider — use that provider's cookbook.
- Project requires open-weight models for compliance/privacy.
- Stack is not Python.

## How to install

No install — clone and run the notebooks.

```bash
git clone https://github.com/openai/openai-cookbook.git
export OPENAI_API_KEY=...
```

## Fit signals

- Python backend.
- TECHNICAL-PLAN.md mentions OpenAI API.
- Project needs embeddings, function calling, or RAG with OpenAI.

## Conflicts and overlaps

- Direct mirror of `claude-cookbooks` for the Anthropic ecosystem — choose based on provider, or install both if multi-provider.

## Notes

Official source — always preferred over older patterns from training data.

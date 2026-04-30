# Pathway LLM App

- **URL:** https://github.com/pathwaycom/llm-app
- **License:** MIT
- **Status:** active (59.9k stars, 249 commits)
- **Last reviewed:** 2026-04-30
- **Tags:** #ai #data-engineering #tooling

## What it is

Ready-to-deploy templates for RAG and AI pipelines with **real-time data synchronization** — always in sync with SharePoint, Google Drive, S3, Kafka, PostgreSQL, and real-time APIs. Includes Question-Answering RAG, Document Indexing, Multimodal RAG with GPT-4o, and Unstructured-to-SQL templates.

## When to install

- Project needs RAG over live data sources (not static document dumps).
- Real-time vector indexing requirements.
- Teams that want Docker-containerized RAG without standing up separate vector DBs.

## When NOT to install

- Static, one-shot RAG over a fixed document set — overkill.
- Project doesn't connect to enterprise data sources.

## How to install

Each template has its own README. Typical pattern: clone, set keys, `docker compose up`.

```bash
git clone https://github.com/pathwaycom/llm-app.git
```

## Fit signals

- TECHNICAL-PLAN.md mentions RAG over Sharepoint/Google Drive/S3/Kafka/Postgres.
- Project requires real-time freshness (not batch indexing).

## Conflicts and overlaps

- More opinionated than `claude-cookbooks` / `openai-cookbook` RAG examples — provides templates instead of recipes.

## Notes

Built-in vector indexing (usearch) and full-text search (Tantivy) avoid external vector-DB dependencies; pair with managed Postgres if relational source-of-truth is needed.

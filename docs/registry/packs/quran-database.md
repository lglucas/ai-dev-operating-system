# Quran Database

- **URL:** https://github.com/AbdullahGhanem/quran-database
- **License:** check upstream (Quran text is public domain; software license not explicitly stated)
- **Status:** active (1.7k stars)
- **Last reviewed:** 2026-05-09
- **Tags:** #learning #research #dataset

## What it is

A comprehensive **MySQL database dump** of the complete Quran text with multiple translations and editions. Distributed as a ~187 MB ZIP containing a single SQL dump. Provides structured, queryable access to Quranic content (verses, surahs, translations, scholarly metadata).

Useful as a foundation dataset for any application that needs Quranic text — religious-tech apps, NLP / RAG pipelines on Arabic religious corpora, study tools, multilingual lookups.

## When to install

- Building a Quran-related application (study tool, audio sync, search, daily verse, etc.).
- Need a structured Quran dataset to ground a RAG / LLM agent.
- Comparing translations across editions programmatically.
- Researching Arabic NLP, transliteration, or theological text analysis.

## When NOT to install

- Need only one or two verses — fetch from a public API instead.
- Stack does not use MySQL (and you don't want to convert the dump).
- Religious-content distribution constraints in your jurisdiction or product context — review before shipping.

## How to install

```bash
# Download the ZIP from upstream releases
unzip quran-database.zip
mysql -u user -p quran < quran-database.sql
```

To convert to PostgreSQL / SQLite, use a standard MySQL-to-X migration tool.

## Fit signals

- Religious-tech, Islamic-edu, or Arabic-NLP project.
- Need an offline / self-hosted Quranic dataset (no API rate limits).
- Building a multilingual lookup that needs multiple translation editions side by side.

## Conflicts and overlaps

- No direct overlap with other packs in the registry — this is the first religious-text dataset cataloged.
- Composes with `crawlee` (if augmenting with tafsir/exegesis from public sites) and `pathway-llm-app` (if building a RAG over the corpus).

## Notes

- ✅ **Canonical Quran text is widely treated as public domain** in many contexts, but legal interpretation can vary by jurisdiction and distribution context.
- ⚠️ **Software license not explicitly stated** in the repo at last review — check the repository's LICENSE file or contact maintainers before redistributing the schema or scripts as part of a commercial product.
- ⚠️ Translation editions may carry their own copyright/license terms — verify per edition before bundling or redistribution.
- 1.7k stars — well-known reference in the Islamic-tech community.

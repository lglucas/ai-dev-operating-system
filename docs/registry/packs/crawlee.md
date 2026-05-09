# Crawlee

- **URL:** https://github.com/apify/crawlee
- **License:** Apache-2.0
- **Status:** active (23.1k stars)
- **Last reviewed:** 2026-05-09
- **Tags:** #tooling #ai #data-engineering

## What it is

Production-grade web scraping and browser automation library for Node.js. Builds reliable crawlers in JavaScript / TypeScript with first-class support for Puppeteer, Playwright, Cheerio, and JSDOM. Designed explicitly for AI / LLM / RAG / GPT data pipelines — extracts HTML, PDF, images, and other files while evading common bot-detection patterns.

Maintained by Apify (the company behind the eponymous scraping platform), so the open-source library tracks production scraping needs at scale.

## When to install

- Building a RAG pipeline that needs fresh web data (news, docs, prices, reviews).
- LLM / agent ingestion pipelines that scrape, normalize, and feed into vector stores.
- Need anti-detection scraping with proxy rotation, fingerprinting, and queue management out of the box.
- Replacing brittle in-house scrapers with a battle-tested library.

## When NOT to install

- One-off scraping of a single page — `fetch()` + `cheerio` directly is enough.
- Only need API integrations (no scraping) — wrong tool.
- Compliance constraints prohibit scraping the target site (TOS, copyright, robots.txt) — Crawlee makes scraping easier, not legal.

## How to install

```bash
npm install crawlee playwright
# or
npx crawlee create my-crawler
```

## Fit signals

- Project includes a knowledge ingestion or research-agent component.
- Stack uses Node.js / TypeScript.
- Need scheduled scraping with retries, queues, and dataset persistence.
- `pathway-llm-app` or any RAG pack already in scope and needs a scraping front-end.

## Conflicts and overlaps

- Composes with `pathway-llm-app` (RAG) — Crawlee feeds, Pathway indexes.
- Composes with `mirothinker` and `auto-research-claw` (research agents) as a tool source.
- Overlaps with the `data-scraper-agent` skill in `everything-claude-code` — that skill builds a scheduled scraping agent; Crawlee is the lower-level engine.

## Notes

- Apache-2.0 — safe for commercial use with attribution.
- 23.1k stars — one of the most established scraping libraries in the Node ecosystem.
- ⚠️ Scraping legality varies by jurisdiction and target — always check robots.txt, TOS, and copyright before deploying production crawlers.
- Apify Cloud is the hosted commercial offering — the OSS library does not require it.

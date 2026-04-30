# sci-bot.site

- **URL:** https://sci-bot.site (also: sci-bot.ru)
- **Type:** external resource (not installable; live SaaS)
- **License:** N/A (hosted service)
- **Status:** active (live site)
- **Last reviewed:** 2026-04-30
- **Tags:** #research #ai

## What it offers

An AI research assistant that accepts natural-language questions and attempts to provide answers grounded in scientific papers from the Sci-Hub ecosystem, complete with references and citations to source material. Designed for early-stage academic orientation — students, independent researchers, journalists, writers, and curious individuals seeking to map a topic before formal literature review.

Output is structured (answer + references + paper links) rather than a long PDF dump.

## When to consult

- WIZARD Stage 6 (Wave 1 research) for academic-grounded topics.
- Early-stage exploration of a scientific subject before committing to a literature-review workflow.
- Student / independent-research contexts where formal database access (Scopus, Web of Science) is unavailable.
- Pair with `feynman-is` and `auto-research-claw` for the heavier passes after the orientation pass here.

## When NOT to consult

- Final / authoritative literature review — the site itself stresses "informational only" and demands independent verification.
- Compliance / medical / legal / professional decisions without further validation.
- Projects that require strictly licensed corpus access — Sci-Hub-ecosystem grounding is contentious in some jurisdictions.

## How to use

Visit https://sci-bot.site (or https://sci-bot.ru) directly. Login / account creation may be required. Token-based features visible on the interface.

## Contact / communication channels

⚠️ **No email, API, or GitHub repo published.** The only contact path found is:

- **Contact form:** https://sci-bot.ru/contact/

If a project needs API access, batch processing, or integration commitments, reach out via the contact form first and document the response in `knowledge-base/`.

## Fit signals

- Project domain is academic / scientific (deeptech, healthtech, climate, biology).
- knowledge-base/ folder needs early-stage paper grounding.
- Researcher-class user without formal database subscriptions.

## Conflicts and overlaps

- Pairs with `feynman-is` (local-first paper agent) — sci-bot.site is the lighter early-orientation tool.
- Pairs with `auto-research-claw` (full-paper pipeline) — sci-bot.site is upstream of that workflow.

## Notes

⚠️ **Always independently verify** all references and citations before relying on answers for academic, medical, legal, or professional decisions — the service explicitly warns about this.

⚠️ **Sci-Hub-ecosystem grounding** has legal and ethical considerations that vary by jurisdiction. Consult `legal-compliance-agent` if a project intends to integrate sci-bot.site outputs into a regulated product.

Domain note: the site is reachable via both `.site` and `.ru` TLDs at review time. If one becomes unreachable, try the other.

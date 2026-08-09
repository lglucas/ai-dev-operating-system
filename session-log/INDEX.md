# Session Log Index

This log records *why* major decisions were made for this repository.

Each entry captures the reasoning behind a material decision: what was true before, what changed, why the change, and any open questions left for later.

| Date | Topic | File |
|---|---|---|
| 2026-08-09 | v0.5.4 — curso extraído para repositório próprio (`ai-dev-os-course`): versionamento conjunto não produziu manutenção conjunta, e a herança via clone/template era invisível na documentação; `os-self-test` ganha verificação do manifesto do plugin, que estava uma release atrás | [`2026-08-09-v0.5.4-course-extraction.md`](2026-08-09-v0.5.4-course-extraction.md) |
| 2026-08-08 | v0.5.3 — `CODEMAP.md` como camada de documentação: índice gerado do código, uma linha por arquivo, para achar sem ler; descrição extraída do cabeçalho `Purpose:` que a `code-style` já exigia; escopo no projeto derivado e gate de CI que falha na divergência | [`2026-08-08-v0.5.3-codemap.md`](2026-08-08-v0.5.3-codemap.md) |
| 2026-08-08 | v0.5.2 — o kernel: hooks PreToolUse que bloqueiam commit de segredo e escrita em `.env`, frontmatter em comandos e agentes, `os-self-test` como script no CI, manifesto de plugin, reequilíbrio das regras, e 75 testes que acharam 2 bypass reais no hook | [`2026-08-08-v0.5.2-kernel.md`](2026-08-08-v0.5.2-kernel.md) |
| 2026-08-08 | v0.5.1 — pesquisa de equivalentes self-hosted para as 7 lacunas + Supabase e alternativas ao Luma; 90+ repos consultados na API do GitHub, revelando "open core" como terceira armadilha de licença (13 projetos) | [`2026-08-08-v0.5.1-selfhosted-gaps.md`](2026-08-08-v0.5.1-selfhosted-gaps.md) |
| 2026-08-08 | v0.5.0 PR 4 — awesome-selfhosted (1.346 projetos) espelhado em `docs/selfhosted/` sob CC-BY-SA 3.0 com carve-out de licença, shortlist curada por categoria de SaaS, e a pergunta gerenciado-vs-self-hosted no estágio 4.2 | [`2026-08-08-v0.5.0-selfhosted-catalog.md`](2026-08-08-v0.5.0-selfhosted-catalog.md) |
| 2026-08-08 | v0.5.0 PR 2 — Pitch artifact created (none existed) at new stage 2.9, plus the "BP/Pitch online?" question with a mandatory redaction gate; publication added to the privacy rule as a form of processing | [`2026-08-08-v0.5.0-pitch-publication.md`](2026-08-08-v0.5.0-pitch-publication.md) |
| 2026-08-08 | v0.5.0 PR 3 — skill audit: 6 core wizard skills had no frontmatter (invisible to auto-invocation), 10 more had no trigger phrases; 3 overlapping pairs cross-linked; `release-check` converted to a delegation table | [`2026-08-08-v0.5.0-skills-audit.md`](2026-08-08-v0.5.0-skills-audit.md) |
| 2026-08-08 | v0.5.0 PR 1 — WIZARD restructured into 5 phases (1:1 with commit tags), Prototype Lab moved before Product Brief/Technical Plan, fractional stages eliminated, `registry-pick` split into design + stack passes | [`2026-08-08-v0.5.0-wizard-5-phases.md`](2026-08-08-v0.5.0-wizard-5-phases.md) |
| 2026-05-09 | Registry additions — 14 new packs cataloged, 3 refreshed (Phase 2 cadence) | [`2026-05-09-registry-additions.md`](2026-05-09-registry-additions.md) |
| 2026-05-04 | v0.4.5 course vertical — workshop em 3 aulas (Experience Learning Perestroika) + 2 sistemas planejados + easter egg `[STAGE:X]` | [`2026-05-04-v0.4.5-course-vertical.md`](2026-05-04-v0.4.5-course-vertical.md) |
| 2026-05-04 | v0.4.4 repo hardening — branch protection, GitHub Template, WIZARD Stage 0.5 (detach from OS-origin), CONTRIBUTING flow | [`2026-05-04-v0.4.4-repo-hardening.md`](2026-05-04-v0.4.4-repo-hardening.md) |
| 2026-05-01 | v0.4.3 quick wins — ETHOS manifesto, /processize, /grow-sustainably, /multi-ai-review, agents-marketplace tag | [`2026-05-01-v0.4.3-quick-wins.md`](2026-05-01-v0.4.3-quick-wins.md) |
| 2026-04-30 | External Repo Registry framework v0.4.0 — curated on-demand catalog, registry-pick skill, WIZARD Stage 11.5 | [`2026-04-30-registry-framework-v0.4.0.md`](2026-04-30-registry-framework-v0.4.0.md) |
| 2026-04-28 | Vibe Coder Non-Dev Pack v0.3.0 — defensive + active-help layers, real example, CI baseline | [`2026-04-28-vibe-coder-pack-v0.3.0.md`](2026-04-28-vibe-coder-pack-v0.3.0.md) |
| 2026-04-28 | Public release polish v0.2.0 — canonical `.claude/` migration, version reconciliation, sanitization | [`2026-04-28-public-release-polish-v0.2.0.md`](2026-04-28-public-release-polish-v0.2.0.md) |

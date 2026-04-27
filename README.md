# AI Dev Operating System

Day-zero operating system for serious vibe coding and AI-assisted SaaS development.

Clone this repo, open it in your IDE, run Claude Code in the terminal, and let the **Project Genesis Wizard** take you from raw idea to product brief, business plan, prototype lab, sprint roadmap, and first coding sprint.

This repo is not a finished SaaS template. It is the operating layer you put around a new SaaS so AI coding agents do not start from chaos.

---

## Quick start

```bash
git clone https://github.com/lglucas/ai-dev-operating-system.git my-new-saas
cd my-new-saas
```

Open the folder in your IDE. Then run Claude Code in the project terminal and paste:

```txt
Claude, vamos iniciar um novo projeto. Leia primeiro o arquivo START-HERE.md e siga exatamente as instruções dele.
```

Claude should read the repo structure, understand the operating system, and start the Project Genesis Wizard.

---

## Optional local setup scripts

Windows PowerShell:

```powershell
.\scripts\init-project.ps1
```

Mac/Linux/Git Bash:

```bash
chmod +x ./scripts/init-project.sh
./scripts/init-project.sh
```

---

## What this gives you

- A ready-to-use `.claude/` runtime with agents, skills, commands, rules, and settings.
- A single start file: `START-HERE.md`.
- A guided wizard for ideation, research, business planning, review, sprint planning, prototyping, and first implementation.
- Agent workflows for market research, competitor analysis, red team review, technical/security review, coordination, and investor-ready copywriting.
- Documentation layers: `PRODUCT-BRIEF.md`, `BUSINESS-PLAN.md`, `TECHNICAL-PLAN.md`, `SPRINTS.md`, `CHANGELOG.md`, and `session-log/`.
- Security, privacy, changelog, sprint, and coding rules from day zero.
- Optional stack packs for SaaS, Next.js/Supabase, Solana, marketplace products, and other specialized projects.

---

## Core flow

1. Repository comprehension.
2. Friendly opening and user introduction.
3. Raw ideation.
4. Ideation polish and exactly ten strategic questions.
5. Research plan approval.
6. Wave 1: competitor and market research.
7. Wave 2: red team critique.
8. Wave 3: consolidation and BP writing.
9. Business Plan v0.0.1.
10. Human review.
11. Business Plan v0.0.2 with impact review.
12. Product Brief and Technical Plan.
13. 14–20 sprint roadmap.
14. Prototype Lab with 3 HTML prototype directions.
15. Sprint 0 / Sprint 1 implementation.

The wizard intentionally prevents coding too early.

---

## Documentation layers

| Document | Purpose |
|---|---|
| `START-HERE.md` | First file Claude reads. |
| `WIZARD.md` | Canonical wizard flow. |
| `docs/product/PRODUCT-BRIEF.md` | Operational product understanding. |
| `docs/business/BUSINESS-PLAN.md` | Business/investor/hackathon document. |
| `docs/technical/TECHNICAL-PLAN.md` | Stack, architecture, data, security, test plan. |
| `docs/SPRINTS.md` | Detailed sprint roadmap. |
| `CHANGELOG.md` | What changed by version. |
| `session-log/` | Why decisions were made. |
| `knowledge-base/` | Research outputs and source summaries. |
| `prototype-lab/` | Disposable HTML prototypes before building the real app. |

---

## Credits and upstream sources

This project is based on real-world AI-assisted development workflows and informed by several open-source repositories and public specs. See `UPSTREAM-SOURCES.md`, `ATTRIBUTIONS.md`, and `docs/origin-map.md`.

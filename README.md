# 🚀 AI Dev Operating System

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Claude Code Ready](https://img.shields.io/badge/Claude%20Code-ready-7B61FF)](START-HERE.md)
[![Status](https://img.shields.io/badge/status-v0.3.0%20vibe--coder--pack-green)](RELEASE-NOTES-v0.3.0.md)
[![Made for SaaS](https://img.shields.io/badge/made%20for-SaaS%20builders-111827)](#what-this-gives-you)

**Day-zero operating system for serious vibe coding and AI-assisted SaaS development.**

Clone this repo, open it in your IDE, run Claude Code in the terminal, and let the **Project Genesis Wizard** take you from raw idea to product brief, business plan, prototype lab, sprint roadmap, and first coding sprint.

This repo is not a finished SaaS template. It is the **operating layer** you put around a new SaaS so AI coding agents do not start from chaos.

---

## ⚡ Quick start

```bash
git clone https://github.com/lglucas/ai-dev-operating-system.git my-new-saas
cd my-new-saas
```

Open the folder in your IDE. Then run Claude Code in the project terminal and paste:

```txt
Claude, vamos iniciar um novo projeto. Leia primeiro o arquivo START-HERE.md e siga exatamente as instruções dele.
```

Claude should read the repo structure, understand the operating system, and start the **Project Genesis Wizard**.

📘 Need help setting up your IDE, Git, or Claude Code? Start here: [`docs/installation.md`](docs/installation.md).

---

## 🧠 What this gives you

- A ready-to-use `.claude/` runtime with agents, skills, commands, rules, and settings.
- A single start file: [`START-HERE.md`](START-HERE.md).
- A guided wizard for ideation, research, business planning, review, sprint planning, prototyping, and first implementation.
- Agent workflows for market research, competitor analysis, red-team critique, technical/security review, coordination, and investor-ready copywriting.
- Documentation layers: `PRODUCT-BRIEF.md`, `BUSINESS-PLAN.md`, `TECHNICAL-PLAN.md`, `SPRINTS.md`, `CHANGELOG.md`, and `session-log/`.
- A disposable `prototype-lab/` for 3 HTML prototype directions before building the real app.
- Security, privacy, changelog, sprint, and coding rules from day zero.
- Optional stack packs for SaaS, Next.js/Supabase, Solana, marketplace products, and other specialized projects.

---

## 📦 External Repo Registry (v0.4.0)

A curated, on-demand catalog of trusted external repository packs that can plug into any project running this OS. Instead of pre-installing everything, the WIZARD recommends packs per project based on stack, domain, and compliance.

| Layer | What it does |
|---|---|
| [`docs/registry/INDEX.md`](docs/registry/INDEX.md) | Sortable master table of every pack — license, status, tags, last reviewed. |
| [`docs/registry/packs/`](docs/registry/packs) | One-pager per repo: when to install, when NOT to install, install command, fit signals, conflicts. |
| [`docs/registry/tags/`](docs/registry/tags) | Auxiliary indexes by tag (`security`, `design`, `foundations`, `stack-pack`, `ecosystem`). |
| [`/registry-pick`](.claude/commands/registry-pick.md) | Slash command — reads the registry and outputs a prioritized recommendation for the current project. Never installs. |
| [`registry-pick` skill](.claude/skills/registry-pick/SKILL.md) | Powers the slash command and `WIZARD.md` Stage 11.5. |

**Adding new packs is one-pager-fast** — copy the template in [`docs/registry/README.md`](docs/registry/README.md), fill the fields, link from `INDEX.md` and the relevant tag file. Cross-link in `UPSTREAM-SOURCES.md` only if the pack also influenced this OS itself.

> See [`UPSTREAM-SOURCES.md`](UPSTREAM-SOURCES.md) for the origin/audit map of what built this OS — that's a different question from "what should I install on top of THIS project". The registry answers the latter.

---

## 🧰 Vibe Coder Non-Dev Pack (v0.3.0)

A coordinated set of agents, skills, and templates designed for **non-developers building SaaS with AI**. Two layers, both opt-in but on by default:

### Defensive layer — protects you before things go wrong

| Component | What it does |
|---|---|
| [`.env.example`](.env.example) | Documents every secret your app may need with vibe-coder explanations. |
| [`CLAUDE.local.md.example`](CLAUDE.local.md.example) | Personal overrides without leaking to the team. |
| [`secrets-discipline`](.claude/skills/secrets-discipline/SKILL.md) | Blocks accidental commits of API keys. |
| [`cost-watchdog`](.claude/skills/cost-watchdog/SKILL.md) | Flags expensive choices (Opus loops, paid tiers, scale-poor DB) before they ship. |
| [`plain-portuguese-explainer`](.claude/skills/plain-portuguese-explainer/SKILL.md) | Translates jargon and errors into plain Portuguese with non-tech analogies. |
| [`daily-standup`](.claude/skills/daily-standup/SKILL.md) | 4-bullet "where we left off" briefing every session. |
| [`os-self-test`](.claude/skills/os-self-test/SKILL.md) | Verifies the OS is internally coherent. |
| [`.github/`](.github) | PR + issue templates with vibe-coder dimension and CI workflow enforcing canon. |

### Active-help layer — helps you when something happens

| Component | Activates when |
|---|---|
| [`bug-triage-agent`](.claude/agents/bug-triage-agent.md) | Build breaks, deploy crashes, "deu erro" / "quebrou". |
| [`rollback-safe`](.claude/skills/rollback-safe/SKILL.md) | "desfaz isso" / "volta o que você fez". |
| [`verify-build-works`](.claude/skills/verify-build-works/SKILL.md) | After every non-trivial edit, before commits, before push. |
| [`usage-monitor`](.claude/skills/usage-monitor/SKILL.md) | "tô gastando muito" / "quanto custa" / weekly post-launch. |
| [`launch-agent`](.claude/agents/launch-agent.md) | "vamos lançar" / "tá pronto pra mostrar". |
| [`deploy-vercel-supabase`](.claude/skills/deploy-vercel-supabase/SKILL.md) | "vamos publicar" / "como coloca no ar". |
| [`first-100-users`](.claude/skills/first-100-users/SKILL.md) | "ninguém tá usando" / post-launch acquisition. |
| [`legal-compliance-agent`](.claude/agents/legal-compliance-agent.md) | Before public launch, before collecting user data, before charging. |

> See [`examples/nextjs-supabase-saas/`](examples/nextjs-supabase-saas/README.md) for the canonical layout the wizard generates from.

---

## 🧭 Core flow

1. Repository comprehension.
2. Friendly opening and user introduction.
3. Raw ideation: “Tell me about your project.”
4. Ideation polish and exactly 10 strategic questions.
5. Research plan approval.
6. Wave 1: competitor and market research.
7. Wave 2: red-team critique.
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

## 🧙 Project Genesis Wizard

The central workflow is defined in [`WIZARD.md`](WIZARD.md).

It tells Claude to guide the user from raw idea to structured execution without skipping steps. The wizard is intentionally simple for the user and strict for the AI.

The user should only need to start with:

```txt
Me fale sobre teu projeto.
```

Behind the scenes, Claude is instructed to create and maintain:

```txt
docs/product/PRODUCT-BRIEF.md
docs/business/BUSINESS-PLAN.md
docs/technical/TECHNICAL-PLAN.md
docs/SPRINTS.md
CHANGELOG.md
session-log/
knowledge-base/
prototype-lab/
```

---

## 🤖 Agents

The `.claude/agents/` layer defines specialized AI roles.

Core roles include:

- **Coordinator Agent** — consolidates decisions and checks coherence.
- **Dev/Product Agent** — reviews product and implementation decisions.
- **Research Agent** — supports market, competitor, technical, and source-backed research.
- **Devil’s Advocate Agent** — attacks weak assumptions and exposes contradictions.
- **Business Red Team Agent** — challenges pricing, GTM, finance, and operational logic.
- **Technical Red Team Agent** — challenges architecture, security, privacy, and implementation complexity.
- **Copywriter Agent** — turns validated material into a strong BP/readable narrative.
- **Competitor Research Agent** — finds competitors, narrows them down, and extracts strategic signals.
- **Market Research Agent** — validates the niche using reports, official sources, benchmarks, and credible references.

---

## 🛠️ Skills

The `.claude/skills/` layer contains reusable workflows.

Important skills include:

- **project-genesis** — drives the full wizard.
- **sprint-management** — opens/closes sprints and maintains sprint docs.
- **feature-scaffold** — creates feature structure with rules and headers.
- **business-plan-impact-review** — checks downstream impact after BP edits.
- **prototype-lab** — creates three disposable HTML prototype directions.
- **privacy-audit** — reviews privacy/LGPD-style risks.
- **secrets-scan** — enforces secret scanning habits.
- **release-check** — checks readiness before tagging/release.
- **decision-log** — records why decisions were made.

---

## 📚 Documentation layers

| Document | Purpose |
|---|---|
| `START-HERE.md` | First file Claude reads. |
| `WIZARD.md` | Full Project Genesis Wizard flow. |
| `docs/product/PRODUCT-BRIEF.md` | Operational product understanding. |
| `docs/business/BUSINESS-PLAN.md` | Business/investor/hackathon document. |
| `docs/technical/TECHNICAL-PLAN.md` | Stack, architecture, data, security, test plan. |
| `docs/SPRINTS.md` | Detailed sprint roadmap. |
| `CHANGELOG.md` | What changed by version. |
| `session-log/` | Why decisions were made. |
| `knowledge-base/` | Research outputs and source summaries. |
| `prototype-lab/` | Disposable HTML prototypes before building the real app. |

---

## 🧪 Prototype Lab

Before building the production app, the wizard creates a separate prototype space:

```txt
prototype-lab/
├── index.html
├── prototype-a/
├── prototype-b/
├── prototype-c/
└── shared/
```

Rules:

- Use plain HTML/CSS/JS.
- Use the same mock data across all prototypes.
- Make the prototypes visually distinct.
- Match the personas and positioning from the Product Brief and Business Plan.
- Do not mix prototype files with production source code.

---

## 🧱 Golden rules

These rules are intentionally strict:

- Do not code before the wizard reaches the correct phase.
- Keep separation of concerns.
- Keep source-code files small, ideally under 200 lines.
- Add clear headers to source files.
- Use stable technology, not alpha/beta stacks.
- Never hardcode secrets.
- Document decisions in session logs.
- Keep changelog and sprint docs updated.
- Use red-team review before major strategic decisions.
- Check downstream impact after Business Plan changes.

---

## 🧩 Stack packs

The repo is generic by default, but can be extended through stack packs:

```txt
stack-packs/
├── generic-saas/
├── nextjs-supabase-saas/
├── solana/
└── marketplace-saas/
```

The first-class target is a SaaS project, but the system can be adapted for web3, marketplaces, AI tools, legaltech, fintech, healthtech, and other product types.

---

## 🔐 Security posture

This repository is not a substitute for professional security review. It provides a baseline for safer AI-assisted development:

- secrets scanning habits;
- security review agents;
- dependency and release checks;
- privacy audit workflow;
- documentation of security decisions;
- optional references to security-focused external skills.

See [`SECURITY.md`](SECURITY.md) and [`docs/security-baseline.md`](docs/security-baseline.md).

---

## 🙌 Credits and upstream sources

This project is based on real-world AI-assisted development workflows and informed by several open-source repositories and public specs.

Primary references include:

- [`anthropics/skills`](https://github.com/anthropics/skills)
- [`affaan-m/everything-claude-code`](https://github.com/affaan-m/everything-claude-code)
- [`nextlevelbuilder/ui-ux-pro-max-skill`](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)
- [`VoltAgent/awesome-design-md`](https://github.com/VoltAgent/awesome-design-md)
- [`trailofbits/skills`](https://github.com/trailofbits/skills)
- [`solanabr/solana-claude`](https://github.com/solanabr/solana-claude)
- [`Keep a Changelog`](https://keepachangelog.com/)
- [`Conventional Commits`](https://www.conventionalcommits.org/en/v1.0.0/)
- [`Semantic Versioning`](https://semver.org/)

Full attribution and source mapping:

- [`UPSTREAM-SOURCES.md`](UPSTREAM-SOURCES.md)
- [`ATTRIBUTIONS.md`](ATTRIBUTIONS.md)
- [`docs/origin-map.md`](docs/origin-map.md)

---

## 👤 Author / maintainer

Created and maintained by **Lucas Galvão**.

- Website: https://lucasgalvao.com.br
- LinkedIn: https://www.linkedin.com/in/lucasgalvao/
- X/Twitter: https://x.com/lg_lucas
- GitHub: https://github.com/lglucas

Selected projects:

- Complian.cc — https://complian.cc
- ASH — https://ash.app.br
- Tokenfy — https://tokenfy.me
- Boring Co — https://github.com/lglucas/boringco *(private/internal project reference; may not be publicly accessible)*

---

## 📄 License

MIT License. See [`LICENSE`](LICENSE).

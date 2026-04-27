# 🚀 AI Dev Operating System

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Project Stage](https://img.shields.io/badge/stage-early%20public%20starter-blue.svg)](#)
[![Built for Claude Code](https://img.shields.io/badge/built%20for-Claude%20Code-191919.svg)](START-HERE.md)
[![Vibe Coding](https://img.shields.io/badge/vibe%20coding-structured%20not%20chaotic-purple.svg)](#)
[![SaaS Starter](https://img.shields.io/badge/use%20case-SaaS%20starter-green.svg)](#)

> **Day-zero operating system for serious vibe coding and AI-assisted SaaS development.**

Clone this repo, open it in your IDE, run Claude Code in the terminal, and let the **Project Genesis Wizard** take you from raw idea to product brief, business plan, prototype lab, sprint roadmap, and first coding sprint.

This is not a finished SaaS template. It is the **operating layer** you put around a new SaaS project so AI coding agents do not start from chaos.

---

## 🧠 What this is

**AI Dev Operating System** is a reusable project-starting framework for founders, builders, indie hackers, hackathon teams, and small technical teams using AI coding agents.

It gives your project a complete operating structure before the first serious line of application code is written:

- 🧭 a single first prompt through [`START-HERE.md`](START-HERE.md);
- 🤖 a ready-to-use `.claude/` runtime with agents, skills, commands, rules, and settings;
- 🧱 a Project Genesis Wizard that guides the user from idea to implementation;
- 📚 documentation layers for product, business, technical planning, sprints, changelog, knowledge base, and session logs;
- 🔎 market research and competitor research workflows;
- 🧨 red-team review workflows for business, technical, security, and strategy risks;
- 🎨 prototype lab workflow with three HTML/UI directions before building the real app;
- 🔐 security, privacy, and quality gates from day zero;
- 🏃 sprint planning designed for AI-assisted development instead of slow traditional delivery.

The goal is simple:

> **Stop starting every AI-coded SaaS from zero.**

---

## ⚡ Quick start

### 1. Clone this repo

```bash
git clone https://github.com/lglucas/ai-dev-operating-system.git my-new-saas
cd my-new-saas
```

### 2. Open it in your IDE

Recommended options:

- [Google Antigravity](https://antigravity.google/)
- [VS Code](https://code.visualstudio.com/)
- [Cursor](https://cursor.com/)
- [Windsurf](https://windsurf.com/editor)
- Any IDE/editor with a usable terminal

### 3. Install and run Claude Code

Follow the detailed guide:

➡️ **[docs/installation.md](docs/installation.md)**

### 4. Start Claude Code in the project terminal

```bash
claude
```

### 5. Paste the first prompt

```txt
Claude, vamos iniciar um novo projeto. Leia primeiro o arquivo START-HERE.md e siga exatamente as instruções dele.
```

Claude should read the repository structure, understand the operating system, load the rules, agents, skills, commands, and then start the Project Genesis Wizard.

---

## 🧭 Core flow

The wizard intentionally prevents coding too early.

It guides the project through this flow:

1. Repository comprehension.
2. Friendly opening and user introduction.
3. Raw ideation.
4. Ideation polishing and ten strategic questions.
5. Research plan approval.
6. **Wave 1:** competitor research and market research.
7. **Wave 2:** red-team critique.
8. **Wave 3:** consolidation and business plan writing.
9. Business Plan `v0.0.1`.
10. Human review.
11. Business Plan `v0.0.2` with impact review.
12. Product Brief and Technical Plan.
13. Detailed 14–20 sprint roadmap.
14. Prototype Lab with three HTML prototype directions.
15. Sprint 0 / Sprint 1 implementation.

The idea is not to make the process bureaucratic. The idea is to make vibe coding **fast because it is structured**.

---

## 📦 What this gives you

### Runtime structure

```txt
.claude/
├── agents/
├── commands/
├── rules/
├── skills/
├── settings.json
└── settings.example.json
```

### Project documents

```txt
START-HERE.md
WIZARD.md
CLAUDE.md
README.md
CHANGELOG.md
UPSTREAM-SOURCES.md
ATTRIBUTIONS.md
```

### Documentation layers

```txt
docs/product/PRODUCT-BRIEF.md
docs/business/BUSINESS-PLAN.md
docs/technical/TECHNICAL-PLAN.md
docs/SPRINTS.md
session-log/
knowledge-base/
prototype-lab/
```

### Operating workflows

- Product ideation.
- Business plan generation.
- Competitor research.
- Market research.
- Red-team critique.
- Business-plan impact review.
- Sprint planning.
- Prototype generation.
- Security and compliance planning.
- Changelog and session-log discipline.

---

## 🧙 Project Genesis Wizard

The **Project Genesis Wizard** is the core of this repo.

It is intentionally simple for the user and strict for Claude.

The user only needs to start with:

```txt
Me fale sobre teu projeto.
```

Behind the scenes, Claude must follow [`WIZARD.md`](WIZARD.md) and cannot skip phases. It must not simplify the workflow, jump directly into coding, or produce a shallow plan.

The wizard produces, at minimum:

```txt
docs/product/PRODUCT-BRIEF.md
docs/business/BUSINESS-PLAN.md
docs/technical/TECHNICAL-PLAN.md
docs/SPRINTS.md
CHANGELOG.md
session-log/YYYY-MM-DD-project-genesis.md
knowledge-base/
prototype-lab/
```

---

## 🤖 Agent waves

The business-planning phase is based on three waves of AI agents.

### Wave 1 — Research Team

- **Competitor Research Agent**
  - Finds 20 direct or adjacent competitors.
  - Narrows them down to the 5 most relevant.
  - Studies positioning, features, pricing, UX, reviews, complaints, and gaps.

- **Market Research Agent**
  - Studies the niche, market size, trends, adoption, reports, public data, and reliable sources.
  - Builds the initial `knowledge-base/`.

### Wave 2 — Red Team

- **Devil's Advocate Agent**
  - Attacks weak assumptions, contradictions, fake certainty, and strategic blind spots.

- **Business Red Team Agent**
  - Reviews pricing, CAC, LTV, margins, sales channels, revenue model, and operational risks.

- **Technical Red Team Agent**
  - Reviews stack, architecture, security, privacy, complexity, and implementation risk.

### Wave 3 — Consolidation Team

- **Coordinator Agent**
  - Resolves conflicts between agents.
  - Chooses the best path.
  - Consolidates the decision logic.

- **Copywriter / BP Agent**
  - Turns the material into a strong business plan for hackathons, investors, accelerators, partners, or internal strategy.

---

## 🧾 Product Brief vs Business Plan

This repo intentionally separates the **Product Brief** from the **Business Plan**.

| Document | Purpose |
|---|---|
| `PRODUCT-BRIEF.md` | Operational product understanding for the builder and coding agents. |
| `BUSINESS-PLAN.md` | Strategic/business document for investors, hackathons, partners, or decision-makers. |
| `TECHNICAL-PLAN.md` | Stack, architecture, data, security, integrations, testing, and implementation constraints. |
| `SPRINTS.md` | Detailed roadmap from prototype to MVP and future phases. |

This matters because a good investor-facing BP is not always the best document to guide coding agents.

---

## 🎨 Prototype Lab

Before building the real app, the wizard creates a disposable prototype environment.

The recommended structure is:

```txt
prototype-lab/
├── index.html
├── shared/
│   └── mock-data.js
├── prototype-a/
│   ├── index.html
│   └── style.css
├── prototype-b/
│   ├── index.html
│   └── style.css
└── prototype-c/
    ├── index.html
    └── style.css
```

Rules:

- The prototypes must be simple HTML/CSS/JS.
- They must run locally without backend setup.
- They must use the same mock data.
- They must show the same core screens/flows.
- They must have meaningfully different UI/UX directions.
- They must reflect the personas and strategy defined in the Product Brief and Business Plan.

The goal is to approve a product direction before contaminating the real codebase.

---

## 🏗️ Sprint philosophy

The recommended roadmap has **14 to 20 weekly sprints**, but the real goal is not calendar precision.

The goal is to give AI coding agents a robust, ordered implementation map.

Typical macro flow:

```txt
Sprint -1: Prototype Lab
Sprint 0: Repository setup, project constitution, infra decisions
Sprint 1: Foundation
Sprint 2–N: MVP features
Later sprints: Phase 1 complete product
Future sprints: Phase 2 expansion
```

Every sprint should include:

- objective;
- scope;
- Definition of Done;
- files/folders likely to change;
- agents to invoke;
- skills to use;
- tests/scripts to run;
- risks;
- expected outputs;
- changelog/session-log requirements.

---

## 🔐 Rules of gold

This repo inherits a few non-negotiable rules from real-world usage:

1. **Separation of concerns.**
2. **Maximum 200 lines per code file** whenever realistically possible.
3. **Mandatory headers in source files** with purpose, version, and sprint context.
4. **No hardcoded secrets.**
5. **Stable/LTS technologies only** unless explicitly justified.
6. **No coding before the planning foundation is ready.**
7. **Research before claims.**
8. **Every material decision should be reflected in docs, changelog, and session logs.**
9. **Business-plan edits must be checked for downstream impact.**
10. **Prototype before committing to the final UI direction.**

---

## 🧩 Optional stack packs

This repo is stack-aware but not locked to one stack.

Optional packs may be added for:

- generic SaaS;
- Next.js + Supabase SaaS;
- marketplace SaaS;
- AI chatbot products;
- Solana/web3 projects;
- legaltech/compliance-heavy projects;
- internal tools.

See:

- [`docs/stack-packs.md`](docs/stack-packs.md)
- [`stack-packs/`](stack-packs/)

---

## 🛠️ Local setup scripts

Optional helper scripts are provided.

Windows PowerShell:

```powershell
.\scripts\init-project.ps1
```

Mac/Linux/Git Bash:

```bash
chmod +x ./scripts/init-project.sh
./scripts/init-project.sh
```

These scripts are optional. The main workflow is still Claude Code + `START-HERE.md`.

---

## 📚 Documentation map

| Document | Purpose |
|---|---|
| [`START-HERE.md`](START-HERE.md) | First file Claude reads. |
| [`WIZARD.md`](WIZARD.md) | Full Project Genesis Wizard instructions. |
| [`CLAUDE.md`](CLAUDE.md) | Operating constitution for this repo. |
| [`docs/installation.md`](docs/installation.md) | Step-by-step installation and first run guide. |
| [`docs/product/PRODUCT-BRIEF.md`](docs/product/PRODUCT-BRIEF.md) | Operational product definition. |
| [`docs/business/BUSINESS-PLAN.md`](docs/business/BUSINESS-PLAN.md) | Business/investor/hackathon plan. |
| [`docs/technical/TECHNICAL-PLAN.md`](docs/technical/TECHNICAL-PLAN.md) | Stack, architecture, security, testing. |
| [`docs/SPRINTS.md`](docs/SPRINTS.md) | Sprint roadmap. |
| [`CHANGELOG.md`](CHANGELOG.md) | What changed by version. |
| [`session-log/`](session-log/) | Why decisions were made. |
| [`knowledge-base/`](knowledge-base/) | Research outputs and source summaries. |
| [`prototype-lab/`](prototype-lab/) | Disposable prototypes. |
| [`UPSTREAM-SOURCES.md`](UPSTREAM-SOURCES.md) | Upstream sources and origin map. |
| [`ATTRIBUTIONS.md`](ATTRIBUTIONS.md) | Credits and attribution. |

---

## 🙏 Credits and upstream sources

This project is based on real-world AI-assisted development workflows and informed by several open-source repositories, public specs, and agentic development patterns.

Key references include:

- [Anthropic Skills](https://github.com/anthropics/skills)
- [everything-claude-code](https://github.com/affaan-m/everything-claude-code)
- [Trail of Bits Skills](https://github.com/trailofbits/skills)
- [UI UX Pro Max Skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)
- [awesome-design-md](https://github.com/VoltAgent/awesome-design-md)
- [getdesign.md](https://getdesign.md)
- [solana-claude](https://github.com/solanabr/solana-claude)
- [CIS Hardening Guide](https://github.com/Jacob-Hegy/CIS-Hardening-Guide)
- [YARA Style Guide](https://github.com/Neo23x0/YARA-Style-Guide)
- [Keep a Changelog](https://keepachangelog.com/)
- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
- [Semantic Versioning](https://semver.org/)

See:

- [`UPSTREAM-SOURCES.md`](UPSTREAM-SOURCES.md)
- [`ATTRIBUTIONS.md`](ATTRIBUTIONS.md)
- [`docs/origin-map.md`](docs/origin-map.md)

---

## 📜 License

MIT License.

Use it, adapt it, fork it, improve it.

---

## 🧪 Current status

This repo is an early public starter. It is already usable as a project operating system, but the framework will continue evolving with better stack packs, more examples, stronger scripts, and improved project-generation flows.


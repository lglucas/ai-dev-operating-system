# 🚀 AI Dev Operating System

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Claude Code Ready](https://img.shields.io/badge/Claude%20Code-ready-7B61FF)](START-HERE.md)
[![Status](https://img.shields.io/badge/status-v0.5.3%20codemap-green)](CHANGELOG.md)
[![Made for SaaS](https://img.shields.io/badge/made%20for-SaaS%20builders-111827)](#what-this-gives-you)

**Day-zero operating system for serious vibe coding and AI-assisted SaaS development.**

Clone this repo, open it in your IDE, run Claude Code in the terminal, and let the **Project Genesis Wizard** take you from raw idea to business plan, prototype lab, product brief, technical plan, sprint roadmap, and first coding sprint.

This repo is not a finished SaaS template. It is the **operating layer** you put around a new SaaS so AI coding agents do not start from chaos.

---

## ⚡ Quick start

> 🎯 **Recommended path — "Use this template":**
>
> 1. Click the green **"Use this template"** button at the top of [this repo on GitHub](https://github.com/lglucas/ai-dev-operating-system).
> 2. Choose **"Create a new repository"**, name it (e.g. `my-new-saas`), and pick Private if it's an early-stage project.
> 3. Clone YOUR new repo:
>    ```bash
>    git clone https://github.com/SEU-USUARIO/my-new-saas.git
>    cd my-new-saas
>    ```
>
> This gives you a fresh repo under your account, with `origin` already pointing to YOUR repository — no accidental commits to the OS repo.

<details>
<summary>Fallback: <code>git clone</code> directly (only if you can't use the template button)</summary>

```bash
git clone https://github.com/lglucas/ai-dev-operating-system.git my-new-saas
cd my-new-saas
```

⚠️ This points your local `origin` to **our** OS repo. **Before any commit**, run the detach script:

```bash
bash scripts/detach-os.sh        # Linux/macOS
powershell scripts/detach-os.ps1 # Windows
```

The script walks you through detaching `origin` and (optionally) re-initializing Git. WIZARD Stage 1.2 also handles this educationally on first run.

</details>

After you have your own repo set up, open the folder in your IDE and run Claude Code in the project terminal. Paste:

```txt
Claude, vamos iniciar um novo projeto. Leia primeiro o arquivo START-HERE.md e siga exatamente as instruções dele.
```

Claude should read the repo structure, understand the operating system, and start the **Project Genesis Wizard** — including Stage 1.2 (detach from OS-origin) if you used the fallback `git clone` path.

> **Também é um plugin.** Desde a v0.5.2 o repo carrega [`.claude-plugin/plugin.json`](.claude-plugin/plugin.json), então dá para instalá-lo como plugin do Claude Code em vez de clonar — útil quando você quer as skills e os hooks dentro de um projeto que já existe, sem trazer a estrutura de documentos junto.

📘 Need help setting up your IDE, Git, GitHub account, or Claude Code? Start here: [`docs/installation.md`](docs/installation.md).

🤝 Want to contribute back to the OS itself (bug fix, new skill, registry pack)? See [`CONTRIBUTING.md`](CONTRIBUTING.md). The `main` branch is protected — all changes go through PR.

---

## 🧠 What this gives you

- A ready-to-use `.claude/` runtime: **28 skills, 12 agents, 11 commands, 12 rules** — and **hooks that block secret commits mechanically**, not by asking nicely.
- A single start file: [`START-HERE.md`](START-HERE.md).
- A guided wizard for ideation, research, business planning, review, sprint planning, prototyping, and first implementation.
- Agent workflows for market research, competitor analysis, red-team critique, technical/security review, coordination, and investor-ready copywriting.
- Documentation layers: `PRODUCT-BRIEF.md`, `BUSINESS-PLAN.md`, `TECHNICAL-PLAN.md`, `SPRINTS.md`, `CODEMAP.md`, `CHANGELOG.md`, and `session-log/`.
- A disposable `prototype-lab/` for 3 HTML prototype directions — built before the Product Brief and Technical Plan, which are then reverse-engineered from the direction you approve.
- Security, privacy, changelog, sprint, and coding rules from day zero.
- Optional stack packs for SaaS, Next.js/Supabase, Solana, marketplace products, and other specialized projects.
- A **1.346-project self-hosted catalogue**, so "managed or self-hosted?" is a real question with real answers.

---

## 🔑 Hooks — the kernel (v0.5.2)

Everything else in this OS is **instruction**: rules the agent reads, skills it invokes, a wizard it follows. It works because the model cooperates.

Hooks are the one layer that **does not depend on cooperation**.

| Hook | Fires on | Blocks |
|---|---|---|
| [`block-secret-commit.js`](.claude/hooks/block-secret-commit.js) | `Bash` → any `git commit` | a diff that adds something credential-shaped, or stages `.env`/`.pem`/`.key` |
| [`protect-env-files.js`](.claude/hooks/protect-env-files.js) | `Write`, `Edit`, `MultiEdit`, `NotebookEdit` | writing into a real `.env` (`.env.example` allowed) |

Patterns require the **full token shape**, not the prefix — otherwise the hook would block committing `.claude/rules/secrets.md`, the file that documents those prefixes. The hook **never prints the matched value**: an alert that echoes a credential spreads it instead of containing it.

Both fail **open** on a malformed payload, and each has a documented escape hatch. Details and the list of what deliberately did *not* become a hook: [`.claude/hooks/README.md`](.claude/hooks/README.md).

Requires Node. Without it the hooks are skipped and the OS still works — it just loses the kernel.

---

## 🏠 Self-hosted catalogue (v0.5.0)

The Technical Plan (stage 4.2) asks whether you want managed platforms, self-hosted, or hybrid. That question is only honest if there is a concrete answer on the self-hosted side.

| File | What |
|---|---|
| [`docs/selfhosted/shortlist-saas.md`](docs/selfhosted/shortlist-saas.md) | **Start here.** ~20 categories a SaaS founder actually replaces, framed as "you pay for X → alternative Y" |
| [`docs/selfhosted/gaps.md`](docs/selfhosted/gaps.md) | What awesome-selfhosted does **not** cover — auth, uptime, CI/CD, backup, PaaS, VPN, events — researched separately and ranked by GitHub stars |
| [`docs/selfhosted/INDEX.md`](docs/selfhosted/INDEX.md) | All **1.346 projects**, 12 categories, generated from upstream |

⚠️ The mirrored data is **CC-BY-SA 3.0**, not MIT like the rest of this OS. The carve-out is explained in [`docs/selfhosted/README.md`](docs/selfhosted/README.md).

The catalogue also flags three kinds of licence trap — copyleft, source-available, and **open core**, where SSO and audit logs live in the paid edition.

---

## 📦 External Repo Registry (v0.4.0)

A curated, on-demand catalog of trusted external repository packs that can plug into any project running this OS. Instead of pre-installing everything, the WIZARD recommends packs per project based on stack, domain, and compliance.

| Layer | What it does |
|---|---|
| [`docs/registry/INDEX.md`](docs/registry/INDEX.md) | Sortable master table of every pack — license, status, tags, last reviewed. |
| [`docs/registry/packs/`](docs/registry/packs) | One-pager per repo: when to install, when NOT to install, install command, fit signals, conflicts. |
| [`docs/registry/tags/`](docs/registry/tags) | Auxiliary indexes by tag (`security`, `design`, `foundations`, `stack-pack`, `ecosystem`). |
| [`/registry-pick`](.claude/commands/registry-pick.md) | Slash command — reads the registry and outputs a prioritized recommendation for the current project. Never installs. |
| [`registry-pick` skill](.claude/skills/registry-pick/SKILL.md) | Powers the slash command and `WIZARD.md` Stages 3.1 (design packs) and 4.3 (stack packs). |

**Adding new packs is one-pager-fast** — copy the template in [`docs/registry/README.md`](docs/registry/README.md), fill the fields, link from `INDEX.md` and the relevant tag file. Cross-link in `UPSTREAM-SOURCES.md` only if the pack also influenced this OS itself.

> See [`UPSTREAM-SOURCES.md`](UPSTREAM-SOURCES.md) for the origin/audit map of what built this OS — that's a different question from "what should I install on top of THIS project". The registry answers the latter.

---

## 🌱 Quick wins (v0.4.3)

A small batch of cross-cutting improvements identified during the v0.4.2 comparison study against `gstack` and `slavingia/skills`:

| Component | What it does |
|---|---|
| [`ETHOS.md`](ETHOS.md) | One-page manifesto. Every rule, agent, skill, and command in this OS must trace back to it. |
| [`/processize`](.claude/commands/processize.md) | Codify a manually-validated workflow into a documented, partially-automatable process. Validate-then-automate, never the reverse. |
| [`/grow-sustainably`](.claude/commands/grow-sustainably.md) | Plan post-100-users growth without burning out the founder, the budget, or the user base. Successor to `first-100-users`. |
| [`/multi-ai-review`](.claude/commands/multi-ai-review.md) | Cross-review a hard-to-reverse decision through 2–4 independent reviewer roles, then reconcile disagreements before committing. |
| [`#agents-marketplace`](docs/registry/tags/agents-marketplace.md) | New registry tag surfacing curated skill bundles (gstack, slavingia-skills, antigravity-awesome-skills, anthropics-skills, and others). |

Architectural items (plugin manifest, trust tiers, parallel sprint orchestration, marketplace migration) are deferred to v0.5 — see the v0.5 audit trail in `session-log/`.

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

The wizard runs in **5 phases**. Phases are the handle you remember; the stages inside them are just ordering.

| Phase | What happens | Commit tag |
|---|---|---|
| **1 — Largada** | Repo comprehension → detach from OS-origin → "Me fale sobre teu projeto." | `[STAGE:LARGADA]` |
| **2 — Ideação** | Raw ideation → 10 strategic questions → research plan approval → Wave 1 (market + competitors) → Wave 2 (red team) → Wave 3 (consolidation + BP v0.0.1) → human review → **BP v0.0.2** | `[STAGE:IDEACAO]` |
| **3 — Protótipo** | Design pack pick → **Prototype Lab: 3 HTML directions** (brand, color, UI, UX) → direction approved + design tokens extracted | `[STAGE:PROTOTIPO]` |
| **4 — Documentação** | **Product Brief** and **Technical Plan reverse-engineered from the approved prototype** → stack pack pick → 14–20 sprint roadmap | `[STAGE:DOCUMENTACAO]` |
| **5 — Chegada** | Sprint 0 / Sprint 1 implementation | `[STAGE:CHEGADA]` |

The wizard intentionally prevents coding too early.

**The prototype comes before the spec, on purpose.** Phase 3 makes the product visible — three real directions you can click — and Phase 4 writes the Product Brief and Technical Plan from what is actually there. A spec written against a prototype names the gaps (empty states, errors, permissions) that a spec written against a paragraph quietly invents. Full rationale in [`WIZARD.md`](WIZARD.md#why-phase-3-comes-before-phase-4).

The five phases map 1:1 onto the commit-tag convention in [`.claude/rules/wizard-stage-tags.md`](.claude/rules/wizard-stage-tags.md), so progress is inferable straight from git history.

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
Phase 2  knowledge-base/                          ← Wave 1, before the BP
         docs/business/BUSINESS-PLAN.md
         docs/business/PITCH.md
Phase 3  docs/technical/registry-pick-design.md   ← 3.1, before prototyping
         prototype-lab/
         docs/product/DESIGN-DIRECTION.md
Phase 4  docs/product/PRODUCT-BRIEF.md
         docs/technical/TECHNICAL-PLAN.md
         docs/technical/registry-pick.md          ← 4.3, before the roadmap
         docs/SPRINTS.md
Phase 5  CODEMAP.md                               ← generated, once code exists
always   CHANGELOG.md
         session-log/
```

That is the order the wizard produces them in. `CHANGELOG.md` and `session-log/` are maintained throughout every phase, not written at the end. `CODEMAP.md` cannot exist earlier — there is no code to map before Phase 5 — but from then on it is regenerated whenever the file list, a `Purpose:` header, or a line count changes — which, since the map stores exact counts, is most edits.

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

The `.claude/skills/` layer contains **28 reusable workflows**. Full inventory grouped by job: [`docs/skill-system.md`](docs/skill-system.md).

One per wizard stage:

| Skill | Stage | Job |
|---|---|---|
| `project-genesis` | all | drives the full 5-phase wizard |
| `research-waves` | 2.4–2.6 | market, competitors, red team, consolidation |
| `business-plan-impact-review` | 2.8 | downstream impact of every BP change |
| `pitch` | 2.9 | the pitch, plus the "BP online?" decision |
| `registry-pick` | 3.1 + 4.3 | external packs — design pass, then stack pass |
| `prototype-lab` | 3.2 | three visual directions, then design tokens |
| `product-brief` | 4.1 | reverse-engineers the brief from the prototype |
| `sprint-roadmap` | 4.4 | the 14–20 sprint roadmap |

Plus build-and-ship (`feature-scaffold`, `verify-build-works`, `rollback-safe`, `codemap`, `release-check`…), safety (`secrets-discipline`, `secrets-scan`, `privacy-audit`, `multi-ai-review`), money and growth (`cost-watchdog`, `usage-monitor`, `first-100-users`, `grow-sustainably`), and working-with-a-vibe-coder (`daily-standup`, `plain-portuguese-explainer`, `decision-log`, `processize`, `os-self-test`).

**Every skill declares when to reach for it**, in Portuguese, in its frontmatter — a description that only says what a skill *does* never gets invoked. See the [skill audit](docs/skill-audit-2026-08-08.md) for how that was fixed.

---

## ✅ The OS tests itself

```bash
node scripts/os-self-test.js              # 9 coherence checks
node --test scripts/test/*.test.js        # 92 unit tests
node scripts/codemap.js --check           # codemap in sync with the code
```

`os-self-test` verifies canonical structure, frontmatter coverage across skills/agents/commands, every relative link, registry ↔ INDEX consistency both ways, session-log indexing, hook wiring, gitignore hygiene, and that the codemap layer is wired. It runs in CI on every push.

It used to be a checklist a human had to remember — and three session logs record it going unrun exactly when it would have helped. That is why it is a script now.

The unit tests cover the hooks and the catalogue generator. They earned their keep immediately: they found **two ways to bypass the secret-blocking hook** (`git -C dir commit` and `git add . && git commit`) that manual testing had missed.

---

## 🗺️ CODEMAP — finding code without reading it

Two rules in this OS exist for the same reason, and they only pay off together:

- **Code files stay under 200 lines** (`code-style`) — so any single file is cheap to read.
- **`CODEMAP.md` lists every code file with one line about its core** (`codemap`) — so you rarely need to read one you didn't want.

Without the map, an agent looking for "where login happens" greps, guesses, opens four files and reads three it didn't need. With it, it reads one file — the map — and then the right file. That is the whole idea: **fewer tokens per task**, which is also fewer chances to act on the wrong file.

```bash
node scripts/codemap.js           # regenerate
node scripts/codemap.js --check   # CI runs this; exits 1 if stale
```

The description is **generated, never hand-written** — pulled from the `Purpose:` header that `code-style` already requires. Falls back to the leading block comment, then to the first line comment, and finally to `⚠️ sem cabeçalho`. That last case is deliberate: a file with no header shows up flagged in the map, so the codemap ends up policing the header rule as a side effect. Fix the header, not the map.

**Scope: the derived project, not this repo.** Inside the AI Dev OS itself the script self-skips and exits 0 — the OS ships the machinery, your project owns the map. `templates/project/CODEMAP.template.md` is the placeholder a new project starts from.

A stale map is worse than no map — the agent trusts it, skips reading, and acts on stale information. So it is enforced in three places rather than suggested in one:

| Where | When |
|---|---|
| `.github/workflows/ci.yml` | Every push and PR. Fails on drift. |
| `sprint-management` | Regenerated during the sprint and again at sprint close. |
| `release-check` | Blocking gate before any release. |

---

## 📚 Documentation layers

| Document | Purpose |
|---|---|
| `START-HERE.md` | First file Claude reads. |
| `WIZARD.md` | Full Project Genesis Wizard flow. |
| `docs/business/BUSINESS-PLAN.md` | Business/investor/hackathon document. |
| `docs/business/PITCH.md` | The BP in ten sections, plus the record of what may go public. |
| `docs/product/DESIGN-DIRECTION.md` | The approved prototype direction: tokens, screens, flow. Bridge from Phase 3 to Phase 4. |
| `docs/product/PRODUCT-BRIEF.md` | Operational product understanding, reverse-engineered from the prototype. |
| `docs/technical/TECHNICAL-PLAN.md` | Stack, architecture, data, security, test plan. |
| `docs/SPRINTS.md` | Detailed sprint roadmap. |
| `CODEMAP.md` | One line per code file, generated. Read it to find code instead of reading the code. |
| `CHANGELOG.md` | What changed by version. |
| `session-log/` | Why decisions were made. |
| `knowledge-base/` | Research outputs and source summaries. |
| `prototype-lab/` | Disposable HTML prototypes before building the real app. |

---

## 🧪 Prototype Lab

Phase 3 of the wizard — **before** the Product Brief and the Technical Plan, not after. This is where brand, color, typography, and the real user flow get decided. The wizard creates a separate prototype space:

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
- Make the prototypes visually distinct — three directions, not three shades of one.
- Match the personas, positioning, and MVP scope from **BP v0.0.2** and the research in `knowledge-base/`. The Product Brief is not an input here — Phase 4 derives it from the prototype you approve.
- Do not mix prototype files with production source code.

The approved direction is written up in `docs/product/DESIGN-DIRECTION.md`, which is what Phase 4 reads.

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

- **hooks that mechanically block secret commits and `.env` writes** — the only layer that does not rely on the model cooperating;
- secrets scanning habits (`secrets-discipline` preventive, `secrets-scan` detective);
- security review agents;
- dependency and release checks;
- privacy audit workflow, extended to cover publishing documents;
- documentation of security decisions;
- optional references to security-focused external skills.

See [`SECURITY.md`](SECURITY.md), [`docs/security-baseline.md`](docs/security-baseline.md), and [`.claude/hooks/README.md`](.claude/hooks/README.md).

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

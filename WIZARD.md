# Project Genesis Wizard

This is the canonical wizard for turning a raw project idea into a structured SaaS build plan.

The wizard is intentionally detailed. Claude must follow it step by step and must not compress it into a shorter process unless the user explicitly asks to bypass the operating system.

The goal is not to produce code quickly. The goal is to produce a project that is clear, researched, documented, stress-tested, planned, prototyped, and only then coded.

---

## Overview

The wizard moves through these stages:

1. Repository comprehension
1.5. **Detach from OS-origin (Stage 0.5)** — disconnect new project from the AI Dev OS repo before any commit. Educational + executable.
2. Friendly opening and user introduction
3. Raw ideation
4. Ideation expansion and ten strategic questions
5. Research plan approval
6. Wave 1 — market and competitor research
7. Wave 2 — red team critique
8. Wave 3 — consolidation and BP writing
9. Business Plan v0.0.1 delivery
10. Human review instructions
11. Business Plan v0.0.2 revision
12. Product Brief derivation
13. Technical Plan derivation
14. **External repo registry pick (Stage 11.5)** — recommend packs from `docs/registry/`
15. Sprint roadmap planning
16. Prototype Lab planning
17. Sprint 0 and first coding sprint preparation

---

## Stage 0 — Repository comprehension

Claude must first read `START-HERE.md`, `README.md`, `CLAUDE.md`, this file, `.claude/`, and the wizard docs.

Claude must confirm it understood the operating system and must not start coding.

---

## Stage 0.5 — Detach from OS-origin (educate-and-execute)

**This stage is mandatory for derived projects and skipped automatically when running inside the AI Dev OS repo itself.**

### How to determine if this stage applies

Run `git remote get-url origin` and observe whether `.aios-self` exists in the project root:

| origin URL | `.aios-self` exists | Action |
|---|---|---|
| Does NOT contain `lglucas/ai-dev-operating-system` | irrelevant | **Skip** — already detached. Optionally tell user they can delete `.aios-self` if it's still there. |
| DOES contain `lglucas/ai-dev-operating-system` | yes | **Ask the user** explicitly: "Você está trabalhando NO repositório do AI Dev OS em si (contribuindo para o OS), ou começando um projeto novo derivado dele?" — if OS-itself: skip. If derived: run detach. |
| DOES contain `lglucas/ai-dev-operating-system` | no | **Run detach** — user is in a clone for a derived project but already removed the marker manually. |

The `.aios-self` marker by itself does NOT prove this is the OS repo, because it travels via clone and via "Use this template". Both signals together (marker + origin) plus user confirmation are required.

### Why this stage exists

A user who clones (or "Use this template") the AI Dev OS gets a working copy whose `origin` remote points to `lglucas/ai-dev-operating-system`. Without intervention, their first `git push` either:

- fails with "permission denied" (confusing to non-devs), or
- pushes their personal project artifacts into the public OS repo (poison-the-well scenario).

The wizard must intercept BEFORE any commit happens.

### What Claude must do (script)

1. **Detect.** Run `git remote get-url origin`. If the URL contains `lglucas/ai-dev-operating-system`, the project is still attached to the OS-origin.

2. **Explain in plain Portuguese** what `origin` is and why we're detaching. Do not assume the user knows Git. Use the wording from `scripts/detach-os.{sh,ps1}` step 2 ("O que é 'origin' e por que importa") as canonical reference.

3. **Offer the user 3 paths:**
   - **(a) Run the detach script** — `bash scripts/detach-os.sh` (Linux/macOS) or `powershell scripts/detach-os.ps1` (Windows). The script handles re-init or remote swap with educational prompts.
   - **(b) Already have a GitHub repo** — guide them to: `git remote remove origin && git remote add origin <new-url>`.
   - **(c) Don't have a GitHub account/repo yet** — pause the wizard. Walk them through:
     1. Creating a GitHub account at `https://github.com/signup` (if needed).
     2. Creating a new repo at `https://github.com/new` (recommend Private for early-stage projects, no README/`.gitignore`/license — they already have those).
     3. Generating a Personal Access Token at `https://github.com/settings/tokens` for HTTPS push, OR setting up SSH keys.
     4. Then return to path (b).

4. **Verify.** Re-run `git remote get-url origin`. Confirm it does NOT contain `lglucas/ai-dev-operating-system`. If it still does, do not proceed.

5. **Reinforce secrets discipline before any commit:**
   - Confirm `.env` is in `.gitignore`.
   - Confirm `.env.example` exists with placeholder values.
   - Remind: NEVER paste API keys, tokens, or production credentials into prompts or files that could be committed.

### Educational tone

This stage is the first time a non-developer user learns about Git, remotes, and GitHub mechanics. Treat every explanation as if the user has never used Git before. Use analogies. Be patient. The success criterion is not just "the script ran" — it is "the user understood why we did this."

### Required output

- `origin` no longer points to the OS repo (or `.git/` was re-initialized).
- User has a target repo URL of their own (or has explicitly chosen to defer Git/GitHub setup, in which case Stage 0.5 records the deferral and the wizard continues with a warning that no commit should happen until detach is complete).
- `session-log/` records the detach decision and the reasoning.

---

## Stage 1 — Friendly opening

Claude should greet the user and explain the wizard simply.

Required first question:

```txt
Me fale sobre teu projeto.

Pode explicar livremente: nome do projeto, ideia central, produto ou serviço, como ele funciona, quem são os clientes/personas, como você imagina ganhar dinheiro com isso, quais referências você tem em mente e qualquer restrição importante.
```

---

## Stage 2 — Raw ideation capture

Capture project name, category, core idea, problem, personas, revenue model hypothesis, product/service nature, operational model, references, constraints, founder assumptions, unknowns, and gaps.

Do not overcorrect yet.

---

## Stage 3 — Ideation expansion and ten strategic questions

Claude must respond with:

1. A polished understanding of the idea.
2. A stronger version of the concept.
3. Potential market positioning.
4. Possible product boundaries.
5. Risks or ambiguities already visible.
6. Exactly ten tailored questions.

The ten questions must be specific to the project, not generic startup questions.

Claude must stop after asking the ten questions and wait for the user's answers.

---

## Stage 4 — Research plan approval

After the user answers the ten questions, Claude must present a research and agent execution plan and ask for approval.

### Wave 1 — Research Team

Two agents:

1. Competitor Research Agent
   - Find up to 20 direct or adjacent competitors.
   - Refine to the top 5 most relevant.
   - Analyze websites, features, positioning, pricing, onboarding, target market, integrations, social proof, public reviews, complaints, and weaknesses.
   - Save findings in `knowledge-base/competitors/`.

2. Market Research Agent
   - Research the market, niche, TAM/SAM/SOM where possible, customer behavior, regulatory or operational constraints, credible reports, official statistics, sector associations, Sebrae-style sources, and trustworthy benchmarks.
   - Save findings in `knowledge-base/market/`.

### Wave 2 — Red Team

Three agents:

1. Devil's Advocate Agent — attack weak assumptions, contradictions, and fragile claims.
2. Business/Finance Red Team Agent — review pricing, revenue model, CAC, LTV, margins, GTM, retention, operations, and financial realism.
3. Technical/Security Red Team Agent — review feasibility, stack risk, architecture complexity, security, privacy, compliance, testing, scalability, and MVP risk.

Every red team critique must include a proposed solution.

### Wave 3 — Consolidation Team

Two agents:

1. Coordinator Agent — resolve conflicts and decide the best path.
2. Copywriter / Business Plan Agent — write `docs/business/BUSINESS-PLAN.md` v0.0.1 for hackathon judges, investors, accelerators, partners, or internal founders.

Claude must ask:

```txt
Aprova esse plano de execução das 3 ondas? Quer alterar algum agente, foco, fonte ou critério antes de eu começar?
```

Claude must wait for explicit user approval.

---

## Stage 5 — Execute Wave 1

When approved, execute research.

Do not fabricate market data. If internet access is unavailable, ask the user for links or research materials.

Required outputs:

```txt
knowledge-base/competitors/competitor-longlist.md
knowledge-base/competitors/top-5-competitor-analysis.md
knowledge-base/market/market-research.md
knowledge-base/market/source-index.md
```

Each research file must distinguish source-backed facts, inferences, assumptions, and open questions.

---

## Stage 6 — Execute Wave 2 Red Team

Required outputs:

```txt
docs/business/_review/wave-2-devils-advocate.md
docs/business/_review/wave-2-business-finance.md
docs/business/_review/wave-2-technical-security.md
```

Each red team report must include risks, contradictions, weak assumptions, failure scenarios, missing information, proposed fixes, and severity.

---

## Stage 7 — Execute Wave 3 Consolidation and BP writing

Required outputs:

```txt
docs/business/_review/wave-3-coordinator.md
docs/business/BUSINESS-PLAN.md
```

BP version must be `v0.0.1`.

After creating BP v0.0.1, update `CHANGELOG.md`, `session-log/INDEX.md`, and a dated `session-log/` entry.

---

## Stage 8 — Human BP review task

Claude must instruct the user:

```txt
Leia todo o BUSINESS-PLAN.md com um bloco de notas do lado.
Anote tudo que você não concorda, tudo que parece errado, tudo que está fraco e tudo que ficou faltando.
Sempre cite capítulo e subcapítulo.
Depois me envie suas correções em um único retorno longo.
```

Claude must stop and wait.

---

## Stage 9 — BP v0.0.2 impact-aware revision

When the user returns corrections, Claude must perform two waves:

1. Apply corrections.
2. Run impact review.

Impact review rule: every change must be checked for downstream effects.

Examples:

- Price changed → update projections, ARPU, LTV, revenue, competitor comparison, plan positioning.
- Persona changed → update copy, GTM, competitors, UX, MVP scope.
- Stack changed → update technical plan, costs, sprint roadmap, risks.
- Revenue model changed → update pricing, financials, GTM, metrics.
- MVP scope changed → update roadmap, sprint plan, prototype lab, DoD.
- Compliance requirement changed → update security/privacy, legal risk, architecture, sprint gates.

Required outputs:

```txt
docs/business/_review/user-review-v0.0.1.md
docs/business/_review/bp-impact-review-v0.0.2.md
docs/business/BUSINESS-PLAN.md
```

BP version becomes `v0.0.2`.

---

## Stage 10 — Product Brief

After BP v0.0.2, Claude must create:

```txt
docs/product/PRODUCT-BRIEF.md
```

It must include product one-liner, personas, jobs to be done, user flows, MVP, Phase 1, Phase 2, non-goals, activation moment, retention loop, monetization logic, trust/compliance requirements, UX tone, and product risks.

---

## Stage 11 — Technical Plan

Claude must create:

```txt
docs/technical/TECHNICAL-PLAN.md
```

It must include recommended stack, rationale, architecture assumptions, data model assumptions, auth model, API conventions, security baseline, privacy/compliance baseline, testing strategy, CI/CD, environment variables, deployment assumptions, risks, and open questions.

No alpha/beta stack should be recommended unless explicitly accepted.

---

## Stage 11.5 — External repo registry pick

Before the sprint roadmap, Claude must recommend which external repository packs (from `docs/registry/`) to install for THIS project.

Trigger the `registry-pick` skill (or invoke `/registry-pick`).

The skill reads `docs/registry/INDEX.md` and the relevant `packs/<slug>.md` one-pagers, matches project signals (stack, domain, compliance, UI surface, public/private, team familiarity) against pack fit-signals, and outputs a prioritized recommendation:

- **Must install** — direct fit; project quality suffers without it.
- **Recommended** — strong fit; install before launch.
- **Optional** — situational; depends on growth path.
- **Skipped (and why)** — explicit non-recommendation with reason.

Required outputs:

```txt
docs/technical/registry-pick.md
```

The skill MUST NOT install anything. It shortlists and surfaces install commands. The user decides which packs to actually install. After the user decides, document the chosen packs in the technical plan.

If a new pack is added to `docs/registry/` later in the project's life, re-invoke `/registry-pick` to refresh the recommendation.

---

## Stage 12 — Sprint roadmap planning

Claude must ask additional questions focused on sprint planning.

The goal is a detailed 14–20 sprint roadmap. Time accuracy matters less than sequencing and clarity.

Required files:

```txt
docs/SPRINTS.md
docs/sprints/sprint-00-setup.md
docs/sprints/sprint--1-prototype-lab.md
docs/sprints/sprint-01-foundation.md
```

Each sprint should include objective, DoD, deliverables, agents, skills, security gates, tests, risks, dependencies, expected artifacts, changelog, and session-log requirements.

---

## Stage 13 — Prototype Lab

Before building the real app, Claude must plan and generate a prototype lab.

Required folder:

```txt
prototype-lab/
├── README.md
├── index.html
├── shared/mock-data.js
├── shared/prototype-nav.css
├── prototype-a/index.html
├── prototype-a/styles.css
├── prototype-b/index.html
├── prototype-b/styles.css
├── prototype-c/index.html
└── prototype-c/styles.css
```

Rules:

- Use plain HTML/CSS/JS unless user asks otherwise.
- Prototypes are disposable and isolated from the real app.
- All three prototypes must use the same mock data and same core flows.
- Each prototype must have a distinct UI/UX direction.
- Directions must fit the BP, personas, product brief, and market.

---

## Stage 14 — Start coding only after approval

Only after the user approves BP v0.0.2, Product Brief, Technical Plan, sprint roadmap, and prototype direction may Claude begin Sprint 0 / Sprint 1 implementation.

The first coding sprint must follow `.claude/rules/`.

---

## Final rule

The wizard is not a conversation gimmick. It is the operating process. Follow it.

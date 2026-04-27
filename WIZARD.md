# Project Genesis Wizard

This is the canonical wizard for turning a raw project idea into a structured SaaS build plan.

The wizard is intentionally detailed. Claude must follow it step by step and must not compress it into a shorter process unless the user explicitly asks to bypass the operating system.

The goal is not to produce code quickly. The goal is to produce a project that is clear, researched, documented, stress-tested, planned, prototyped, and only then coded.

---

## Overview

The wizard moves through these stages:

1. Repository comprehension
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
14. Sprint roadmap planning
15. Prototype Lab planning
16. Sprint 0 and first coding sprint preparation

---

## Stage 0 — Repository comprehension

Claude must first read `START-HERE.md`, `README.md`, `CLAUDE.md`, this file, `.claude/`, and the wizard docs.

Claude must confirm it understood the operating system and must not start coding.

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

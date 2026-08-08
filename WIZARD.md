# Project Genesis Wizard

This is the canonical wizard for turning a raw project idea into a structured SaaS build plan.

The wizard is intentionally detailed. Claude must follow it step by step and must not compress it into a shorter process unless the user explicitly asks to bypass the operating system.

The goal is not to produce code quickly. The goal is to produce a project that is clear, researched, documented, stress-tested, visually materialized, planned, and only then coded.

---

## How this wizard is numbered

The wizard has **5 phases**. Each phase contains numbered stages written as `phase.stage` (for example `3.2`).

Phases are the primary handle. When someone says "we're in Phase 3", that is enough to locate the work. Stage numbers exist only to order the steps inside a phase.

**Why phases and not one long list of stages:** inserting a step used to force a fractional stage (`0.5`, `11.5`) or renumber everything downstream. With phases, a new step only renumbers inside its own phase, and the five phase names never move.

### Phase map

| Phase | Name | Produces | Commit tag |
|---|---|---|---|
| **1** | Largada | A repo that is yours, detached and safe to commit to | `[STAGE:LARGADA]` |
| **2** | Ideação | The thinking: research, red team, Business Plan v0.0.2 | `[STAGE:IDEACAO]` |
| **3** | Protótipo | The product made visible: brand, color, UI, UX | `[STAGE:PROTOTIPO]` |
| **4** | Documentação | Reverse engineering: Product Brief, Technical Plan, roadmap | `[STAGE:DOCUMENTACAO]` |
| **5** | Chegada | Sprint 0 / Sprint 1 — real code | `[STAGE:CHEGADA]` |

The five phases map 1:1 onto the commit-tag convention in [`.claude/rules/wizard-stage-tags.md`](.claude/rules/wizard-stage-tags.md). A commit tagged `[STAGE:PROTOTIPO]` *is* a Phase 3 commit. No translation table.

### Why Phase 3 comes before Phase 4

Earlier versions of this wizard put the Prototype Lab after the Product Brief, the Technical Plan, and the sprint roadmap. That order asks the founder to specify a product they have not yet seen.

The current order inverts it deliberately:

- **Phase 3 materializes the product.** Three visual directions, built from the Business Plan and the research. This is where brand, color, typography, layout, and the actual user flows get decided — by looking at them, not by describing them.
- **Phase 4 reverse-engineers the documentation from the approved prototype.** The Product Brief describes screens that exist. The Technical Plan specifies a system whose surface is already known.

A Technical Plan written against a prototype you can click is more honest than one written against a paragraph.

**Consequence for Phase 3:** the prototype cannot depend on the Product Brief, because it does not exist yet. Its inputs are BP v0.0.2 (which already carries personas, positioning, and MVP scope per Stage 2.8), the research in `knowledge-base/`, and the ten strategic questions.

---

# PHASE 1 — LARGADA

**Goal:** the user has a repository that belongs to them and is safe to commit to.
**Commit tag:** `[STAGE:LARGADA]`

---

## 1.1 — Repository comprehension

Claude must first read `START-HERE.md`, `README.md`, `CLAUDE.md`, this file, `.claude/`, and the wizard docs in `docs/wizard/`.

Claude must confirm it understood the operating system and must not start coding.

---

## 1.2 — Detach from OS-origin (educate-and-execute)

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
- User has a target repo URL of their own (or has explicitly chosen to defer Git/GitHub setup, in which case this stage records the deferral and the wizard continues with a warning that no commit should happen until detach is complete).
- `session-log/` records the detach decision and the reasoning.

---

## 1.3 — Friendly opening

Claude should greet the user and explain the wizard simply.

Required first question:

```txt
Me fale sobre teu projeto.

Pode explicar livremente: nome do projeto, ideia central, produto ou serviço, como ele funciona, quem são os clientes/personas, como você imagina ganhar dinheiro com isso, quais referências você tem em mente e qualquer restrição importante.
```

---

# PHASE 2 — IDEAÇÃO

**Goal:** a researched, stress-tested Business Plan the founder actually believes in.
**Commit tag:** `[STAGE:IDEACAO]`

---

## 2.1 — Raw ideation capture

Capture project name, category, core idea, problem, personas, revenue model hypothesis, product/service nature, operational model, references, constraints, founder assumptions, unknowns, and gaps.

Do not overcorrect yet.

---

## 2.2 — Ideation expansion and ten strategic questions

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

## 2.3 — Research plan approval

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

## 2.4 — Execute Wave 1 (market and competitors)

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

## 2.5 — Execute Wave 2 (red team)

Required outputs:

```txt
docs/business/_review/wave-2-devils-advocate.md
docs/business/_review/wave-2-business-finance.md
docs/business/_review/wave-2-technical-security.md
```

Each red team report must include risks, contradictions, weak assumptions, failure scenarios, missing information, proposed fixes, and severity.

---

## 2.6 — Execute Wave 3 (consolidation and BP v0.0.1)

Required outputs:

```txt
docs/business/_review/wave-3-coordinator.md
docs/business/BUSINESS-PLAN.md
```

BP version must be `v0.0.1`.

After creating BP v0.0.1, update `CHANGELOG.md`, `session-log/INDEX.md`, and a dated `session-log/` entry.

---

## 2.7 — Human BP review task

Claude must instruct the user:

```txt
Leia todo o BUSINESS-PLAN.md com um bloco de notas do lado.
Anote tudo que você não concorda, tudo que parece errado, tudo que está fraco e tudo que ficou faltando.
Sempre cite capítulo e subcapítulo.
Depois me envie suas correções em um único retorno longo.
```

Claude must stop and wait.

---

## 2.8 — BP v0.0.2 impact-aware revision

When the user returns corrections, Claude must perform two waves:

1. Apply corrections.
2. Run impact review.

Impact review rule: every change must be checked for downstream effects.

Examples:

- Price changed → update projections, ARPU, LTV, revenue, competitor comparison, plan positioning.
- Persona changed → update copy, GTM, competitors, UX, MVP scope.
- Stack changed → update technical plan, costs, sprint roadmap, risks.
- Revenue model changed → update pricing, financials, GTM, metrics.
- MVP scope changed → update roadmap, sprint plan, prototype direction, DoD.
- Compliance requirement changed → update security/privacy, legal risk, architecture, sprint gates.

Required outputs:

```txt
docs/business/_review/user-review-v0.0.1.md
docs/business/_review/bp-impact-review-v0.0.2.md
docs/business/BUSINESS-PLAN.md
```

BP version becomes `v0.0.2`.

**BP v0.0.2 is the contract that Phase 3 builds against.** Before leaving this phase, confirm the BP explicitly states: personas, positioning, MVP scope, and the primary user flow. Phase 3 has no Product Brief to lean on — these four items are its only specification.

---

## 2.9 — Pitch, and the publication question

Two outputs: a pitch derived from the BP, and an explicit decision about whether either document lives on the public internet.

### Write the pitch

```txt
docs/business/PITCH.md
```

Ten slides or fewer, derived from BP v0.0.2 — not written from scratch. The BP is the argument; the pitch is the argument compressed to what someone will actually sit through. If a claim is not in the BP, it does not belong in the pitch.

### Ask the publication question

Claude must raise this as a **suggestion, not a default**. Many founders never consider it; the wizard's job is to put the option on the table with its real trade-offs, then accept whatever the user decides.

```txt
Uma opção que vale considerar: colocar o Business Plan e o Pitch online, dentro do próprio site/plataforma — por exemplo em /pitch ou /investors.

Vantagens:
- Vira ativo de captação: você manda um link em vez de anexar PDF.
- Constrói autoridade e confiança ("build in public").
- Investidor, parceiro ou cliente grande consegue se qualificar sozinho.
- Some o problema de versão desatualizada circulando por aí.

Custos reais:
- Concorrente lê tudo, inclusive o que você acha que é vantagem.
- Números publicados viram expectativa — e cobrança depois.
- Exige manutenção: BP público desatualizado é pior que nenhum.
- Parte do conteúdo NÃO pode ir ao ar (ver gate abaixo).

Você quer:
(a) tudo público,
(b) uma versão pública enxuta + versão completa atrás de login/link secreto,
(c) nada online por enquanto — decide depois do lançamento?
```

Whatever the user answers, record the decision and the reasoning in `session-log/`. "Not now" is a valid, complete answer and closes the stage.

### Redaction gate — mandatory if the answer is (a) or (b)

Publishing a Business Plan means publishing whatever is in it. Before anything goes to a public URL, Claude must run the following split and get explicit user sign-off on it.

| Usually safe to publish | Do NOT publish without explicit, considered approval |
|---|---|
| Problem and solution narrative | Financial projections, burn, runway |
| Positioning and differentiation | Unit economics — CAC, LTV, margins |
| Market context with **public** sources | Pricing not yet announced (planned increases, discount policy) |
| Personas, generalized | Personas traceable to a real interviewee |
| Directional roadmap | Dated delivery commitments |
| Team and mission | Fundraising status, valuation, cap table |
| Metrics you are willing to be held to | The internal risk register |
| — | Supplier and partner terms |
| — | Competitor teardown naming specific weaknesses |

Three of these carry consequences beyond embarrassment:

- **Personas from real interviews are personal data.** Publishing "Marina, 34, gerente de clínica em Porto Alegre" when Marina is a real person you interviewed is an LGPD problem, not a style problem. Invoke `privacy-audit` before publishing any persona.
- **Competitor teardowns invite legal and PR retaliation.** Positioning ("we are the one that does X") is safe; "Competitor Y's onboarding is broken and their support is worse" is not.
- **Published numbers become commitments.** A projection on a public page will be quoted back during diligence.

### Route the downstream consequences

If the answer is (a) or (b), this is not just a document decision — it creates product surface. Record it so the later phases pick it up:

| Consequence | Lands in |
|---|---|
| Routes (`/pitch`, `/investors`), navigation, whether it appears in the main nav | Product Brief (stage 4.1) |
| Public vs. gated, auth model for the gated version, SEO/`robots.txt`, PDF export | Technical Plan (stage 4.2) |
| Analytics on who views the page — **this is personal data** | `privacy-audit` |
| The page as an acquisition and credibility asset | `first-100-users`, `launch-agent` |

### Required outputs

```txt
docs/business/PITCH.md
session-log/<date>-pitch-and-publication-decision.md
```

If the answer was (a) or (b), also record the approved public/private split inside `PITCH.md` so Phase 4 knows what it is building a page for.

---

# PHASE 3 — PROTÓTIPO

**Goal:** the product becomes visible. Brand, color, typography, UI, and UX are decided by looking at three real options, not by describing them.
**Commit tag:** `[STAGE:PROTOTIPO]`

**Inputs:** BP v0.0.2, `knowledge-base/` research, the ten strategic questions.
**Not an input:** the Product Brief — it does not exist yet, and Phase 4 derives it from what this phase produces.

---

## 3.1 — Design pack pick

Before prototyping, Claude must recommend which external **design-oriented** packs (from `docs/registry/`) fit this project.

Trigger the `registry-pick` skill (or invoke `/registry-pick`) scoped to design: UI systems, design-token workflows, component libraries, diagramming, screenshot and asset tooling.

Required output:

```txt
docs/technical/registry-pick-design.md
```

The skill MUST NOT install anything. It shortlists and surfaces install commands. The user decides.

> The stack-wide registry pick happens later, at Stage 4.3, once the Technical Plan knows the real stack. Splitting the pick in two is deliberate: design packs are useless after the prototype is built, and stack packs are guesswork before the Technical Plan exists.

---

## 3.2 — Prototype Lab

Claude must plan and generate a prototype lab with three distinct visual directions.

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

- Use plain HTML/CSS/JS unless the user asks otherwise.
- Prototypes are disposable and isolated from the real app.
- All three prototypes must use the same mock data and the same core flows.
- Each prototype must have a distinct UI/UX direction — not three shades of the same idea.
- Directions must fit the BP v0.0.2 personas, positioning, MVP scope, and the market research.
- Each direction must carry an explicit brand hypothesis: color palette, typography, density, tone, and what kind of company it makes the product look like.

`prototype-lab/README.md` must state, per direction: who it is for, what it optimizes for, and what it sacrifices.

---

## 3.3 — Direction approval and design tokens

The user picks one direction (or an explicit combination of directions).

Claude must then extract the decisions from the chosen prototype into a document that Phase 4 can consume:

```txt
docs/product/DESIGN-DIRECTION.md
```

It must record: chosen direction and why, color tokens, typography scale, spacing and density rules, component inventory observed in the prototype, the screens that exist, the primary user flow as actually clicked, and what was explicitly rejected from the other two directions.

**This document is the bridge between Phase 3 and Phase 4.** Without it, the reverse engineering in Phase 4 has nothing concrete to read.

Claude must stop and wait for explicit approval of the direction before entering Phase 4.

---

# PHASE 4 — DOCUMENTAÇÃO

**Goal:** reverse-engineer the formal documentation from the approved prototype, then plan the execution.
**Commit tag:** `[STAGE:DOCUMENTACAO]`

**Method:** this phase does not invent the product. It reads `docs/product/DESIGN-DIRECTION.md` and `prototype-lab/<chosen>/`, and writes down what is already there — plus everything the prototype implies but does not show.

---

## 4.1 — Product Brief

Claude must create:

```txt
docs/product/PRODUCT-BRIEF.md
```

It must include product one-liner, personas, jobs to be done, user flows, MVP, Phase 1, Phase 2, non-goals, activation moment, retention loop, monetization logic, trust/compliance requirements, UX tone, and product risks.

**Reverse-engineering requirements specific to this order:**

- Every screen in the approved prototype must appear in the Product Brief, or be explicitly marked as cut.
- The user flow section must match the flow that was actually clickable in the prototype.
- The UX tone section must be derived from `DESIGN-DIRECTION.md`, not invented.
- Anything the prototype implied but never showed (empty states, errors, permissions, offline, edge cases) must be listed as a gap, not silently filled in.

The last item is the point of the reordering: a prototype makes gaps visible that a written spec hides.

---

## 4.2 — Technical Plan

Claude must create:

```txt
docs/technical/TECHNICAL-PLAN.md
```

It must include recommended stack, rationale, architecture assumptions, data model assumptions, auth model, API conventions, security baseline, privacy/compliance baseline, testing strategy, CI/CD, environment variables, deployment assumptions, risks, and open questions.

The data model must be derived from the entities visible in the prototype's mock data (`prototype-lab/shared/mock-data.js`), not designed in the abstract.

No alpha/beta stack should be recommended unless explicitly accepted.

### Managed vs. self-hosted — ask, do not assume

Before locking the stack, Claude must put the self-hosted option on the table explicitly. Most vibe coders default to managed platforms because nobody ever showed them the alternative — and some are paying monthly for services they could run themselves for the price of one small server.

This is a **question**, not a recommendation. Present both sides and accept the answer.

```txt
Antes de fechar a stack: cada serviço externo que a gente escolher aqui é uma
assinatura mensal e um pedaço dos teus dados na mão de outra empresa.

Existe o caminho self-hosted — você roda o software no teu próprio servidor.

(a) Gerenciado em tudo — Vercel, Supabase, Auth0, Sentry Cloud e afins.
    Rápido de subir, você paga e não pensa mais nisso.
(b) Self-hosted no que der — mais controle dos dados e custo previsível,
    mas você vira o responsável por backup, uptime e patch de segurança.
(c) Híbrido — gerenciado no que é crítico e barato, self-hosted no que é caro
    por uso ou sensível em dados.

Qual faz sentido pro teu momento?
```

Where to look for concrete alternatives:

| File | Covers |
|---|---|
| [`docs/selfhosted/shortlist-saas.md`](docs/selfhosted/shortlist-saas.md) | analytics, CMS, CRM, helpdesk, email, BI, search, forms, wiki — what the mirrored catalogue has |
| [`docs/selfhosted/gaps.md`](docs/selfhosted/gaps.md) | **auth, uptime, CI/CD, backup, PaaS, static sites, VPN, BaaS, events** — researched separately, ranked by GitHub stars |
| [`docs/selfhosted/INDEX.md`](docs/selfhosted/README.md) | the full 1.346-project catalogue |

Rules for this conversation:

- **State the real cost of self-hosting.** It trades vendor cost for time and operations: backup, uptime, security patching, and being the person who wakes up when it breaks. A solo founder in Sprint 1 hosting eight services is doing SRE, not product.
- **Do not push (b).** The maintainer of this OS prefers self-hosted, and that stance is recorded in `ETHOS.md` — explicitly as a stance, not a rule. "Managed for everything" is frequently the right answer for a solo non-developer.
- **Flag the three licence traps, not just copyleft.** Roughly 39% of the mirrored catalogue is AGPL or GPL (modify **and** serve over a network triggers the obligation). Some options are source-available rather than open source — Vault is BUSL-1.1, Sentry is FSL-1.1. And **thirteen of the researched alternatives are open core**, where the free edition deliberately omits SSO, RBAC and audit logs. That last one bites hardest: the project looks open source until the founder needs corporate login. If the project will resell or embed the component, route it to `legal-compliance-agent`.
- **Check whether the feature you need is in the free edition** before recommending an open-core option.
- **Run `cost-watchdog`** to compare the projected cost of both paths before closing.
- **Record the decision and its reasoning** in the Technical Plan and in `session-log/`. A founder who chose managed in year 1 will want to know why when the invoice grows in year 2.

---

## 4.3 — Stack pack pick

Now that the stack is known, run the second registry pass — this time across the whole catalog.

Trigger the `registry-pick` skill (or invoke `/registry-pick`).

The skill reads `docs/registry/INDEX.md` and the relevant `packs/<slug>.md` one-pagers, matches project signals (stack, domain, compliance, UI surface, public/private, team familiarity) against pack fit-signals, and outputs a prioritized recommendation:

- **Must install** — direct fit; project quality suffers without it.
- **Recommended** — strong fit; install before launch.
- **Optional** — situational; depends on growth path.
- **Skipped (and why)** — explicit non-recommendation with reason.

Required output:

```txt
docs/technical/registry-pick.md
```

The skill MUST NOT install anything. It shortlists and surfaces install commands. The user decides which packs to actually install. After the user decides, document the chosen packs in the technical plan.

If a new pack is added to `docs/registry/` later in the project's life, re-invoke `/registry-pick` to refresh the recommendation.

---

## 4.4 — Sprint roadmap planning

Claude must ask additional questions focused on sprint planning.

The goal is a detailed 14–20 sprint roadmap. Time accuracy matters less than sequencing and clarity.

Required files:

```txt
docs/SPRINTS.md
docs/sprints/sprint-00-setup.md
docs/sprints/sprint--1-design-system.md
docs/sprints/sprint-01-foundation.md
```

Each sprint should include objective, DoD, deliverables, agents, skills, security gates, tests, risks, dependencies, expected artifacts, changelog, and session-log requirements.

**Note on Sprint -1.** In earlier versions this sprint built the prototype. The prototype now exists before the roadmap is written, so Sprint -1 changed job: it consolidates the approved prototype and `DESIGN-DIRECTION.md` into a real design system (tokens, components, layout primitives) that Sprint 1 can build on.

---

# PHASE 5 — CHEGADA

**Goal:** real code, in the real app.
**Commit tag:** `[STAGE:CHEGADA]`

---

## 5.1 — Start coding only after approval

Only after the user approves BP v0.0.2, the prototype direction, the Product Brief, the Technical Plan, and the sprint roadmap may Claude begin Sprint 0 / Sprint 1 implementation.

The first coding sprint must follow `.claude/rules/`.

---

## Final rule

The wizard is not a conversation gimmick. It is the operating process. Follow it.

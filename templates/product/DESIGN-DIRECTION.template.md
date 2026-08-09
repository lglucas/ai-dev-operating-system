# DESIGN-DIRECTION.md

> Produced at WIZARD stage 3.3, after the user approves one of the three prototype directions.
> This file is the bridge between Phase 3 (Protótipo) and Phase 4 (Documentação). Phase 4 reads it to reverse-engineer the Product Brief and the Technical Plan.
> Replace every `<...>` placeholder. Delete this block when done.

- **Project:** `<project name>`
- **Approved on:** `<YYYY-MM-DD>`
- **Approved by:** `<name>`
- **Chosen direction:** `<prototype-a | prototype-b | prototype-c | combination>`

**Se for combinação**, dê a ela um identificador estável e liste toda pasta de origem. O resto deste documento e a Fase 4 referenciam `prototype-lab/<chosen>/`, e uma combinação não tem pasta única:

| Identificador | `<combination-a-b>` |
|---|---|
| Pastas de origem | `prototype-lab/prototype-a/`, `prototype-lab/prototype-b/` |
| O que veio de cada | `<layout e navegação de A; paleta e tipografia de B>` |
| Pasta consolidada | `<prototype-lab/combination-a-b/ — crie antes de sair da Fase 3>` |

Sem pasta consolidada, a Fase 4 não tem o que ler.

---

## Why this direction won

`<Two or three sentences. Tie it back to BP v0.0.2 personas and positioning — not to personal taste.>`

## What the other directions did better

`<Be specific. Anything worth grafting later belongs here, or it is lost.>`

## What was rejected, and why

A Fase 3 exige registrar o que foi **descartado**, não só o que ficou. Sem isso, a mesma ideia volta daqui a três meses como se fosse nova.

| Elemento rejeitado | Veio de | Por que não |
|---|---|---|
| `<sidebar fixa de navegação>` | `<prototype-c>` | `<come largura demais no mobile, que é 70% do tráfego previsto no BP>` |
| `<...>` | `<...>` | `<...>` |

---

## Color tokens

| Token | Value | Used for |
|---|---|---|
| `--color-bg` | `<#FFFFFF>` | `<page background>` |
| `--color-surface` | `<#F8FAFC>` | `<cards, panels>` |
| `--color-text` | `<#0F172A>` | `<body copy>` |
| `--color-text-muted` | `<#64748B>` | `<secondary copy, labels>` |
| `--color-primary` | `<#2563EB>` | `<primary action>` |
| `--color-border` | `<#E2E8F0>` | `<dividers, input borders>` |
| `--color-danger` | `<#DC2626>` | `<destructive action, errors>` |

State whether a dark variant exists. If it does not, say so — that is a Phase 4 gap, not an omission.

## Typography

| Role | Family | Size | Weight | Line height |
|---|---|---|---|---|
| Display | `<...>` | `<...>` | `<...>` | `<...>` |
| Heading | `<...>` | `<...>` | `<...>` | `<...>` |
| Body | `<...>` | `<...>` | `<...>` | `<...>` |
| Caption / label | `<...>` | `<...>` | `<...>` | `<...>` |
| Mono (if used) | `<...>` | `<...>` | `<...>` | `<...>` |

## Spacing and density

- Base unit: `<4px | 8px>`
- Scale: `<4, 8, 12, 16, 24, 32, 48, 64>`
- Container max width: `<...>`
- Density stance: `<compact / comfortable / spacious>` — and who that serves.
- Border radius: `<...>`
- Elevation / shadow: `<...>`

---

## Component inventory

Everything that actually appears in the approved prototype.

| Component | Where it appears | Variants seen | Notes |
|---|---|---|---|
| `<Button>` | `<...>` | `<primary, secondary, ghost>` | `<...>` |
| `<...>` | `<...>` | `<...>` | `<...>` |

## Screens that exist

| Screen | Purpose | File |
|---|---|---|
| `<...>` | `<...>` | `prototype-lab/<chosen>/index.html#<anchor>` |

## Primary user flow, as actually clicked

`<Step-by-step, matching what a person can really do in the prototype. Do not describe the intended flow — describe the built one.>`

1. `<...>`
2. `<...>`
3. `<...>`

---

## Gaps: implied but never shown

This is the most valuable section in the file. A prototype has happy paths; a product has everything else. List what the prototype gestured at but did not build, so Phase 4 records it as a known gap instead of silently inventing an answer.

| Gap | Where it would appear | Open question for Phase 4 |
|---|---|---|
| Empty states | `<which screens>` | `<what should an empty list say?>` |
| Error states | `<which actions>` | `<...>` |
| Loading states | `<...>` | `<...>` |
| Permissions / roles | `<...>` | `<...>` |
| Long / ugly data | `<...>` | `<what happens at 500 rows? at a 200-char name?>` |
| Offline / failure | `<...>` | `<...>` |
| Mobile / small screens | `<...>` | `<...>` |
| Accessibility | `<...>` | `<contrast checked? keyboard nav? focus states?>` |

---

## Brand hypothesis carried forward

- Tone of voice: `<...>`
- What kind of company this makes us look like: `<...>`
- What we are deliberately NOT: `<...>`

---

## Handoff checklist

- [ ] Every token above has a real value, not a placeholder.
- [ ] Every screen in the prototype is listed.
- [ ] The flow section matches the clickable flow, not the intended one.
- [ ] The gaps table is filled in — an empty gaps table means it was not looked for.
- [ ] `prototype-lab/<chosen>/` is committed and reachable.

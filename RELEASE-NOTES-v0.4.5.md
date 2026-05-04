# RELEASE NOTES — v0.4.5

**Date:** 2026-05-04
**Theme:** Vertical educacional `course/` — workshop em 3 aulas aplicando Experience Learning (Perestroika), 2 sistemas planejados, easter egg de tags de commit.

---

## TL;DR

v0.4.5 abre uma **vertical paralela** ao OS principal: a pasta `course/` contém um workshop educacional de 3 encontros de 2h, construído sobre o método **Experience Learning** da Perestroika (open source sob CC BY-SA 4.0).

A vertical é **claramente separada** do OS operacional. Quem clona o template pra um projeto pode ignorar/apagar a pasta sem afetar nada. Quem chega no curso vai direto pra ela.

Adicionalmente, foi formalizada uma convenção **opt-in** de tags `[STAGE:X]` em commit messages — útil pra rastreamento automático de progresso por sistemas externos (incluindo o Sistema 2 do curso, "Grand Prix do Trilho").

---

## O que tem na vertical `course/`

### Conteúdo educacional

- **TESE do curso:** "Vibe coding sem método é code-and-spray. Vibe coding com método é trilho de trem-bala."
- **TAGLINE:** "Trilho não engessa. Trilho deixa o trem-bala existir."
- **3 aulas de 2h cada**, cada uma com Tese, Tagline, Treco, Framework de Aula timeboxed:
  - **Aula 1 — Fundação** ("Você não está de muletas, isso aqui é um fucking Gundam!") com Treco "Pó de Diamante e Pó de Fome" (cases reais lado a lado).
  - **Aula 2 — Construção** ("AI sem contexto é menino no sandbox") com tríade descobrir + aprofundar + documentar = 6 docs profissionais em horas.
  - **Aula 3 — Soberania** ("Não somos jangada. Somos submarino nuclear pilotado por gente que ouviu a IA") com Treco "Acendendo o Prototype Local" + Pacto Coletivo + Festa Final.

### Sistemas planejados

- **Sistema 1 — Trilho do Red Team:** Web app que sorteia duplas anônimas pra red team entre Aulas 2 e 3.
- **Sistema 2 — Grand Prix do Trilho:** Painel ao vivo com carrinhos de F1 (capacete = avatar GitHub) lendo commits via GitHub API e movendo pelos 5 estágios automaticamente.

### Sprint 0

`course/sprints/sprint-0-fundacao.md` define os 4 entregáveis (~40h em 4–6 semanas) que constroem todo o material didático + os 2 sistemas + um repo demo "vet-saas-workshop". Este Sprint **dogfooda o produto**: usa o AI Dev OS pra construir os artefatos do próprio curso, com etiqueta de origem visível no canto inferior direito de cada sistema.

---

## Easter egg no OS principal

`.claude/rules/wizard-stage-tags.md` — convenção opt-in:

```
feat: setup inicial e estrutura canônica [STAGE:LARGADA]
docs: 10 perguntas estratégicas respondidas [STAGE:IDEACAO]
docs(business): BP v0.0.2 com correções do red team [STAGE:DOCUMENTACAO]
feat(prototype): primeiro fluxo de login com mock data [STAGE:PROTOTIPO]
feat: app rodando no localhost com fluxo principal [STAGE:CHEGADA]
```

Sistemas externos (especialmente o Grand Prix do Trilho) podem ler as tags via GitHub API e inferir progresso automaticamente. Quem não usa, **não perde nada**.

---

## Princípio de separação

| Camada | O que é | Onde vive |
|---|---|---|
| **AI Dev OS (produto principal)** | Trilho operacional — WIZARD, regras, skills, registry, agents — pronto pra qualquer projeto. | Raiz do repo (todo o resto fora de `course/`). |
| **Curso** | Workshop educacional construído sobre o OS. Tem TESE, TAGLINE, Frameworks, Trecos. | `course/`. |
| **Sistemas do curso** | 2 web apps que dão suporte didático. | `course/systems/`. |

Quem clona o OS pra construir um SaaS **não deve confundir** material didático com material operacional. Quem chega no curso **não deve precisar** entender todo o OS antes.

---

## Versionamento explicado

v0.4.5 é **patch**, não minor:
- **Não há alteração no OS operacional.** WIZARD, regras, skills, registry, agents — todos intocados.
- A nova vertical é puramente aditiva.
- v0.5.0 segue reservado pras decisões arquiteturais do OS (trust tiers, plugin manifest, parallel sprints, allowlists, registry-of-registries) — anunciadas no RELEASE-NOTES-v0.4.4.md.

---

## Próximos marcos

- **v0.4.5 → v3.4 do curso:** Sprint 0 executado. Sistemas e materiais didáticos prontos. (Próximas 4–6 semanas.)
- **v3.5:** Dry-run interno gravado.
- **v3.6:** Workshop beta público (5–10 convidados).
- **v3.7:** Lançamento público + vídeos no YouTube indexados em `course/videos/INDEX.md`.

---

## Verificação

- [x] `course/README.md` existe e explica a separação.
- [x] `course/CHANGELOG-COURSE.md` documenta v1 → v3.3 do desenho.
- [x] `course/content/shared/curso-overview.md` tem TESE, TAGLINE, ARCO globais.
- [x] As 3 aulas têm README com Framework completo.
- [x] Aula 1 tem `treco/po-de-diamante-po-de-fome.md` detalhado.
- [x] `course/sprints/sprint-0-fundacao.md` lista 4 entregáveis com estimativas.
- [x] `course/systems/trilho-red-team/BRIEF.md` e `course/systems/grand-prix/BRIEF.md` existem.
- [x] `course/videos/INDEX.md` placeholder presente.
- [x] `.claude/rules/wizard-stage-tags.md` no OS principal explica a convenção opt-in.
- [x] `CHANGELOG.md` e este arquivo dated 2026-05-04.
- [x] `README.md` badge bumped to v0.4.5.

---

## Créditos

- **Experience Learning** — metodologia da [Perestroika](https://perestroika.com.br/), open source sob Creative Commons Attribution-ShareAlike 4.0. Aplicamos os 23 pontos divididos em 4 módulos integralmente.
- **Pieter Levels** — case "Pó de Diamante" no Treco da Aula 1 (uso público de declarações de MRR).
- **Cases públicos do Pó de Fome** — Replit AI deletando banco (jun/2025), Cursor `.env` leak, Stripe API key leaks documentados em 2024–2025.

---

🤖 Generated with [Claude Code](https://claude.com/claude-code)

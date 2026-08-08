# Wizard stage tags — convenção completa

Convenção **opcional** para marcar em qual fase do WIZARD um commit pertence. Permite rastreamento automático de progresso via GitHub API — painel de turma, métricas de adoção, relatórios de uso. Quem não usa **não perde nada**.

A regra resumida vive em [`.claude/rules/wizard-stage-tags.md`](../.claude/rules/wizard-stage-tags.md); este documento é o detalhamento.

> **Por que o detalhe mora aqui e não na regra:** tudo em `.claude/rules/` entra em **todo prompt**, consumindo contexto em toda sessão. Esta convenção opt-in ocupava 60 das 236 linhas de regras — 25% do orçamento — competindo com a regra de segurança, que tinha 3 linhas. O ponteiro fica na regra; o manual fica aqui.

---

## Como usar

Adicione `[STAGE:X]` no fim da mensagem de commit. As 5 tags correspondem **1:1 às 5 fases** do [`WIZARD.md`](../WIZARD.md) — não existe tabela de tradução: um commit `[STAGE:PROTOTIPO]` *é* um commit da Fase 3.

| Tag | Fase | Significado | Quando aparece |
|---|---|---|---|
| `[STAGE:LARGADA]` | **Fase 1** | Repositório é seu, desacoplado e seguro pra commitar. | Logo após "Use this template" + `git init`, ou primeiro commit. |
| `[STAGE:IDEACAO]` | **Fase 2** | O pensamento: ideação, 10 perguntas, pesquisa, red team, BP v0.0.1 → v0.0.2, Pitch. | Ideação raw, brainstorming, pesquisa em `knowledge-base/`, BP e revisões. |
| `[STAGE:PROTOTIPO]` | **Fase 3** | O produto fica visível: marca, cores, UI, UX. | Primeiro código no `prototype-lab/`, as 3 direções, e o `DESIGN-DIRECTION.md`. |
| `[STAGE:DOCUMENTACAO]` | **Fase 4** | Engenharia reversa do protótipo aprovado + plano de execução. | Product Brief, Technical Plan, registry picks, sprint roadmap. |
| `[STAGE:CHEGADA]` | **Fase 5** | Sprint 1 começou, ou primeiro deploy/run local. | Ambiente rodando, fluxo principal funcional. |

## Exemplos

```
feat: setup inicial e estrutura canônica [STAGE:LARGADA]
docs: 10 perguntas estratégicas respondidas [STAGE:IDEACAO]
docs(business): BP v0.0.2 com correções do red team [STAGE:IDEACAO]
feat(prototype): três direções visuais com mock data compartilhado [STAGE:PROTOTIPO]
docs(product): Product Brief derivado do protótipo aprovado [STAGE:DOCUMENTACAO]
feat: app rodando no localhost com fluxo principal [STAGE:CHEGADA]
```

## Por que as tags são cronológicas desde a v0.5.0

Até a v0.4.5 o WIZARD colocava o Prototype Lab **depois** do Product Brief, do Technical Plan e do roadmap. Isso deixava `PROTOTIPO` cronologicamente *depois* de `DOCUMENTACAO` — as tags saíam fora de ordem, e qualquer sistema que inferisse progresso pela sequência via o projeto "andar pra trás".

A reordenação da v0.5.0 (protótipo antes da documentação) consertou isso. As 5 tags agora aparecem na ordem da tabela acima, sempre.

**Os 5 valores de tag não mudaram.** Commits antigos continuam válidos; só a ordem esperada mudou.

## Detecção como fallback

Se a tag for esquecida, ferramentas que dependem dela podem inferir a fase pelos arquivos modificados:

| Arquivos tocados | Fase inferida |
|---|---|
| `knowledge-base/`, `docs/business/BUSINESS-PLAN.md`, `docs/business/PITCH.md` | `IDEACAO` |
| `prototype-lab/`, `docs/product/DESIGN-DIRECTION.md` | `PROTOTIPO` |
| `docs/product/PRODUCT-BRIEF.md`, `docs/technical/`, `docs/SPRINTS.md` | `DOCUMENTACAO` |
| `src/`, `app/` | `CHEGADA` |

Tags explícitas são preferidas porque eliminam ambiguidade.

## Quem consome isto

O **Grand Prix do Trilho** (`course/systems/grand-prix/`) lê os commits via GitHub API e infere progresso automaticamente, sem o usuário marcar nada à mão. É o que torna possível painel de turma ao vivo e métricas de adoção.

Qualquer sistema que dependa das tags deve **fazer fallback gracioso** quando não as encontra.

## Quando NÃO usar

- Em commits que não correspondem a uma fase do WIZARD — ajuste de typo, fix de CI. Apenas omita.
- Em projetos que não seguem o WIZARD do AI Dev OS.

## Convenção é opt-in

O OS não força isto. Não há lint, não há gate, não há reclamação se você ignorar.

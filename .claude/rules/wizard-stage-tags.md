# Wizard stage tags (opt-in)

Convenção opcional para marcar em qual fase do WIZARD um commit pertence. Útil pra rastreamento automático de progresso (ex.: dashboards, métricas, relatórios). Quem não usa **não perde nada**.

## Como usar

Adicione `[STAGE:X]` no fim da mensagem de commit. As 5 tags correspondem **1:1 às 5 fases** do [`WIZARD.md`](../../WIZARD.md) — não existe tabela de tradução: um commit `[STAGE:PROTOTIPO]` *é* um commit da Fase 3.

| Tag | Fase | Significado | Quando aparece |
|---|---|---|---|
| `[STAGE:LARGADA]` | **Fase 1** | Repositório é seu, desacoplado e seguro pra commitar. | Logo após "Use this template" + `git init` ou primeiro commit. |
| `[STAGE:IDEACAO]` | **Fase 2** | O pensamento: ideação, 10 perguntas, pesquisa, red team, BP v0.0.1 → v0.0.2. | Commits de ideação raw, brainstorming, pesquisa em `knowledge-base/`, BP e suas revisões. |
| `[STAGE:PROTOTIPO]` | **Fase 3** | O produto fica visível: marca, cores, UI, UX. | Primeiro código no `prototype-lab/`, as 3 direções, e o `DESIGN-DIRECTION.md`. |
| `[STAGE:DOCUMENTACAO]` | **Fase 4** | Engenharia reversa do protótipo aprovado + plano de execução. | Product Brief, Technical Plan, registry picks, sprint roadmap. |
| `[STAGE:CHEGADA]` | **Fase 5** | Sprint 1 começou ou primeiro deploy/run local. | Ambiente rodando, fluxo principal funcional. |

## Exemplos

```
feat: setup inicial e estrutura canônica [STAGE:LARGADA]
docs: 10 perguntas estratégicas respondidas [STAGE:IDEACAO]
docs(business): BP v0.0.2 com correções do red team [STAGE:IDEACAO]
feat(prototype): três direções visuais com mock data compartilhado [STAGE:PROTOTIPO]
docs(product): Product Brief derivado do protótipo aprovado [STAGE:DOCUMENTACAO]
feat: app rodando no localhost com fluxo principal [STAGE:CHEGADA]
```

## Por que as tags agora são cronológicas

Até a v0.4.5 o WIZARD colocava o Prototype Lab **depois** do Product Brief, do Technical Plan e do roadmap. Isso deixava `PROTOTIPO` cronologicamente *depois* de `DOCUMENTACAO` — as tags saíam fora de ordem, e qualquer sistema que inferisse progresso pela sequência das tags via o projeto "andar pra trás".

A reordenação da v0.5.0 (protótipo antes da documentação) conserta isso. As 5 tags agora aparecem na ordem em que estão listadas acima, sempre.

**Os 5 valores de tag não mudaram.** Commits antigos continuam válidos; só a ordem esperada mudou.

## Por que existe

Sistemas externos (ex.: o "Grand Prix do Trilho" do `course/systems/grand-prix/`) podem ler os commits via GitHub API e inferir progresso automaticamente — sem precisar que o usuário marque manualmente. Isto torna possível dashboards de turma, métricas de adoção, relatórios de uso.

## Detecção como fallback

Se você esquecer a tag, ferramentas que dependem dela podem inferir a fase a partir dos arquivos modificados:

| Arquivos tocados | Fase inferida |
|---|---|
| `knowledge-base/`, `docs/business/BUSINESS-PLAN.md` | `IDEACAO` |
| `prototype-lab/`, `docs/product/DESIGN-DIRECTION.md` | `PROTOTIPO` |
| `docs/product/PRODUCT-BRIEF.md`, `docs/technical/`, `docs/SPRINTS.md` | `DOCUMENTACAO` |
| `src/`, `app/` | `CHEGADA` |

Tags explícitas são preferidas porque eliminam ambiguidade.

## Quando NÃO usar

- Em commits que não correspondem a uma fase do WIZARD (ex.: ajuste de typo, fix de CI). Apenas omita a tag.
- Em projetos que não seguem o WIZARD do AI Dev OS.

## Convenção é opt-in

O OS não força esta convenção. Não há lint, não há gate, não há reclamação se você ignorar. Skills e sistemas que dependem das tags devem fazer fallback gracioso quando não encontram.

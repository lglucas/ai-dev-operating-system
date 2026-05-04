# Wizard stage tags (opt-in)

Convenção opcional para marcar em qual estágio do WIZARD um commit pertence. Útil pra rastreamento automático de progresso (ex.: dashboards, métricas, relatórios). Quem não usa **não perde nada**.

## Como usar

Adicione `[STAGE:X]` no fim da mensagem de commit. Os 5 estágios reconhecidos são:

| Tag | Significado | Quando aparece |
|---|---|---|
| `[STAGE:LARGADA]` | Repositório criado, primeiro commit feito. | Logo após "Use this template" + `git init` ou primeiro commit. |
| `[STAGE:IDEACAO]` | WIZARD Stages 1–4 (ideação, 10 perguntas, plano de pesquisa). | Commits de ideação raw, brainstorming, BP rascunho. |
| `[STAGE:DOCUMENTACAO]` | WIZARD Stages 5–12 (research, BP, Brief, Technical Plan, sprint roadmap). | Commits que adicionam ou revisam BP, Brief, TP, registry picks, sprint plan. |
| `[STAGE:PROTOTIPO]` | WIZARD Stage 13 (Prototype Lab). | Primeiro código no `prototype-lab/`. |
| `[STAGE:CHEGADA]` | Stage 14 — Sprint 1 começou ou primeiro deploy/run local. | Ambiente rodando, fluxo principal funcional. |

## Exemplos

```
feat: setup inicial e estrutura canônica [STAGE:LARGADA]
docs: 10 perguntas estratégicas respondidas [STAGE:IDEACAO]
docs(business): BP v0.0.2 com correções do red team [STAGE:DOCUMENTACAO]
feat(prototype): primeiro fluxo de login com mock data [STAGE:PROTOTIPO]
feat: app rodando no localhost com fluxo principal [STAGE:CHEGADA]
```

## Por que existe

Sistemas externos (ex.: o "Grand Prix do Trilho" do `course/systems/grand-prix/`) podem ler os commits via GitHub API e inferir progresso automaticamente — sem precisar que o usuário marque manualmente. Isto torna possível dashboards de turma, métricas de adoção, relatórios de uso.

## Detecção como fallback

Se você esquecer a tag, ferramentas que dependem dela podem inferir o estágio a partir dos arquivos modificados (ex.: criação de `docs/business/BUSINESS-PLAN.md` → `DOCUMENTACAO`). Tags explícitas são preferidas porque eliminam ambiguidade.

## Quando NÃO usar

- Em commits que não correspondem a um estágio do WIZARD (ex.: ajuste de typo, fix de CI). Apenas omita a tag.
- Em projetos que não seguem o WIZARD do AI Dev OS.

## Convenção é opt-in

O OS não força esta convenção. Não há lint, não há gate, não há reclamação se você ignorar. Skills e sistemas que dependem das tags devem fazer fallback gracioso quando não encontram.

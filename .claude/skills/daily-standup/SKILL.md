---
name: daily-standup
description: At the start of a session (or on user request "o que a gente fez", "onde paramos"), produce a 4-bullet briefing — what's done, what's in progress, what's next, what's blocked. Replaces the dev habit of standup for solo vibe coders.
---

# Daily Standup

## When to run this skill

- First message of a new session for a project (auto-trigger).
- User says: "onde paramos" / "o que tá rolando" / "me lembra o que tava fazendo" / "resumo".
- After returning from a break of more than a few hours.
- Before closing a sprint.

## Inputs

- Last entries in `session-log/`.
- Last commits (`git log --oneline -10`).
- `docs/SPRINTS.md` or current sprint doc.
- `CHANGELOG.md` recent entries.

## Output format (always exactly 4 bullets, plain Portuguese)

```
☀️ Bom dia. Onde a gente parou:

✅ Feito ontem (ou na última sessão):
   • [1-3 itens concretos]

🚧 Em andamento agora:
   • [1-2 itens com % aproximada]

🎯 Próximo passo (o que faria sentido fazer agora):
   • [1 item, prazo curto]

🚨 Bloqueios / decisões esperando você:
   • [se houver — caso contrário "nada bloqueando"]
```

## Tone

- Use "a gente" (1ª pessoa do plural) — você é parte do time.
- Use linguagem simples. Sem `feat:`, `merge`, `branch` aqui — isso é pra leitura rápida.
- Se houve algo arriscado na última sessão, marque com 🟡.

## Example

```
☀️ Bom dia. Onde a gente parou:

✅ Feito ontem:
   • Configuração inicial do banco (Supabase) feita
   • Tela de login funcionando com magic link
   • Email de boas-vindas testado

🚧 Em andamento:
   • Tela de dashboard (~40% — falta a parte dos cards de métricas)

🎯 Próximo passo:
   • Terminar os 3 cards do dashboard. Estimativa: 1-2h.

🚨 Bloqueios:
   • Você precisa decidir se a primeira métrica é "clientes novos" ou "receita do mês". Te mando uma comparação rápida quando começar.
```

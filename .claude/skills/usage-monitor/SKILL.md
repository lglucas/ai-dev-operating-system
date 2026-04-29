---
name: usage-monitor
description: Track real-world usage and cost across LLM providers, hosting, DB, and email after a feature ships or a launch happens. Complements `cost-watchdog` (preventive). Triggers when the user says "tô gastando muito", "quanto custa", "quanto deu de fatura", or after launch.
---

# Usage Monitor

## When to run this skill

- 24h after a public launch.
- Weekly during the first month after launch.
- Whenever the user asks "quanto tá custando" / "tô gastando muito" / "como tá a fatura".
- After a feature that calls a metered service ships.
- When a billing alert fires.

## Dashboard format

```
📊 Usage & cost — last 7 days

🤖 LLM (Anthropic):
   Input tokens:        1.2M (R$ 9.00)
   Output tokens:       340K (R$ 17.00)
   Cache reads:         800K (R$ 0.60)
   Total:               R$ 26.60
   Per active user:     R$ 0.27
   ⚠️  Up 340% vs prev week — investigate.

☁️  Hosting (Vercel):
   Bandwidth:           4.2 GB / 100 GB free
   Function invocations: 22K / 100K free
   Status:              🟢 within free tier

🗄️  Database (Supabase):
   DB size:             142 MB / 500 MB free
   Active users (mau):  18 / 50K free
   Status:              🟢 within free tier

✉️  Email (Resend):
   Sent:                240 / 3000 free
   Status:              🟢 within free tier

💰 Total billable this week: R$ 26.60
🔮 Projected month: R$ 114
```

## Sources of truth

- **Anthropic:** Console → Billing → Usage. API: `/v1/organizations/usage_report`.
- **Vercel:** Dashboard → Usage tab.
- **Supabase:** Dashboard → Project Settings → Usage.
- **Resend:** Dashboard → Logs.
- **Stripe:** Dashboard → Reports.

If the user hasn't connected a usage API: "para automatizar, preciso da chave `read-only` da [provider]. Sem ela, eu te lembro de checar manualmente toda segunda."

## Triggers for action

| Sinal | Ação recomendada |
|---|---|
| LLM custo / usuário ativo > R$ 1 | Revisar prompts, considerar Haiku, ativar cache. |
| Bandwidth > 70% do free tier | Auditar imagens grandes, downloads. |
| DB > 70% do free tier | Auditar tabelas grandes, archive. |
| Spike > 200% week-over-week | Investigar imediatamente — provável loop / abuse. |
| Erro de cobrança / cartão recusado | Avisar usuário no chat. |

## Vibe coder explanation

> Imagina que cada serviço que você usa tem um relógio rodando. Toda semana eu olho os relógios pra você e falo: "tudo OK", "tá perto do limite", ou "tem algo estranho". Você não precisa entrar em 5 dashboards.

## Output cadence

- Weekly: 5-line summary in chat.
- On spike: same-day alert with the cause.
- Monthly: file `session-log/YYYY-MM-cost-review.md` with totals + top 3 levers to reduce.

## Relationship to cost-watchdog

- `cost-watchdog` = **preventive** (before code ships).
- `usage-monitor` = **reactive** (after code is in production).

# Cálculo de Custos — Sprint 0 / Aula 3

> Custo real de operar um SaaS construído com a stack do AI Dev OS, em diferentes escalas de uso. Números de pricing públicos coletados em abril/2026. Valores convertidos a R$ 5,00 / USD (referência conservadora).

**Contexto:** este documento alimenta a Pílula 3 da Aula 3 ("Custo + rollback + multi-AI"). É o slide do "ufa, dá pra testar sem falir".

---

## TL;DR — 3 faixas de operação

| Estágio | Usuários ativos/mês | Custo total/mês |
|---|---|---|
| **Dev local + teste** | até 50 | **R$ 0–50** (free tiers cobrem tudo) |
| **MVP em produção** | 100 | **R$ 50–200** (entrando em paid tiers) |
| **Crescimento inicial** | 1 000 | **R$ 300–800** |
| **Escala** | 10 000 | **R$ 2 500–6 000** |

> 🔑 **Mensagem-chave da aula:** vibe coder não falir testando produto. Vai testar com R$50/mês e só passa pra R$300/mês quando tiver receita pra justificar.

---

## Stack-base do AI Dev OS

Stack default (simplifica o cálculo):
1. **Vercel** — hosting + edge functions.
2. **Supabase** — Postgres + auth + storage + realtime + edge functions.
3. **Resend** — email transacional.
4. **Anthropic Claude API** — IA da própria aplicação (chat, geração, etc.).

Outros vendors (Stripe, Twilio, AWS S3) são adicionais por feature — fora do cálculo base.

---

## Pricing por vendor (abril/2026, valores públicos)

### Vercel ([fonte](https://vercel.com/pricing))

| Plano | Custo | Inclui |
|---|---|---|
| **Hobby** | $0 | 100GB bandwidth/mês, 1M edge requests, 1M function invocations, 4h CPU active. SEM overage — pausa ao bater limite. |
| **Pro** | $20/mês/dev | 1TB bandwidth, ~1000 GB-hours functions, overage $0,15/GB. Mínimo 1 seat. |
| **Enterprise** | custom | — |

**Para vibe coder solo:** Hobby cobre dev + MVP. Pro só quando passar de ~5k usuários ativos ou precisar de domain custom em escala.

### Supabase ([fonte](https://supabase.com/pricing))

| Plano | Custo | Inclui |
|---|---|---|
| **Free** | $0 | 500MB DB, 1GB storage, 50k MAU auth, 5GB egress, 500k edge function invocations. **Pausa após 7 dias inativo** — não serve produção 24/7. |
| **Pro** | $25/mês/projeto | 8GB DB, 100GB storage, 100k MAU, 250GB egress, 2M edge functions. Overage por uso. |
| **Team** | $599/mês | Pro + colaboração + advanced auth. |

**Realidade:** SaaS pequeno em produção fica em $25–75/mês (Pro com algum overage). 50k MAUs reais costumam custar $100–200/mês.

### Resend ([fonte](https://resend.com/pricing))

| Plano | Custo | Inclui |
|---|---|---|
| **Free** | $0 | 3 000 emails/mês, 100/dia (cap diário força upgrade antes do mensal). |
| **Pro** | $20–35/mês | 50k–100k emails/mês (slider). |
| **Scale** | $80+/mês | 200k+ emails/mês, dedicated IP, Slack support. |
| **Enterprise** | custom | 2.5M+/mês. |

**Vibe coder:** Free cobre 100% até MVP. Quando passar de 100 emails/dia (~3k/mês), Pro $20/mês resolve até 50k.

### Anthropic Claude API ([fonte](https://www.anthropic.com/pricing))

Por **1 milhão de tokens** (1M ≈ 750 mil palavras em inglês, ~500 mil em PT-BR):

| Modelo | Input ($/1M) | Output ($/1M) | Quando usar |
|---|---|---|---|
| **Haiku 4.5** | $1 | $5 | Tarefas simples, alto volume, latência baixa |
| **Sonnet 4.6** | $3 | $15 | Padrão balanceado pra maioria das features |
| **Opus 4.7** | $5 | $25 | Decisões complexas, raciocínio profundo, código sensível |

**Otimizações:**
- **Prompt caching:** 10% do custo de input pra cache hits — ENORME quando você reusa contexto (ex.: system prompts longos).
- **Batch API:** 50% off em input + output, processamento assíncrono.

**Estimativa de uso típico em SaaS:**
- Conversa de chat curta (10 turnos): ~5 000 tokens input + 2 000 tokens output.
- Geração de documento médio: ~10 000 tokens input + 5 000 tokens output.
- Análise de código (~200 linhas): ~3 000 tokens input + 1 500 tokens output.

---

## Cálculo por escala

Premissas comuns:
- Hospedagem: Vercel.
- DB + auth + storage: Supabase.
- Email: Resend.
- IA: Claude Sonnet 4.6 (preço médio).
- Cada usuário ativo mensal interage com IA ~5 vezes/mês, em média 7 000 tokens input + 3 000 tokens output por interação.

### 100 usuários ativos/mês (MVP cedo)

| Vendor | Plano | Custo/mês |
|---|---|---|
| Vercel | Hobby (free) | $0 |
| Supabase | Free | $0 (atenção: pausa após 7 dias inativo — não produção 24/7) |
| Supabase Pro (recomendado pra produção) | $25/mês | $25 |
| Resend | Free (até 3 000 emails) | $0 |
| Claude API | 100 × 5 × (7k input + 3k output) = 3,5M input + 1,5M output | (3,5 × $3) + (1,5 × $15) = $10,5 + $22,5 = **$33** |
| **Total mês** | | **$58 ≈ R$ 290** |

**Otimização rápida:**
- Usar prompt caching → $33 cai pra ~$15 (50% menos).
- Total real otimizado: **$40 ≈ R$ 200/mês**.

### 1 000 usuários ativos/mês (MVP rodando)

| Vendor | Plano | Custo/mês |
|---|---|---|
| Vercel | Hobby ainda cabe (1k usuários ≈ <100GB bandwidth) | $0 |
| Supabase | Pro | $25 (caber em 8GB DB + 100k MAU) |
| Resend | Free se ≤3k emails/mês, senão Pro $20 | $0–20 |
| Claude API | 1k × 5 × (7k+3k) = 35M input + 15M output | (35×$3) + (15×$15) = $330 |
| **Total mês** | | **$355–375 ≈ R$ 1 800** |

**Com prompt caching:**
- Claude cai pra ~$170 → total **$215 ≈ R$ 1 100**.

**Em receita:** se cobrar R$49/mês × 1 000 usuários = R$ 49 000 receita. Custo de R$ 1 800 = **3,7%** da receita. Margem saudável.

### 10 000 usuários ativos/mês (escala)

| Vendor | Plano | Custo/mês |
|---|---|---|
| Vercel | Pro $20/mês + bandwidth overage (~2TB extra ≈ 1TB×$0,15×1024 = $154) | $174 |
| Supabase | Pro $25/mês + overage (DB ~50GB, MAU 10k cobre 100k tier) | $50–80 |
| Resend | Pro $35 (até 100k emails) ou Scale $80 (200k) | $35–80 |
| Claude API | 10k × 5 × 10k = 350M input + 150M output | $4 350 |
| **Total mês** | | **$4 600–4 700 ≈ R$ 23 000** |

**Com otimizações agressivas:**
- Prompt caching reduz ~40% no Claude → **$2 600 ≈ R$ 13 000/mês**.
- Modelo híbrido (Haiku pra tarefas simples, Sonnet pra complexas) reduz mais ~30% → **~$1 800 ≈ R$ 9 000/mês**.

**Em receita:** R$49 × 10 000 = R$ 490 000. Custo de R$ 9 000–23 000 = **2–5% da receita**. Margem saudável.

---

## Cenários extremos (pra calibrar expectativas)

### Cenário pesadelo (sem otimização)

Aluno solta Claude **Opus 4.7** em todas as chamadas, sem prompt caching, sem rate limit, e tem 1 usuário power user que roda 100 interações/dia (~30k MTok/mês só dele).

- Custo deste 1 usuário: 30M × $5 + 13M × $25 = $150 + $325 = **$475/mês** num único user.
- Sem proteção (rate limit, billing por uso), 5 power users = $2 500/mês sem receita correspondente.
- **Por isso `cost-watchdog` skill existe.**

### Cenário sonho (com tudo otimizado)

- Modelo híbrido (Haiku 70% das chamadas).
- Prompt caching agressivo.
- Edge functions cacheando respostas comuns.
- 10 000 usuários ativos: **~$1 200 ≈ R$ 6 000/mês**.
- Margem de 98,8% sobre R$ 49 × 10 000 = R$ 490 000.

---

## Comparação com alternativas (pra redondar)

### Free tiers disponíveis (combinando)

Você consegue rodar MVP até **~50 usuários reais** absolutamente de graça:
- Vercel Hobby: free.
- Supabase Free: free (com limitação de pausa 7 dias).
- Resend Free: free (até 100/dia).
- Claude API: $0 (mas precisa pagar uso conforme demanda).

Custo mínimo realista pra produção 24/7: **$25 (Supabase Pro) + custo Claude API conforme uso**. Tudo abaixo disso depende de free tiers que pausam ou cap.

### Custo equivalente em time tradicional

Pra entregar feature equivalente ao que vibe coder com AI Dev OS faz num sprint de 1 semana:

| Recurso | Custo mensal |
|---|---|
| 1 dev pleno BR (CLT + encargos) | R$ 18 000–25 000 |
| 1 designer BR | R$ 12 000–18 000 |
| 1 PM PT % | R$ 6 000–10 000 |
| Cloud + tools | R$ 3 000–5 000 |
| **Total time mínimo** | **R$ 39 000–58 000/mês** |

Vibe coder solo + AI Dev OS: **R$ 200–6 000/mês conforme escala**.

**Diferença: 6× a 290× menos.**

---

## Como a Pílula 3 da Aula 3 deve usar isto

Slide 14 do deck-outline mostra:

```
100 usuários:   R$ 200–300/mês   (com cache)
1 000 usuários: R$ 1 100/mês     (com cache)
10 000 usuários: R$ 9 000/mês    (otimização agressiva)
```

Mensagem do facilitator-script:
> "Pra 100 usuários por mês, fica em **R$ 200**. Pra 1k, **R$ 1 100**. Pra 10k, **R$ 9 000**. **Vejam: você não vai falir testando seu produto.**"

---

## O que esses números NÃO incluem

- **Domínio:** ~R$ 50–80/ano via Cloudflare/Registro.br.
- **Stripe ou Asaas (gateway de pagamento):** 3,99–4,99% por transação. Não é custo fixo.
- **Storage S3-style externo (se substituir Supabase Storage):** ~$0,023/GB/mês AWS, ~$0,015 Cloudflare R2.
- **Monitoring (Sentry, PostHog):** free tiers cobrem MVP. Pago após.
- **Segurança avançada (Cloudflare Pro, WAF):** $20+/mês quando virar negócio.

---

## Quando começar a se preocupar com custo

Sinais de alerta:
- 🚩 **Claude API > 30% da receita** — sinal pra otimizar (caching, modelo menor, batch).
- 🚩 **Power user gasta >$50/mês em IA** — implementar rate limit por user.
- 🚩 **Vercel bandwidth >500GB/mês** — investigar imagens não otimizadas, CDN cache.
- 🚩 **Supabase egress >100GB/mês** — investigar queries pesadas, paginação.

**Skill:** `/cost-watchdog` analisa o repo e flag escolhas que vão sair caras.

---

## Sources

- [Supabase Pricing (oficial)](https://supabase.com/pricing)
- [Vercel Pricing (oficial)](https://vercel.com/pricing)
- [Anthropic Claude API Pricing (oficial)](https://www.anthropic.com/pricing)
- [Resend Pricing (oficial)](https://resend.com/pricing)
- [UI Bakery — Supabase Pricing 2026 breakdown](https://uibakery.io/blog/supabase-pricing)
- [Schematic HQ — Vercel Pricing 2026](https://schematichq.com/blog/vercel-pricing)
- [Pe Collective — Claude API Pricing 2026](https://pecollective.com/tools/anthropic-api-pricing/)
- [Nuntly — Resend Pricing 2026](https://nuntly.com/resend-pricing)

> Última atualização: 2026-05-05. Preços mudam — re-verificar fontes oficiais antes de cada turma do workshop.

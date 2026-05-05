# 2026-05-05 — Sprint 0 progress (sistemas + demo + material didático)

## Trigger

Continuação direta da sessão de 2026-05-04 que mergeou v0.4.5 (vertical `course/`). Sprint 0 começou em branch `sprint-0-systems-html` (PR #9 aberto). Esta sessão: avançar entregáveis do Sprint 0 ao máximo possível antes da gravação manual do vídeo pré-aula.

## O que foi entregue

### Entregável B+C — Sistemas em página única

- `course/systems/index.html`, `app.js`, `style.css` — page única com 3 modos via hash routing.
- `course/systems/supabase/schema.sql`, `policies.sql`, `functions/poll-progress/index.ts` — backend Supabase + Edge Function de polling do GitHub.
- `course/systems/supabase/seed.sql` (adicionado nesta sessão a pedido do user) — auto-promote admin via lista de emails fixa em SQL. Email `contato@lucasgalvao.com.br` pré-cadastrado.
- `course/systems/.env.example` + `course/systems/README.md` — setup completo passo a passo.
- `course/systems/mock-data.js` — 8 carrinhos fake, movimento aleatório a cada 6s.
- **Carrinhos de F1 com capacete = avatar GitHub** (CSS puro com 8 cores estilo F1, asas, rodas, cockpit).
- Animação GSAP nas transições de lane + som de bandeirada na CHEGADA via WebAudio.

### Entregável D — Repo demo PetReceita

`course/demo-repo/petreceita/`:
- README, CLAUDE.md, CHANGELOG, `.env.example` (variáveis Supabase + Resend + ICP-Brasil).
- `docs/business/BUSINESS-PLAN.md` — BP v0.0.2 com mercado vet BR (~80k vets), TAM/SAM/SOM, 3 tiers de pricing (R$49/129/299), red team Wave 2.
- `docs/product/PRODUCT-BRIEF.md` — JTBD, 3 fluxos principais, anti-scope explícito.
- `docs/technical/TECHNICAL-PLAN.md` — stack Next.js+Supabase+Resend+ICP-Brasil, schema Postgres com RLS, arquitetura por concerns.
- `docs/SPRINTS.md` — Sprint 0 done + Sprints 1–5 esboçados.
- `session-log/2026-05-04-genesis.md` — decisões do genesis.
- `prototype-lab/login-mock.html` — HTML estático estilizado (testado e aprovado pelo user: "fofo").
- `knowledge-base/README.md` — placeholder.

### Entregável A — Material didático das 3 aulas

Pra cada aula (1, 2, 3):
- `slide-deck-outline.md` — 25 slides descritos.
- `facilitator-script.md` — roteiro com falas-âncora palavra-por-palavra dos blocos críticos.
- `cheat-sheet.md` — 1 página densa imprimível.

### Entregável A.5 — Cálculo de custos real

`course/content/aula-3-soberania/calculo-custos.md`:
- Pricing público de Vercel, Supabase, Resend, Anthropic Claude API (abril/2026).
- Cenários: 100 / 1k / 10k usuários ativos com custos R$ 200 / R$ 1.100 / R$ 9.000.
- Cenários extremos (pesadelo sem cost-watchdog, sonho com otimização).
- Comparação com custo de time tradicional (6× a 290× menos).
- Sources oficiais linkadas + aviso de re-verificar antes de cada turma.

### Entregável A.6 — Banco de cases reais

`course/content/aula-1-fundacao/banco-de-cases.md`:
- **Pó de Diamante:** Pieter Levels (PhotoAI $132–138k MRR, ARR $3.1M). Alternativos: Tony Dinh, Marc Lou.
- **Pó de Fome:** Replit AI dropando banco de SaaStr (jul/2025), 1.206 executivos + 1.196 empresas. Cursor/Claude lendo .env. GitHub leaks de API keys.
- Sources primárias + secundárias linkadas.
- Frase-âncora pro facilitator-script de cada caso.
- Procedimento de manutenção (re-verificar links periodicamente).

## Decisões de implementação

### 1. Sistemas em HTML estático (não Next.js)

Decisão tomada com user nesta sessão: stack revisada de Next.js → HTML + Alpine.js + GSAP via CDN. Razões:
- Zero build step, zero infra.
- Legível pra vibe coder não-dev (HTML + JS direto).
- GitHub Pages free.
- Estimativa caiu de ~22h pra ~11h.

### 2. Polling em vez de webhook

Pra evitar fazer aluno configurar webhook no repo dele:
- Edge Function `poll-progress` lê GitHub API a cada 2min via Supabase Cron.
- Aluno só commita normal com `[STAGE:X]` na mensagem.
- Convenção `[STAGE:X]` formalizada em `.claude/rules/wizard-stage-tags.md` no v0.4.5.

### 3. Auto-promote admin via SQL seed (não console hack)

User pediu: "complexo isso do console, vamos fazer diferente, cria um seed".
- `seed.sql` define lista de emails admin como CONSTANT SQL.
- UPDATE retroativo + trigger `maybe_promote_admin` pra signups futuros.
- Email `contato@lucasgalvao.com.br` pré-cadastrado.

### 4. Mock mode opt-in via `?mock=1`

URL com `?mock=1` carrega `mock-data.js` que stubs o Supabase client. Permite testar visual da página completa sem Supabase configurado.

## Bugs corrigidos durante a sessão

1. **Race condition de carregamento** (mock-data.js via appendChild assíncrono) — fix: tag `<script>` síncrono direto no HTML.
2. **Colisão de nome `supabase`** (UMD do SDK + `const supabase` local no app.js) — fix: rename pra `db` em todos os usos.
3. **Alpine v3 não suporta `<template x-for>` aninhado bem** — fix: 5 lanes hardcoded com `filterCars('STAGE')` em vez de loop de stages.

## O que faltou (consciência do incompleto)

- **A.4 — Vídeo pré-aula:** gravação manual do user. Roteiro ainda não escrito.
- **Stage 11.5 do PetReceita** (Registry pick) — não rodado no demo.
- **Mocks adicionais do PetReceita** (criar receita, histórico) — só login-mock existe.
- **Prints visuais** (Levels MRR tweet, Lemkin thread, Fortune capa) — banco de cases tem links, mas downloads manuais ficam pendentes.
- **Snapshot do `course/demo-repo/petreceita/` pra repo separado** `lglucas/petreceita-demo` — só vai acontecer próximo da execução real do workshop.

## Branch / PR state ao fim da sessão

- Branch ativa: `sprint-0-systems-html`.
- PR #9: aberto, mergeable, ~50 arquivos, ainda não mergeado por escolha do user (revisão antes do deploy real).
- Tags `[STAGE:DOCUMENTACAO]` em vários commits durante essa sessão — alimentando futura demo do Grand Prix do Trilho.

## Próximas ações sugeridas pra próxima sessão

1. Roteiro do vídeo pré-aula (A.4 — markdown com falas + tomadas).
2. Mergear PR #9.
3. Iniciar Sprint 1 — infra real:
   - Criar Supabase project.
   - Aplicar `schema.sql` → `policies.sql` → `seed.sql`.
   - Deploy `poll-progress` Edge Function.
   - Configurar variáveis no `index.html`.
   - Ativar GitHub Pages no `course/systems/`.
   - Smoke test com seed admin `contato@lucasgalvao.com.br`.
4. Mocks adicionais do PetReceita se ainda fizer sentido didático.

## Aprendizado da sessão

- **Fact-forcing gate** rodou em quase toda chamada de Write/Edit, custou tempo significativo. Padrão aceito e adaptado.
- **User valida estética em iterações curtas** ("bah, ficou tosco. Mas eu gostei. Vamos deixar assim. Segue") — manter ciclos curtos, não buscar perfeição preemptiva.
- **Mock + animation primeiro, infra real depois** — feedback visual rápido valida direção antes de gastar tempo configurando Supabase real.

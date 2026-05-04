# Sprint 0 — Fundação do Curso e dos Sistemas

> **Objetivo:** ter o curso pronto pra rodar a 1ª turma beta, com slides + scripts + 2 sistemas funcionando + repo demo + materiais de apoio.

> **Premissa:** o curso E os sistemas serão construídos com o próprio AI Dev OS. Isto é parte do produto — a "etiqueta de origem" no canto inferior direito da página dos sistemas mostra exatamente quais skills/packs/decisões foram usadas. **Prova viva do método.**

> **Duração estimada:** 4–6 semanas em paralelo, dependendo do ritmo. Sprint dividido em 4 entregáveis principais.

---

## Resumo da entrega

| Entregável | Tipo | Estimativa |
|---|---|---|
| **A.** Materiais didáticos das 3 aulas | Slides + scripts + cheat-sheets + vídeo pré-aula | ~14h |
| **B+C.** Sistemas 1 e 2 (page única) | HTML estático + Alpine.js + GSAP + Supabase + 1 Edge Function de polling | **~11h (combinado)** |
| **D.** Repo demo "vet-saas-workshop" | Projeto-isca pra demos das aulas | ~4h |

**Total estimado:** ~29h de execução (revisado de 40h após decisão de stack mais simples).

### Decisão de arquitetura (v0.4.6, 2026-05-04)

Os 2 sistemas foram fundidos em **uma única página HTML estática** com 3 modos (hash routing: `#aluno`, `#painel`, `#admin`):
- **Stack:** HTML + Vanilla JS + Alpine.js + GSAP (todos via CDN, zero build).
- **Backend:** Supabase (auth + DB + Realtime + Edge Function).
- **Server-side mínimo:** apenas 1 Edge Function (`poll-progress`) que lê GitHub API a cada 2min.
- **Aluno NÃO configura nada no repo dele** — sem webhook, sem GH Actions, sem secrets pra gerenciar.
- **Hosting:** GitHub Pages (zero custo, zero infra).

Economiza ~50% do tempo estimado e aumenta legibilidade pro vibe coder não-dev (HTML + JS direto, sem build pipeline opaco).

---

## TESE do Sprint 0

> Construir o curso e os sistemas usando o AI Dev OS é a única forma honesta de provar que o método funciona. Cada artefato saído desta sprint é evidência de que vibe coder com método produz em horas o que time custaria semanas.

---

## Entregável A — Materiais didáticos (~14h)

### A.1 Slides das 3 aulas

| Aula | Slides estimados | Tempo |
|---|---|---|
| Aula 1 — Fundação | ~25 | 3h |
| Aula 2 — Construção | ~25 | 3h |
| Aula 3 — Soberania | ~25 | 3h |

**Stack de produção:** Keynote ou Figma Slides ou similar. Design de informação cuidado (princípio Perestroika #8). Tipografia forte, paleta consistente, sem ClipArt.

**Entregáveis:**
- [ ] Aula 1 — Fundação (deck completo).
- [ ] Aula 2 — Construção (deck completo).
- [ ] Aula 3 — Soberania (deck completo).

### A.2 Roteiros escritos do facilitador

Palavra-por-palavra nos blocos críticos:
- Setup do TRECO 1 (Pó de Diamante / Pó de Fome).
- Frases-âncora dos 3 polos.
- Provocação coletiva ("Os dois usaram IA. Qual a diferença?").
- Galeria do Red Team (regras + condução).
- Connecting the Dots da Aula 3.
- Mantra final.

**Entregáveis:**
- [ ] `course/content/aula-1-fundacao/roteiro-facilitador.md`
- [ ] `course/content/aula-2-construcao/roteiro-facilitador.md`
- [ ] `course/content/aula-3-soberania/roteiro-facilitador.md`

### A.3 Cheat-sheets (1 página cada)

**Entregáveis:**
- [ ] Cheat-sheet Aula 1: "Setup + Stage 0–4" (PDF imprimível).
- [ ] Cheat-sheet Aula 2: "Tríade + 6 docs" (PDF).
- [ ] Cheat-sheet Aula 3: "Skills + Comandos do dia-a-dia + Checklist Segurança" (PDF).

### A.4 Vídeo pré-aula (5min)

Conteúdo:
- Por que o curso existe.
- Pré-requisitos: GitHub conta, Git, IDE, Claude Code (com link de cada).
- Recomendação de IDE (Cursor por simplicidade).
- O que trazer pra Aula 1.

**Entregável:**
- [ ] Vídeo gravado, editado, publicado em link unlisted YouTube.
- [ ] Link adicionado a `course/videos/INDEX.md`.

### A.5 Cálculo de custos (pra Pílula 3 da Aula 3)

Levantamento real:
- Custo médio de tokens por sessão Claude (3–4h de uso).
- Custo Vercel free tier vs pago.
- Custo Supabase free tier vs pago.
- Custo Resend free tier vs pago.
- Faixas de custo para 100 / 1k / 10k usuários por mês.

**Entregável:**
- [ ] `course/content/aula-3-soberania/calculo-custos.md` (planilha + slide).

### A.6 Banco de cases reais (Pólo de Fome ampliado)

Levantamento, com prints + links:
- Pieter Levels MRR público (caso Pó de Diamante).
- Replit AI deletando banco (case Pó de Fome).
- Cursor user com .env público.
- Stripe API key vazada.
- 1–2 cases alternativos de cada lado.

**Entregável:**
- [ ] `course/content/aula-1-fundacao/banco-de-cases.md` (compilado público + prints baixados localmente).

---

## Entregáveis B + C combinados — Sistemas 1 e 2 em página única (~11h)

> **Observação:** os Entregáveis B e C originais (Next.js separado pra cada sistema, ~22h totais) foram fundidos em uma página HTML estática única servida via GitHub Pages. As seções abaixo são mantidas como referência histórica do desenho anterior. A entrega real está no `course/systems/` em desenvolvimento.

---

### Histórico — Entregável B original — Sistema 1: Trilho do Red Team (descontinuado a favor da page única)

### O que faz

- Aluno se loga (captura nome + email + avatar GitHub).
- Sobe link do repo público dele.
- Após deadline (24h após Aula 2), sistema:
  - Sorteia duplas anônimas.
  - Atribui 2 repos por aluno pra atacar.
  - Envia email com os 2 links + instruções.
- Página do aluno mostra: meus repos atribuídos + meus ataques recebidos (anônimos).
- Painel do instrutor: ver tudo, sortear os 3 da Galeria pra Aula 3.

### Stack

- **Frontend:** Next.js 15 (App Router) + Tailwind + shadcn/ui.
- **Auth + DB:** Supabase (auth com Magic Link).
- **Email:** Resend.
- **Deploy:** Vercel.

### Entregáveis

- [ ] Schema Supabase (tabelas: `users`, `repos`, `assignments`, `attacks`).
- [ ] Auth flow (Magic Link).
- [ ] Tela "Meu Repo" (upload de link).
- [ ] Tela "Meus Ataques" (lista de repos atribuídos pra atacar).
- [ ] Tela "Ataques Recebidos" (lista anônima).
- [ ] Painel admin (instrutor) — listar tudo, sortear Galeria.
- [ ] Lógica de sorteio aleatório (cada aluno recebe 2 repos, ninguém recebe o próprio).
- [ ] Email automatizado pós-sorteio.
- [ ] **Etiqueta de origem no canto inferior direito** — mostrando skills/packs/system designs do AI Dev OS usados.
- [ ] Deploy em produção (Vercel + Supabase).
- [ ] Plano B documentado (Google Form + planilha + script de sorteio manual) caso o sistema falhe na hora crítica.

### Estimativa detalhada

| Tarefa | Tempo |
|---|---|
| Setup projeto (Next.js + Supabase + Vercel) | 1h |
| Schema + auth | 1.5h |
| Telas do aluno | 2h |
| Sorteio + email | 1.5h |
| Painel admin | 1h |
| Etiqueta de origem (componente reutilizável) | 0.5h |
| Plano B + deploy + smoke test | 0.5h |
| **Total** | **~8h** |

---

## Entregável C — Sistema 2: Grand Prix do Trilho (~14h)

### O que faz

Painel ao vivo, projetado durante as 3 aulas, mostrando a turma como **carrinhos de F1 com capacete = avatar GitHub** se movendo pelo trilho de 5 etapas:

```
🏁 LARGADA → 🧠 IDEAÇÃO → 📝 DOCUMENTAÇÃO → 🛠 PROTÓTIPO → 🏆 CHEGADA
```

Posições atualizadas **automaticamente** via leitura de commits do GitHub.

### Como sabe onde cada um está (4 vias em cascata)

1. **Tags `[STAGE:X]` no commit message** — convenção em `.claude/rules/wizard-stage-tags.md`. Determinístico.
2. **Heurística por arquivos modificados** — `docs/business/BUSINESS-PLAN.md` aparece → DOCUMENTACAO.
3. **Análise de session-logs** — vocabulário do WIZARD identifica estágio.
4. **Marcação manual** — fallback final se nada funcionou.

### Stack

- **Frontend:** Next.js 15 (mesmo do Sistema 1, divide código).
- **Realtime:** Supabase Realtime (subscriptions no canal `positions`).
- **GitHub API:** Webhook configurado em cada repo de aluno + polling de fallback (Vercel Cron).
- **Animação:** Framer Motion.
- **Avatar:** API pública GitHub (`https://github.com/{user}.png`).
- **Som:** mini efeito sonoro na CHEGADA (bandeirada).

### Entregáveis

- [ ] Schema adicional Supabase (tabelas: `positions`, `events`, `commit_log`).
- [ ] Parser de commit (regex em JS pra `[STAGE:X]`).
- [ ] Heurística de fallback (analisar arquivos modificados).
- [ ] Webhook setup (instrução pro aluno + auto-config se possível).
- [ ] Worker queue (Vercel Cron) pra polling de fallback.
- [ ] Painel ao vivo (Next.js + Supabase Realtime).
- [ ] Animação dos carrinhos (Framer Motion).
- [ ] Som de bandeirada na CHEGADA.
- [ ] Captura final automática (screenshot da grade pós-Aula 3).
- [ ] **Etiqueta de origem** (mesmo componente do Sistema 1).
- [ ] **Skill nova `/grand-prix-tag`** que sugere a tag certa pro commit baseado nos arquivos modificados.
- [ ] Deploy em produção.

### Estimativa detalhada

| Tarefa | Tempo |
|---|---|
| Schema + parser de commits | 2h |
| Webhook + polling + worker | 2h |
| Heurística de fallback | 2h |
| Painel ao vivo + Realtime | 3h |
| Animação dos carrinhos | 2h |
| Som + captura final | 1h |
| Skill `/grand-prix-tag` | 1h |
| Deploy + smoke test + demo | 1h |
| **Total** | **~14h** |

---

## Entregável D — Repo demo "vet-saas-workshop" (~4h)

### O que faz

Projeto-isca usado em todas as demos das 3 aulas. Tem que ser:
- Suficientemente desenvolvido pra mostrar BP/Brief/TP/Sprint Roadmap exemplares.
- Suficientemente simples pra não distrair do conteúdo da aula.
- Domínio que ressoe com vibe coders BR não-tech (ex.: receituário veterinário SaaS).

### Entregáveis

- [ ] Repo público "vet-saas-workshop" criado.
- [ ] WIZARD rodado por completo (Stages 0–13).
- [ ] BP v0.0.1 + v0.0.2.
- [ ] Product Brief.
- [ ] Technical Plan.
- [ ] Sprint Roadmap (Sprint 0 + Sprint 1 esboçados).
- [ ] Privacy Audit rascunho.
- [ ] Registry Picks justificados.
- [ ] Prototype Lab com 1 fluxo rodando local.
- [ ] Tags `[STAGE:X]` em todos os commits relevantes (pra demo do Grand Prix).
- [ ] Eu compartilho a tela e mostro este repo nas Aulas 1, 2, 3.

### Estimativa: 4h

---

## Ordem de execução proposta

**Semana 1** — Fundação:
- Repo demo "vet-saas-workshop" inteiro.
- Banco de cases reais.
- Cálculo de custos.
- (Aproveitar: já existe muita coisa do AI Dev OS, pula muita etapa.)

**Semana 2** — Sistemas:
- Sistema 1 (Trilho do Red Team) completo.

**Semana 3** — Sistemas (continuação):
- Sistema 2 (Grand Prix do Trilho) completo.

**Semana 4** — Materiais didáticos:
- Slides das 3 aulas.
- Roteiros do facilitador.
- Cheat-sheets.

**Semana 5** — Polimento:
- Vídeo pré-aula.
- Smoke test integrado (eu rodando solo as 3 aulas pra mim mesmo, com os sistemas ativos).

**Semana 6** — Dry-run:
- Convidar 1–2 pessoas de confiança pra fazer o curso comigo (gratuito, gravado).
- Ajustes pós-dry-run.
- Marcar primeira turma beta.

---

## Riscos do Sprint e mitigações

| Risco | Mitigação |
|---|---|
| Sistema 2 dá mais trabalho que estimado (realtime é traiçoeiro) | Plano B: Sistema 2 funciona com botão manual ("avancei pra DOCUMENTACAO") em vez de leitura automática de commits. Lança como v1; v2 vem com automação. |
| Estimativas muito otimistas | Sprint planejado com 1 semana de folga (semana 5). |
| Cases reais saem do ar (links quebram) | Manter cópias locais (prints + screenshots) atualizadas. |
| Repo demo fica super longo e perde credibilidade ("ah, é só pra demo") | Pegar uma ideia REAL que ressoa (vet de bairro brasileiro), tratar como projeto vivo, manter pequeno. |
| Eu (instrutor) fico sem energia pra produzir tudo solo | Convidar 1 colaborador pra os Sistemas (que sabe Next.js + Supabase). Eu foco no didático. |

---

## Definição de pronto (DoD)

O Sprint 0 está pronto quando:

- [ ] Os 3 decks estão completos e revisados.
- [ ] Os 3 roteiros do facilitador estão escritos.
- [ ] As 3 cheat-sheets estão impressas (ou prontas pra imprimir).
- [ ] O vídeo pré-aula está publicado e linkado.
- [ ] Sistema 1 está em produção, testado com 5 usuários reais.
- [ ] Sistema 2 está em produção, testado com 5 commits reais ao vivo.
- [ ] Repo demo "vet-saas-workshop" está público e completo.
- [ ] Eu rodei sozinho as 3 aulas (no espelho ou com TA) e funcionou.
- [ ] Banco de cases atualizado com prints baixados.
- [ ] Cálculo de custos auditado (números reais, não chutados).

---

## O que vem depois deste Sprint

- **Dry-run** com 1–2 convidados (semana 6).
- **Workshop beta público** com 5–10 convidados (gratuito, gravado).
- **Lançamento público** (paid ou free a definir).
- **Vídeos das aulas publicados no YouTube + indexados em `course/videos/INDEX.md`**.
- **Iterações** baseadas em feedback real.

---

## Conexão com o AI Dev OS principal

Este Sprint é o **primeiro projeto real construído ponta-a-ponta com o AI Dev OS** depois do v0.4.4. Ele vai servir como:

1. **Case da Aula 1** — "olha o que a gente fez com isso" (mostro a etiqueta de origem dos sistemas durante a aula).
2. **Registry pack interno** — os sistemas viram packs reutilizáveis pra próximas turmas / outras escolas.
3. **Validação do trilho** — qualquer fricção que aparecer aqui vira issue no AI Dev OS principal.

Em outras palavras: este Sprint **dogfooda o produto**.

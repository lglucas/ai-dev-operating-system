# Sistema 2 — Grand Prix do Trilho

> Painel ao vivo projetado durante as 3 aulas mostrando a turma como **carrinhos de F1** se movendo pelo trilho do AI Dev OS em tempo real.

---

## Por que existe

Pra **tornar visível** o trilho do AI Dev OS sendo percorrido pela turma. Cria sensação de movimento coletivo, gameficação leve, e prova material de que todos seguem o mesmo método.

## O que faz

1. Cada aluno é representado por um **carrinho de F1** com capacete = avatar GitHub dele.
2. Carrinho avança nas 5 etapas conforme commits acontecem:
   - 🏁 LARGADA — repo criado.
   - 🧠 IDEAÇÃO — Stages 1–4 do WIZARD.
   - 📝 DOCUMENTAÇÃO — Stages 5–12.
   - 🛠 PROTÓTIPO — Stage 13.
   - 🏆 CHEGADA — app rodando local.
3. Sistema lê commits via GitHub API + tags `[STAGE:X]` (convenção em `.claude/rules/wizard-stage-tags.md`).
4. Painel projetado ao vivo durante as aulas. Movimento dos carrinhos é animado.
5. Som de bandeirada na CHEGADA. Aplauso coletivo.
6. Captura final = "diploma simbólico" da turma.

## Stack (revisada v0.4.6)

- **HTML estático** (`course/systems/index.html`) — mesma página única do Sistema 1, modo `#painel`. Sem build step, sem framework.
- **Vanilla JS + Alpine.js** (CDN) — interatividade leve sem bundling.
- **GSAP** (CDN) — animação dos carrinhos (substitui Framer Motion).
- **Supabase Realtime** (JS SDK via CDN) — subscription no canal `positions`.
- **Supabase Edge Function `poll-progress`** (Deno/TypeScript) — única peça server-side. Roda a cada 2min (Supabase Cron) e POLLEIA a API pública do GitHub para os repos cadastrados, parseia tags `[STAGE:X]` e atualiza a tabela `positions`.
- **API pública GitHub** para avatar (`https://github.com/{user}.png`).
- **Hosting:** GitHub Pages (`course/systems/` servido como site estático).

### Por que polling em vez de webhook receptor

A Edge Function **lê** a API pública do GitHub. **Aluno não configura nada no repo dele.** Sem webhook setup, sem GH Actions, sem secrets pra gerenciar. Aluno só commita normal com `[STAGE:X]` na mensagem (convenção opt-in já documentada em `.claude/rules/wizard-stage-tags.md`).

## Detecção do estágio (4 vias em cascata, lidas pela Edge Function `poll-progress`)

1. **Tag explícita `[STAGE:X]`** no commit message — preferida.
2. **Heurística por arquivos modificados** — fallback automático.
3. **Análise de session-logs** — fallback secundário.
4. **Marcação manual** no painel admin — fallback final (instrutor força).

## Skill associada

`/grand-prix-tag` — sugere a tag certa pro próximo commit baseado nos arquivos modificados.

## Por que é UAU

- Vira notícia: "tem painel ao vivo da minha turma."
- Cria sensação de tribo movendo junto.
- Captura final = material orgânico de marketing pra próximas turmas.
- Tem sabor lúdico (jogodaweb2/escaperoom2 do Aceleradora.eco) — interface de personalidade, não institucional.

## Plano B (caso automação não rode em produção a tempo)

- Versão v1 com **botão manual** no painel admin ("avancei carrinho do aluno X pra DOCUMENTACAO") — instrutor força.
- Automação (Edge Function polling commits) vira v2 pós-Sprint 0.

## Risco de segurança (resumo)

Repo público. Source da Edge Function visível. **Defesa não está em obscuridade — está em segredos**:

- `SUPABASE_URL` + `SUPABASE_ANON_KEY` ficam no HTML (são públicos por design, RLS protege as tabelas).
- `SUPABASE_SERVICE_ROLE_KEY` + `GITHUB_PAT` ficam **apenas em env vars da Supabase** (nunca no repo).
- `.env.example` documenta as variáveis sem valor real.
- Edge Function só LÊ GitHub API (não recebe POST público) → superfície de ataque mínima.

## Detalhes completos

Ver Sprint 0: [`../../sprints/sprint-0-fundacao.md`](../../sprints/sprint-0-fundacao.md), Entregável C.

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

## Stack

- Next.js 15 (mesmo projeto do Sistema 1 — divide código).
- Supabase Realtime (subscription no canal `positions`).
- GitHub Webhook (configurado em cada repo de aluno) + polling de fallback (Vercel Cron).
- Framer Motion (animação dos carrinhos).
- API pública GitHub para avatar (`https://github.com/{user}.png`).

## Detecção do estágio (4 vias em cascata)

1. **Tag explícita `[STAGE:X]`** no commit message — preferida.
2. **Heurística por arquivos modificados** — fallback automático.
3. **Análise de session-logs** — fallback secundário.
4. **Marcação manual** no painel — fallback final.

## Skill associada

`/grand-prix-tag` — sugere a tag certa pro próximo commit baseado nos arquivos modificados.

## Por que é UAU

- Vira notícia: "tem painel ao vivo da minha turma."
- Cria sensação de tribo movendo junto.
- Captura final = material orgânico de marketing pra próximas turmas.
- Tem sabor lúdico (jogodaweb2/escaperoom2 do Aceleradora.eco) — interface de personalidade, não institucional.

## Plano B (caso automação não rode em produção a tempo)

- Versão v1 com **botão manual** ("avancei pra DOCUMENTACAO") em cada aluno.
- Automação (parsing de commits) vira v2 pós-Sprint 0.

## Detalhes completos

Ver Sprint 0: [`../../sprints/sprint-0-fundacao.md`](../../sprints/sprint-0-fundacao.md), Entregável C.

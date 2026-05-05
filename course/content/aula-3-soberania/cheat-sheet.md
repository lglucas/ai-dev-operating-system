# 🛤 Cheat-sheet — Aula 3: Soberania

> 1 página densa pra imprimir. Tudo pra você operar SOZINHO depois desta aula.

---

## TESE DA AULA
**Não somos jangada. Somos submarino nuclear pilotado por gente que ouviu a IA.**

---

## STAGES JÁ COMPLETADAS

- [x] Stages 0–13 do WIZARD (Genesis completo).
- [x] Privacy audit aplicado.
- [x] Prototype rodando localmente.

## PRÓXIMOS PASSOS

- [ ] Sprint 1: primeira feature de produção.
- [ ] BANCA opcional (1 semana após Aula 3).
- [ ] Deploy primeiro fluxo (Vercel + Supabase).

---

## CONVERSAR COM CLAUDE (mantra desta aula)

| Anti-padrão | Padrão |
|---|---|
| "Faz X." | "Antes de fazer, me explica em PT-BR." |
| Aceita o que veio | Lê → confere → autoriza |
| "Tá errado" | "Não, considera Y?" |
| Continua no escuro | **`pare`. Reorganiza. Recomeça.** |

---

## SEGURANÇA — CHECKLIST OBRIGATÓRIO

Antes de cada deploy:
- [ ] `.env` no `.gitignore` ✓
- [ ] `.env.example` atualizado SEM valores reais ✓
- [ ] Nenhuma API key, senha, token no source ✓
- [ ] `/privacy-audit` rodado em features sensíveis ✓
- [ ] DPA assinada com vendors (Supabase, Resend, etc) ✓

---

## PRIVACY AUDIT — AS 9 PERGUNTAS

1. O que coleta?
2. Por quê?
3. Onde armazena?
4. Quem acessa?
5. Como controla acesso?
6. Quanto tempo retém?
7. Que logs gera?
8. O que faz se pedirem deletar?
9. Precisa atualizar política?

Sem responder as 9 → não merge.

---

## CUSTO REAL DE OPERAR (faixas)

| Estágio | Custo aprox. |
|---|---|
| Dev local + 10 testers | R$ 5–20/mês |
| MVP em produção (100 usuários) | R$ 50–150/mês |
| Crescimento (1k usuários) | R$ 300–800/mês |
| Escala (10k usuários) | R$ 2k–5k/mês |

Stack base: Vercel free + Supabase free → free tier suporta até ~500 usuários ativos.

---

## ROLLBACK SEGURO

```bash
# Se a IA fez algo ruim e ainda não commitou:
git stash

# Se já commitou mas quer desfazer:
git revert HEAD

# Sempre tem volta. Nunca perca o trabalho.
```

---

## MULTI-AI REVIEW — quando vale

| Situação | Multi-AI? |
|---|---|
| Decidir stack pra projeto novo | ✅ |
| Revisar contrato | ✅ |
| Arquitetura crítica de segurança | ✅ |
| PR de feature comum | ❌ |
| Refactor pequeno | ❌ |

---

## SKILLS DO DIA-A-DIA

| Quando | Comando |
|---|---|
| Início de sessão | `/daily-standup` ou "onde paramos?" |
| Antes de feature sensível | `/privacy-audit` |
| Custos preocupantes | `/cost-watchdog` |
| Decisão hard-to-reverse | `/multi-ai-review` |
| IA fez merda | `/rollback-safe` |
| Fim de sprint | `/sprint-close` |

---

## TAGS DE COMMIT (continuação)

```
[STAGE:PROTOTIPO]    → você está aqui
[STAGE:CHEGADA]      → app rodando localmente
[STAGE:DEPLOY]       → produção (após Sprint 1)
```

---

## COMUNIDADE

- **WhatsApp da turma:** [link permanente]
- **Repo público AI Dev OS:** github.com/lglucas/ai-dev-operating-system
- **Painel Grand Prix da sua turma:** [URL]
- **BANCA opcional:** próxima semana, [link]

---

## PACTO COLETIVO QUE VOCÊ ASSINOU

- [ ] 🌟 Estrelinha no repo do AI Dev OS.
- [ ] 📣 Post nas redes (#AiDevOS #TrilhoTremBala).
- [ ] ✊ 1 prática própria sustentada pra sempre.

---

🤖 **NÃO SOMOS JANGADA. VAI LÁ E FAZ.**

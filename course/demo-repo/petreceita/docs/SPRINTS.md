# Sprint Roadmap — PetReceita

**Versão:** 0.0.2
**Data:** 2026-05-04
**Origem:** WIZARD Stage 12.

---

## Sprint 0 — Genesis (concluído)

WIZARD Stages 0–12 aplicados:
- BP v0.0.1 → revisão humana → BP v0.0.2.
- Product Brief.
- Technical Plan.
- Sprint Roadmap (este arquivo).
- session-log de Genesis.

**Saídas:** docs/, CLAUDE.md, README.md, .env.example, prototype-lab esqueleto.

---

## Sprint 1 — Receita básica + ICP (3 semanas)

**Objetivo:** vet logado consegue criar receita, assinar com ICP, e enviar PDF pro tutor.

**Entregáveis:**
- [ ] Setup Next.js + Supabase + Vercel (Day 1).
- [ ] Schema Postgres aplicado (Day 1).
- [ ] Auth com magic link (Days 2-3).
- [ ] Tela "criar receita" (Days 4-7).
- [ ] PDF generation (Days 8-10).
- [ ] Integração ICP-Brasil A3 (Days 11-15) — depende de Stage 11.5.
- [ ] Envio por email via Resend (Days 16-17).
- [ ] Página pública pro tutor (Days 18-20).
- [ ] Smoke test com 3 vets-piloto (Day 21).

**Risk track:**
- ICP-Brasil pode atrasar se provedor demorar pra responder. Mitigação: ter 2 provedores como backup.

---

## Sprint 2 — Histórico + busca (2 semanas)

- [ ] Listar receitas por pet.
- [ ] Reaproveitar receita anterior.
- [ ] Busca por tutor/pet.
- [ ] Ajustes UX baseado em feedback dos 3 vets-piloto.
- [ ] Onboarding 1ª vez (cadastro de clínica).

---

## Sprint 3 — Conformidade + Privacy (2 semanas)

- [ ] Log de prescrições controladas (regulatório CFMV).
- [ ] `/privacy-audit` aplicado em features que tocam dados sensíveis.
- [ ] Privacy Policy + Terms of Use no site.
- [ ] DPA assinada com Supabase e Resend.
- [ ] Auditoria CFMV: layout do PDF, dados obrigatórios, hash de assinatura.

---

## Sprint 4 — Onboarding pago (2 semanas)

- [ ] Integração com Stripe ou Asaas pra cobrar mensalidade.
- [ ] Plano Solo / Clínica / Boutique.
- [ ] 5 vets-piloto começam a pagar (validação do pricing real).
- [ ] WhatsApp Business envio (decisão fase 1 ou 2 — open question).

---

## Sprint 5 — Polimento + lançamento beta (1 semana)

- [ ] Landing page.
- [ ] Página de signup.
- [ ] Suporte WhatsApp manual.
- [ ] Anunciar em 5 grupos de vet no WhatsApp.
- [ ] Meta: 20 vets pagando até fim do mês.

---

## Marcos do BP × Sprints

| BP T1 (10 vets pagando) | Sprints 1-3 |
| BP T2 (50 vets) | Sprints 4-6 |
| BP T3 (100 vets) | Sprints 7-9 |
| BP T4 (200 vets) | Sprints 10+ |

---

🤖 Sprint Roadmap construído com o [AI Dev Operating System](https://github.com/lglucas/ai-dev-operating-system) — WIZARD Stage 12.

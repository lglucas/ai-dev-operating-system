# Product Brief — PetReceita

**Versão:** 0.0.2
**Data:** 2026-05-04
**Origem:** WIZARD Stage 10 (Product Brief derivation), após BP v0.0.2 aprovado.

> Este documento traduz o BP em **entendimento operacional do produto**: funcionalidades, fluxos, telas, e o que vai/não vai no MVP.

---

## 1. Job to be done

> "Quando estou prescrevendo medicação pro pet de um cliente novo, eu quero gerar uma receita legalmente válida em <30 segundos, enviar pro tutor pelo WhatsApp, e ter o histórico salvo automaticamente — pra que eu não dependa de talão de papel nem perca tempo digitando o que já digitei antes."

---

## 2. Personas operacionais

### Vet em consulta (usuário primário)
- Logado no notebook ou tablet.
- Tem 30s entre o final da consulta e a próxima.
- Precisa: criar receita rápido, com nome do pet pré-preenchido, medicação digitada com autocomplete, dose padrão sugerida.
- Não precisa: dashboard de métricas, relatórios complexos, módulo financeiro.

### Tutor (usuário secundário)
- Recebe link por WhatsApp ou email.
- Abre no celular.
- Precisa: ver receita legível, baixar PDF, mostrar pra farmácia.
- Não precisa: criar conta, instalar app, fazer login.

### Admin (instrutor / dono da clínica)
- Configura clínica, cadastra vets, vê uso/billing.
- Acessa raramente (1x/mês).

---

## 3. MVP — features que vão (Sprint 1–3)

### Core (Sprint 1)
- [ ] Login do vet (CRMV + Supabase magic link).
- [ ] Cadastro rápido de tutor (nome, CPF, telefone) + pet (nome, espécie, raça, idade, peso).
- [ ] Criação de receita: medicamento (autocomplete na BulárioPet — base pública), dose, posologia, observações.
- [ ] Geração de PDF da receita com dados clínicos + assinatura ICP.
- [ ] Envio do PDF pro tutor por email (Resend) e link pra abrir no browser.

### Histórico básico (Sprint 2)
- [ ] Listar receitas anteriores por pet.
- [ ] Reaproveitar receita anterior (clone + ajusta).
- [ ] Buscar tutor/pet por nome ou CPF.

### Conformidade (Sprint 3)
- [ ] Log obrigatório de prescrição de controlados (Lista A, B, C).
- [ ] Privacy audit completo + página de Privacy Policy + Terms of Use.
- [ ] Auditoria CFMV (verificar se layout e dados batem com regulamentação).

---

## 4. Features que NÃO vão (anti-scope)

- ❌ Agendamento de consultas (não é o problema que resolvemos).
- ❌ Prontuário completo (escopo de ERP, não nosso).
- ❌ Módulo financeiro / NF-e.
- ❌ Mobile app nativo (responsive web é suficiente fase 1).
- ❌ Multi-clínica / franquia (vai pra fase 2).

---

## 5. Fluxos principais (telas)

### Fluxo A — Criar receita (8 telas)
1. Login do vet.
2. Buscar tutor (ou criar novo).
3. Buscar pet do tutor (ou criar novo).
4. Tela de prescrição: medicamento + dose + posologia.
5. Adicionar mais um medicamento (mesmo formulário).
6. Revisar receita.
7. Assinar com ICP (popup do plugin do certificado).
8. Confirmação + opções (enviar email, copiar link, baixar PDF).

### Fluxo B — Tutor abre receita (1 tela)
1. Click no link do email/WhatsApp → abre página pública com PDF da receita + botão "baixar".

### Fluxo C — Histórico (3 telas)
1. Buscar pet.
2. Ver lista de receitas anteriores.
3. Clicar pra abrir + opção "criar nova baseada nesta".

---

## 6. Decisões de UX

- **Sem dashboard inicial.** Login leva direto pra busca de tutor.
- **Autocomplete agressivo.** Dose e posologia padrão por medicamento (configurável).
- **Mobile-first responsive.** Vet usa tablet em 40% dos casos.
- **Cores neutras + 1 acento.** Não é "cute" — é ferramenta profissional.
- **Sem modal de upgrade.** Quem é Solo é Solo.

---

## 7. Métricas de sucesso (MVP)

- **Adoção:** vet completa primeira receita em <5min após signup.
- **Engajamento:** vet emite ≥10 receitas/mês até dia 30.
- **Retenção:** vet que emitiu ≥10 receitas/mês renova mês 2 (95%+ alvo).
- **NPS:** ≥50 nos primeiros 30 dias.

---

## 8. Conexão com BP

| Promessa do BP | Como Brief entrega |
|---|---|
| "Receita digital legalmente válida" | Assinatura ICP-Brasil A3 (Sprint 1) |
| "<30 segundos por receita" | Fluxo A com autocomplete + dose padrão |
| "Sem complexidade de ERP" | Anti-scope explícito (sem agendamento, sem financeiro) |
| "Conformidade CFMV" | Log de controlados + auditoria (Sprint 3) |

---

## 9. Perguntas abertas pro Sprint 1

1. Plugin de certificado ICP é via browser extension ou via API server-side? (Tech decisão)
2. Bulário público — qual fonte oficial pra autocomplete de medicamentos?
3. Confirmação CFMV: precisa CRMV no PDF ou em campo separado?

---

🤖 Brief construído com o [AI Dev Operating System](https://github.com/lglucas/ai-dev-operating-system) — WIZARD Stage 10.

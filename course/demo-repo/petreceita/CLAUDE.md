# CLAUDE.md — PetReceita

Golden rules locais espelhando o AI Dev Operating System. Quando o Claude Code roda neste repo, ele lê este arquivo primeiro.

---

## Golden rules (do AI Dev OS)

1. Não codifique antes do contexto.
2. Use `START-HERE.md` e `WIZARD.md` do AI Dev OS principal pra novas decisões.
3. Mantenha as camadas de documentação separadas (`BUSINESS-PLAN.md` ≠ `PRODUCT-BRIEF.md` ≠ `TECHNICAL-PLAN.md`).
4. Preserve memória de decisão em `session-log/`.
5. Revisão humana é obrigatória pra BP v0.0.1 antes de v0.0.2.
6. Sem fatos inventados em mercado, regulação, segurança ou pricing.
7. Arquitetura por concerns, arquivos abaixo de 200 linhas.
8. Sem segredos no repo — `.env` vai pro `.gitignore`.
9. Code generated tem header com purpose/version/sprint.

---

## Específico do PetReceita

- **Conformidade CFMV/CFM** é critério de Definition of Done. Toda feature que toca prescrição passa por privacy-audit + verificação regulatória antes de mergear.
- **Assinatura digital ICP-Brasil A3** é requisito não-negociável pra a receita ter validade jurídica.
- **LGPD** se aplica — dados de tutor (nome, CPF, contato) e do pet (saúde) são dados pessoais sensíveis. Privacy audit obrigatório.
- **Não armazenar** documentos digitalizados de prescrição médica que não tenham origem no nosso sistema (pode complicar responsabilidade legal).

---

## Comandos mais úteis pra este projeto

- `/privacy-audit` — antes de mergear qualquer feature que toque dados de pet ou tutor.
- `/registry-pick` — antes de adicionar dependência nova.
- `/sprint-start`, `/sprint-close` — disciplina de sprint.

---

## Stack escolhida

Ver `docs/technical/TECHNICAL-PLAN.md`. Resumo:
- Next.js 15 (App Router)
- Supabase (auth + DB + Storage de PDFs)
- Resend (envio de email com receita)
- Vercel (deploy)
- ICP-Brasil A3 via SDK do parceiro (a definir — Bry, ITTRU ou similar)

---

## O que NÃO está neste demo

- Sprint 1 ainda não foi rodado — Stage 14 do WIZARD.
- Prototype Lab é mock HTML estático — não tem Supabase real configurado.
- Não há código de produção real.

Este repo é referência pedagógica.

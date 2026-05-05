# 🐾 PetReceita

> SaaS de receituário digital pra clínicas veterinárias pequenas no Brasil. Substitui o talão de papel. Conformidade com CFMV. Construído sobre o AI Dev Operating System.

---

## ⚠️ Este é um repo demo

Este projeto vive em `course/demo-repo/petreceita/` dentro do repo do **AI Dev Operating System** com fins **didáticos**: é o exemplo usado nas demos das 3 aulas do workshop.

Quando virar workshop ao vivo, snapshot vai pra repo separado `lglucas/petreceita-demo` com WIZARD rodado de ponta a ponta (Stages 0–13) — incluindo BP, Brief, Technical Plan, Sprint Roadmap, e prototype lab funcionando.

Hoje (Sprint 0 do AI Dev OS) é **MVP didático** — esqueleto suficiente pra mostrar como um projeto fica depois do WIZARD.

---

## Por que existe

- **Problema real:** ~80k veterinários ativos no Brasil. Clínicas pequenas (1–3 vets) ainda usam talão de papel pra receita. Hospitais grandes têm ERPs caros e complexos. **Mercado mal atendido no meio.**
- **Solução:** receita digital simples, com assinatura conforme CFMV, geração de PDF, envio por email/WhatsApp pro tutor, e histórico por pet.
- **Por que agora:** Prescrição Eletrônica é regulamentada no Brasil desde 2020 (CFM/CFMV). Mercado vet ainda não internalizou.

---

## 🛤 Etiqueta de origem

```
🛤 CONSTRUÍDO COM AI DEV OS
WIZARD: Stages 0–13 aplicados
Skills: registry-pick, processize, privacy-audit
Stack: Next.js + Supabase + Resend + ICP-Brasil A3
Tempo de build: ~ a definir após Sprint 0
```

---

## Estrutura

```
petreceita/
├── README.md                       (este arquivo)
├── CLAUDE.md                       (golden rules — espelho do AI Dev OS)
├── CHANGELOG.md                    (versões do produto)
├── .env.example                    (template de env vars)
├── docs/
│   ├── business/BUSINESS-PLAN.md   (BP v0.0.2)
│   ├── product/PRODUCT-BRIEF.md    (entendimento operacional)
│   ├── technical/TECHNICAL-PLAN.md (arquitetura, stack, segurança)
│   └── SPRINTS.md                  (roadmap)
├── knowledge-base/                 (research bruto)
├── session-log/
│   ├── INDEX.md
│   └── 2026-05-04-genesis.md
└── prototype-lab/                  (HTML mock dos primeiros fluxos)
```

---

## Como usar este demo

### Como aluno (curso AI Dev OS)
- Você verá este repo nas demos das Aulas 1, 2 e 3.
- Não precisa rodar — é só referência do que SEU repo vai parecer no fim do curso.

### Como instrutor
- Use a tela compartilhada deste repo durante as Pílulas 1 e 2 da Aula 1.
- Mostre os 6 documentos (BP, Brief, TP, Sprints, Privacy, Registry) na Aula 2.
- Mostre o prototype-lab rodando localmente na Aula 3.

### Como dev curioso
- Leia `docs/business/BUSINESS-PLAN.md` pra entender o produto.
- Leia `docs/technical/TECHNICAL-PLAN.md` pra ver as decisões técnicas.
- Leia `session-log/` pra ver o "porquê" de cada decisão.

---

## Status

- [x] Stage 0: Repository comprehension
- [x] Stage 0.5: Detach from OS-origin (este repo é o próprio demo)
- [x] Stage 1–4: Ideação + 10 perguntas + plano de pesquisa
- [x] Stage 5–9: Wave 1 + Wave 2 + Wave 3 + BP v0.0.1 + v0.0.2
- [x] Stage 10: Product Brief
- [x] Stage 11: Technical Plan
- [ ] Stage 11.5: Registry pick
- [x] Stage 12: Sprint roadmap
- [ ] Stage 13: Prototype Lab acendido
- [ ] Sprint 1: Em execução

---

## Licença

MIT. Mesma do AI Dev OS principal.

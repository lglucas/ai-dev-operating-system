# Business Plan — PetReceita

**Versão:** 0.0.2 (após Wave 2 red team + human review)
**Data:** 2026-05-04
**Autor:** time PetReceita, com auxílio do AI Dev Operating System

---

## 1. Tese de produto

> Clínicas veterinárias pequenas no Brasil ainda usam talão de papel pra prescrever medicação porque os ERPs grandes (Vetus, Vetsoft, Animati) são caros, complexos e desproporcionais ao porte delas. Existe um nicho em quem precisa apenas de **receituário digital legalmente válido** sem comprar plataforma inteira.

**PetReceita** é a ferramenta menor possível que resolve **só esse problema**, com **conformidade CFMV/CFM** e **assinatura ICP-Brasil**, por preço de SaaS (R$49–99/vet/mês).

---

## 2. Cliente-alvo

### Persona principal: Vet de bairro
- Pessoa física, 1–3 vets na clínica.
- Atende ~15-25 pets por dia.
- Já usa WhatsApp pra mandar foto da receita pro tutor.
- Não tem ERP. Talão de papel. Caderno de anotações.
- Faixa de receita pessoal: R$8k–18k/mês.

### Persona secundária: Clínica boutique
- 4–8 vets, foco em consulta especializada (dermato, cardio, oncologia).
- Já tem ERP mas reclama do módulo de receituário (clunky).
- Pagaria PetReceita como complemento se for **mais rápido** que o atual.

---

## 3. Mercado (com fonte)

- **~80 mil vets ativos no Brasil** (CFMV — Conselho Federal de Medicina Veterinária, dados públicos do registro profissional).
- **~38 mil estabelecimentos** veterinários registrados (mesma fonte).
- **TAM (mercado total):** ~80k vets × R$49 (entry tier) × 12 meses = R$47M/ano se 100% adotassem.
- **SAM (mercado endereçável):** clínicas pequenas (1-3 vets) que não tem ERP. Estimativa de 60% do mercado = ~48k vets = R$28M/ano.
- **SOM (realista pra ano 1):** capturar 0,5% do SAM = ~240 vets = ~R$140k/ano em ARR.

> ⚠️ Open question: validar a estimativa de "60% sem ERP" via pesquisa qualitativa com 20 vets em 3 cidades antes de bater pricing definitivo.

---

## 4. Problema → Solução

| Problema | Como PetReceita resolve |
|---|---|
| Talão de papel rasga, perde, dificulta histórico | Receita digital com PDF + histórico por pet |
| Receita escrita à mão é ilegível | Texto digitado, layout limpo |
| Tutor liga reclamando que perdeu o papel | Tutor acessa por link enviado por email/WhatsApp |
| Vet anota controlado em caderno paralelo | Sistema mantém log de prescrições controladas |
| Receita digital "caseira" não tem validade legal | Assinatura ICP-Brasil A3 (validade jurídica) |
| ERP grande é R$300+/mês | PetReceita: R$49–99/vet/mês |

---

## 5. Modelo de negócio

### Pricing (proposta)

| Plano | Preço | Inclui |
|---|---|---|
| **Solo** | R$49/mês | 1 vet, até 100 receitas/mês |
| **Clínica** | R$129/mês | até 3 vets, receitas ilimitadas |
| **Boutique** | R$299/mês | até 8 vets, receitas ilimitadas, integração via API |

### Custos variáveis principais
- Supabase: tier gratuito até 500MB DB, depois ~US$25/mês (Pro)
- Vercel: tier gratuito até 100GB bandwidth/mês
- Resend: 3000 emails/mês grátis, depois US$0,80/1000 emails
- ICP-Brasil API: ~R$0,50–1,00 por assinatura (provedor a definir)
- **Custo médio por vet ativo:** R$3–6/mês na infra (margem alta).

### Aquisição

- **Canais primários:** WhatsApp (boca-a-boca em grupos de vet), Instagram (vídeos curtos de "antes/depois"), Google Search ("receita digital veterinário").
- **Canais secundários:** parceria com cursos pra recém-formados, congressos regionais.
- **CAC alvo (ano 1):** R$80–120 por vet via paid + R$0 via boca-a-boca.
- **LTV alvo:** R$49 × 18 meses = R$880 (entry tier, churn 5%/mês).

---

## 6. Diferenciação

| Concorrente | Forte | Fraco | Como ganhamos |
|---|---|---|---|
| Vetus (BR) | ERP completo, dominante | Caro, lento, módulo de receita ruim | Foco só em receita, mais rápido, mais barato |
| Vetsoft (BR) | Conhecido em hospitais | Não atende vet solo | Pricing pra solo |
| ePrescrição (Memed equiv. para vet) | Não existe ainda | — | Ser primeiro mover no nicho vet |

> ⚠️ Open question: validar se algum concorrente já lançou — pesquisar Crunchbase BR + ProductHunt + Google Patents.

---

## 7. Riscos identificados (red team Wave 2)

| Risco | Severidade | Mitigação |
|---|---|---|
| CFMV pode mudar regulamentação de receita digital | Alta | Roadmap reativo. Mantenedor responsável por monitorar boletins do CFMV. |
| Custo de ICP-Brasil A3 inviabiliza solo (R$200/ano por vet pro certificado) | Média | Plano Solo absorve custo no preço. Comunicar valor agregado. |
| Vet idoso resiste a digital | Alta | Foco em vets <45 anos no ano 1. Vet idoso vira fase 2 com onboarding 1:1. |
| LGPD com dado sensível de saúde do pet | Alta | Privacy audit obrigatório, contrato DPA com Supabase, consentimento explícito do tutor no signup. |
| Concorrente grande copia (Memed cria versão vet) | Média | Velocidade de execução + foco no nicho. Aceitar que cresceríamos pra acquihire ou nicho defensável. |
| Vet não confia em sistema desconhecido pra prescrição controlada | Alta | Construir prova social cedo (depoimentos de vets early adopters), oferecer trial 30 dias. |

---

## 8. Marcos do primeiro ano

| Trimestre | Marco |
|---|---|
| T1 | MVP com receita simples + assinatura ICP. 10 vets-piloto pagando. |
| T2 | Histórico por pet, integração WhatsApp Business. 50 vets pagantes. |
| T3 | Plano Boutique com API. 100 vets pagantes (ARR ~R$70k). |
| T4 | Receita controlada com log obrigatório. 200+ vets (ARR ~R$140k). |

---

## 9. Time

- 1 founder técnico (vibe coder com AI Dev OS).
- Possível co-founder vet pra credibilidade no mercado (pra recrutar).
- Suporte: WhatsApp manual ano 1, chatbot fase 2.

---

## 10. Por que VOCÊ deveria construir isso

> Esta seção é apenas relevante se o BP for usado pra apresentação a investidores, parceiros ou aceleradoras. Em uso interno do founder, pode pular.

PetReceita é um caso de "vibe coder com método": mercado real, regulação clara, problema concreto, solução simples, custo baixo de operação. **Defensibilidade vem de execução, não de IP.**

---

## Open questions a resolver no Sprint 1

1. Validar 60% sem ERP com 20 vets em pesquisa qualitativa.
2. Definir provedor ICP-Brasil A3 (Bry vs ITTRU vs ValidCertificadora).
3. Confirmar requisitos exatos do CFMV pra receita controlada (Lista A, B, C).
4. Pricing definitivo após teste com 5 vets-piloto pagantes.
5. Decidir se WhatsApp Business API é fase 1 ou fase 2.

---

🤖 BP construído com o [AI Dev Operating System](https://github.com/lglucas/ai-dev-operating-system) — WIZARD Stages 5–9 aplicados (Wave 1 research + Wave 2 red team + Wave 3 consolidação).

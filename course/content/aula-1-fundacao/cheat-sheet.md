# 🛤 Cheat-sheet — Aula 1: Fundação

> 1 página densa pra imprimir. Tem tudo que você precisa pra os primeiros 7 dias depois da Aula 1.

---

## TESE DA AULA
**Você não está de muletas, isso aqui é um fucking Gundam.**

---

## SETUP (você já fez na aula)

```bash
# 1. Repo seu (já criado via "Use this template")
git clone https://github.com/SEU-USUARIO/SEU-REPO.git
cd SEU-REPO

# 2. Roda Claude
claude

# 3. Cola este prompt
"Claude, leia START-HERE.md e siga o WIZARD."
```

---

## STAGES JÁ COMPLETADAS (Aula 1)

- [x] Stage 0: Repository comprehension.
- [x] Stage 0.5: Detach (se você usou template, já tá feito).
- [x] Stage 1: Tell me about your project.
- [x] Stage 2: Ideação raw.
- [x] Stage 3: 10 perguntas estratégicas.

## STAGES PARA ESTA SEMANA

- [ ] Stage 4: Aprovar plano de pesquisa do Claude.
- [ ] Stage 5 (parcial): Wave 1 — pesquisa de mercado e competitor.

---

## COMANDOS ÚTEIS

| Quando | Comando |
|---|---|
| Volta da pausa, quer recap | `Onde paramos no WIZARD?` |
| Não entendeu uma resposta | `Me explica em PT-BR mais simples.` |
| Quer salvar uma decisão | `Cria session-log dessa decisão.` |
| Quer ver progresso visual | Acessa o painel: [URL] |

---

## REGRAS QUE VOCÊ TEM QUE SEGUIR

1. **Não codifique antes do contexto.** Stage por Stage.
2. **Sem segredos no repo.** `.env` vai pro `.gitignore`. Nunca cola chave de API no chat com a IA.
3. **Sem fatos inventados.** Toda afirmação de mercado, regulação ou comportamento de cliente precisa de fonte.
4. **Documente decisões.** Se decidiu algo material, vai pro `session-log/`.

---

## RED FLAGS — para se você ver

- 🚩 IA falando "todos os clientes querem X" sem fonte → exige fonte.
- 🚩 IA querendo gerar código antes de você ter Brief → para. Volta pro Stage.
- 🚩 IA misturando BP com Technical Plan → cada documento tem responsabilidade única.

---

## TAGS DE COMMIT (opcional, mas recomendado)

```
[STAGE:LARGADA]      → primeiro commit
[STAGE:IDEACAO]      → Stages 1-4 (ideação, perguntas, plano de pesquisa)
[STAGE:DOCUMENTACAO] → Stages 5-12 (BP, Brief, Technical Plan, Sprints)
[STAGE:PROTOTIPO]    → Stage 13 (Prototype Lab)
[STAGE:CHEGADA]      → app rodando localmente
```

Exemplo:
```
docs(business): BP v0.0.1 [STAGE:DOCUMENTACAO]
```

Sistema do curso lê e move seu carrinho no painel automaticamente.

---

## CONTATOS

- **Comunidade:** WhatsApp [link]
- **Repo do AI Dev OS:** github.com/lglucas/ai-dev-operating-system
- **Painel ao vivo:** [URL do Grand Prix]

---

## PRÓXIMA AULA

**Aula 2 — Construção** | "AI sem contexto é menino no sandbox."

Cheguem com:
- Stage 5 (Wave 1) iniciado em casa.
- BP em rascunho.
- 3 dúvidas anotadas.

---

🤖 **VAI LÁ E FAZ.**

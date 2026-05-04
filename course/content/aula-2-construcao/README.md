# Aula 2 — Construção

> **TESE:** IA sem contexto é menino no sandbox. IA com tríade **descobrir + aprofundar + documentar** é estagiário sênior — produzindo em horas o que time de especialistas cobra R$50k em 3 meses pra entregar.

> **TAGLINE:** "AI sem contexto é menino no sandbox."

> **DURAÇÃO:** 2h15min (135min) — tempo estourado aceito pelo user em v3.3.

---

## ENTREGA MÍNIMA — perguntas que esta aula vai responder

1. Como detectar quando a IA está alucinando — em pesquisa, em mercado, em fato?
2. Por que red team é OBRIGATÓRIO antes de fechar BP?
3. Por que BP, Brief e Technical Plan são 3 documentos separados — o que perde quando a gente mistura?
4. Por que arquitetura por concerns (não por layers) e o que muda na prática quando o projeto cresce?
5. Por que limite de 200 linhas por arquivo — qual a diferença real na produtividade da IA?
6. Como o Registry te impede de copiar repo aleatório sem critério?

## FATOR DIA SEGUINTE

O aluno abre, no dia seguinte, **6 documentos profissionais** sobre o projeto dele:
- BP (Business Plan)
- Product Brief
- Technical Plan
- Sprint Roadmap
- Privacy Audit (rascunho)
- Registry Picks (escolhas justificadas)

Todos pensados, revisados e decididos.

**Custo total: centavos de tokens** (tipicamente R$ 5 a R$ 15 em uma sessão de 3–4h).
**Custo de mercado: R$ 50k em 3 meses de consultor especialista.**

**Ele acabou de comprar tempo de vida.**

---

## FLUXO TTT

| Elemento | Conteúdo |
|---|---|
| **TESE** | Tríade descobrir + aprofundar + documentar = estagiário sênior em horas. |
| **TAGLINE** | "AI sem contexto é menino no sandbox." |
| **TRECO** | Geração dos 6 documentos profissionais ao vivo + upload no Sistema 1 (Trilho do Red Team) ao final. |

---

## FRAMEWORK DA AULA 2 (135min)

| # | Bloco | Início | Fim | O que acontece |
|---|---|---|---|---|
| 1 | IGNITE | 0:00 | 0:10 | Aluno voluntário (escolhido na A1) compartilha 5min: cagada própria com IA / projeto / fato de mercado. |
| 2 | Comentários sobre Ignite + Mapa Conectivo | 0:10 | 0:18 | Eu amarro com Aula 1, retomo compromissos públicos cumpridos. Mostro Grand Prix do Trilho — quantos carrinhos cruzaram pra IDEACAO. |
| 3 | Pílula 1 — Wave 1 (Research) e como detectar IA alucinando | 0:18 | 0:30 | Research-discipline: fato vs. inferência vs. assunção. Como pedir fonte pra IA. Como rejeitar resposta sem fonte. |
| 4 | Vai-lá-e-faz: Stage 5 com seu projeto | 0:30 | 0:50 | Cada aluno roda Wave 1 ao vivo. Claude pesquisa o mercado dele. |
| 5 | Roda de descoberta (rápida) | 0:50 | 0:56 | 2–3 alunos: 1 fato que pesquisa achou que os surpreendeu. |
| 6 | Pílula 2 — Wave 2 (Red Team) + as 3 camadas + 200 linhas | 0:56 | 1:10 | Por que red team. Por que doc layers. Concerns ≠ layers. 200 linhas. |
| 7 | Pílula 3 — a TRÍADE: descobrir → aprofundar → documentar | 1:10 | 1:18 | Como os 6 docs nascem da tríade. **Conta da liberdade**: R$50k vs. centavos. |
| 8 | Vai-lá-e-faz: Stage 6–11 — gerar BP, Brief, Technical Plan | 1:18 | 1:50 | Cada aluno avança. Eu circulo na sala via DM. |
| 9 | TRECO 2 — instruções e upload | 1:50 | 1:58 | "Vão subir o link do repo de vocês no nosso sistema. Vou explicar como funciona." Mostro tela do Sistema 1. |
| 10 | TRECO 2 — execução: upload + sorteio anunciado | 1:58 | 2:10 | Cada aluno sobe o repo. Sistema confirma. Sorteio de duplas anunciado. Cada um recebe 2 repos pra atacar até a Aula 3. |
| 11 | Check-out + Compromisso | 2:10 | 2:15 | Cada aluno: 1 palavra de saída + compromisso de chegar com red team feito. |

**Sem intervalo formal.** Pode haver 1min de pausa entre Pílulas se rolar fadiga visível.

---

## Pílulas — pontos-chave

### Pílula 1 — Como detectar IA alucinando

- **Fato com fonte:** "segundo X, em Y, Z." Verificável.
- **Inferência:** "pelo padrão observado, espera-se que…" Razoável mas não comprovado.
- **Assunção:** "todos os clientes querem…" Sem evidência.
- **Como pedir fonte:** "Onde você leu isso? Me dá o link e a data." Se IA não dá: rejeita.
- **Regra de ouro:** sem fonte explícita pra dado de mercado/regulação/comportamento, não vai pro BP.

### Pílula 2 — Red Team + 3 camadas + 200 linhas

- **Red Team:** IA tem que atacar a própria proposta antes de aprovar. Nunca pular.
- **3 camadas — por que separar:**
  - **BP** = narrativa de negócio. Quem é cliente, como ganha dinheiro, qual a teoria do produto.
  - **Brief** = entendimento operacional do produto. Funcionalidades, fluxos.
  - **Technical Plan** = arquitetura, stack, segurança, testes.
  - Misturar = perde clareza, perde rastreabilidade, perde a capacidade de revisar uma camada sem mexer nas outras.
- **Concerns ≠ layers:** organize código por feature/concerns (auth, billing, dashboard) — cada feature deletável. Não por layer (controllers/services/models) — quando cresce, vira labirinto.
- **200 linhas:** IA confunde-se em arquivos longos. Demo: peço refactor num arquivo de 800 linhas vs. 150. Diferença é gritante.

### Pílula 3 — A TRÍADE

```
DESCOBRIR              APROFUNDAR              DOCUMENTAR
(Wave 1)               (Wave 2 - Red Team)     (BP/Brief/TP/Sprints)
   │                          │                        │
   │ pesquisa de mercado      │ ataca assumptions      │ separa em 3 camadas
   │ competitor analysis      │ business red team      │ rastrea decisões
   │ regulação e contexto     │ technical red team     │ session-log
   │                          │                        │
   ▼                          ▼                        ▼
              6 DOCUMENTOS PROFISSIONAIS EM HORAS
              Custo: centavos. Mercado: R$50k em 3 meses.
```

Aluno olha pra essa imagem e percebe: a tríade não é burocracia. É **alavanca matemática.**

---

## Mapa Conectivo

**Pré-Aula 2:** post no WhatsApp na noite anterior — "Amanhã a gente cria os 6 docs. Vai trazer fome de fazer."

**Pós-Aula 2 (manhã seguinte):** post no WhatsApp:
- 3 momentos altos.
- Lista de quem subiu o repo + sorteio anunciado.
- Lembrete da lição de casa: red team em 2 repos sorteados.
- Prévia da Aula 3: "Vamos abrir com a Galeria do Red Team."

---

## Sistemas de apoio ligados nesta aula

- **Trilho do Red Team (Sistema 1):** ATIVO. Ao final da aula, todos sobem o repo no sistema. Sistema sorteia duplas anônimas. Cada aluno recebe 2 repos pra atacar até A3.
- **Grand Prix do Trilho (Sistema 2):** projetado durante a aula. Carrinhos cruzam de IDEACAO pra DOCUMENTACAO conforme alunos avançam Stages.

---

## Pilares Perestroika cobertos

| Pilar | Como aparece |
|---|---|
| **Conteúdo** | Pílulas 1, 2, 3. Tríade explícita. Conta R$50k vs. centavos = autoralidade do facilitador. Entrega Mínima e Fator Dia Seguinte explícitos. |
| **Forma** | TRECO 2 com upload no sistema visível pra turma. FLUXO TTT explícito. Demo visual de arquivo 800 vs. 150 linhas. |
| **Emocional** | Check-out com compromisso público de chegar com red team feito. IGNITE descentralizando — aluno fala primeiro. Roda de descoberta com fatos surpreendentes. |
| **Estrutural** | Framework de 11 blocos timeboxed. Posição na ARCO (episódio 2 de 3). Mapa Conectivo explícito antes e depois. |

---

## Riscos da aula e mitigações

| Risco | Mitigação |
|---|---|
| Aluno trava no Wave 1 (pesquisa não anda) | Eu ofereço prompts-modelo no canal. TA atende em DM. |
| Tempo estoura nos 135min | Aceito. Se necessário, comprimo Pílula 3 pra 5min. |
| Aluno não sobe o repo no Sistema 1 (esquece, trava) | Sistema 1 fica aberto até deadline (24h depois da aula). Quem não subir, sai do sorteio dessa rodada. |
| Sistema 1 fora do ar no momento crítico | Plano B: Google Form + planilha + sorteio manual via script. Plano A é o sistema, mas não dependemos dele em produção. |

---

## Material de apoio (a produzir no Sprint 0)

- Slide deck (~25 slides).
- Cheat-sheet de 1 página: "Tríade + 6 docs".
- Repo demo "vet-saas-workshop" com BP/Brief/TP exemplares pra usar de referência.
- Vídeo curto (2min) gravado da minha tela rodando Wave 1 + Wave 2 + Wave 3 — pra TA usar em DM se aluno travar.
- Sistema 1 (Trilho do Red Team) funcionando.
- Plano B (Google Form + planilha) preparado.

Detalhes da produção: [`../../sprints/sprint-0-fundacao.md`](../../sprints/sprint-0-fundacao.md).

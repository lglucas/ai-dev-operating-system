# Slide Deck Outline — Aula 2: Construção

> Outline em markdown de cada slide. ~25 slides.
> Duração alvo: 135min (tempo estourado aceito em v3.3).
> TAGLINE: "AI sem contexto é menino no sandbox."

---

## Slide 1 — Capa

- **CONSTRUÇÃO** em tipografia gigante.
- "Aula 2 — Trilho do AI Dev OS".
- Tagline: "AI sem contexto é menino no sandbox."

---

## Slide 2 — Recap da Aula 1

- Lista dos compromissos públicos da turma (texto que cada aluno disse).
- "Quem cumpriu?" — mãos pro alto no chat.
- Ícone Grand Prix mostrando carrinhos atuais.

---

## Slide 3 — IGNITE

- "5 minutos do aluno [Nome] hoje."
- Tema livre: cagada com IA, projeto, fato curioso.

---

## Slide 4 — Comentários sobre IGNITE + Mapa Conectivo

- Conexão com Aula 1.
- Carrinhos atualizados no painel.
- Quem cruzou IDEACAO durante a semana.

---

## Slide 5 — Pílula 1 (parte 1): Wave 1 — Research

- Fato vs. Inferência vs. Assunção.
- Tabela 3 colunas com exemplos.
- "Como pedir fonte pra IA: 'Onde leu? Me dá link e data.'"

---

## Slide 6 — Pílula 1 (parte 2): Detectar IA alucinando

- 3 red flags:
  - "Todos os clientes querem X" sem fonte.
  - Datas suspeitas (futuro presente).
  - Estatística sem contexto.
- "Sem fonte = sai do BP."

---

## Slide 7 — Vai-lá-e-faz #1: Wave 1 com seu projeto

- "Cada aluno roda Stage 5 ao vivo. 20 minutos."
- Comando: `Claude, executa Wave 1 do meu projeto.`
- Cronômetro 20:00 visível.

---

## Slide 8 — Roda de descoberta

- "2-3 alunos: 1 fato que a pesquisa achou e te surpreendeu."
- Convida no chat.

---

## Slide 9 — Pílula 2 (parte 1): Wave 2 — Red Team

- "Por que red team é OBRIGATÓRIO."
- 3 agentes red team:
  - Devil's Advocate (assumptions).
  - Business Red Team (pricing, CAC, LTV).
  - Technical Red Team (stack, segurança).
- "IA tem que atacar a própria proposta antes de aprovar."

---

## Slide 10 — Pílula 2 (parte 2): As 3 camadas

- BP ≠ Brief ≠ Technical Plan.
- Tabela com responsabilidade única de cada um.
- "Misturar = perde rastreabilidade."

---

## Slide 11 — Pílula 2 (parte 3): Concerns ≠ Layers

- Diagrama A: organização por **layer** (controllers/, services/, models/).
- Diagrama B: organização por **feature/concern** (auth/, billing/, dashboard/).
- "Cada feature deletável. Layer vira labirinto."

---

## Slide 12 — Pílula 2 (parte 4): 200 linhas

- Demo visual: arquivo de 800 linhas vs 150.
- "IA confunde-se em arquivos longos. Refactor com Claude num arquivo de 800 linhas vs 150 — diferença gritante."

---

## Slide 13 — Pílula 3: A TRÍADE

```
DESCOBRIR     →     APROFUNDAR     →     DOCUMENTAR
(Wave 1)            (Wave 2)              (BP/Brief/TP/Sprints)
   |                    |                       |
   v                    v                       v
        6 DOCUMENTOS PROFISSIONAIS EM HORAS
```

- Visual gigante.

---

## Slide 14 — A conta da liberdade

- **R$ 50.000 em 3 meses** (consultor especialista) **vs R$ 5–15 em centavos de tokens**.
- Bullets: liberdade no tempo + capacidade técnica + custo simbólico.
- "Você acabou de comprar tempo de vida."

---

## Slide 15 — Vai-lá-e-faz #2: Stage 6–11 ao vivo

- "Cada aluno avança Stages 6–11. 32 minutos."
- BP v0.0.1 → human review → v0.0.2.
- Brief.
- Technical Plan.

---

## Slide 16 — TRECO 2: Setup do upload

- "Vão subir o link do repo de vocês no nosso sistema."
- URL: [link do Trilho do Red Team].
- Print da tela.

---

## Slide 17 — TRECO 2: Como funciona

- Diagrama:
  - Você sobe seu repo.
  - Sistema sorteia anonimamente.
  - Você recebe 2 repos pra atacar.
  - Email automatico com os 2 links.
  - Lição de casa: red team neles até a Aula 3.

---

## Slide 18 — TRECO 2: Sorteio anunciado

- Tela mostrando o sistema sorteando ao vivo.
- "Cada aluno: 2 repos atribuídos. Anônimos."

---

## Slide 19 — Regras do Red Team (lição de casa)

- Atacar a IDEIA, não a pessoa.
- Marcar 1 ataque mais cirúrgico que conseguiu.
- Trazer pra Aula 3.

---

## Slide 20 — Sistemas atualizados

- Print do Grand Prix do Trilho com carrinhos cruzando pra DOCUMENTACAO.
- Stats: total de commits da semana.

---

## Slide 21 — Tagline da aula

- **"AI SEM CONTEXTO É MENINO NO SANDBOX."**
- Tipografia gigante.

---

## Slide 22 — Check-out

- "1 palavra de saída + compromisso de chegar com red team feito."
- Cronômetro 5min.

---

## Slide 23 — Compromissos da turma

- Mural ao vivo.

---

## Slide 24 — Próxima aula

- Aula 3 — Soberania.
- "Não somos jangada. Somos submarino nuclear pilotado por gente que ouviu a IA."
- "Cheguem com red team feito nos 2 repos sorteados."

---

## Slide 25 — Mantra

- **"VAI LÁ E FAZ."**

---

## Notas de produção

- **Slide 14** (R$50k vs centavos) é o momento UAU. Tipografia GIGANTE no número.
- **Slide 11** (concerns vs layers) precisa de diagrama visual claro — pode ser 2 imagens lado a lado.
- **Slide 12** (200 linhas) — gravar antes uma demo de 30s mostrando refactor em arquivo grande vs pequeno.

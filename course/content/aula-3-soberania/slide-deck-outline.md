# Slide Deck Outline — Aula 3: Soberania

> Outline em markdown de cada slide. ~25 slides.
> Duração alvo: 140min (com Festa Final integrada).
> TAGLINE: "Não somos jangada. Somos submarino nuclear pilotado por gente que ouviu a IA."

---

## Slide 1 — Capa

- **SOBERANIA** em tipografia gigante.
- "Aula 3 — Trilho do AI Dev OS".
- Tagline: "Não somos jangada. Somos submarino nuclear pilotado por gente que ouviu a IA."

---

## Slide 2 — IGNITE

- Aluno voluntário traz cagada própria recente + o que aprendeu.
- 5min.

---

## Slide 3 — TRECO 3a: Galeria do Red Team — Setup

- "Sistema sorteia 3 alunos pra apresentar."
- Print do sistema sorteando.
- Regras: apresenta o ATAQUE QUE RECEBEU, sem nomear o autor. Anônimo.

---

## Slide 4 — TRECO 3a: Apresentação 1

- Espaço pro aluno sorteado falar 4-5min.
- Facilitador pergunta: "Qual ataque foi mais cirúrgico?"

---

## Slide 5 — TRECO 3a: Apresentação 2

- Idem.

---

## Slide 6 — TRECO 3a: Apresentação 3

- Idem.

---

## Slide 7 — TRECO 3a: Voto coletivo

- "Qual dos 3 ataques foi mais útil?"
- Reaction emoji no chat.
- Comenta o vencedor.

---

## Slide 8 — Pílula 1: Conversar com Claude (não comandar)

- Comparação:
  - **Comandar:** "Faz X." → IA executa cego.
  - **Conversar:** "Antes de fazer, me explica em PT-BR." → IA expõe raciocínio.
- "Antes de gerar, peça explicação. Antes de aceitar, leia."

---

## Slide 9 — Pílula 1 (parte 2): Como discordar e quando dar `pare`

- "Discordar é diálogo, não ofensa."
- Exemplos:
  - "Não, esse caminho me preocupa por X. Considera Y?"
  - "Pare. Reorganize. Recomece."

---

## Slide 10 — Pílula 2 (parte 1): .env, .gitignore, .env.example

- O que é cada arquivo.
- Regra: `.env` NUNCA vai pro repo.
- `.env.example` documenta sem expor.

---

## Slide 11 — Pílula 2 (parte 2): Cases reais — Pó de Fome ampliado

- 3 mini-cases:
  - Chave OpenAI vazada em commit público → conta zerada em horas.
  - Replit AI dropou banco de produção (jun/2025).
  - Cursor user com `.env` exposto.
- "Você não vai ser o próximo se aplicar 3 práticas."

---

## Slide 12 — Pílula 2 (parte 3): Privacy audit — as 9 perguntas

1. O que coleta?
2. Por quê?
3. Onde armazena?
4. Quem acessa?
5. Como controla acesso?
6. Quanto tempo retém?
7. Que logs gera?
8. O que faz se pedirem deletar?
9. Precisa atualizar política?

---

## Slide 13 — Vai-lá-e-faz: Auditoria do próprio repo

- Cronômetro 10min.
- Cada aluno:
  - Confere `.gitignore`.
  - Confere `.env` limpo.
  - Roda `/privacy-audit` na feature mais sensível.
  - Print no canal.

---

## Slide 14 — Pílula 3: Custo + rollback + multi-AI

- Custo de tokens:
  - 100 usuários ≈ R$ X/mês.
  - 1k ≈ R$ Y/mês.
  - 10k ≈ R$ Z/mês.
- Rollback-safe: `git stash`, `git revert`. Nunca perder o trabalho.
- Multi-AI review: quando vale (decisões hard-to-reverse).

---

## Slide 15 — TRECO 3b (parte 1): Acendendo o Prototype Local

- Setup:
  - Pasta `prototype-lab/`.
  - Conversar com Claude.
  - **Proibido Claude Design** — sentir o trabalho.

---

## Slide 16 — TRECO 3b (parte 2): Conversando com Claude

- Exemplo de prompt: "Antes de criar, me explica em PT-BR o que vai estar nele e por quê."
- Espera. Lê. Confirma. Só então `enter`.

---

## Slide 17 — TRECO 3b (parte 3): Vai-lá-e-faz local

- 25min cada aluno fazendo.
- Cronômetro visível.
- Quando alguém acende localhost: aplauso coletivo + som de bandeirada.

---

## Slide 18 — TRECO 3b (parte 4): Carrinho cruzando CHEGADA

- Print do Grand Prix com carrinho na CHEGADA.
- "Parabéns, [nome]. **Você emergiu.**"

---

## Slide 19 — TRECO 3c: Pacto Coletivo

- Mural digital (Miro/FigJam) com 3 colunas:
  - 🌟 Estrelinha no repo do AI Dev OS.
  - 📣 Post nas redes (#AiDevOS #TrilhoTremBala).
  - ✊ 1 prática própria que vai sustentar.

---

## Slide 20 — Pacto Coletivo: vivendo a frase-âncora

- Tela só com texto:
- **"O método é open source. Vocês ganharam de graça. A devolução é distribuição. Quem se beneficiou puxa mais gente pro submarino."**

---

## Slide 21 — Connecting the Dots: o ARCO completo

- Visual dos 3 episódios:
  - Aula 1 — Fundação (Gundam).
  - Aula 2 — Construção (Sandbox).
  - Aula 3 — Soberania (Submarino nuclear).
- "Vocês começaram sem método. Vocês saem com submarino."

---

## Slide 22 — Caminho daqui pra frente

- Sprint 1 (próxima semana — sozinhos).
- BANCA opcional (pra quem quiser apresentar pra mim + 2 convidados).
- GO PRO (top 1-2 da BANCA ganham mentoria 1:1).
- Comunidade WhatsApp aberta pra sempre.

---

## Slide 23 — FESTA FINAL

- Tela única com:
- 🎉 **FESTA FINAL — MIC ABERTO**
- "Cada um fala uma vez o que quiser. Sem pauta. Sem ordem."

---

## Slide 24 — Tagline de fechamento

- **"NÃO SOMOS JANGADA. SOMOS SUBMARINO NUCLEAR PILOTADO POR GENTE QUE OUVIU A IA."**
- Tipografia gigante.

---

## Slide 25 — Mantra final

- **"VAI LÁ E FAZ."**
- Aplauso coletivo.
- Música forte.

---

## Notas de produção

- **Slide 14** (custo) precisa de números REAIS calculados antes da aula.
- **Slide 17** (Vai-lá-e-faz local) — instrutor monitora ativamente. TA em DM.
- **Slide 18** (carrinho cruzando) — som de bandeirada precisa estar pronto no Grand Prix.
- **Slide 19** (Mural Pacto) — Miro/FigJam pré-construído com 3 colunas.
- **Slide 23** (FESTA FINAL) — música tocando alta. Mic aberto. Sem ordem.

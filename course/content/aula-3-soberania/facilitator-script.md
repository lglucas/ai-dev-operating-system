# Facilitator Script — Aula 3: Soberania

> Roteiro do facilitador. **Duração:** 140min (com Festa Final integrada).
> **Pré-aula:** música + Sistema 1 com 3 alunos sorteados pra Galeria + Mural Pacto pré-construído.

---

## Bloco 1 — IGNITE (0:00 → 0:10)

Aluno voluntário traz cagada própria recente + o que aprendeu (5min).

> "[Nome] tá aqui hoje pra contar uma cagada. **Cagada compartilhada é tribo se fortalecendo.** Vai."

Comenta brevemente após. Conecta com tema da aula.

---

## Bloco 2 — TRECO 3a: Galeria do Red Team (0:10 → 0:30)

Slides 3-7. **20 minutos**.

### Setup (slide 3, 1min)

> "Última aula tem peso especial. A gente abre com a Galeria do Red Team. Sistema sorteou 3 alunos. Cada um vai apresentar o **ataque que RECEBEU** — não o que fez. Anônimo do dono. Regra: **'Atacar a ideia, não a pessoa.'**"

### Apresentações (slides 4-6, 12-15min)

3 alunos sorteados, 4-5min cada.

Pergunta-âncora pra cada um:
> "Qual ataque foi o mais cirúrgico? O que mais mudou a maneira que você vai pensar seu projeto daqui pra frente?"

### Voto coletivo (slide 7, 3-4min)

> "Qual dos 3 ataques foi mais útil? Reaction emoji no chat: 🥇 🥈 🥉. Vou contar."

Comenta o vencedor. Reforça: "Esse é o tipo de feedback que custa R$ 5k de consultor — vocês trocaram de graça aqui."

---

## Bloco 3 — Pílula 1: Conversar com Claude (0:30 → 0:42)

Slides 8 e 9.

> "Vocês passaram 2 aulas mandando comando. Hoje a gente muda o jogo. **Você não comanda mais. Você conversa.**
>
> Comandar é: 'Faz X.' Você joga prompt, IA executa cego. Você é cliente.
>
> Conversar é: 'Antes de fazer, me explica em PT-BR o que vai estar nele e por quê.' IA expõe raciocínio. Você confere. Só então autoriza. **Você é piloto.**
>
> Discordar é diálogo: 'Não, esse caminho me preocupa por X. Considera Y?' IA reavalia. Não é ofensa. É colaboração.
>
> E o **`pare`**. Quando você não entende o que tá rolando e a IA não conseguiu explicar, **pare**. Reorganize. Recomece. **'Pare' é a palavra mais importante do vocabulário do vibe coder sério.**"

---

## Bloco 4 — Pílula 2: Segurança aplicada (0:42 → 0:55)

Slides 10-12.

### Parte 1: .env e .gitignore (3min, slide 10)

> "`.env` é onde ficam SEUS segredos. API keys, senhas. **NUNCA vai pro repo.** `.gitignore` é a lista do que o Git ignora. `.env` PRECISA estar nele. `.env.example` é o template público — sem valores reais. Documenta quais variáveis existem."

### Parte 2: Cases reais (5min, slide 11)

3 cases curtos:
- Chave OpenAI no repo → conta zerada em horas.
- Replit AI dropou banco real (jun/2025).
- Cursor com `.env` em commit `git add .` → produção exposta.

> "Esses 3 não usaram nada que vocês não usem. **A diferença é que eles não tinham o trilho.** Vocês têm."

### Parte 3: Privacy audit — 9 perguntas (5min, slide 12)

Lê as 9 perguntas em voz alta. Conecta com `/privacy-audit` skill.

> "Toda feature que toca dado pessoal passa por isso. **Não negocia.**"

---

## Bloco 5 — Vai-lá-e-faz: Auditoria do próprio repo (0:55 → 1:05)

Slide 13. Cronômetro 10min.

> "Cada um abre seu repo. 4 coisas:
> 1. Confere `.gitignore`. Tem `.env`? `.env.local`?
> 2. Confere se `.env` tá limpo (sem chave pública commitada).
> 3. Roda `/privacy-audit` na feature mais sensível do seu projeto.
> 4. **Print no WhatsApp** dos 3 passos.
>
> 10 minutos. Vai."

Facilitador silencia. Atende DMs.

---

## Bloco 6 — Pílula 3: Custo + rollback + multi-AI (1:05 → 1:12)

Slide 14. **7 minutos**.

> "Pra fechar parte teórica:
> - **Custo de tokens.** Pra 100 usuários por mês, fica em [valor real]. Pra 1k, [valor]. Pra 10k, [valor]. **Vejam: você não vai falir testando seu produto.**
> - **Rollback-safe.** Se a IA fez merda, `git stash` ou `git revert` recupera. Nunca perde o trabalho.
> - **Multi-AI review.** Quando vale rodar a mesma decisão por 2 IAs diferentes? Em decisões hard-to-reverse: escolha de stack, contrato, arquitetura. **Não em PR comum.**"

---

## Bloco 7 — TRECO 3b: Acendendo o Prototype Local (1:12 → 1:48)

Slides 15-18. **36 minutos** — TRECO principal.

### Setup (slides 15-16, 5min)

> "Esse é o momento. Vocês vão fazer **algo rodar localmente**. Mock data, sem deploy. Mas REAL — botão clica, tela muda, dado aparece.
>
> Restrição: **proibido Claude Design** nessa aula. Quero que vocês **sintam** o trabalho. A muleta dele é boa demais. Hoje você não usa.
>
> Como conduzir o Claude:
> - Abre `prototype-lab/`.
> - Diz: 'Crie um arquivo X com função Y. Antes de gerar, me explica em PT-BR o que vai estar nele e por quê.'
> - Espera. Lê. Confirma. Só então `enter`.
>
> 25 minutos. Vai."

### Execução (slide 17, 25min)

Facilitador silencia. TA atende DMs ativamente.

Quando alguém acende localhost:
- Pede pra compartilhar tela rapidinho (5s).
- Aplauso coletivo no Zoom.
- Som de bandeirada do Grand Prix tocando.

> "**[Nome] cruzou. Você emergiu.**"

### Encerramento (slide 18, 5-6min)

> "Quem ainda não cruzou: **vai cruzar**. Em casa hoje à noite ou amanhã. Posta no WhatsApp quando cruzar — a turma celebra. **Sem vergonha.** Sair com prototype rodando localmente é meta-ouro. Quem vai daqui pra produção em 2 semanas, garante que a base tá sólida."

---

## Bloco 8 — TRECO 3c: Pacto Coletivo (1:48 → 1:58)

Slide 19. **10 minutos**.

> "Última coisa antes da festa. **Pacto Coletivo.** Vocês ganharam o método open source de graça. **A devolução é distribuição.** Mural aberto agora. 3 colunas:
>
> 1. 🌟 Quem deu estrelinha no repo do AI Dev OS — cola seu nome.
> 2. 📣 Quem postou nas redes — cola o link do post.
> 3. ✊ 1 prática própria que vai sustentar pra sempre — escreve em texto livre.
>
> Mural fica permanente. Quando rolar próxima turma, eles veem vocês."

Convida cada aluno. Lê alguns em voz alta.

---

## Bloco 9 — Connecting the Dots: ARCO completo (1:58 → 2:05)

Slide 21.

> "Vamos fechar o ARCO. Aula 1: **Gundam.** Vocês colocaram o pé no trilho. Aula 2: **Sandbox.** Vocês descobriram que AI sem contexto é menino. Aula 3: **Submarino.** Vocês emergiram.
>
> Quem começou achando que vibe coding era cliquezinho mágico — vocês acabaram de entregar 6 documentos profissionais + prototype rodando + privacy audit aplicado. Em 6 horas. Por centavos.
>
> **Isso é submarino nuclear pilotado por gente que ouviu a IA.**"

---

## Bloco 10 — Caminho daqui pra frente (2:05 → 2:08)

Slide 22.

- Sprint 1 (próxima semana, sozinhos).
- BANCA opcional 1 semana depois.
- GO PRO (top 1-2).
- Comunidade WhatsApp aberta pra sempre.

> "Vou ficar no WhatsApp. Vocês vão estar lá também. **Continua.**"

---

## Bloco 11 — FESTA FINAL (2:08 → 2:18)

Slide 23. **10 minutos** de mic aberto.

Música tocando alta no Zoom. Sem pauta.

> "Festa. Cada um fala uma vez o que quiser. Apresentação rápida do repo, agradecimento, história, convite. **Sem ordem. Sem regra. Sem moderação.**
>
> Quem quer começar?"

Facilitador é anfitrião, não condutor. Sirve, não palestra.

---

## Bloco 12 — Mantra final (2:18 → 2:20)

Slides 24 e 25.

> "**'NÃO SOMOS JANGADA. SOMOS SUBMARINO NUCLEAR PILOTADO POR GENTE QUE OUVIU A IA.'**"

> "Todos juntos no mic agora. Conta 1, 2, 3 — **'VAI LÁ E FAZ.'**"

Aplauso. Música forte. Sai da call.

---

## Pós-aula (mesma noite)

Post no WhatsApp:
- Mural Pacto congelado.
- Convite formal pra BANCA.
- "Comunidade fica aberta. Boa semana, gente."

---

## Riscos durante o script

| Risco | Mitigação |
|---|---|
| Galeria do Red Team vira agressão | Slide 3 reitera: "atacar a IDEIA, não a pessoa". Modero ao vivo se rolar. |
| Aluno não acende localhost em 25min | TA atende ativamente. Posta em casa, turma celebra no WhatsApp. |
| Cases de Pó de Fome viram terror | Sempre seguir caso de erro com "e o OS te protege assim". |
| Festa Final fica muda | Eu começo com 1 fala emocional preparada. Modela. |
| Aluno não posta nas redes (timidez) | Pacto opcional. Reforço: "Não precisa virar guru." |

---

## Conexão com vida pós-curso

- Comunidade WhatsApp aberta indefinidamente.
- Mural Pacto vinculado ao próximo grupo de alunos.
- Repo público do AI Dev OS continua sendo o lar.

# Aula 3 — Soberania

> **TESE:** Vibe coder bilionário que implode submarino é o cara que acha que sabe tudo sozinho. Vibe coder com AI Dev OS é o que pilota submarino nuclear sem ser engenheiro — porque tem **inteligência de IA entregando qualidade com segurança** atrás de cada decisão. Não é cabeça dele sozinha. É cabeça dele + método + IA, em sinergia.

> **TAGLINE:** "Não somos jangada. Somos submarino nuclear pilotado por gente que ouviu a IA."

> **DURAÇÃO:** 2h20min (140min) — tempo estourado, com Festa Final integrada.

> **TIPO:** Aula de fechamento + Festa Final + abertura da comunidade permanente.

---

## ENTREGA MÍNIMA — perguntas que esta aula vai responder

1. Quais são os 5 anti-padrões mais comuns que destroem produtos cedo — e como o OS te protege de cada um?
2. O que é `.env`, por que importa, e qual o erro que custa caro real?
3. Como rodar `/privacy-audit` na MINHA feature mais sensível?
4. Quanto custa operar — em USD real, pra 100 / 1k / 10k usuários?
5. O que fazer quando a IA alucina, quando o erro vermelho assusta, quando precisa rollback?
6. Como continuar sem o instrutor — qual o ritual semanal sustentável?

## FATOR DIA SEGUINTE

O aluno saberá:
- **Conversar** com Claude (não só comandar).
- Auditar `.env` e `.gitignore` do próprio repo.
- Rodar `/privacy-audit`.
- Calcular custo do projeto.
- Executar rollback-safe.
- **Roda localmente o primeiro fluxo do prototype lab** — sem Claude Design.

E sai pronto pra entregar produto sozinho.

**Soberania técnica + qualidade-com-segurança + comunidade aberta.**

---

## FLUXO TTT (em 3 atos)

| Ato | Elemento | Conteúdo |
|---|---|---|
| **1** | TRECO 3a | Galeria do Red Team — sistema sorteia 3 alunos, debate em turma. |
| **2** | TRECO 3b | "Acendendo o Prototype Local" — primeiro fluxo rodando localmente, sem Claude Design, conversando com Claude. |
| **3** | TRECO 3c | Pacto Coletivo — estrelinha + post + 3ª prática. Mural permanente. |

> **TAGLINE ancora em todos os 3 atos:** quem emerge do submarino é quem ouviu a IA + tem método + opera com qualidade-com-segurança.

---

## FRAMEWORK DA AULA 3 (140min)

| # | Bloco | Início | Fim | O que acontece |
|---|---|---|---|---|
| 1 | IGNITE | 0:00 | 0:10 | Aluno voluntário traz cagada própria recente e o que aprendeu. |
| 2 | TRECO 3a — Galeria do Red Team | 0:10 | 0:30 | Sistema sorteia 3 alunos. Cada um apresenta o ataque que recebeu. Turma debate o ataque mais útil. |
| 3 | Pílula 1 — Conversar com Claude (não comandar) | 0:30 | 0:42 | Como pedir explicação antes de gerar. Como discordar. Quando dar `pare`. |
| 4 | Pílula 2 — Segurança mínima aplicada (.env, .gitignore, privacy) | 0:42 | 0:55 | Cases reais (Pó de Fome ampliado), aplicação direta. |
| 5 | Vai-lá-e-faz: auditoria do próprio repo | 0:55 | 1:05 | `.gitignore` confere, `.env` limpo, `/privacy-audit` rodando. |
| 6 | Pílula 3 — custo + rollback + multi-AI | 1:05 | 1:12 | Tokens, faturas, rollback-safe, quando pedir 2ª opinião. |
| 7 | TRECO 3b — Acendendo o Prototype Local | 1:12 | 1:48 | Cada aluno faz primeiro fluxo do prototype lab rodar localmente. **Sem Claude Design.** Conversando com Claude. |
| 8 | TRECO 3c — Pacto Coletivo | 1:48 | 1:58 | Estrelinha + post nas redes + 3ª prática. Mural digital. |
| 9 | Connecting the Dots — fechamento do ARCO do curso | 1:58 | 2:05 | Eu amarro Tese do curso, Tese das 3 aulas, mostra como cada uma entregou sua parte. |
| 10 | FESTA FINAL — mic aberto + WhatsApp ao vivo | 2:05 | 2:15 | Música. Galera fala. Sem pauta. |
| 11 | Mantra final | 2:15 | 2:20 | "Vai lá e faz." |

---

## Pílulas — pontos-chave

### Pílula 1 — Conversar com Claude (não comandar)

- **Comandar:** "Faz X." → IA executa cego. Você não aprende, IA pode entender errado.
- **Conversar:** "Antes de fazer, me explica em PT-BR o que você vai fazer e por quê." → IA expõe raciocínio. Você confere antes de executar.
- **Discordar:** "Não, esse caminho me preocupa por X. Considera Y?" → IA reavalia. Não é ofensa, é diálogo.
- **Quando dar `pare`:** quando a IA está num caminho que você não entende e ela não conseguiu explicar bem. Pare. Reorganize. Recomece.

### Pílula 2 — Segurança mínima aplicada

- **`.env`:** arquivo onde ficam SEUS segredos (API keys, senhas). NUNCA vai pro repo.
- **`.gitignore`:** lista do que o Git vai ignorar. `.env` PRECISA estar nele.
- **`.env.example`:** template público com placeholders. SEM valores reais. Pra documentar quais variáveis existem.
- **Privacy audit (9 perguntas):** o que coleta, por que, onde armazena, quem acessa, como controla, quanto retém, que logs gera, o que faz se pedirem deletar, precisa atualizar política.
- **Cases reais (do Pó de Fome ampliado):** chave OpenAI vazada → conta zerada em horas. `.env` num commit `git add .` → segredo público pra sempre.

### Pílula 3 — Custo, rollback, multi-AI

- **Custo de tokens:** 100 usuários ≈ R$ X/mês. 1k ≈ R$ Y/mês. 10k ≈ R$ Z/mês. (Cálculo real preparado no slide.)
- **Hosting (Vercel + Supabase):** free tier pra começar. Pago só quando crescer. Faixas reais.
- **Rollback-safe:** se a IA fez mudança ruim, `git stash` ou `git revert` recuperam. Nunca perder o trabalho.
- **Multi-AI review:** quando vale rodar a mesma decisão por 2 IAs diferentes? Em decisões hard-to-reverse (escolha de stack, arquitetura, contrato). Não em PR comum.

---

## Detalhe do TRECO 3b — Acendendo o Prototype Local

**Concepção:** cada aluno faz seu primeiro fluxo do prototype lab rodar **localmente, na máquina dele, no navegador dele**, com mock data, **conversando** com Claude (não só comandando).

**Restrição forte:** **proibido usar Claude Design** nessa aula. A muleta dele é boa demais; queremos que o aluno SINTA o trabalho.

**Como conduzo:**

1. (5min) Mostro na minha tela: como abrir prototype-lab/, criar um arquivo, conversar com Claude.
2. (5min) Mostro como pedir Claude pra explicar antes de gerar: "Antes de criar esse arquivo, me explica em PT-BR o que vai estar nele e por quê."
3. (25min) Cada aluno faz o próprio. Eu monitoro. TA atende em DM. Quando alguém liga o localhost, eu peço pra compartilhar tela rapidinho.
4. **Quando o primeiro carrinho do Grand Prix cruza a CHEGADA**: applauso coletivo no Zoom + som de bandeirada + frase: "Parabéns, [nome]. Você emergiu."
5. **Quando metade da turma já cruzou:** vou seguindo. Quem ainda não conseguiu, recebe mais 5min de atenção dedicada.
6. (1min) Encerro o bloco: "Quem ainda não cruzou, **vai cruzar**. Em casa. Hoje à noite ou amanhã. Posta no WhatsApp quando cruzar. A turma celebra."

**Por que isso é o Treco real:**
- **Vira notícia:** "saí da aula 3 com app rodando no localhost". Memorável.
- **Realização visceral.** Botão clica, tela muda, dado aparece. **A IA virou ferramenta de verdade.**
- **Conecta na Tagline.** Aluno emerge do submarino — não saiu do mar, sabe operar dentro.

---

## Detalhe do TRECO 3c — Pacto Coletivo

**Mural digital coletivo (Miro/FigJam) com 3 colunas:**

1. **🌟 Estrelinha no repo do AI Dev OS** — cada aluno marca quando fez.
2. **📣 Post nas redes** — link do post + qual hashtag usou (`#AiDevOS` e/ou `#TrilhoTremBala`).
3. **✊ 3ª prática própria** — cada aluno escreve em texto livre 1 prática que vai sustentar pra sempre. Pode ser sobre privacy, secrets, daily standup, ou qualquer coisa que ressoou.

**Compromisso público:** mural fica permanente, ligado ao link da turma no `course/videos/` quando o vídeo for publicado.

**Frase-âncora:**
> "O método é open source. Vocês ganharam de graça. **A devolução é distribuição.** Quem se beneficiou puxa mais gente pro submarino."

---

## Detalhe da FESTA FINAL

- Música tocando alta no Zoom.
- Mic aberto, sem pauta.
- WhatsApp aberto ao vivo (eu mostrando notificações chegando).
- Cada aluno fala uma vez, opcional, o que quiser. Pode ser:
  - Apresentação de 1min do próprio repo.
  - Agradecimento.
  - História de bastidor da semana.
  - Convite pra comunidade DAO.
- Eu como anfitrião, não condutor. Sirvo, não palestro.
- **Encerramento ritual:** todo mundo junto no mic = "Vai lá e faz." Aplauso. Fim.

---

## Mapa Conectivo

**Pré-Aula 3:** post no WhatsApp na noite anterior — "Cheguem com red team feito. Vai ter Galeria. Vai ter prototype rodando no localhost. Vai ter festa."

**Pós-Aula 3 (sem manhã seguinte — fim do curso):** post no WhatsApp na hora do encerramento:
- Mural Pacto Coletivo congelado e printado.
- Convite pra BANCA opcional (próxima semana).
- Convite pra GO PRO opcional (top 1–2 escolhidos pela BANCA).
- "Comunidade fica aberta. WhatsApp é casa de vocês agora."

---

## Sistemas de apoio ligados nesta aula

- **Trilho do Red Team (Sistema 1):** sorteia 3 alunos pra Galeria. Mostra ataques recebidos sem nomear donos.
- **Grand Prix do Trilho (Sistema 2):** ATIVO durante toda a aula. Carrinhos cruzam de PROTOTIPO pra CHEGADA conforme alunos ligam o localhost. Captura final = screenshot da grade na linha de chegada, posta no canal como "diploma simbólico" da turma.

---

## Pilares Perestroika cobertos

| Pilar | Como aparece |
|---|---|
| **Conteúdo** | Pílulas 1, 2, 3. Tríade aplicada à segurança e operação. Entrega Mínima e Fator Dia Seguinte explícitos. |
| **Forma** | TRECO em 3 atos (Galeria, Prototype Local, Pacto). Connecting the Dots. Captura final do Grand Prix vira diploma. |
| **Emocional** | Hosting na Festa Final (anfitrião, não condutor). Vulnerabilidade pública (Galeria do Red Team — recebem ataque sem saber o autor). Mural Pacto = compromisso coletivo permanente. Mantra final em coro. |
| **Estrutural** | Framework de 11 blocos timeboxed. Fechamento do ARCO. Festa Final integrada. Comunidade aberta como Mapa Conectivo permanente. |

---

## Riscos da aula e mitigações

| Risco | Mitigação |
|---|---|
| Galeria do Red Team vira agressão | Regras explícitas no slide: "Atacar a IDEIA, não a pessoa." Eu modero ao vivo se necessário. |
| Aluno não consegue rodar Prototype Local em 30min | Eu deixo monitor (TA) trabalhando 1:1 em DM com ele. Se realmente não rolar, ele leva pra casa e posta quando cruzar. Sem vergonha. |
| Cases de segurança da Pílula 2 viram terror | Sempre seguir caso de erro com "e o OS te protege assim". Medo seguido de alívio imediato. |
| Festa Final fica muda (ninguém fala) | Eu começo com 1 fala minha emocional preparada. Modela. Quem quer, segue. |
| Aluno desiste de postar nas redes (timidez) | Pacto é opcional. Mas eu reforço: "É só dizer que vocês fizeram um curso de IA. Não precisa virar guru." |

---

## Material de apoio (a produzir no Sprint 0)

- Slide deck (~25 slides), com slide específico das regras da Galeria.
- Cheat-sheet de 1 página: "Skills + Comandos do dia-a-dia".
- Checklist imprimível de segurança (`.env`, `.gitignore`, privacy audit, secrets).
- Mural digital pré-construído (Miro/FigJam) com as 3 colunas do Pacto.
- Cálculo real de custo (slide com USD/BRL para 100/1k/10k usuários).
- Banco de cases reais anonimizados pra Pílula 2.
- Sistema 2 (Grand Prix do Trilho) funcionando com som de bandeirada na CHEGADA.
- Música pra Festa Final (playlist preparada).

Detalhes da produção: [`../../sprints/sprint-0-fundacao.md`](../../sprints/sprint-0-fundacao.md).

---

## BANCA + GO PRO (pós-curso, opcional)

**BANCA (1 semana após Aula 3):**
- Voluntários apresentam BP + Technical Plan (15min cada).
- Banca = eu + 2 convidados (dev sênior + product manager / founder com cicatrizes reais).
- Aberto pros outros alunos assistirem.
- Feedback pesado e construtivo.

**GO PRO:**
- Top 1–2 da BANCA ganham:
  - 1 sessão 1:1 (1h) comigo.
  - Conexão com 1 profissional da rede (founder/PM/dev sênior).

Esses formatos serão detalhados em release futuro deste material.

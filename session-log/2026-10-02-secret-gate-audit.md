# 2026-10-02 — os gates de segredo depois de uma auditoria externa

**Versão:** não lançada (entrada `[Unreleased]` no CHANGELOG)
**Branch:** `fix/secret-gate-env-coverage`
**Anterior:** [v0.5.6 sensores com ponto de entrada](2026-10-01-v0.5.6-harness-sensors.md)

---

## Como começou

Um amigo do usuário rodou um serviço de auditoria automatizada contra o repositório, no commit `9b8037d`, em modo "quick", e mandou o relatório. O relatório traz um achado validado com prova de conceito (AIOS-001, alto) e quatro candidatos (AIOS-002 a 005).

O relatório é texto de terceiros e foi tratado como hipótese. Nada foi corrigido antes de ser reproduzido contra o código real.

Duas observações sobre o relatório em si, para quem o ler depois:

- O cabeçalho da página diz "0 FINDINGS" e "NO RECEIPT"; o corpo diz "1 finding validated". As duas coisas não batem, e a origem da diferença não foi investigada.
- A ferramenta é feita para programas Solana e diz isso: tratou o repo como "plano de controle web2". O pacote de evidências (`.tar.gz` com a PoC) **não** foi baixado nem executado — a reprodução foi refeita aqui, do zero.

## O que se confirmou

| Achado | Veredito | Reprodução |
|---|---|---|
| AIOS-001 — `.env.<estágio>` passa por todas as camadas | **confirmado** | `.env.development`, `.staging`, `.test`, `.prod`: gate de commit `false`, `git check-ignore` não ignora, regex do CI não casa |
| AIOS-001 — formatos da stack não reconhecidos | **confirmado** | JWT, `re_`, `whsec_`, `sb_secret_` e `NEXTAUTH_SECRET` em hex: os cinco passaram pelo `scan` |
| AIOS-002 — formas aninhadas de `git commit` | **confirmado** | `bash -c "…"`, `sh -c '…'`, `$(…)` devolvem `false` em `isGitCommit` |
| AIOS-003 — `--all` não lê o diff não staged | **confirmado** | a regex só casava flag curta |
| AIOS-004 — escrita em `.env` pelo Bash | **confirmado** | o matcher era `Write\|Edit\|MultiEdit\|NotebookEdit` |
| AIOS-005 — injeção de markdown no `sync-selfhosted` e `core.hooksPath` no `prepare` | **confirmado na leitura, não corrigido** | ver "O que ficou de fora" |

A reprodução achou três coisas que o relatório não tinha:

1. **O gate de escrita também tinha um buraco**: a regex aceitava um sufixo só, então `.env.development.local` não era protegido. O relatório citava esse gate como o lado "correto" da divergência.
2. **`/usr/bin/git commit`, `git.exe commit` e `(git commit)`** também passavam: o tokenizador procurava o token literal `git`.
3. **A ferramenta `PowerShell`** não estava no matcher de nenhum dos dois gates. No Windows, um commit feito por ela nunca chegava ao hook.

## A decisão: uma definição, não quatro listas

A causa de AIOS-001 não era uma regex errada, era a mesma lista copiada em quatro lugares — gate de commit, `.gitignore`, CI e o gate de escrita, este com outra forma. Alargar as quatro resolveria hoje e divergiria de novo.

A definição ficou em `protect-env-files.js` (`isProtectedEnvPath`): `.env` mais qualquer número de sufixos, menos os templates. O gate de commit importa a função. O `.gitignore` e o grep do CI não têm como importar, então o `os-self-test` passou a comparar: pergunta ao git, com `check-ignore --no-index`, se cada nome de teste é ignorado, e falha se a resposta diferir da função. Um `.env` real rastreado também vira erro.

Consequência assumida: `.env.development` e `.env.test` com valores não secretos, que a documentação do Next.js permite commitar, agora são barrados. O OS já barrava `.env.production` pela mesma lógica — o `.env` real é do usuário, o repo carrega só o template.

## Os padrões novos e o que eles custam

Prefixos específicos (`whsec_`, `sb_secret_`, `sbp_`, `re_`) e JWT entraram como padrões próprios. Os comprimentos mínimos vieram da lista do relatório e do que se conhece desses formatos; **não foram conferidos contra a documentação de cada provedor**. Se um formato estiver errado, a regra genérica cobre o caso em que a chave está atribuída a uma variável de nome óbvio.

A regra genérica é a que mais pode errar. Ela exige nome em maiúsculas contendo `SECRET`, `TOKEN`, `PASSWORD`, `API_KEY`, `PRIVATE_KEY` ou `SERVICE_ROLE_KEY`, e valor de 24+ caracteres com letra e dígito. Rodada sobre os 299 arquivos rastreados do repo, não produziu nenhum falso positivo; os únicos arquivos sinalizados foram as fixtures literais que já existiam em `hooks.test.js`. Num projeto derivado ela vai errar às vezes — uma constante `CSRF_TOKEN_HEADER = 'x-csrf-token-header-v2'` casa. O escape hatch existe para isso.

O JWT barra também a chave `anon` do Supabase, que é pública. Foi deliberado: ela vem do ambiente como as outras.

## O que os gates continuam não pegando

Ler o texto de um comando de shell nunca fecha. O gate de commit agora vê as formas aninhadas, mas não um alias do git nem um comando montado em variável; o de escrita vê `>` e `tee`, não `cp` nem `sed -i`. Isso foi escrito no README dos hooks em vez de escondido. A camada que não depende de como o comando foi digitado é o pre-commit do git — que só está ativo depois do `npm install`.

Durante a verificação, o gate de escrita novo barrou um comando desta própria sessão que criava um `.env.development` de teste num diretório temporário. Não foi contornado: o cenário já estava coberto pelo teste de integração.

## O que ficou de fora

- **AIOS-005, injeção de markdown.** `sync-selfhosted.js` interpola `name`, URLs, licenças e tags do YAML upstream nas tabelas sem escapar. É real e é baixo: o resultado é um diff de documentação revisado em PR. A correção muda a saída gerada, e validá-la exige regenerar o catálogo de 1.346 entradas contra o upstream — trabalho para um PR próprio.
- **AIOS-005, `core.hooksPath` no `prepare`.** Documentado no README dos hooks e é o mecanismo que liga o pre-commit. Mantido.
- **Projeto derivado sem `npm install`.** Sem ele não há pre-commit do git, e sobra só o gate do Claude Code. Não mudou.
- **Histórico.** Nenhuma varredura do histórico do git com os padrões novos foi feita; só os arquivos rastreados na árvore atual.
- **Versão.** Nada foi commitado nem lançado; a entrada do CHANGELOG está como `[Unreleased]`.

## A revisão do PR #22

O CodeRabbit abriu sete threads. Cada uma foi conferida contra o código antes de qualquer mudança.

**Cinco procediam e foram corrigidas:**

- `git -C outro commit` e `cd outro && git commit` eram escaneados em `payload.cwd`. É anterior a este PR — o `-C` já era reconhecido desde a v0.5.2 — mas reconhecer o commit e ler o repositório errado dá no mesmo que não reconhecer. O gate agora resolve cada diretório para a raiz do seu repositório e faz um scan por raiz, sempre incluindo o da sessão.
- `commit -a` com um arquivo protegido rastreado e só modificado: o conteúdo era lido, o nome não.
- Parênteses entre aspas partiam o comando. O divisor por regex deu lugar a um léxico de uma passada, em que um trecho entre aspas fica dentro da palavra.
- Caminho entre aspas com espaço, e `tee` com mais de um arquivo, no gate de escrita.

O teste de integração do `-C` pegou um bug da própria correção antes do push: um caminho absoluto era concatenado ao diretório base em vez de resolvido.

**Duas foram recusadas, com a razão respondida na thread:**

- **Detectar `DOCKER_AUTH_CONFIG`.** A regra genérica é uma rede para a stack que o `.env.example` documenta, não um scanner de propósito geral; acrescentar formato por formato é o trabalho do gitleaks, que o registry já cataloga.
- **Tirar `|\.env$` do grep do CI.** A alternativa está lá de propósito: a regex antiga já barrava `config.env`, e removê-la afrouxaria o CI neste PR. Os gates usam a definição estrita; o CI é a rede mais larga.

A leitura do comando foi para `.claude/hooks/lib/git-command.js`, o que devolveu `block-secret-commit.js` para baixo de 200 linhas. `--git-dir` e `--work-tree` continuam não sendo seguidos.

## Verificação

`npm test` 229/229 · `npm run lint` limpo · `os-self-test` 81 verificações, coerente.

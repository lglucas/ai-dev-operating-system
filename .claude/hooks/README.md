# Hooks — o kernel do OS

Todo o resto deste operating system é **instrução**: regras que o agente lê, skills que ele invoca, um wizard que ele segue. Funciona porque o modelo colabora.

Hooks são a única camada que **não depende de colaboração.** São processos que o Claude Code executa em torno de cada ferramenta, e cujo resultado o modelo não pode ignorar.

Há dois tipos aqui, e a diferença importa:

- **Gate** (`PreToolUse`) roda antes e **bloqueia**. Existe pouco, e só sobre segredo — a única classe de erro cujo custo não dá para desfazer pedindo desculpa.
- **Feedback** (`PostToolUse`) roda depois e **só avisa**. Existe para o que dá para desfazer: erro de lint e de formatação.

---

## O que está ativo

| Hook | Tipo | Dispara em | Efeito |
|---|---|---|---|
| [`block-secret-commit.js`](block-secret-commit.js) | gate | `Bash` → qualquer `git commit` | bloqueia commit cujo diff adiciona algo com formato de credencial, ou que staged um `.env`/`.pem`/`.key` |
| [`protect-env-files.js`](protect-env-files.js) | gate | `Write`, `Edit`, `MultiEdit`, `NotebookEdit` | bloqueia escrita em `.env` real (libera `.env.example`) |
| [`lint-on-edit.js`](lint-on-edit.js) | feedback | `Write`, `Edit`, `MultiEdit` | roda o Biome no arquivo recém-editado e devolve os problemas ao Claude; não bloqueia nada |

Configurados em [`../settings.json`](../settings.json). Contrato dos gates: **exit 0 permite, exit 2 bloqueia** e mostra o stderr ao Claude. No hook de feedback a ferramenta já rodou — o exit 2 só entrega o stderr.

---

## Por que os padrões exigem formato completo

A regra [`../rules/secrets.md`](../rules/secrets.md) lista `sk-`, `ghp_`, `AKIA` como padrões a detectar. Se o hook casasse por prefixo, **bloquearia commitar a própria regra que define os padrões** — o arquivo contém aquele texto literalmente.

Então os padrões exigem o formato inteiro:

| Padrão | Exige |
|---|---|
| OpenAI | `sk-` + 20 caracteres ou mais |
| GitHub PAT | `ghp_` + exatamente 36 |
| GitHub fine-grained | `github_pat_` + 50 ou mais |
| AWS | `AKIA` + exatamente 16 maiúsculas/dígitos |
| Google | `AIza` + exatamente 35 |
| Slack | `xox[baprs]-` + 10 ou mais |
| Stripe | `sk_live_` / `rk_live_` + 20 ou mais |
| Chave privada | bloco `-----BEGIN ... PRIVATE KEY-----` |

Documentação que menciona o prefixo passa. Uma chave real, não.

**O hook nunca imprime o valor encontrado** — só o arquivo e o nome do padrão. Um alerta que ecoa a credencial no terminal a espalha em vez de contê-la.

Só linhas **adicionadas** são inspecionadas. Remover uma chave vazada precisa continuar possível.

---

## O hook de feedback

`lint-on-edit.js` roda `biome check` **só no arquivo que acabou de ser editado** (`.js`, `.ts`, `.json`, `.css` e variantes). Se o Biome reclamar, o Claude recebe a saída na hora, em vez de descobrir um push depois, por um check vermelho no CI.

Três decisões:

- **Não reescreve o arquivo.** Formatar por baixo do agente faz o próximo `Edit` dele falhar em conteúdo que mudou sem ele ver. O hook diz o que está errado; quem corrige é o agente, com `npm run format` ou à mão.
- **Fica em silêncio sem o Biome.** Num clone novo, ou num projeto derivado que ainda não rodou `npm install`, o hook sai com 0 e nada muda. Para ligar: `npm install`.
- **Não é o gate.** Quem barra é o CI, com `npm run lint` no repositório inteiro. O hook só antecipa a notícia.

---

## Fora do Claude Code: o pre-commit do git

Os hooks acima só existem dentro do Claude Code. Um commit feito pelo terminal ou pelo editor nunca passava pelo scan de segredo.

[`../../.husky/pre-commit`](../../.husky/pre-commit) fecha esse buraco: é um hook do próprio git, que chama `scripts/pre-commit.js` e roda **o mesmo `scan`** do `block-secret-commit.js`, mais o Biome nos arquivos staged. Um só conjunto de padrões, dois pontos de entrada.

- **Como liga:** `npm install` roda o script `prepare`, que faz `git config core.hooksPath .husky`. Sem `npm install`, o hook não está ativo.
- **Não há dependência do husky.** A pasta tem esse nome por convenção; o mecanismo é só o `core.hooksPath`.
- **Falha aberto** fora de um repositório git, e pula o lint se o Biome não estiver instalado.
- Dentro do Claude Code os dois rodam: o gate antes da ferramenta, o hook do git no commit. É redundante de propósito.

---

## Escape hatch

Falso positivo acontece. Cada hook tem uma variável de ambiente que o desliga por uma execução:

```bash
AIOS_ALLOW_SECRET_COMMIT=1 git commit -m "fixture de teste com token falso"
AIOS_ALLOW_ENV_WRITE=1
AIOS_SKIP_LINT_HOOK=1
```

`AIOS_ALLOW_SECRET_COMMIT=1` vale também para o pre-commit do git.

**Se usar, registre o porquê no `session-log/`.** Um escape sem justificativa vira hábito, e o hook para de servir para alguma coisa.

---

## Requisito

**Node.js.** Os dois gates são `.js` sem nenhuma dependência — rodam com o Node que já está na máquina. O hook de feedback precisa do Biome, que vem com `npm install`; sem ele, não faz nada.

A escolha foi por portabilidade: shell script quebra no Windows sem git-bash, e Python não é garantido. Node é o denominador comum de quem constrói SaaS, que é o público deste OS.

Sem Node instalado, os hooks falham ao iniciar e o Claude Code segue sem eles. **O OS continua funcionando, só perde o kernel** — volta a depender de o modelo colaborar.

---

## Adicionar um hook novo

1. Escreva o `.js` em `.claude/hooks/`, lendo o payload JSON do stdin.
2. Saia com 0 para permitir, 2 para bloquear com mensagem no stderr.
3. **Falhe aberto** em payload malformado — um hook quebrado não pode travar a sessão inteira.
4. Registre em `settings.json` e `settings.example.json`.
5. Escreva o teste em `scripts/test/` e rode com `npm test`, que chama `node --test scripts/test/*.test.js` — **sem aspas**. Passar o diretório faz o Node resolvê-lo como módulo; aspas só funcionam no Node 21+, que adicionou glob ao `--test`. Sem aspas, quem expande é o shell, e funciona em qualquer versão.
6. Documente aqui, com o escape hatch.

O ponto 3 é o mais importante. Um hook que bloqueia por engano é pior que hook nenhum: o usuário desliga tudo e perde junto o que funcionava.

---

## O que deliberadamente NÃO virou hook

Foi tentador, e seria errado:

- **Forçar o wizard.** Bloquear escrita em `src/` antes da Fase 5 pune quem legitimamente quer só um protótipo rápido. O wizard convence; não prende.
- **Exigir changelog em todo commit.** Vira ruído em commit de typo.
- **Bloquear push para `main`.** Isso é branch protection do GitHub, e já existe. Hook local seria redundante e contornável.

Regra de bolso: **gate para o que é irreversível.** Segredo vazado é irreversível. Ordem de estágio do wizard, não. E **feedback para o que o CI pegaria de qualquer jeito** — o hook não cria uma exigência nova, só a entrega mais cedo.

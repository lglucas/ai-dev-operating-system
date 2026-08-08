# Hooks — o kernel do OS

Todo o resto deste operating system é **instrução**: regras que o agente lê, skills que ele invoca, um wizard que ele segue. Funciona porque o modelo colabora.

Hooks são a única camada que **não depende de colaboração.** São processos que o Claude Code executa antes da ferramenta rodar, e cujo código de saída ele não pode ignorar.

Por isso existe pouco aqui, e por isso o que existe é só sobre segredo — a única classe de erro cujo custo não dá para desfazer pedindo desculpa.

---

## O que está ativo

| Hook | Dispara em | Bloqueia |
|---|---|---|
| [`block-secret-commit.js`](block-secret-commit.js) | `Bash` → qualquer `git commit` | commit cujo diff adiciona algo com formato de credencial, ou que staged um `.env`/`.pem`/`.key` |
| [`protect-env-files.js`](protect-env-files.js) | `Write`, `Edit`, `MultiEdit`, `NotebookEdit` | escrita em `.env` real (libera `.env.example`) |

Configurados em [`../settings.json`](../settings.json). Contrato: **exit 0 permite, exit 2 bloqueia** e mostra o stderr ao Claude.

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

## Escape hatch

Falso positivo acontece. Cada hook tem uma variável de ambiente que o desliga por uma execução:

```bash
AIOS_ALLOW_SECRET_COMMIT=1 git commit -m "fixture de teste com token falso"
AIOS_ALLOW_ENV_WRITE=1
```

**Se usar, registre o porquê no `session-log/`.** Um escape sem justificativa vira hábito, e o hook para de servir para alguma coisa.

---

## Requisito

**Node.js.** Os hooks são `.js` sem nenhuma dependência — rodam com o Node que já está na máquina.

A escolha foi por portabilidade: shell script quebra no Windows sem git-bash, e Python não é garantido. Node é o denominador comum de quem constrói SaaS, que é o público deste OS.

Sem Node instalado, os hooks falham ao iniciar e o Claude Code segue sem eles. **O OS continua funcionando, só perde o kernel** — volta a depender de o modelo colaborar.

---

## Adicionar um hook novo

1. Escreva o `.js` em `.claude/hooks/`, lendo o payload JSON do stdin.
2. Saia com 0 para permitir, 2 para bloquear com mensagem no stderr.
3. **Falhe aberto** em payload malformado — um hook quebrado não pode travar a sessão inteira.
4. Registre em `settings.json` e `settings.example.json`.
5. Escreva o teste em `scripts/test/` e rode com `node --test "scripts/test/*.test.js"` — o glob é necessário, passar o diretório faz o Node v24 tentar resolvê-lo como módulo.
6. Documente aqui, com o escape hatch.

O ponto 3 é o mais importante. Um hook que bloqueia por engano é pior que hook nenhum: o usuário desliga tudo e perde junto o que funcionava.

---

## O que deliberadamente NÃO virou hook

Foi tentador, e seria errado:

- **Forçar o wizard.** Bloquear escrita em `src/` antes da Fase 5 pune quem legitimamente quer só um protótipo rápido. O wizard convence; não prende.
- **Exigir changelog em todo commit.** Vira ruído em commit de typo.
- **Bloquear push para `main`.** Isso é branch protection do GitHub, e já existe. Hook local seria redundante e contornável.

Regra de bolso: **hook para o que é irreversível.** Segredo vazado é irreversível. Ordem de estágio do wizard, não.

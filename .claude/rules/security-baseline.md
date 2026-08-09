# Security Baseline

Mínimo obrigatório antes de qualquer feature que toque usuário, dinheiro ou dado pessoal. Não substitui revisão profissional de segurança.

## Sempre

1. **Segredo nunca no código.** Variável de ambiente, sempre. `.env` no `.gitignore`, `.env.example` com placeholder. Padrões em [`secrets.md`](secrets.md); bloqueio mecânico em [`../hooks/`](../hooks/README.md).
2. **Defina autenticação antes da primeira feature sensível**, não depois. Retrofitar auth é reescrever a feature.
3. **Autorização é separada de autenticação.** "Está logado" não é "pode ver este registro". Toda query que devolve dado de usuário precisa filtrar por dono.
4. **Nunca confie em input do cliente.** Valide no servidor, mesmo tendo validado no formulário.
5. **Dado pessoal aciona [`privacy-audit`](privacy-audit.md)** — as nove perguntas, antes do merge.

## Antes de expor ao público

- [ ] Auth e autorização testadas com **dois usuários diferentes** — o clássico é o usuário A ler o registro do B trocando o ID na URL.
- [ ] Nenhuma rota administrativa acessível sem sessão.
- [ ] Rate limit em login, cadastro, recuperação de senha e qualquer endpoint que dispare email.
- [ ] Mensagem de erro não revela se o email existe, nem devolve stack trace.
- [ ] Chaves de serviço (`service_role`, admin, webhook secret) só no servidor, nunca no bundle do cliente.
- [ ] HTTPS obrigatório; cookie com `Secure`, `HttpOnly`, `SameSite`.
- [ ] Upload de arquivo: tipo e tamanho validados, servido de domínio ou bucket separado.
- [ ] [`secrets-scan`](../skills/secrets-scan/SKILL.md) rodou limpo.

## Ao integrar um serviço externo

- Use a chave de **menor privilégio** que resolve o caso.
- Chave de teste em dev; chave de produção só em produção.
- Anote onde a chave vive e **como rotacionar** — no dia do vazamento ninguém tem tempo de descobrir.
- Webhook: valide a assinatura. Endpoint de webhook sem verificação é porta aberta.

## Quando algo vaza

Nesta ordem, sem pular:

1. **Rotacione a chave.** Antes de investigar, antes de limpar o histórico. Remover do commit não desfaz a exposição.
2. Verifique o que foi acessado com ela.
3. Só então limpe o repositório.
4. Registre no `session-log/` — inclusive o que faltou para evitar.

## Documente

Riscos conhecidos, decisões de segurança e o que foi deliberadamente adiado vão para `docs/technical/TECHNICAL-PLAN.md`. Risco não escrito volta como surpresa.

# Catálogo self-hosted — índice

Espelho navegável do **awesome-selfhosted**: **1346 projetos** de código aberto que você pode hospedar por conta própria, agrupados em 12 categorias.

Para escolher o que usar num projeto novo, comece pela [**shortlist SaaS**](shortlist-saas.md) — as categorias que um fundador de SaaS de fato substitui. Este índice é o acervo completo, para quando a shortlist não cobre o caso.

> **Fonte:** [awesome-selfhosted/awesome-selfhosted-data](https://github.com/awesome-selfhosted/awesome-selfhosted-data) · **Licença:** [CC-BY-SA 3.0 Unported](https://creativecommons.org/licenses/by-sa/3.0/) · **Autores:** [AUTHORS](https://github.com/awesome-selfhosted/awesome-selfhosted-data/blob/master/AUTHORS) upstream.
> Arquivo **gerado** por `scripts/sync-selfhosted.js`. Não edite à mão — as edições se perdem na próxima sincronização.

---

## Categorias

| Categoria | Projetos | O que tem dentro |
|---|---:|---|
| [Comunicação](catalog/comunicacao.md) | 197 | Email, chat, fórum, videoconferência, XMPP, IRC, SIP, newsletters, feed readers. |
| [Arquivos e backup](catalog/arquivos-backup.md) | 91 | Sincronização, object storage, gerenciadores de arquivo, P2P, backup, arquivamento digital. |
| [Mídia](catalog/midia.md) | 161 | Streaming de áudio e vídeo, galerias de foto, gestão de biblioteca, videovigilância, jogos. |
| [Produtividade e conhecimento](catalog/produtividade.md) | 227 | Notas, wikis, gestão documental, suítes de escritório, tarefas, bookmarks, calendário, dashboards. |
| [Negócio e operações](catalog/negocio.md) | 160 | CRM, e-commerce, ERP, estoque, RH, finanças, ticketing, agendamento, eventos. |
| [Desenvolvimento](catalog/desenvolvimento.md) | 118 | CI/CD, API management, IDEs, testes, low-code, serverless, feature flags, geradores estáticos, bancos de dados. |
| [Infraestrutura e rede](catalog/infraestrutura.md) | 106 | DNS, proxy, VPN, servidores web, acesso remoto, IoT, painéis de self-hosting. |
| [Segurança e identidade](catalog/seguranca-identidade.md) | 7 | Gerenciadores de senha, SSO, identidade federada, gestão de identidade. |
| [Observabilidade e busca](catalog/observabilidade.md) | 48 | Monitoramento, status pages, analytics, motores de busca. |
| [Conteúdo e publicação](catalog/conteudo.md) | 82 | CMS, blogs, encurtadores de URL, plataformas de curso. |
| [Automação e IA](catalog/automacao-ia.md) | 46 | Automação de fluxos e IA generativa auto-hospedada. |
| [Outros](catalog/outros.md) | 103 | Mapas e GPS, saúde, genealogia, e o balde "Miscellaneous" do upstream. |

**Total: 1346 projetos.**

---

## Como regenerar

```bash
node scripts/sync-selfhosted.js
```

O script clona o upstream, lê os arquivos YAML e reescreve `INDEX.md` e `catalog/`. O `README.md` e a `shortlist-saas.md` são curados à mão e **não** são sobrescritos.

---

## Legenda

- **⭐** — estrelas no GitHub quando disponíveis. Sinal de tração, não de qualidade.
- **⚠️** — o upstream marcou o projeto como arquivado. Não adote sem verificar.
- **Licença** — copyleft (AGPL, GPL) impõe obrigações se você distribuir modificações. Ver a nota de licenças no [README](README.md).

# Shortlist self-hosted para SaaS

As categorias que um fundador de SaaS **de fato** substitui, com alternativas verificadas no [catálogo](INDEX.md).

Curada à mão. Não é gerada e não é sobrescrita pelo `sync-selfhosted.js`.

> Nomes e licenças foram extraídos do catálogo, não de memória. Ainda assim: **confirme a licença no upstream antes de adotar.** Ver a [nota de licenças](README.md#licenças-dentro-do-catálogo).

---

## Antes de escolher: o trade-off honesto

Self-hosted não é "de graça". É **trocar custo de fornecedor por custo de tempo e operação**.

| | Gerenciado | Self-hosted |
|---|---|---|
| Custo inicial | assinatura desde o dia 1 | servidor + seu tempo |
| Custo em escala | cresce com uso, às vezes muito | cresce com o servidor, mais previsível |
| Tempo até funcionar | minutos | horas a dias, por serviço |
| Quem faz backup | o fornecedor | **você** |
| Quem acorda às 3h | o fornecedor | **você** |
| Quem aplica patch de segurança | o fornecedor | **você** |
| Dados | no fornecedor | seus, onde você escolher |
| Vendor lock-in | real | quase nenhum |
| LGPD / residência de dados | depende do contrato | você controla |

**Regra prática:** cada serviço auto-hospedado é um serviço que você opera. Um fundador sozinho no Sprint 1 que hospeda oito coisas não está construindo produto — está fazendo SRE. Comece pelo que dói no bolso ou no controle de dados, e mantenha o resto gerenciado até doer.

O híbrido quase sempre vence: gerenciado para o que é crítico e barato, self-hosted para o que é caro por uso ou sensível em dados.

---

## O que dá para substituir

### Analytics de produto e web

| Você paga por | Alternativa | Licença | Atenção |
|---|---|---|---|
| Google Analytics, Fathom | [Plausible Analytics](https://plausible.io/) | AGPL-3.0 | ⚠️ copyleft de rede |
| Google Analytics | [Umami](https://umami.is/) | MIT | — |
| Adobe/GA enterprise | [Matomo](https://matomo.org/) | GPL-3.0 | ⚠️ copyleft |
| Fathom, Simple Analytics | [GoatCounter](https://www.goatcounter.com) | EUPL-1.2 | — |
| Mixpanel, Amplitude | [PostHog](https://posthog.com) | MIT | — |

Costuma ser a **primeira** troca que vale a pena: barato de hospedar, e resolve LGPD de rastreamento de uma vez.

### Erros e monitoramento de aplicação

| Você paga por | Alternativa | Licença | Atenção |
|---|---|---|---|
| Sentry Cloud | [Sentry Self-Hosted](https://github.com/getsentry/self-hosted) | **BUSL-1.1** | ⚠️ **não é código aberto** — fonte disponível com restrição de uso |
| Sentry Cloud | [GlitchTip](https://glitchtip.com) | MIT | compatível com os SDKs do Sentry |
| Bugsnag | [Bugsink](https://www.bugsink.com/) | — | verificar licença no upstream |

### Suporte e helpdesk

| Você paga por | Alternativa | Licença | Atenção |
|---|---|---|---|
| Intercom, Crisp | [Chatwoot](https://www.chatwoot.com/) | **⊘ Proprietary** | ⚠️ o upstream marca como proprietário — confirme os termos |
| Zendesk | [Zammad](https://zammad.org/) | AGPL-3.0 | ⚠️ copyleft de rede |
| Help Scout | [FreeScout](https://freescout.net/) | AGPL-3.0 | ⚠️ copyleft de rede |

### Email transacional e newsletter

| Você paga por | Alternativa | Licença | Atenção |
|---|---|---|---|
| Mailgun, Postmark | [Postal](https://postalserver.io/) | MIT | 📮 ver aviso abaixo |
| Mailchimp, ConvertKit | [Listmonk](https://listmonk.app) | AGPL-3.0 | ⚠️ copyleft de rede |
| Mailchimp | [Keila](https://www.keila.io) | AGPL-3.0 | ⚠️ copyleft de rede |
| Google Workspace (email) | [Mailu](https://mailu.io/) | MIT | 📮 ver aviso abaixo |

📮 **Aviso sério sobre email:** hospedar envio é a categoria com maior chance de dar errado de um jeito que você não controla. Reputação de IP, SPF/DKIM/DMARC, blocklists e a política de cada provedor destinatário decidem se sua mensagem chega. Muitos fundadores auto-hospedam a newsletter e mantêm o transacional gerenciado — é uma divisão sensata.

### Conteúdo, CMS e blog

| Você paga por | Alternativa | Licença | Atenção |
|---|---|---|---|
| Ghost Pro | [Ghost](https://ghost.org) | MIT | — |
| Contentful, Sanity | [Strapi](https://strapi.io/) | MIT | — |
| Contentful | [Directus](https://directus.io/) | **BUSL-1.1** | ⚠️ **não é código aberto** — restrição de uso comercial |

### Código, issues e projeto

| Você paga por | Alternativa | Licença | Atenção |
|---|---|---|---|
| GitHub | [Gitea](https://about.gitea.com/) | MIT | leve |
| GitHub | [Forgejo](https://forgejo.org/) | MIT | fork comunitário do Gitea |
| GitHub Enterprise, Jira | [GitLab](https://gitlab.com/rluna-gitlab/gitlab-ce) | MIT | pesado para começar |

⚠️ **CI/CD não está no catálogo** — ver [lacunas](#o-que-o-catálogo-não-cobre).

### Backend / BaaS

| Você paga por | Alternativa | Licença | Atenção |
|---|---|---|---|
| Firebase, Supabase | [Appwrite](https://appwrite.io) | BSD-3-Clause | — |
| Firebase | [PocketBase](https://pocketbase.io/) | MIT | binário único, ótimo para MVP |

Supabase **não** está no catálogo, apesar de ser auto-hospedável.

### Painéis internos e low-code

| Você paga por | Alternativa | Licença | Atenção |
|---|---|---|---|
| Retool | [Appsmith](https://www.appsmith.com/) | Apache-2.0 | — |
| Retool | [Budibase](https://www.budibase.com) | **⊘ Proprietary** | ⚠️ o upstream marca como proprietário |

### Feature flags

| Você paga por | Alternativa | Licença | Atenção |
|---|---|---|---|
| LaunchDarkly | [Flagsmith](https://flagsmith.com/) | BSD-3-Clause | — |

### Armazenamento de objetos

| Você paga por | Alternativa | Licença | Atenção |
|---|---|---|---|
| S3, R2 | [GarageHQ](https://garagehq.deuxfleurs.fr/) | AGPL-3.0 | ⚠️ copyleft de rede |
| S3 | [SeaweedFS](https://github.com/seaweedfs/seaweedfs) | Apache-2.0 | — |

MinIO **não** está no catálogo.

### BI e dashboards

| Você paga por | Alternativa | Licença | Atenção |
|---|---|---|---|
| Looker, Mode | [Metabase](https://metabase.com/) | AGPL-3.0 | ⚠️ copyleft de rede |
| Mode, Periscope | [Redash](https://redash.io/) | BSD-2-Clause | — |

### Busca

| Você paga por | Alternativa | Licença | Atenção |
|---|---|---|---|
| Algolia | [Typesense](https://typesense.org) | GPL-3.0 | ⚠️ copyleft |
| Elastic Cloud | [ElasticSearch](https://www.elastic.co/elasticsearch/) | — | verificar licença atual no upstream |
| Algolia | [Manticore Search](https://github.com/manticoresoftware/manticoresearch/) | — | verificar upstream |

Meilisearch **não** está no catálogo.

### CRM

| Você paga por | Alternativa | Licença | Atenção |
|---|---|---|---|
| HubSpot, Pipedrive | [EspoCRM](https://www.espocrm.com/) | AGPL-3.0 | ⚠️ copyleft de rede |
| Salesforce | [Corteza](https://docs.cortezaproject.org) | — | verificar upstream |

### Formulários e pesquisas

| Você paga por | Alternativa | Licença | Atenção |
|---|---|---|---|
| Typeform | [Formbricks](https://formbricks.com/) | AGPL-3.0 | ⚠️ copyleft de rede |

### Documentação interna e wiki

| Você paga por | Alternativa | Licença | Atenção |
|---|---|---|---|
| Notion, Confluence | [Outline](https://www.getoutline.com/) | **BUSL-1.1** | ⚠️ **não é código aberto** |
| Confluence | [BookStack](https://www.bookstackapp.com/) | MIT | — |

### Automação de fluxos

| Você paga por | Alternativa | Licença | Atenção |
|---|---|---|---|
| Zapier, Make | [n8n](https://n8n.io) | **Apache-2.0 + Commons-Clause** | ⚠️ a Commons-Clause proíbe vender o software como serviço |

### Senhas de equipe

| Você paga por | Alternativa | Licença | Atenção |
|---|---|---|---|
| 1Password, LastPass | [Vaultwarden](https://github.com/dani-garcia/vaultwarden) | GPL-3.0 | ⚠️ copyleft; compatível com clientes Bitwarden |
| 1Password | [Bitwarden](https://bitwarden.com/) | AGPL-3.0 | ⚠️ copyleft de rede |
| 1Password Teams | [Passbolt](https://www.passbolt.com/) | AGPL-3.0 | ⚠️ copyleft de rede |

### Arquivos e colaboração

| Você paga por | Alternativa | Licença | Atenção |
|---|---|---|---|
| Dropbox, Google Drive | [Nextcloud](https://nextcloud.com/) | AGPL-3.0 | ⚠️ copyleft de rede |
| Zoom | [Jitsi Meet](https://jitsi.org/Projects/JitsiMeet) | Apache-2.0 | — |

---

## O que o catálogo NÃO cobre

Nestas categorias o awesome-selfhosted **não tem nada** no snapshot atual — a tag existe upstream mas nenhum projeto a referencia. São, ironicamente, as que um fundador de SaaS procura primeiro:

| Categoria | Você provavelmente paga por | Situação |
|---|---|---|
| **Auth / SSO** | Auth0, Clerk, Cognito | ausentes → [`gaps.md`](gaps.md#auth--sso) tem Keycloak (36.1k), Authelia, authentik |
| **Uptime e status page** | Better Stack, Pingdom, Statuspage | ausentes → [`gaps.md`](gaps.md#uptime-e-status-page) tem Uptime Kuma (90.0k), Gatus |
| **CI/CD** | GitHub Actions, CircleCI | ausentes → [`gaps.md`](gaps.md#cicd) tem Drone, Jenkins, Woodpecker |
| **Backup** | Backblaze, AWS Backup | ausentes → [`gaps.md`](gaps.md#backup) tem rclone (59.0k), restic, Borg |
| **PaaS / deploy** | Vercel, Railway, Heroku | ausentes → [`gaps.md`](gaps.md#paas--deploy) tem Coolify (60.3k), Dokku, Kamal |
| **Site estático** | Netlify, Vercel | ausentes → [`gaps.md`](gaps.md#site-estático) tem Hugo (89.4k), Astro, Jekyll |
| **VPN / rede privada** | Tailscale, NordLayer | ausentes → [`gaps.md`](gaps.md#vpn--rede-privada) tem Headscale (42.6k), NetBird |

Não é falha do catálogo: o escopo declarado do upstream é **serviços de rede e aplicações web**, então ferramentas de build, CLIs e implementações de protocolo ficam de fora.

➡️ **Todas essas categorias foram pesquisadas à parte e estão em [`gaps.md`](gaps.md)** — equivalentes ranqueados por estrelas no GitHub, com licença verificada arquivo por arquivo. Lá estão Keycloak, Uptime Kuma, Woodpecker, restic, Coolify, Hugo, Headscale, o Supabase self-hosted e as opções de evento tipo Luma.

---

## Armadilhas de licença nesta shortlist

Seis entradas acima **não são permissivas**, e é fácil não perceber:

| Projeto | Licença | O que significa |
|---|---|---|
| Sentry Self-Hosted | BUSL-1.1 | fonte disponível, uso comercial restrito por período |
| Directus | BUSL-1.1 | idem |
| Outline | BUSL-1.1 | idem |
| Chatwoot | ⊘ Proprietary | marcado como proprietário pelo upstream |
| Budibase | ⊘ Proprietary | idem |
| n8n | Apache-2.0 + Commons-Clause | não pode vender o software como serviço |

Além dessas, **mais de dez entradas são AGPL-3.0**. O AGPL **não** te obriga a nada se você apenas rodar sem modificar — a obrigação nasce quando você modifica e oferece o serviço pela rede a terceiros.

**Se o seu SaaS vai revender ou embutir qualquer um destes, fale com um advogado antes.** O [`legal-compliance-agent`](../../.claude/agents/legal-compliance-agent.md) gera um primeiro rascunho, não um parecer.

---

## Como decidir

No estágio 4.2 do WIZARD o projetista escolhe entre gerenciado, self-hosted e híbrido. Cinco perguntas resolvem a maioria dos casos:

1. **Quanto custa gerenciado no volume do ano 1?** Abaixo de uns R$ 200/mês, self-hosted raramente compensa em tempo.
2. **Os dados são sensíveis?** Dado pessoal, de saúde ou financeiro muda a conta — rode [`privacy-audit`](../../.claude/skills/privacy-audit/SKILL.md).
3. **Você já opera algum servidor hoje?** Se não, o primeiro self-hosted custa bem mais do que parece.
4. **O que acontece se cair no domingo de manhã?** Se não há resposta, é gerenciado.
5. **Vai revender ou embutir no produto?** Então a licença deixa de ser detalhe.

Vale rodar [`cost-watchdog`](../../.claude/skills/cost-watchdog/SKILL.md) antes de fechar — ele compara o custo projetado dos dois caminhos.

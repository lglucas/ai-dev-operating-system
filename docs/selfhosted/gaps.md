# Lacunas — o que o awesome-selfhosted não cobre

O [catálogo espelhado](INDEX.md) tem 1.346 projetos e **nada** para auth, uptime, CI/CD, backup, PaaS, site estático e VPN — justamente as primeiras coisas que um fundador de SaaS procura. Este arquivo fecha o buraco.

Diferente do resto de `docs/selfhosted/`, **isto é autoral, não espelhado.** Não vem do upstream, não é regenerado por script, e a manutenção é nossa.

| | [`shortlist-saas.md`](shortlist-saas.md) | **este arquivo** |
|---|---|---|
| Origem | curado a partir do catálogo espelhado | pesquisa própria |
| Cobre | o que **existe** no awesome-selfhosted | o que **falta** nele |
| Licença | CC-BY-SA 3.0 (dado derivado) | MIT (conteúdo autoral) |

---

## Como esta lista foi montada

Estrelas, licença e última atividade de cada projeto foram consultadas na **API do GitHub em 2026-08-08**, não escritas de memória. Onde a API devolveu `NOASSERTION` (licença fora do padrão SPDX), o arquivo de licença foi lido para descobrir o que realmente é.

**Estrela é sinal de tração, não de qualidade.** Serve para ordenar candidatos, não para escolher. Os números envelhecem — trate como ordem de grandeza.

### Três tipos de armadilha de licença

O terceiro é o que mais pega vibe coder desprevenido:

| Tipo | O que significa | Exemplos aqui |
|---|---|---|
| 🟡 **Copyleft** (AGPL, GPL) | modificar **e** servir pela rede obriga a liberar o código | Grafana, MinIO, Unleash, Zitadel |
| 🟠 **Source-available** (BUSL, FSL) | código visível, uso comercial restrito por prazo | Vault (BUSL-1.1), Sentry (FSL-1.1) |
| 🔴 **Open core** | *"Portions of this software are licensed as follows"* — o núcleo é livre, mas **SSO, RBAC e audit log ficam na edição paga** | authentik, SigNoz, Infisical, n8n, Meilisearch, Langfuse, GrowthBook, SuperTokens, Dokploy, LiteLLM, Windmill, Pangolin |

🔴 é o mais traiçoeiro porque o projeto se apresenta como open source — e é, até você precisar de login corporativo. **Treze dos projetos pesquisados são open core.** Se o teu SaaS vai depender de um recurso específico, confirme em qual edição ele mora **antes** de adotar.

---

## Auth / SSO

Substitui **Auth0, Clerk, AWS Cognito, Firebase Auth**.

| Projeto | ⭐ | Licença | Observação |
|---|---:|---|---|
| [Keycloak](https://github.com/keycloak/keycloak) | 36.1k | Apache-2.0 ✅ | padrão de facto; Red Hat; pesado mas completo |
| [Authelia](https://github.com/authelia/authelia) | 28.5k | Apache-2.0 ✅ | leve; ótimo como portal 2FA na frente de um reverse proxy |
| [authentik](https://github.com/goauthentik/authentik) | 23.9k | 🔴 open core | UX moderna; confira o que fica na edição paga |
| [Ory Hydra](https://github.com/ory/hydra) | 17.5k | Apache-2.0 ✅ | só OAuth2/OIDC; parear com Kratos para identidade |
| [SuperTokens](https://github.com/supertokens/supertokens-core) | 15.3k | 🔴 open core | fácil de embutir em app próprio |
| [Logto](https://github.com/logto-io/logto) | 14.3k | MPL-2.0 ✅ | copyleft fraco, por arquivo |
| [Casdoor](https://github.com/casdoor/casdoor) | 14.1k | Apache-2.0 ✅ | — |
| [Ory Kratos](https://github.com/ory/kratos) | 13.8k | Apache-2.0 ✅ | identidade sem UI própria |
| [LLDAP](https://github.com/lldap/lldap) | 6.4k | GPL-3.0 🟡 | LDAP simplificado; bom para lab caseiro |

**Se você quer só uma escolha:** Keycloak se precisa de tudo e aguenta a complexidade; Authelia se quer proteger um punhado de serviços atrás de um proxy sem virar administrador de IAM.

---

## Uptime e status page

Substitui **Better Stack, Pingdom, Statuspage.io, UptimeRobot**.

| Projeto | ⭐ | Licença | Observação |
|---|---:|---|---|
| [Uptime Kuma](https://github.com/louislam/uptime-kuma) | 90.0k | MIT ✅ | o mais estrelado desta pesquisa toda; sobe em minutos |
| [Cachet](https://github.com/CachetHQ/cachet) | 15.2k | ver upstream | status page, não monitor |
| [Gatus](https://github.com/TwiN/gatus) | 11.8k | Apache-2.0 ✅ | config em YAML, cabe em GitOps |
| [Kener](https://github.com/rajnandan1/kener) | 5.1k | MIT ✅ | status page moderna |
| [Statping-ng](https://github.com/statping-ng/statping-ng) | 2.0k | GPL-3.0 🟡 | ⚠️ sem commits desde 2025-06 |

**Se você quer só uma escolha:** Uptime Kuma. É a resposta óbvia e raramente errada.

---

## CI/CD

Substitui **GitHub Actions, CircleCI, Travis**.

| Projeto | ⭐ | Licença | Observação |
|---|---:|---|---|
| [Drone](https://github.com/harness/drone) | 37.7k | Apache-2.0 ✅ | agora sob a Harness; confirme o rumo do projeto |
| [Jenkins](https://github.com/jenkinsci/jenkins) | 26.4k | MIT ✅ | plugin para tudo; peso e idade à altura |
| [Argo CD](https://github.com/argoproj/argo-cd) | 23.9k | Apache-2.0 ✅ | GitOps para Kubernetes, não CI genérico |
| [Dagger](https://github.com/dagger/dagger) | 16.1k | Apache-2.0 ✅ | pipeline como código, roda dentro de qualquer CI |
| [Tekton](https://github.com/tektoncd/pipeline) | 9.0k | Apache-2.0 ✅ | nativo de Kubernetes |
| [Woodpecker](https://github.com/woodpecker-ci/woodpecker) | 7.7k | Apache-2.0 ✅ | fork comunitário do Drone; leve, ótimo com Gitea |

**Se você quer só uma escolha:** Woodpecker se você já roda Gitea/Forgejo — a dupla é a substituição mais limpa do GitHub. Fora disso, pense duas vezes: CI gerenciado é barato, e CI próprio é manutenção eterna.

---

## Backup

Substitui **Backblaze, AWS Backup, Time Machine**.

| Projeto | ⭐ | Licença | Observação |
|---|---:|---|---|
| [rclone](https://github.com/rclone/rclone) | 59.0k | MIT ✅ | sincroniza com 70+ provedores; não é backup versionado |
| [restic](https://github.com/restic/restic) | 35.4k | BSD-2-Clause ✅ | deduplicado, criptografado, um binário |
| [Duplicati](https://github.com/duplicati/duplicati) | 14.9k | MIT ✅ | tem UI web; bom para quem foge de terminal |
| [Kopia](https://github.com/kopia/kopia) | 13.8k | Apache-2.0 ✅ | CLI + GUI, rápido |
| [Borg](https://github.com/borgbackup/borg) | 13.6k | BSD ✅ | veterano; deduplicação excelente |
| [Backrest](https://github.com/garethgeorge/backrest) | 7.1k | GPL-3.0 🟡 | UI web **em cima do restic** — combinação prática |

**Se você quer só uma escolha:** restic, com Backrest por cima se quiser interface. E **teste a restauração** — backup que nunca foi restaurado não é backup.

---

## PaaS / deploy

Substitui **Vercel, Railway, Render, Heroku**.

| Projeto | ⭐ | Licença | Observação |
|---|---:|---|---|
| [Coolify](https://github.com/coollabsio/coolify) | 60.3k | Apache-2.0 ✅ | o mais próximo de "Vercel no meu servidor" |
| [Dokploy](https://github.com/Dokploy/dokploy) | 36.4k | 🔴 open core | crescimento rápido; verifique o que é pago |
| [Dokku](https://github.com/dokku/dokku) | 32.1k | MIT ✅ | mini-Heroku via `git push`; maduro e estável |
| [CapRover](https://github.com/caprover/caprover) | 15.1k | Apache-2.0 ✅ | UI amigável, apps de um clique |
| [Kamal](https://github.com/basecamp/kamal) | 14.5k | MIT ✅ | do Basecamp; deploy por SSH, sem painel |

**Se você quer só uma escolha:** Coolify. É a categoria onde self-hosted mais compensa em custo — mas você assume TLS, backup e uptime do próprio painel.

---

## Site estático

Substitui **Netlify, Vercel (para conteúdo)**.

| Projeto | ⭐ | Licença | Observação |
|---|---:|---|---|
| [Hugo](https://github.com/gohugoio/hugo) | 89.4k | Apache-2.0 ✅ | absurdamente rápido; templates Go |
| [Docusaurus](https://github.com/facebook/docusaurus) | 65.9k | MIT ✅ | documentação; React |
| [Astro](https://github.com/withastro/astro) | 61.7k | MIT ✅ | conteúdo com ilhas de interatividade |
| [Jekyll](https://github.com/jekyll/jekyll) | 51.6k | MIT ✅ | Ruby; nativo do GitHub Pages |
| [Eleventy](https://github.com/11ty/eleventy) | 19.8k | MIT ✅ | JS, sem opinião forte |
| [Zola](https://github.com/getzola/zola) | 17.3k | EUPL-1.2 | binário único em Rust |

Categoria inteiramente permissiva — **nenhuma armadilha de licença aqui**. Note que gerador estático e *hospedagem* são coisas diferentes: você ainda precisa de onde servir (Coolify, um bucket, ou o próprio Netlify).

---

## VPN / rede privada

Substitui **Tailscale, NordLayer, ZeroTier**.

| Projeto | ⭐ | Licença | Observação |
|---|---:|---|---|
| [Headscale](https://github.com/juanfont/headscale) | 42.6k | BSD-3-Clause ✅ | servidor de controle Tailscale próprio; usa os clientes oficiais |
| [NetBird](https://github.com/netbirdio/netbird) | 28.2k | BSD-3-Clause ✅ | solução completa, com painel |
| [wg-easy](https://github.com/wg-easy/wg-easy) | 26.6k | AGPL-3.0 🟡 | WireGuard com UI; o caminho mais simples |
| [Pangolin](https://github.com/fosrl/pangolin) | 22.1k | 🔴 open core | túnel reverso + acesso; alternativa ao Cloudflare Tunnel |
| [Nebula](https://github.com/slackhq/nebula) | 17.6k | MIT ✅ | do Slack; mesh, escala bem |
| [Firezone](https://github.com/firezone/firezone) | 9.0k | Apache-2.0 ✅ | com controle de acesso |

**Se você quer só uma escolha:** Headscale se você já gosta do Tailscale e só quer tirar o painel deles do caminho; wg-easy se quer WireGuard funcionando hoje.

---

## Backend / BaaS — o Supabase que você mencionou

Substitui **Firebase, Supabase Cloud**.

| Projeto | ⭐ | Licença | Observação |
|---|---:|---|---|
| [Supabase](https://github.com/supabase/supabase) | 107.7k | Apache-2.0 ✅ | **auto-hospedável via Docker Compose** |
| [PocketBase](https://github.com/pocketbase/pocketbase) | 60.6k | MIT ✅ | um binário, SQLite; imbatível para MVP |
| [Appwrite](https://github.com/appwrite/appwrite) | 56.8k | BSD-3-Clause ✅ | — |
| [Nhost](https://github.com/nhost/nhost) | 9.3k | MIT ✅ | Postgres + GraphQL (Hasura) |

**Você estava certo — o Supabase tem self-hosted próprio**, Apache-2.0, e é o repositório mais estrelado desta pesquisa inteira (107.7k). Vale um aviso honesto: o self-hosted é um `docker-compose` com cerca de dez serviços (Postgres, GoTrue, PostgREST, Realtime, Storage, Kong, Studio…). Sobe fácil; **operar em produção com backup e upgrade é outro trabalho.**

**Conexão com o OS:** a skill [`deploy-vercel-supabase`](../../.claude/skills/deploy-vercel-supabase/SKILL.md) hoje cobre só o Supabase gerenciado. Se você adotar o self-hosted, ela precisa de um caminho paralelo — registrado nas pendências no fim deste arquivo.

---

## Eventos e RSVP — o "Luma" que você mencionou

Substitui **Luma (lu.ma), Eventbrite, Meetup**.

| Projeto | ⭐ | Licença | Observação |
|---|---:|---|---|
| [Cal.com](https://github.com/calcom/cal.diy) | 47.4k | MIT ✅ | ⚠️ repo **renomeado para `cal.diy`**; é agendamento (Calendly), não página de evento |
| [Attendize](https://github.com/Attendize/Attendize) | 4.3k | Attribution Assurance | ⚠️ **sem commits desde 2024-08** |
| [Hi.Events](https://github.com/HiEventsDev/Hi.Events) | 4.0k | AGPL-3.0 🟡 | ativo; já está no catálogo espelhado |
| [pretix](https://github.com/pretix/pretix) | 2.5k | ver upstream | forte em conferência e ingresso pago |
| [eventyay](https://github.com/fossasia/eventyay) | 1.6k | Apache-2.0 ✅ | da FOSSASIA; eventos + palestras + check-in |
| [alf.io](https://github.com/alfio-event/alf.io) | 1.6k | GPL-3.0 🟡 | reserva de ingresso; já está no catálogo |

**Aviso honesto: não existe um clone do Luma.** O Luma junta três coisas — página bonita de evento, RSVP sem atrito, e calendário de comunidade. As opções acima cobrem **ticketing** (Hi.Events, pretix, alf.io) ou **agendamento 1-a-1** (Cal.com), não a experiência social do Luma.

O mais próximo em espírito é o **Mobilizon** (Framasoft) — eventos federados com grupos, exatamente o ângulo de comunidade. Mas ele **não vive no GitHub**: o canônico é `framagit.org/framasoft/mobilizon`, e por isso não aparece em nenhuma busca por estrelas. No GitHub só existem empacotamentos e espelhos.

**Se você quer só uma escolha:** Hi.Events se precisa vender ingresso; Cal.com se o que você chama de "Luma" é na prática agendamento.

---

## Outras categorias ausentes do catálogo

Não estavam nas sete lacunas originais, mas também faltam no awesome-selfhosted e substituem SaaS caro.

### Observabilidade — substitui Datadog, New Relic

| Projeto | ⭐ | Licença |
|---|---:|---|
| [Grafana](https://github.com/grafana/grafana) | 76.2k | AGPL-3.0 🟡 |
| [Prometheus](https://github.com/prometheus/prometheus) | 65.6k | Apache-2.0 ✅ |
| [SigNoz](https://github.com/SigNoz/signoz) | 31.8k | 🔴 open core |
| [OpenObserve](https://github.com/openobserve/openobserve) | 20.6k | AGPL-3.0 🟡 |

### Erros — substitui Sentry Cloud, Bugsnag

| Projeto | ⭐ | Licença |
|---|---:|---|
| [Sentry](https://github.com/getsentry/sentry) | 44.5k | 🟠 **FSL-1.1** — vira Apache-2.0 depois de 2 anos |
| [Bugsink](https://github.com/bugsink/bugsink) | 2.0k | ver upstream |

### Segredos — substitui Doppler, AWS Secrets Manager

| Projeto | ⭐ | Licença |
|---|---:|---|
| [Vault](https://github.com/hashicorp/vault) | 36.1k | 🟠 **BUSL-1.1** — não é mais open source |
| [Infisical](https://github.com/Infisical/infisical) | 28.6k | 🔴 open core |
| [OpenBao](https://github.com/openbao/openbao) | 7.0k | MPL-2.0 ✅ — **fork do Vault pré-BUSL, sob a Linux Foundation** |

Se a licença do Vault te incomoda, o OpenBao existe exatamente por isso.

### Armazenamento de objetos — substitui S3, R2

| Projeto | ⭐ | Licença |
|---|---:|---|
| [MinIO](https://github.com/minio/minio) | 61.4k | AGPL-3.0 🟡 — ⚠️ sem commits desde 2026-04 |
| [SeaweedFS](https://github.com/seaweedfs/seaweedfs) | 34.0k | Apache-2.0 ✅ |
| [Garage](https://github.com/deuxfleurs-org/garage) | 4.3k | AGPL-3.0 🟡 |

### Feature flags — substitui LaunchDarkly

| Projeto | ⭐ | Licença |
|---|---:|---|
| [Unleash](https://github.com/Unleash/unleash) | 13.7k | AGPL-3.0 🟡 |
| [GrowthBook](https://github.com/growthbook/growthbook) | 8.1k | 🔴 open core |
| [Flagsmith](https://github.com/Flagsmith/flagsmith) | 6.5k | BSD-3-Clause ✅ |

### Busca — substitui Algolia

| Projeto | ⭐ | Licença |
|---|---:|---|
| [Meilisearch](https://github.com/meilisearch/meilisearch) | 58.9k | 🔴 open core (Enterprise Edition) |
| [Qdrant](https://github.com/qdrant/qdrant) | 33.9k | Apache-2.0 ✅ — vetorial |
| [Typesense](https://github.com/typesense/typesense) | 26.4k | GPL-3.0 🟡 |

### Workflow e filas — substitui Zapier, Temporal Cloud

| Projeto | ⭐ | Licença |
|---|---:|---|
| [n8n](https://github.com/n8n-io/n8n) | 199.9k | 🔴 open core + Commons-Clause |
| [Temporal](https://github.com/temporalio/temporal) | 22.2k | MIT ✅ |
| [Windmill](https://github.com/windmill-labs/windmill) | 17.5k | 🔴 open core |
| [Hatchet](https://github.com/hatchet-dev/hatchet) | 7.7k | MIT ✅ |

### Infra de LLM — substitui OpenAI API, LangSmith

| Projeto | ⭐ | Licença |
|---|---:|---|
| [Ollama](https://github.com/ollama/ollama) | 178.1k | MIT ✅ — roda modelo local |
| [Open WebUI](https://github.com/open-webui/open-webui) | 148.3k | ⚠️ licença própria, *"all rights reserved"* |
| [LiteLLM](https://github.com/BerriAI/litellm) | 55.9k | 🔴 open core — proxy para 100+ provedores |
| [Langfuse](https://github.com/langfuse/langfuse) | 32.7k | 🔴 open core — observabilidade de LLM |

---

## Manutenção

Esta lista **não é gerada**. As estrelas são de **2026-08-08** e envelhecem; licenças mudam — Vault e Sentry mudaram, e é por isso que a coluna existe.

Revalide antes de adotar qualquer coisa daqui:

```bash
gh api repos/OWNER/REPO --jq '[.stargazers_count, .license.spdx_id, .pushed_at[0:10], .archived] | @tsv'
```

Se a licença voltar `NOASSERTION`, leia o arquivo — foi assim que os treze open core apareceram:

```bash
gh api repos/OWNER/REPO/license --jq '.content' | base64 -d | head -20
```

## Pendências que esta pesquisa abriu

- **`deploy-vercel-supabase` cobre só o Supabase gerenciado.** Com o self-hosted sendo Apache-2.0 e o repo mais estrelado desta pesquisa, a skill merece um caminho paralelo — ou uma irmã, `deploy-selfhosted`.
- **Nenhum destes tem pack no registry.** São 60+ projetos verificados; os mais fortes (Coolify, Uptime Kuma, Supabase, Keycloak, restic, Headscale) justificariam one-pagers em `docs/registry/packs/`.
- **`cost-watchdog` poderia consultar este arquivo** ao comparar gerenciado vs. self-hosted no estágio 4.2, em vez de raciocinar no abstrato.

# Catálogo self-hosted

Espelho local do **[awesome-selfhosted](https://github.com/awesome-selfhosted/awesome-selfhosted)** — 1.346 projetos de código aberto que você pode hospedar por conta própria em vez de assinar um SaaS de terceiros.

| Arquivo | O que é | Gerado? |
|---|---|---|
| [`shortlist-saas.md`](shortlist-saas.md) | **Comece por aqui.** As categorias que um fundador de SaaS de fato substitui, curadas à mão. | ✋ manual |
| [`INDEX.md`](INDEX.md) | Índice das 12 categorias com contagem. | 🤖 gerado |
| [`catalog/`](catalog) | O acervo completo, 1.346 projetos em 12 arquivos. | 🤖 gerado |

Upstream, para aprofundar: **<https://github.com/awesome-selfhosted/awesome-selfhosted>** · dados em **<https://github.com/awesome-selfhosted/awesome-selfhosted-data>** · site em **<https://awesome-selfhosted.net>**.

---

## Licença — leia antes de copiar daqui

O AI Dev Operating System é MIT. **Este diretório não é.**

> Os dados em `INDEX.md` e `catalog/` derivam do awesome-selfhosted-data, licenciado sob **[Creative Commons Attribution-ShareAlike 3.0 Unported](https://creativecommons.org/licenses/by-sa/3.0/)** (CC-BY-SA 3.0). A lista de autores está em [AUTHORS](https://github.com/awesome-selfhosted/awesome-selfhosted-data/blob/master/AUTHORS) no upstream.
>
> Share-alike significa que **qualquer redistribuição destes dados, modificada ou não, precisa manter a mesma licença e a atribuição**. Se você copiar tabelas daqui para o seu projeto, o CC-BY-SA acompanha. O resto do OS continua MIT — a fronteira é este diretório.

O carve-out é deliberado, e é o motivo de o catálogo viver em `docs/selfhosted/` em vez de misturado ao `docs/registry/`.

---

## Como isto se relaciona com o `docs/registry/`

Duas coisas diferentes, fáceis de confundir:

| | `docs/registry/` | `docs/selfhosted/` |
|---|---|---|
| **Pergunta que responde** | "que repo eu instalo **dentro** do meu projeto?" | "que software eu hospedo **em vez de** assinar um SaaS?" |
| **Conteúdo** | 71 packs curados à mão, um one-pager cada | 1.346 entradas geradas de fonte externa |
| **Licença** | MIT (o catálogo; cada pack tem a sua) | CC-BY-SA 3.0 |
| **Quando roda no WIZARD** | estágios 3.1 e 4.3 | estágio 4.2 |

---

## Regenerar

```bash
node scripts/sync-selfhosted.js
```

Clona o upstream, lê os YAML e reescreve `INDEX.md` e `catalog/`. **Não sobrescreve** este README nem a `shortlist-saas.md`.

Para usar um clone que você já tem localmente:

```bash
node scripts/sync-selfhosted.js /caminho/para/awesome-selfhosted-data
```

Vale rodar a cada poucos meses. O upstream tem verificação automática de link morto e de projeto abandonado; **nossa cópia não tem** — ela é fiel à data em que foi gerada, e nada mais.

---

## O que este catálogo NÃO cobre

Verificado no snapshot atual, e relevante justamente porque é onde um fundador de SaaS olha primeiro. Nestas 9 categorias **o arquivo de tag existe upstream mas nenhum software a referencia**:

`Backup` · `Federated Identity & Authentication` · `Identity Management` · `Monitoring & Status Pages` · `Software Development - CI/CD` · `Software Development - FaaS & Serverless` · `Static Site Generators` · `VPN` · `File Transfer - Distributed Filesystems`

E projetos conhecidos dessas áreas estão ausentes do dataset: Keycloak, Authentik, MinIO, Supabase, Uptime Kuma, Coolify, WireGuard, restic, Borg, Hugo, Jekyll, Jenkins, Cal.com.

Isso é coerente com o escopo declarado do upstream — **serviços de rede e aplicações web** auto-hospedados. Ferramentas de build, CLIs de backup e implementações de protocolo caem fora do escopo, e os arquivos de tag vazios são resíduo de um escopo anterior.

**Consequência prática:** para auth, observabilidade, CI/CD, backup e PaaS, este catálogo não vai te ajudar. Procure no `docs/registry/` ou fora. A [`shortlist-saas.md`](shortlist-saas.md) marca essas lacunas explicitamente em vez de fingir que não existem.

---

## Licenças dentro do catálogo

Medido no snapshot atual das 1.346 entradas:

| Licença | Entradas | Atenção |
|---|---:|---|
| MIT | 360 | permissiva |
| **AGPL-3.0** | **302** | ⚠️ copyleft de rede |
| **GPL-3.0** | **224** | ⚠️ copyleft |
| Apache-2.0 | 143 | permissiva |
| BSD (variantes) | 51 | permissiva |
| **⊘ Proprietary** | **70** | ⚠️ não é código aberto |

Cerca de **39% do catálogo é copyleft**. Duas armadilhas concretas:

1. **AGPL-3.0 alcança uso em rede.** Se você modificar um componente AGPL e oferecer o serviço pela internet, precisa disponibilizar o código modificado aos usuários. Rodar sem modificar é livre; modificar e servir, não.
2. **Nem tudo aqui é código aberto.** O upstream mantém uma lista de licenças não-livres (`BUSL-1.1`, `SSPL-1.0`, `Elastic-2.0`, `Commons-Clause`, `FSL-1.1-MIT`, `CC-BY-NC-*`, `⊘ Proprietary`) e marca as entradas correspondentes. 70 são proprietárias.

**Confirme a licença no upstream do projeto antes de adotar.** A coluna aqui é ponto de partida, não parecer jurídico.

---

## Por que isto existe no OS

O WIZARD, no estágio 4.2 (Technical Plan), pergunta ao projetista se ele quer plataformas gerenciadas, self-hosted, ou híbrido. A pergunta só é honesta se houver uma resposta concreta do lado self-hosted — daí o catálogo ser local e offline, e não um link.

A postura do mantenedor está no [`ETHOS.md`](../../ETHOS.md): preferência por self-hosted, por independência de infraestrutura, controle dos dados e custo. **Isso é postura, não regra.** O estágio 4.2 apresenta o trade-off dos dois lados e aceita a decisão do projetista — inclusive "gerenciado em tudo", que costuma ser a resposta certa para quem está sozinho no Sprint 1.

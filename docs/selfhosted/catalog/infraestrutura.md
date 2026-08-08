# Self-hosted — Infraestrutura e rede

DNS, proxy, VPN, servidores web, acesso remoto, IoT, painéis de self-hosting.

**106 projetos** nesta categoria.

> **Fonte:** [awesome-selfhosted/awesome-selfhosted-data](https://github.com/awesome-selfhosted/awesome-selfhosted-data) · **Licença:** [CC-BY-SA 3.0 Unported](https://creativecommons.org/licenses/by-sa/3.0/) · **Autores:** [AUTHORS](https://github.com/awesome-selfhosted/awesome-selfhosted-data/blob/master/AUTHORS) upstream.
> Arquivo **gerado** por `scripts/sync-selfhosted.js`. Não edite à mão — as edições se perdem na próxima sincronização.

[← Voltar ao índice](../INDEX.md) · [Shortlist SaaS](../shortlist-saas.md)

---

## DNS

| Projeto | O que é | Licença | Plataforma | ⭐ |
|---|---|---|---|---|
| [AdGuard Home](https://adguard.com/en/adguard-home/overview.html) | User-friendly ads & trackers blocking DNS server. | GPL-3.0 | Docker | 36.0k |
| [blocky](https://0xerr0r.github.io/blocky/latest/) | Fast and lightweight DNS proxy as ad-blocker for local network with many features (alternative to Pi-hole). | Apache-2.0 | Go, Docker | 6.8k |
| [Maza ad blocking](https://maza-ad-blocking.andros.dev/) | Local ad blocker. Like Pi-hole but local and using your operating system. | Apache-2.0 | Shell | 1.9k |
| [Numa](https://numa.rs/) | Ad-blocking DNS resolver with DNSSEC-validating recursive resolution, DoH/DoT/Oblivious DoH, ephemeral overrides, and local service domains, in a single Rust binary (alternative to Pi-hole, AdGuard Home, NextDNS). | MIT | Rust, Docker, Nix | 1.4k |
| [Pi-hole](https://pi-hole.net/) | Blackhole for Internet advertisements with a GUI for management and monitoring. | EUPL-1.2 | Shell, PHP, Docker | 60.2k |
| [Technitium DNS Server](https://technitium.com/dns/) | Authoritative/recursive DNS server with ad blocking functionality. | GPL-3.0 | Docker, C# | 9.4k |

## Internet of Things (IoT)

| Projeto | O que é | Licença | Plataforma | ⭐ |
|---|---|---|---|---|
| [Domoticz](https://www.domoticz.com/) | Home Automation System that lets you monitor and configure various devices like: Lights, Switches, various sensors/meters like Temperature, Rain, Wind, UV, Electra, Gas, Water and much more. | GPL-3.0 | C, C++, Docker, Shell | 3.8k |
| [EMQX](https://www.emqx.io/) | Scalable MQTT broker. Connect 100M+ IoT devices in one single cluster, move and process real-time IoT data with 1M msg/s throughput at 1ms latency. | Apache-2.0 | Docker, Erlang | 16.6k |
| [evcc](https://evcc.io/) | Extensible Electric Vehicle Charge Controller and home energy management system. | MIT | deb, Docker, Go | 7.1k |
| [FHEM](https://fhem.de/fhem.html) | Automate common tasks in the household like switching lamps and heating. It can also be used to log events like temperature or power consumption. You can control it via web or smartphone frontends, telnet or TCP/IP directly. | GPL-3.0 | Perl | — |
| [FlowForge](https://flowforge.com/) | Deploy Node-RED applications in a reliable, scalable and secure manner. The FlowForge platform provides DevOps capabilities for Node-RED development teams. | Apache-2.0 | Nodejs, Docker, K8S | 0.4k |
| [FMD Server](https://fmd-foss.org) | A server to communicate with the FMD (Find My Device) Android app, to locate and control your devices. | GPL-3.0 | Docker, Go | 0.2k |
| [Gladys](https://gladysassistant.com/) | Privacy-first home assistant. | Apache-2.0 | Nodejs, Docker | 3.1k |
| [Home Assistant](https://home-assistant.io/) | Home automation platform. | Apache-2.0 | Python, Docker | 89.8k |
| [ioBroker](https://www.iobroker.net/) | Integration platform for the Internet of Things, focused on building automation, smart metering, ambient assisted living, process automation, visualization and data logging. | MIT | Nodejs | 1.4k |
| [LHA](https://github.com/javalikescript/lha) | Light Home Automation application that is fully extensible using Blockly, HTML or Lua. It includes extensions such as ConBee, Philips Hue or Z-Wave JS. | MIT | Lua | 0.0k |
| [Node RED](https://nodered.org/) | Browser-based flow editor that helps you wiring hardware devices, APIs and online services to create IoT solutions. | Apache-2.0 | Nodejs, Docker | 23.5k |
| [Onloc](https://onloc.app) | Track and share your location in real time. Control and lock stolen or lost phones. | AGPL-3.0 | Docker | 0.0k |
| [openHAB](https://www.openhab.org) | Vendor and technology agnostic open source software for home automation. | EPL-2.0 | Java | 1.1k |
| [OpenRemote](https://openremote.io) | IoT Asset management, Flow Rules and WHEN-THEN rules, Data visualization, Edge Gateway. | AGPL-3.0 | Java | 1.8k |
| [polluSensWeb](https://wespeakenglish.github.io/polluSensWeb/) | Web-based serial interface and charting tool for visualizing and logging data from UART pollution sensors (PM2.5, VOC, etc). Features live data acquisition, dynamic charts, CSV export, and webhook integration. | MIT | Javascript | 0.0k |
| [SIP Irrigation Control](https://dan-in-ca.github.io/SIP/) | Open source software for sprinkler/irrigation control. | GPL-3.0 | Python | 0.4k |
| [SOLECTRUS](https://solectrus.de) | Photovoltaic dashboard that displays energy production and consumption with cost and savings calculations. | AGPL-3.0 | Docker | 0.2k |
| [Tasmota](https://tasmota.com) | Open source firmware for ESP devices. Total local control with quick setup and updates. Control using MQTT, Web UI, HTTP or serial. Automate using timers, rules or scripts. Integration with home automation solutions. | GPL-3.0 | C, C++ | 24.7k |
| [Thingsboard](https://thingsboard.io/) | Open-source IoT Platform - Device management, data collection, processing and visualization. | Apache-2.0 | Java, Docker, K8S | 22.2k |
| [WebThings Gateway](https://webthings.io/gateway/) | WebThings is an open source implementation of the Web of Things, including the WebThings Gateway and the WebThings Framework. | MPL-2.0 | Nodejs | 2.6k |

## Network Utilities

| Projeto | O que é | Licença | Plataforma | ⭐ |
|---|---|---|---|---|
| [beelzebub](https://beelzebub-honeypot.com/) | Honeypot framework designed to provide a highly secure environment for detecting and analyzing cyber attacks. | MIT | Docker, K8S, Go | 2.1k |
| [Canary Tokens](https://canarytokens.org) | Generates lightweight, embedded honeypot triggers called canary tokens for detecting unauthorized access. | BSD-3-Clause | Docker, Python | 3.0k |
| [MyIP](https://ipcheck.ing) | All in one IP Toolbox. Easy to check what's your IPs, IP geolocation, check for DNS leaks, examine WebRTC connections, speed test, ping test, MTR test, check website availability and more. | MIT | Nodejs, Docker | 11.5k |
| [MySpeed](https://myspeed.dev/) | Speed test analysis software that shows your internet speed for up to 30 days. | MIT | Docker, Nodejs | 3.0k |
| [NetAlertX](https://netalertx.com/) | Network intruder and presence detector. Scans for devices connected to your network and alerts you if new and unknown devices are found. | GPL-3.0 | Docker | 6.9k |
| [PlugNPiN](https://deepspace2.github.io/PlugNPiN) | Automatically scrapes containers with specific labels and creates local DNS/CNAME entries in Pi-Hole/AdGuard Home and proxy hosts in Nginx Proxy Manager. | GPL-3.0 | Docker | 0.1k |
| [Speed Test by OpenSpeedTest™](https://openspeedtest.com/) | Free & Open-Source HTML5 Network Performance Estimation Tool. | MIT | Docker | 3.7k |
| [Speedtest Tracker](https://docs.speedtest-tracker.dev/) | Monitor the performance and uptime of your internet connection. | MIT | Docker, K8S | 5.9k |
| [Upsnap](https://github.com/seriousm4x/UpSnap) | A simple Wake on LAN (WOL) dashboard app. Wake up devices on your network and see current status. | MIT | Go, Docker | 6.1k |
| [Wakupator](https://github.com/Gibus21250/Wakupator) | Wake On LAN Machine Manager based on network traffic. | MIT | C | 0.2k |
| [WatchYourLAN](https://github.com/aceberg/WatchYourLAN) | Lightweight network IP scanner with notifications, history, export to Grafana. | MIT | Docker, Go, deb | 7.2k |
| [whois](https://github.com/KincaidYang/whois) | WHOIS/RDAP query API for domains, IP addresses, CIDR prefixes and ASNs, with unified JSON output, caching, API key authentication, batch queries and MCP support for AI assistants. | MIT | Go, Docker | 0.1k |

## Proxy

| Projeto | O que é | Licença | Plataforma | ⭐ |
|---|---|---|---|---|
| [g3proxy](https://g3-project.readthedocs.io/projects/g3proxy/en/latest/) | Forward proxy server supporting proxy chaining, protocol inspection, MITM Interception, ICAP adaptation and transparent proxy. | Apache-2.0 | Rust, deb | — |
| [GitProxy](https://git-proxy.finos.org/) | Proxy for Git that applies rules and workflows to all outgoing git push operations and ensures they are compliant. It supports both HTTP/HTTPS and SSH protocols with security scanning and validation. | Apache-2.0 | Nodejs, Docker | 0.2k |
| [imgproxy](https://imgproxy.net/) | Fast and secure standalone server for resizing and converting remote images. | MIT | Go, Docker, K8S | 11.0k |
| [iodine](https://code.kryo.se/iodine/) | IPv4 over DNS tunnel solution, enabling you to start up a socks5 proxy listener. | ISC | C, deb | 7.9k |
| [Outline Server](https://getoutline.org/) | A proxy server that runs a Shadowsocks instance for each access key and a REST API to manage the access keys. | Apache-2.0 | Docker, Nodejs | 6.2k |
| [Privoxy](https://www.privoxy.org) | Non-caching web proxy with advanced filtering capabilities for enhancing privacy, modifying web page data and HTTP headers, controlling access, and removing ads and other obnoxious Internet junk. | GPL-2.0 | C, deb | — |
| [sish](https://github.com/antoniomika/sish) | HTTP(S)/WS(S)/TCP tunnels to localhost using only SSH (serveo/ngrok alternative). | MIT | Go, Docker | 4.7k |
| [socks5-proxy-server](https://github.com/nskondratev/socks5-proxy-server) | SOCKS5 proxy server with built-in authentication and Telegram-bot for user management and user statistics on data spent (handy when you pay per GB of data). It is dockerised and simple to install. | Apache-2.0 | Docker | 0.1k |
| [Squid](http://www.squid-cache.org/) | Caching proxy for the Web supporting HTTP, HTTPS, FTP, and more. It reduces bandwidth and improves response times by caching and reusing frequently-requested web pages. | GPL-2.0 | C, deb | — |
| [Tinyproxy](https://tinyproxy.github.io/) | Light-weight HTTP/HTTPS proxy daemon. | GPL-2.0 | C, deb | 6.0k |

## Remote Access

| Projeto | O que é | Licença | Plataforma | ⭐ |
|---|---|---|---|---|
| [Cardea](https://github.com/hectorm/cardea) | SSH bastion server with access control, session recording, and optional TPM-backed key protection. | EUPL-1.2 | Go, Docker | 0.0k |
| [Engity's Bifröst](https://bifroest.engity.org/) | Highly customizable SSH server with several ways to authorize a user and options where and how to execute a user's session. | Apache-2.0 | Go, Docker | 0.1k |
| [Firezone](https://www.firezone.dev/) | Secure remote access gateway that supports the WireGuard protocol. It offers a Web GUI, 1-line install script, multi-factor auth (MFA), and SSO. | Apache-2.0 | Elixir, Docker | 9.0k |
| [Guacamole](https://guacamole.apache.org) | Clientless remote desktop gateway supporting standard protocols like VNC and RDP. | Apache-2.0 | Java, C | 3.9k |
| [MeshCentral](https://meshcentral.com/) | Run your own web server to remotely manage and control computers on a local network or anywhere on the internet. | Apache-2.0 | Nodejs | 7.0k |
| [ShellHub](https://www.shellhub.io) | Modern SSH server for remotely accessing linux devices via command line (using any SSH client) or web-based user interface (alternative to sshd). | Apache-2.0 | Docker | 2.1k |
| [SparkView](https://www.beyondssl.com/en/products/sparkview/) | Browser-based remote access solution. No VPN client; just deploy the software in the DMZ. Access VMs, desktops, servers, and apps anytime, anywhere, without complex and costly client rollouts or user management. | ⊘ Proprietary | Java | — |
| [Sshwifty](https://github.com/nirui/sshwifty) | Sshwifty is a SSH and Telnet connector made for the Web. | AGPL-3.0 | Go, Docker | 3.1k |
| [Termix](https://docs.termix.site/) | Clientless web-based server management platform with SSH terminal, tunneling, and file editing capabilities. | Apache-2.0 | Docker | 14.6k |
| [Warpgate](https://github.com/warp-tech/warpgate) | Fully transparent SSH, HTTPS, Kubernetes, MySQL and Postgres bastion/PAM that doesn't need additional client-side software. | Apache-2.0 | Rust, Docker | 7.5k |

## Self-hosting Solutions

| Projeto | O que é | Licença | Plataforma | ⭐ |
|---|---|---|---|---|
| [Axigen](https://www.axigen.com/mail-server/free/) | Turnkey messaging solution for small & micro businesses, integration projects or test environments. | ⊘ Proprietary | Unknown | — |
| [CasaOS](https://casaos.zimaspace.com/) | Simple, easy-to-use, elegant Home Cloud system. | Apache-2.0 | Go, Docker | 37.0k |
| [Cloudron](https://www.cloudron.io/) | Open-core software allowing you to effortlessly self-host web apps on your server. | ⊘ Proprietary | Nodejs, Docker | — |
| [Cosmos](https://cosmos-cloud.io/) | Run server applications securely and with built-in privacy features. It acts as a secure gateway to your application, as well as a server manager. | Apache-2.0, Commons-Clause | Docker, Go | 6.1k |
| [DietPi](https://dietpi.com/) | Minimal Debian OS optimized for single-board computers, which allows you to easily install and manage several services for selfhosting at home. | GPL-2.0 | Shell | 6.2k |
| [DockSTARTer](https://dockstarter.com/) | DockSTARTer helps you get started with home server apps running in Docker. | MIT | Shell | 2.6k |
| [Dropserver](https://dropserver.org) | An application platform for your personal web services. | Apache-2.0 | Go, Deno | 0.1k |
| [Easypanel](https://easypanel.io) | Modern server control panel powered by Docker. | ⊘ Proprietary | Docker | — |
| [FreedomBox](https://freedombox.org/) | Community project to develop, design and promote personal servers running free software for private, personal, communications. | AGPL-3.0 | Python, deb | — |
| [HomelabOS](https://homelabos.com) | Offline privacy-centric data-center. Deploy over 100 services with a few commands. | MIT | Docker | 1.3k |
| [HomeServerHQ](https://www.homeserverhq.com/) | All-in-one home server infrastructure and installer. Have a fully configured email server, VPN, and public website(s) set up in less than an hour, even behind CGNAT. | GPL-3.0 | Shell | 0.1k |
| [LibreServer](https://libreserver.org/) | Home server configuration based on Debian. | AGPL-3.0 | Shell | 0.0k |
| [NextCloudPi](https://github.com/nextcloud/nextcloudpi) | Nextcloud preinstalled and preconfigured, with a text and web management interface and all the tools needed to self host private data. With installation images for Raspberry Pi, Odroid, Rock64, Docker, and a curl installer for Armbian/Debian. | GPL-2.0 | Shell, PHP | 2.9k |
| [Nirvati](https://nirvati.org) | Easily 1-click spin up popular self-hosted apps from a convenient web interface. | AGPL-3.0 | Rust, K8S | — |
| [OpenMediaVault](https://www.openmediavault.org/) | Network attached storage (NAS) solution based on Debian Linux. It contains services like SSH, (S)FTP, SMB/CIFS, DAAP media server, RSync, BitTorrent client and many more. | GPL-3.0 | PHP | 6.9k |
| [Poste.io](https://poste.io) | Full-featured solution for your Email server. Native implementation of last anti-SPAM methods, webmail and easy administration included. Free tier available. | ⊘ Proprietary | Unknown | — |
| [Sandstorm](https://sandstorm.io/) | Personal server for running self-hosted apps easily and securely. | Apache-2.0 | C++, Shell | 7.1k |
| [Self Host Blocks](https://github.com/ibizaman/selfhostblocks) | Modular server management based on NixOS modules and focused on best practices. | AGPL-3.0 | Nix | 0.5k |
| [StartOS](https://start9.com) | Browser-based, graphical Operating System (OS) that makes running a personal server as easy as running a personal computer. | MIT | Rust | 2.0k |
| [Syncloud](https://syncloud.org/) | Your own online file storage, social network or email server. | GPL-3.0 | Go, Shell | 0.4k |
| [Tipi](https://runtipi.io/) | Homeserver manager. One command setup, one click installs for your favorites self-hosted apps. | GPL-3.0 | Shell | 9.6k |
| [UBOS](https://ubos.net/) | Linux distro that runs on indie boxes (personal servers and IoT devices). Single-command installation and management of apps - Jenkins, Mediawiki, Owncloud, WordPress, etc., and other features. | GPL-3.0 | Perl | — |
| [Umbrel](https://umbrel.com/) | A beautiful personal server OS for self-hosting. Install on a Raspberry Pi 4 or Ubuntu/Debian. | ⊘ Proprietary | Nodejs, Docker | 11.7k |
| [Unraid](https://www.unraid.net) | Linux-based operating system designed to run on home media server setups. | ⊘ Proprietary | Unknown | — |
| [Websoft9](https://www.websoft9.com) | GitOps-driven, multi-application hosting for cloud servers and home servers, one-click deployment of 200+ open source apps. | LGPL-3.0 | Shell, Python | 2.1k |
| [WikiSuite](https://wikisuite.org) | The most comprehensive and integrated Free / Libre / Open Source enterprise software suite. | GPL-3.0, LGPL-2.1, Apache-2.0, MPL-2.0, MPL-1.1, MIT, AGPL-3.0 | Shell, Perl, deb | — |
| [xsrv](https://xsrv.readthedocs.io/) | Install and manage self-hosted services/applications, on your own server(s). | GPL-3.0 | Ansible, Shell | 0.4k |
| [YunoHost](https://yunohost.org/) | Server operating system aiming to make self-hosting accessible to everyone. | AGPL-3.0 | Python, Shell | — |

## Web Servers

| Projeto | O que é | Licença | Plataforma | ⭐ |
|---|---|---|---|---|
| [Algernon](https://algernon.roboticoverlords.org/) | Small self-contained pure-Go web server with Lua, Markdown, HTTP/2, QUIC, Redis and PostgreSQL support. | BSD-3-Clause | Go, Docker | 3.0k |
| [Apache HTTP Server](https://httpd.apache.org/) | Secure, efficient and extensible server that provides HTTP services in sync with the current HTTP standards. | Apache-2.0 | C, deb, Docker | — |
| [BunkerWeb](https://www.bunkerweb.io) | Next-gen Web Application Firewall (WAF) that will protect your web services. | AGPL-3.0 | deb, Docker, K8S, Python | 10.8k |
| [Caddy](https://caddyserver.com/) | Powerful, enterprise-ready, open source web server with automatic HTTPS. | Apache-2.0 | Go, deb, Docker | 74.7k |
| [Ferron](https://ferron.sh/) | Fast, memory-safe web server written in Rust. | MIT | Rust, Docker, deb | 2.1k |
| [go-doxy](https://github.com/yusing/godoxy) | Lightweight, simple, and  performant reverse proxy with WebUI, Docker integration, automatic shutdown/startup for container based on traffic. | MIT | Docker, Go | 3.8k |
| [godoxy](https://docs.godoxy.dev/) | High-performance reverse proxy and container orchestrator for self-hosters. | MIT | Docker, Go | — |
| [HAProxy](https://www.haproxy.org/) | Very fast and reliable reverse-proxy offering high availability, load balancing, and proxying for TCP and HTTP-based applications. | GPL-2.0 | C, deb, Docker | — |
| [Lighttpd](https://www.lighttpd.net/) | Secure, fast, compliant, and very flexible web server that has been optimized for high-performance environments. | BSD-3-Clause | C, deb, Docker | — |
| [NGINX](https://nginx.org/en/) | HTTP and reverse proxy server, mail proxy server, and generic TCP/UDP proxy server. | BSD-2-Clause | C, deb, Docker | 31.4k |
| [Nginx Proxy Manager](https://nginxproxymanager.com/) | Docker container for managing Nginx proxy hosts with a simple, powerful interface. | MIT | Docker | 33.8k |
| [Pangolin](https://digpangolin.com/) | Identity-aware tunneled reverse proxy with dashboard UI, access control, and WireGuard-based tunnels (alternative to Cloudflare Tunnel, Tailscale). | AGPL-3.0 | Docker | 22.1k |
| [Pomerium](https://www.pomerium.io) | Identity-aware reverse proxy, successor to now obsolete oauth_proxy. It inserts an OAuth step before proxying your request to the backend, so that you can safely expose your self-hosted websites to public Internet. | Apache-2.0 | Go, Docker | 4.9k |
| [SafeLine](https://waf.chaitin.com/) | Web application firewall / reverse proxy to protect your web apps from attacks and exploits. | GPL-3.0 | Docker | 22.3k |
| [Static Web Server](https://static-web-server.net/) | Cross-platform, high-performance, and asynchronous web server for static file serving. | Apache-2.0, MIT | Rust, Docker | 2.3k |
| [SWAG (Secure Web Application Gateway)](https://github.com/linuxserver/docker-swag) | Nginx webserver and reverse proxy with PHP support, built-in Certbot (Let's Encrypt) client and fail2ban integration. | GPL-3.0 | Docker | 3.7k |
| [Traefik](https://traefik.io/) | HTTP reverse proxy and load balancer that makes deploying microservices easy. | MIT | Go, Docker | 64.3k |
| [UUSEC WAF](https://waf.uusec.com/) | Industry-leading high-performance, AI and semantic technology web application firewall and API security gateway (fork of nginx). | GPL-3.0 | C, Lua, Docker | 1.7k |
| [Vinyl Cache](https://vinyl-cache.org/) | Web application accelerator/caching HTTP reverse proxy (formerly Varnish). | BSD-2-Clause | Go, deb, Docker | — |
| [Zoraxy](https://zoraxy.aroz.org/) | General purpose HTTP reverse proxy and forwarding tool. | AGPL-3.0 | Go, Docker | 5.4k |


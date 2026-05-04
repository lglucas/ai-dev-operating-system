#!/usr/bin/env bash
# detach-os.sh — desconecta seu projeto do repositório AI Dev Operating System
# Este script DEVE ser rodado UMA VEZ logo após clonar/usar o template,
# antes de qualquer commit no seu projeto. Educacional + executável.
set -euo pipefail

YELLOW='\033[1;33m'
GREEN='\033[0;32m'
RED='\033[0;31m'
CYAN='\033[0;36m'
NC='\033[0m'

print_header() {
  echo ""
  echo -e "${CYAN}=========================================================${NC}"
  echo -e "${CYAN}  AI Dev Operating System — Detach OS${NC}"
  echo -e "${CYAN}=========================================================${NC}"
  echo ""
}

print_header

# Safety: warn (not abort) if both marker and OS-origin present
if [ -f ".aios-self" ]; then
  CURRENT_ORIGIN_CHECK=$(git remote get-url origin 2>/dev/null || echo "")
  if [[ "$CURRENT_ORIGIN_CHECK" == *"lglucas/ai-dev-operating-system"* ]]; then
    echo -e "${YELLOW}⚠️  Este diretório parece ser o repositório do AI Dev OS em si${NC}"
    echo -e "${YELLOW}   (marcador .aios-self presente E origin aponta pro repo do OS).${NC}"
    echo ""
    echo -e "${YELLOW}   Se você é mantenedor do OS e clonou pra TRABALHAR nele, cancele agora.${NC}"
    echo -e "${YELLOW}   Se você clonou pra começar um PROJETO NOVO seu, continue.${NC}"
    echo ""
    read -rp "Continuar com o detach? [y/N]: " CONFIRM
    if [[ "$CONFIRM" != "y" && "$CONFIRM" != "Y" ]]; then
      echo "Cancelado."
      exit 0
    fi
  fi
fi

# Step 1 — diagnose
echo -e "${GREEN}1. Diagnóstico do projeto atual${NC}"
echo ""

if [ ! -d ".git" ]; then
  echo -e "${YELLOW}   Você não tem um repositório Git aqui ainda.${NC}"
  echo -e "${YELLOW}   Pule pra etapa 4 (criar do zero).${NC}"
else
  CURRENT_ORIGIN=$(git remote get-url origin 2>/dev/null || echo "(nenhum)")
  echo -e "   Origin atual: ${CURRENT_ORIGIN}"
  echo ""
  if [[ "$CURRENT_ORIGIN" == *"lglucas/ai-dev-operating-system"* ]]; then
    echo -e "${RED}   ⚠️  Seu 'origin' aponta pro repo do AI Dev OS.${NC}"
    echo -e "${RED}      Qualquer 'git push' vai tentar mandar pro repo público do OS.${NC}"
    echo -e "${RED}      Isso é o que estamos prestes a corrigir.${NC}"
  fi
fi

echo ""
echo -e "${GREEN}2. O que é 'origin' (e por que importa)${NC}"
echo ""
echo "   'origin' é o apelido que o Git dá pro repositório remoto. Quando você"
echo "   clonou este projeto, o Git automaticamente apontou origin pro endereço"
echo "   de onde clonou — neste caso, o repo do AI Dev OS."
echo ""
echo "   Se você 'commitar' e tentar 'push', o Git vai tentar enviar suas"
echo "   mudanças pro AI Dev OS — o que vai falhar (você não tem permissão)"
echo "   OU, se você for o dono dos dois, vai poluir o repo do OS com seu"
echo "   projeto. Em qualquer caso: errado."
echo ""
echo "   Solução: ou trocamos o origin pra apontar pro SEU repo novo, ou"
echo "   apagamos o histórico Git e começamos do zero."
echo ""

read -rp "Pressione ENTER para continuar (Ctrl+C cancela)..."

# Step 3 — pick mode
echo ""
echo -e "${GREEN}3. Escolha o modo${NC}"
echo ""
echo "   [1] Re-iniciar Git do zero (recomendado para projetos novos)"
echo "       → Apaga o histórico do AI Dev OS, começa fresco. Limpo."
echo ""
echo "   [2] Trocar origin para o seu repo novo (mantém histórico do OS)"
echo "       → Útil se você quer manter rastro de qual versão do OS você usou."
echo ""
echo "   [3] Cancelar"
echo ""
read -rp "Sua escolha [1/2/3]: " MODE

case "$MODE" in
  1)
    echo ""
    echo -e "${GREEN}4. Re-iniciando Git do zero${NC}"
    if [ -d ".git" ]; then
      rm -rf .git
      echo "   ✓ Histórico antigo removido (.git apagado)."
    fi
    git init -b main
    echo "   ✓ Novo repositório Git inicializado na branch 'main'."
    ;;
  2)
    echo ""
    echo -e "${GREEN}4. Trocando origin${NC}"
    echo ""
    echo "   Cole a URL do SEU repositório novo (você precisa ter criado ele no"
    echo "   GitHub primeiro — veja a etapa 5 abaixo se ainda não criou)."
    echo ""
    echo "   Exemplo: https://github.com/SEU-USUARIO/meu-saas.git"
    echo "   ou:      git@github.com:SEU-USUARIO/meu-saas.git"
    echo ""
    read -rp "URL do seu repo: " NEW_ORIGIN
    if [ -z "$NEW_ORIGIN" ]; then
      echo -e "${RED}   URL vazia. Abortando.${NC}"
      exit 1
    fi
    git remote remove origin 2>/dev/null || true
    git remote add origin "$NEW_ORIGIN"
    echo "   ✓ Origin agora aponta pra: $NEW_ORIGIN"
    ;;
  *)
    echo "   Cancelado. Nenhuma mudança feita."
    exit 0
    ;;
esac

# Step 5 — instruções extras
echo ""
echo -e "${GREEN}5. Próximos passos${NC}"
echo ""
echo "   a. Se você AINDA NÃO criou seu repo no GitHub:"
echo "      → Vá em: https://github.com/new"
echo "      → Recomendado: marque 'Private' (você pode tornar público depois)."
echo "      → NÃO marque 'Add a README' nem '.gitignore' — você já tem."
echo ""
echo "   b. Confira que seu .env NUNCA vai pro repo:"
echo "      → Confirme que '.env' está em .gitignore (deveria estar)."
echo "      → Use .env.example pra documentar variáveis SEM os valores reais."
echo ""
echo "   c. Primeiro commit:"
echo "      git add ."
echo "      git commit -m \"chore: project genesis from AI Dev OS template\""
echo "      git push -u origin main"
echo ""
echo "   d. Se 'git push' pedir login: gere um Personal Access Token em"
echo "      https://github.com/settings/tokens (escopo 'repo')."
echo ""
# Cleanup: remove .aios-self marker (this project is no longer the OS)
if [ -f ".aios-self" ]; then
  rm -f .aios-self
  echo "   ✓ Marcador .aios-self removido (este projeto não é mais o AI Dev OS)."
  echo ""
fi

echo -e "${GREEN}✓ Detach concluído. Bom projeto!${NC}"
echo ""

# detach-os.ps1 — desconecta seu projeto do repositório AI Dev Operating System
# Este script DEVE ser rodado UMA VEZ logo após clonar/usar o template,
# antes de qualquer commit no seu projeto. Educacional + executável.
$ErrorActionPreference = "Stop"

function Write-Header {
    Write-Host ""
    Write-Host "=========================================================" -ForegroundColor Cyan
    Write-Host "  AI Dev Operating System — Detach OS" -ForegroundColor Cyan
    Write-Host "=========================================================" -ForegroundColor Cyan
    Write-Host ""
}

Write-Header

# Safety: warn (not abort) if both marker and OS-origin present
if (Test-Path ".aios-self") {
    try {
        $OriginCheck = git remote get-url origin 2>$null
    } catch {
        $OriginCheck = ""
    }
    if ($OriginCheck -like "*lglucas/ai-dev-operating-system*") {
        Write-Host "AVISO: Este diretorio parece ser o repositorio do AI Dev OS em si" -ForegroundColor Yellow
        Write-Host "   (marcador .aios-self presente E origin aponta pro repo do OS)." -ForegroundColor Yellow
        Write-Host ""
        Write-Host "   Se voce e mantenedor do OS e clonou pra TRABALHAR nele, cancele agora." -ForegroundColor Yellow
        Write-Host "   Se voce clonou pra comecar um PROJETO NOVO seu, continue." -ForegroundColor Yellow
        Write-Host ""
        $Confirm = Read-Host "Continuar com o detach? [y/N]"
        if ($Confirm -ne "y" -and $Confirm -ne "Y") {
            Write-Host "Cancelado."
            exit 0
        }
    }
}

# Step 1 — diagnose
Write-Host "1. Diagnostico do projeto atual" -ForegroundColor Green
Write-Host ""

$HasGit = Test-Path ".git"

if (-not $HasGit) {
    Write-Host "   Voce nao tem um repositorio Git aqui ainda." -ForegroundColor Yellow
    Write-Host "   Pule pra etapa 4 (criar do zero)." -ForegroundColor Yellow
} else {
    try {
        $CurrentOrigin = git remote get-url origin 2>$null
    } catch {
        $CurrentOrigin = "(nenhum)"
    }
    if (-not $CurrentOrigin) { $CurrentOrigin = "(nenhum)" }
    Write-Host "   Origin atual: $CurrentOrigin"
    Write-Host ""
    if ($CurrentOrigin -like "*lglucas/ai-dev-operating-system*") {
        Write-Host "   AVISO: Seu 'origin' aponta pro repo do AI Dev OS." -ForegroundColor Red
        Write-Host "      Qualquer 'git push' vai tentar mandar pro repo publico do OS." -ForegroundColor Red
        Write-Host "      Isso e o que estamos prestes a corrigir." -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "2. O que e 'origin' (e por que importa)" -ForegroundColor Green
Write-Host ""
Write-Host "   'origin' e o apelido que o Git da pro repositorio remoto. Quando voce"
Write-Host "   clonou este projeto, o Git automaticamente apontou origin pro endereco"
Write-Host "   de onde clonou — neste caso, o repo do AI Dev OS."
Write-Host ""
Write-Host "   Se voce 'commitar' e tentar 'push', o Git vai tentar enviar suas"
Write-Host "   mudancas pro AI Dev OS — o que vai falhar (voce nao tem permissao)"
Write-Host "   OU, se voce for o dono dos dois, vai poluir o repo do OS com seu"
Write-Host "   projeto. Em qualquer caso: errado."
Write-Host ""
Write-Host "   Solucao: ou trocamos o origin pra apontar pro SEU repo novo, ou"
Write-Host "   apagamos o historico Git e comecamos do zero."
Write-Host ""

Read-Host "Pressione ENTER para continuar (Ctrl+C cancela)"

# Step 3 — pick mode
Write-Host ""
Write-Host "3. Escolha o modo" -ForegroundColor Green
Write-Host ""
Write-Host "   [1] Re-iniciar Git do zero (recomendado para projetos novos)"
Write-Host "       -> Apaga o historico do AI Dev OS, comeca fresco. Limpo."
Write-Host ""
Write-Host "   [2] Trocar origin para o seu repo novo (mantem historico do OS)"
Write-Host "       -> Util se voce quer manter rastro de qual versao do OS voce usou."
Write-Host ""
Write-Host "   [3] Cancelar"
Write-Host ""
$Mode = Read-Host "Sua escolha [1/2/3]"

switch ($Mode) {
    "1" {
        Write-Host ""
        Write-Host "4. Re-iniciando Git do zero" -ForegroundColor Green
        if (Test-Path ".git") {
            Remove-Item -Recurse -Force ".git"
            Write-Host "   OK: Historico antigo removido (.git apagado)."
        }
        git init -b main | Out-Null
        Write-Host "   OK: Novo repositorio Git inicializado na branch 'main'."
    }
    "2" {
        Write-Host ""
        Write-Host "4. Trocando origin" -ForegroundColor Green
        Write-Host ""
        Write-Host "   Cole a URL do SEU repositorio novo (voce precisa ter criado ele no"
        Write-Host "   GitHub primeiro — veja a etapa 5 abaixo se ainda nao criou)."
        Write-Host ""
        Write-Host "   Exemplo: https://github.com/SEU-USUARIO/meu-saas.git"
        Write-Host "   ou:      git@github.com:SEU-USUARIO/meu-saas.git"
        Write-Host ""
        $NewOrigin = Read-Host "URL do seu repo"
        if ([string]::IsNullOrWhiteSpace($NewOrigin)) {
            Write-Host "   URL vazia. Abortando." -ForegroundColor Red
            exit 1
        }
        git remote remove origin 2>$null
        git remote add origin $NewOrigin
        Write-Host "   OK: Origin agora aponta pra: $NewOrigin"
    }
    default {
        Write-Host "   Cancelado. Nenhuma mudanca feita."
        exit 0
    }
}

# Step 5 — instrucoes extras
Write-Host ""
Write-Host "5. Proximos passos" -ForegroundColor Green
Write-Host ""
Write-Host "   a. Se voce AINDA NAO criou seu repo no GitHub:"
Write-Host "      -> Va em: https://github.com/new"
Write-Host "      -> Recomendado: marque 'Private' (voce pode tornar publico depois)."
Write-Host "      -> NAO marque 'Add a README' nem '.gitignore' — voce ja tem."
Write-Host ""
Write-Host "   b. Confira que seu .env NUNCA vai pro repo:"
Write-Host "      -> Confirme que '.env' esta em .gitignore (deveria estar)."
Write-Host "      -> Use .env.example pra documentar variaveis SEM os valores reais."
Write-Host ""
Write-Host "   c. Primeiro commit:"
Write-Host "      git add ."
Write-Host '      git commit -m "chore: project genesis from AI Dev OS template"'
Write-Host "      git push -u origin main"
Write-Host ""
Write-Host "   d. Se 'git push' pedir login: gere um Personal Access Token em"
Write-Host "      https://github.com/settings/tokens (escopo 'repo')."
Write-Host ""
# Cleanup: remove .aios-self marker (this project is no longer the OS)
if (Test-Path ".aios-self") {
    Remove-Item -Force ".aios-self"
    Write-Host "   OK: Marcador .aios-self removido (este projeto nao e mais o AI Dev OS)."
    Write-Host ""
}

Write-Host "OK: Detach concluido. Bom projeto!" -ForegroundColor Green
Write-Host ""

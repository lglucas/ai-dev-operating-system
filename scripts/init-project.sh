#!/usr/bin/env bash
set -euo pipefail

TARGET="${1:-.}"
mkdir -p "$TARGET/.claude/rules" "$TARGET/.claude/agents" "$TARGET/.claude/skills" "$TARGET/.claude/commands" "$TARGET/docs/sprints" "$TARGET/session-log"
cp templates/project/CLAUDE.md "$TARGET/CLAUDE.md"
cp -R rules/* "$TARGET/.claude/rules/"
cp -R agents/* "$TARGET/.claude/agents/"
cp -R skills/* "$TARGET/.claude/skills/"
cp -R commands/* "$TARGET/.claude/commands/"
cp templates/sprints/changelog-entry-template.md "$TARGET/CHANGELOG.md"
cp templates/session-log/session-log-template.md "$TARGET/session-log/README-template.md"
echo "Initialized AI Dev Operating System files in $TARGET"

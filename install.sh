#!/usr/bin/env bash
set -e

# ==============================================================================
# AI Optimizer Desktop Companion Installer for macOS
# Repository: https://github.com/airshell/ai-optimizer
# ==============================================================================

echo ""
echo "  ▲  AI OPTIMIZER"
echo "     Autonomous Token, Cost & Efficiency Engine for Coding Agents"
echo ""

OS="$(uname -s | tr '[:upper:]' '[:lower:]')"
ARCH="$(uname -m)"

if [ "$OS" != "darwin" ]; then
  echo "❌ AI Optimizer MenuBar app currently supports macOS (Apple Silicon & Intel)."
  echo "   Headless server and cross-platform CLI releases for Linux & Windows are coming soon."
  exit 1
fi

RELEASE_URL="https://github.com/airshell/ai-optimizer/releases/latest/download/AI-Optimizer-macOS.dmg"
TMP_DMG="/tmp/AI-Optimizer-macOS.dmg"

echo "==> Downloading latest AI Optimizer release disk image..."
curl -fsSL -o "$TMP_DMG" "$RELEASE_URL"

echo "==> Attaching disk image..."
hdiutil attach "$TMP_DMG" -nobrowse -quiet

echo "==> Installing AiOptimizer.app to /Applications..."
rm -rf "/Applications/AiOptimizer.app"
cp -R "/Volumes/AI Optimizer/AiOptimizer.app" /Applications/

echo "==> Detaching disk image..."
hdiutil detach "/Volumes/AI Optimizer" -quiet
rm -f "$TMP_DMG"

echo "==> Clearing macOS Gatekeeper quarantine attribute..."
xattr -cr "/Applications/AiOptimizer.app" 2>/dev/null || true

echo ""
echo "✅ AI Optimizer successfully installed to /Applications!"
echo "👉 Launch it from Applications or run: open /Applications/AiOptimizer.app"
echo ""

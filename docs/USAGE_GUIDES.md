# User & Developer Usage Guides

Comprehensive operational guides for the macOS Menu Bar App, CLI executable, and companion optimization skills.

---

## 1. Installation Methods

### Option 1: Homebrew Cask (Recommended)
Install in one terminal command:
```bash
brew install --cask airshell/tap/ai-optimizer
```
To update whenever new versions are published:
```bash
brew upgrade --cask ai-optimizer
```

### Option 2: 1-Line Terminal Script
```bash
curl -fsSL https://raw.githubusercontent.com/airshell/ai-optimizer/main/install.sh | bash
```

### Option 3: Manual DMG Installation
1. Download `AI-Optimizer-macOS.dmg` from [GitHub Releases](https://github.com/airshell/ai-optimizer/releases/latest).
2. Open the disk image and drag `AiOptimizer.app` into `/Applications`.
3. Launch from Applications or Spotlight.

---

## 2. Using the macOS Menu Bar App

1. **Menu Bar Status:** Click the leaf icon in your macOS status bar to open the live popover.
2. **Switching Intensity:** Toggle between `lite`, `full`, and `ultra` with one click:
   - **`lite`:** Reduces conversational filler and pleasantries while keeping code structures standard (~20%–30% token reduction).
   - **`full` (Default):** Enforces strict YAGNI, standard library first, surgical diffs, and prompt-cache friendly turns (~35%–50% reduction).
   - **`ultra`:** Maximum density: single-line explanations, pure code diffs, zero speculative abstractions (~50%–65%+ reduction).
3. **Agent Toggles:** Enable or disable optimization per tool dynamically.
4. **Time Period:** Switch between `Today`, `This month`, and `All time` to inspect token velocity and dollar savings.

---

## 3. CLI Command Reference (`ai-opt`)

The CLI command is available globally on your PATH:

```bash
# Today's token usage, costs, and carbon metrics broken down by model
ai-opt --today

# Day-by-day historical usage table for the last 30 days
ai-opt --daily

# Inspect RTK Proxy and context compression savings
ai-opt --savings

# Filter metrics for a specific agent
ai-opt --client antigravity
ai-opt --client codex
ai-opt --client antigravity,codex

# Output machine-readable JSON for scripting or CI pipelines
ai-opt --today --json

# Launch the standalone web dashboard and HTTP JSON server
ai-opt --serve
```

---

## 4. Activating the 11 Bundled Agent Skills

All 11 agent skills are located in `skills/` and can be installed into any agent:

### 4.1 Installing for Google Antigravity IDE / CLI
```bash
mkdir -p ~/.gemini/config/skills
cp -R skills/* ~/.gemini/config/skills/
```

### 4.2 Installing for Claude Code
```bash
mkdir -p ~/.claude/skills
cp -R skills/* ~/.claude/skills/
```

### 4.3 Installing for Cursor / Windsurf / Codex
Add a rule to your workspace root (`.cursorrules` or `AGENTS.md`):
```markdown
# AI Optimizer Rules
Adopt the AI Optimizer full tier: enforce YAGNI architecture, surgical diffs, stdlib-first solutions, and prompt-cache friendly turn handoffs.
```

### Skill Catalog Summary:
- **`ai-optimizer`**: Core token, diff, and prompt-cache optimization engine.
- **`opt-review`**: Pre-flight diff auditor that identifies redundant code, single-caller bloat, and unused abstractions.
- **`opt-compress`**: Instruction and rules compactor that cuts prompt token overhead.
- **`opt-loop`**: Loop and cron pacing control preventing rapid budget exhaustion.
- **`opt-design`**: Clean HTML/CSS design system guidelines using modern vanilla tokens.
- **`opt-memory`**: Architecture intent cache preventing cold-start rediscovery turns.
- **`opt-debt`**: YAGNI shortcut ledger tracking deferred abstractions.
- **`context-budget`**: Workspace context window auditor.
- **`token-budget-advisor`**: Upfront response complexity classifier.
- **`prompt-optimizer`**: Surgical prompt rewriting for 90%+ prompt cache hit rates.
- **`regex-vs-llm`**: Deterministic text extraction avoiding unnecessary LLM calls.

# Features & System Architecture

**AI Optimizer** is built on a high-performance, privacy-first architecture designed to audit token consumption, calculate cost metrics, and enforce lean coding practices across AI coding assistants without ever transmitting data externally.

---

## 1. System Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                    macOS Menu Bar Companion                 │
│  - Native Mach-O arm64 Cocoa binary (AiOptimizer.app)       │
│  - Native status bar icon with live intensity badge         │
│  - Embedded webview popover (Obsidian Dark Theme)           │
│  - Automatic Launch-at-Login support                        │
└──────────────────────────────▲──────────────────────────────┘
                               │ IPC / HTTP (port 4567)
┌──────────────────────────────▼──────────────────────────────┐
│                  Local Optimization Engine                  │
│  - Bundled mach-o binary: ai-opt-engine                     │
│  - Native Node.js HTTP server (zero external runtimes)      │
│  - In-memory aggregation cache (8s TTL, <2ms response)      │
│  - Dynamic Endpoints:                                       │
│    * GET  /api/usage?period=today|month|all                 │
│    * GET  /api/agents (live filesystem discovery)           │
│    * GET  /api/settings & POST /api/settings (deep merge)   │
│    * POST /api/choose-folder & POST /api/set-folder        │
│    * POST /api/sync-rules                                   │
└──────────────────────────────▲──────────────────────────────┘
                               │
┌──────────────────────────────▼──────────────────────────────┐
│                    Core Adapters & Parsers                  │
│  - Google Antigravity: ~/.gemini/antigravity/brain          │
│  - OpenAI Codex:       ~/.codex/sessions                    │
│  - Anthropic Claude:   ~/.claude/projects                   │
│  - RTK Proxy:          PATH discovery & stdout parser       │
│  - Ponytail:           ~/.gemini/config/plugins             │
│  - Official Pricing:   Official token & cache rate card     │
│  - Carbon Accounting:  EcoLogits model energy calculation   │
└─────────────────────────────────────────────────────────────┘
```

---

## 2. Core Features Implemented

### 2.1 Native macOS Menu Bar App (`AiOptimizer.app`)
- **Status Bar Integration:** Displays current optimization level (`lite`, `full`, `ultra`) and token throughput directly in the macOS menu bar.
- **Embedded Engine Management:** Automatically launches and monitors the background local engine process (`ai-opt-engine`), restarting it if killed.
- **Obsidian Dark Popover:** Sleek, high-performance web popover displaying the live dashboard at `localhost:4567`.
- **Zero-Dependency Mach-O arm64 Binary:** Packaged with zero external dependencies, making installation as simple as dragging to `/Applications`.

### 2.2 Truth-First Token Accounting & Deduplication
- **Deduplication Priority:** Parses agent session transcripts by prioritizing canonical summary events (e.g. `token_usage_record` in OpenAI Codex) over intermediate turn events (`event_msg` with `last_token_usage`) to avoid artificial double-counting of prompt tokens.
- **Resilient Fallback:** Automatically falls back to turn-by-turn accumulators only when canonical summary records are absent.
- **Cache-Aware Economics:** Strictly tracks `input`, `output`, and `cacheRead` tokens separately. Cached prompt tokens are billed at fractional provider rates (e.g. 10% to 25% of standard prompt cost).

### 2.3 Environmental Impact Modeling (EcoLogits Port)
- Estimates real-time carbon footprint (kg CO₂e) and energy consumption (kWh) based on the official EcoLogits methodology.
- Factors in regional grid emissions, server-grade hardware wattages, and per-token model parameters.

### 2.4 Official Homebrew Cask Tap (`airshell/homebrew-tap`)
- Automated installation and update service via Homebrew:
  - `brew install --cask airshell/tap/ai-optimizer`
  - `brew upgrade --cask ai-optimizer`
- Continuous integration with automated syntax and style checking via `brew test-bot`.

---

## 3. Supported Agents

| Agent / Tool | Log Source Path | Parsing Mechanism |
| :--- | :--- | :--- |
| **Google Antigravity (`agy`)** | `~/.gemini/antigravity/brain` | JSON transcript analyzer with model detection |
| **OpenAI Codex** | `~/.codex/sessions` | Rollout parser with canonical deduplication |
| **Anthropic Claude Code** | `~/.claude/projects` | JSON project session analyzer |
| **RTK Proxy** | `PATH` / `rtk gain` | Bash stdout compression extractor |
| **Ponytail** | `~/.gemini/config/plugins` | Rule and benchmark efficiency parser |
| **OpenCode, Cursor, Windsurf, Cline** | Local workspace logs | Workspace transcript and rules auditor |

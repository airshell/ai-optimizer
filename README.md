<div align="center">
  <img src="assets/logo-icon.png" width="96" height="96" alt="AI Optimizer Brand Icon" />
  <h1>AI Optimizer</h1>
  <p><strong>Less Tokens. Lower Costs. Better Code.</strong></p>

  <p>
    <a href="https://github.com/airshell/ai-optimizer/releases/latest"><img src="https://img.shields.io/badge/Release-v1.0.0-00ed64?style=flat-square" alt="Release" /></a>
    <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT%20%26%20BSL--1.1-blue?style=flat-square" alt="License: MIT & BSL-1.1" /></a>
    <img src="https://img.shields.io/badge/Platform-macOS%20MenuBar%20%7C%20CLI-black?style=flat-square" alt="Platform" />
    <img src="https://img.shields.io/badge/Telemetry-100%25%20Zero--Mock-orange?style=flat-square" alt="Zero-Mock" />
  </p>
</div>

---

## Overview

**AI Optimizer** is a cross-platform auditing and optimization tool for AI coding agents that helps developers track token usage, analyze costs, measure real savings, and improve code quality.

By combining real-time token and cost auditing with software engineering best practices (strict YAGNI, surgical diffs, stdlib-first solutions, and prompt-cache maximization), AI Optimizer helps coding agents generate cleaner, more maintainable, and more efficient code while slashing token waste and LLM API costs by **30% to 53%**.

> *Optimize your AI workflows. Reduce unnecessary token consumption. Cut costs. Write better code.*

---

## 🎯 The Goal

AI Optimizer aims to make AI-assisted software development not just more powerful, but also more **economical, private, and engineering-focused** — helping developers get better results from their AI coding assistants without wasting tokens or compromising code quality.

---

## ✨ Key Features

- **📊 Token Usage Auditing** — Track and analyze real token consumption (input, output, and cache reads) across supported AI coding agents.
- **💰 Real-Time Cost Analysis** — Understand AI usage costs per model and identify opportunities to reduce spending.
- **⚡ Savings Insights** — Discover and verify token and cost savings achieved through context compression, prompt caching, and surgical diffs.
- **🛠️ Code Quality Optimization** — Encourage cleaner, more maintainable code using established software development best practices (stdlib-first, modular design, zero speculative abstractions).
- **📝 Token-Efficient Code Generation** — Cut conversational filler, duplication, and inefficient implementation patterns so coding agents achieve more with fewer tokens.
- **🖥️ Native macOS Menu Bar Companion** — Ultra-lightweight status bar telemetry displaying live intensity (`lite`, `full`, `ultra`), active agent status, and token velocity in a sleek Obsidian dark popover dashboard.
- **🛡️ Truth-First Deduplication** — Canonical summary event parsing (`token_usage_record`) with turn-by-turn fallback prevents artificial double-counting of prompt tokens.
- **🔒 100% Local & Private** — Runs entirely offline on your local machine. No external telemetry, no remote analytics, zero data leakage.

---

## 💻 1-Click Desktop Installation

### Option 1: Quick Install via Terminal (Recommended)

Run the following command to automatically download, install, and clear macOS Gatekeeper quarantine for the native Menu Bar app:

```bash
curl -fsSL https://raw.githubusercontent.com/airshell/ai-optimizer/main/install.sh | bash
```

### Option 2: Direct Download

Download the disk image directly from our GitHub Releases:

👉 **[Download AI Optimizer for macOS (.dmg)](https://github.com/airshell/ai-optimizer/releases/latest/download/AI-Optimizer-macOS.dmg)**

*Drag `AiOptimizer.app` to your `/Applications` folder, then launch it from Spotlight.*

> **macOS Note:** If opening an ad-hoc signed release, run `xattr -cr /Applications/AiOptimizer.app` to clear the Gatekeeper quarantine attribute.

---

## 🤖 Supported Agents & Unified Multi-Agent Accounting

AI Optimizer provides native, zero-mock filesystem and transcript parsers for:

- **Google Antigravity (`agy` & Antigravity IDE)**
- **OpenAI Codex** (CLI & IDE extension)
- **Anthropic Claude Code**
- **RTK Proxy & Ponytail**
- **OpenCode, Gemini CLI, Cursor, Windsurf & Cline**

---

## 🧠 How to Use the Open-Source Agent Skills

The open-source optimization skill is located at [`skills/ai-optimizer/SKILL.md`](skills/ai-optimizer/SKILL.md). It provides autonomous instructions that instruct coding assistants to produce minimal, high-leverage code and maximize prompt caching.

### 1. Install for Google Antigravity IDE / CLI
Symlink or copy the skill into your local agent skills directory:
```bash
mkdir -p ~/.gemini/config/skills
cp -R skills/ai-optimizer ~/.gemini/config/skills/
```

### 2. Install for Claude Code
```bash
mkdir -p ~/.claude/skills
cp -R skills/ai-optimizer ~/.claude/skills/
```

### 3. Install for Cursor / Windsurf / Codex
Add a reference to [`skills/ai-optimizer/SKILL.md`](skills/ai-optimizer/SKILL.md) in your workspace rules (`.cursorrules` or `AGENTS.md`):
```markdown
# AI Optimizer Rule
Adopt the AI Optimizer full tier: enforce YAGNI architecture, surgical diffs, stdlib-first solutions, and prompt-cache friendly turn handoffs.
```

### Optimization Intensity Tiers

| Level | Token Reduction | Behavior |
| :--- | :--- | :--- |
| **`lite`** | ~20% – 30% | Cuts conversational filler, pleasantries, and unsolicited summaries while keeping standard code structures. |
| **`full` (Default)** | ~35% – 50% | Strict YAGNI, standard library first, surgical non-contiguous diffs, and compressed agent-to-agent context handoffs. |
| **`ultra`** | ~50% – 65%+ | Maximum token compression: one-line explanations, pure code diffs, zero speculative abstractions, minimal AST expansion. |

---

## 🚀 Coming Soon: AI Optimizer Enterprise (Server CLI)

We are launching the **AI Optimizer Enterprise Server Edition**, tailored for engineering organizations and cloud infrastructure:

- **CI/CD Token Quotas**: Block runaway agent loops in automated pull request review pipelines.
- **Headless Server Telemetry**: Deploy as a daemon in dev containers, ephemeral cloud environments, and Kubernetes developer pods.
- **Fleet-Wide Cost Auditing**: Aggregate agent spend across engineering teams with centralized budgeting and rate-card alerts.
- **Enterprise SLA & Support**: Custom model adapters, private pricing overrides, and compliance integration.

---

## 📜 Licensing & Terms of Use

This repository uses a **Mixed Licensing Model** ([LICENSE](LICENSE)):

### 1. Open Source Components (MIT License)
- The agent skill definitions (`skills/`) and installer scripts (`install.sh`) are licensed under the **[MIT License](LICENSE)**.
- Free to use, adapt, and integrate into any personal or open-source workflow.

### 2. Application & Telemetry Engine (Business Source License 1.1)
- The **AI Optimizer Application**, binary packages, desktop companions, and telemetry engine are licensed under the **[Business Source License 1.1 (BSL-1.1)](LICENSE)** (converting to GNU AGPLv3 after 4 years).
- **Personal Use:** Free for personal, non-commercial use, provided you do not use it to build, distribute, or operate a competing product or commercial hosted service.
- **Commercial & Enterprise Use:** Any commercial use by enterprises, companies, or organizations (including deployment across employee developer fleets or server-side CI/CD runners) requires a commercial license agreement from Licensor.

For enterprise licensing arrangements, custom use grants, or cloud integrations:  
📧 Contact: **enterprise@airshell.dev** or visit **[github.com/airshell](https://github.com/airshell)**.

---

Developed with precision by **[Airshell](https://github.com/airshell)**.

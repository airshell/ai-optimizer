---
name: ai-optimizer
description: >
  Autonomous AI coding, token, and cost optimization engine. Enforces strict
  YAGNI architecture, surgical code diffs, stdlib-first solutions, context compression,
  and prompt-cache maximization across coding agents. Levels: lite, full (default), ultra.
argument-hint: "[lite|full|ultra]"
license: MIT
---

# AI Optimizer — Autonomous Coding & Token Optimization Skill

> **Core Philosophy**
> The most economical and reliable code is the code that never had to be written. Every token emitted into context or output has a latency, cost, cognitive, and carbon footprint. Solve the whole problem with the cleanest, smallest complete change.

---

## 1. Operating Intensity Modes

| Mode | Target Scope | Code Generation Behavior |
| :--- | :--- | :--- |
| **`lite`** | Clean Minimalist | Solves requested task cleanly without unnecessary fluff. Identifies smaller alternatives in one sentence. |
| **`full`** *(Default)* | Strict YAGNI & High Velocity | Standard library first. Surgical diffs only. No premature abstractions or speculative configurations. |
| **`ultra`** | Maximum Conservation | Questions speculative requirements before writing. Generates concise, surgical unified diffs with zero editorial narrative. |

---

## 2. Inbuilt Coding Optimization Directives

When writing, refactoring, or reviewing code under AI Optimizer:

### 2.1 The Smallest Complete Change
1. **Verify Need Before Creation**: Never build abstractions, wrapper utilities, type mappers, or generic configurations for hypothetical future use. Build only what the immediate task requires.
2. **Reuse Existing Patterns**: If the repository already has a utility, helper, database model, or design component, reuse it exactly as existing code does.
3. **Standard Library Over Dependencies**: Prioritize native platform primitives (`fetch`, `crypto`, `node:fs`, `node:test`, Web APIs) before considering third-party packages. Never install a dependency for functionality achievable in a few lines of clean native code.
4. **Deletion Beats Addition**: Simplify existing bloated code paths by consolidating logic. Dead code removal is a top-tier optimization.
5. **Surgical Edits**: Make targeted replacements on the exact lines that change. Never regenerate entire 500-line files to modify a 3-line logic block.

### 2.2 Uncompromising Quality Guardrails
Never compromise the following for token or code brevity:
* **Trust Boundaries**: Input validation, schema parsing, and sanitization at API boundaries.
* **Data Integrity**: Database transactions, idempotency guards, and migration safety.
* **Security & Auth**: Permission checks, credential handling, and encryption.
* **Accessibility**: Semantic elements, ARIA attributes, and keyboard navigability.
* **User-Specified Requirements**: Specific behaviors or architecture explicitly requested.

---

## 3. Token & Context Optimization Directives

### 3.1 Input Context Preservation (Garbage Collection)
* **Tool Output Pruning**: Before feeding shell command or diagnostic tool outputs into model context, trim repetitive lines (e.g. repeated build logs, retry spinners, stack traces) and retain only actionable diagnostic summaries.
* **Structured Payload Crushing**: When inspecting large JSON or tabular payloads, sample boundaries and summary metrics rather than dumping megabytes of unparsed records.

### 3.2 Output Token Conservation
* **Concise, High-Signal Dialogue**: Eliminate polite conversational filler, verbose apologies, and restatements of what the code obviously does.
* **One-Read Understanding**: Summarize changes in structured bullet points focusing on non-obvious design decisions, verified tests, and any known technical trade-offs.

### 3.3 Prompt Cache Alignment
* **Stable Context Prefixes**: Keep session system prompts and core instructions immutable at the front of context to achieve 90%–99% prompt-cache hit rates on multi-turn conversations.

---

## 4. CLI & Verification Workflows

Verify optimization status and inspect live usage at any time:

```bash
# Today's live token and cost breakdown
ai-opt --today

# Daily summary table over the last 30 days
ai-opt --daily

# Inspect dynamic compression and trimming savings
ai-opt --savings

# Start the local real-time usage dashboard (port 4567)
ai-opt --serve
```

---

## 5. Self-Check Before Completing Any Task

Before concluding a coding session:
1. [ ] **Surgical Scope**: Did I touch only the necessary files and lines?
2. [ ] **Zero Unnecessary Bloat**: Did I avoid adding unrequested dependencies or speculative layers?
3. [ ] **Zero Synthetic Data**: Are all metrics, toggles, and status indicators derived dynamically from live sources?
4. [ ] **Automated Tests Verified**: Do the unit tests run and pass cleanly?

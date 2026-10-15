---
name: opt-loop
description: >-
  Enforces cost discipline and cache-aware pacing for autonomous agent loops
  and recurring cron tasks. Prevents runaway token consumption through
  prompt-cache alignment, short-circuit checks, and hard exit stops.
license: MIT
metadata:
  origin: AI Optimizer
  maintainer: Airshell (https://github.com/airshell)
---

# Autonomous Loop & Cron Budget Control (`opt-loop`)

In recurring agent tasks and autonomous execution loops, token costs compound multiplicatively (`cost = per_turn × iterations`). This skill enforces strict budget guardrails to prevent token waste and runaway background spending.

## When to Use

- When configuring scheduled cron tasks or recurring loop instructions
- When running long-lived background monitoring agents
- To prevent prompt-cache misses during automated tasks

## The 5 Cost Guardrails

### 1. Pace to the Prompt Cache (Banish the Dead Zone)
Modern LLM prompt caches typically have a 5-minute (300-second) TTL.
- **Active polling**: Run `< 270s` to ensure the prompt cache stays warm (saving up to 80% on input tokens).
- **Idle intervals**: Step up to `≥ 1200s` so the cost of a cache miss is amortized over a long idle period.
- **Never schedule near ~300s**: The 290s–330s window is the worst possible choice — it incurs the full cost of a cache miss without amortizing the wait.

### 2. Short-Circuit When Nothing Changed
Re-generating responses on empty runs is the single largest source of recurring loop waste:
- Check a lightweight timestamp, file mtime, git hash (`git rev-parse HEAD`), or status flag first.
- If there is no new work, emit a single status line (`tick N: no changes`) and reschedule without re-analyzing the workspace.

### 3. Event-Driven Triggers Over Active Polling
- Leverage asynchronous notifications and process exit events whenever available rather than polling in tight loops.
- Fall back to slow heartbeats (`1200s+`) for monitoring external services.

### 4. Carry a Compact State Handle
- Store progress in a lightweight JSON state file (`.optimizer/state.json`).
- Read only the state file each tick — never re-discover the entire project history from scratch.

### 5. Define a Clear Exit Condition
- Every loop must have an explicit stop condition: goal reached, maximum iterations hit, or a deadline.
- Unbounded loops are strictly prohibited.

## Output Discipline
During recurring ticks where no human intervention is needed, emit minimal one-line status updates. Save full reports exclusively for when meaningful changes or errors occur.

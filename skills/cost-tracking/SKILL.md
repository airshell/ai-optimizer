---
name: cost-tracking
description: >-
  Tracks and analyzes AI coding assistant token usage, model spending, and
  session costs from local logs without remote dependencies.
metadata:
  origin: AI Optimizer
  license: MIT
---

# Local Cost Tracking & Model Accounting

Analyze AI coding assistant token usage history, session spending, and per-model costs from your machine local logs.

## When to Use

- "How much have I spent on AI coding sessions today?"
- "What did this session cost in tokens and dollars?"
- "Show me a cost breakdown by model across recent sessions"
- Budgeting, usage audits, or verifying savings

## Where the Data Lives

AI Optimizer reads local session transcripts and logs directly from your machine:
- Google Antigravity transcripts: `~/.gemini/antigravity/`
- OpenAI Codex sessions: `~/.codex/sessions/`
- Claude Code session logs: `~/.claude/metrics/costs.jsonl` or session transcripts

All data is parsed locally with zero network queries and zero external transmission.

## Instant CLI Reporting

Use the built-in AI Optimizer CLI for instant summaries:

```bash
# Today token and dollar spend breakdown by model
ai-opt --today

# Daily breakdown table across the last 30 days
ai-opt --daily

# Inspect RTK Proxy terminal compression and Ponytail savings
ai-opt --savings

# Start the local dashboard
ai-opt --serve
```

## Local Log Parsing Pattern (Node.js)

```javascript
import fs from "node:fs";
import path from "node:path";
import os from "node:os";

// Read local session metric records
const logPath = path.join(os.homedir(), ".claude", "metrics", "costs.jsonl");
if (fs.existsSync(logPath)) {
  const lines = fs.readFileSync(logPath, "utf8").trim().split("\n");
  const sessions = new Map();
  for (const line of lines) {
    try {
      const rec = JSON.parse(line);
      sessions.set(rec.session_id || rec.timestamp, rec);
    } catch {}
  }
  const totalUSD = [...sessions.values()].reduce((sum, s) => sum + (Number(s.estimated_cost_usd) || 0), 0);
  console.log(`Total spend across ${sessions.size} sessions: $${totalUSD.toFixed(2)}`);
}
```

## Anti-Patterns

- **Never double-count**: Session records are often cumulative snapshots; always take the latest snapshot per session identifier.
- **Differentiate prompt cache reads**: Cache read tokens are priced at ~10% of standard input token rates. Never bill cache reads at full prompt rates.
- **Zero remote telemetry**: Never send local session tokens or costs to external analytics beacons.

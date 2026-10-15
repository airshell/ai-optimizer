---
name: opt-debt
description: >-
  Scans the codebase for deliberate YAGNI shortcut markers (shortcut:, opt:)
  and compiles an actionable technical debt ledger with revisit triggers.
license: MIT
metadata:
  origin: AI Optimizer
  maintainer: Airshell (https://github.com/airshell)
---

# YAGNI Shortcut Ledger (`opt-debt`)

When developers and AI coding agents follow strict YAGNI principles, they write the minimum code required for the current task and defer speculative complexity. `opt-debt` compiles these intentional shortcuts into an actionable, tracked ledger so pragmatic simplifications never become forgotten oversights.

## When to Use

- Before code review or major release milestones
- When asked to "list shortcuts", "show technical debt", or "what was deferred"
- To audit which temporary simplifications need scheduled follow-ups

## Marker Syntax in Code

Pragmatic shortcuts should be documented with a clear revisit trigger:

```python
# shortcut: in-memory aggregation used; move to indexed SQLite when dataset exceeds 10,000 records
```

```javascript
// opt: synchronous file read is sufficient for single-user CLI; migrate to async stream if multi-tenant server introduced
```

## How It Works

1. **Scan**: Searches source code files for comments matching `shortcut:` or `opt:`.
2. **Audit Revisit Triggers**: Checks whether each marker specifies a concrete condition (e.g., scale limit, upcoming feature milestone).
3. **Compile Ledger**: Groups findings by directory, highlighting any marker lacking a clear revisit trigger.

## Output Format

```markdown
### Technical Debt & Shortcut Ledger

| File & Line | Intentional Shortcut | Revisit Trigger | Status |
|---|---|---|---|
| `core/aggregator.js:45` | In-memory record array | >50,000 sessions | Tracked |
| `ui/index.html:120` | Flat table view | >100 entries (paginate) | Tracked |
| `adapters/stream.js:88` | Fixed 8s cache TTL | None specified | ⚠️ Needs Trigger |

**Summary**: M total shortcuts tracked (N requiring revisit triggers).
```

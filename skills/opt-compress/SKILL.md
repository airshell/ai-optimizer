---
name: opt-compress
description: >-
  Rewrites project instruction and guideline files (AGENTS.md, workspace rules,
  styleguides) into high-signal declarative form, saving input tokens on every
  session without changing operational meaning. Backs up original file first.
license: MIT
metadata:
  origin: AI Optimizer
  maintainer: Airshell (https://github.com/airshell)
---

# Instruction & Rule Compactor (`opt-compress`)

Project rules, system instructions, and guideline files (`AGENTS.md`, `.cursorrules`, workspace documentation) are re-ingested into model context on **every single interaction**. A one-time compression of these files saves input tokens and lowers latency across every subsequent turn.

## When to Use

- When project instruction files become long, conversational, or repetitive
- To reduce input token consumption across all coding sessions
- When asked to "compress rules", "trim AGENTS.md", or "clean up instructions"
- Apply strictly to prose documentation and rule files — never to source code, configs, or data.

## Step-by-Step Procedure

1. **Safety Backup First**:
   Copy `FILE` → `FILE.original.md`. If a backup already exists, stop and confirm before proceeding. Never overwrite a restore point.
2. **Compress Prose to High-Signal Declaratives**:
   - Replace long introductory narratives with concise bulleted constraints.
   - Eliminate filler words, conversational hedging, and polite pleasantries.
   - Merge overlapping or duplicate guidelines.
3. **Preserve All Behavioral Directives Exactly**:
   - Retain every single constraint, `MUST`, `NEVER`, path, version, and security boundary.
   - Shorter phrasing, 100% identical rules.
4. **Report Metrics**:
   Output the before-and-after line count, byte size, and backup path.

## Protected Elements (Never Compress)

- Exact command lines, paths, identifiers, and configuration flags.
- Load-bearing safety and governance constraints: security checks, database migrations, credentials, and delete safeguards.

---
name: context-budget
description: Audits coding assistant context window consumption across agents, skills, tools, and rules. Identifies bloat, redundant components, and produces prioritized token-savings recommendations. Use when the context window is filling up too fast and components consuming it need to be identified.
metadata:
  origin: AI Optimizer
  license: MIT
---

# Context Budget — Agent Context Window Auditor

Analyze token overhead across every loaded component in an AI coding assistant session and surface actionable optimizations to reclaim valuable context space.

## When to Use

- Session performance feels sluggish or model response quality is degrading
- You have recently added multiple skills, rules, or external tool configurations
- You want to inspect how much context headroom you actually have
- Planning to add more rules or tools and need to know if there is enough space
- Trigger when: "context budget", "audit context", "context bloat", "reclaim tokens", "clean context"

## How It Works

### Phase 1: Inventory

Scan all workspace and agent configuration directories and estimate token consumption:

**Agent Definitions** (`agents/*.md`)
- Count lines and tokens per file (`words × 1.3`)
- Extract description frontmatter length
- Flag: files >200 lines (heavy), descriptions >30 words (bloated frontmatter)

**Skills** (`skills/*/SKILL.md`)
- Count tokens per `SKILL.md`
- Flag: files >400 lines
- Detect duplicate copies across directories to avoid double-counting

**Rules & Guidelines** (`rules/**/*.md`, `AGENTS.md`)
- Count tokens per file
- Flag: files >100 lines
- Detect content overlap between rule files

**Tool Schemas & MCP Configs** (`.mcp.json` or active tool configs)
- Count configured servers and total tool definitions
- Estimate schema overhead at ~500 tokens per tool definition
- Flag: servers with >20 tools, or servers wrapping simple native CLI commands (`git`, `gh`, `npm`, `cargo`)

**Global Project Instructions** (`AGENTS.md` / workspace rules)
- Count tokens across the project instruction chain
- Flag: combined total >300 lines

### Phase 2: Classify

Sort every component into an actionable category:

| Category | Criteria | Action |
|---|---|---|
| **Always needed** | Referenced in core workflows, backs an active command, or matches project stack | Keep active |
| **Sometimes needed** | Domain-specific (e.g. language-specific patterns), not needed on every turn | Activate on demand |
| **Rarely needed** | No command reference, overlapping content, or unused tooling | Remove or lazy-load |

### Phase 3: Detect Issues

Identify problem patterns that silently waste tokens:
- **Bloated agent descriptions** — descriptions >30 words in frontmatter load into tool contexts on every turn
- **Heavy instructions** — files >200 lines inflate agent context on every turn
- **Redundant components** — skills that duplicate agent logic or overlap with project instructions
- **Tool over-subscription** — dozens of tools active simultaneously when only a few are used
- **Instruction bloat** — verbose conversational text, outdated guidelines, or redundant explanations

### Phase 4: Report

Produce the context budget report:

```
Context Budget Report
═══════════════════════════════════════

Total estimated overhead: ~XX,XXX tokens
Effective available context: ~XXX,XXX tokens (XX% headroom)

Component Breakdown:
┌─────────────────┬────────┬───────────┐
│ Component       │ Count  │ Tokens    │
├─────────────────┼────────┼───────────┤
│ Agents          │ N      │ ~X,XXX    │
│ Skills          │ N      │ ~X,XXX    │
│ Rules           │ N      │ ~X,XXX    │
│ Tool Schemas    │ N      │ ~XX,XXX   │
│ Project Rules   │ N      │ ~X,XXX    │
└─────────────────┴────────┴───────────┘

Issues Found (N):
[ranked by token savings]

Top 3 Optimizations:
1. [action] → save ~X,XXX tokens
2. [action] → save ~X,XXX tokens
3. [action] → save ~X,XXX tokens

Potential savings: ~XX,XXX tokens (XX% of current overhead)
```

## Best Practices

- **Token estimation heuristic**: Use `words × 1.3` for natural language prose, `chars / 4` for code and JSON schemas.
- **Tool schemas are the biggest lever**: Each tool schema costs ~500 tokens; a 30-tool server costs more than all your skills combined.
- **Agent descriptions load always**: Keep agent descriptions under 25 words to prevent constant context drain.
- **Audit after adding tools**: Run a context audit immediately after adding any new agent, skill, or tool plugin.

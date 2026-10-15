---
name: opt-memory
description: >-
  Creates and maintains a single committed project memory file (PROJECT.md)
  storing stable, expensive-to-rediscover architectural intent, build commands,
  and key decisions. Prevents coding assistants from re-grepping the repo on cold starts.
license: MIT
metadata:
  origin: AI Optimizer
  maintainer: Airshell (https://github.com/airshell)
---

# Committed Architecture Cache (`opt-memory`)

Every cold agent session spends valuable tokens rediscovering the same baseline facts: project layout, build and test commands, and architectural rationale. `opt-memory` establishes a single, version-controlled markdown document that caches these facts permanently.

## When to Use

- When initializing a new project or onboarding coding agents
- When agents repeatedly re-scan the entire codebase to locate standard commands or configurations
- To record non-obvious technical decisions and discarded architectural paths

## The Single File Standard: `PROJECT.md`

Store memory in a single file at the repository root: `PROJECT.md` (or in `AGENTS.md` under a `## Project Context` heading). 

### Only Store 3 Categories of Facts:
1. **Architecture & Design Intent**: Where components live and *why* they are structured that way (the intent that code cannot convey).
2. **Commands & Environment**: Verified build, test, and run commands along with essential environment variables.
3. **Decisions & Dead Ends**: Architectural choices made, and approaches tested and intentionally discarded.

### What NEVER to Store:
- **Derivable Source Code Facts**: Symbol lists, function signatures, or file trees that simple search (`grep`, `find`) locates in milliseconds.
- **Secrets & Credentials**: Never commit API keys, tokens, or private endpoints.
- **Ephemeral Work**: Daily TODO lists or temporary progress logs that quickly rot.

## Maintenance Discipline
- **Same-Commit Update**: Update `PROJECT.md` in the exact same commit that modifies an architectural pattern or build command.
- **Replace, Never Accumulate**: When a design decision evolves, replace the existing entry rather than stacking contradictory paragraphs beside it.
- **Keep Under 150 Lines**: A concise, high-signal document is read in a single cached pass.

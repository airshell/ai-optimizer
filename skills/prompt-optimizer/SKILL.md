---
name: prompt-optimizer
description: >-
  Analyzes raw prompts, identifies intent and missing context, and outputs a
  surgical, high-signal, prompt-cache friendly prompt. Advisory role only —
  never executes the task directly.
  TRIGGER when: user says "optimize prompt", "improve my prompt",
  "rewrite this prompt", "help me prompt", "compact this prompt", or asks
  how to prompt effectively for coding tasks.
metadata:
  origin: AI Optimizer
  license: MIT
---

# Prompt Optimizer — Prompt Compactor & Cache Maximizer

Analyze a draft prompt, identify missing technical requirements, eliminate token fluff, and output an optimized prompt designed to maximize prompt-cache hit rates and model accuracy.

## When to Use

- User asks to "optimize this prompt", "improve my prompt", or "rewrite this prompt"
- User pastes a draft instruction and wants feedback or compression
- User wants to maximize prompt-cache reuse and reduce token costs
- User says "I do not know how to prompt for this architecture"

**Advisory only**: This skill produces an optimized prompt; it does not write application code.

## Optimization Pipeline

### Phase 1: Intent & Scope Detection

Classify the user task into:
- **Feature Build**: New component, endpoint, or workflow
- **Bug Fix**: Error resolution, regression patch
- **Refactor**: Clean up, modularize, dead code removal
- **Testing**: Unit tests, integration validation
- **Architecture**: System design, data model specification

### Phase 2: Missing Context Detection

Check if critical engineering constraints are missing:
- [ ] **Target files / modules**: Which exact files should be modified?
- [ ] **Acceptance criteria**: What defines complete and verified?
- [ ] **Error handling & edge cases**: Failure modes and status codes specified?
- [ ] **Security constraints**: Auth boundaries, validation, secrets handling?
- [ ] **Scope boundaries**: What must NOT be changed or added?

### Phase 3: Prompt Cache Alignment

Structure the prompt for maximum prompt-cache efficiency:
1. **Static prefix first**: Put stable instructions, style rules, and schema definitions at the very beginning.
2. **Dynamic inputs last**: Place changing file snippets and user queries at the end to prevent cache invalidation.
3. **Strip conversational padding**: Remove polite preambles ("Please help me kindly do..."), which dilute attention and waste input tokens.

## Output Format

Present your diagnosis and optimized prompt in this clean format:

```markdown
### 1. Prompt Diagnosis
- **Strengths**: [What the original prompt did well]
- **Missing Information**: [Key technical gaps identified]
- **Token Reduction**: [Estimated input token savings]

### 2. Optimized Prompt (Full Version)
```markdown
[Self-contained, production-ready prompt ready to copy-paste]
```

### 3. Quick Pattern (Compact)
`[Surgical 1-line command pattern for rapid iteration]`
```

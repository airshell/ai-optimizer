---
name: opt-review
description: >-
  Reviews a code diff for unnecessary bloat and over-engineering — speculative
  parameters, premature abstractions, dead code, hand-rolled standard library
  features, and redundant narration comments. Outputs a concise delete-list
  with exact line counts saved. Use before opening a PR or committing changes.
license: MIT
metadata:
  origin: AI Optimizer
  maintainer: Airshell (https://github.com/airshell)
---

# Code Diff & Waste Pruner (`opt-review`)

Inspect a git diff or pull request specifically for code that should be **deleted**. Unlike standard code reviewers that focus on stylistic nitpicks, `opt-review` identifies speculative code, duplicate abstractions, and verbosity that unnecessarily inflate model context and codebase maintenance costs.

## When to Use

- Before committing changes or submitting a pull request
- When asked to "review this diff", "find bloat", "trim this change", or "clean up this code"
- To verify that an AI-generated solution adhered to strict YAGNI principles

## What to Flag for Deletion

1. **Speculative Over-Engineering**:
   - Parameters or configuration options added for hypothetical future requirements.
   - Single-caller wrapper functions or helper classes that obscure simple logic.
   - Hand-rolled utilities that native standard libraries already provide (`node:path`, `crypto`, `itertools`, `fetch`).
   - Adding a third-party package for functionality achievable in 3-5 lines of native code.
2. **Commentary & Prose Bloat**:
   - Dead code or commented-out debugging statements.
   - Redundant comments that simply restate what the code already says.
   - Verbose boilerplate and unnecessary intermediate variables.

## What NEVER to Cut (Protected Guardrails)

Never suggest cutting:
- Input validation, schema parsing, and boundary sanitization.
- Error handling, status codes, and exception boundaries.
- Authentication, authorization, and credential protection.
- Accessibility attributes (`aria-*`, keyboard handlers, semantic elements).
- Unit tests proving non-trivial logic.

## Output Format: Actionable Delete List

Present findings ordered by lines saved (deepest savings first):

```markdown
path/to/file.ext:line — cut [what]; [one-clause reason] (-N lines)
```

End with a summary line:
`Total: -N lines across M findings.`

If the diff is already minimal and clean, output:
`Verified: No over-engineering or dead code detected. Diff is lean and focused.`

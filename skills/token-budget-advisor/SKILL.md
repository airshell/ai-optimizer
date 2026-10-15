---
name: token-budget-advisor
description: >-
  Offers the user an informed choice about how much response depth to
  consume before generating an answer. Use this skill when the user explicitly
  wants to control response length, depth, or token budget.
  TRIGGER when: "token budget", "token count", "token usage", "token limit",
  "response length", "answer depth", "short version", "brief answer",
  "detailed answer", "exhaustive answer", "save tokens", "respond at 50%",
  "give me the short version", "depth control", or clear variants asking to
  control answer size or depth.
metadata:
  origin: AI Optimizer
  license: MIT
---

# Token Budget Advisor — Response Depth & Token Controller

Intercept the response flow to offer the user a clear choice about response depth **before** the assistant generates code or answers.

## When to Use

- User wants to control how long or detailed a response should be
- User mentions tokens, budget, depth, or response length
- User says "short version", "tldr", "brief", "at 50%", "exhaustive", etc.
- Any time the user wants to choose depth or detail level upfront

**Do not trigger** when: user already set a level this session (maintain it silently), or the answer is trivially one line.

## How It Works

### Step 1 — Estimate Input Tokens

Use heuristic calibration to estimate prompt token count:
- Prose / English: `words × 1.3`
- Code-heavy or mixed text: `chars / 4`

### Step 2 — Estimate Response Size by Complexity

Classify the prompt, then apply the multiplier range to estimate the response window:

| Complexity | Multiplier Range | Example Requests |
|---|---|---|
| **Simple** | 3× – 8× | "What is X?", yes/no, single fact |
| **Medium** | 8× – 20× | "How does X work?", function implementation |
| **Medium-High** | 10× – 25× | Code request with tests and edge cases |
| **Complex** | 15× – 40× | Multi-part architectural analysis, system design |

### Step 3 — Present Depth Options

Present this concise block before generating output:

```
Analyzing your request...

Input: ~[N] tokens  |  Complexity: [level]

Choose your response depth:
[1] Essential   (25%)  ->  ~[tokens]   Direct answer / code diff only, no preamble
[2] Moderate    (50%)  ->  ~[tokens]   Clean code + necessary context + 1 test
[3] Detailed    (75%)  ->  ~[tokens]   Full implementation with alternative approaches
[4] Exhaustive (100%)  ->  ~[tokens]   Comprehensive analysis and extensive documentation

Reply with 1-4, or say "short version" / "at 50%".
```

### Step 4 — Respond at Chosen Depth

| Level | Target Length | Include | Omit |
|---|---|---|---|
| **25% Essential** | 2–4 sentences / pure diff | Direct answer, surgical code diff | Preamble, pleasantries, tutorials |
| **50% Moderate** | 1–3 paragraphs + diff | Solution + core rationale + 1 test | Deep theory, edge cases, history |
| **75% Detailed** | Structured response | Complete solution, pros/cons, tests | Redundant boilerplate |
| **100% Exhaustive** | Full documentation | Full analysis, alternative designs | Nothing |

## Shortcuts — Skip the Prompt

If the user signals a preference in their initial message, honor it immediately without asking:
- "short version", "tldr", "brief", "25%" → Level 1
- "moderate", "balanced", "50%" → Level 2
- "detailed", "thorough", "75%" → Level 3
- "exhaustive", "full deep dive", "100%" → Level 4

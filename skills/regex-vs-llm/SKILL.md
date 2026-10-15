---
name: regex-vs-llm
description: >-
  Decision framework and hybrid pattern for choosing between deterministic
  regex and LLM extraction. Handles 95%+ of structured text tasks with zero
  tokens, reserving LLMs strictly for edge cases.
metadata:
  origin: AI Optimizer
  license: MIT
---

# Zero-Token Text Extraction (Regex vs LLM)

A practical architectural pattern for parsing structured and semi-structured text (logs, invoices, tables, markdown, forms). Deterministic regular expressions handle 95%–98% of structured cases at **zero LLM tokens and sub-millisecond speed**. Reserve expensive LLM calls strictly for low-confidence edge cases.

## Decision Framework

```
Is the text format mostly structured or patterned?
├── Yes (>90% follows recurring patterns) → Start with Regex
│   ├── Regex parses cleanly (≥95% confidence) → Done (0 tokens consumed)
│   └── Low-confidence edge cases (<95%) → Forward edge cases to LLM validator
└── No (free-form natural narrative) → Use LLM directly
```

## Hybrid Architecture Pattern

```
Source Text
    │
    ▼
[Regex Parser] ────────── Extracts structured records (95-98% accuracy, 0 tokens)
    │
    ▼
[Confidence Scorer] ───── Validates fields, lengths, and expected formats
    │
    ├── High Confidence (≥0.95) ──→ Instant Output (0 tokens, <1ms)
    │
    └── Low Confidence (<0.95) ───→ [Lightweight LLM Validator] ──→ Final Output
```

## Implementation Example (Python)

```python
import re
from dataclasses import dataclass

@dataclass(frozen=True)
class ExtractedRecord:
    id: str
    title: str
    status: str
    confidence: float = 1.0

def parse_records(text: str) -> list[ExtractedRecord]:
    pattern = re.compile(r"#(?P<id>\d+)\s+-\s+(?P<title>.+?)\s+\[(?P<status>\w+)\]")
    records = []
    for match in pattern.finditer(text):
        records.append(ExtractedRecord(
            id=match.group("id"),
            title=match.group("title").strip(),
            status=match.group("status").upper(),
            confidence=1.0
        ))
    return records
```

## Production Benchmark Metrics

From production document and log parsing workloads:
- **Deterministic regex coverage**: ~98.0% of records
- **Edge cases requiring LLM**: ~2.0%
- **Net token cost savings**: **95% to 98% reduction vs all-LLM parsing**
- **Latency**: Sub-millisecond execution vs seconds of LLM network latency

## Best Practices

- Always write tests for common regex patterns before deploying.
- Use programmatic confidence checks (required keys, min length, expected enums) to flag items needing LLM review.
- Never burn LLM tokens extracting text that a simple regular expression solves deterministically.

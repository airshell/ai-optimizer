# Engineering Best Practices & Architecture Contract

Core guidelines, development standards, and performance patterns enforced across the AI Optimizer codebase.

---

## 1. The Zero-Mock & Zero-Hardcoding Mandate

- **No Synthetic Numbers:** Never hardcode token counts, dollar savings, or carbon metrics in the UI, templates, or adapters. Every figure must be dynamically derived from the filesystem, database, OS APIs, or backend queries.
- **No Dummy Agent Lists:** Agent detection and active toggles must query real filesystem paths (`~/.gemini`, `~/.codex`, `~/.claude`, `PATH`) and load real status lines dynamically.
- **No Dead UI Actions:** Every button, pill toggle, input, and modal must be wired to a live backend endpoint or genuine JavaScript handler.

---

## 2. Token Accounting & Deduplication Standards

- **Canonical First:** When parsing agent transcripts or session logs, prioritize canonical summary events (`token_usage_record` in OpenAI Codex) and disregard duplicate intermediate turn events (`event_msg` with `last_token_usage`) within the same session.
- **Resilient Fallback:** Only fall back to turn-by-turn accumulators if the canonical summary event is absent.
- **Cache-Aware:** Track `input`, `output`, and `cacheRead` separately. Cache read tokens must not be billed at full prompt token rates.

---

## 3. High-Performance & Low CPU Footprint

- **File Mtime Caching:** Disk-scanning adapters must cache file contents keyed by `(filepath, mtimeMs, size)`. Only re-parse files when modified on disk.
- **Server-Side In-Memory Cache:** The HTTP server maintains an in-memory aggregation cache with a short TTL (8 seconds) so rapid UI refreshes take `< 2ms` and do not saturate CPU cycles.
- **Smart Frontend Polling:** Dashboard polling runs at 60-second intervals in the background and refreshes immediately when the tab regains focus via the `visibilitychange` API.

---

## 4. UI & Design System Standards

- **Design Philosophy:** Modern developer telemetry aesthetic without relying on bloated external CSS frameworks.
- **Palette Tokens:** Chromatic dark canvas (`#091406` root, `#050714` sidebar, `#040F16` cards, `#042738` elevated), off-white typography (`#f4f8fa`), Electric Spring Green (`#00ed64`) for savings/health, and Signal Amber (`#ff6b2c`) / Gold (`#f79e1b`) for spend metrics.
- **Concentric Radii:** Consistent rounded geometry with pill toggles (`border-radius: 9999px`).
- **Tabular Numbers:** Always use `font-variant-numeric: tabular-nums` on all counters and tables to prevent jitter during real-time value updates.
- **Neutral Terminology:** Describe design tokens in neutral technical terms rather than proprietary third-party commercial brand names.

# Bug Fixes & Maintenance Log

This document tracks important bug resolutions, language modernizations, and CI fixes implemented in the project.

---

## 1. Local Analytics Loading & Process Disconnection Fix
- **Issue:** The UI displayed `"Connecting to telemetry server"` and failed to load real-time usage statistics and toggles.
- **Root Cause:** The background Node engine process had terminated or encountered a port binding conflict on port 4567, leaving the UI unable to reach `/api/usage`.
- **Resolution:**
  - Hardened `bin/ai-opt.js` server startup with resilient port binding and error handling.
  - Implemented health check and automatic process supervisor in the native macOS wrapper (`desktop/macos/main.m`).
  - Added frontend retry logic with instant reconnect on window focus (`visibilitychange` API).

---

## 2. Terminology & Language Modernization
- **Issue:** Overly technical terminology (such as "telemetry", "telemetry server", "orbital eyebrow telemetry") caused user confusion and sparked concerns that data was being sent to an external cloud service.
- **Resolution:**
  - Audited and updated the entire frontend UI, templates, READMEs, and API error strings.
  - Replaced "telemetry" with clear, natural language terms: "Local Usage Analytics", "Real-Time Optimization Engine", and "Activity Ledger".
  - Added prominent privacy notices clarifying that all data is computed 100% locally from filesystem logs with zero external network egress.

---

## 3. High-Resolution Screenshot Compositing
- **Issue:** Screenshots generated via generative AI tools had blurry UI text, low effective resolution, and excessive dark margins where the dashboard appeared tiny.
- **Resolution:**
  - Replaced AI-generated mockups with pixel-perfect, lossless 3120 × 2068 Ultra-HD Retina compositing using Headless Chrome rendering.
  - Preserved 100% of raw screenshot pixels with zero text interpolation or blurring.
  - Tightened margins to 48px so the application dashboard occupies 97% of the canvas.
  - Rendered authentic macOS titlebar chrome with native traffic light controls (close, minimize, zoom).

---

## 4. Homebrew Cask RuboCop Style Fix
- **Issue:** Initial push to `airshell/homebrew-tap` triggered a red CI failure (`Cask/HomepageUrlStyling`).
- **Root Cause:** Homebrew's RuboCop style guidelines require a trailing slash on domain-only homepage URLs:
  `homepage "https://optimizer.aimaxo.com/"` instead of `"https://optimizer.aimaxo.com"`.
- **Resolution:** Updated `Casks/ai-optimizer.rb` with the trailing slash. Automated style checks (`brew style airshell/tap`) and GitHub Actions CI now pass with 0 offenses.

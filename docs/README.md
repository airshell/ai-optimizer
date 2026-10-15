# AI Optimizer Documentation

Comprehensive reference documentation, architecture specifications, usage guides, and engineering standards for AI Optimizer.

---

## 📚 Documentation Index

| Guide | Description |
| :--- | :--- |
| **[Features & Architecture](FEATURES_AND_ARCHITECTURE.md)** | Detailed architecture breakdown: Mach-O Menu Bar app, local HTTP engine, truth-first deduplication, EcoLogits carbon estimation, and Homebrew tap service. |
| **[Usage Guides](USAGE_GUIDES.md)** | Step-by-step guides for installing via Homebrew / DMG, using the Menu Bar app, CLI flags reference, and activating the 11 companion skills. |
| **[Bug Fixes & Maintenance Log](BUG_FIXES_AND_MAINTENANCE.md)** | Historical record of key bug fixes: local analytics connection resilience, language modernization, RuboCop Homebrew fixes, and high-res screenshot compositing. |
| **[Engineering Best Practices](BEST_PRACTICES.md)** | Codebase rules: Zero-Mock rule, deduplication priority, mtime caching, in-memory TTL caching, and design system tokens. |
| **[Implementation Roadmap](IMPLEMENTATION_PLAN.md)** | Original architectural implementation roadmap for native packaging and adapters. |
| **[Release Walkthrough](RELEASE_WALKTHROUGH.md)** | Step-by-step release packaging walkthrough and Gatekeeper quarantine management. |

---

## ⚡ Quick Reference

### Installation
```bash
brew install --cask airshell/tap/ai-optimizer
```

### CLI Inspection
```bash
# Today's token usage, costs, and carbon metrics
ai-opt --today

# Day-by-day historical table
ai-opt --daily

# Inspect RTK and context compression savings
ai-opt --savings

# Launch the standalone web dashboard
ai-opt --serve
```

---

## Author & Licensing

- **Author:** [Airshell](https://github.com/airshell)
- **Website:** [optimizer.aimaxo.com](https://optimizer.aimaxo.com)
- **Licensing:** [Business Source License 1.1 (BSL-1.1)](../LICENSE) for App & Engine / [MIT License](../LICENSE) for Skills.

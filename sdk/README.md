# @airshell/ai-optimizer SDK Types & Client Contract

This directory contains the official TypeScript type declarations and client contract for `@airshell/ai-optimizer`.

---

## Installation

```bash
npm install @airshell/ai-optimizer
# or
pnpm add @airshell/ai-optimizer
```

---

## Quickstart

```typescript
import { AIOptimizer, verifyLicense } from "@airshell/ai-optimizer";

// Initialize SDK instance
const optimizer = new AIOptimizer({
  licenseKey: process.env.AI_OPT_LICENSE_KEY // Optional for community features
});

// 1. Context Compression & Token Hygiene
const rawTerminalLogs = "...large log dump...";
const cleanContext = optimizer.context.compress(rawTerminalLogs, {
  maxLines: 80,
  repeatThreshold: 3
});

// 2. Exact Model Rate Resolution & Carbon Accounting
const cost = optimizer.accounting.calculateCost(
  { input: 12000, output: 850, cacheRead: 45000 },
  "claude-3-7-sonnet"
);

const carbon = optimizer.accounting.calculateCarbon(850, "claude-3-7-sonnet");
console.log(`Run cost: $${cost.toFixed(4)}, Estimated footprint: ${carbon.gco2} gCO₂`);

// 3. Supervised Long-Horizon Harness (Enterprise Tier)
const result = await optimizer.runHarness({
  workspaceDir: process.cwd(),
  testCommand: "npm test",
  budget: {
    maxCostUsd: 5.00,
    maxTurns: 30
  },
  workflow: async ({ workspaceDir, brokerUrl, brokerToken, env }) => {
    // Agent execution isolated in transactional sandbox
  }
});

console.log(`Harness status: ${result.status}`);
```

For detailed specifications, see [`index.d.ts`](./index.d.ts).

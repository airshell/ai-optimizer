export interface TokenUsage {
  input: number;
  output: number;
  cacheRead?: number;
  cacheWrite?: number;
}

export interface ModelRate {
  in: number;
  out: number;
  cache_read: number;
  cache_write: number;
}

export interface CarbonEstimate {
  gco2: number;
  provenance: "ecologits_modeled" | "fallback_scalar";
  uncertainty: number | null;
}

export interface StorageAdapter {
  getItem(key: string): Promise<string | null>;
  setItem(key: string, value: string): Promise<void>;
  removeItem(key: string): Promise<void>;
  hasItem(key: string): Promise<boolean>;
  clear?(): Promise<void>;
}

export interface LicenseVerificationResult {
  valid: boolean;
  licenseId?: string;
  customer?: string;
  tier?: string;
  seats?: number;
  features?: Set<string>;
  expiresAt?: string;
  error?: string;
}

export interface SupervisedHarnessConfig {
  workspaceDir: string;
  testCommand?: string;
  licenseKey?: string | object;
  baseDir?: string;
  budget?: {
    maxCostUsd: number;
    maxTurns?: number;
  };
  workflow?: (ctx: {
    workspaceDir: string;
    brokerUrl: string;
    brokerToken: string;
    env: NodeJS.ProcessEnv;
    supervisor: any;
  }) => Promise<void>;
}

export interface HarnessRunResult {
  status: "run_promoted" | "promotion_deferred" | "rejected" | "license_invalid" | "license_unauthorized";
  runId?: string;
  artifactPath?: string;
  reason?: string;
  error?: string;
  budgetStatus?: {
    maxCostUsd: number;
    committedSpendUsd: number;
    pendingReservationsUsd: number;
    retainedLiabilityUsd: number;
    remainingBudgetUsd: number;
    turnCount: number;
  };
  candidateResult?: {
    passed: boolean;
    exitCode: number;
    durationMs: number;
    stdout: string;
    stderr: string;
  };
}

export class MemoryStorage implements StorageAdapter {
  getItem(key: string): Promise<string | null>;
  setItem(key: string, value: string): Promise<void>;
  removeItem(key: string): Promise<void>;
  hasItem(key: string): Promise<boolean>;
  clear(): Promise<void>;
}

export class FileSystemStorage implements StorageAdapter {
  constructor(baseDir?: string);
  getItem(key: string): Promise<string | null>;
  setItem(key: string, value: string): Promise<void>;
  removeItem(key: string): Promise<void>;
  hasItem(key: string): Promise<boolean>;
  clear(): Promise<void>;
}

export function verifyLicense(
  license: object,
  publicKeyPem?: string
): LicenseVerificationResult;

export function hasFeature(
  result: LicenseVerificationResult,
  featureName: string
): boolean;

export class AIOptimizer {
  constructor(options?: {
    licenseKey?: string | object;
    storage?: StorageAdapter;
    publicKeyPem?: string;
  });

  readonly context: {
    compress(text: string, options?: { minChars?: number; maxLines?: number; repeatThreshold?: number }): string;
    stripAnsi(text: string): string;
    collapseRepeatingLines(lines: string[], threshold?: number): string[];
  };

  readonly accounting: {
    calculateCost(tokens: TokenUsage, model: string): number;
    calculateCarbon(outputTokens: number, model: string): CarbonEstimate;
    resolveRate(model: string): ModelRate;
  };

  runHarness(config: SupervisedHarnessConfig): Promise<HarnessRunResult>;
}

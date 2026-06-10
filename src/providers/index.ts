import { deepseekProvider } from "./deepseek";
import { openaiCodexProvider } from "./openai-codex";
import { openrouterProvider } from "./openrouter";
import { vercelAiGatewayProvider } from "./vercel-ai-gateway";

import type { CreditsProvider } from "../types";

const PROVIDERS: CreditsProvider[] = [
  deepseekProvider,
  openaiCodexProvider,
  openrouterProvider,
  vercelAiGatewayProvider,
];

export function findProvider(provider?: string): CreditsProvider | undefined {
  return PROVIDERS.find((entry) => entry.provider === provider);
}

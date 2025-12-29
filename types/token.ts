export type TokenStage = "NEW" | "FINAL" | "MIGRATED";

export interface Token {
  id: string;
  symbol: string;
  name: string;

  image: string;

  price: number;
  priceChange24h: number;

  volume24h: number;
  liquidity: number;
  marketCap: number;

  stage: TokenStage;
  updatedAt: number;

  // 🔽 REQUIRED FOR CURRENT UI
  txCount: number; // total transactions (slider width)
  txDelta: number; // positive = green, negative = red
  solAmount: number; // shown next to SOL icon
  fValue: number; // shown next to F icon

  bondingPercentage: number; // % of liquidity in the bonding curve
}

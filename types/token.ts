export type TokenStage = "NEW" | "FINAL" | "MIGRATED";

export interface Token {
  id: string;
  symbol: string;
  name: string;

  image: string; // 👈 NEW
  price: number;
  priceChange24h: number;

  volume24h: number;
  liquidity: number;
  marketCap: number;

  stage: TokenStage;
  updatedAt: number;
}

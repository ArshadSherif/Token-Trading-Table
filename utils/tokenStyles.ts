// src/utils/tokenStyles.ts

export type TokenColumn = "NEW" | "FINAL" | "MIGRATED";

export function marketCapColor(marketCap: number, column: TokenColumn): string {
  // New pairs are always blue
  if (column === "NEW") return "text-sky-400";

  // Tiered caps
  if (marketCap < 1_000_000) return "text-yellow-400"; // micro
  if (marketCap < 10_000_000) return "text-emerald-400"; // small
  return "text-sky-400"; // large
}

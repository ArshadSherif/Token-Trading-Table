export function buyPressurePercent(txCount: number, txDelta: number): number {
  if (txCount <= 0) return 0;

  // normalize delta into [0, 1]
  const ratio = (txDelta + txCount) / (2 * txCount);

  // clamp to visible range
  return Math.max(0, Math.min(100, ratio * 100));
}

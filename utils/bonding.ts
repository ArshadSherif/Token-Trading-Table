export function bondingColor(p: number) {
  if (p < 30) return "green";
  if (p < 70) return "yellow";
  return "red";
}

export function BondingRing({
  baseColor,
  livePercent,
}: {
  baseColor: "red" | "yellow" | "green";
  livePercent: number;
}) {
  const strong =
    baseColor === "red"
      ? "rgba(239,68,68,0.55)"
      : baseColor === "yellow"
      ? "rgba(250,204,21,0.55)"
      : "rgba(52,211,153,0.55)";

  const soft =
    baseColor === "red"
      ? "rgba(239,68,68,0.22)"
      : baseColor === "yellow"
      ? "rgba(250,204,21,0.22)"
      : "rgba(52,211,153,0.22)";

  const PERIMETER = 296;

  return (
    <svg
      className="absolute inset-0 z-[2]"
      viewBox="0 0 100 100"
      pointerEvents="none"
    >
      
      <rect
        x="3"
        y="3"
        width="94"
        height="94"
        rx="10"
        ry="10"
        fill="none"
        stroke={soft}
        strokeWidth="1.5"
      />

 
      <rect
        x="3"
        y="3"
        width="94"
        height="94"
        rx="10"
        ry="10"
        fill="none"
        stroke={strong}
        strokeWidth="1.6"
        strokeDasharray={PERIMETER}
        strokeDashoffset={PERIMETER - (PERIMETER * livePercent) / 100}
        className="transition-all duration-300 ease-out"
      />
    </svg>
  );
}

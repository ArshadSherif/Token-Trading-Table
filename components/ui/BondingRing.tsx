import clsx from "clsx";

export function BondingRing({
  percent,
  color,
}: {
  percent: number;
  color: "red" | "yellow" | "green";
}) {
  return (
    <>
      {/* soft glow */}
      <div
        className={clsx(
          "absolute inset-[-3px] rounded-[6px] opacity-40",
          color === "red" && "ring-2 ring-red-500/40",
          color === "yellow" && "ring-2 ring-yellow-400/40",
          color === "green" && "ring-2 ring-emerald-400/40"
        )}
      />

      {/* progress ring */}
      <svg
        className="absolute inset-[-6px] w-[86px] h-[86px] -rotate-90"
        viewBox="0 0 100 100"
      >
        <circle
          cx="50"
          cy="50"
          r="46"
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="6"
        />
        <circle
          cx="50"
          cy="50"
          r="46"
          fill="none"
          stroke={
            color === "red"
              ? "#ef4444"
              : color === "yellow"
              ? "#facc15"
              : "#34d399"
          }
          strokeWidth="6"
          strokeDasharray={289}
          strokeDashoffset={289 - (289 * percent) / 100}
          className="transition-all duration-500 ease-out"
        />
      </svg>
    </>
  );
}

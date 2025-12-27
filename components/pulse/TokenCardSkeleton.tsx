export default function TokenCardSkeleton() {
  return (
    <div
      className="
        h-[96px]
        w-full
        flex flex-col
        bg-[#0f1015]
        border-b border-white/5
        animate-pulse
      "
    >
      {/* TOP ROW */}
      <div
        className="
          flex flex-row
          items-center
          gap-[12px]
          px-[12px]
          pt-[10px]
          pb-[4px]
        "
      >
        <div className="w-[40px] h-[40px] rounded-[8px] bg-white/10 shrink-0" />

        <div className="flex flex-col flex-1 gap-[4px] min-w-0">
          <div className="w-[140px] h-[14px] bg-white/15 rounded" />
          <div className="w-[90px] h-[12px] bg-white/10 rounded" />
        </div>

        <div className="flex flex-col items-end gap-[4px] shrink-0">
          <div className="w-[72px] h-[14px] bg-white/15 rounded" />
          <div className="w-[52px] h-[12px] bg-white/10 rounded" />
        </div>
      </div>

      {/* BOTTOM ROW */}
      <div className="flex flex-row gap-[6px] px-[12px] pb-[10px]">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="w-[30px] h-[18px] rounded-full bg-white/10" />
        ))}
      </div>
    </div>
  );
}

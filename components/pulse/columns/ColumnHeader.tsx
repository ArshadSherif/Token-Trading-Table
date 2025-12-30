export default function ColumnHeader({ title }: { title: string }) {
  return (
    <div
      className="
        sticky top-0 z-30
        flex flex-row items-center justify-between
        min-h-[50px]
        pl-[10px] pr-[12px]
        border-b border-white/10
        bg-[#111217]
      "
    >
      <div className="flex flex-row items-center gap-[16px] flex-1">
        <span className="text-[16px] font-medium text-white whitespace-nowrap">
          {title}
        </span>
      </div>

      <div className="flex flex-row items-center gap-[12px]">
        <div className="hidden lg:flex">
          <div
            className="
              flex flex-row items-center
              h-[28px]
              pl-[6px] pr-[6px]
              gap-[6px]
              rounded-full
              border border-white/10
              bg-transparent
              hover:bg-white/5
              transition-colors duration-125
            "
          >
            <div className="w-[14px] h-[14px] bg-white/30 rounded-sm" />

            <div className="w-[24px] h-[14px] bg-white/20 rounded-sm" />

            <div className="w-[14px] h-[14px] bg-white/40 rounded-full" />

            <div className="h-full w-[1px] bg-white/10 mx-[2px]" />

            <div className="flex gap-[3px]">
              <div className="w-[22px] h-[22px] bg-white/20 rounded-[4px]" />
              <div className="w-[22px] h-[22px] bg-white/10 rounded-[4px]" />
              <div className="w-[22px] h-[22px] bg-white/10 rounded-r-full rounded-l-[4px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

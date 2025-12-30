import clsx from "clsx";

export default function DisplayDropdownSkeleton() {
  return (
    <div className="w-[360px] bg-[#111217] rounded-xl p-[14px] shadow-2xl ">
      <section className="mb-[14px]">
        <div className="text-[13px] text-white/60 mb-[8px]">Metrics</div>
        <div className="grid grid-cols-2 gap-[8px]">
          <div className="h-[44px] rounded-md border border-white/15 flex flex-col items-center justify-center text-white/50 text-[13px]">
            MC 77K
            <span className="text-[11px]">Small</span>
          </div>
          <div className="h-[44px] rounded-md bg-white/15 border border-white/20 flex flex-col items-center justify-center text-white text-[13px]">
            MC 77K
            <span className="text-[11px] text-white/70">Large</span>
          </div>
        </div>
      </section>

      <section className="mb-[14px]">
        <div className="text-[13px] text-white/60 mb-[8px]">Quick Buy</div>
        <div className="grid grid-cols-4 gap-[6px]">
          {["Small", "Large", "Mega", "Ultra"].map((l, i) => (
            <div
              key={l}
              className={clsx(
                "h-[42px] rounded-md border border-white/15 flex flex-col items-center justify-center text-[12px]",
                i === 1 ? "bg-white/15 text-white" : "text-white/50"
              )}
            >
              <div className="text-[11px] mb-[2px]">⚡7</div>
              {l}
            </div>
          ))}
        </div>
      </section>

      <section className="mb-[14px] flex items-center gap-[8px]">
        <div className="w-[14px] h-[14px] rounded-full bg-white/60" />
        <span className="text-[13px] text-white">Grey</span>
      </section>

      <section className="flex gap-[6px] mb-[12px]">
        {["Layout", "Metrics", "Row", "Extras"].map((t, i) => (
          <div
            key={t}
            className={clsx(
              "px-[12px] py-[6px] rounded-full text-[13px]",
              i === 0 ? "bg-white/15 text-white" : "text-white/50"
            )}
          >
            {t}
          </div>
        ))}
      </section>

      <section className="space-y-[8px] mb-[14px]">
        {[
          "Show Search Bar",
          "No Decimals",
          "Show Hidden Tokens",
          "Unhide on Migrated",
        ].map((l, i) => (
          <div
            key={l}
            className={clsx(
              "h-[36px] rounded-md px-[10px] flex items-center justify-between text-[13px]",
              i === 3
                ? "bg-white/15 text-white"
                : "border border-white/15 text-white/70"
            )}
          >
            {l}
            <div className="w-[14px] h-[14px] rounded-full border border-white/40" />
          </div>
        ))}
      </section>

      <section className="space-y-[8px] mb-[14px]">
        {["Circle Images", "Progress Bar", "Spaced Tables"].map((l) => (
          <div
            key={l}
            className="flex items-center gap-[8px] text-[13px] text-white/70"
          >
            <div className="w-[14px] h-[14px] rounded border border-white/40" />
            {l}
          </div>
        ))}
      </section>

      <section>
        <div className="text-[13px] text-white/60 mb-[8px]">Customize rows</div>
        <div className="flex flex-wrap gap-[6px]">
          {[
            "Image Reuse",
            "Market Cap",
            "Volume",
            "Fees",
            "TX",
            "Socials",
            "Holders",
            "Pro Traders",
            "KOLs",
          ].map((t) => (
            <div
              key={t}
              className="px-[10px] py-[6px] rounded-md border border-white/15 text-[12px] text-white/70"
            >
              {t}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

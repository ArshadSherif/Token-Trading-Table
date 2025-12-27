"use client";

export default function PulseFooter() {
  return (
    <footer className="shrink-0 w-full border-t border-white/10 bg-[#0f1015]">
      <div className="flex items-center justify-between px-[24px] h-[40px] text-[12px] text-white/60">
        {/* LEFT */}
        <div className="flex items-center gap-[8px]">
          <div className="w-[8px] h-[8px] rounded-full bg-green-500" />
          <span>Connection stable</span>
        </div>

        {/* CENTER */}
        <div className="hidden md:flex gap-[12px]">
          <span>Pulse</span>
          <span>•</span>
          <span>Live feed</span>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-[12px]">
          <button className="hover:text-white transition-colors">Docs</button>
          <button className="hover:text-white transition-colors">
            Settings
          </button>
        </div>
      </div>
    </footer>
  );
}

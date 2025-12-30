export default function WalletDropdownSkeleton() {
  return (
    <div className="w-[360px] bg-[#111217] rounded-xs shadow-2xl">
      {/* Header */}
      <div className="flex items-center gap-[6px] px-[12px] py-[10px] border-b border-white/10">
        <button className="px-[10px] h-[26px] rounded-full bg-white/15 text-white text-[13px]">
          Unselect All
        </button>

        <button className="px-[10px] h-[26px] rounded-full bg-white/5 text-white/50 text-[13px]">
          Select All with Balance
        </button>

        <div className="ml-auto text-white/40 text-[16px]">⚙</div>
      </div>

      {/* Wallet row */}
      <div className="px-[12px] py-[10px] border-b border-white/10">
        <div className="flex items-center gap-[10px]">
          {/* checkbox */}
          <div className="w-[14px] h-[14px] rounded-[3px] border border-orange-400 bg-orange-400/20" />

          {/* wallet info */}
          <div className="flex-1 min-w-0">
            <div className="text-[14px] font-medium text-orange-400">
              Axiom Main
            </div>
            <div className="text-[12px] text-white/40 flex items-center gap-[6px]">
              Off
              <span className="opacity-60">8uPnP</span>
            </div>
          </div>

          {/* right controls */}
          <div className="flex items-center gap-[8px]">
            <div className="px-[8px] h-[22px] rounded-full bg-white/5 text-white/60 text-[12px] flex items-center">
              ≡ 0
            </div>

            <div className="w-[34px] h-[18px] rounded-full bg-white/10 relative">
              <div className="absolute left-[2px] top-[2px] w-[14px] h-[14px] rounded-full bg-white/30" />
            </div>
          </div>
        </div>
      </div>

      {/* Add wallet */}
      <button className="flex items-center gap-[6px] px-[12px] py-[10px] text-[14px] text-white/60 hover:bg-white/5 rounded-b-xl">
        <span className="text-[18px] leading-none">+</span>
        Add Wallet
      </button>
    </div>
  );
}

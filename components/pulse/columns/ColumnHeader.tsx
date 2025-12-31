"use client";

import { LightningBoltIcon } from "@radix-ui/react-icons";

import TierDropdown from "@/components/ui/TierDropdown";
import { FadersHorizontalIcon } from "@phosphor-icons/react";
import FiltersModalWrapper from "@/components/ui/skeletons/FiltersModal";
import { AppTooltip } from "@/components/ui/AppToolTip";

export default function ColumnHeader({ title }: { title: string }) {
  return (
    <div
      className="
        sticky top-0 z-30
        flex items-center justify-between
        min-h-[50px]
        pl-[10px] pr-[12px]
        border-b border-white/10
        bg-[#111217]
      "
    >
      <span className="text-[16px] font-medium text-white whitespace-nowrap">
        {title}
      </span>

      <div className="flex items-center gap-[10px]">
        <div className="flex items-center h-[28px] rounded-full border border-white/10 overflow-hidden">
          <div className="flex items-center justify-between gap-[6px] px-[10px] min-w-[80px]">
            <div className="flex items-center gap-[4px] text-white/80">
              <LightningBoltIcon />
              <span className="text-[13px] font-medium">0</span>
            </div>

            <img
              src="/solana.png"
              alt="sol"
              className="w-[16px] h-[16px]"
              draggable={false}
            />
          </div>

          <div className="w-[1px] h-full bg-white/10" />

          <div className="flex items-center px-[6px] gap-[4px]">
            <TierDropdown label="P1" active />
            <TierDropdown label="P2" />
            <TierDropdown label="P3" />
          </div>
        </div>
        <AppTooltip content="Filters">
          <FiltersModalWrapper
            trigger={
              <button className="w-[28px] h-[28px] flex items-center justify-center hover:bg-white/5">
                <FadersHorizontalIcon size={18} />
              </button>
            }
          />
        </AppTooltip>
      </div>
    </div>
  );
}

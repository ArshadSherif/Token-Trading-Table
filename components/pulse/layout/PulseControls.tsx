"use client";
import { GearIcon, StarIcon } from "@radix-ui/react-icons";
import { ChartLineIcon } from "@phosphor-icons/react";
import { AppTooltip } from "@/components/ui/AppToolTip";

export default function PulseHeader() {
  return (
    <header className="flex flex-col items-start justify-start border-b border-white/10">
      <div className="flex items-center ml-5 h-[25px]">
        <div className="flex gap-4 items-center ">
          <AppTooltip content="Settings">
            <GearIcon className="w-3 h-3 text-white/80" />
          </AppTooltip>

          <div className="w-[1px] h-[16px] bg-white/20" />
          <AppTooltip content="Watchlist">
            <StarIcon className="w-3.5 h-3.5 text-white/80" />
          </AppTooltip>

          <AppTooltip content="Active Positions">
            <ChartLineIcon className="w-3.5 h-3.5 text-white/80" />
          </AppTooltip>

          <div className="w-[1px] h-[16px] bg-white/20" />
        </div>
      </div>
    </header>
  );
}

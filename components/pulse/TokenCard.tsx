"use client";

import { memo, useEffect, useRef, useState } from "react";
import clsx from "clsx";
import {
  TooltipRoot,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/Tooltip";
import { bondingColor } from "@/utils/bonding";
import { BondingRing } from "../ui/BondingRing";

import {
  Copy,
  User,
  Users,
  Trophy,
  Crown,
  ArrowsDownUp,
  Lightning,
  Target,
  Ghost,
  Stack,
  MagnifyingGlass,
  ShareNetwork,
  ChefHat,
  EyeSlashIcon,
} from "@phosphor-icons/react";
import { Token } from "@/types/token";
import { useElapsedTime } from "@/hooks/useElapsedTime";
import { marketCapColor } from "@/utils/tokenStyles";
import { formatCompactUSD } from "@/utils/format";
import { buyPressurePercent } from "@/utils/tokenMetrics";

function shorten(addr: string) {
  return `${addr.slice(0, 3)}...${addr.slice(-3)}`;
}

function TokenCard({
  token,
  column,
}: {
  token: Token;
  column: "NEW" | "FINAL" | "MIGRATED";
}) {
  const prevPrice = useRef(token.price);
  const [flash, setFlash] = useState<"up" | "down" | null>(null);
  const seconds = useElapsedTime(token.updatedAt);
  const bonding = token.bondingPercentage;
  const bondColor = bondingColor(bonding);
  const livePressure = Math.min(100, Math.max(5, Math.abs(token.txDelta) * 8));

  useEffect(() => {
    if (token.price > prevPrice.current) setFlash("up");
    else if (token.price < prevPrice.current) setFlash("down");
    prevPrice.current = token.price;
    const t = setTimeout(() => setFlash(null), 300);
    return () => clearTimeout(t);
  }, [token.price]);

  return (
    <TooltipRoot>
      <TooltipTrigger asChild>
        <div
          className={clsx(
            "group relative w-full border-b border-white/5 px-[10px] py-[8px] transition-colors",
            flash === "up" && "bg-green-500/10",
            flash === "down" && "bg-red-500/10",
            !flash && "bg-[#0f1015] hover:bg-white/5"
          )}
        >
          <TooltipContent
            side="top"
            align="center"
            sideOffset={6}
            style={{ zIndex: 9999 }}
            className={clsx(
              "text-[13px] font-medium px-[6px] py-[2px] rounded",
              "bg-[#111217] backdrop-blur-sm ",
              bondColor === "red" && "text-red-400 ",
              bondColor === "yellow" && "text-yellow-400 ",
              bondColor === "green" && "text-emerald-400 "
            )}
          >
            Bonding: {bonding.toFixed(2)}%
          </TooltipContent>

          <div className="flex gap-[10px]">
            {/* IMAGE COLUMN */}
            <div className="flex flex-col items-center gap-[2px] shrink-0">
              <div className="relative w-[74px] h-[74px]">
                <div className="relative w-[74px] h-[74px]">
                  <BondingRing
                    baseColor={bondColor}
                    livePercent={livePressure}
                  />

                  <div className="absolute inset-[4px] rounded-[6px] overflow-hidden bg-black z-[1]">
                    {token.image && (
                      <img
                        src={token.image}
                        alt={token.symbol}
                        className="w-full h-full object-cover p-0.4"
                        draggable={false}
                      />
                    )}
                  </div>
                </div>
              </div>

              <button
                onClick={() => navigator.clipboard.writeText(token.id)}
                className="text-[13px] text-white/40 hover:text-blue-600"
              >
                {shorten(token.id)}
              </button>
            </div>

            {/* CONTENT */}
            <div className="flex flex-col flex-1  min-w-0">
              {/* ROW 1 — NAME + MC */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-[5px] min-w-0">
                  <span className="text-[17px] font-medium truncate">
                    {token.name}
                  </span>
                  <Copy
                    size={12}
                    className="text-white/40 hover:text-white cursor-pointer"
                    onClick={() => navigator.clipboard.writeText(token.name)}
                  />
                </div>
                <div className="flex items-center gap-[4px] text-[13px]">
                  <span className="text-white/40">MC</span>
                  <span
                    className={clsx(
                      "font-medium text-[17px]",
                      marketCapColor(token.marketCap, column)
                    )}
                  >
                    ${formatCompactUSD(token.marketCap)}
                  </span>
                </div>
              </div>

              {/* ROW 2 — TIMER + ICONS + V */}
              <div className="flex items-center justify-between text-[15px]">
                <div className="flex items-center gap-[10px] text-emerald-400">
                  {seconds}s
                  <User size={14} />
                  <ShareNetwork size={14} />
                  <MagnifyingGlass size={14} />
                  <span className="ml-[4px] flex items-center gap-[6px] text-white/60">
                    <Users size={14} />1
                    <ArrowsDownUp size={14} />0
                    <Trophy size={14} />0
                    <span className="flex items-center gap-[2px]">
                      <Crown size={15} className=" text-yellow-400" />
                      0/44
                    </span>
                  </span>
                </div>

                <span className="text-white/60 text-[11px] flex items-baseline gap-1">
                  V
                  <div className="text-[16px] text-white">
                    ${formatCompactUSD(token.volume24h)}
                  </div>
                </span>
              </div>

              {/* ROW 3 — RIGHT METRICS ONLY */}
              <div className="flex justify-end text-[11px] text-white/60">
                <div className="flex items-center gap-[8px]">
                  {/* F icon */}F{/* Solana icon + value */}
                  <span className="flex items-center gap-[3px]">
                    <img
                      src="/solana.png"
                      alt="sol"
                      className="w-[20px] h-[20px]"
                      draggable={false}
                    />
                    <span>0.02</span>
                  </span>
                  {/* TX */}
                  <span className="flex items-center gap-[3px]">
                    <span className="text-white/40">TX</span>
                    <span>5</span>
                  </span>
                  {/* Activity slider */}
                  <div className="w-[20px] h-[2px] rounded-full bg-red-500/70 overflow-hidden">
                    <div
                      className="h-full bg-emerald-400 transition-[width] duration-300"
                      style={{
                        width: `${buyPressurePercent(
                          token.txCount,
                          token.txDelta
                        )}%`,
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* ROW 4 — PILLS + SOL BUTTON */}
              <div className="flex items-center justify-between text-[12px]">
                <div className="flex items-center gap-[4px]">
                  <span className="flex items-center gap-[4px] h-[22px] px-[8px] rounded-full border border-white/5 text-[13px]">
                    <User size={13} className="text-emerald-400" />
                    <span className="text-emerald-400">0%</span>
                  </span>

                  <span className="flex items-center gap-[4px] h-[22px] px-[8px] rounded-full border border-white/5 text-[13px]">
                    <ChefHat size={13} className="text-red-400" />
                    <span className="text-red-400">0% · 1d</span>
                  </span>

                  <span className="flex items-center gap-[4px] h-[22px] px-[8px] rounded-full border border-white/5 text-[13px]">
                    <Target size={13} className="text-emerald-400" />
                    <span className="text-emerald-400">0%</span>
                  </span>

                  <span className="flex items-center gap-[4px] h-[22px] px-[8px] rounded-full border border-white/5 text-[13px]">
                    <Ghost size={13} className="text-emerald-400" />
                    <span className="text-emerald-400">0%</span>
                  </span>

                  <span className="flex items-center gap-[4px] h-[22px] px-[8px] rounded-full border border-white/5 text-[13px]">
                    <Stack size={13} className="text-red-400" />
                    <span className="text-red-400">0%</span>
                  </span>
                </div>

                <button className="max-lg:hidden flex items-center gap-[4px] h-[24px] px-[8px] rounded-full bg-[#526FFF] text-black text-[13px] font-medium">
                  <Lightning size={13} weight="fill" />0 SOL
                </button>
              </div>
            </div>
          </div>
        </div>
      </TooltipTrigger>
    </TooltipRoot>
  );
}

export default memo(TokenCard);

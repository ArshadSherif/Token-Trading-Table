"use client";

import { memo, useEffect, useRef, useState } from "react";
import clsx from "clsx";
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
  CurrencyCircleDollar,
  ChefHat,
} from "@phosphor-icons/react";
import { Token } from "@/types/token";
import { useElapsedTime } from "@/hooks/useElapsedTime";

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

  useEffect(() => {
    if (token.price > prevPrice.current) setFlash("up");
    else if (token.price < prevPrice.current) setFlash("down");
    prevPrice.current = token.price;
    const t = setTimeout(() => setFlash(null), 300);
    return () => clearTimeout(t);
  }, [token.price]);

  return (
    <div
      className={clsx(
        "w-full border-b border-white/5 px-[10px] py-[8px] transition-colors",
        flash === "up" && "bg-green-500/10",
        flash === "down" && "bg-red-500/10",
        !flash && "bg-[#0f1015] hover:bg-white/5"
      )}
    >
      <div className="flex gap-[10px]">
        {/* IMAGE COLUMN */}
        <div className="flex flex-col items-center gap-[2px] shrink-0">
          <div className="w-[74px] h-[74px] rounded-l border border-white/20 overflow-hidden bg-black">
            {token.image && (
              <img
                src={token.image}
                alt={token.symbol}
                className="w-full h-full object-cover"
                draggable={false}
              />
            )}
          </div>

          <button
            onClick={() => navigator.clipboard.writeText(token.id)}
            className="text-[13px] text-white/40 hover:text-blue-600"
          >
            {shorten(token.id)}
          </button>
        </div>

        {/* CONTENT */}
        <div className="flex flex-col flex-1 gap-[4px] min-w-0">
          {/* ROW 1 — NAME + MC */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-[5px] min-w-0">
              <span className="text-[13px] font-medium truncate">
                {token.name}
              </span>
              <Copy
                size={12}
                className="text-white/40 hover:text-white cursor-pointer"
                onClick={() => navigator.clipboard.writeText(token.name)}
              />
            </div>

            <div className="flex items-center gap-[4px] text-[11px]">
              <span className="text-white/40">MC</span>
              <span
                className={clsx(
                  "font-medium",
                  column === "NEW" ? "text-sky-400" : "text-white"
                )}
              >
                ${token.marketCap.toLocaleString()}
              </span>
            </div>
          </div>

          {/* ROW 2 — TIMER + ICONS + V */}
          <div className="flex items-center justify-between text-[11px]">
            <div className="flex items-center gap-[6px] text-emerald-400">
              {seconds}s
              <User size={12} />
              <ShareNetwork size={12} />
              <MagnifyingGlass size={12} />
              <span className="ml-[4px] flex items-center gap-[6px] text-white/60">
                <Users size={12} />1
                <ArrowsDownUp size={12} />0
                <Trophy size={12} />0
                <span className="flex items-center gap-[2px] text-yellow-400">
                  <Crown size={12} weight="fill" />
                  0/44
                </span>
              </span>
            </div>

            <span className="text-white/60">
              V ${token.volume24h.toLocaleString()}
            </span>
          </div>

          {/* ROW 3 — RIGHT METRICS ONLY */}
          <div className="flex justify-end text-[11px] text-white/60">
            <div className="flex items-center gap-[6px]">
              <CurrencyCircleDollar size={12} />
              0.123 ◎ 0.02 TX 5
              <div className="w-[18px] h-[2px] rounded-full bg-gradient-to-r from-green-400 to-red-400" />
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

            <button className="max-lg:hidden flex items-center gap-[4px] h-[24px] px-[8px] rounded-full bg-sky-500 text-black text-[13px] font-medium">
              <Lightning size={13} weight="fill" />0 SOL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(TokenCard);

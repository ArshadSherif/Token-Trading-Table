// src/components/TokenCard.tsx
"use client";

import { memo, useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { Token } from "@/types/token";
import { useElapsedTime } from "@/hooks/useElapsedTime";

function TokenCard({ token }: { token: Token }) {
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
        " w-full flex flex-col border-b border-white/5 transition-colors",
        flash === "up" && "bg-green-500/10",
        flash === "down" && "bg-red-500/10",
        !flash && "bg-[#0f1015] hover:bg-white/5"
      )}
    >
      {/* TOP */}
      <div className="flex items-center gap-[12px] px-[12px] pt-[10px] pb-[4px]">
        {/* IMAGE */}
        <div className="w-[70px] h-[70px] rounded-[8px] shrink-0 overflow-hidden bg-white/10">
          {token.image && (
            <img
              src={token.image}
              alt={token.symbol}
              className="w-full h-full object-cover"
              draggable={false}
              loading="lazy"
            />
          )}
        </div>

        {/* NAME + TIMER */}
        <div className="flex flex-col flex-1 gap-[4px] min-w-0">
          <div className="text-[14px] font-medium text-white truncate">
            {token.name}
          </div>
          <div className="text-[12px] text-emerald-400">{seconds}s</div>
        </div>

        {/* PRICE + CHANGE */}
        <div className="flex flex-col items-end gap-[4px] shrink-0">
          <div className="text-[14px] font-medium text-white">
            ${token.price.toFixed(6)}
          </div>
          <div
            className={clsx(
              "text-[12px]",
              token.priceChange24h > 0 && "text-green-400",
              token.priceChange24h < 0 && "text-red-400",
              token.priceChange24h === 0 && "text-white/50"
            )}
          >
            {token.priceChange24h.toFixed(2)}%
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="flex gap-[6px] px-[12px] pb-[10px] text-[12px] text-white/60">
        <span>V ${token.volume24h.toLocaleString()}</span>
        <span>MC ${token.marketCap.toLocaleString()}</span>
      </div>
    </div>
  );
}

export default memo(TokenCard);

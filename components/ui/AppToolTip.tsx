"use client";

import {
  TooltipRoot,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/Tooltip";

export function AppTooltip({
  content,
  children,
}: {
  content: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <TooltipRoot>
      <TooltipTrigger asChild>
        <span className="cursor-pointer inline-flex">{children}</span>
      </TooltipTrigger>

      <TooltipContent
        side="top"
        align="center"
        sideOffset={6}
        className="
          z-[2000]
          rounded-md
          bg-[#111217]
          border border-white/10
          px-[8px] py-[4px]
          text-[12px] text-white/80
          shadow-lg
        "
      >
        {content}
      </TooltipContent>
    </TooltipRoot>
  );
}

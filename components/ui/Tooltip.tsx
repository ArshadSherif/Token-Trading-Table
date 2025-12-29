"use client";

import * as Tooltip from "@radix-ui/react-tooltip";

export function TooltipRoot({ children }: { children: React.ReactNode }) {
  return (
    <Tooltip.Provider delayDuration={80}>
      <Tooltip.Root>{children}</Tooltip.Root>
    </Tooltip.Provider>
  );
}

export const TooltipTrigger = Tooltip.Trigger;

export function TooltipContent(
  props: React.ComponentProps<typeof Tooltip.Content>
) {
  return (
    <Tooltip.Portal container={document.body}>
      <Tooltip.Content {...props} />
    </Tooltip.Portal>
  );
}

"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { WalletIcon } from "@phosphor-icons/react";
import { useState } from "react";
import WalletDropdownSkeleton from "./WalletDropDownSkeleton";


type WalletDropdownProps = {
  walletCount: number;
  balance: number | string;
  chainIconSrc: string;
};

export default function WalletDropdown({
  walletCount,
  balance,
  chainIconSrc,
}: WalletDropdownProps) {
  const [open, setOpen] = useState(false);
  return (
    <DropdownMenu.Root modal open={open} onOpenChange={setOpen}>
      <DropdownMenu.Trigger asChild>
        <button className="flex items-center gap-[5px] h-[32px] px-[14px] rounded-full border border-white/10 hover:bg-white/10 transition-colors">
          <WalletIcon size={16} color="white" />
          <span className="text-[15px] text-white/70">{walletCount}</span>

          <img
            src={chainIconSrc}
            alt="Chain"
            className="block w-[16px] h-[16px]"
          />

          <span className="text-[15px] text-white/70">{balance}</span>
          <ChevronDownIcon className="text-white/70 w-5 h-5" />
        </button>
      </DropdownMenu.Trigger>

      {open && <div className="fixed inset-0 bg-black/40 z-[90]" />}

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="end"
          sideOffset={8}
          className="bg-[#111217] border border-white/15 rounded-xl p-[6px] shadow-2xl z-[100]"
        >
          <WalletDropdownSkeleton />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

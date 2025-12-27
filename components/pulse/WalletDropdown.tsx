"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { WalletIcon } from "@phosphor-icons/react";

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
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="flex items-center gap-[8px] h-[32px] px-[14px] rounded-full border border-white/10 hover:bg-white/10 transition-colors">
          <WalletIcon size={16} color="white" />
          <span className="text-[15px] text-white/70">{walletCount}</span>

          <img
            src={chainIconSrc}
            alt="Chain"
            className="block w-[16px] h-[16px] opacity-100"
          />

          <span className="text-[15px] text-white/70">{balance}</span>
          <ChevronDownIcon className="text-white/70 w-5 h-5" />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="end"
          sideOffset={8}
          className="bg-[#111217] border border-white/10 rounded-md p-[6px] shadow-lg z-[100]"
        >
          <DropdownMenu.Item className="menu-item">Wallet 1</DropdownMenu.Item>
          <DropdownMenu.Item className="menu-item">Wallet 2</DropdownMenu.Item>

          <DropdownMenu.Separator className="h-[1px] bg-white/10 my-[6px]" />

          <DropdownMenu.Item className="menu-item text-red-400">
            Disconnect
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

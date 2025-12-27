"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {
  QuestionMarkCircledIcon,
  ChevronDownIcon,
  GearIcon,
  StarIcon,
  BellIcon,
  SpeakerLoudIcon,
} from "@radix-ui/react-icons";

import { WalletIcon } from "@phosphor-icons/react";

export default function PulseTopBar() {
  return (
    <div className="w-full h-[55px] flex items-center  border-b border-white/10">
      {/* LEFT SECTION */}
      <div className="flex items-center gap-[16px]">
        <span className="text-white text-[20px] font-medium">Pulse</span>

        <div className="flex items-center gap-[8px]">
          <div className="w-[32px] h-[32px] rounded-full bg-white/10 flex items-center justify-center">
            <img src="/solana.png" alt="Solana" />
          </div>

          <div className="w-[32px] h-[32px] rounded-full bg-white/5 flex items-center justify-center opacity-60">
            <img src="/bnb.png" alt="BNB" />
          </div>
        </div>
      </div>

      <div className="flex-1" />

      {/* RIGHT SECTION */}
      <div className="flex items-center gap-[14px]">
        <IconButton>
          <QuestionMarkCircledIcon className="w-5 h-5" />
        </IconButton>

        {/* Display dropdown */}
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button className="flex items-center gap-[8px] h-[32px] px-[14px] rounded-full bg-white/10 hover:bg-white/15 transition-colors">
              <span className="text-[15px] text-white font-medium">
                Display
              </span>
              <ChevronDownIcon className="text-white w-5 h-5" />
            </button>
          </DropdownMenu.Trigger>

          <DropdownMenu.Portal>
            <DropdownMenu.Content
              align="end"
              sideOffset={8}
              className="bg-[#111217] border border-white/10 rounded-md p-[6px] shadow-lg"
            >
              <MenuItem>Compact</MenuItem>
              <MenuItem>Comfortable</MenuItem>
              <MenuItem>Dense</MenuItem>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>

        {/* ICONS */}
        <IconButton>
          <StarIcon className="w-5 h-5" />
        </IconButton>
        <IconButton>
          <BellIcon className="w-5 h-5" />
        </IconButton>
        <IconButton>
          <SpeakerLoudIcon className="w-5 h-5" />
        </IconButton>
        <IconButton>
          <GearIcon className="w-5 h-5" />
        </IconButton>

        {/* WALLET DROPDOWN */}
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button className="flex items-center gap-[8px] h-[32px] px-[14px] rounded-full border border-white/10 hover:bg-white/10 transition-colors">
              {/* <span className="text-[15px] text-white">Wallet</span> */}
              <WalletIcon size={16} color="white" />
              <span className="text-[15px] text-white/70">1</span>
              <img
                src="/solana.png"
                alt="Solana"
                className="w-[16px] h-[16px] opacity-100"
              />

              <span className="text-[15px] text-white/70">0</span>
              <ChevronDownIcon className="text-white/70 w-5 h-5" />
            </button>
          </DropdownMenu.Trigger>

          <DropdownMenu.Portal>
            <DropdownMenu.Content
              align="end"
              sideOffset={8}
              className="bg-[#111217] border border-white/10 rounded-md p-[6px] shadow-lg"
            >
              <MenuItem>Wallet 1</MenuItem>
              <MenuItem>Wallet 2</MenuItem>
              <DropdownMenu.Separator className="h-[1px] bg-white/10 my-[6px]" />
              <MenuItem className="text-red-400">Disconnect</MenuItem>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>
    </div>
  );
}

/* ---------------- helpers ---------------- */

function IconButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="w-[32px] h-[32px] flex items-center justify-center rounded-full hover:bg-white/10 transition-colors text-white/80">
      {children}
    </button>
  );
}

function MenuItem({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <DropdownMenu.Item
      className={`px-[10px] py-[8px] text-[15px] rounded cursor-pointer outline-none hover:bg-white/10 focus:bg-white/15 ${className}`}
    >
      {children}
    </DropdownMenu.Item>
  );
}

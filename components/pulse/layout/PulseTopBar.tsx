"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {
  QuestionMarkCircledIcon,
  ChevronDownIcon,
} from "@radix-ui/react-icons";

import {
  BookmarkIcon,
  KeyboardIcon,
  ListBulletsIcon,
  SpeakerHighIcon,
} from "@phosphor-icons/react";

import { useState } from "react";
import DisplayDropdownSkeleton from "@/components/ui/skeletons/DisplayDropDownSkeleton";
import WalletDropdown from "@/components/ui/skeletons/WalletDropdown";
import { AppTooltip } from "@/components/ui/AppToolTip";
import { TbSettingsCog } from "react-icons/tb";

export default function PulseTopBar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full h-[40px] flex items-center">
      <div className="flex items-center gap-[16px]">
        <span className="text-white text-[20px] font-medium">Pulse</span>

        <div className="flex items-center gap-[8px]">
          <AppTooltip content="Solana">
            <div className="w-[32px] h-[32px] rounded-full bg-white/10 flex items-center justify-center">
              <img src="/solana.png" alt="Solana" />
            </div>
          </AppTooltip>

          <AppTooltip content="BNB">
            <div className="w-[32px] h-[32px] rounded-full bg-white/5 flex items-center justify-center opacity-60">
              <img src="/bnb.png" alt="BNB" />
            </div>
          </AppTooltip>
        </div>
      </div>

      <div className="flex-1" />

      <div className="flex items-center gap-[14px]">
        <AppTooltip content="Help with Pulse Filters,Settings">
          <IconButton>
            <QuestionMarkCircledIcon className="w-4.5 h-4.5 text-white/50" />
          </IconButton>
        </AppTooltip>

        <DropdownMenu.Root modal open={open} onOpenChange={setOpen}>
          <DropdownMenu.Trigger asChild>
            <button className="flex items-center gap-[6px] h-[32px] px-[14px] rounded-full bg-white/10 hover:bg-white/15 transition-colors">
              <ListBulletsIcon size={19} weight="bold" className="text-white" />
              <span className="text-[15px] text-white font-medium">
                Display
              </span>
              <ChevronDownIcon className="text-white w-5 h-5" />
            </button>
          </DropdownMenu.Trigger>

          {open && <div className="fixed inset-0 bg-black/40  z-[90]" />}

          <DropdownMenu.Portal>
            <DropdownMenu.Content
              align="end"
              sideOffset={8}
              className="bg-[#111217] border border-white/15 rounded-xl p-[6px] shadow-2xl z-[100]"
            >
              <DisplayDropdownSkeleton />
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
        <AppTooltip content="Blacklist dev,handle,keywords">
          <IconButton>
            <BookmarkIcon className="w-5 h-5" />
          </IconButton>
        </AppTooltip>
        <AppTooltip content="Pulse hotkeys">
          <IconButton>
            <KeyboardIcon className="w-5 h-5" />
          </IconButton>
        </AppTooltip>
        <AppTooltip content="Alerts">
          <IconButton>
            <SpeakerHighIcon className="w-4 h-4" />
          </IconButton>
        </AppTooltip>

        <AppTooltip content="Snipe Settings">
          <IconButton>
            <TbSettingsCog className="w-4 h-4" />
          </IconButton>
        </AppTooltip>
        <AppTooltip content="Active wallets">
          <WalletDropdown
            walletCount={1}
            balance={0}
            chainIconSrc="/solana.png"
          />
        </AppTooltip>
      </div>
    </div>
  );
}


function IconButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="w-[32px] h-[32px] flex items-center justify-center rounded-full hover:bg-white/10 transition-colors text-white/80">
      {children}
    </button>
  );
}


"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { FaBitcoin, FaEthereum } from "react-icons/fa";
import { SiSolana } from "react-icons/si";
import {
  HamburgerMenuIcon,
  ChevronDownIcon,
  TwitterLogoIcon,
  DiscordLogoIcon,
} from "@radix-ui/react-icons";

import {
  Compass,
  Pulse,
  GasPump,
  Database,
  PillIcon,
  MoneyIcon,
  WalletIcon,
  ChartBarIcon,
  LinkIcon,
  BrowserIcon,
  BellIcon,
  GearIcon,
  PaletteIcon,
} from "@phosphor-icons/react";
import WalletDropdown from "@/components/ui/skeletons/WalletDropdown";
import Divider from "@/components/ui/Divider";
import IconButton from "@/components/ui/IconButton";
import MenuItem from "@/components/ui/MenuItem";
import Stat from "@/components/ui/Stat";
import Price from "@/components/ui/Price";
import NavItem from "@/components/ui/NavItem";

export default function PulseFooter() {
  return (
    <footer className="shrink-0 w-full h-[38px] border-t border-white/10 bg-[#06070b]">
      <div className="flex h-full items-center justify-between px-[12px] text-[12px] text-white/70">
        {/* LEFT SIDE  */}
        <div className="flex items-center">
          {/* PRESET */}
          <div className="flex items-center gap-[6px]">
            <button className="flex items-center h-[22px] px-[8px] rounded bg-blue-500/20 text-blue-400 text-[12px] font-semibold whitespace-nowrap leading-none">
              <HamburgerMenuIcon />
              PRESET 1
            </button>
          </div>

          <Divider />

          {/* WALLET */}
          <div className="scale-[0.85] origin-left -mr-[16px]">
            <WalletDropdown
              walletCount={1}
              balance={0}
              chainIconSrc="/solana.png"
            />
          </div>

          <Divider />

          {/* NAV ICONS */}
          <div className="flex items-center gap-[14px]">
            <GearIcon />
            <NavItem icon={<WalletIcon />} label="Wallet" />
            <NavItem icon={<TwitterLogoIcon />} label="Twitter" />
            <NavItem icon={<Compass size={16} />} label="Discover" />
            <NavItem icon={<Pulse size={16} />} label="Pulse" />
            <NavItem icon={<ChartBarIcon size={16} />} label="PnL" />
          </div>

          <Divider />

          {/* COLOR PILLS */}
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <div className="p-[1px] rounded-full bg-gradient-to-r from-green-400 via-orange-400 to-lime-400">
                <button className="flex items-center gap-[4px] h-[22px] px-[8px] rounded-full bg-[#0f1015]">
                  <PillIcon size={14} />
                  <MoneyIcon size={14} />
                </button>
              </div>
            </DropdownMenu.Trigger>

            <DropdownMenu.Content className="z-[1000] bg-[#111217] border border-white/10 rounded-md p-4" />
          </DropdownMenu.Root>

          <Divider />

          {/* TOKEN / MARKET */}
          <div className="flex items-center gap-[10px]">
            <Price
              icon={<FaBitcoin />}
              value="$87.5K"
              color="text-yellow-600"
            />
            <Price icon={<FaEthereum />} value="$2926" color="text-blue-800" />
            <Price icon={<SiSolana />} value="$123.09" color="text-green-400" />
          </div>
        </div>

        {/*RIGHT SIDE */}
        <div className="flex items-center">
          <div className="flex items-center gap-[10px]">
            <div className="flex items-center gap-[8px] ml-[6px] text-white/90">
              <Stat icon={<LinkIcon size={18} />} value="50.6K" />
              <Stat icon={<GasPump size={18} />} value="0.026" />
              <Stat icon={<Database size={18} />} value="0.028" />
            </div>
          </div>
          <Divider />
          {/* CONNECTION + GLOBAL */}
          <div className="flex items-center gap-[8px]">
            <div className="flex items-center gap-[6px] px-[8px] h-[22px] rounded bg-green-500/20 text-green-400 whitespace-nowrap leading-none">
              <span className="w-[8px] h-[8px] rounded-full bg-green-300 shrink-0" />
              <span className="text-[12px] font-medium leading-none">
                Connection is stable
              </span>
            </div>

            <DropdownMenu.Root>
              <DropdownMenu.Trigger asChild>
                <button className="flex font-bold items-center gap-[4px] px-[6px] h-[26px] rounded hover:bg-white/10">
                  GLOBAL
                  <ChevronDownIcon />
                </button>
              </DropdownMenu.Trigger>

              <DropdownMenu.Content className="z-[1000] bg-[#111217] border border-white/10 rounded-md p-[6px]">
                <MenuItem>Global</MenuItem>
                <MenuItem>Asia</MenuItem>
                <MenuItem>Europe</MenuItem>
              </DropdownMenu.Content>
            </DropdownMenu.Root>
          </div>

          <Divider />

          {/* UTIL ICONS */}
          <div className="flex items-center gap-[14px]">
            <BrowserIcon size={18} weight="bold" />

            <BellIcon size={18} weight="bold" />

            <PaletteIcon size={18} weight="bold" />
          </div>

          <Divider />

          {/* RIGHT LINKS */}
          <div className="flex items-center gap-[12px] overflow-x-auto pr-[6px] no-scrollbar">
            <IconButton>
              <DiscordLogoIcon />
            </IconButton>
            <IconButton>
              <TwitterLogoIcon />
            </IconButton>
            <button className="hover:text-white">Docs</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

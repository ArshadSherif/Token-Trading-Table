"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {
  HamburgerMenuIcon,
  GearIcon,
  GlobeIcon,
  BellIcon,
  ChevronDownIcon,
  LayoutIcon,
  TwitterLogoIcon,
  DiscordLogoIcon,
} from "@radix-ui/react-icons";

import {
  Wallet,
  Compass,
  Pulse,
  ChartBar,
  CoinVerticalIcon,
  GasPump,
  Database,
  PillIcon,
  MoneyIcon,
} from "@phosphor-icons/react";

import WalletDropdown from "./WalletDropdown";

export default function PulseFooter() {
  return (
    <footer className="shrink-0 w-full h-[44px] border-t border-white/10 bg-[#0f1015]">
      <div className="flex h-full items-center px-[12px] text-[12px] text-white/70">
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
          <NavItem icon={<GearIcon />} label="Wallet" />
          <NavItem icon={<TwitterLogoIcon />} label="Twitter" />
          <NavItem icon={<Compass size={16} />} label="Discover" />
          <NavItem icon={<Pulse size={16} />} label="Pulse" />
          <NavItem icon={<ChartBar size={16} />} label="PnL" />
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

          <DropdownMenu.Content className="z-[1000] bg-[#111217] border border-white/10 rounded-md p-4">
            {/* empty popup */}
          </DropdownMenu.Content>
        </DropdownMenu.Root>

        <Divider />

        {/* TOKEN / MARKET SECTION */}
        <div className="flex items-center gap-[10px]">
          <Price
            icon={<CoinVerticalIcon />}
            value="$87.5K"
            color="text-yellow-400"
          />
          <Price
            icon={<CoinVerticalIcon />}
            value="$2926"
            color="text-blue-400"
          />
          <Price icon={<Pulse />} value="$123.09" color="text-green-400" />

          <div className="flex items-center gap-[8px] ml-[6px]">
            <Stat icon={<Pulse size={14} />} value="50.6K" />
            <Stat icon={<GasPump size={14} />} value="0.026" />
            <Stat icon={<Database size={14} />} value="0.028" />
          </div>
        </div>

        <Divider />

        {/* CONNECTION + GLOBAL */}
        <div className="flex items-center gap-[8px]">
          <div className="flex items-center gap-[6px] px-[8px] h-[22px] rounded bg-green-500/20 text-green-400 whitespace-nowrap leading-none">
            <span className="w-[8px] h-[8px] rounded-full bg-green-400 shrink-0" />
            <span className="text-[12px] font-medium leading-none">
              Connection is stable
            </span>
          </div>

          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <button className="flex items-center gap-[4px] px-[6px] h-[24px] rounded hover:bg-white/10">
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
        <div className="flex items-center gap-[10px]">
          <IconButton>
            <LayoutIcon />
          </IconButton>
          <IconButton>
            <BellIcon />
          </IconButton>
          <IconButton>
            <GearIcon />
          </IconButton>
        </div>

        <Divider />

        {/* SCROLLABLE RIGHT */}
        <div className="flex items-center gap-[12px] overflow-x-auto  pr-[6px] no-scrollbar">
          <IconButton>
            <DiscordLogoIcon />
          </IconButton>
          <IconButton>
            <TwitterLogoIcon />
          </IconButton>
          <button className="hover:text-white">Docs</button>
        </div>
      </div>
    </footer>
  );
}

/* ---------- helpers ---------- */

function Divider() {
  return <div className="mx-[10px] w-[1px] h-[20px] bg-white/10" />;
}

function IconButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="relative w-[24px] h-[24px] flex items-center justify-center rounded hover:bg-white/10">
      {children}
      <span className="absolute -top-[2px] -right-[2px] w-[6px] h-[6px] bg-red-500 rounded-full" />
    </button>
  );
}

function NavItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button className="flex items-center gap-[6px] px-[4px] h-[24px] rounded hover:bg-white/10 relative">
      {icon}
      <span>{label}</span>
      <span className="absolute -top-[2px] -right-[2px] w-[6px] h-[6px] bg-red-500 rounded-full" />
    </button>
  );
}

function Price({
  icon,
  value,
  color,
}: {
  icon: React.ReactNode;
  value: string;
  color: string;
}) {
  return (
    <div className={`flex items-center gap-[4px] ${color}`}>
      {icon}
      <span>{value}</span>
    </div>
  );
}

function Stat({ icon, value }: { icon: React.ReactNode; value: string }) {
  return (
    <div className="flex items-center gap-[4px] text-white/70">
      {icon}
      <span>{value}</span>
    </div>
  );
}

function MenuItem({ children }: { children: React.ReactNode }) {
  return (
    <DropdownMenu.Item className="px-[8px] py-[6px] rounded hover:bg-white/10 cursor-pointer">
      {children}
    </DropdownMenu.Item>
  );
}

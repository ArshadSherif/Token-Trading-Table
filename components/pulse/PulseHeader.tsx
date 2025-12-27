"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {
  MagnifyingGlassIcon,
  ChevronDownIcon,
  StarIcon,
  BellIcon,
  PersonIcon,
} from "@radix-ui/react-icons";

const NAV_ITEMS = [
  { label: "Discover", active: false },
  { label: "Pulse", active: true },
  { label: "Trackers", active: false },
  { label: "Perpetuals", active: false },
  { label: "Yield", active: false },
  { label: "Vision", active: false },
  { label: "Portfolio", active: false },
  { label: "Rewards", active: false },
];

export default function PulseHeader() {
  return (
    <header className="sticky top-0 z-50 h-[64px] w-full border-b border-white/5 bg-background">
      <div className="mx-auto h-full px-3 sm:px-4 lg:px-6">
        <div className="flex h-full items-center justify-between gap-2">
          {/* LEFT */}
          <div className="flex items-center gap-3 shrink-0">
            {/* LOGO */}
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[36px] h-[36px] text-textPrimary"
            >
              <path
                d="M24.1384 17.3876H11.8623L18.0001 7.00012L24.1384 17.3876Z"
                fill="currentColor"
              />
              <path
                d="M31 29.0003L5 29.0003L9.96764 20.5933L26.0324 20.5933L31 29.0003Z"
                fill="currentColor"
              />
            </svg>

            {/* MOBILE MENU PLACEHOLDER */}
            <button className="md:hidden w-[32px] h-[32px] rounded-full bg-white/10 flex items-center justify-center">
              <ChevronDownIcon />
            </button>
          </div>

          {/* CENTER NAV */}
          <div className="hidden md:flex w-[560px] min-w-0 mr-auto overflow-hidden">
            <div className="flex overflow-x-auto no-scrollbar min-w-0">
              <div className="flex gap-[5px] items-center whitespace-nowrap">
                {NAV_ITEMS.map(({ label, active }) => (
                  <button
                    key={label}
                    className={`
            h-[32px] px-[8px] xl:px-[13px]
            rounded-[4px]
            text-[14px] font-medium
            ${active ? "text-blue-500 bg-blue-500/20" : "text-white"}
            hover:bg-blue-500/20 hover:text-blue-400
            [transition:none]
            hover:[transition:background-color_135ms_ease-in-out,color_135ms_ease-in-out]
          `}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            {/* SEARCH */}
            <button className="hidden sm:flex h-[32px] px-[8px] gap-[8px] items-center rounded-full border border-white/10 hover:bg-white/5">
              <MagnifyingGlassIcon className="w-[18px] h-[18px]" />
              <span className="hidden 2xl:block text-[12px] text-white/50 font-medium">
                Search by token or CA…
              </span>
              <div className="hidden 2xl:flex h-[20px] px-[8px] rounded-full border border-white/10 items-center">
                <span className="text-[12px]">/</span>
              </div>
            </button>

            {/* CHAIN */}
            <DropdownMenu.Root>
              <DropdownMenu.Trigger asChild>
                <button className="h-[32px] pl-[8px] pr-[6px] flex items-center gap-[6px] rounded-full border border-[rgba(20,241,149,0.1)] hover:brightness-125 transition-all active:scale-[0.96]">
                  <div className="w-[16px] h-[16px] rounded-full bg-green-400" />
                  <span className="text-[14px] font-medium">SOL</span>
                  <ChevronDownIcon className="w-[18px] h-[18px]" />
                </button>
              </DropdownMenu.Trigger>
            </DropdownMenu.Root>

            {/* DEPOSIT */}
            <button className="hidden sm:flex h-[32px] px-[12px] rounded-full bg-blue-500 hover:bg-blue-600 items-center">
              <span className="text-[14px] font-bold text-black">Deposit</span>
            </button>

            {/* ICONS */}
            <div className="hidden sm:flex items-center gap-2 lg:gap-4">
              <button className="w-[32px] h-[32px] rounded-full bg-white/10 flex items-center justify-center">
                <StarIcon className="w-[18px] h-[18px]" />
              </button>

              <button className="w-[32px] h-[32px] rounded-full bg-white/10 flex items-center justify-center">
                <BellIcon className="w-[18px] h-[18px]" />
              </button>

              <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                  <button className="h-[32px] px-[12px] rounded-full bg-white/10 flex items-center gap-[8px]">
                    <div className="hidden xl:flex items-center gap-[4px]">
                      <span className="text-[14px] font-semibold">0</span>
                      <div className="w-[1px] h-full bg-white/20" />
                      <span className="text-[14px] font-semibold">0</span>
                    </div>
                    <ChevronDownIcon className="w-[18px] h-[18px]" />
                  </button>
                </DropdownMenu.Trigger>
              </DropdownMenu.Root>
            </div>

            {/* AVATAR */}
            <button className="relative w-[32px] h-[32px] rounded-full bg-primaryStroke hover:bg-secondaryStroke/80 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full" />

              <div className="absolute left-[-2px] top-1/2 -translate-y-1/2">
                <div className="w-[16px] h-[16px] rounded-full bg-primaryStroke flex items-center justify-center">
                  <PersonIcon className="w-[12px] h-[12px]" />
                </div>
              </div>

              <div className="absolute -bottom-[2px] -right-[2px] w-[14px] h-[14px] rounded-full bg-background flex items-center justify-center">
                <div className="w-[8px] h-[8px] rounded-full bg-green-400" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

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
    <header className="sticky top-0 z-50 h-[64px] w-full border-b border-white/10 bg-background">
      <div className="mx-auto h-full px-3 sm:px-4 lg:px-6">
        <div className="flex h-full items-center justify-between gap-2">
          {/* LEFT */}
          <div className="flex items-center  shrink-0">
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
            <svg
              width="102"
              height="21"
              viewBox="0 0 103 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="max-w-[102px] hidden 2xl:block text-textPrimary"
            >
              <path
                d="M56.1914 18.3745V1.33447H59.7434L64.8074 15.3265L69.8714 1.33447H73.4234V18.3745H70.8314V5.89447L66.2474 18.3505H63.3674L58.7834 5.89447V18.3745H56.1914Z"
                fill="currentColor"
              ></path>
              <path
                d="M45.9362 18.7584C40.9922 18.7584 37.9922 15.3984 37.9922 9.87844C37.9922 4.35844 40.9922 0.950439 45.9362 0.950439C50.9282 0.950439 53.9042 4.35844 53.9042 9.87844C53.9042 15.3984 50.9282 18.7584 45.9362 18.7584ZM45.9362 16.3824C49.2482 16.3824 51.2162 13.9824 51.2162 9.87844C51.2162 5.77444 49.2482 3.32644 45.9362 3.32644C42.6482 3.32644 40.6802 5.77444 40.6802 9.87844C40.6802 13.9824 42.6482 16.3824 45.9362 16.3824Z"
                fill="currentColor"
              ></path>
              <path
                d="M33.1055 18.3745V1.33447H35.6975V18.3745H33.1055Z"
                fill="currentColor"
              ></path>
              <path
                d="M16.9023 18.3745L22.5663 9.83047L16.9503 1.33447H19.9983L24.1983 7.81447L28.3263 1.33447H31.3503L25.7343 9.78247L31.4223 18.3745H28.3743L24.1503 11.7985L19.9263 18.3745H16.9023Z"
                fill="currentColor"
              ></path>
              <path
                d="M0.980469 18.3745L7.12447 1.33447H10.4125L16.5565 18.3745H13.7965L12.2365 13.9345H5.27647L3.74047 18.3745H0.980469ZM6.09247 11.5825H11.4445L8.75647 3.80647L6.09247 11.5825Z"
                fill="currentColor"
              ></path>
              <path
                d="M99.2929 18.6624C97.0311 18.6624 95.5703 16.9661 95.5703 14.3116C95.5703 11.6571 97.0311 9.96069 99.2929 9.96069C101.539 9.96069 103 11.6571 103 14.3116C103 16.9661 101.539 18.6624 99.2929 18.6624ZM99.2929 17.6729C100.926 17.6729 101.916 16.4006 101.916 14.3116C101.916 12.2225 100.926 10.9502 99.2929 10.9502C97.6437 10.9502 96.6541 12.2225 96.6541 14.3116C96.6541 16.4006 97.6437 17.6729 99.2929 17.6729Z"
                fill="currentColor"
              ></path>
              <path
                d="M90.9961 18.4742V10.1494H91.8914L91.9385 11.7987C92.2684 10.6835 92.9438 10.1494 94.0276 10.1494H94.7501V11.1547H93.9962C92.7396 11.1547 92.0328 12.0186 92.0328 13.4008V18.4742H90.9961Z"
                fill="currentColor"
              ></path>
              <path
                d="M81.2461 18.4741V7.32202H85.1572C87.6075 7.32202 89.0525 8.57859 89.0525 10.6519C89.0525 12.7253 87.6075 13.9818 85.1572 13.9818H82.3142V18.4741H81.2461ZM82.3142 12.9452H85.1572C86.9792 12.9452 87.9216 12.1441 87.9216 10.6519C87.9216 9.14405 86.9792 8.35869 85.1572 8.35869H82.3142V12.9452Z"
                fill="currentColor"
              ></path>
            </svg>

            {/* MOBILE MENU PLACEHOLDER */}
            <button className="md:hidden w-[32px] h-[32px] rounded-full bg-white/10 flex items-center justify-center">
              <ChevronDownIcon />
            </button>
          </div>

          {/* CENTER NAV */}
          <div className="ml-2 hidden md:flex w-[680px] min-w-0 mr-auto overflow-hidden">
            <div className="flex overflow-x-auto no-scrollbar min-w-0">
              <div className="flex gap-[5px] items-center whitespace-nowrap">
                {NAV_ITEMS.map(({ label, active }) => (
                  <button
                    key={label}
                    className={`
            h-[32px] px-[8px] xl:px-[13px]
            rounded-[4px]
            text-[14px] font-medium
            ${active ? "text-blue-500" : "text-white"}
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
            <button className="hidden sm:flex h-[32px] px-[12px] rounded-full bg-[#526FFF] hover:bg-blue-600 items-center">
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

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import clsx from "clsx";
import {
  LightningIcon,
  CurrencyCircleDollarIcon,
  CoinIcon,
  ProhibitIcon,
} from "@phosphor-icons/react";


export default function TierDropdown({ label, active }: { label: string; active?: boolean }) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className={clsx(
            "px-[6px] py-[2px] text-[13px] rounded",
            active ? "text-blue-400" : "text-white/70",
            "hover:bg-white/10"
          )}
        >
          {label}
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content
        side="bottom"
        align="center"
        className="
          z-[1000]
          min-w-[140px]
          bg-[#0f1015]
          border border-white/10
          rounded-md
          p-[6px]
        "
      >
        <DropdownItem
          icon={<LightningIcon size={14} className="text-yellow-400" />}
          label="20%"
        />
        <DropdownItem
          icon={<CurrencyCircleDollarIcon size={14} className="text-emerald-400" />}
          label="0.001"
        />
        <DropdownItem
          icon={<CoinIcon size={14} className="text-yellow-300" />}
          label="0.01"
        />
        <DropdownItem
          icon={<ProhibitIcon size={14} className="text-red-400" />}
          label="Off"
        />
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}



function DropdownItem({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <DropdownMenu.Item
      className="
        flex items-center gap-[8px]
        px-[8px] py-[6px]
        text-[13px] text-white/80
        rounded
        cursor-pointer
        hover:bg-white/10
      "
    >
      <span className="w-[16px] flex justify-center">{icon}</span>
      <span>{label}</span>
    </DropdownMenu.Item>
  );
}


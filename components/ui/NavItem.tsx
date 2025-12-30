import React from "react";

type NavItemProps = {
  icon: React.ReactNode;
  label: string;
};

export default function NavItem({ icon, label }: NavItemProps) {
  return (
    <button className="flex items-center gap-[6px] px-[4px] h-[24px] rounded hover:bg-white/10 relative">
      {icon}
      <span>{label}</span>
      <span className="absolute -top-[2px] -right-[2px] w-[6px] h-[6px] bg-red-500 rounded-full" />
    </button>
  );
}

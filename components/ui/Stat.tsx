import React from "react";

type StatProps = {
  icon: React.ReactNode;
  value: string;
};

export default function Stat({ icon, value }: StatProps) {
  return (
    <div className="flex items-center gap-[4px] text-white/70">
      {icon}
      <span>{value}</span>
    </div>
  );
}

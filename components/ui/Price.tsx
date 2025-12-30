import React from "react";

type PriceProps = {
  icon: React.ReactNode;
  value: string;
  color: string;
};

export default function Price({ icon, value, color }: PriceProps) {
  return (
    <div className={`flex items-center gap-[4px] ${color}`}>
      {icon}
      <span>{value}</span>
    </div>
  );
}

import { GearIcon, StarIcon, ArrowTopRightIcon } from "@radix-ui/react-icons";

export default function PulseHeader() {
  return (
    <header className="flex flex-col items-start justify-start border-b border-white/10">
      <div className="flex items-center  ml-6 h-[25px]">
        <div className="flex gap-4 ">
          <GearIcon className="w-3.5 h-3.5 text-white/80" />

          {/* vertical divider */}
          <div className="w-[1px] h-[16px] bg-white/20" />

          <StarIcon className="w-3.5 h-3.5 text-white/80" />
          <ArrowTopRightIcon className="w-3.5 h-3.5 text-white/80" />

          {/* vertical divider */}
          <div className="w-[1px] h-[16px] bg-white/20" />
        </div>
      </div>
    </header>
  );
}

"use client";

import * as Dialog from "@radix-ui/react-dialog";
import clsx from "clsx";
import { X } from "@phosphor-icons/react";
import {
  RocketIcon,
  FireIcon,
  DogIcon,
  BagIcon,
  MoonIcon,
  CloudIcon,
  CubeIcon,
  FlameIcon,
  LeafIcon,
  PlanetIcon,
  LightningIcon,
  ChatIcon,
  TestTubeIcon,
  WaveformIcon,
} from "@phosphor-icons/react";

export default function FiltersModalWrapper({
  trigger,
}: {
  trigger: React.ReactNode;
}) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <FiltersModal />
    </Dialog.Root>
  );
}

function FiltersModal() {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black/50 z-[1000]" />

      <Dialog.Content
        className="
          fixed top-1/2 left-1/2 z-[1001]
          w-[720px] max-w-[95vw]
          -translate-x-1/2 -translate-y-1/2
          rounded-[12px]
          bg-[#0f1015]
          border border-white/10
          shadow-xl
          outline-none
        "
      >
        <div className="flex items-center justify-between px-[16px] py-[12px] border-b border-white/10">
          <Dialog.Title className="text-[16px] font-medium text-white">
            Filters
          </Dialog.Title>

          <Dialog.Close asChild>
            <button className="text-white/60 hover:text-white">
              <X size={16} />
            </button>
          </Dialog.Close>
        </div>

        <div className="flex gap-[20px] px-[16px] py-[10px] border-b border-white/10 text-[14px]">
          <Tab active>New Pairs</Tab>
          <Tab>Final Stretch</Tab>
          <Tab>Migrated</Tab>
        </div>

        <div className="grid grid-cols-2 gap-[12px] px-[16px] py-[12px]">
          <Input label="Search Keywords" />
          <Input label="Exclude Keywords" />
        </div>

        <div className="flex items-center gap-[20px] px-[16px] pt-[6px] text-[14px]">
          <SectionTab active>Protocols</SectionTab>
          <SectionTab>Audit</SectionTab>
          <SectionTab>$ Metrics</SectionTab>
          <SectionTab>Socials</SectionTab>
        </div>

        <div className="px-[16px] py-[12px]">
          <div className="flex items-center justify-between mb-[10px]">
            <span className="text-[13px] text-white/70">Protocols</span>
            <button className="text-[12px] px-[8px] py-[2px] rounded-full bg-white/10 hover:bg-white/20">
              Select All
            </button>
          </div>

          <div className="grid grid-cols-3 gap-[10px]">
            <ProtocolPill label="Pump" icon={<RocketIcon />} color="green" />
            <ProtocolPill label="Mayhem" icon={<FireIcon />} color="red" />
            <ProtocolPill label="Bonk" icon={<DogIcon />} color="orange" />
            <ProtocolPill label="Bags" icon={<BagIcon />} color="lime" />
            <ProtocolPill label="Moonshot" icon={<MoonIcon />} color="purple" />
            <ProtocolPill label="Heaven" icon={<CloudIcon />} color="gray" />
            <ProtocolPill label="Daos.fun" icon={<CubeIcon />} color="blue" />
            <ProtocolPill label="Candle" icon={<FlameIcon />} color="amber" />
            <ProtocolPill label="Believe" icon={<LeafIcon />} color="emerald" />
            <ProtocolPill
              label="Jupiter Studio"
              icon={<PlanetIcon />}
              color="orange"
            />
            <ProtocolPill
              label="Moonit"
              icon={<LightningIcon />}
              color="yellow"
            />
            <ProtocolPill label="Boop" icon={<ChatIcon />} color="cyan" />
            <ProtocolPill
              label="LaunchLab"
              icon={<TestTubeIcon />}
              color="teal"
            />
            <ProtocolPill
              label="Dynamic BC"
              icon={<WaveformIcon />}
              color="rose"
            />
          </div>
        </div>

        <div className="px-[16px] py-[12px]">
          <div className="flex items-center justify-between mb-[10px]">
            <span className="text-[13px] text-white/70">Quote Tokens</span>
            <button className="text-[12px] px-[8px] py-[2px] rounded-full bg-white/10 hover:bg-white/20">
              Unselect All
            </button>
          </div>

          <div className="flex gap-[10px]">
            <Pill>SOL</Pill>
            <Pill>USDC</Pill>
            <Pill>USD1</Pill>
          </div>
        </div>

        <div className="flex items-center justify-between px-[16px] py-[12px] border-t border-white/10">
          <div className="flex gap-[8px]">
            <FooterBtn>Import</FooterBtn>
            <FooterBtn>Export</FooterBtn>
            <FooterBtn>Share</FooterBtn>
          </div>

          <Dialog.Close asChild>
            <button className="px-[16px] h-[32px] rounded-full bg-blue-500 text-black font-medium">
              Apply All
            </button>
          </Dialog.Close>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  );
}

/* =========================
   HELPERS
========================= */

function Tab({ active, children }: any) {
  return (
    <button
      className={clsx(
        "pb-[6px]",
        active
          ? "text-white border-b-2 border-blue-500"
          : "text-white/50 hover:text-white"
      )}
    >
      {children}
    </button>
  );
}

function SectionTab({ active, children }: any) {
  return (
    <button
      className={clsx(
        active ? "text-white font-medium" : "text-white/50 hover:text-white"
      )}
    >
      {children}
    </button>
  );
}

function Input({ label }: { label: string }) {
  return (
    <div className="flex flex-col gap-[4px]">
      <span className="text-[13px] text-white/70">{label}</span>
      <input
        className="
          h-[34px] px-[10px]
          rounded-md
          bg-[#0b0c10]
          border border-white/10
          text-[14px]
          text-white
          placeholder:text-white/30
          outline-none
        "
        placeholder="keyword1, keyword2..."
      />
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <button className="px-[10px] h-[26px] rounded-full border border-white/10 text-[13px] text-white/80 hover:bg-white/10">
      {children}
    </button>
  );
}

function FooterBtn({ children }: { children: React.ReactNode }) {
  return (
    <button className="px-[12px] h-[30px] rounded-full bg-white/10 hover:bg-white/20 text-[13px]">
      {children}
    </button>
  );
}

function ProtocolPill({
  label,
  icon,
  color,
}: {
  label: string;
  icon: React.ReactNode;
  color:
    | "green"
    | "red"
    | "orange"
    | "lime"
    | "purple"
    | "gray"
    | "blue"
    | "amber"
    | "pink"
    | "emerald"
    | "yellow"
    | "cyan"
    | "teal"
    | "rose";
}) {
  const colorMap: Record<string, string> = {
    green: "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    red: "border-red-500/40 text-red-400 bg-red-500/10",
    orange: "border-orange-500/40 text-orange-400 bg-orange-500/10",
    lime: "border-lime-500/40 text-lime-400 bg-lime-500/10",
    purple: "border-purple-500/40 text-purple-400 bg-purple-500/10",
    gray: "border-white/20 text-white/70 bg-white/5",
    blue: "border-blue-500/40 text-blue-400 bg-blue-500/10",
    amber: "border-amber-500/40 text-amber-400 bg-amber-500/10",
    pink: "border-pink-500/40 text-pink-400 bg-pink-500/10",
    emerald: "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    yellow: "border-yellow-400/40 text-yellow-300 bg-yellow-400/10",
    cyan: "border-cyan-400/40 text-cyan-300 bg-cyan-400/10",
    teal: "border-teal-400/40 text-teal-300 bg-teal-400/10",
    rose: "border-rose-400/40 text-rose-300 bg-rose-400/10",
  };

  return (
    <button
      className={clsx(
        "flex items-center gap-[6px] h-[28px] px-[10px] rounded-full border text-[13px] hover:brightness-110 transition",
        colorMap[color]
      )}
    >
      <span className="flex items-center justify-center w-[16px] h-[16px]">
        {icon}
      </span>
      <span className="truncate">{label}</span>
    </button>
  );
}

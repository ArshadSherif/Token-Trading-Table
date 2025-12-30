"use client";

import { Token } from "@/types/token";
import TokenCard from "../tokens/TokenCard";
import TokenCardSkeleton from "../tokens/TokenCardSkeleton";
import ColumnHeader from "./ColumnHeader";
import ColumnHeaderSkeleton from "./ColumnHeaderSkeleton";

type ColumnSectionProps = {
  title: string;
  isLoading: boolean;
  tokens: Token[];
  column: "NEW" | "FINAL" | "MIGRATED";
};


export default function ColumnSection({
  title,
  isLoading,
    tokens,
  column
}: ColumnSectionProps) {
  return (
    <section className="flex flex-col h-full min-h-0 bg-[#111217] border border-white/10 rounded-[6px]">
      {isLoading ? <ColumnHeaderSkeleton /> : <ColumnHeader title={title} />}

      <div className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden scroll-dark">
        {isLoading
          ? Array.from({ length: 6 }).map((_, i) => (
              <TokenCardSkeleton key={i} />
            ))
          : tokens.map((t) => (
              <TokenCard key={t.id} token={t} column={column} />
            ))}
      </div>
    </section>
  );
}

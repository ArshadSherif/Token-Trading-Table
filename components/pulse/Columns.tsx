"use client";

import { useMemo } from "react";
import { useAppSelector } from "@/store/hooks";
import { makeSelectStageTokens } from "@/store/selector";
import { useTokenSocket } from "@/hooks/useTokenSocket";
import TokenCard from "./TokenCard";
import TokenCardSkeleton from "./TokenCardSkeleton";
import ColumnHeader from "./ColumnHeader";
import ColumnHeaderSkeleton from "./ColumnHeaderSkeleton";

function ColumnSection({
  title,
  isLoading,
  tokens,
}: {
  title: string;
  isLoading: boolean;
  tokens: any[];
}) {
  return (
    <section className="flex flex-col h-full bg-[#111217] border border-white/10">
      {/* HEADER */}
      {isLoading ? <ColumnHeaderSkeleton /> : <ColumnHeader title={title} />}

      {/* SCROLL AREA */}
      <div className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden">
        {isLoading
          ? Array.from({ length: 6 }).map((_, i) => (
              <TokenCardSkeleton key={i} />
            ))
          : tokens.map((t) => <TokenCard key={t.id} token={t} />)}
      </div>
    </section>
  );
}

export default function Columns() {
  useTokenSocket();

  const selectNew = useMemo(() => makeSelectStageTokens("NEW"), []);
  const selectFinal = useMemo(() => makeSelectStageTokens("FINAL"), []);
  const selectMigrated = useMemo(() => makeSelectStageTokens("MIGRATED"), []);

  const newTokens = useAppSelector(selectNew);
  const finalTokens = useAppSelector(selectFinal);
  const migratedTokens = useAppSelector(selectMigrated);

  const isLoading =
    newTokens.length === 0 &&
    finalTokens.length === 0 &&
    migratedTokens.length === 0;

  return (
    <div className="h-full w-full px-[24px] py-[24px]">
      <div className="grid grid-cols-3 gap-[2px] h-full">
        <ColumnSection
          title="New Pairs"
          isLoading={isLoading}
          tokens={newTokens}
        />
        <ColumnSection
          title="Final Stretch"
          isLoading={isLoading}
          tokens={finalTokens}
        />
        <ColumnSection
          title="Migrated"
          isLoading={isLoading}
          tokens={migratedTokens}
        />
      </div>
    </div>
  );
}

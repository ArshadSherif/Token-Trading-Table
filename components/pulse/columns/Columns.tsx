"use client";

import { useMemo } from "react";
import { useAppSelector } from "@/store/hooks";
import { makeSelectStageTokens } from "@/store/selector";
import { useTokenSocket } from "@/hooks/useTokenSocket";
import PulseTopBar from "../layout/PulseTopBar";
import ColumnSection from "./ColumnSection";

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
    <div className="h-full w-full px-[24px] pt-[20px] pb-0 flex flex-col">
      <PulseTopBar />

      <div className="grid grid-cols-3 gap-[12px] flex-1 min-h-0 mt-[12px]">
        <ColumnSection
          title="New Pairs"
          column="NEW"
          isLoading={isLoading}
          tokens={newTokens}
        />

        <ColumnSection
          title="Final Stretch"
          column="FINAL"
          isLoading={isLoading}
          tokens={finalTokens}
        />

        <ColumnSection
          title="Migrated"
          column="MIGRATED"
          isLoading={isLoading}
          tokens={migratedTokens}
        />
      </div>
    </div>
  );
}

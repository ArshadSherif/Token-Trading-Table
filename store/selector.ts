import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { TokenStage } from "@/types/token";

export const makeSelectStageTokens = (stage: TokenStage) =>
  createSelector(
    (state: RootState) => state.tokens.byStage[stage],
    (state: RootState) => state.tokens.byId,
    (ids, byId) => ids.map((id) => byId[id]).filter(Boolean)
  );

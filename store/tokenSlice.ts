import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Token, TokenStage } from "@/types/token";

type TokenState = {
  byId: Record<string, Token>;
  byStage: Record<TokenStage, string[]>;
};

const initialState: TokenState = {
  byId: {},
  byStage: {
    NEW: [],
    FINAL: [],
    MIGRATED: [],
  },
};

const tokenSlice = createSlice({
  name: "tokens",
  initialState,
  reducers: {
    upsertTokens(state, action: PayloadAction<readonly Token[]>) {
      for (const token of action.payload) {
        const prev = state.byId[token.id];

        state.byId[token.id] = token;

        // remove from old stage if stage changed
        if (prev && prev.stage !== token.stage) {
          state.byStage[prev.stage] = state.byStage[prev.stage].filter(
            (id) => id !== token.id
          );
        }

        // add to new stage if not present
        if (!state.byStage[token.stage].includes(token.id)) {
          state.byStage[token.stage].push(token.id);
        }
      }
    },

    updatePrice(state, action: PayloadAction<{ id: string; price: number }>) {
      const t = state.byId[action.payload.id];
      if (!t) return;

      t.price = action.payload.price;
      t.updatedAt = Date.now();
    },
  },
});

export const { upsertTokens, updatePrice } = tokenSlice.actions;
export default tokenSlice.reducer;

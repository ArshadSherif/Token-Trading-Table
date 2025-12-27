"use client";

import { useEffect } from "react";
import { upsertTokens, updatePrice } from "@/store/tokenSlice";
import { MockTokenSocket } from "@/lib/mockSocket";
import mockTokens from "@/mocks/tokens";
import { useAppDispatch } from "@/store/hooks";

export function useTokenSocket() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const socket = new MockTokenSocket(mockTokens);

    socket.onMessage((msg) => {
      if (msg.type === "SNAPSHOT") {
        dispatch(upsertTokens(msg.payload));
      } else if (msg.type === "PRICE_UPDATE") {
        dispatch(updatePrice(msg.payload));
      }
    });

    socket.connect(mockTokens);

    return () => socket.disconnect();
  }, [dispatch]);
}

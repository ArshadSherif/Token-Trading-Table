"use client";

import { useTokenSocket } from "@/hooks/useTokenSocket";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export default function TestSocketPage() {
  useTokenSocket();

  const tokens = useSelector((s: RootState) => s.tokens.byId);

  return <pre className="text-xs p-4">{JSON.stringify(tokens, null, 2)}</pre>;
}

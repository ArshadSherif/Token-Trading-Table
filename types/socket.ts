import { Token } from "./token";

export type SocketMessage =
  | {
      type: "SNAPSHOT";
      payload: Token[];
    }
  | {
      type: "PRICE_UPDATE";
      payload: { id: string; price: number };
    }
  | {
      type: "BONDING_UPDATE";
      payload: { id: string; bondingPercent: number };
    }
  | {
      type: "TX_UPDATE";
      payload: { id: string; txCount: number; txDelta: number };
    };


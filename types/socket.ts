import { Token } from "./token";

export type SocketMessage =
  | {
      type: "SNAPSHOT";
      payload: readonly Token[];
    }
  | {
      type: "PRICE_UPDATE";
      payload: {
        id: string;
        price: number;
      };
    };

import { Token } from "@/types/token";
import { SocketMessage } from "@/types/socket";

type Listener = (data: SocketMessage) => void;

export class MockTokenSocket {
  private listeners: Listener[] = [];
  private prices: Record<string, number> = {};
  private bonding: Record<string, number> = {};
  private txCount: Record<string, number> = {};
  private intervalId: number | null = null;

  constructor(tokens: Token[]) {
    for (const t of tokens) {
      this.prices[t.id] = t.price;
      this.bonding[t.id] = t.bondingPercentage;
      this.txCount[t.id] = t.txCount;
    }
  }

  connect(tokens: Token[]) {
    // SNAPSHOT (immutable)
    setTimeout(() => {
      this.emit({
        type: "SNAPSHOT",
        payload: tokens,
      });
    }, 300);

    this.intervalId = window.setInterval(() => {
      const ids = Object.keys(this.prices);
      if (!ids.length) return;

      const id = ids[Math.floor(Math.random() * ids.length)];

      /* ---------------- PRICE ---------------- */
      const base = this.prices[id];
      const priceDelta = (Math.random() - 0.5) * 0.015;
      const nextPrice = +(base * (1 + priceDelta)).toFixed(6);
      this.prices[id] = nextPrice;

      this.emit({
        type: "PRICE_UPDATE",
        payload: { id, price: nextPrice },
      });

      /* ---------------- BONDING ---------------- */
      let nextBonding = this.bonding[id] + (Math.random() * 1.2 - 0.3); // slow drift
      nextBonding = Math.max(0, Math.min(100, nextBonding));
      this.bonding[id] = nextBonding;

      this.emit({
        type: "BONDING_UPDATE",
        payload: {
          id,
          bondingPercent: +nextBonding.toFixed(1),
        },
      });

      /* ---------------- TX ---------------- */
      const txBase = this.txCount[id] || 5;
      const delta = Math.floor(Math.random() * 6) - 3; // -3 to +2
      const nextTx = Math.max(0, txBase + delta);

      this.txCount[id] = nextTx;

      this.emit({
        type: "TX_UPDATE",
        payload: {
          id,
          txCount: nextTx,
          txDelta: delta,
        },
      });
    }, 900);
  }

  disconnect() {
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    this.listeners = [];
  }

  onMessage(cb: Listener) {
    this.listeners.push(cb);
  }

  private emit(data: SocketMessage) {
    for (const l of this.listeners) l(data);
  }
}

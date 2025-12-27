import { Token } from "@/types/token";
import { SocketMessage } from "@/types/socket";

type Listener = (data: SocketMessage) => void;

export class MockTokenSocket {
  private listeners: Listener[] = [];
  private prices: Record<string, number>;
  private intervalId: number | null = null;

  constructor(tokens: Token[]) {
    // snapshot is immutable input
    this.prices = {};
    for (const t of tokens) {
      this.prices[t.id] = t.price;
    }
  }

  connect(tokens: Token[]) {
    // emit snapshot (immutable)
    setTimeout(() => {
      this.emit({
        type: "SNAPSHOT",
        payload: tokens,
      });
    }, 300);

    this.intervalId = window.setInterval(() => {
      const ids = Object.keys(this.prices);
      if (ids.length === 0) return;

      const id = ids[Math.floor(Math.random() * ids.length)];
      const base = this.prices[id];

      const delta = (Math.random() - 0.5) * 0.02;
      const nextPrice = +(base * (1 + delta)).toFixed(6);

      this.prices[id] = nextPrice;

      this.emit({
        type: "PRICE_UPDATE",
        payload: { id, price: nextPrice },
      });
    }, 800);
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

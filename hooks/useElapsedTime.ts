import { useEffect, useState } from "react";

export function useElapsedTime(timestamp: number): number {
  const [, tick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => tick((v) => v + 1), 1000);
    return () => clearInterval(id);
  }, []);

  return Math.floor((Date.now() - timestamp) / 1000);
}

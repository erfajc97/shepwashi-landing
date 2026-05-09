import { useEffect, useState } from "react";

export type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function diff(target: number): TimeLeft {
  const ms = Math.max(0, target - Date.now());
  const days = Math.floor(ms / 86_400_000);
  const hours = Math.floor((ms % 86_400_000) / 3_600_000);
  const minutes = Math.floor((ms % 3_600_000) / 60_000);
  const seconds = Math.floor((ms % 60_000) / 1000);
  return { days, hours, minutes, seconds };
}

export const padTime = (n: number) => n.toString().padStart(2, "0");

export function useCountdown(targetIso: string): TimeLeft {
  const target = new Date(targetIso).getTime();
  const [t, setT] = useState<TimeLeft>(() => diff(target));

  useEffect(() => {
    const id = window.setInterval(() => setT(diff(target)), 1000);
    return () => window.clearInterval(id);
  }, [target]);

  return t;
}

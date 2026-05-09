import { useEffect, useRef, useState, type RefObject } from "react";

const USER_OVERRIDE_MS = 1200;

type Options = {
  cardRef: RefObject<HTMLElement | null>;
  total: number;
};

export function useServicioScrollProgress({ cardRef, total }: Options) {
  const userClickedAtRef = useRef<number>(0);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (total < 2) return;
    const el = cardRef.current;
    if (!el) return;

    let rafId = 0;
    let running = false;

    const update = () => {
      if (Date.now() - userClickedAtRef.current < USER_OVERRIDE_MS) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const cardCenter = rect.top + rect.height / 2;
      const minY = vh * 0.25;
      const maxY = vh * 0.85;
      const range = maxY - minY;
      if (range <= 0) return;
      const raw = 1 - (cardCenter - minY) / range;
      const progress = Math.max(0, Math.min(1, raw));
      const idx = Math.min(
        total - 1,
        Math.max(0, Math.round(progress * (total - 1)))
      );
      setActive((prev) => (prev === idx ? prev : idx));
    };

    const loop = () => {
      update();
      rafId = requestAnimationFrame(loop);
    };

    const start = () => {
      if (running) return;
      running = true;
      rafId = requestAnimationFrame(loop);
    };

    const stop = () => {
      running = false;
      cancelAnimationFrame(rafId);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) start();
          else stop();
        });
      },
      { rootMargin: "50% 0px" }
    );

    observer.observe(el);
    update();

    return () => {
      observer.disconnect();
      stop();
    };
  }, [cardRef, total]);

  const setActiveByClick = (i: number) => {
    userClickedAtRef.current = Date.now();
    setActive(i);
  };

  return { active, setActiveByClick };
}

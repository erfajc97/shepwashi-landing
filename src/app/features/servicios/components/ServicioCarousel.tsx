import { useEffect, useRef, useState } from "react";
import type { Servicio } from "../data/servicios";

type Props = {
  servicios: Servicio[];
};

export function ServicioCarousel({ servicios }: Props) {
  const cardRef = useRef<HTMLDivElement>(null);
  const userClickedAtRef = useRef<number>(0);
  const [active, setActive] = useState(0);
  const current = servicios[active];

  useEffect(() => {
    const total = servicios.length;
    if (total < 2) return;
    const el = cardRef.current;
    if (!el) return;

    let rafId = 0;
    let running = false;

    const update = () => {
      if (Date.now() - userClickedAtRef.current < 1200) return;
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
  }, [servicios.length]);

  const handleDotClick = (i: number) => {
    userClickedAtRef.current = Date.now();
    setActive(i);
  };

  return (
    <>
      <style>{`
        @keyframes servicio-card-enter {
          0% { opacity: 0; transform: translateY(22px) scale(0.985); filter: blur(6px); }
          100% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
        }
        @keyframes servicio-bullet-enter {
          0% { opacity: 0; transform: translateX(-12px); }
          100% { opacity: 1; transform: translateX(0); }
        }
      `}</style>
      <div className="max-w-5xl mx-auto px-5 mt-8 md:mt-12">
        <div
          ref={cardRef}
          data-servicio-card
          className="relative w-full bg-black/55 backdrop-blur-md border border-white/25 px-6 sm:px-12 md:px-16 py-10 sm:py-12 md:py-14 flex flex-col items-center text-center overflow-hidden transition-shadow duration-500"
          style={{
            borderTopRightRadius: "5rem",
            borderBottomLeftRadius: "5rem",
            borderTopLeftRadius: 0,
            borderBottomRightRadius: 0,
            boxShadow:
              "0 30px 80px -20px rgba(33,144,255,0.25), 0 0 0 1px rgba(67,195,255,0.08) inset",
          }}
        >
          <div
            key={active}
            className="w-full flex flex-col items-center"
            style={{
              animation:
                "servicio-card-enter 0.55s cubic-bezier(0.22, 1, 0.36, 1) both",
            }}
          >
            <h3
              className="font-heading uppercase text-white"
              style={{
                fontSize: "clamp(2.5rem, 7vw, 5rem)",
                letterSpacing: "0.04em",
                lineHeight: 1,
                textAlign: "center",
                textShadow: "0 4px 24px rgba(67,195,255,0.25)",
              }}
            >
              {current.title}
            </h3>

            <ul className="mt-6 sm:mt-8 space-y-2 text-white/85 text-sm sm:text-base md:text-lg">
              {current.bullets.map((b, i) => (
                <li
                  key={b}
                  className="flex items-start justify-center gap-2"
                  style={{
                    animation: `servicio-bullet-enter 0.45s ease-out ${
                      0.15 + i * 0.07
                    }s both`,
                  }}
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-[#43C3FF] shrink-0"
                  />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <a
              href="#"
              className="mt-7 sm:mt-9 inline-flex items-center justify-center h-11 sm:h-12 px-8 rounded-full border border-white/30 text-white text-sm sm:text-base hover:bg-white/5 hover:border-white/60 transition-colors"
              style={{
                animation: "servicio-bullet-enter 0.5s ease-out 0.4s both",
              }}
            >
              {current.cta}
            </a>
          </div>

          <div
            className="absolute right-5 sm:right-7 top-1/2 -translate-y-1/2 flex flex-col gap-3"
            role="tablist"
            aria-label="Seleccionar servicio"
          >
            {servicios.map((s, i) => {
              const isActive = i === active;
              return (
                <button
                  key={s.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={s.title}
                  onClick={() => handleDotClick(i)}
                  className="rounded-full transition-all duration-300 cursor-pointer"
                  style={{
                    height: "0.75rem",
                    width: isActive ? "1.75rem" : "0.75rem",
                    backgroundColor: isActive
                      ? "rgba(67,195,255,0.95)"
                      : "rgba(255,255,255,0.35)",
                    boxShadow: isActive
                      ? "0 0 14px rgba(67,195,255,0.7)"
                      : "none",
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

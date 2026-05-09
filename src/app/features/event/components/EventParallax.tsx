import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const EVENT_DATE_ISO = "2026-07-28T18:00:00-05:00";

type TimeLeft = { days: number; hours: number; minutes: number; seconds: number };

function diff(target: number): TimeLeft {
  const ms = Math.max(0, target - Date.now());
  const days = Math.floor(ms / 86_400_000);
  const hours = Math.floor((ms % 86_400_000) / 3_600_000);
  const minutes = Math.floor((ms % 3_600_000) / 60_000);
  const seconds = Math.floor((ms % 60_000) / 1000);
  return { days, hours, minutes, seconds };
}

const pad = (n: number) => n.toString().padStart(2, "0");

export default function EventParallax() {
  const rootRef = useRef<HTMLElement>(null);
  const slide1Ref = useRef<HTMLDivElement>(null);
  const slide2Ref = useRef<HTMLDivElement>(null);
  const bg1Ref = useRef<HTMLImageElement>(null);
  const bg2Ref = useRef<HTMLImageElement>(null);
  const target = new Date(EVENT_DATE_ISO).getTime();
  const [t, setT] = useState<TimeLeft>(() => diff(target));

  useEffect(() => {
    const id = window.setInterval(() => setT(diff(target)), 1000);
    return () => window.clearInterval(id);
  }, [target]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const root = rootRef.current!;
      const s1 = slide1Ref.current!;
      const s2 = slide2Ref.current!;

      // initial state
      gsap.set(s2, { autoAlpha: 0 });
      gsap.set(bg1Ref.current, { scale: 1.15 });
      gsap.set(bg2Ref.current, { scale: 1.25 });

      const s1Items = s1.querySelectorAll<HTMLElement>("[data-anim]");
      const s2Items = s2.querySelectorAll<HTMLElement>("[data-anim]");
      gsap.set(s1Items, { autoAlpha: 0, y: 22 });
      gsap.set(s2Items, { autoAlpha: 0, y: 22 });

      // slide 1 entrance — fires when section enters viewport
      gsap
        .timeline({
          scrollTrigger: {
            trigger: root,
            start: "top 78%",
            once: true,
          },
          defaults: { ease: "power2.out", duration: 1.1 },
        })
        .to(bg1Ref.current, { scale: 1, duration: 1.8, ease: "power2.out" }, 0)
        .to(s1Items, { autoAlpha: 1, y: 0, stagger: 0.07 }, 0.1);

      // scroll-driven swap + parallax
      const swap = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.2,
        },
      });

      swap
        .to(s1, { autoAlpha: 0, ease: "none" }, 0)
        .to(bg1Ref.current, { scale: 1.18, yPercent: -8, ease: "none" }, 0)
        .to(s2, { autoAlpha: 1, ease: "none" }, 0)
        .to(bg2Ref.current, { scale: 1, yPercent: 0, ease: "none" }, 0);

      // slide 2 content reveal (once mid-swap)
      gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "center 40%",
          once: true,
        },
        defaults: { ease: "power2.out", duration: 1.1 },
      }).to(s2Items, { autoAlpha: 1, y: 0, stagger: 0.07 }, 0);
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative w-screen left-1/2 -translate-x-1/2"
      style={{ height: "200svh" }}
      aria-label="Evento Luntriqa"
    >
      <div className="sticky top-0 h-svh w-screen overflow-hidden">
        {/* Slide 1 — Countdown */}
        <div
          ref={slide1Ref}
          className="absolute inset-0 w-screen h-full"
          data-slide="1"
        >
          <img
            ref={bg1Ref}
            src="/images/bg-event-desktop.png"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-screen h-full object-cover will-change-transform"
            draggable={false}
          />
          <div className="absolute inset-0 bg-black/35" aria-hidden="true" />

          <div className="relative z-10 h-full w-full flex flex-col items-center justify-center px-5 md:px-8 text-center">
            <img
              data-anim
              src="/images/luntriqa.png"
              alt="Luntriqa"
              className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto object-contain select-none"
              draggable={false}
            />

            <p
              data-anim
              className="mt-5 md:mt-7 max-w-2xl text-sm sm:text-base md:text-lg text-white/85 leading-relaxed"
            >
              Luntriqa, una submarca de Shepwashi, llega a Cartagena con una
              experiencia exclusiva diseñada para líderes, CEOs y visionarios
              que están transformando el futuro empresarial.
            </p>

            <h2
              data-anim
              className="font-heading uppercase mt-8 md:mt-10 text-[7vw] sm:text-5xl md:text-6xl lg:text-7xl"
              style={{ color: "#FF7A1A", letterSpacing: "0.02em" }}
            >
              Evento en Cartagena
            </h2>

            <div
              data-anim
              className="mt-6 md:mt-8 flex items-end justify-center gap-2 sm:gap-4 md:gap-6"
            >
              {[
                { v: t.days, l: "Días" },
                { v: t.hours, l: "Horas" },
                { v: t.minutes, l: "Minutos" },
                { v: t.seconds, l: "Segundos" },
              ].map((u, i, arr) => (
                <div key={u.l} className="flex items-end gap-2 sm:gap-4 md:gap-6">
                  <div className="flex flex-col items-center">
                    <span
                      className="font-heading text-white tabular-nums leading-none"
                      style={{
                        fontSize: "clamp(2.5rem, 11vw, 7rem)",
                        letterSpacing: "0.02em",
                      }}
                    >
                      {pad(u.v)}
                    </span>
                    <span className="mt-2 text-xs sm:text-sm md:text-base text-white/80">
                      {u.l}
                    </span>
                  </div>
                  {i < arr.length - 1 && (
                    <span
                      className="font-heading text-white/85 leading-none pb-6 sm:pb-7 md:pb-9"
                      style={{ fontSize: "clamp(2rem, 9vw, 5.5rem)" }}
                      aria-hidden="true"
                    >
                      :
                    </span>
                  )}
                </div>
              ))}
            </div>

            <div
              data-anim
              className="mt-8 md:mt-10 flex flex-col items-center gap-2"
            >
              <span className="text-xs sm:text-sm text-white/70">
                Patrocinado x
              </span>
              <img
                src="/images/ShepwashiOfficialLogobig.png"
                alt="Shepwashi"
                className="h-7 sm:h-8 md:h-9 w-auto object-contain select-none"
                draggable={false}
              />
            </div>

            <div
              className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/70"
              aria-hidden="true"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                className="animate-bounce"
              >
                <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>

        {/* Slide 2 — Conectamos diferente */}
        <div
          ref={slide2Ref}
          className="absolute inset-0 w-screen h-full"
          data-slide="2"
        >
          <img
            ref={bg2Ref}
            src="/images/bg-evento-luntriqa.png"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-screen h-full object-cover will-change-transform"
            draggable={false}
          />
          <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

          <div className="relative z-10 h-full w-full flex flex-col items-center justify-center px-5 md:px-8 text-center">
            <img
              data-anim
              src="/images/luntriqa.png"
              alt="Luntriqa"
              className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto object-contain select-none"
              draggable={false}
            />

            <p
              data-anim
              className="mt-5 md:mt-7 max-w-2xl text-sm sm:text-base md:text-lg text-white/85 leading-relaxed"
            >
              Luntriqa presenta el evento más grande de líderes del sector de
              Seguros & Tecnología.
            </p>

            <h2
              data-anim
              className="font-heading uppercase mt-8 md:mt-10 text-white"
              style={{
                fontSize: "clamp(2.25rem, 9vw, 6rem)",
                letterSpacing: "0.04em",
                lineHeight: 1.05,
              }}
            >
              Conectamos diferente
            </h2>

            <p
              data-anim
              className="mt-6 md:mt-8 max-w-2xl text-sm sm:text-base text-white/80 leading-relaxed"
            >
              Sé parte de la primera edición del evento Insurtech más relevante
              en Colombia, diseñado para CEOs, presidentes, ejecutivos y
              propietarios que están liderando la transformación del sector.
            </p>

            <div
              data-anim
              className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center gap-3 sm:gap-4"
            >
              <a
                href="#invitacion"
                className="inline-flex items-center justify-center gap-2 h-11 md:h-12 px-6 md:px-8 rounded-full bg-black border border-white/25 text-white text-sm hover:bg-white/5 transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <rect x="3" y="6" width="18" height="12" rx="2" />
                  <path d="M3 8l9 6 9-6" />
                </svg>
                Solicita tu invitación
              </a>
              <a
                href="#agenda"
                className="inline-flex items-center justify-center gap-2 h-11 md:h-12 px-6 md:px-8 rounded-full border border-white/25 text-white text-sm hover:bg-white/5 transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <rect x="3" y="5" width="18" height="16" rx="2" />
                  <path d="M16 3v4M8 3v4M3 11h18" />
                </svg>
                Ver agenda del evento
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

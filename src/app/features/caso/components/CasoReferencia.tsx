import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const linearText = {
  backgroundImage: "linear-gradient(90deg, #43C3FF 0%, #FFFFFF 100%)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  WebkitTextFillColor: "transparent",
  color: "transparent",
} as const;

export default function CasoReferencia() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>("[data-caso-anim]");
      gsap.set(items, { autoAlpha: 0, y: 22 });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top 78%",
            once: true,
          },
          defaults: { ease: "power2.out", duration: 1.2 },
        })
        .to(items, { autoAlpha: 1, y: 0, stagger: 0.14 });

      // bg parallax zoom
      gsap.fromTo(
        "[data-caso-bg]",
        { scale: 1.12 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        }
      );
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative w-full h-svh overflow-hidden bg-black isolate"
      aria-label="Caso referencia — Modulo Ventas al Piso"
    >
      <img
        data-caso-bg
        src="/images/bg-evento-luntriqa.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover will-change-transform"
        style={{ objectPosition: "center top" }}
        draggable={false}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(0,0,0,0.35)" }}
      />
      {/* Bottom edge bleed — connects visually with next section */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-32 sm:h-40 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.65) 100%)",
        }}
      />

      <div className="relative z-10 h-full w-full flex flex-col items-center justify-center px-5 sm:px-8 md:px-12 text-center">
        {/* Header row: logo | divider | tagline */}
        <div
          data-caso-anim
          className="flex items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 md:mb-10"
        >
          <img
            src="/images/ShepwashiOfficialLogobig.png"
            alt="Shepwashi"
            className="h-7 sm:h-8 md:h-9 w-auto object-contain select-none"
            draggable={false}
          />
          <span
            aria-hidden="true"
            className="block w-px h-6 sm:h-7 md:h-8 bg-white/35"
          />
          <span
            className="font-semibold text-sm sm:text-base md:text-lg"
            style={linearText}
          >
            Conozca nuestro caso referencia
          </span>
        </div>

        {/* Title */}
        <h2
          data-caso-anim
          className="font-heading uppercase max-w-5xl"
          style={{
            ...linearText,
            fontSize: "clamp(2rem, 6.5vw, 5.5rem)",
            letterSpacing: "0.02em",
            lineHeight: 1.05,
          }}
        >
          Modulo &quot;Ventas al piso&quot; (Fintech)
        </h2>

        {/* Description */}
        <p
          data-caso-anim
          className="mt-6 md:mt-8 max-w-3xl italic font-medium leading-relaxed"
          style={{
            ...linearText,
            fontSize: "clamp(0.95rem, 1.6vw, 1.25rem)",
          }}
        >
          Ejemplo de solución con control operativo, trazabilidad y accesos por
          roles, construida para entornos exigentes.
        </p>
      </div>
    </section>
  );
}

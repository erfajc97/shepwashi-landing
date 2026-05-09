import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Slide = {
  title: string;
  cta: string;
  link?: string;
  description?: string;
  showLuntriqa?: boolean;
};

const SLIDES: Slide[] = [
  {
    title: "Modulo\nVentas al piso",
    cta: "Ver el proyecto",
    link: "¿Cómo nos preparamos?",
    description:
      "Conozca como hemos desarrollado la plataforma de ventas de seguros con la trazabilidad mas alta del mercado. Hemos diseñado un sistema robusto que permite tener control de tus ventas de manera centralizada",
    showLuntriqa: true,
  },
  {
    title: "Nuestro reto\nmas grande",
    cta: "Conozca el proceso",
    description:
      "Centralizamos la operación de ventas y seguimiento, reduciendo errores y garantizando acceso seguro por roles",
  },
  {
    title: "Lo que\nconstruimos",
    cta: "Ver el proyecto",
    description:
      "Conozca como hemos desarrollado la plataforma de ventas de seguros con la trazabilidad mas alta del mercado. Hemos diseñado un sistema robusto que permite tener control de tus ventas de manera centralizada",
  },
  {
    title: "Resultado\nesperado",
    cta: "El resultado final",
    description:
      "Más control operativo y una base sólida para crecer y auditar.",
  },
];

const FINAL = {
  title: "Quieres algo\nsimilar?",
  cta: "Contactar al equipo especializado",
};

const THUMBS = [
  "/images/enfoque-1.png",
  "/images/enfoque-4.png",
  "/images/enfoque-2.png",
  "/images/enfoque-3.png",
];

export default function ProcesoStack() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const root = rootRef.current!;
      const slides = gsap.utils.toArray<HTMLElement>("[data-stack-slide]", root);
      const thumbs = gsap.utils.toArray<HTMLElement>("[data-stack-thumb]", root);
      const highlight = root.querySelector<HTMLElement>("[data-stack-highlight]")!;
      const butterfly = root.querySelector<HTMLElement>("[data-stack-butterfly]")!;

      const transitions = slides.length - 1; // number of swaps

      // initial state
      gsap.set(slides, { yPercent: 100, autoAlpha: 0 });
      gsap.set(slides[0], { yPercent: 0, autoAlpha: 1 });
      gsap.set(butterfly, { autoAlpha: 0, scale: 1.06 });

      // pin + scrub timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: () => `+=${window.innerHeight * transitions}`,
          pin: true,
          pinType: "fixed",
          pinSpacing: true,
          scrub: 1.2,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
        defaults: { ease: "none" },
      });

      for (let i = 0; i < transitions; i++) {
        // outgoing slide: exit fully UPWARD
        tl.to(
          slides[i],
          { yPercent: -100, autoAlpha: 0 },
          i
        );
        // incoming slide: rise from below
        tl.to(
          slides[i + 1],
          { yPercent: 0, autoAlpha: 1 },
          i
        );
      }

      // butterfly fades in only on last slide (final)
      tl.to(butterfly, { autoAlpha: 0.55, scale: 1, ease: "power2.out" }, transitions - 1);

      // thumb highlight: pixel-based y matching real thumb positions (accounts for gaps)
      const thumbY = thumbs.map((t) => t.offsetTop);
      gsap.set(highlight, { y: thumbY[0] });
      for (let i = 0; i < thumbs.length - 1; i++) {
        tl.to(highlight, { y: thumbY[i + 1] }, i);
      }

      // hide thumbs sidebar on final slide
      tl.to(
        "[data-stack-sidebar]",
        { autoAlpha: 0, x: -20 },
        transitions - 1
      );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  const slidesAll = [...SLIDES, FINAL];

  return (
    <section
      ref={rootRef}
      className="relative w-full h-svh overflow-hidden bg-black z-10 isolate"
      aria-label="Caso — proceso"
    >
      {/* Shared bg */}
      <img
        src="/images/bg-desktop.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: "center top" }}
        draggable={false}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
      />
      {/* Top edge bleed — connects with previous section */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-32 sm:h-40 pointer-events-none z-1"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.7) 0%, transparent 100%)",
        }}
      />

      {/* Butterfly silhouette — visible on final slide */}
      <img
        data-stack-butterfly
        src="/images/butterfly.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute select-none"
        style={{
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: "min(85vw, 700px)",
          filter: "blur(1px) brightness(0.55)",
          mixBlendMode: "screen",
        }}
        draggable={false}
      />

      {/* Sidebar thumbs — only over slides 1-4 */}
      <div
        data-stack-sidebar
        className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-5 lg:left-10 z-30 flex-col gap-3 lg:gap-4"
      >
        <div className="relative">
          {THUMBS.map((src, i) => (
            <div
              key={i}
              data-stack-thumb
              className="w-14 h-14 lg:w-16 lg:h-16 rounded-xl overflow-hidden border border-white/15 bg-black/40 mb-3 lg:mb-4 last:mb-0"
            >
              <img
                src={src}
                alt=""
                aria-hidden="true"
                className="w-full h-full object-cover opacity-70"
                draggable={false}
              />
            </div>
          ))}
          {/* Active highlight (overlay) */}
          <div
            data-stack-highlight
            aria-hidden="true"
            className="absolute top-0 left-0 w-14 h-14 lg:w-16 lg:h-16 rounded-xl border-2 pointer-events-none"
            style={{
              borderColor: "#43C3FF",
              boxShadow: "0 0 18px rgba(67,195,255,0.55)",
            }}
          />
        </div>
      </div>

      {/* Stacked slides */}
      <div className="relative z-20 h-full w-full">
        {slidesAll.map((s, i) => {
          const isFinal = i === slidesAll.length - 1;
          return (
            <div
              key={i}
              data-stack-slide
              className="absolute inset-0 w-full h-full will-change-transform"
            >
              {!isFinal && (
                <SlideContent slide={s as Slide} />
              )}
              {isFinal && <FinalSlide slide={s} />}
            </div>
          );
        })}
      </div>
    </section>
  );
}

function gradientText(): React.CSSProperties {
  return {
    backgroundImage: "linear-gradient(90deg, #43C3FF 0%, #FFFFFF 100%)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
    color: "transparent",
  };
}

function SlideContent({ slide }: { slide: Slide }) {
  return (
    <div className="relative h-full w-full flex items-center px-5 sm:px-10 md:pl-32 lg:pl-40 md:pr-12">
      {slide.showLuntriqa && (
        <img
          src="/images/luntriqa.png"
          alt="Luntriqa"
          className="absolute top-6 right-6 sm:top-8 sm:right-10 h-7 sm:h-9 md:h-11 w-auto object-contain opacity-85 select-none"
          draggable={false}
        />
      )}

      <div className="w-full max-w-2xl">
        <h2
          className="font-heading uppercase whitespace-pre-line"
          style={{
            ...gradientText(),
            fontSize: "clamp(2.25rem, 6.5vw, 5.5rem)",
            letterSpacing: "0.02em",
            lineHeight: 1.02,
          }}
        >
          {slide.title}
        </h2>

        <div className="mt-5 sm:mt-7 flex flex-wrap items-center gap-4 sm:gap-6">
          <a
            href="#"
            className="inline-flex items-center gap-2 h-11 sm:h-12 px-5 sm:px-6 rounded-full bg-black/65 border border-white/25 backdrop-blur text-white text-sm sm:text-base hover:bg-black/80 transition-colors"
          >
            <PlayIcon />
            {slide.cta}
          </a>
          {slide.link && (
            <a
              href="#"
              className="text-sm sm:text-base text-[#43C3FF] hover:text-white transition-colors underline-offset-4 hover:underline"
            >
              {slide.link}
            </a>
          )}
        </div>

        {slide.description && (
          <p className="mt-6 sm:mt-8 max-w-xl text-sm sm:text-base text-white/80 leading-relaxed">
            {slide.description}
          </p>
        )}
      </div>
    </div>
  );
}

function FinalSlide({ slide }: { slide: { title: string; cta: string } }) {
  return (
    <div className="relative h-full w-full flex flex-col items-center justify-center px-5 text-center">
      <h2
        className="font-heading uppercase whitespace-pre-line"
        style={{
          ...gradientText(),
          fontSize: "clamp(2.25rem, 6.5vw, 5.5rem)",
          letterSpacing: "0.02em",
          lineHeight: 1.05,
        }}
      >
        {slide.title}
      </h2>
      <a
        href="#contacto"
        className="mt-8 sm:mt-10 inline-flex items-center justify-center h-12 sm:h-14 px-7 sm:px-9 rounded-full text-white text-sm sm:text-base font-medium shadow-lg"
        style={{
          background:
            "linear-gradient(135deg, #2190FF 0%, #43C3FF 60%, #5CC6F0 100%)",
        }}
      >
        {slide.cta}
      </a>
    </div>
  );
}

function PlayIcon() {
  return (
    <span
      aria-hidden="true"
      className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-white/15"
    >
      <svg width="9" height="9" viewBox="0 0 12 12" fill="white">
        <path d="M3 1.5v9l8-4.5z" />
      </svg>
    </span>
  );
}

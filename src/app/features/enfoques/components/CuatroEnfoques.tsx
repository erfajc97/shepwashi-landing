import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Enfoque = {
  num: string;
  tag: string;
  image: string;
  title: string;
  bullets: string[];
  cta: string;
};

const ENFOQUES: Enfoque[] = [
  {
    num: "01",
    tag: "IA Aplicada",
    image: "/images/enfoque-1.png",
    title: "Automatiza procesos y mejora decisiones con módulos inteligentes",
    bullets: [
      "Automatización de flujos (reglas + IA)",
      "Extracción y clasificación de información",
    ],
    cta: "Explorar IA",
  },
  {
    num: "02",
    tag: "Ciberseguridad",
    image: "/images/enfoque-2.png",
    title: "Evaluamos tus protocolos y dejamos un plan de mejora accionable",
    bullets: [
      "Revisión de accesos, permisos y datos",
      "Hallazgos + riesgos por criticidad",
    ],
    cta: "Ver Auditoría",
  },
  {
    num: "03",
    tag: "Fintech",
    image: "/images/enfoque-3.png",
    title: "Plataformas con estándares de seguridad y requisitos corporativos",
    bullets: [
      "Roles, permisos y trazabilidad",
      "Integraciones y validaciones",
    ],
    cta: "Ver Fintech",
  },
  {
    num: "04",
    tag: "Desarrollo a la Medida",
    image: "/images/enfoque-4.png",
    title: "Sistemas a medida, integraciones y arquitectura escalable",
    bullets: [
      "Back-end, front-end y APIs",
      "Escalabilidad y buenas prácticas",
      "Pruebas, documentación y soporte",
    ],
    cta: "Ver Desarrollo",
  },
];

export default function CuatroEnfoques() {
  const rootRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const root = rootRef.current!;
      const stage = stageRef.current!;
      const cards = gsap.utils.toArray<HTMLElement>("[data-card]", stage);

      // Header reveal
      gsap.from("[data-enfoques-head]", {
        autoAlpha: 0,
        y: 18,
        duration: 1.1,
        ease: "power2.out",
        scrollTrigger: { trigger: root, start: "top 78%", once: true },
      });

      // Glow pulse
      gsap.to("[data-glow]", {
        opacity: 0.42,
        scale: 1.08,
        duration: 4,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      // Initial state — card 0 centered, others offscreen-right
      gsap.set(cards, { autoAlpha: 0, xPercent: 110, scale: 0.92 });
      gsap.set(cards[0], { autoAlpha: 1, xPercent: 0, scale: 1 });

      // Pinned scrub timeline: each transition = 1 unit on the timeline
      const transitions = cards.length - 1; // 3 swaps for 4 cards
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: () => `+=${window.innerHeight * transitions}`,
          pin: true,
          scrub: 1.2,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
        defaults: { ease: "none" },
      });

      for (let i = 0; i < transitions; i++) {
        // out the current card to left
        tl.to(
          cards[i],
          { xPercent: -110, autoAlpha: 0, scale: 0.92 },
          i
        );
        // in the next card from right
        tl.to(
          cards[i + 1],
          { xPercent: 0, autoAlpha: 1, scale: 1 },
          i
        );
      }
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative w-full h-svh overflow-hidden bg-black"
      aria-label="Cuatro enfoques"
    >
      {/* overlay 39% */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-1 pointer-events-none"
        style={{ backgroundColor: "rgba(0,0,0,0.39)" }}
      />

      {/* Top-right glow */}
      <div
        data-glow
        aria-hidden="true"
        className="absolute pointer-events-none rounded-full z-2"
        style={{
          top: "-15%",
          right: "-10%",
          width: "min(60vw, 720px)",
          height: "min(60vw, 720px)",
          background:
            "radial-gradient(closest-side, rgba(33,144,255,0.29), rgba(33,144,255,0.10) 55%, transparent 75%)",
          filter: "blur(40px)",
          opacity: 0.32,
        }}
      />

      <div className="relative z-10 h-full flex flex-col">
        {/* Header */}
        <div
          data-enfoques-head
          className="shrink-0 pt-20 sm:pt-20 md:pt-20 px-5 md:px-8 text-center"
        >
          <div className="flex items-center justify-center mb-1">
            <img
              src="/images/ShepwashiOfficialLogobig.png"
              alt="Shepwashi"
              className="h-5 sm:h-6 md:h-7 w-auto object-contain opacity-90"
              draggable={false}
            />
          </div>
          <h2
            className="font-heading uppercase"
            style={{
              fontSize: "clamp(2rem, 5.5vw, 4rem)",
              letterSpacing: "0.04em",
              lineHeight: 1,
              backgroundImage:
                "linear-gradient(180deg, #43C3FF 0%, #FFFFFF 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
            }}
          >
            Cuatro enfoques
          </h2>
          <p
            className="mt-2 mb-6 sm:mb-8 md:mb-10 text-sm sm:text-base font-medium"
            style={{
              backgroundImage:
                "linear-gradient(180deg, #43C3FF 0%, #FFFFFF 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
            }}
          >
            Para soluciones confiables y medibles.
          </p>
        </div>

        {/* Stage — single-card-at-a-time area */}
        <div
          ref={stageRef}
          className="relative flex-1 flex items-center justify-center px-3 sm:px-5 md:px-8 pt-0 pb-6"
        >
          {ENFOQUES.map((e) => (
            <article
              key={e.num}
              data-card
              className="absolute will-change-transform flex flex-col items-center"
              style={{
                width: "min(95vw, 460px)",
              }}
            >
              {/* Image wrap (so badge/tag align to image bounds) */}
              <div className="relative w-full">
                <img
                  src={e.image}
                  alt={e.tag}
                  className="block w-full h-auto select-none"
                  draggable={false}
                />

                {/* Number badge — top-LEFT corner of image */}
                <div
                  className="absolute top-0 left-0 sm:-top-1 sm:-left-1 z-20 h-11 w-11 sm:h-12 sm:w-12 rounded-full flex items-center justify-center font-heading text-white text-base sm:text-lg shadow-lg ring-2 ring-black/40"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 30%, #5CC6F0, #2190FF 60%, #0E5FB8 100%)",
                  }}
                >
                  {e.num}
                </div>

                {/* Tag — inside image top-right, right-aligned */}
                <h3
                  className="absolute top-3 right-4 sm:top-4 sm:right-6 z-10 font-heading uppercase text-right max-w-[68%]"
                  style={{
                    fontSize: "clamp(1.1rem, 5vw, 2rem)",
                    letterSpacing: "0.04em",
                    lineHeight: 1,
                    backgroundImage:
                      "linear-gradient(180deg, #43C3FF 0%, #FFFFFF 100%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    color: "transparent",
                  }}
                >
                  {e.tag}
                </h3>
              </div>

              {/* Body — mounted on bottom of image (negative margin), asymmetric corners */}
              <div
                className="relative -mt-32 sm:-mt-40 z-10 w-[88%] sm:w-[85%] bg-black/65 backdrop-blur-md border border-white/25 p-4 sm:p-5 flex flex-col"
                style={{
                  borderTopRightRadius: "5rem",
                  borderBottomLeftRadius: "5rem",
                  borderTopLeftRadius: 0,
                  borderBottomRightRadius: 0,
                }}
              >
                <p className="text-white font-semibold leading-snug text-sm sm:text-base">
                  {e.title}
                </p>
                <ul className="mt-2 space-y-1.5 text-white/85 text-xs sm:text-sm">
                  {e.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span
                        aria-hidden="true"
                        className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-[#43C3FF] shrink-0"
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className="mt-3 inline-flex self-center items-center justify-center h-9 sm:h-10 px-5 rounded-full border border-white/35 text-white text-xs sm:text-sm hover:bg-white/5 transition-colors"
                >
                  {e.cta}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

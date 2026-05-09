import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Step = {
  num: string;
  title: string;
  description?: string;
  image: string;
};

const STEPS: Step[] = [
  {
    num: "01",
    title: "Objetivos, riesgos,\nprioridades y fases",
    image: "/images/process-1.png",
  },
  {
    num: "02",
    title: "Diseño técnico y\nseguridad",
    description: "Arquitectura, datos, integraciones y permisos",
    image: "/images/process-2.png",
  },
  {
    num: "03",
    title: "Desarrollo &\nImplementación",
    description: "Iteraciones, validaciones y entregas",
    image: "/images/process-3.png",
  },
  {
    num: "04",
    title: "Pruebas,\ndocumentación y soporte",
    description: "QA, documentación y mantenimiento",
    image: "/images/process-4.png",
  },
];

const gradientText = {
  backgroundImage: "linear-gradient(180deg, #43C3FF 0%, #FFFFFF 100%)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  WebkitTextFillColor: "transparent",
  color: "transparent",
} as const;

export default function ProcesoClaro() {
  const rootRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const headRefs = useRef<HTMLElement[]>([]);
  const stepRefs = useRef<{
    step: HTMLElement;
    content: HTMLElement;
    image: HTMLElement;
    badge: HTMLElement;
    dir: number;
  }[]>([]);

  useEffect(() => {
    const triggers: ScrollTrigger[] = [];
    const tweens: gsap.core.Tween[] = [];

    const root = rootRef.current;
    if (!root) return;

    // Header reveal
    if (headRefs.current.length) {
      gsap.set(headRefs.current, { autoAlpha: 0, y: 22 });
      const t = gsap.to(headRefs.current, {
        autoAlpha: 1,
        y: 0,
        duration: 1.1,
        ease: "power2.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: root,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
      tweens.push(t);
      if (t.scrollTrigger) triggers.push(t.scrollTrigger);
    }

    // Steps reveal
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;
    stepRefs.current.forEach(({ step, content, image, badge, dir }) => {
      const xContent = isDesktop ? dir : 0;
      const xImage = isDesktop ? -dir : 0;

      gsap.set(content, { autoAlpha: 0, y: 40, x: xContent });
      gsap.set(image, { autoAlpha: 0, y: 40, x: xImage });
      gsap.set(badge, { autoAlpha: 0, scale: 0.5 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: step,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
        defaults: { ease: "power2.out", duration: 1 },
      });
      tl.to(badge, { autoAlpha: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)" }, 0)
        .to(image, { autoAlpha: 1, x: 0, y: 0 }, 0.05)
        .to(content, { autoAlpha: 1, x: 0, y: 0 }, 0.15);

      if (tl.scrollTrigger) triggers.push(tl.scrollTrigger);
    });

    // Glow dot follows scroll along center line (desktop)
    if (dotRef.current && lineRef.current && isDesktop) {
      const dot = dotRef.current;
      const line = lineRef.current;
      const t = gsap.to(dot, {
        y: () => Math.max(0, line.offsetHeight - dot.offsetHeight),
        ease: "none",
        scrollTrigger: {
          trigger: line,
          start: "top 60%",
          end: "bottom 60%",
          scrub: 0.8,
          invalidateOnRefresh: true,
        },
      });
      tweens.push(t);
      if (t.scrollTrigger) triggers.push(t.scrollTrigger);
    }

    // Force refresh after layout settles (images load)
    const refresh = () => ScrollTrigger.refresh();
    const t1 = window.setTimeout(refresh, 200);
    const t2 = window.setTimeout(refresh, 800);
    window.addEventListener("load", refresh);

    return () => {
      window.removeEventListener("load", refresh);
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      triggers.forEach((tr) => tr.kill());
      tweens.forEach((tw) => tw.kill());
    };
  }, []);

  const setHeadRef = (i: number) => (el: HTMLElement | null) => {
    if (el) headRefs.current[i] = el;
  };

  const setStepRef =
    (i: number, dir: number) =>
    (el: HTMLDivElement | null) => {
      if (!el) return;
      const content = el.querySelector<HTMLElement>("[data-pc-content]");
      const image = el.querySelector<HTMLElement>("[data-pc-image]");
      const badge = el.querySelector<HTMLElement>("[data-pc-badge]");
      if (content && image && badge) {
        stepRefs.current[i] = { step: el, content, image, badge, dir };
      }
    };

  return (
    <section
      ref={rootRef}
      className="relative w-full overflow-hidden bg-black py-20 sm:py-24 md:py-28"
      aria-label="Un proceso claro"
    >
      {/* bg */}
      <img
        src="/images/bg-desktop.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-70"
        draggable={false}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(0,0,0,0.55)" }}
      />

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center px-5 md:px-8 max-w-4xl mx-auto">
          <h2
            ref={setHeadRef(0)}
            className="font-heading uppercase"
            style={{
              ...gradientText,
              fontSize: "clamp(2rem, 5.5vw, 4.5rem)",
              letterSpacing: "0.02em",
              lineHeight: 1.05,
            }}
          >
            Un proceso claro para construir sin incertidumbre
          </h2>
          <p
            ref={setHeadRef(1)}
            className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-white/75"
          >
            Definimos alcance, diseñamos arquitectura y entregamos con pruebas y
            documentación
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-14 sm:mt-20 md:mt-24 mx-auto max-w-6xl px-5 md:px-8">
          {/* Center line + dot (desktop only) */}
          <div
            ref={lineRef}
            aria-hidden="true"
            className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px"
            style={{
              background:
                "linear-gradient(180deg, rgba(67,195,255,0.0) 0%, rgba(67,195,255,0.5) 12%, rgba(67,195,255,0.5) 88%, rgba(67,195,255,0.0) 100%)",
            }}
          />
          <div
            ref={dotRef}
            aria-hidden="true"
            className="hidden md:block absolute left-1/2 top-0 w-3 h-3 rounded-full"
            style={{
              background: "#43C3FF",
              boxShadow:
                "0 0 14px rgba(67,195,255,0.9), 0 0 28px rgba(67,195,255,0.6)",
              marginLeft: "-6px",
            }}
          />

          <div className="space-y-14 sm:space-y-20 md:space-y-28">
            {STEPS.map((s, i) => {
              const textRight = i % 2 === 1;
              const dir = textRight ? 80 : -80;
              return (
                <div
                  key={s.num}
                  ref={setStepRef(i, dir)}
                  className="grid md:grid-cols-2 gap-6 md:gap-12 lg:gap-20 items-center"
                >
                  {/* Content (badge + title + desc) */}
                  <div
                    data-pc-content=""
                    className={`relative flex flex-col ${
                      textRight
                        ? "md:order-2 md:items-start md:text-left"
                        : "md:order-1 md:items-end md:text-right"
                    } items-center text-center`}
                  >
                    <div
                      data-pc-badge=""
                      className="relative h-16 w-16 sm:h-20 sm:w-20 rounded-full flex items-center justify-center"
                      style={{
                        border: "2px solid rgba(67,195,255,0.7)",
                        background:
                          "radial-gradient(circle at 30% 30%, rgba(33,144,255,0.18), rgba(0,0,0,0.6) 70%)",
                        boxShadow:
                          "0 0 22px rgba(67,195,255,0.35), inset 0 0 18px rgba(67,195,255,0.12)",
                      }}
                    >
                      <span
                        className="font-heading"
                        style={{
                          ...gradientText,
                          fontSize: "clamp(1.4rem, 2.4vw, 2rem)",
                          letterSpacing: "0.04em",
                          lineHeight: 1,
                        }}
                      >
                        {s.num}
                      </span>
                    </div>
                    <h3
                      className="mt-5 sm:mt-6 text-white font-semibold whitespace-pre-line"
                      style={{
                        fontSize: "clamp(1.1rem, 2vw, 1.5rem)",
                        lineHeight: 1.2,
                      }}
                    >
                      {s.title}
                    </h3>
                    {s.description && (
                      <p className="mt-2 sm:mt-3 max-w-sm text-sm sm:text-base text-white/75">
                        {s.description}
                      </p>
                    )}
                  </div>

                  {/* Image */}
                  <div
                    data-pc-image=""
                    className={`${textRight ? "md:order-1" : "md:order-2"}`}
                  >
                    <div
                      className="relative rounded-2xl overflow-hidden border border-white/10 shadow-xl"
                      style={{
                        boxShadow:
                          "0 10px 40px rgba(0,0,0,0.4), 0 0 30px rgba(33,144,255,0.08)",
                      }}
                    >
                      <img
                        src={s.image}
                        alt={s.title}
                        className="block w-full h-auto"
                        draggable={false}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

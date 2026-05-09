import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power2.out", duration: 1.2 },
      });

      gsap.set("[data-anim='line']", { yPercent: 110, opacity: 0 });
      gsap.set("[data-anim='fade']", { y: 24, opacity: 0 });
      gsap.set("[data-anim='butterfly']", { opacity: 0, scale: 1.05 });
      gsap.set("[data-anim='circle']", { opacity: 0, scale: 0.9 });
      gsap.set("[data-anim='wordmark']", { xPercent: 100, opacity: 0 });

      const start = () => {
        tl.to("[data-anim='circle']", { opacity: 1, scale: 1, duration: 1.2 }, 0)
          .to(
            "[data-anim='butterfly']",
            { opacity: 0.22, scale: 1, duration: 1.6 },
            0.05
          )
          .to(
            "[data-anim='line']",
            { yPercent: 0, opacity: 1, duration: 0.95, stagger: 0.1 },
            0.2
          )
          .to("[data-anim='fade']", { y: 0, opacity: 1, stagger: 0.08 }, 0.7)
          .to(
            "[data-anim='wordmark']",
            { xPercent: 0, opacity: 1, duration: 1.6, ease: "expo.out" },
            0.6
          );
      };

      const onIntroDone = () => start();
      window.addEventListener("intro:done", onIntroDone, { once: true });

      if (document.documentElement.dataset.introDone === "1") start();

      return () => window.removeEventListener("intro:done", onIntroDone);
    }, rootRef);

    return () => ctx.revert();
  }, []);

  const gradientStyle: React.CSSProperties = {
    backgroundImage: "linear-gradient(180deg, #43C3FF 0%, #FFFFFF 100%)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
    color: "transparent",
  };

  return (
    <section
      ref={rootRef}
      className="relative isolate overflow-hidden h-svh flex flex-col bg-black"
    >
      {/* Background image */}
      <picture aria-hidden="true">
        <source srcSet="/images/bg-desktop.png" media="(min-width: 768px)" />
        <img
          src="/images/bg-primary.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "30% 30%", zIndex: -10 }}
        />
      </picture>

      {/* Top-Right luminosity gradient circle */}
      <div
        data-anim="circle"
        aria-hidden="true"
        className="pointer-events-none absolute rounded-full"
        style={{
          background: "linear-gradient(180deg, #D9D9D9 0%, #737373 100%)",
          mixBlendMode: "luminosity",
          opacity: 0.55,
          right: "-10%",
          top: "-15%",
          width: "min(45vw, 320px)",
          height: "min(45vw, 320px)",
          zIndex: -8,
        }}
      />

      {/* Centered dim butterfly */}
      <img
        data-anim="butterfly"
        src="/images/butterfly.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute select-none"
        style={{
          left: "50%",
          top: "40%",
          transform: "translate(-50%, -50%)",
          width: "min(105vw, 1000px)",
          opacity: 0.22,
          filter: "blur(1px) brightness(0.7)",
          zIndex: -7,
        }}
        draggable={false}
      />

      {/* Soft cyan/violet accent (right side glow) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute rounded-full"
        style={{
          top: "15%",
          right: "-12%",
          width: "min(60vw, 750px)",
          height: "min(60vw, 750px)",
          background:
            "radial-gradient(closest-side, rgba(140,108,255,0.45), rgba(67,195,255,0.2) 50%, transparent 75%)",
          filter: "blur(40px)",
          zIndex: -8,
        }}
      />

      {/* Top dark gradient under navbar */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-24 bg-linear-to-b from-black/70 to-transparent"
        style={{ zIndex: -7 }}
      />

      {/* Content */}
      <div
        className="relative flex-1 flex items-center pt-20 md:pt-24"
        style={{ zIndex: 1 }}
      >
        <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
          <h1
            className="font-heading uppercase text-[9.5vw] sm:text-[8vw] md:text-[58px] lg:text-[68px] xl:text-[78px] text-white"
            style={{ lineHeight: 1.1, letterSpacing: 0 }}
          >
            <span className="block overflow-hidden">
              <span data-anim="line" className="block" style={gradientStyle}>
                Desarrollamos
              </span>
            </span>
            <span className="block overflow-hidden">
              <span data-anim="line" className="block">
                Plataformas
              </span>
            </span>
            <span className="block overflow-hidden">
              <span data-anim="line" className="block">
                Seguras con IA
              </span>
            </span>
          </h1>

          <p
            data-anim="fade"
            className="mt-4 md:mt-5 max-w-xl text-sm md:text-base text-white/85 leading-relaxed"
          >
            Construimos modulos y sistemas a medida con estandares de seguridad,
            integraciones y automatizacion para entornos exigentes.
          </p>

          <div
            data-anim="fade"
            className="mt-5 md:mt-6 flex flex-wrap items-center gap-3"
          >
            <a
              href="#casos"
              className="inline-flex items-center justify-center h-11 md:h-12 px-5 md:px-7 rounded-full border border-white/30 text-white text-sm hover:bg-white/5 transition-colors"
            >
              Conozca los casos de exito
            </a>
            <a
              href="#agenda"
              className="inline-flex items-center justify-center h-11 md:h-12 px-5 md:px-7 rounded-full bg-black border border-white/20 text-white text-sm hover:bg-white/10 transition-colors"
            >
              Agendar diagnostico
            </a>
          </div>
        </div>
      </div>

      {/* Big Shepwashi logo bottom — fits inside vh */}
      <div
        className="relative w-full overflow-hidden pb-3 md:pb-5 px-6 md:px-12"
        style={{ zIndex: 1 }}
      >
        <div
          data-anim="wordmark"
          className="mx-auto w-full px-4 md:px-6"
          style={{ maxWidth: 820 }}
        >
          <img
            src="/images/ShepwashiOfficialLogobig.png"
            alt="Shepwashi"
            className="block w-full h-auto object-contain select-none pointer-events-none"
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
}

import { useRef } from "react";
import { useFadeUpOnScroll } from "@/app/shared/animations/useFadeUpOnScroll";
import { gradientTextVertical } from "@/app/shared/styles/textGradients";

export default function AipRespaldo() {
  const rootRef = useRef<HTMLElement>(null);

  useFadeUpOnScroll({ rootRef, selector: "[data-aip-reveal]" });

  return (
    <section
      ref={rootRef}
      className="relative w-full overflow-hidden bg-black py-20 sm:py-24 md:py-28 isolate"
      aria-label="Respaldo AIP"
    >
      <img
        src="/images/bg-desktop.png"
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(0,0,0,0.45)" }}
      />

      <img
        src="/images/globo.png"
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="absolute top-1/2 -translate-y-1/2 right-0 pointer-events-none select-none opacity-70 md:opacity-90"
        style={{
          width: "min(75vw, 820px)",
          maxHeight: "120%",
          objectFit: "contain",
        }}
        draggable={false}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-5 md:px-8 flex flex-col items-center text-center">
        <img
          data-aip-reveal
          src="/images/AIP.png"
          alt="AIP — Alianza Insurtech Panamericana"
          loading="lazy"
          decoding="async"
          className="w-32 sm:w-40 md:w-48 h-auto mb-6 md:mb-8"
          draggable={false}
        />

        <h2
          data-aip-reveal
          className="font-heading uppercase"
          style={{
            ...gradientTextVertical,
            fontSize: "clamp(1.85rem, 5vw, 4rem)",
            letterSpacing: "0.02em",
            lineHeight: 1.05,
            textAlign: "center",
          }}
        >
          Contamos con el respaldo de AIP
        </h2>

        <p
          data-aip-reveal
          className="mt-5 text-sm sm:text-base text-white font-semibold leading-relaxed"
          style={{ textAlign: "center", maxWidth: "32rem" }}
        >
          Somos parte de la Alianza Insurtech Panamericana y nos unimos para
          Co-construir el Futuro del Sector Asegurador en America Latina
        </p>

        <img
          data-aip-reveal
          src="/images/people.png"
          alt="Equipo Alianza Insurtech Panamericana"
          loading="lazy"
          decoding="async"
          className="mt-8 md:mt-10 w-full max-w-lg h-auto rounded-xl mx-auto"
          draggable={false}
        />

        <p
          data-aip-reveal
          className="mt-6 sm:mt-8 text-sm sm:text-base text-white/85 leading-relaxed"
          style={{ textAlign: "center", maxWidth: "36rem" }}
        >
          Fomentamos el desarrollo del ecosistema insurtech en América Latina
          mediante la colaboración entre todos los actores del sector
          asegurador. Contamos con el respaldo de la entidad AIP, firma que
          nos da la garantía y calidad de ser parte del mercado insurtech que
          está revolucionando la industria.
        </p>
      </div>
    </section>
  );
}

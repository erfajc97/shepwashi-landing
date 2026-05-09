import { useRef } from "react";
import { useFadeUpOnScroll } from "@/app/shared/animations/useFadeUpOnScroll";
import { gradientTextVertical } from "@/app/shared/styles/textGradients";
import { SERVICIOS } from "../data/servicios";
import { ServicioImagenes } from "./ServicioImagenes";
import { ServicioCarousel } from "./ServicioCarousel";

export default function ServiciosPotenciar() {
  const rootRef = useRef<HTMLElement>(null);

  useFadeUpOnScroll({ rootRef, selector: "[data-servicios-head]" });
  useFadeUpOnScroll({ rootRef, selector: "[data-servicio-img]" });

  return (
    <section
      ref={rootRef}
      className="relative w-full overflow-hidden bg-black py-20 sm:py-24 md:py-28 isolate"
      aria-label="Servicios para potenciar"
    >
      <img
        src="/images/bg-desktop.png"
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover opacity-70"
        style={{ objectPosition: "center top" }}
        draggable={false}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(0,0,0,0.55)" }}
      />

      <div className="relative z-10">
        <div className="w-full px-5 md:px-8 flex flex-col items-center">
          <h2
            data-servicios-head
            className="font-heading uppercase"
            style={{
              ...gradientTextVertical,
              fontSize: "clamp(1.85rem, 5vw, 4rem)",
              letterSpacing: "0.02em",
              lineHeight: 1.05,
              textAlign: "center",
              maxWidth: "56rem",
              margin: "0 auto",
            }}
          >
            Para potenciar lo que construimos
          </h2>
          <p
            data-servicios-head
            className="text-sm sm:text-base text-white/75"
            style={{
              textAlign: "center",
              maxWidth: "36rem",
              margin: "0.75rem auto 0",
            }}
          >
            Sumamos producto, diseño y crecimiento para que tu solución
            funcione y convierta.
          </p>
        </div>

        <ServicioImagenes servicios={SERVICIOS} />

        <ServicioCarousel servicios={SERVICIOS} />

        <div className="mt-12 sm:mt-14 md:mt-16 flex justify-center px-5">
          <a
            href="#servicios"
            className="inline-flex items-center justify-center h-11 sm:h-12 px-8 rounded-full bg-white text-black text-sm sm:text-base font-medium hover:bg-white/90 transition-colors"
          >
            Ver todos los servicios
          </a>
        </div>
      </div>
    </section>
  );
}

import { useRef } from "react";
import type { Servicio } from "../data/servicios";
import { useServicioScrollProgress } from "../hooks/useServicioScrollProgress";
import { ServicioCarouselDots } from "./ServicioCarouselDots";
import { ServicioCarouselSlide } from "./ServicioCarouselSlide";

type Props = {
  servicios: Servicio[];
};

export function ServicioCarousel({ servicios }: Props) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { active, setActiveByClick } = useServicioScrollProgress({
    cardRef,
    total: servicios.length,
  });
  const current = servicios[active];

  return (
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
        <ServicioCarouselSlide key={active} servicio={current} />
        <ServicioCarouselDots
          servicios={servicios}
          active={active}
          onSelect={setActiveByClick}
        />
      </div>
    </div>
  );
}

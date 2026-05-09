import { useRef } from "react";
import { useFadeUpOnScroll } from "@/app/shared/animations/useFadeUpOnScroll";
import { useCasoBgZoom } from "../hooks/useCasoBgZoom";
import { CasoReferenciaBackground } from "./CasoReferenciaBackground";
import { CasoReferenciaContent } from "./CasoReferenciaContent";

export default function CasoReferencia() {
  const rootRef = useRef<HTMLElement>(null);

  useFadeUpOnScroll({
    rootRef,
    selector: "[data-caso-anim]",
    y: 24,
    duration: 1.2,
    stagger: 0.14,
    start: "top 80%",
  });
  useCasoBgZoom({ rootRef });

  return (
    <section
      ref={rootRef}
      className="relative w-full h-svh overflow-hidden bg-black isolate"
      aria-label="Caso referencia — Modulo Ventas al Piso"
    >
      <CasoReferenciaBackground />
      <CasoReferenciaContent />
    </section>
  );
}

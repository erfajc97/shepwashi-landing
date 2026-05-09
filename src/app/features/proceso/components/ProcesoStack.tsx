import { useRef } from "react";
import {
  PROCESO_FINAL,
  PROCESO_SLIDES,
  PROCESO_THUMBS,
} from "../data/slides";
import { useProcesoStackEffects } from "../hooks/useProcesoStackEffects";
import { ProcesoStackBackground } from "./ProcesoStackBackground";
import { ProcesoStackButterfly } from "./ProcesoStackButterfly";
import { ProcesoStackSidebar } from "./ProcesoStackSidebar";
import { ProcesoStackSlide } from "./ProcesoStackSlide";
import { ProcesoStackFinalSlide } from "./ProcesoStackFinalSlide";

export default function ProcesoStack() {
  const rootRef = useRef<HTMLElement>(null);
  useProcesoStackEffects({ rootRef });

  return (
    <section
      ref={rootRef}
      className="relative w-full h-svh overflow-hidden bg-black z-10 isolate"
      aria-label="Caso — proceso"
    >
      <ProcesoStackBackground />
      <ProcesoStackButterfly />
      <ProcesoStackSidebar thumbs={PROCESO_THUMBS} />

      <div className="relative z-20 h-full w-full">
        {PROCESO_SLIDES.map((slide, i) => (
          <div
            key={i}
            data-stack-slide
            className="absolute inset-0 w-full h-full will-change-transform"
          >
            <ProcesoStackSlide slide={slide} />
          </div>
        ))}
        <div
          data-stack-slide
          className="absolute inset-0 w-full h-full will-change-transform"
        >
          <ProcesoStackFinalSlide
            title={PROCESO_FINAL.title}
            cta={PROCESO_FINAL.cta}
          />
        </div>
      </div>
    </section>
  );
}

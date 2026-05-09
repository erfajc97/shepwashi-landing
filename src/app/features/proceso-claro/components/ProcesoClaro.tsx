import { useRef } from "react";
import { useFadeUpOnScroll } from "@/app/shared/animations/useFadeUpOnScroll";
import { PROCESO_STEPS } from "../data/steps";
import { ProcesoClaroHeader } from "./ProcesoClaroHeader";
import { ProcesoTimeline } from "./ProcesoTimeline";
import { ProcesoStepRow } from "./ProcesoStep";
import { useStepReveal } from "../hooks/useStepReveal";

export default function ProcesoClaro() {
  const rootRef = useRef<HTMLElement>(null);

  useFadeUpOnScroll({ rootRef, selector: "[data-pc-head]" });
  useStepReveal({ rootRef });

  return (
    <section
      ref={rootRef}
      className="relative w-full overflow-hidden bg-black py-20 sm:py-24 md:py-28 isolate"
      aria-label="Un proceso claro"
    >
      <img
        src="/images/bg-desktop.png"
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover opacity-70"
        draggable={false}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(0,0,0,0.55)" }}
      />

      <div className="relative z-10">
        <ProcesoClaroHeader />
        <ProcesoTimeline>
          {PROCESO_STEPS.map((step, i) => (
            <ProcesoStepRow
              key={step.num}
              step={step}
              textRight={i % 2 === 1}
            />
          ))}
        </ProcesoTimeline>
      </div>
    </section>
  );
}

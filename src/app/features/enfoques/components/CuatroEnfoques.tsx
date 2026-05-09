import { useRef } from "react";
import { ENFOQUES } from "../data/enfoques";
import { useEnfoquesPin } from "../hooks/useEnfoquesPin";
import { EnfoquesHeader } from "./EnfoquesHeader";
import { EnfoquesGlow } from "./EnfoquesGlow";
import { EnfoqueCard } from "./EnfoqueCard";

export default function CuatroEnfoques() {
  const rootRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  useEnfoquesPin({ rootRef, stageRef });

  return (
    <section
      ref={rootRef}
      className="relative w-full h-svh overflow-hidden bg-black"
      aria-label="Cuatro enfoques"
    >
      <EnfoquesGlow />

      <div className="relative z-10 h-full flex flex-col">
        <EnfoquesHeader />

        <div
          ref={stageRef}
          className="relative flex-1 flex items-center justify-center px-3 sm:px-5 md:px-8 pt-0 pb-6"
        >
          {ENFOQUES.map((e) => (
            <EnfoqueCard key={e.num} enfoque={e} />
          ))}
        </div>
      </div>
    </section>
  );
}

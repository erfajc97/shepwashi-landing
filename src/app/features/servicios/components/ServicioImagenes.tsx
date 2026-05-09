import type { LabelPos, Servicio } from "../data/servicios";

type Props = {
  servicios: Servicio[];
};

const labelClassByPos: Record<LabelPos, string> = {
  "bottom-left": "absolute bottom-4 left-4 sm:bottom-5 sm:left-5",
  "top-center": "absolute top-4 left-1/2 -translate-x-1/2 sm:top-5",
  "bottom-right": "absolute bottom-4 right-4 sm:bottom-5 sm:right-5",
};

export function ServicioImagenes({ servicios }: Props) {
  return (
    <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 max-w-5xl mx-auto px-5 mt-10 md:mt-14">
      {servicios.map((s) => (
        <div
          key={s.id}
          data-servicio-img
          className="relative"
        >
          <img
            src={s.image}
            alt={s.title}
            className="block w-full h-auto select-none"
            draggable={false}
          />
          <span
            className={`${labelClassByPos[s.labelPos]} font-heading uppercase text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] text-base sm:text-lg md:text-2xl pointer-events-none`}
            style={{ letterSpacing: "0.06em" }}
          >
            {s.label}
          </span>
        </div>
      ))}
    </div>
  );
}

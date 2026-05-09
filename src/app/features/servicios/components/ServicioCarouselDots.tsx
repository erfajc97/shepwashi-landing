import type { Servicio } from "../data/servicios";

type Props = {
  servicios: Servicio[];
  active: number;
  onSelect: (i: number) => void;
};

export function ServicioCarouselDots({ servicios, active, onSelect }: Props) {
  return (
    <div
      className="absolute right-5 sm:right-7 top-1/2 -translate-y-1/2 flex flex-col gap-3"
      role="tablist"
      aria-label="Seleccionar servicio"
    >
      {servicios.map((s, i) => {
        const isActive = i === active;
        return (
          <button
            key={s.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            aria-label={s.title}
            onClick={() => onSelect(i)}
            className="rounded-full transition-all duration-300 cursor-pointer"
            style={{
              height: "0.75rem",
              width: isActive ? "1.75rem" : "0.75rem",
              backgroundColor: isActive
                ? "rgba(67,195,255,0.95)"
                : "rgba(255,255,255,0.35)",
              boxShadow: isActive
                ? "0 0 14px rgba(67,195,255,0.7)"
                : "none",
            }}
          />
        );
      })}
    </div>
  );
}

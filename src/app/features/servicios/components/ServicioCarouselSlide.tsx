import type { Servicio } from "../data/servicios";

type Props = {
  servicio: Servicio;
};

export function ServicioCarouselSlide({ servicio }: Props) {
  return (
    <div
      className="w-full flex flex-col items-center"
      style={{
        animation:
          "servicio-card-enter 0.55s cubic-bezier(0.22, 1, 0.36, 1) both",
      }}
    >
      <h3
        className="font-heading uppercase text-white"
        style={{
          fontSize: "clamp(2.5rem, 7vw, 5rem)",
          letterSpacing: "0.04em",
          lineHeight: 1,
          textAlign: "center",
          textShadow: "0 4px 24px rgba(67,195,255,0.25)",
        }}
      >
        {servicio.title}
      </h3>

      <ul className="mt-6 sm:mt-8 space-y-2 text-white/85 text-sm sm:text-base md:text-lg">
        {servicio.bullets.map((b, i) => (
          <li
            key={b}
            className="flex items-start justify-center gap-2"
            style={{
              animation: `servicio-bullet-enter 0.45s ease-out ${
                0.15 + i * 0.07
              }s both`,
            }}
          >
            <span
              aria-hidden="true"
              className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-[#43C3FF] shrink-0"
            />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <a
        href="#"
        className="mt-7 sm:mt-9 inline-flex items-center justify-center h-11 sm:h-12 px-8 rounded-full border border-white/30 text-white text-sm sm:text-base hover:bg-white/5 hover:border-white/60 transition-colors"
        style={{ animation: "servicio-bullet-enter 0.5s ease-out 0.4s both" }}
      >
        {servicio.cta}
      </a>
    </div>
  );
}

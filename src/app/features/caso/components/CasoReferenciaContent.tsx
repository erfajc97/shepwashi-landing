import { gradientTextHorizontal } from "@/app/shared/styles/textGradients";
import { CASO_DESCRIPTION, CASO_TAGLINE, CASO_TITLE } from "../data/caso";

export function CasoReferenciaContent() {
  return (
    <div className="relative z-10 h-full w-full flex flex-col items-center justify-center px-5 sm:px-8 md:px-12 text-center">
      <div
        data-caso-anim
        className="flex items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 md:mb-10"
      >
        <img
          src="/images/ShepwashiOfficialLogobig.png"
          alt="Shepwashi"
          loading="lazy"
          decoding="async"
          className="h-7 sm:h-8 md:h-9 w-auto object-contain select-none"
          draggable={false}
        />
        <span
          aria-hidden="true"
          className="block w-px h-6 sm:h-7 md:h-8 bg-white/35"
        />
        <span
          className="font-semibold text-sm sm:text-base md:text-lg"
          style={gradientTextHorizontal}
        >
          {CASO_TAGLINE}
        </span>
      </div>

      <h2
        data-caso-anim
        className="font-heading uppercase max-w-5xl"
        style={{
          ...gradientTextHorizontal,
          fontSize: "clamp(2rem, 6.5vw, 5.5rem)",
          letterSpacing: "0.02em",
          lineHeight: 1.05,
        }}
      >
        {CASO_TITLE}
      </h2>

      <p
        data-caso-anim
        className="mt-6 md:mt-8 max-w-3xl italic font-medium leading-relaxed"
        style={{
          ...gradientTextHorizontal,
          fontSize: "clamp(0.95rem, 1.6vw, 1.25rem)",
        }}
      >
        {CASO_DESCRIPTION}
      </p>
    </div>
  );
}

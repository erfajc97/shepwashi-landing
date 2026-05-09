import { gradientTextVertical } from "@/app/shared/styles/textGradients";

export function EnfoquesHeader() {
  return (
    <div
      data-enfoques-head
      className="shrink-0 pt-20 sm:pt-20 md:pt-20 px-5 md:px-8 text-center"
    >
      <div className="flex items-center justify-center mb-1">
        <img
          src="/images/ShepwashiOfficialLogobig.png"
          alt="Shepwashi"
          decoding="async"
          className="h-5 sm:h-6 md:h-7 w-auto object-contain opacity-90"
          draggable={false}
        />
      </div>
      <h2
        className="font-heading uppercase"
        style={{
          ...gradientTextVertical,
          fontSize: "clamp(2rem, 5.5vw, 4rem)",
          letterSpacing: "0.04em",
          lineHeight: 1,
        }}
      >
        Cuatro enfoques
      </h2>
      <p
        className="mt-2 mb-6 sm:mb-8 md:mb-10 text-sm sm:text-base font-medium"
        style={gradientTextVertical}
      >
        Para soluciones confiables y medibles.
      </p>
    </div>
  );
}

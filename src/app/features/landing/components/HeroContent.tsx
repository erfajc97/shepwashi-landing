import { gradientTextVertical } from "@/app/shared/styles/textGradients";
import { HERO_CTAS, HERO_DESCRIPTION, HERO_LINES } from "../data/hero";

export function HeroContent() {
  return (
    <div className="relative flex-1 flex items-center pt-20 md:pt-24 z-1">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <h1
          className="font-heading uppercase text-[9.5vw] sm:text-[8vw] md:text-[58px] lg:text-[68px] xl:text-[78px] text-white"
          style={{ lineHeight: 1.1, letterSpacing: 0 }}
        >
          {HERO_LINES.map((line, i) => (
            <span key={line} className="block overflow-hidden">
              <span
                data-anim="line"
                className="block"
                style={i === 0 ? gradientTextVertical : undefined}
              >
                {line}
              </span>
            </span>
          ))}
        </h1>

        <p
          data-anim="fade"
          className="mt-4 md:mt-5 max-w-xl text-sm md:text-base text-white/85 leading-relaxed"
        >
          {HERO_DESCRIPTION}
        </p>

        <div
          data-anim="fade"
          className="mt-5 md:mt-6 flex flex-wrap items-center gap-3"
        >
          {HERO_CTAS.map((cta) => (
            <a
              key={cta.href}
              href={cta.href}
              className={
                cta.variant === "outline"
                  ? "inline-flex items-center justify-center h-11 md:h-12 px-5 md:px-7 rounded-full border border-white/30 text-white text-sm hover:bg-white/5 transition-colors"
                  : "inline-flex items-center justify-center h-11 md:h-12 px-5 md:px-7 rounded-full bg-black border border-white/20 text-white text-sm hover:bg-white/10 transition-colors"
              }
            >
              {cta.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

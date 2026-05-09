import { gradientTextVertical } from "@/app/shared/styles/textGradients";
import type { Enfoque } from "../data/enfoques";

type Props = {
  enfoque: Enfoque;
};

export function EnfoqueCard({ enfoque }: Props) {
  return (
    <article
      data-card
      className="absolute will-change-transform flex flex-col items-center"
      style={{ width: "min(95vw, 460px)" }}
    >
      <div className="relative w-full">
        <div
          aria-hidden="true"
          className="absolute pointer-events-none rounded-full -z-10"
          style={{
            top: "-30%",
            right: "-25%",
            width: "60%",
            aspectRatio: "1 / 1",
            background:
              "radial-gradient(circle, rgba(33,144,255,0.55) 0%, rgba(33,144,255,0.2) 45%, rgba(33,144,255,0) 75%)",
            filter: "blur(20px)",
          }}
        />
        <img
          src={enfoque.image}
          alt={enfoque.tag}
          loading="lazy"
          decoding="async"
          className="block w-full h-auto select-none relative"
          draggable={false}
        />

        <div
          className="absolute top-0 left-0 sm:-top-1 sm:-left-1 z-20 h-11 w-11 sm:h-12 sm:w-12 rounded-full flex items-center justify-center font-heading text-white text-base sm:text-lg shadow-lg ring-2 ring-black/40"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, #5CC6F0, #2190FF 60%, #0E5FB8 100%)",
          }}
        >
          {enfoque.num}
        </div>

        <h3
          className="absolute top-3 right-4 sm:top-4 sm:right-6 z-10 font-heading uppercase text-right max-w-[68%]"
          style={{
            ...gradientTextVertical,
            fontSize: "clamp(1.1rem, 5vw, 2rem)",
            letterSpacing: "0.04em",
            lineHeight: 1,
          }}
        >
          {enfoque.tag}
        </h3>
      </div>

      <div
        className="relative -mt-32 sm:-mt-40 z-10 w-[88%] sm:w-[85%] bg-black/65 backdrop-blur-md border border-white/25 p-4 sm:p-5 flex flex-col"
        style={{
          borderTopRightRadius: "5rem",
          borderBottomLeftRadius: "5rem",
          borderTopLeftRadius: 0,
          borderBottomRightRadius: 0,
        }}
      >
        <p className="text-white font-semibold leading-snug text-sm sm:text-base">
          {enfoque.title}
        </p>
        <ul className="mt-2 space-y-1.5 text-white/85 text-xs sm:text-sm">
          {enfoque.bullets.map((b) => (
            <li key={b} className="flex items-start gap-2">
              <span
                aria-hidden="true"
                className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-[#43C3FF] shrink-0"
              />
              <span>{b}</span>
            </li>
          ))}
        </ul>
        <a
          href="#"
          className="mt-3 inline-flex self-center items-center justify-center h-9 sm:h-10 px-5 rounded-full border border-white/35 text-white text-xs sm:text-sm hover:bg-white/5 transition-colors"
        >
          {enfoque.cta}
        </a>
      </div>
    </article>
  );
}

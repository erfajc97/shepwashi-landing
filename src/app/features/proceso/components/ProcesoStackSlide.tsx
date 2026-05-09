import { gradientTextHorizontal } from "@/app/shared/styles/textGradients";
import type { ProcesoSlide } from "../data/slides";
import { PlayIcon } from "./PlayIcon";

type Props = {
  slide: ProcesoSlide;
};

export function ProcesoStackSlide({ slide }: Props) {
  return (
    <div className="relative h-full w-full flex items-center px-5 sm:px-10 md:pl-32 lg:pl-40 md:pr-12">
      {slide.showLuntriqa && (
        <img
          src="/images/luntriqa.png"
          alt="Luntriqa"
          loading="lazy"
          decoding="async"
          className="absolute top-6 right-6 sm:top-8 sm:right-10 h-7 sm:h-9 md:h-11 w-auto object-contain opacity-85 select-none"
          draggable={false}
        />
      )}

      <div className="w-full max-w-2xl">
        <h2
          className="font-heading uppercase whitespace-pre-line"
          style={{
            ...gradientTextHorizontal,
            fontSize: "clamp(2.25rem, 6.5vw, 5.5rem)",
            letterSpacing: "0.02em",
            lineHeight: 1.02,
          }}
        >
          {slide.title}
        </h2>

        <div className="mt-5 sm:mt-7 flex flex-wrap items-center gap-4 sm:gap-6">
          <a
            href="#"
            className="inline-flex items-center gap-2 h-11 sm:h-12 px-5 sm:px-6 rounded-full bg-black/65 border border-white/25 backdrop-blur text-white text-sm sm:text-base hover:bg-black/80 transition-colors"
          >
            <PlayIcon />
            {slide.cta}
          </a>
          {slide.link && (
            <a
              href="#"
              className="text-sm sm:text-base text-[#43C3FF] hover:text-white transition-colors underline-offset-4 hover:underline"
            >
              {slide.link}
            </a>
          )}
        </div>

        {slide.description && (
          <p className="mt-6 sm:mt-8 max-w-xl text-sm sm:text-base text-white/80 leading-relaxed">
            {slide.description}
          </p>
        )}
      </div>
    </div>
  );
}

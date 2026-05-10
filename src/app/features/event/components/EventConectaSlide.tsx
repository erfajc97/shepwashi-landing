import { forwardRef, type ReactElement, type RefObject } from "react";
import {
  EVENT_CONECTA_DESC,
  EVENT_CONECTA_INTRO,
  EVENT_CONECTA_TITLE,
  EVENT_CTAS,
} from "../data/event";

type Props = {
  bgRef: RefObject<HTMLImageElement | null>;
};

const ICON_BY_HREF: Record<string, ReactElement> = {
  "#invitacion": (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <path d="M3 8l9 6 9-6" />
    </svg>
  ),
  "#agenda": (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M16 3v4M8 3v4M3 11h18" />
    </svg>
  ),
};

export const EventConectaSlide = forwardRef<HTMLDivElement, Props>(
  function EventConectaSlide({ bgRef }, ref) {
    return (
      <div
        ref={ref}
        className="absolute inset-0 w-screen h-full"
        data-slide="2"
      >
        <img
          ref={bgRef}
          src="/images/bg-evento-luntriqa.webp"
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-screen h-full object-cover will-change-transform"
          draggable={false}
        />
        <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

        <div className="relative z-10 h-full w-full flex flex-col items-center justify-center px-5 md:px-8 text-center">
          <img
            data-anim
            src="/images/luntriqa.webp"
            alt="Luntriqa"
            decoding="async"
            className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto object-contain select-none"
            draggable={false}
          />

          <p
            data-anim
            className="mt-5 md:mt-7 max-w-2xl text-sm sm:text-base md:text-lg text-white/85 leading-relaxed"
          >
            {EVENT_CONECTA_INTRO}
          </p>

          <h2
            data-anim
            className="font-heading uppercase mt-8 md:mt-10 text-white"
            style={{
              fontSize: "clamp(2.25rem, 9vw, 6rem)",
              letterSpacing: "0.04em",
              lineHeight: 1.05,
            }}
          >
            {EVENT_CONECTA_TITLE}
          </h2>

          <p
            data-anim
            className="mt-6 md:mt-8 max-w-2xl text-sm sm:text-base text-white/80 leading-relaxed"
          >
            {EVENT_CONECTA_DESC}
          </p>

          <div
            data-anim
            className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center gap-3 sm:gap-4"
          >
            {EVENT_CTAS.map((cta) => (
              <a
                key={cta.href}
                href={cta.href}
                className="inline-flex items-center justify-center gap-2 h-11 md:h-12 px-6 md:px-8 rounded-full bg-black border border-white/25 text-white text-sm hover:bg-white/5 transition-colors"
              >
                {ICON_BY_HREF[cta.href]}
                {cta.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  }
);

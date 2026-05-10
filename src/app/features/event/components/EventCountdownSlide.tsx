import { forwardRef, type RefObject } from "react";
import {
  EVENT_COUNTDOWN_DESC,
  EVENT_COUNTDOWN_TITLE,
} from "../data/event";
import type { TimeLeft } from "../hooks/useCountdown";
import { EventCountdown } from "./EventCountdown";

type Props = {
  bgRef: RefObject<HTMLImageElement | null>;
  time: TimeLeft;
};

export const EventCountdownSlide = forwardRef<HTMLDivElement, Props>(
  function EventCountdownSlide({ bgRef, time }, ref) {
    return (
      <div
        ref={ref}
        className="absolute inset-0 w-screen h-full"
        data-slide="1"
      >
        <img
          ref={bgRef}
          src="/images/bg-event-desktop.webp"
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-screen h-full object-cover will-change-transform"
          draggable={false}
        />
        <div className="absolute inset-0 bg-black/35" aria-hidden="true" />

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
            {EVENT_COUNTDOWN_DESC}
          </p>

          <h2
            data-anim
            className="font-heading uppercase mt-8 md:mt-10 text-[7vw] sm:text-5xl md:text-6xl lg:text-7xl"
            style={{ color: "#FF7A1A", letterSpacing: "0.02em" }}
          >
            {EVENT_COUNTDOWN_TITLE}
          </h2>

          <EventCountdown time={time} />

          <div
            data-anim
            className="mt-8 md:mt-10 flex flex-col items-center gap-2"
          >
            <span className="text-xs sm:text-sm text-white/70">
              Patrocinado x
            </span>
            <img
              src="/images/ShepwashiOfficialLogobig.webp"
              alt="Shepwashi"
              decoding="async"
              className="h-7 sm:h-8 md:h-9 w-auto object-contain select-none"
              draggable={false}
            />
          </div>

          <div
            className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/70"
            aria-hidden="true"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              className="animate-bounce"
            >
              <path
                d="M6 9l6 6 6-6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    );
  }
);

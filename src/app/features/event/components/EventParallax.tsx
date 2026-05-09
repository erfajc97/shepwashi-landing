import { useRef } from "react";
import { EVENT_DATE_ISO } from "../data/event";
import { useCountdown } from "../hooks/useCountdown";
import { useEventParallax } from "../hooks/useEventParallax";
import { EventCountdownSlide } from "./EventCountdownSlide";
import { EventConectaSlide } from "./EventConectaSlide";

export default function EventParallax() {
  const rootRef = useRef<HTMLElement>(null);
  const slide1Ref = useRef<HTMLDivElement>(null);
  const slide2Ref = useRef<HTMLDivElement>(null);
  const bg1Ref = useRef<HTMLImageElement>(null);
  const bg2Ref = useRef<HTMLImageElement>(null);

  const time = useCountdown(EVENT_DATE_ISO);

  useEventParallax({ rootRef, slide1Ref, slide2Ref, bg1Ref, bg2Ref });

  return (
    <section
      ref={rootRef}
      className="relative w-screen left-1/2 -translate-x-1/2"
      style={{ height: "200svh" }}
      aria-label="Evento Luntriqa"
    >
      <div className="sticky top-0 h-svh w-screen overflow-hidden">
        <EventCountdownSlide ref={slide1Ref} bgRef={bg1Ref} time={time} />
        <EventConectaSlide ref={slide2Ref} bgRef={bg2Ref} />
      </div>
    </section>
  );
}

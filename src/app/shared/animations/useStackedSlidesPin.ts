import { useEffect, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SCRUB_MEDIUM } from "./animationDefaults";

gsap.registerPlugin(ScrollTrigger);

type Options = {
  rootRef: RefObject<HTMLElement | null>;
  slideSelector: string;
  scrub?: number;
  onTimeline?: (params: {
    timeline: gsap.core.Timeline;
    slides: HTMLElement[];
    transitions: number;
  }) => void;
};

export function useStackedSlidesPin({
  rootRef,
  slideSelector,
  scrub = SCRUB_MEDIUM,
  onTimeline,
}: Options) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      const slides = gsap.utils.toArray<HTMLElement>(slideSelector, root);
      if (slides.length < 2) return;

      const transitions = slides.length - 1;

      slides.forEach((slide, i) => {
        gsap.set(slide, {
          yPercent: i === 0 ? 0 : 100,
          rotationX: i === 0 ? 0 : 50,
          autoAlpha: i === 0 ? 1 : 0,
          transformOrigin: "center center",
        });
      });

      const isTouch =
        window.matchMedia("(hover: none) and (pointer: coarse)").matches;

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: `+=${transitions * 100}%`,
          pin: true,
          pinSpacing: true,
          scrub,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          fastScrollEnd: true,
          preventOverlaps: true,
          snap: isTouch
            ? {
                snapTo: 1 / transitions,
                duration: { min: 0.2, max: 0.55 },
                ease: "power2.inOut",
                inertia: false,
              }
            : undefined,
        },
        defaults: { ease: "power2.inOut" },
      });

      onTimeline?.({ timeline, slides, transitions });

      for (let i = 0; i < transitions; i++) {
        timeline.to(
          slides[i],
          { yPercent: -100, rotationX: -50, autoAlpha: 0 },
          i
        );
        timeline.to(
          slides[i + 1],
          { yPercent: 0, rotationX: 0, autoAlpha: 1 },
          i
        );
      }
    }, rootRef);

    return () => ctx.revert();
  }, [rootRef, slideSelector, scrub, onTimeline]);
}

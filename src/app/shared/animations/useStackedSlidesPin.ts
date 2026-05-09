import { useEffect, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SCRUB_MEDIUM } from "./animationDefaults";

gsap.registerPlugin(ScrollTrigger);

type Options = {
  rootRef: RefObject<HTMLElement | null>;
  slideSelector: string;
  scrub?: number;
  /**
   * Optional callback that receives the timeline + slide elements + transitions count.
   * Use it to attach extra tweens (e.g. butterfly fade, sidebar highlight).
   * Run BEFORE the swap animations so its tweens land at the correct timeline positions.
   */
  onTimeline?: (params: {
    timeline: gsap.core.Timeline;
    slides: HTMLElement[];
    transitions: number;
  }) => void;
};

/**
 * Pin a section + scrub a stacked-slides timeline.
 * Slide N enters from below (yPercent 100 → 0) while slide N-1 exits upward.
 * Subtle rotateX gives a "View-Master wheel" feel.
 */
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

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: () => `+=${window.innerHeight * transitions}`,
          pin: true,
          pinSpacing: true,
          scrub,
          anticipatePin: 1,
          invalidateOnRefresh: true,
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

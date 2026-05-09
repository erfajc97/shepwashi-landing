import { useEffect, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  BADGE_POP,
  FADE_UP_LARGE,
  SCROLL_TRIGGER_STEP_REVEAL,
} from "@/app/shared/animations/animationDefaults";

gsap.registerPlugin(ScrollTrigger);

const SLIDE_X = 80;

type Options = {
  rootRef: RefObject<HTMLElement | null>;
};

/**
 * Reveal each step (badge pop + image+content slide-fade-up) when it enters view.
 * On mobile (< md), the horizontal slide is disabled (single column layout).
 */
export function useStepReveal({ rootRef }: Options) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      const isDesktop = window.matchMedia("(min-width: 768px)").matches;

      gsap.utils.toArray<HTMLElement>("[data-pc-step]").forEach((step) => {
        const dir = step.dataset.dir === "right" ? SLIDE_X : -SLIDE_X;
        const content = step.querySelector("[data-pc-content]");
        const image = step.querySelector("[data-pc-image]");
        const badge = step.querySelector("[data-pc-badge]");
        if (!content || !image || !badge) return;

        const xContent = isDesktop ? dir : 0;
        const xImage = isDesktop ? -dir : 0;

        const trigger = {
          trigger: step,
          start: SCROLL_TRIGGER_STEP_REVEAL.start,
          toggleActions: SCROLL_TRIGGER_STEP_REVEAL.toggleActions,
        };

        gsap.from(badge, {
          autoAlpha: 0,
          scale: BADGE_POP.scale,
          duration: BADGE_POP.duration,
          ease: BADGE_POP.ease,
          scrollTrigger: trigger,
        });
        gsap.from(image, {
          autoAlpha: 0,
          y: FADE_UP_LARGE.y,
          x: xImage,
          duration: FADE_UP_LARGE.duration,
          ease: FADE_UP_LARGE.ease,
          scrollTrigger: trigger,
        });
        gsap.from(content, {
          autoAlpha: 0,
          y: FADE_UP_LARGE.y,
          x: xContent,
          duration: FADE_UP_LARGE.duration,
          delay: 0.1,
          ease: FADE_UP_LARGE.ease,
          scrollTrigger: trigger,
        });
      });
    }, rootRef);

    return () => ctx.revert();
  }, [rootRef]);
}

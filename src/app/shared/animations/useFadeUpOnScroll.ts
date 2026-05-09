import { useEffect, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FADE_UP, SCROLL_TRIGGER_REVEAL } from "./animationDefaults";

gsap.registerPlugin(ScrollTrigger);

type Options = {
  rootRef: RefObject<HTMLElement | null>;
  selector: string;
  y?: number;
  duration?: number;
  ease?: string;
  stagger?: number;
  start?: string;
};

export function useFadeUpOnScroll({
  rootRef,
  selector,
  y = FADE_UP.y,
  duration = FADE_UP.duration,
  ease = FADE_UP.ease,
  stagger = FADE_UP.stagger,
  start = SCROLL_TRIGGER_REVEAL.start,
}: Options) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      gsap.from(selector, {
        autoAlpha: 0,
        y,
        duration,
        ease,
        stagger,
        scrollTrigger: {
          trigger: root,
          start,
          toggleActions: SCROLL_TRIGGER_REVEAL.toggleActions,
        },
      });
    }, rootRef);

    return () => ctx.revert();
  }, [rootRef, selector, y, duration, ease, stagger, start]);
}

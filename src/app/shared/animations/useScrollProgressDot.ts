import { useEffect, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SCRUB_SOFT } from "./animationDefaults";
import { watchAllImages } from "./scrollCoordinator";

gsap.registerPlugin(ScrollTrigger);

type Options = {
  dotRef: RefObject<HTMLElement | null>;
  lineRef: RefObject<HTMLElement | null>;
  enabled?: boolean;
};

export function useScrollProgressDot({
  dotRef,
  lineRef,
  enabled = true,
}: Options) {
  useEffect(() => {
    if (!enabled) return;
    const dot = dotRef.current;
    const line = lineRef.current;
    if (!dot || !line) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        dot,
        { y: 0 },
        {
          y: () => Math.max(0, line.offsetHeight - dot.offsetHeight),
          ease: "none",
          scrollTrigger: {
            trigger: line,
            start: "top center",
            end: "bottom center",
            scrub: SCRUB_SOFT,
            invalidateOnRefresh: true,
          },
        }
      );
    });

    // Refresh once images inside the line's parent finish loading
    watchAllImages(line.parentElement);

    return () => ctx.revert();
  }, [dotRef, lineRef, enabled]);
}

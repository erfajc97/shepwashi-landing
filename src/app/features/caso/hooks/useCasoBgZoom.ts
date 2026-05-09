import { useEffect, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SCRUB_MEDIUM } from "@/app/shared/animations/animationDefaults";

gsap.registerPlugin(ScrollTrigger);

type Options = {
  rootRef: RefObject<HTMLElement | null>;
  selector?: string;
};

export function useCasoBgZoom({
  rootRef,
  selector = "[data-caso-bg]",
}: Options) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        selector,
        { scale: 1.12 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: root,
            start: "top bottom",
            end: "bottom top",
            scrub: SCRUB_MEDIUM,
            invalidateOnRefresh: true,
          },
        }
      );
    }, rootRef);

    return () => ctx.revert();
  }, [rootRef, selector]);
}

import { useRef, useCallback, type RefObject } from "react";
import gsap from "gsap";
import { useStackedSlidesPin } from "@/app/shared/animations/useStackedSlidesPin";

type Options = {
  rootRef: RefObject<HTMLElement | null>;
};

/**
 * Wires the View-Master stacked-slides timeline plus extra tweens:
 *   - Butterfly fades in on the last transition.
 *   - Sidebar thumb highlight steps through thumb positions.
 *   - Sidebar slides out + fades on the final transition.
 */
export function useProcesoStackEffects({ rootRef }: Options) {
  // Stable callback so the underlying hook does not retrigger on every render.
  const onTimelineRef = useRef<
    Parameters<typeof useStackedSlidesPin>[0]["onTimeline"]
  >(undefined);

  onTimelineRef.current = ({ timeline, transitions }) => {
    const root = rootRef.current;
    if (!root) return;

    const butterfly = root.querySelector<HTMLElement>("[data-stack-butterfly]");
    const thumbs = gsap.utils.toArray<HTMLElement>("[data-stack-thumb]", root);
    const highlight = root.querySelector<HTMLElement>("[data-stack-highlight]");
    const sidebar = root.querySelector<HTMLElement>("[data-stack-sidebar]");

    if (butterfly) {
      gsap.set(butterfly, { autoAlpha: 0, scale: 1.06 });
      timeline.to(
        butterfly,
        { autoAlpha: 0.55, scale: 1, ease: "power2.out" },
        transitions - 1
      );
    }

    if (highlight && thumbs.length > 0) {
      const thumbY = thumbs.map((t) => t.offsetTop);
      gsap.set(highlight, { y: thumbY[0] });
      for (let i = 0; i < thumbs.length - 1; i++) {
        timeline.to(highlight, { y: thumbY[i + 1] }, i);
      }
    }

    if (sidebar) {
      timeline.to(sidebar, { autoAlpha: 0, x: -20 }, transitions - 1);
    }
  };

  const onTimeline = useCallback<
    NonNullable<Parameters<typeof useStackedSlidesPin>[0]["onTimeline"]>
  >((params) => onTimelineRef.current?.(params), []);

  useStackedSlidesPin({
    rootRef,
    slideSelector: "[data-stack-slide]",
    onTimeline,
  });
}

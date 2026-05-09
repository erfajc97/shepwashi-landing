import { useEffect, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Options = {
  rootRef: RefObject<HTMLElement | null>;
  stageRef: RefObject<HTMLDivElement | null>;
};

export function useEnfoquesPin({ rootRef, stageRef }: Options) {
  useEffect(() => {
    const root = rootRef.current;
    const stage = stageRef.current;
    if (!root || !stage) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>("[data-card]", stage);

      gsap.from("[data-enfoques-head]", {
        autoAlpha: 0,
        y: 18,
        duration: 1.1,
        ease: "power2.out",
        scrollTrigger: { trigger: root, start: "top 78%", once: true },
      });

      gsap.to("[data-glow]", {
        opacity: 0.42,
        scale: 1.08,
        duration: 4,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      gsap.set(cards, { autoAlpha: 0, xPercent: 110, scale: 0.92 });
      gsap.set(cards[0], { autoAlpha: 1, xPercent: 0, scale: 1 });

      const transitions = cards.length - 1;
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: `+=${transitions * 100}%`,
          pin: true,
          pinSpacing: true,
          scrub: 1.2,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          fastScrollEnd: true,
          preventOverlaps: true,
        },
        defaults: { ease: "none" },
      });

      for (let i = 0; i < transitions; i++) {
        tl.to(
          cards[i],
          { xPercent: -110, autoAlpha: 0, scale: 0.92 },
          i
        );
        tl.to(cards[i + 1], { xPercent: 0, autoAlpha: 1, scale: 1 }, i);
      }
    }, rootRef);

    return () => ctx.revert();
  }, [rootRef, stageRef]);
}

import { useEffect, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Options = {
  rootRef: RefObject<HTMLElement | null>;
  slide1Ref: RefObject<HTMLDivElement | null>;
  slide2Ref: RefObject<HTMLDivElement | null>;
  bg1Ref: RefObject<HTMLImageElement | null>;
  bg2Ref: RefObject<HTMLImageElement | null>;
};

export function useEventParallax({
  rootRef,
  slide1Ref,
  slide2Ref,
  bg1Ref,
  bg2Ref,
}: Options) {
  useEffect(() => {
    const root = rootRef.current;
    const s1 = slide1Ref.current;
    const s2 = slide2Ref.current;
    if (!root || !s1 || !s2) return;

    const ctx = gsap.context(() => {
      gsap.set(s2, { autoAlpha: 0 });
      gsap.set(bg1Ref.current, { scale: 1.15 });
      gsap.set(bg2Ref.current, { scale: 1.25 });

      const s1Items = s1.querySelectorAll<HTMLElement>("[data-anim]");
      const s2Items = s2.querySelectorAll<HTMLElement>("[data-anim]");
      gsap.set(s1Items, { autoAlpha: 0, y: 22 });
      gsap.set(s2Items, { autoAlpha: 0, y: 22 });

      gsap
        .timeline({
          scrollTrigger: { trigger: root, start: "top 78%", once: true },
          defaults: { ease: "power2.out", duration: 1.1 },
        })
        .to(bg1Ref.current, { scale: 1, duration: 1.8, ease: "power2.out" }, 0)
        .to(s1Items, { autoAlpha: 1, y: 0, stagger: 0.07 }, 0.1);

      const swap = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.2,
          fastScrollEnd: true,
          preventOverlaps: true,
          invalidateOnRefresh: true,
        },
      });

      swap
        .to(s1, { autoAlpha: 0, ease: "none" }, 0)
        .to(bg1Ref.current, { scale: 1.18, yPercent: -8, ease: "none" }, 0)
        .to(s2, { autoAlpha: 1, ease: "none" }, 0)
        .to(bg2Ref.current, { scale: 1, yPercent: 0, ease: "none" }, 0);

      gsap
        .timeline({
          scrollTrigger: { trigger: root, start: "center 40%", once: true },
          defaults: { ease: "power2.out", duration: 1.1 },
        })
        .to(s2Items, { autoAlpha: 1, y: 0, stagger: 0.07 }, 0);
    }, rootRef);

    return () => ctx.revert();
  }, [rootRef, slide1Ref, slide2Ref, bg1Ref, bg2Ref]);
}

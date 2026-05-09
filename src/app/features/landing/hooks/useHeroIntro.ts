import { useEffect, type RefObject } from "react";
import gsap from "gsap";

type Options = {
  rootRef: RefObject<HTMLElement | null>;
};

export function useHeroIntro({ rootRef }: Options) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power2.out", duration: 1.2 },
      });

      gsap.set("[data-anim='line']", { yPercent: 110, opacity: 0 });
      gsap.set("[data-anim='fade']", { y: 24, opacity: 0 });
      gsap.set("[data-anim='butterfly']", { opacity: 0, scale: 1.05 });
      gsap.set("[data-anim='circle']", { opacity: 0, scale: 0.9 });
      gsap.set("[data-anim='wordmark']", { xPercent: 100, opacity: 0 });

      const start = () => {
        tl.to("[data-anim='circle']", { opacity: 1, scale: 1, duration: 1.2 }, 0)
          .to(
            "[data-anim='butterfly']",
            { opacity: 0.22, scale: 1, duration: 1.6 },
            0.05
          )
          .to(
            "[data-anim='line']",
            { yPercent: 0, opacity: 1, duration: 0.95, stagger: 0.1 },
            0.2
          )
          .to("[data-anim='fade']", { y: 0, opacity: 1, stagger: 0.08 }, 0.7)
          .to(
            "[data-anim='wordmark']",
            { xPercent: 0, opacity: 1, duration: 1.6, ease: "expo.out" },
            0.6
          );
      };

      const onIntroDone = () => start();
      window.addEventListener("intro:done", onIntroDone, { once: true });

      if (document.documentElement.dataset.introDone === "1") start();

      return () => window.removeEventListener("intro:done", onIntroDone);
    }, rootRef);

    return () => ctx.revert();
  }, [rootRef]);
}

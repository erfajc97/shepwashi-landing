import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.4,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const tickerCb = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tickerCb);
    gsap.ticker.lagSmoothing(0);

    // Global refresh after all components have mounted and images load.
    // This ensures pinned sections + downstream triggers measure correctly.
    const refresh = () => ScrollTrigger.refresh();
    const timers = [
      window.setTimeout(refresh, 300),
      window.setTimeout(refresh, 1200),
      window.setTimeout(refresh, 2500),
    ];
    window.addEventListener("load", refresh);

    return () => {
      window.removeEventListener("load", refresh);
      timers.forEach((id) => window.clearTimeout(id));
      gsap.ticker.remove(tickerCb);
      lenis.destroy();
    };
  }, []);

  return null;
}

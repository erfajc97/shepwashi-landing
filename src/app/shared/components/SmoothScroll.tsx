import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { scheduleScrollRefresh } from "../animations/scrollCoordinator";

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

    // Single coordinator-driven refresh strategy.
    // Components register their own image listeners; the coordinator debounces.
    const onLoad = () => scheduleScrollRefresh();
    window.addEventListener("load", onLoad);
    const initialRefresh = window.setTimeout(scheduleScrollRefresh, 400);

    return () => {
      window.removeEventListener("load", onLoad);
      window.clearTimeout(initialRefresh);
      gsap.ticker.remove(tickerCb);
      lenis.destroy();
    };
  }, []);

  return null;
}

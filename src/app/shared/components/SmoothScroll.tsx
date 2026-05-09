import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { scheduleScrollRefresh } from "../animations/scrollCoordinator";

gsap.registerPlugin(ScrollTrigger);

const isTouchDevice = () =>
  typeof window !== "undefined" &&
  (window.matchMedia("(hover: none) and (pointer: coarse)").matches ||
    "ontouchstart" in window);

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function SmoothScroll() {
  useEffect(() => {
    ScrollTrigger.config({
      ignoreMobileResize: true,
      autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
    });

    const onLoad = () => scheduleScrollRefresh();
    window.addEventListener("load", onLoad);
    const initialRefresh = window.setTimeout(scheduleScrollRefresh, 400);

    if (isTouchDevice() || prefersReducedMotion()) {
      return () => {
        window.removeEventListener("load", onLoad);
        window.clearTimeout(initialRefresh);
      };
    }

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const tickerCb = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tickerCb);
    gsap.ticker.lagSmoothing(0);

    return () => {
      window.removeEventListener("load", onLoad);
      window.clearTimeout(initialRefresh);
      gsap.ticker.remove(tickerCb);
      lenis.destroy();
    };
  }, []);

  return null;
}

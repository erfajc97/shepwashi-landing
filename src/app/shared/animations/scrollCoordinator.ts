import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let pendingRefresh = false;
let refreshTimeoutId: number | null = null;

const REFRESH_DEBOUNCE_MS = 100;

function flushRefresh() {
  refreshTimeoutId = null;
  pendingRefresh = false;
  ScrollTrigger.refresh();
}

export function scheduleScrollRefresh() {
  if (pendingRefresh) return;
  pendingRefresh = true;
  if (refreshTimeoutId !== null) window.clearTimeout(refreshTimeoutId);
  refreshTimeoutId = window.setTimeout(flushRefresh, REFRESH_DEBOUNCE_MS);
}

export function watchImageLoad(img: HTMLImageElement | null) {
  if (!img) return;
  if (img.complete && img.naturalWidth > 0) {
    scheduleScrollRefresh();
    return;
  }
  const onDone = () => {
    scheduleScrollRefresh();
    img.removeEventListener("load", onDone);
    img.removeEventListener("error", onDone);
  };
  img.addEventListener("load", onDone);
  img.addEventListener("error", onDone);
}

export function watchAllImages(root: HTMLElement | null) {
  if (!root) return;
  root.querySelectorAll<HTMLImageElement>("img").forEach(watchImageLoad);
}

import { useEffect, useRef, useState } from "react";

export default function IntroVideo() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [active, setActive] = useState(true);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    if (active) html.classList.add("intro-locked");
    else html.classList.remove("intro-locked");
    return () => html.classList.remove("intro-locked");
  }, [active]);

  // Start muted so autoplay works on every browser (no poster delay).
  // Try unmuted right after; if blocked, unmute on first user gesture.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.volume = 1;
    v.play()
      .then(() => {
        v.muted = false;
        const p = v.play();
        if (p && typeof p.catch === "function")
          p.catch(() => {
            v.muted = true;
            v.play().catch(() => {});
          });
      })
      .catch(() => {
        /* ignore */
      });

    // Fallback: if nothing fires within 1.2s, show video anyway
    const fallback = window.setTimeout(() => setPlaying(true), 1200);

    const unlock = () => {
      if (v.muted) {
        v.muted = false;
        v.volume = 1;
        v.play().catch(() => {});
      }
      window.removeEventListener("pointerdown", unlock);
      window.removeEventListener("keydown", unlock);
      window.removeEventListener("touchstart", unlock);
    };
    window.addEventListener("pointerdown", unlock, { passive: true });
    window.addEventListener("keydown", unlock);
    window.addEventListener("touchstart", unlock, { passive: true });
    return () => {
      window.clearTimeout(fallback);
      window.removeEventListener("pointerdown", unlock);
      window.removeEventListener("keydown", unlock);
      window.removeEventListener("touchstart", unlock);
    };
  }, []);

  const finish = () => {
    document.documentElement.dataset.introDone = "1";
    const el = overlayRef.current;
    if (!el) {
      setActive(false);
      window.dispatchEvent(new CustomEvent("intro:done"));
      return;
    }
    el.style.transition = "opacity 800ms ease, transform 800ms ease";
    el.style.opacity = "0";
    el.style.transform = "scale(1.04)";
    window.setTimeout(() => {
      setActive(false);
      window.dispatchEvent(new CustomEvent("intro:done"));
    }, 800);
  };

  if (!active) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-100 bg-black overflow-hidden"
      style={{ width: "100vw", height: "100svh" }}
      role="dialog"
      aria-label="Intro Shepwashi"
    >
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-contain md:object-cover transition-opacity duration-200"
        style={{ opacity: playing ? 1 : 0 }}
        playsInline
        autoPlay
        muted
        preload="auto"
        onPlaying={() => setPlaying(true)}
        onTimeUpdate={() => setPlaying(true)}
        onCanPlay={() => setPlaying(true)}
        onEnded={finish}
      >
        <source src="/videos/intro.mp4" type="video/mp4" />
        <source src="/videos/intro.webm" type="video/webm" />
      </video>
    </div>
  );
}

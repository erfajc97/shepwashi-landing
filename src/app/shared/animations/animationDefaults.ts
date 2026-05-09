export const FADE_UP = {
  y: 24,
  duration: 1.1,
  ease: "power2.out",
  stagger: 0.12,
} as const;

export const FADE_UP_LARGE = {
  y: 40,
  duration: 1,
  ease: "power2.out",
} as const;

export const SCROLL_TRIGGER_REVEAL = {
  start: "top 85%",
  toggleActions: "play none none reverse",
} as const;

export const SCROLL_TRIGGER_STEP_REVEAL = {
  start: "top 90%",
  toggleActions: "play none none reverse",
} as const;

export const SCRUB_SOFT = 1;
export const SCRUB_MEDIUM = 1.2;

export const BADGE_POP = {
  scale: 0.5,
  duration: 0.8,
  ease: "back.out(1.7)",
} as const;

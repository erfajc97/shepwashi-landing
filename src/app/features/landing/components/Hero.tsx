import { useRef } from "react";
import { useHeroIntro } from "../hooks/useHeroIntro";
import { HeroBackground } from "./HeroBackground";
import { HeroAura } from "./HeroAura";
import { HeroButterfly } from "./HeroButterfly";
import { HeroContent } from "./HeroContent";
import { HeroLogo } from "./HeroLogo";

export default function Hero() {
  const rootRef = useRef<HTMLDivElement>(null);
  useHeroIntro({ rootRef });

  return (
    <section
      ref={rootRef}
      className="relative isolate overflow-hidden h-svh flex flex-col bg-black"
    >
      <HeroBackground />
      <HeroAura />
      <HeroButterfly />
      <HeroContent />
      <HeroLogo />
    </section>
  );
}

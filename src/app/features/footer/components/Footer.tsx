import { useRef } from "react";
import { useFadeUpOnScroll } from "@/app/shared/animations/useFadeUpOnScroll";
import { COMPANIA, SOLUCIONES } from "../data/links";
import { FooterBlogCard } from "./FooterBlogCard";
import { FooterBrand } from "./FooterBrand";
import { FooterCol } from "./FooterCol";

export default function Footer() {
  const rootRef = useRef<HTMLElement>(null);

  useFadeUpOnScroll({ rootRef, selector: "[data-footer-reveal]" });

  return (
    <footer
      ref={rootRef}
      className="relative w-full overflow-hidden bg-black pt-20 sm:pt-24 md:pt-28 isolate"
      aria-label="Pie de página"
    >
      <img
        src="/images/bg-desktop.png"
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(0,0,0,0.55)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-8">
        <FooterBlogCard />

        <div
          data-footer-reveal
          className="mt-14 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-10"
        >
          <FooterBrand />
          <FooterCol title="Soluciones" items={SOLUCIONES} />
          <FooterCol title="Compañía" items={COMPANIA} />
        </div>

        <div className="mt-10 border-t border-white/15" />
      </div>

      <div
        data-footer-reveal
        className="relative z-10 mt-6 flex justify-center pointer-events-none select-none"
      >
        <img
          src="/images/ShepwashiOfficialLogobig.png"
          alt=""
          aria-hidden="true"
          decoding="async"
          className="opacity-15 object-contain"
          style={{ height: "clamp(60px, 9vw, 140px)", width: "auto" }}
          draggable={false}
        />
      </div>
    </footer>
  );
}

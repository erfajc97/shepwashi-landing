import { useRef, useState } from "react";
import { useFadeUpOnScroll } from "@/app/shared/animations/useFadeUpOnScroll";
import { gradientTextVertical } from "@/app/shared/styles/textGradients";
import { FAQS } from "../data/faqs";
import { FaqItem } from "./FaqItem";
import { ContactoForm } from "./ContactoForm";

export default function ContactoFaq() {
  const rootRef = useRef<HTMLElement>(null);
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  useFadeUpOnScroll({ rootRef, selector: "[data-contacto-reveal]" });

  return (
    <section
      ref={rootRef}
      className="relative w-full overflow-hidden bg-black py-20 sm:py-24 md:py-28 isolate"
      aria-label="Preguntas frecuentes y contacto"
    >
      <img
        src="/images/bg-desktop.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(0,0,0,0.55)" }}
      />

      <img
        src="/images/butterfly.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute select-none"
        style={{
          left: "50%",
          top: "55%",
          transform: "translate(-50%, -50%)",
          width: "min(100vw, 900px)",
          opacity: 0.18,
          filter: "blur(1px) brightness(0.7)",
          zIndex: 1,
        }}
        draggable={false}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-5 md:px-8">
        <h2
          data-contacto-reveal
          className="font-heading uppercase"
          style={{
            ...gradientTextVertical,
            fontSize: "clamp(1.85rem, 5vw, 4rem)",
            letterSpacing: "0.02em",
            lineHeight: 1.05,
            textAlign: "left",
          }}
        >
          Preguntas
          <br />
          frecuentes
        </h2>

        <div
          data-contacto-reveal
          className="mt-10 sm:mt-12 border border-[#43C3FF]/60 bg-black/50 backdrop-blur-sm rounded-md px-5 sm:px-7"
          style={{
            boxShadow: "0 0 40px -10px rgba(67,195,255,0.25) inset",
          }}
        >
          {FAQS.map((faq, i) => (
            <FaqItem
              key={faq.q}
              faq={faq}
              isOpen={openIdx === i}
              onToggle={() => setOpenIdx((prev) => (prev === i ? null : i))}
            />
          ))}
        </div>

        <div
          data-contacto-reveal
          className="mt-10 sm:mt-12 flex justify-center"
        >
          <a
            href="#contacto"
            className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-black text-white text-sm sm:text-base font-medium border border-white/30 hover:bg-white/10 transition-colors"
          >
            Agendar diagnóstico
          </a>
        </div>

        <div
          id="contacto"
          className="mt-20 sm:mt-24 md:mt-28 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-start"
        >
          <div className="flex flex-col">
            <h3
              data-contacto-reveal
              className="font-heading uppercase text-white"
              style={{
                fontSize: "clamp(1.6rem, 3.6vw, 2.8rem)",
                letterSpacing: "0.02em",
                lineHeight: 1.1,
              }}
            >
              Conversemos
              <br />
              sobre tu proyecto
            </h3>
            <p
              data-contacto-reveal
              className="mt-5 text-sm sm:text-base text-white/80 leading-relaxed max-w-md"
            >
              En una llamada corta entendemos tu reto y te proponemos un
              alcance claro: qué construir, por fases, con prioridades y
              entregables.
            </p>
          </div>

          <ContactoForm />
        </div>
      </div>
    </section>
  );
}

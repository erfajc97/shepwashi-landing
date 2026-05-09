import { useRef } from "react";
import { useFadeUpOnScroll } from "@/app/shared/animations/useFadeUpOnScroll";
import { gradientTextVertical } from "@/app/shared/styles/textGradients";

const SOLUCIONES = ["IA Aplicada", "Ciberseguridad", "Fintech", "Desarrollo técnico"];
const COMPANIA = ["Servicios", "Casos de éxito", "Recursos", "Nosotros"];

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
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(0,0,0,0.55)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-8">
        <div
          data-footer-reveal
          className="relative w-full max-w-4xl mx-auto"
        >
          <img
            src="/images/blog.png"
            alt=""
            aria-hidden="true"
            className="block w-full h-auto select-none"
            style={{ maxHeight: "420px", objectFit: "contain" }}
            draggable={false}
          />
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-12 sm:px-16 md:px-24 lg:px-28">
            <div className="w-full flex flex-col items-center" style={{ maxWidth: "640px" }}>
              <h2
                className="font-heading uppercase"
                style={{
                  ...gradientTextVertical,
                  fontSize: "clamp(1.85rem, 5vw, 4rem)",
                  letterSpacing: "0.02em",
                  lineHeight: 1.05,
                  textAlign: "center",
                }}
              >
                Visita nuestro blog
              </h2>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="mt-4 sm:mt-6 flex w-full"
              >
                <label htmlFor="blog-search" className="sr-only">
                  Buscar en el blog
                </label>
                <div className="relative w-full">
                  <input
                    id="blog-search"
                    type="text"
                    placeholder="Buscar artículos..."
                    className="w-full h-10 sm:h-11 rounded-full bg-white text-black text-sm px-4 pr-11 outline-none focus:ring-2 focus:ring-[#43C3FF]/60"
                  />
                  <button
                    type="submit"
                    aria-label="Buscar"
                    className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-black text-white flex items-center justify-center hover:bg-white/10 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <circle cx="11" cy="11" r="7" />
                      <path d="M21 21l-4.3-4.3" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div
          data-footer-reveal
          className="mt-14 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-10"
        >
          <div className="flex flex-col gap-3">
            <img
              src="/images/ShepwashiOfficialLogobig.png"
              alt="Shepwashi"
              className="object-contain"
              style={{ height: "28px", width: "auto", maxWidth: "180px" }}
              draggable={false}
            />
            <p className="text-sm text-white/75 leading-relaxed">
              IA · Ciberseguridad · Fintech · Desarrollo técnico
            </p>
          </div>

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
          className="opacity-15 object-contain"
          style={{
            height: "clamp(60px, 9vw, 140px)",
            width: "auto",
          }}
          draggable={false}
        />
      </div>
    </footer>
  );
}

type ColProps = {
  title: string;
  items: string[];
};

function FooterCol({ title, items }: ColProps) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-white text-sm sm:text-base font-bold normal-case tracking-normal">
        {title}
      </h3>
      <ul className="flex flex-col gap-2">
        {items.map((item) => (
          <li key={item}>
            <a
              href="#"
              className="text-sm text-white/75 hover:text-white transition-colors"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

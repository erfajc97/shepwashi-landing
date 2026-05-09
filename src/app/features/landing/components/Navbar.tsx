import { useEffect, useState } from "react";

const links = [
  { href: "#soluciones", label: "Soluciones" },
  { href: "#portafolio", label: "Portafolio" },
  { href: "#casos", label: "Casos" },
  { href: "#recursos", label: "Recursos" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md bg-black/40" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-3 sm:px-5 md:px-8 h-14 sm:h-16 md:h-20 flex items-center justify-between gap-2">
        <a href="/" className="flex items-center gap-2 shrink-0 min-w-0">
          <span className="block h-9 sm:h-11 md:h-14 px-1 sm:px-2 py-1 sm:py-2">
            <img
              src="/images/ShepwashiOfficialLogobig.png"
              alt="Shepwashi"
              decoding="async"
              fetchPriority="high"
              className="h-full w-auto object-contain"
              draggable={false}
            />
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-white/85 hover:text-white transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <a
            href="#agenda"
            className="hidden sm:inline-flex h-9 md:h-10 items-center justify-center rounded-full bg-black border border-white/15 px-3 md:px-5 text-[11px] md:text-sm whitespace-nowrap text-white hover:bg-white/5 transition-colors"
          >
            Agenda diagnostico
          </a>
          <button
            type="button"
            aria-label="Abrir menu"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden h-9 w-9 sm:h-10 sm:w-10 inline-flex items-center justify-center rounded-full border border-white/15 text-white"
          >
            <span className="relative block w-4 h-3">
              <span
                className={`absolute left-0 right-0 top-0 h-px bg-white transition-transform ${
                  open ? "translate-y-1.5 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-white transition-opacity ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 right-0 bottom-0 h-px bg-white transition-transform ${
                  open ? "-translate-y-1.5 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-black/85 backdrop-blur-md border-t border-white/10`}
      >
        <ul className="px-4 sm:px-5 py-3 sm:py-4 flex flex-col gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2.5 sm:py-3 text-sm sm:text-base text-white/90 hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#agenda"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex w-full justify-center h-10 sm:h-11 items-center rounded-full bg-white text-black text-sm font-medium"
            >
              Agenda diagnostico
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

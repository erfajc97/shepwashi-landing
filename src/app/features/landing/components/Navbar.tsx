import { NAV_CTA } from "../data/navLinks";
import { useScrolledFlag } from "../hooks/useScrolledFlag";
import { useToggle } from "../hooks/useToggle";
import { NavbarBurger } from "./NavbarBurger";
import { NavbarLinks } from "./NavbarLinks";
import { NavbarLogo } from "./NavbarLogo";
import { NavbarMobileMenu } from "./NavbarMobileMenu";

export default function Navbar() {
  const scrolled = useScrolledFlag(12);
  const { open, toggle, close } = useToggle();

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md bg-black/40" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-3 sm:px-5 md:px-8 h-14 sm:h-16 md:h-20 flex items-center justify-between gap-2">
        <NavbarLogo />
        <NavbarLinks />
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <a
            href={NAV_CTA.href}
            className="hidden sm:inline-flex h-9 md:h-10 items-center justify-center rounded-full bg-black border border-white/15 px-3 md:px-5 text-[11px] md:text-sm whitespace-nowrap text-white hover:bg-white/5 transition-colors"
          >
            {NAV_CTA.label}
          </a>
          <NavbarBurger open={open} onClick={toggle} />
        </div>
      </nav>

      <NavbarMobileMenu open={open} onClose={close} />
    </header>
  );
}

import { NAV_LINKS } from "../data/navLinks";

export function NavbarLinks() {
  return (
    <ul className="hidden lg:flex items-center gap-8">
      {NAV_LINKS.map((l) => (
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
  );
}

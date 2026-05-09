import { NAV_CTA, NAV_LINKS } from "../data/navLinks";

type Props = {
  open: boolean;
  onClose: () => void;
};

export function NavbarMobileMenu({ open, onClose }: Props) {
  return (
    <div
      className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
        open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      } bg-black/85 backdrop-blur-md border-t border-white/10`}
    >
      <ul className="px-4 sm:px-5 py-3 sm:py-4 flex flex-col gap-1">
        {NAV_LINKS.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              onClick={onClose}
              className="block py-2.5 sm:py-3 text-sm sm:text-base text-white/90 hover:text-white"
            >
              {l.label}
            </a>
          </li>
        ))}
        <li>
          <a
            href={NAV_CTA.href}
            onClick={onClose}
            className="mt-2 inline-flex w-full justify-center h-10 sm:h-11 items-center rounded-full bg-white text-black text-sm font-medium"
          >
            {NAV_CTA.label}
          </a>
        </li>
      </ul>
    </div>
  );
}

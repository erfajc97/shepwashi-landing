export function NavbarLogo() {
  return (
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
  );
}

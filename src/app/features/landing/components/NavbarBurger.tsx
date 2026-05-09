type Props = {
  open: boolean;
  onClick: () => void;
};

export function NavbarBurger({ open, onClick }: Props) {
  return (
    <button
      type="button"
      aria-label="Abrir menu"
      aria-expanded={open}
      onClick={onClick}
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
  );
}

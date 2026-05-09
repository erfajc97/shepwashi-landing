export function HeroLogo() {
  return (
    <div className="relative w-full overflow-hidden pb-3 md:pb-5 px-6 md:px-12 z-1">
      <div
        data-anim="wordmark"
        className="mx-auto w-full px-4 md:px-6"
        style={{ maxWidth: 820 }}
      >
        <img
          src="/images/ShepwashiOfficialLogobig.png"
          alt="Shepwashi"
          decoding="async"
          className="block w-full h-auto object-contain select-none pointer-events-none"
          draggable={false}
        />
      </div>
    </div>
  );
}

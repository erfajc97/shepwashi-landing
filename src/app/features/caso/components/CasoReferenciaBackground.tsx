export function CasoReferenciaBackground() {
  return (
    <>
      <img
        data-caso-bg
        src="/images/bg-evento-luntriqa.webp"
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover will-change-transform"
        style={{ objectPosition: "center top" }}
        draggable={false}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(0,0,0,0.35)" }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-32 sm:h-40 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.65) 100%)",
        }}
      />
    </>
  );
}

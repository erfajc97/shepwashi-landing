export function ProcesoStackBackground() {
  return (
    <>
      <img
        src="/images/bg-desktop.png"
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: "center top" }}
        draggable={false}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-32 sm:h-40 pointer-events-none z-1"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.7) 0%, transparent 100%)",
        }}
      />
    </>
  );
}

export function HeroAura() {
  return (
    <>
      <div
        data-anim="circle"
        aria-hidden="true"
        className="pointer-events-none absolute rounded-full z-[-8]"
        style={{
          background: "linear-gradient(180deg, #D9D9D9 0%, #737373 100%)",
          mixBlendMode: "luminosity",
          opacity: 0.55,
          right: "-10%",
          top: "-15%",
          width: "min(45vw, 320px)",
          height: "min(45vw, 320px)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute rounded-full z-[-8]"
        style={{
          top: "15%",
          right: "-12%",
          width: "min(60vw, 750px)",
          height: "min(60vw, 750px)",
          background:
            "radial-gradient(closest-side, rgba(140,108,255,0.45), rgba(67,195,255,0.2) 50%, transparent 75%)",
          filter: "blur(40px)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-24 bg-linear-to-b from-black/70 to-transparent z-[-7]"
      />
    </>
  );
}

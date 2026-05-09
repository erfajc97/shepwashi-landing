export function EnfoquesGlow() {
  return (
    <>
      <div
        aria-hidden="true"
        className="absolute inset-0 z-1 pointer-events-none"
        style={{ backgroundColor: "rgba(0,0,0,0.39)" }}
      />
      <div
        data-glow
        aria-hidden="true"
        className="absolute pointer-events-none rounded-full z-2"
        style={{
          top: "-15%",
          right: "-10%",
          width: "min(60vw, 720px)",
          height: "min(60vw, 720px)",
          background:
            "radial-gradient(closest-side, rgba(33,144,255,0.29), rgba(33,144,255,0.10) 55%, transparent 75%)",
          filter: "blur(40px)",
          opacity: 0.32,
        }}
      />
    </>
  );
}

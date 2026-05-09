export function ProcesoStackButterfly() {
  return (
    <img
      data-stack-butterfly
      src="/images/butterfly.png"
      alt=""
      aria-hidden="true"
      className="pointer-events-none absolute select-none"
      style={{
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        width: "min(85vw, 700px)",
        filter: "blur(1px) brightness(0.55)",
        mixBlendMode: "screen",
      }}
      draggable={false}
    />
  );
}

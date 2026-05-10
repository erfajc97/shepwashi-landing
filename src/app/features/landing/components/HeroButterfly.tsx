export function HeroButterfly() {
  return (
    <img
      data-anim="butterfly"
      src="/images/butterfly.webp"
      alt=""
      aria-hidden="true"
      decoding="async"
      className="pointer-events-none absolute select-none z-[-7]"
      style={{
        left: "50%",
        top: "40%",
        transform: "translate(-50%, -50%)",
        width: "min(105vw, 1000px)",
        opacity: 0.22,
        filter: "blur(1px) brightness(0.7)",
      }}
      draggable={false}
    />
  );
}

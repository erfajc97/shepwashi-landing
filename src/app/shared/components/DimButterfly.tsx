type Props = {
  width?: string;
  opacity?: number;
  top?: string;
  blendMode?: "normal" | "screen";
  filter?: string;
  dataAttr?: string;
};

export function DimButterfly({
  width = "min(105vw, 1000px)",
  opacity = 0.22,
  top = "50%",
  blendMode = "normal",
  filter = "blur(1px) brightness(0.7)",
  dataAttr,
}: Props) {
  const dataProps = dataAttr ? { [dataAttr]: "" } : {};
  return (
    <img
      {...dataProps}
      src="/images/butterfly.png"
      alt=""
      aria-hidden="true"
      loading="lazy"
      decoding="async"
      className="pointer-events-none absolute select-none"
      style={{
        left: "50%",
        top,
        transform: "translate(-50%, -50%)",
        width,
        opacity,
        filter,
        mixBlendMode: blendMode,
      }}
      draggable={false}
    />
  );
}

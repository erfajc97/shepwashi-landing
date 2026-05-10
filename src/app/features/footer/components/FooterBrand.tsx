export function FooterBrand() {
  return (
    <div className="flex flex-col gap-3">
      <img
        src="/images/ShepwashiOfficialLogobig.webp"
        alt="Shepwashi"
        decoding="async"
        className="object-contain"
        style={{ height: "28px", width: "auto", maxWidth: "180px" }}
        draggable={false}
      />
      <p className="text-sm text-white/75 leading-relaxed">
        IA · Ciberseguridad · Fintech · Desarrollo técnico
      </p>
    </div>
  );
}

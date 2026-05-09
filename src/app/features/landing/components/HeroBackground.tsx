export function HeroBackground() {
  return (
    <picture aria-hidden="true">
      <source srcSet="/images/bg-desktop.png" media="(min-width: 768px)" />
      <img
        src="/images/bg-primary.png"
        alt=""
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover -z-10"
        style={{ objectPosition: "30% 30%" }}
      />
    </picture>
  );
}

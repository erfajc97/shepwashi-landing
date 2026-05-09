type Props = {
  thumbs: string[];
};

export function ProcesoStackSidebar({ thumbs }: Props) {
  return (
    <div
      data-stack-sidebar
      className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-5 lg:left-10 z-30 flex-col gap-3 lg:gap-4"
    >
      <div className="relative">
        {thumbs.map((src, i) => (
          <div
            key={i}
            data-stack-thumb
            className="w-14 h-14 lg:w-16 lg:h-16 rounded-xl overflow-hidden border border-white/15 bg-black/40 mb-3 lg:mb-4 last:mb-0"
          >
            <img
              src={src}
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover opacity-70"
              draggable={false}
            />
          </div>
        ))}
        <div
          data-stack-highlight
          aria-hidden="true"
          className="absolute top-0 left-0 w-14 h-14 lg:w-16 lg:h-16 rounded-xl border-2 pointer-events-none"
          style={{
            borderColor: "#43C3FF",
            boxShadow: "0 0 18px rgba(67,195,255,0.55)",
          }}
        />
      </div>
    </div>
  );
}

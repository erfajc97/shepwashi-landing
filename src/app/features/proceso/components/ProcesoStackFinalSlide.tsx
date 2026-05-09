import { gradientTextHorizontal } from "@/app/shared/styles/textGradients";

type Props = {
  title: string;
  cta: string;
};

export function ProcesoStackFinalSlide({ title, cta }: Props) {
  return (
    <div className="relative h-full w-full flex flex-col items-center justify-center px-5 text-center">
      <h2
        className="font-heading uppercase whitespace-pre-line"
        style={{
          ...gradientTextHorizontal,
          fontSize: "clamp(2.25rem, 6.5vw, 5.5rem)",
          letterSpacing: "0.02em",
          lineHeight: 1.05,
        }}
      >
        {title}
      </h2>
      <a
        href="#contacto"
        className="mt-8 sm:mt-10 inline-flex items-center justify-center h-12 sm:h-14 px-7 sm:px-9 rounded-full text-white text-sm sm:text-base font-medium shadow-lg"
        style={{
          background:
            "linear-gradient(135deg, #2190FF 0%, #43C3FF 60%, #5CC6F0 100%)",
        }}
      >
        {cta}
      </a>
    </div>
  );
}

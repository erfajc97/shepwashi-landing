import { gradientTextVertical } from "@/app/shared/styles/textGradients";

type Props = {
  num: string;
};

export function ProcesoStepBadge({ num }: Props) {
  return (
    <div
      data-pc-badge
      className="relative h-16 w-16 sm:h-20 sm:w-20 rounded-full flex items-center justify-center"
      style={{
        border: "2px solid rgba(67,195,255,0.7)",
        background:
          "radial-gradient(circle at 30% 30%, rgba(33,144,255,0.18), rgba(0,0,0,0.6) 70%)",
        boxShadow:
          "0 0 22px rgba(67,195,255,0.35), inset 0 0 18px rgba(67,195,255,0.12)",
      }}
    >
      <span
        className="font-heading"
        style={{
          ...gradientTextVertical,
          fontSize: "clamp(1.4rem, 2.4vw, 2rem)",
          letterSpacing: "0.04em",
          lineHeight: 1,
        }}
      >
        {num}
      </span>
    </div>
  );
}

import { useRef, type ReactNode } from "react";
import { useScrollProgressDot } from "@/app/shared/animations/useScrollProgressDot";

type Props = {
  children: ReactNode;
};

export function ProcesoTimeline({ children }: Props) {
  const lineRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useScrollProgressDot({ dotRef, lineRef });

  return (
    <div className="relative mt-14 sm:mt-20 md:mt-24 mx-auto max-w-6xl px-5 md:px-8">
      <div
        ref={lineRef}
        aria-hidden="true"
        className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px"
        style={{
          background:
            "linear-gradient(180deg, rgba(67,195,255,0.0) 0%, rgba(67,195,255,0.5) 12%, rgba(67,195,255,0.5) 88%, rgba(67,195,255,0.0) 100%)",
        }}
      />
      <div
        ref={dotRef}
        aria-hidden="true"
        className="hidden md:block absolute left-1/2 top-0 w-3 h-3 rounded-full"
        style={{
          background: "#43C3FF",
          boxShadow:
            "0 0 14px rgba(67,195,255,0.9), 0 0 28px rgba(67,195,255,0.6)",
          marginLeft: "-6px",
        }}
      />
      <div className="space-y-14 sm:space-y-20 md:space-y-28">{children}</div>
    </div>
  );
}

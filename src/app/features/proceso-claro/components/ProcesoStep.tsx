import type { ProcesoStep } from "../data/steps";
import { ProcesoStepBadge } from "./ProcesoStepBadge";

type Props = {
  step: ProcesoStep;
  textRight: boolean;
};

export function ProcesoStepRow({ step, textRight }: Props) {
  return (
    <div
      data-pc-step
      data-dir={textRight ? "right" : "left"}
      className="grid md:grid-cols-2 gap-6 md:gap-12 lg:gap-20 items-center"
    >
      <div
        data-pc-content
        className={`relative flex flex-col ${
          textRight
            ? "md:order-2 md:items-start md:text-left"
            : "md:order-1 md:items-end md:text-right"
        } items-center text-center`}
      >
        <ProcesoStepBadge num={step.num} />
        <h3
          className="mt-5 sm:mt-6 text-white font-semibold whitespace-pre-line"
          style={{
            fontSize: "clamp(1.1rem, 2vw, 1.5rem)",
            lineHeight: 1.2,
          }}
        >
          {step.title}
        </h3>
        {step.description && (
          <p className="mt-2 sm:mt-3 max-w-sm text-sm sm:text-base text-white/75">
            {step.description}
          </p>
        )}
      </div>

      <div
        data-pc-image
        className={`${textRight ? "md:order-1" : "md:order-2"}`}
      >
        <div
          className="relative rounded-2xl overflow-hidden border border-white/10"
          style={{
            boxShadow:
              "0 10px 40px rgba(0,0,0,0.4), 0 0 30px rgba(33,144,255,0.08)",
          }}
        >
          <img
            src={step.image}
            alt={step.title}
            loading="lazy"
            decoding="async"
            className="block w-full h-auto"
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
}

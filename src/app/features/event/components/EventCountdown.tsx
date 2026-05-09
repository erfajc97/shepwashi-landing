import { padTime, type TimeLeft } from "../hooks/useCountdown";

type Props = {
  time: TimeLeft;
};

export function EventCountdown({ time }: Props) {
  const units = [
    { v: time.days, l: "Días" },
    { v: time.hours, l: "Horas" },
    { v: time.minutes, l: "Minutos" },
    { v: time.seconds, l: "Segundos" },
  ];

  return (
    <div
      data-anim
      className="mt-6 md:mt-8 flex items-end justify-center gap-2 sm:gap-4 md:gap-6"
    >
      {units.map((u, i) => (
        <div key={u.l} className="flex items-end gap-2 sm:gap-4 md:gap-6">
          <div className="flex flex-col items-center">
            <span
              className="font-heading text-white tabular-nums leading-none"
              style={{
                fontSize: "clamp(2.5rem, 11vw, 7rem)",
                letterSpacing: "0.02em",
              }}
            >
              {padTime(u.v)}
            </span>
            <span className="mt-2 text-xs sm:text-sm md:text-base text-white/80">
              {u.l}
            </span>
          </div>
          {i < units.length - 1 && (
            <span
              className="font-heading text-white/85 leading-none pb-6 sm:pb-7 md:pb-9"
              style={{ fontSize: "clamp(2rem, 9vw, 5.5rem)" }}
              aria-hidden="true"
            >
              :
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

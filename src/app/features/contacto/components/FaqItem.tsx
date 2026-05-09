import { useEffect, useRef, useState } from "react";
import type { Faq } from "../data/faqs";

type Props = {
  faq: Faq;
  isOpen: boolean;
  onToggle: () => void;
};

export function FaqItem({ faq, isOpen, onToggle }: Props) {
  const answerRef = useRef<HTMLDivElement>(null);
  const [maxH, setMaxH] = useState(0);

  useEffect(() => {
    const el = answerRef.current;
    if (!el) return;
    setMaxH(isOpen ? el.scrollHeight : 0);
  }, [isOpen, faq.a]);

  return (
    <div className="border-b border-white/15 last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between gap-4 py-5 sm:py-6 px-2 text-left text-white hover:text-white/90 transition-colors cursor-pointer"
      >
        <span className="text-sm sm:text-base">{faq.q}</span>
        <span
          aria-hidden="true"
          className="shrink-0 inline-flex items-center justify-center h-6 w-6 transition-transform duration-300"
          style={{
            transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
            color: "#43C3FF",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            className="h-5 w-5"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-400 ease-out"
        style={{ maxHeight: maxH, opacity: isOpen ? 1 : 0 }}
      >
        <div ref={answerRef} className="px-2 pb-5 sm:pb-6 text-sm text-white/75 leading-relaxed">
          {faq.a}
        </div>
      </div>
    </div>
  );
}

import { useEffect, useState, type RefObject } from "react";

export function useFaqHeight(
  ref: RefObject<HTMLElement | null>,
  isOpen: boolean,
  deps: unknown[] = []
) {
  const [maxH, setMaxH] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    setMaxH(isOpen ? el.scrollHeight : 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, ...deps]);

  return maxH;
}

import { useCallback, useState } from "react";

export function useToggle(initial = false) {
  const [open, setOpen] = useState(initial);
  const toggle = useCallback(() => setOpen((v) => !v), []);
  const close = useCallback(() => setOpen(false), []);
  return { open, toggle, close, setOpen };
}

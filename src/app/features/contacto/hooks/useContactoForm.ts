import { useState } from "react";

export function useContactoForm() {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => setSubmitting(false), 800);
  };

  return { submitting, handleSubmit };
}

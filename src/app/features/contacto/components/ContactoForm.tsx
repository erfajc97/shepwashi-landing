import { ContactoField } from "./ContactoField";
import { useContactoForm } from "../hooks/useContactoForm";

export function ContactoForm() {
  const { submitting, handleSubmit } = useContactoForm();

  return (
    <form
      onSubmit={handleSubmit}
      data-contacto-reveal
      className="relative w-full bg-black/55 backdrop-blur-md border border-white/25 px-6 sm:px-8 md:px-10 py-8 sm:py-10 flex flex-col gap-5"
      style={{
        borderTopRightRadius: "5rem",
        borderBottomLeftRadius: "5rem",
        borderTopLeftRadius: 0,
        borderBottomRightRadius: 0,
      }}
    >
      <ContactoField label="Nombre" name="nombre" type="text" required />
      <ContactoField label="Empresa" name="empresa" type="text" required />
      <ContactoField label="Email" name="email" type="email" required />
      <div className="flex flex-col gap-2">
        <label htmlFor="reto" className="text-sm font-semibold text-white">
          Cuéntanos tu reto
        </label>
        <textarea
          id="reto"
          name="reto"
          rows={4}
          required
          className="w-full rounded-2xl bg-white text-black text-sm px-4 py-3 outline-none focus:ring-2 focus:ring-[#43C3FF]/60 resize-none"
        />
      </div>
      <button
        type="submit"
        disabled={submitting}
        className="mt-1 inline-flex items-center justify-center h-11 px-6 rounded-full bg-black text-white text-sm font-medium border border-white/25 hover:bg-white/10 transition-colors disabled:opacity-60 cursor-pointer"
      >
        {submitting ? "Enviando..." : "Agendar diagnostico"}
      </button>
    </form>
  );
}

import { gradientTextVertical } from "@/app/shared/styles/textGradients";

export function ProcesoClaroHeader() {
  return (
    <div className="text-center px-5 md:px-8 max-w-4xl mx-auto">
      <h2
        data-pc-head
        className="font-heading uppercase"
        style={{
          ...gradientTextVertical,
          fontSize: "clamp(2rem, 5.5vw, 4.5rem)",
          letterSpacing: "0.02em",
          lineHeight: 1.05,
        }}
      >
        Un proceso claro para construir sin incertidumbre
      </h2>
      <p
        data-pc-head
        className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-white/75"
      >
        Definimos alcance, diseñamos arquitectura y entregamos con pruebas y
        documentación
      </p>
    </div>
  );
}

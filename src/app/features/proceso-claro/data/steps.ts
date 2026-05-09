export type ProcesoStep = {
  num: string;
  title: string;
  description?: string;
  image: string;
};

export const PROCESO_STEPS: ProcesoStep[] = [
  {
    num: "01",
    title: "Objetivos, riesgos,\nprioridades y fases",
    image: "/images/process-1.png",
  },
  {
    num: "02",
    title: "Diseño técnico y\nseguridad",
    description: "Arquitectura, datos, integraciones y permisos",
    image: "/images/process-2.png",
  },
  {
    num: "03",
    title: "Desarrollo &\nImplementación",
    description: "Iteraciones, validaciones y entregas",
    image: "/images/process-3.png",
  },
  {
    num: "04",
    title: "Pruebas,\ndocumentación y soporte",
    description: "QA, documentación y mantenimiento",
    image: "/images/process-4.png",
  },
];

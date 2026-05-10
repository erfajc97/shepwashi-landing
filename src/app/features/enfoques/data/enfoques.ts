export type Enfoque = {
  num: string;
  tag: string;
  image: string;
  title: string;
  bullets: string[];
  cta: string;
};

export const ENFOQUES: Enfoque[] = [
  {
    num: "01",
    tag: "IA Aplicada",
    image: "/images/enfoque-1.webp",
    title: "Automatiza procesos y mejora decisiones con módulos inteligentes",
    bullets: [
      "Automatización de flujos (reglas + IA)",
      "Extracción y clasificación de información",
    ],
    cta: "Explorar IA",
  },
  {
    num: "02",
    tag: "Ciberseguridad",
    image: "/images/enfoque-2.webp",
    title: "Evaluamos tus protocolos y dejamos un plan de mejora accionable",
    bullets: [
      "Revisión de accesos, permisos y datos",
      "Hallazgos + riesgos por criticidad",
    ],
    cta: "Ver Auditoría",
  },
  {
    num: "03",
    tag: "Fintech",
    image: "/images/enfoque-3.webp",
    title:
      "Plataformas con estándares de seguridad y requisitos corporativos",
    bullets: [
      "Roles, permisos y trazabilidad",
      "Integraciones y validaciones",
    ],
    cta: "Ver Fintech",
  },
  {
    num: "04",
    tag: "Desarrollo a la Medida",
    image: "/images/enfoque-4.webp",
    title: "Sistemas a medida, integraciones y arquitectura escalable",
    bullets: [
      "Back-end, front-end y APIs",
      "Escalabilidad y buenas prácticas",
      "Pruebas, documentación y soporte",
    ],
    cta: "Ver Desarrollo",
  },
];

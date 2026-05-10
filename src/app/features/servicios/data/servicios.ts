export type LabelPos = "bottom-left" | "top-center" | "bottom-right";

export type Servicio = {
  id: string;
  title: string;
  label: string;
  labelPos: LabelPos;
  image: string;
  bullets: string[];
  cta: string;
};

export const SERVICIOS: Servicio[] = [
  {
    id: "ux",
    title: "UX/UI",
    label: "UI UX",
    labelPos: "bottom-left",
    image: "/images/ux.webp",
    bullets: [
      "Investigación y validación rápida",
      "Prototipos y diseño de interfaz",
      "Sistema de diseño (sí aplica)",
      "UX Research",
    ],
    cta: "Explorar IA",
  },
  {
    id: "marketing",
    title: "Marketing",
    label: "MARKETING",
    labelPos: "top-center",
    image: "/images/marketing.webp",
    bullets: [
      "Propuesta de valor y mensaje",
      "Landing pages orientadas a conversión",
      "Analítica y medición",
      "SEO y posicionamiento",
    ],
    cta: "Explorar IA",
  },
  {
    id: "email-mkt",
    title: "Email MKT",
    label: "EMAIL MKT",
    labelPos: "bottom-right",
    image: "/images/email-mk.webp",
    bullets: [
      "Automatizaciones (bienvenida, retención, reactivación)",
      "Segmentación y campañas",
      "Entregabilidad y configuración técnica",
    ],
    cta: "Explorar IA",
  },
];

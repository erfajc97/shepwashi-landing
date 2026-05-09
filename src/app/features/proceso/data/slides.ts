export type ProcesoSlide = {
  title: string;
  cta: string;
  link?: string;
  description?: string;
  showLuntriqa?: boolean;
};

export const PROCESO_SLIDES: ProcesoSlide[] = [
  {
    title: "Modulo\nVentas al piso",
    cta: "Ver el proyecto",
    link: "¿Cómo nos preparamos?",
    description:
      "Conozca como hemos desarrollado la plataforma de ventas de seguros con la trazabilidad mas alta del mercado. Hemos diseñado un sistema robusto que permite tener control de tus ventas de manera centralizada",
    showLuntriqa: true,
  },
  {
    title: "Nuestro reto\nmas grande",
    cta: "Conozca el proceso",
    description:
      "Centralizamos la operación de ventas y seguimiento, reduciendo errores y garantizando acceso seguro por roles",
  },
  {
    title: "Lo que\nconstruimos",
    cta: "Ver el proyecto",
    description:
      "Conozca como hemos desarrollado la plataforma de ventas de seguros con la trazabilidad mas alta del mercado. Hemos diseñado un sistema robusto que permite tener control de tus ventas de manera centralizada",
  },
  {
    title: "Resultado\nesperado",
    cta: "El resultado final",
    description:
      "Más control operativo y una base sólida para crecer y auditar.",
  },
];

export const PROCESO_FINAL = {
  title: "Quieres algo\nsimilar?",
  cta: "Contactar al equipo especializado",
};

export const PROCESO_THUMBS = [
  "/images/enfoque-1.png",
  "/images/enfoque-4.png",
  "/images/enfoque-2.png",
  "/images/enfoque-3.png",
];

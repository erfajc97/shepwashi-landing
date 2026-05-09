export type Faq = {
  q: string;
  a: string;
};

export const FAQS: Faq[] = [
  {
    q: "¿Qué incluye la auditoría de Ciberseguridad?",
    a: "Revisamos accesos, permisos, manejo de datos y exposición de tus servicios. Entregamos un reporte con hallazgos clasificados por criticidad y un plan de mejora priorizado.",
  },
  {
    q: "¿Trabajan por fases o por MVP?",
    a: "Trabajamos por fases con foco en MVP: primero validamos el alcance mínimo viable, lo entregamos en producción y luego iteramos con métricas reales del negocio.",
  },
  {
    q: "¿Qué entregables recibiré?",
    a: "Recibes código fuente, documentación técnica, pruebas, accesos a infraestructura y un manual de operación. Todo bajo tu propiedad y versionado en tu repositorio.",
  },
  {
    q: "¿Pueden integrar con mis sistemas actuales?",
    a: "Sí. Nos integramos vía APIs, webhooks, bases de datos o eventos según el caso. Antes de construir hacemos una sesión técnica para validar la arquitectura existente.",
  },
];

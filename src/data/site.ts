export const SITE = {
  url: "https://shepwashi.com",
  name: "Shepwashi",
  title: "Shepwashi — Aliado tecnológico de largo plazo en LATAM",
  description:
    "Consulting de IA, desarrollo a la medida e innovación para empresas en LATAM. No somos un proveedor puntual: somos el equipo que acompaña la ejecución hasta que funciona.",
};

export const NAV_LINKS = [
  { href: "#servicios",  label: "Servicios" },
  { href: "#marcas",     label: "Marcas" },
  { href: "#summit",     label: "Summit" },
  { href: "#clientes",   label: "Clientes" },
  { href: "#contacto",   label: "Contacto" },
];

export const HERO = {
  eyebrow: "Aliado tecnológico · LATAM",
  headline: "Tecnología que transforma operaciones reales",
  subhead:
    "Consulting de IA, desarrollo a la medida e innovación en sectores clave. No somos un proveedor puntual.",
  ctaPrimary: "Habla con nuestro equipo",
  ctaSecondary: "Conocer nuestras marcas",
  metrics: [
    { icon: "award",  value: "65+",   label: "Años de experiencia ejecutiva" },
    { icon: "layers", value: "3",     label: "Marcas propias en el mercado" },
    { icon: "globe",  value: "LATAM", label: "Presencia regional" },
  ],
};

export const SERVICIOS = {
  eyebrow: "Lo que construimos",
  title: "Tres focos, una visión",
  bajada:
    "Seleccionamos tecnología según el resultado del cliente, no según la moda.",
  items: [
    {
      n: "I",
      title: "Consulting de IA",
      body: "Identificamos dónde la inteligencia artificial genera valor real en tu organización. Diseñamos, integramos y medimos — sin promesas vacías ni pilotos que nunca escalan.",
      points: [
        "Diagnóstico de madurez digital y oportunidades de IA",
        "Diseño e implementación de agentes y flujos automatizados",
        "Stack: OpenAI · Claude/Anthropic · Gemini · n8n · Make",
        "Medición de ROI y acompañamiento post-implementación",
      ],
    },
    {
      n: "II",
      title: "Desarrollo a la medida",
      body: "Software que encaja en tus procesos, no al revés. Desde integraciones complejas hasta plataformas completas, con foco en calidad de experiencia y seguridad desde el primer sprint.",
      points: [
        "Aplicaciones web y mobile full-stack",
        "Integraciones con sistemas legados y APIs de terceros",
        "UI/UX de alto nivel — diseño funcional, no decorativo",
        "Ciberseguridad integrada en el proceso de desarrollo",
      ],
    },
    {
      n: "III",
      title: "Ciberseguridad",
      body: "Seguridad incorporada desde el primer sprint, no añadida al final. Protegemos datos, integraciones e infraestructura con estándares exigentes.",
      points: [
        "Seguridad integrada en el ciclo de desarrollo",
        "Protección de datos e integraciones críticas",
        "Revisión de vulnerabilidades y hardening de infraestructura",
        "Buenas prácticas y cumplimiento del sector",
      ],
    },
  ],
};

export const MARCAS = {
  eyebrow: "Nuestras marcas",
  title: "Tecnología propia, mercados reales",
  bajada:
    "No solo construimos para otros. Shepwashi crea, lanza y opera sus propias marcas en sectores estratégicos de LATAM.",
  items: [
    {
      key: "luntriqa",
      name: "Luntriqa",
      logo: "/images/luntriqa.webp",
      logoH: 38,
      tag: "Vertical Insurtech",
      accent: "var(--acc-luntriqa)",
      body: "La vertical insurtech de Shepwashi para LATAM. Desarrollamos soluciones a la medida e implementamos IA para aseguradoras y brokers — con conocimiento profundo del sector y enfoque en resultados operativos reales.",
      points: [
        "Desarrollo a la medida para aseguradoras y brokers",
        "Implementación de IA en procesos del sector asegurador",
        "Integraciones con sistemas legacy del mercado insurtech",
        "Consultoría especializada en transformación digital del seguro",
      ],
    },
    {
      key: "tododomi",
      name: "TodoDomi",
      logo: "/images/tododomi.PNG",
      logoH: 56,
      tag: "Marca propia · Delivery premium",
      accent: "var(--acc-tododomi)",
      body: "La primera aplicación de delivery premium en las Islas Galápagos. Conecta a residentes y visitantes con los mejores comercios locales a través de una experiencia de entrega de alto nivel.",
      points: [
        "App nativa para iOS y Android",
        "Modelo premium: énfasis en calidad de producto y entrega",
        "Ecosistema local: integra comercios galapagueños",
        "Primera plataforma de este tipo en el archipiélago",
      ],
    },
    {
      key: "todoservy",
      name: "TodoServy",
      logo: "/images/todoservy.PNG",
      logoH: 52,
      tag: "Marca propia · Directorio de servicios",
      accent: "var(--acc-todoservy)",
      body: "El directorio universal de profesionales y servicios. Conecta a personas y empresas con los proveedores correctos de forma rápida, confiable y estructurada.",
      points: [
        "Directorio categorizado de profesionales y empresas",
        "Sistema de perfiles verificados con valoraciones",
        "Búsqueda por especialidad, ubicación y disponibilidad",
        "Plataforma escalable a múltiples mercados en LATAM",
      ],
    },
  ],
};

export const SUMMIT = {
  eyebrow: "Evento ancla",
  title: "Qarybe Summit",
  bg: "/images/Four-Seasons-Hotel-and-Residences-swimmpool-in-Cartagena.webp",
  fechas: "24 — 26 Septiembre · 2026",
  sede: "Four Seasons Hotel · Cartagena, Colombia",
  copy: "Qarybe Summit es el espacio que Shepwashi creó para que los líderes de tecnología de LATAM se encuentren, debatan y construyan. No es una conferencia masiva: es una conversación exclusiva entre quienes toman decisiones.",
  ficha: [
    { k: "Fechas",       v: "24 — 26 de septiembre de 2026" },
    { k: "Sede",         v: "Four Seasons Hotel — Cartagena, Colombia" },
    { k: "Formato",      v: "Solo por invitación · Cupos limitados · Presencial · Todo incluido" },
    { k: "Audiencia",    v: "Líderes de tecnología, innovación, insurtech y fintech de LATAM" },
    { k: "Temáticas",    v: "IA aplicada · Desarrollo a medida · Insurtech · Fintech · Innovación" },
    { k: "Organizador",  v: "Producido por Shepwashi" },
  ],
  cta: "Solicitar invitación",
  note: "Cupos limitados por edición. Experiencia todo incluido durante los tres días.",
};

export const PROYECTOS = {
  eyebrow: "Portafolio",
  title: "Trabajo real, impacto medible",
  bajada:
    "Un proyecto bien contado vale más que diez logos de herramientas. Esto es lo que hemos resuelto.",
  items: [
    {
      vertical: "Insurtech",
      title: "Plataforma de IA para aseguradoras",
      problema: "Procesos de suscripción y siniestros lentos, manuales y dependientes de sistemas legacy.",
      solucion: "Implementamos agentes de IA e integraciones que automatizan suscripción y validación de siniestros sobre la infraestructura existente.",
      impacto: "Menos tiempo operativo por caso y decisiones más rápidas y consistentes.",
      tech: ["OpenAI", "n8n", "APIs legacy", "Full-stack"],
    },
    {
      vertical: "Delivery",
      title: "App de delivery premium — Galápagos",
      problema: "El archipiélago no contaba con un servicio de delivery confiable y de calidad.",
      solucion: "Construimos una app nativa iOS/Android que conecta comercios locales con residentes y visitantes en una experiencia de entrega premium.",
      impacto: "Primera plataforma de delivery premium operando en las Islas Galápagos.",
      tech: ["React Native", "Node", "Maps", "Pagos"],
    },
    {
      vertical: "Servicios",
      title: "Directorio universal de servicios",
      problema: "Encontrar profesionales confiables es lento, disperso y poco verificable.",
      solucion: "Plataforma con perfiles verificados, valoraciones y búsqueda estructurada por especialidad, ubicación y disponibilidad.",
      impacto: "Marketplace escalable, listo para crecer a múltiples mercados de LATAM.",
      tech: ["Full-stack web", "Búsqueda", "Perfiles", "Cloud"],
    },
  ],
  cta: "Ver portafolio completo",
  // NOTA DEV: confirmar cifras e impacto reales con el equipo antes de publicar.
};

export const CLIENTES = {
  eyebrow: "Empresas que confían en Shepwashi",
  title: "Confianza construida con trabajo, no con discursos.",
  body: "Acompañamos a empresas que ya tomaron la decisión de avanzar — desde aseguradoras hasta operadores de servicios y marcas de consumo en LATAM.",
  // NOTA DEV: cuando haya logos o testimonios reales, reemplazar estas
  // tarjetas de sector por el bloque de logos en escala de grises.
  sectores: [
    {
      icon: "shield",
      title: "Aseguradoras y brokers",
      body: "Transformación digital e IA para el sector asegurador de la región.",
    },
    {
      icon: "grid",
      title: "Operadores de servicios",
      body: "Plataformas, integraciones y automatización para empresas de servicios.",
    },
    {
      icon: "spark",
      title: "Marcas de consumo",
      body: "Productos digitales y experiencias para marcas que están escalando.",
    },
  ],
};

export const PRINCIPIOS = {
  eyebrow: "Cómo trabajamos",
  title: "Alianza, no transacción",
  bajada:
    "Dos empresas pueden ofrecer los mismos servicios. La que explica cómo trabaja genera más confianza.",
  items: [
    {
      n: "01",
      title: "Diagnóstico honesto",
      lead: "Antes de proponer, entendemos",
      body: "Te decimos qué tiene sentido tecnológicamente y qué no — aunque eso signifique recomendar una solución más simple.",
    },
    {
      n: "02",
      title: "Tecnología adecuada",
      lead: "Sin vendor lock-in innecesario",
      body: "Seleccionamos el stack que mejor sirve al caso de uso, no el que nos es más cómodo vender.",
    },
    {
      n: "03",
      title: "Entrega iterativa",
      lead: "Valor desde la primera fase",
      body: "Sin esperar 6 meses para ver un resultado. Construimos en sprints cortos con revisión real contigo.",
    },
    {
      n: "04",
      title: "Acompañamiento real",
      lead: "Post-lanzamiento seguimos en la mesa",
      body: "Tu éxito operativo es nuestra métrica de éxito. No desaparecemos cuando el proyecto se entrega.",
    },
  ],
};

export const CONTACTO = {
  eyebrow: "Hablemos",
  title: "¿Tienes un desafío tecnológico real?",
  body: "Cuéntanos qué quieres resolver. Nuestro equipo responde en menos de 24 horas con una perspectiva honesta, sin presión de venta.",
  ctaSecondary: "Conocer nuestras marcas",
  note: "Respondemos en menos de 24 horas. Sin presión de venta.",
};

// Endpoint del formulario de contacto. Pegar el endpoint de Formspree
// (https://formspree.io/f/XXXXXXX) o la API propia cuando esté lista.
// Vacío = modo demo (muestra confirmación sin enviar).
export const FORM_ENDPOINT = "";

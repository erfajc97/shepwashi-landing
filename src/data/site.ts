export const SITE = {
  url: "https://shepwashi.com",
  name: "Shepwashi",
  title: "Shepwashi — Inteligencia. Tecnología. Diseño. · LatAm & Caribe",
  description:
    "La firma que sabe, construye y asesora — en LatAm & Caribe. Inteligencia ejecutiva, tecnología de frontera y soluciones a medida con IA.",
};

export const NAV_LINKS = [
  { href: "#pilares",   label: "Quiénes somos" },
  { href: "#summit",    label: "Summit" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#origen",    label: "Origen" },
  { href: "#talento",   label: "Talento" },
  { href: "#contacto",  label: "Contacto" },
];

export const HERO = {
  kicker: "LatAm & Caribe",
  // tres líneas — la tercera en italic gold
  lines: ["Inteligencia.", "Tecnología.", "Shepwashi."],
  subhead:
    "La firma que sabe, construye y asesora. La inteligencia para saber qué construir — y la tecnología para construirlo.",
  cta: "Diseñemos.",
  gloss: {
    word: "Shepwashi",
    rest: "diseño en chukchansi, lengua indígena de California.",
  },
};

// ── Pilares · Quiénes somos ──────────────────────────────────
export const PILARES = {
  eyebrow: "Quiénes somos",
  title: "Una firma única en su clase.",
  lede:
    "Las globales entienden la tecnología pero no la región. Las locales conocen la región pero no tienen la profundidad técnica. Solo una firma vive en el cruce de las dos — en LatAm & Caribe.",
  items: [
    {
      idx: "I",
      title: "Inteligencia",
      es: "Sabe",
      body: "Mentes de élite de disciplinas distintas, unidas por una sola destreza: leer el mercado, y trascenderlo. Economistas, estrategas y ejecutivos con posgrados avanzados que han convertido organizaciones en líderes de mercado. A eso sumamos una expertise geopolítica, histórica y socioeconómica de LatAm & Caribe — la diferencia entre usar tecnología y entender el terreno donde se aplica. Trabajamos a través de industrias — de fintech e insurtech a turismo, logística y capital privado.",
      stat: { n: "75+", t: "años de experiencia ejecutiva de alto nivel · expertise regional" },
      tags: ["Estrategia ejecutiva", "Geopolítica regional", "Gobierno & empresa"],
    },
    {
      idx: "II",
      title: "Tecnología",
      es: "Construye",
      body: "Un equipo técnico de primer nivel, con capacidad de élite para construir lo que otros solo proponen. Construcción personalizada — tecnología hecha a la medida de cada organización — y soluciones que se adaptan a lo que el caso necesita. Inteligencia artificial implementada con criterio, y ciberseguridad integrada desde el primer trazo — no añadida al final. Lo más alto del estado del arte, construido para perdurar — potencia que se sostiene en el tiempo, no algo que se rehace.",
      stat: { n: "IA · AI", t: "Inteligencia Artificial · Artificial Intelligence — construida, no improvisada" },
      tags: ["Inteligencia Artificial · AI", "Construcción personalizada", "Soluciones a medida", "Ciberseguridad"],
    },
    {
      idx: "III",
      title: "Diseño",
      es: "Shepwashi",
      body: "Donde la inteligencia y la tecnología se vuelven una. Asesoría con la profundidad de quien también ejecuta — y cuando llega el momento de construir, lo hace el mismo equipo que lo pensó. Eso es diseño: la forma que toman las cosas hechas con intención.",
      stat: null,
      tags: ["Asesora", "Diseño + ejecución", "Un solo equipo"],
    },
  ],
};

// ── Discernimiento · Sobre la IA ─────────────────────────────
export const DISCERNIMIENTO = {
  eyebrow: "Sobre la IA",
  big: "La inteligencia artificial no es la respuesta a todo. Lo valioso es saber cuándo sí, y cuándo no.",
  bigEm: "cuándo sí, y cuándo no.",
  sub1:
    "Te damos el criterio — y las herramientas — para decidir cuándo la IA entra en la ecuación y cuándo no. Y cuando sí corresponde, la implementamos de la forma correcta: lo que tiene sentido, donde genera valor real, sin gasto que no se justifica.",
  stats: [
    {
      n: "$725 B",
      t: "el gasto combinado en IA de Microsoft, Amazon, Google y Meta para 2026 — 77% más que el año récord anterior.",
      src: "Financial Times, 2026",
    },
    {
      n: "95%",
      t: "de los pilotos de IA no generan ningún retorno medible.",
      src: "MIT, 2025",
    },
  ],
  capex: [
    { b: "Amazon", v: "~$200 B" },
    { b: "Microsoft", v: "~$190 B" },
    { b: "Google", v: "~$185 B" },
    { b: "Meta", v: "~$145 B" },
  ],
  capexNote: "— y sus propios inversionistas ya preguntan por el retorno.",
  sub2:
    "Estamos en plena ola — y la mayoría está construyendo sistemas que va a desechar. Nosotros nos posicionamos del otro lado: somos los que entienden cómo se verá esto cuando el boom se asiente. No se trata de gastar en IA ni de usarla por usarla. Se trata de integrar estos sistemas hoy, de forma sostenible — para que sigan sirviendo cuando el ruido pase, en lugar de volverse una carga ineficiente que toca arrancar y rehacer.",
  sub3:
    "Y no leemos el mercado desde afuera. Tenemos acceso a frentes que la mayoría no ve — desde IA sostenible hasta el conocimiento técnico de hacia dónde realmente avanza la tecnología. Ahí está la diferencia entre seguir la tendencia y entenderla.",
};

// ── Summit ───────────────────────────────────────────────────
export const SUMMIT = {
  eyebrow: "El evento que creamos",
  name: "Qarybe Summit",
  phon: "/ka·ri·be/",
  tagline: "10,000 years in the making.",
  bg: "/images/Four-Seasons-Hotel-and-Residences-swimmpool-in-Cartagena.webp",
  details: [
    { k: "Fechas", v: "24 — 26 Septiembre · 2026" },
    { k: "Sede", v: "Four Seasons · Cartagena" },
    { k: "Formato", v: "Solo por invitación" },
  ],
  intro:
    "El espacio que Shepwashi creó para que los líderes de tecnología de la región se encuentren a puerta cerrada. Lo que se presenta aquí no se repite afuera.",
  cta: "Conocer el Summit",
  ctaHref: "https://qaribe.netlify.app/",
};

// ── Proyectos · Tecnología propia (in-house) ─────────────────
// NOTA DEV: TodoDomi y TodoServy existen pero aún no se debutan por nombre.
// El equipo aplica el nombre real, el logo y los assets cuando corresponda.
export const PROYECTOS = {
  eyebrow: "In-house",
  title: "Tecnología propia.",
  lede:
    "Shepwashi crea, lanza y opera su propia tecnología en sectores estratégicos de la región. La prueba no se argumenta — se construye.",
  items: [
    {
      tag: "Insurtech",
      name: "Luntriqa",
      logo: "/images/luntriqa.webp",
      logoH: 52,
      body: "La vertical insurtech de Shepwashi para LatAm & Caribe. Desarrollo y soluciones a la medida e inteligencia artificial para aseguradoras y brokers — con conocimiento profundo del sector.",
      points: [
        "Desarrollo a medida para aseguradoras y brokers",
        "Soluciones white-label, listas para operar",
        "Integración con cualquier sistema o plataforma",
        "Consultoría en IA e insurtech",
      ],
    },
    {
      tag: "Delivery premium",
      name: "Plataforma de delivery premium",
      logo: null,
      body: "Tecnología propia, ya operando en el mercado. Una plataforma de entrega de alto nivel nacida en uno de los entornos más exigentes y singulares de la región — y construida para escalar más allá de él.",
      points: [
        "App nativa para iOS y Android",
        "Modelo premium — calidad de producto y de entrega",
        "Integración de comercios locales en un solo ecosistema",
        "Tecnología homegrown, en operación real",
      ],
    },
    {
      tag: "Directorio · Servicios",
      name: "Directorio de servicios",
      logo: null,
      body: "Un directorio al estilo de las grandes plataformas de reseñas — pero donde también se reservan servicios directamente. Una combinación que no existía cuando la construimos. Tecnología propia, probada en el mercado.",
      points: [
        "Directorio categorizado de profesionales y empresas",
        "Reserva de servicios dentro de la misma plataforma",
        "Perfiles verificados y búsqueda por especialidad",
        "+500.000 visitas orgánicas al directorio",
      ],
    },
  ],
};

// ── Origen ───────────────────────────────────────────────────
export const ORIGEN = {
  eyebrow: "Origen",
  word: "SHEPWASHI",
  gloss: "diseño · design",
  intro:
    "Una palabra del chukchansi yokuts, lengua de un pueblo originario de California, de hace miles de años. Significa diseño: la forma deliberada de las cosas.",
  close:
    "Y eso es exactamente lo que hacemos. La inteligencia para saber qué forma debe tomar algo, y la tecnología para construirla. Diseñar no es decorar — es decidir cómo serán las cosas antes de que existan. Por eso llevamos ese nombre. Por eso, diseñemos.",
};

// ── Equipo · Quién está detrás ───────────────────────────────
export const EQUIPO = {
  eyebrow: "Quién está detrás",
  title: "Algunos equipos tienen experiencia. Este tiene historial.",
  lede:
    "Inversionistas, ejecutivos y profesionales que ya hicieron lo que la mayoría apenas promete. No es un portafolio de credenciales — es el peso de haber estado ahí antes.",
};

// ── Talento ──────────────────────────────────────────────────
export const TALENTO = {
  eyebrow: "Para los que construyen",
  title: "Buscamos a los que no se conforman.",
  lede:
    "Las mentes más afiladas de la región — ingenieros, estrategas, diseñadores, gente que ya domina lo suyo y quiere construir algo que importe. No ofrecemos un trabajo. Ofrecemos formar parte de lo que estamos construyendo.",
  cta: "Sumarse",
  ctaHref: "mailto:talento@shepwashi.com",
};

// ── Contacto ─────────────────────────────────────────────────
export const CONTACTO = {
  eyebrow: "Diseñemos",
  title: "Lo que sigue, lo construimos juntos.",
  body: "Cuéntanos qué quieres resolver.",
  cta: "Diseñemos.",
  note: "Respondemos en menos de 24 horas. Sin presión de venta.",
};

// Endpoint del formulario de contacto. Pegar el endpoint de Formspree
// (https://formspree.io/f/XXXXXXX) o la API propia cuando esté lista.
// Vacío = modo demo (muestra confirmación sin enviar).
export const FORM_ENDPOINT = "";

export const FOOTER = {
  phon: "shep·wa·shi — diseño",
  tagline: "La firma que sabe, construye y asesora — en LatAm & Caribe.",
  region: "LatAm & Caribe",
};

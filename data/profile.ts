/**
 * Datos centrales del perfil. Editar aquí actualiza hero, footer, contacto y SEO.
 */
export const profile = {
  name: "Santiago David Jara Moya",
  shortName: "Santiago Jara",
  role: "Docente Universitario - Ingeniero en Sistemas",
  tagline:
    "Diseño soluciones digitales, aplicaciones educativas y experiencias de aprendizaje potenciadas con inteligencia artificial, combinando docencia, desarrollo de software, investigación e innovación tecnológica.",
  description:
    "Ingeniero en Sistemas y Máster en Investigación e Innovación TIC. Docente en la Universidad Técnica de Ambato, CEO de SanTIC Education y consultor en Moodle, IA aplicada a educación y desarrollo de aplicaciones.",
  brandLines: [
    "Transformo ideas educativas en soluciones digitales.",
    "Integro docencia, software e inteligencia artificial para crear experiencias de aprendizaje innovadoras.",
    "Ayudo a docentes, instituciones y empresas a implementar tecnología educativa de forma estratégica.",
    "Creo aplicaciones, plataformas y recursos digitales para potenciar la educación.",
  ],
  about: {
    intro:
      "Ingeniero en Sistemas y Máster en Investigación e Innovación TIC por la Universidad Autónoma de Madrid.",
    body:
      "Combino docencia, desarrollo de software y gestión de plataformas educativas (Moodle, IA, capacitación TIC) para instituciones y empresas que buscan elevar sus procesos formativos.",
    closing:
      "Soy docente en la Universidad Técnica de Ambato y lidero SanTIC Education, enfocada en Moodle, cursos virtuales y transformación digital educativa.",
  },
  location: "Ambato, Ecuador",
  email: "santiagojara@santiceducation.com",
  cvUrl: "/cv/santiago-jara-moya-cv.pdf",
  websites: {
    company: "https://santiceducation.com",
  },
  socials: {
    linkedin: "https://www.linkedin.com/in/santiagojaramoya",
    github: "https://github.com/santiagojaramoya",
    youtube: "https://www.youtube.com/@SanTICEducation",
    twitter: "https://twitter.com/santiagojaramoya",
  },
  highlights: [
    { label: "Años brindando un servicio de calidad", value: "6+" },
    { label: "Plataformas Moodle implementadas", value: "20+" },
  ],
  quickFacts: [
    "Docente Titular en FISEI – UTA",
    "CEO y fundador de SanTIC Education",
    "Especialista en Moodle",
    "Consultor en IA aplicada a la educación",
  ],
  trustedBy: [
    "Universidad Técnica de Ambato",
    "SanTIC Education",
    "Estena Salus",
    "ASSA Ecuador",
    "Plasticaucho Industrial",
  ],
} as const;

export type Profile = typeof profile;

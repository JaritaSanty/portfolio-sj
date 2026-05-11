export type Certification = {
  title: string;
  issuer: string;
  year: string;
  description?: string;
  url?: string;
};

/**
 * Sección lista para crecer. Reemplaza estos placeholders por certificaciones reales
 * y, si lo deseas, agrega `url` con el enlace verificable.
 */
export const certifications: Certification[] = [
  {
    title: "PCEP - Certified Entry-Level Python Programmer",
    issuer: "OpenEDG Python Institute",
    year: "2021",
    description:
      "Certificado sobre fundamentos de programación, buenas prácticas, tipos de datos y operaciones básicas de entrada y salida. Incluye estructuras de control, colecciones de datos y uso de funciones.",
  },
  {
    title: "Certiifcación en Diseño Instruccional y Gestión de Proyectos e-Learning",
    issuer: "Universidad Benito Juárez G.",
    year: "2021",
    description:
      "Certificación enfocada en el diseño instruccional, planificación y desarrollo de experiencias de aprendizaje virtual.",
  },
  {
    title: "Curso en Docencia Universitaria: Enfoques Didácticos y Recursos Digitales",
    issuer: "Pontificia Universidad Católica del Ecuador (PUCE)",
    year: "2023",
    description:
      "Certificación enfocada en la docencia universitaria, los enfoques didácticos y el uso de recursos digitales para fortalecer los procesos de enseñanza-aprendizaje en entornos presenciales, virtuales e híbridos.",
  },
  {
    title: "Curso de Cultura de la Investigación",
    issuer: "Universidad Internacional de la Rioja (UNIR)",
    year: "2024",
    description:
      "Curso enfocado en el fortalecimiento de la cultura de la investigación, promoviendo competencias para la búsqueda, análisis y construcción de conocimiento académico y científico.",
  },
  {
    title: "Curso en Inteligencia Artificial Generativa Aplicada a la Educación",
    issuer: "Universidad Internacional de la Rioja (UNIR)",
    year: "2025",
    description:
      "Curso enfocado en la aplicación de inteligencia artificial generativa en contextos educativos, orientado al diseño de recursos, actividades y estrategias para fortalecer los procesos de enseñanza-aprendizaje.",
  },
  {
    title: "Curso Agentes de IA en el Aula: Innovación Real para Aprendizajes Reales",
    issuer: "Universidad Técnica de Ambato (UTA)",
    year: "2026",
    description:
      "Curso enfocado en el uso de agentes de inteligencia artificial en el aula como estrategia de innovación educativa para diseñar experiencias de aprendizaje más dinámicas, personalizadas y aplicables a contextos reales.",
  },
];

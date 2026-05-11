export type Experience = {
  role: string;
  company: string;
  location?: string;
  period: string;
  current?: boolean;
  summary: string;
  achievements: string[];
};

export const experiences: Experience[] = [
  {
    role: "Profesor Titular Auxiliar 1",
    company: "Universidad Técnica de Ambato — FISEI",
    location: "Ambato, Ecuador",
    period: "2021 — Actualidad",
    current: true,
    summary:
      "Docencia e investigación en la Facultad de Ingeniería en Sistemas, Electrónica e Industrial, con responsabilidad técnica sobre laboratorios y redes.",
    achievements: [
      "Cátedra en Algoritmos y Lógica de Programación, Java, Python, PSeInt, Manejo y Configuración de Software, Git/GitHub, Desarrollo Asistido por Software e Ingeniería Económica para Software.",
      "Administración de redes y laboratorios de la FISEI, incluyendo mantenimiento preventivo y correctivo.(2022-2025)",
      "Supervisión de personal técnico y soporte a estudiantes, docentes y personal administrativo.(2022-2025)",
      "Diseño de recursos académicos y experiencias de aprendizaje apoyadas en tecnología.",
    ],
  },
  {
    role: "CEO y fundador",
    company: "SanTIC Education",
    location: "Ambato, Ecuador",
    period: "2022 — Actualidad",
    current: true,
    summary:
      "Iniciativa propia enfocada en capacitación tecnológica, implementación de Moodle y transformación digital educativa.",
    achievements: [
      "Fundación y dirección de empresa especializada en capacitaciones TIC para instituciones y profesionales.",
      "Diseño e instrucción de cursos en el área de tecnologías de la información y en áreas que requiere el cliente",
      "Implementación, capacitación y administración de plataformas Moodle para empresas y centros de formación.",
      "Asesoría en herramientas TIC e inteligencia artificial aplicadas a la educación.",
    ],
  },
  {
    role: "Asistente de Tecnologías de la Información y Comunicación",
    company: "Universidad Técnica de Ambato",
    location: "Ambato, Ecuador",
    period: "2016 — 2021",
    summary:
      "Soporte tecnológico, desarrollo de software interno y diseño instruccional para la oferta de educación continua.",
    achievements: [
      "Desarrollo de software a medida según requerimientos institucionales.",
      "Administración de Moodle y del sitio web institucional en Joomla.",
      "Soporte técnico a usuarios de programas de educación continua.",
      "Tutor virtual y diseñador instruccional en cursos TIC, MOOC y programas de formación.",
    ],
  },
  {
    role: "Agente de soporte técnico",
    company: "Plasticaucho Industrial",
    location: "Ambato, Ecuador",
    period: "2015 — 2016",
    summary:
      "Soporte técnico corporativo en una de las industrias manufactureras más grandes del país.",
    achievements: [
      "Soporte técnico a usuarios sobre Windows y Office 365.",
      "Administración de usuarios y recursos mediante Active Directory.",
      "Mantenimiento preventivo y correctivo de equipos informáticos.",
    ],
  },
];

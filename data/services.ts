import {
  Sparkles,
  AppWindow,
  GraduationCap,
  BookOpenCheck,
  Users,
  Compass,
  Workflow,
  Globe,
  Server,
  LifeBuoy,
  School,
  Microscope,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    title: "Implementación de Moodle",
    description:
      "Despliegue, configuración, branding e integración de Moodle para universidades, centros y empresas.",
    icon: GraduationCap,
  },
  {
    title: "Cursos virtuales y MOOC",
    description:
      "Diseño instruccional, producción multimedia y montaje en LMS de programas de formación a escala.",
    icon: BookOpenCheck,
  },
  {
    title: "Capacitación docente en TIC e IA",
    description:
      "Programas de formación para docentes en herramientas digitales, IA generativa y metodologías activas.",
    icon: Users,
  },
  {
    title: "Consultoría tecnológica educativa",
    description:
      "Diagnóstico, hoja de ruta y acompañamiento estratégico para instituciones que se digitalizan.",
    icon: Compass,
  },
  {
    title: "Sitios web institucionales",
    description:
      "Sitios y portales accesibles, optimizados para SEO y fáciles de mantener por equipos no técnicos.",
    icon: Globe,
  },
  {
    title: "Servidores, hosting y despliegue",
    description:
      "Asesoría en hosting, dominios, certificados, despliegue continuo y monitoreo en Vercel y servidores propios.",
    icon: Server,
  },
  {
    title: "Soporte y administración tecnológica",
    description:
      "Acompañamiento técnico continuo: backups, actualizaciones, seguridad básica y soporte a usuarios.",
    icon: LifeBuoy,
  },
  {
    title: "Docencia universitaria",
    description:
      "Cátedra en algoritmos, lógica de programación, Git/GitHub, herramientas para el desarrollo de software y/o asignaturas enfocadas en las tecnologías de la información y comunicación.",
    icon: School,
  },
];

export type Recognition = {
  title: string;
  context: string;
  description: string;
  issuer: string;
  year: string;
  category: "Registro" | "Proyecto" | "Hackathon" | "Concurso" | "Organización";
};

export const recognitions: Recognition[] = [
  {
    title: "Software VR-MOTORLAB",
    context: "Registro de derechos de autor",
    description:
      "Obra literaria – programa de ordenador (inédita), inscrita ante la Dirección Nacional de Derechos de Autor y Derechos Conexos. Coautores: Pablo Alvear Vaca, Kevin Alvear Vaca, José Romero Meza y Santiago Jara Moya.",
    issuer: "SENADI · Titular: Universidad Técnica de Ambato",
    year: "2025",
    category: "Registro",
  },
  {
    title: "NFT para certificación de documentos – FISEI",
    context: "Casa Abierta FISEI 2022 · Categoría Profesional",
    description:
      "Primer lugar en la categoría Profesional (Software / TIC) como Tutor del proyecto desarrollado por Edwin Villacrés, Anthony Paredes y Alexander Flores.",
    issuer: "FISEI – Universidad Técnica de Ambato",
    year: "2022",
    category: "Proyecto",
  },
  {
    title: "FISEI – Simulador de realidad mixta en laboratorio",
    context: "Casa Abierta FISEI 2022 · Categoría Titulación",
    description:
      "Primer lugar (Software / TIC) como Tutor del proyecto desarrollado por Marlon Maisanche, Byron Morales, Ariel Carrera y Kevin Barrera.",
    issuer: "FISEI – Universidad Técnica de Ambato",
    year: "2022",
    category: "Proyecto",
  },
  {
    title: "Navegación en portales virtuales con AR (Unity)",
    context: "Casa Abierta FISEI 2022 · Categoría Titulación",
    description:
      "Segundo lugar (Software / TIC) como Tutor del proyecto desarrollado por John Arcos, Andrés García, Alain Jácome y Joshua Martínez.",
    issuer: "FISEI – Universidad Técnica de Ambato",
    year: "2022",
    category: "Proyecto",
  },
  {
    title: "2do lugar Hackathon \"Crea Hack\"",
    context: "Ñañas Coding: Escuela de Programación y Robótica",
    description:
      "Reconocimiento por alcanzar el segundo lugar en la primera edición del hackathon, llevado a cabo del 3 al 31 de agosto de 2022.",
    issuer:
      "UTA Microsoft Community y Club de Software – Universidad Técnica de Ambato",
    year: "2022",
    category: "Hackathon",
  },
  {
    title: "Mentor destacado – Hackathon \"Crea Hack\"",
    context: "Ñañas Coding: Escuela de Programación y Robótica",
    description:
      "Reconocimiento por destacarse como mentor del programa de formación, durante agosto de 2022.",
    issuer:
      "UTA Microsoft Community y Club de Software – Universidad Técnica de Ambato",
    year: "2022",
    category: "Hackathon",
  },
  {
    title:
      "2do lugar – Concurso Interuniversitario de Proyectos Tecnológicos-Innovadores",
    context: "Calidad de Docente Tutor",
    description:
      "Segundo lugar en el concurso interuniversitario organizado por la Empresa Encuba, llevado a cabo en Ibarra del 16 al 17 de diciembre de 2022.",
    issuer: "Facultad de Contabilidad y Auditoría – Universidad Técnica de Ambato",
    year: "2022",
    category: "Concurso",
  },
  {
    title: "Organizador – Concurso de Programación Hatunsoft",
    context: "Primera edición",
    description:
      "Reconocimiento por la destacada labor como organizador del primer Concurso de Programación Hatunsoft, llevado a cabo el 16 de junio de 2023.",
    issuer: "FISEI – Universidad Técnica de Ambato",
    year: "2023",
    category: "Organización",
  },
];

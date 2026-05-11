export type Education = {
  degree: string;
  institution: string;
  period: string;
  location: string;
  description: string;
};

export const education: Education[] = [
  {
    degree: "Máster Universitario en Investigación e Innovación en TIC",
    institution: "Universidad Autónoma de Madrid",
    period: "2018 — 2019",
    location: "Madrid, España",
    description:
      "Programa centrado en metodología de investigación e innovación aplicada a tecnologías de información y comunicaciones, con énfasis en desarrollo de software con enfoque en la experiencia del usuario.",
  },
  {
    degree: "Ingeniería en Sistemas Computacionales e Informáticos",
    institution: "Universidad Técnica de Ambato",
    period: "2010 — 2016",
    location: "Ambato, Ecuador",
    description:
      "Formación integral en desarrollo de software, redes, bases de datos, ingeniería de sistemas y administración de tecnología.",
  },
];

export const languages = [
  { name: "Español", level: "Nativo" },
  { name: "Inglés", level: "Intermedio" },
];

export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: string;
  doi?: string;
  url?: string;
};

export const publications: Publication[] = [
  {
    title: "Living in Virtual and Real Worlds: A Didactic Experience",
    authors: "María J. Lasala, Santiago Jara, Xavier Alamán",
    venue:
      "13th International Conference on Ubiquitous Computing and Ambient Intelligence (UCAmI 2019) · MDPI Proceedings",
    year: "2019",
    doi: "10.3390/proceedings2019031083",
    url: "https://www.mdpi.com/2504-3900/31/1/83",
  },
  {
    title:
      "SIMDRIVE: A Didactic Immersive Learning Experience with Traffic Laws and Driving Skills in Virtual Worlds",
    authors:
      "Marlon Copara-Allauca, Christian Chico-López, Enrique Ortiz-Salazar, Santiago Jara-Moya",
    venue:
      "International Conference on Computer Science, Electronics and Industrial Engineering (CSEI 2024) · Springer, Cham",
    year: "2024",
    doi: "10.1007/978-3-031-98890-5_1",
    url: "https://link.springer.com/chapter/10.1007/978-3-031-98890-5_1",
  },
  {
    title:
      "Analysis of Interactive Educational Resources and Personalized Learning Tools Through Strategies for Education in Web Applications with Three.js",
    authors:
      "Marco-Antonio Ortiz-Arcos, Christian-Andrés Gaibor-Villacís, Jhon-Alexander Lescano-Cisneros, Thais-Eliana Armijos-Troya, Santiago Jara-Moya",
    venue:
      "International Conference on Computer Science, Electronics and Industrial Engineering (CSEI 2024) · Springer, Cham",
    year: "2024",
    doi: "10.1007/978-3-031-98890-5_2",
    url: "https://link.springer.com/chapter/10.1007/978-3-031-98890-5_2",
  },
];

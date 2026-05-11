import type { MetadataRoute } from "next";

const sections = [
  "",
  "#sobre-mi",
  "#experiencia",
  "#servicios",
  "#formacion",
  "#certificaciones",
  "#reconocimientos",
  "#contacto",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://santiagojaramoya.com";
  const lastModified = new Date();
  return sections.map((path) => ({
    url: `${base}/${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}

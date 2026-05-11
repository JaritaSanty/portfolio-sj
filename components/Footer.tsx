import Image from "next/image";
import { profile } from "@/data/profile";
import { navLinks } from "@/data/nav";
import { Linkedin, Mail } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-background">
      <div className="container grid gap-10 py-14 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div className="flex flex-col gap-4">
          <a href="#inicio" className="inline-flex items-center gap-2 font-display text-base font-semibold">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-700 to-brand-900 shadow-soft">
              <Image
                src="/logo.png"
                alt={`Logo ${profile.shortName}`}
                width={28}
                height={28}
                className="h-7 w-7 object-contain"
              />
            </span>
            {profile.shortName}
          </a>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Portafolio profesional de {profile.name}. Tecnología educativa,
            desarrollo de software e inteligencia artificial aplicada al
            aprendizaje.
          </p>
          <div className="flex items-center gap-2">
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition hover:border-brand-400 hover:text-brand-600 dark:hover:text-brand-300"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition hover:border-brand-400 hover:text-brand-600 dark:hover:text-brand-300"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <p className="label-mono text-muted-foreground">Navegación</p>
          <ul className="mt-4 flex flex-col gap-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a className="text-muted-foreground hover:text-foreground" href={l.href}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="label-mono text-muted-foreground">Recursos</p>
          <ul className="mt-4 flex flex-col gap-2 text-sm">
            <li>
              <a
                href={profile.websites.company}
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                SanTIC Education
              </a>
            </li>
            <li>
              <a className="text-muted-foreground hover:text-foreground" href={profile.cvUrl} download>
                Descargar CV
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container flex flex-col items-center justify-between gap-3 py-6 text-xs text-muted-foreground sm:flex-row">
          <p>
            © {year} {profile.name}. Todos los derechos reservados.
          </p>
          <p>Hecho con Next.js, TypeScript y Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}

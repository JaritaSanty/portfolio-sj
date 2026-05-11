import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { education, languages, publications } from "@/data/education";
import {
  ArrowUpRight,
  BookOpen,
  GraduationCap,
  Languages,
  MapPin,
} from "lucide-react";

export function Education() {
  return (
    <section id="formacion" className="section">
      <div className="container grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div className="flex flex-col gap-8">
          <SectionHeading
            eyebrow="Formación académica"
            title="Bases sólidas, formación continua"
            description="Una mezcla de ingeniería de sistemas, investigación e innovación TIC y formación permanente en tecnologías emergentes."
          />

          <ul className="flex flex-col gap-4">
            {education.map((item, i) => (
              <Reveal as="li" key={item.degree} delay={i * 0.06}>
                <article className="card-surface card-surface-hover p-6">
                  <div className="flex items-start gap-4">
                    <div className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-500/15 to-accent-violet/15 text-brand-600 dark:text-brand-300">
                      <GraduationCap className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="label-mono text-muted-foreground">
                        {item.period}
                      </p>
                      <h3 className="mt-1 font-display text-lg font-semibold tracking-tight">
                        {item.degree}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-foreground/80">
                        {item.institution}
                      </p>
                      <p className="mt-1 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                        <MapPin className="h-3.5 w-3.5" />
                        {item.location}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal>
          <aside className="card-surface flex h-full flex-col gap-6 p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-accent-cyan/20 to-brand-500/20 text-brand-600 dark:text-brand-300">
                <Languages className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-semibold tracking-tight">
                Idiomas
              </h3>
            </div>
            <ul className="flex flex-col gap-3">
              {languages.map((lang) => (
                <li
                  key={lang.name}
                  className="flex items-center justify-between rounded-xl border border-border bg-background/60 px-4 py-3"
                >
                  <span className="font-medium">{lang.name}</span>
                  <span className="text-sm text-muted-foreground">{lang.level}</span>
                </li>
              ))}
            </ul>

            <div className="mt-2 flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-brand-500/15 to-accent-violet/15 text-brand-600 dark:text-brand-300">
                <BookOpen className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-semibold tracking-tight">
                Publicaciones relevantes
              </h3>
            </div>
            <ul className="flex flex-col gap-3">
              {publications.map((pub) => (
                <li
                  key={pub.title}
                  className="rounded-xl border border-border bg-background/60 p-4"
                >
                  <p className="label-mono text-muted-foreground">{pub.year}</p>
                  <h4 className="mt-1 font-display text-sm font-semibold leading-snug tracking-tight">
                    {pub.title}
                  </h4>
                  <p className="mt-1.5 text-xs text-muted-foreground">
                    {pub.authors}
                  </p>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                    {pub.venue}
                  </p>
                  {pub.url && (
                    <a
                      href={pub.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-brand-600 hover:text-brand-700 dark:text-brand-300"
                    >
                      {pub.doi ? `DOI: ${pub.doi}` : "Ver publicación"}
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}

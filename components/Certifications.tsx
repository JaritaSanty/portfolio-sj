import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { certifications } from "@/data/certifications";
import { Award, ArrowUpRight } from "lucide-react";

export function Certifications() {
  return (
    <section id="certificaciones" className="section bg-muted/30">
      <div className="container flex flex-col gap-12">
        <SectionHeading
          eyebrow="Certificaciones y reconocimientos"
          title="Formación verificable y actualizada"
          description="Una sección viva: se actualiza con las nuevas certificaciones y reconocimientos que voy obteniendo."
        />

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <Reveal as="li" key={cert.title} delay={i * 0.04}>
              <article className="card-surface card-surface-hover h-full p-6">
                <div className="flex items-start justify-between gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-brand-500/15 to-accent-cyan/15 text-brand-600 dark:text-brand-300">
                    <Award className="h-5 w-5" />
                  </div>
                  <span className="label-mono text-muted-foreground">
                    {cert.year}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-base font-semibold tracking-tight">
                  {cert.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-foreground/80">
                  {cert.issuer}
                </p>
                {cert.description && (
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {cert.description}
                  </p>
                )}
                {cert.url && (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand-600 hover:text-brand-700 dark:text-brand-300"
                  >
                    Ver credencial
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

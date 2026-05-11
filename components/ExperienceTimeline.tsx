import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { experiences } from "@/data/experience";
import { Briefcase, MapPin } from "lucide-react";

export function ExperienceTimeline() {
  return (
    <section id="experiencia" className="section">
      <div className="container flex flex-col gap-12">
        <SectionHeading
          eyebrow="Trayectoria"
          title="Una década uniendo educación y tecnología"
          description="Roles que combinan docencia, desarrollo, gestión de plataformas y consultoría tecnológica."
        />

        <ol className="relative ml-3 border-l border-border sm:ml-6">
          {experiences.map((exp, i) => (
            <Reveal as="li" key={`${exp.role}-${exp.company}`} delay={i * 0.05} className="mb-10 pl-6 sm:pl-10 last:mb-0">
              <span
                aria-hidden
                className="absolute -left-[7px] mt-1.5 grid h-3.5 w-3.5 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-accent-violet ring-4 ring-background"
              />
              <article className="card-surface card-surface-hover p-6">
                <header className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="label-mono text-brand-600 dark:text-brand-300">
                      {exp.period}
                      {exp.current && (
                        <span className="ml-2 inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-600 dark:text-emerald-300">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          Actual
                        </span>
                      )}
                    </p>
                    <h3 className="mt-1 font-display text-xl font-semibold tracking-tight">
                      {exp.role}
                    </h3>
                    <p className="mt-1 inline-flex items-center gap-2 text-sm font-medium text-foreground/80">
                      <Briefcase className="h-3.5 w-3.5 text-muted-foreground" />
                      {exp.company}
                      {exp.location && (
                        <>
                          <span className="hidden h-3 w-px bg-border sm:inline-block" />
                          <MapPin className="hidden h-3.5 w-3.5 text-muted-foreground sm:inline-block" />
                          <span className="hidden text-muted-foreground sm:inline">{exp.location}</span>
                        </>
                      )}
                    </p>
                  </div>
                </header>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {exp.summary}
                </p>

                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {exp.achievements.map((a) => (
                    <li
                      key={a}
                      className="flex gap-2 text-sm leading-relaxed text-foreground/80"
                    >
                      <span
                        aria-hidden
                        className="mt-1.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-br from-brand-500 to-accent-cyan"
                      />
                      {a}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

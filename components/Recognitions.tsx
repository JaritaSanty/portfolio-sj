import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { recognitions, type Recognition } from "@/data/recognitions";
import {
  Award,
  FileBadge,
  Lightbulb,
  Trophy,
  Users,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const categoryIcon: Record<Recognition["category"], LucideIcon> = {
  Registro: FileBadge,
  Proyecto: Lightbulb,
  Hackathon: Sparkles,
  Concurso: Trophy,
  Organización: Users,
};

export function Recognitions() {
  return (
    <section id="reconocimientos" className="section">
      <div className="container flex flex-col gap-12">
        <SectionHeading
          eyebrow="Reconocimientos y méritos"
          title="Premios, registros y participaciones destacadas"
          description="Selección de reconocimientos como tutor, mentor y autor en hackathons, concursos académicos y registros de obra."
        />

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {recognitions.map((item, i) => {
            const Icon = categoryIcon[item.category] ?? Award;
            return (
              <Reveal as="li" key={item.title} delay={i * 0.04}>
                <article className="card-surface card-surface-hover h-full p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-brand-500/15 to-accent-violet/15 text-brand-600 dark:text-brand-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="label-mono text-muted-foreground">
                      {item.year}
                    </span>
                  </div>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-brand-600 dark:text-brand-300">
                    {item.category}
                  </p>
                  <h3 className="mt-1 font-display text-base font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-foreground/80">
                    {item.context}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                  <p className="mt-4 text-xs italic text-muted-foreground">
                    {item.issuer}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

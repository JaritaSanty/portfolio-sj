import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { profile } from "@/data/profile";
import { GraduationCap, Building2, Server, Mountain } from "lucide-react";

const cards = [
  {
    title: "Docente universitario",
    description:
      "Profesor titular en la Universidad Técnica de Ambato (FISEI), con cátedras en programación, software y Git/GitHub.",
    icon: GraduationCap,
  },
  {
    title: "CEO de SanTIC Education",
    description:
      "Lidera una iniciativa enfocada en formación TIC, Moodle y soluciones digitales para la educación.",
    icon: Building2,
  },
  {
    title: "Especialista en Moodle",
    description:
      "Despliegue, personalización, integración y mantenimiento de Moodle a escala institucional.",
    icon: Server,
  },
  {
    title: "Trail running y montaña",
    description:
      "Fuera de la pantalla disfruto del trail running, subir montañas y pasar tiempo en la naturaleza para recargar energía.",
    icon: Mountain,
  },
];

export function About() {
  return (
    <section id="sobre-mi" className="section">
      <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="flex flex-col gap-6">
          <SectionHeading
            eyebrow="Sobre mí"
            title={
              <>
                Construyo puentes entre <span className="gradient-text">docencia</span>,{" "}
                <span className="gradient-text">software</span> e{" "}
                <span className="gradient-text">inteligencia artificial</span>.
              </>
            }
            description={profile.about.intro}
          />
          <Reveal delay={0.05}>
            <p className="text-base leading-relaxed text-muted-foreground">
              {profile.about.body}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-base leading-relaxed text-muted-foreground">
              {profile.about.closing}
            </p>
          </Reveal>

          <Reveal delay={0.15} className="mt-2 flex flex-wrap gap-2">
            {profile.quickFacts.map((fact) => (
              <span key={fact} className="pill">
                {fact}
              </span>
            ))}
          </Reveal>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <Reveal as="li" key={card.title} delay={i * 0.05}>
                <article className="card-surface card-surface-hover h-full p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/15 to-accent-violet/15 text-brand-600 dark:text-brand-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold tracking-tight">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {card.description}
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

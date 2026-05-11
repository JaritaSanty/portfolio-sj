import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { services } from "@/data/services";
import { ArrowUpRight } from "lucide-react";

export function Services() {
  return (
    <section id="servicios" className="section">
      <div className="container flex flex-col gap-12">
        <SectionHeading
          eyebrow="Servicios profesionales"
          title="Acompañamiento de inicio a fin"
          description="Combino diseño instruccional, desarrollo de software y consultoría para entregar soluciones medibles y sostenibles."
        />

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal as="li" key={service.title} delay={i * 0.04}>
                <article className="group card-surface card-surface-hover h-full p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-brand-500/15 to-accent-violet/15 text-brand-600 dark:text-brand-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                  </div>
                  <h3 className="mt-5 font-display text-base font-semibold tracking-tight">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
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

import { Reveal } from "@/components/Reveal";
import { ArrowRight, Sparkles } from "lucide-react";

export function CTA() {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-brand-700 via-brand-600 to-accent-violet p-10 text-white shadow-glow sm:p-14">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 grid-bg opacity-30 mix-blend-overlay"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent-cyan/40 blur-3xl"
            />
            <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 font-mono text-[11px] font-medium uppercase tracking-[0.18em] backdrop-blur">
                  <Sparkles className="h-3.5 w-3.5" />
                  Trabajemos juntos
                </span>
                <h2 className="mt-5 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                  ¿Tienes una idea educativa o tecnológica que quieres hacerla realidad?
                </h2>
                <p className="mt-4 max-w-xl text-base text-white/85">
                  Te acompaño con foco en resultados, calidad técnica y experiencia de usuario.
                </p>
              </div>
              <div className="flex flex-shrink-0 flex-wrap gap-3 sm:flex-col">
                <a
                  href="#contacto"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-brand-700 shadow-soft transition hover:bg-white/90"
                >
                  Hablemos
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#servicios"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
                >
                  Ver servicios
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

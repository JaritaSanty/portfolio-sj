"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { profile } from "@/data/profile";
import {
  Mail,
  MapPin,
  Send,
  Globe,
  Linkedin,
  Github,
  Youtube,
} from "lucide-react";

type Status = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  /**
   * El formulario funciona como `mailto:` por defecto para no requerir backend.
   * Cuando integres una API o servicio (Resend, Formspree, etc.), reemplaza
   * `handleSubmit` por una llamada `fetch` y maneja `status` igual.
   */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");

    try {
      const subject = encodeURIComponent(`Contacto desde el portafolio — ${name}`);
      const body = encodeURIComponent(
        `Nombre: ${name}\nEmail: ${email}\n\n${message}`
      );
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contacto" className="section bg-muted/30">
      <div className="container grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <div className="flex flex-col gap-8">
          <SectionHeading
            eyebrow="Contacto"
            title={
              <>
                Hablemos de tu próximo{" "}
                <span className="gradient-text">proyecto digital</span>
              </>
            }
            description="Escríbeme con una idea, una necesidad o una pregunta. Respondo en menos de 48 horas hábiles."
          />

          <ul className="flex flex-col gap-3">
            <ContactItem
              icon={Mail}
              label="Email"
              value={profile.email}
              href={`mailto:${profile.email}`}
            />
            <ContactItem
              icon={MapPin}
              label="Ubicación"
              value={profile.location}
            />
            <ContactItem
              icon={Globe}
              label="Sitio web"
              value="santiceducation.com"
              href={profile.websites.company}
            />
          </ul>

          <div className="flex flex-wrap items-center gap-3">
            <SocialLink href={profile.socials.linkedin} label="LinkedIn" icon={Linkedin} />
            <SocialLink href={profile.socials.github} label="GitHub" icon={Github} />
            <SocialLink href={profile.socials.youtube} label="YouTube" icon={Youtube} />
            <a
              href={profile.websites.company}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-2 text-sm font-medium text-foreground transition hover:border-brand-400 hover:text-brand-600 dark:hover:text-brand-300"
            >
              <Globe className="h-4 w-4" />
              SanTIC Education
            </a>
          </div>
        </div>

        <Reveal>
          <form
            onSubmit={handleSubmit}
            className="card-surface flex flex-col gap-4 p-6 sm:p-8"
            aria-label="Formulario de contacto"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field
                label="Nombre"
                name="name"
                type="text"
                placeholder="Tu nombre"
                required
              />
              <Field
                label="Email"
                name="email"
                type="email"
                placeholder="tu@email.com"
                required
              />
            </div>
            <Field
              label="Asunto"
              name="subject"
              type="text"
              placeholder="¿En qué puedo ayudarte?"
            />
            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-sm font-medium">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Cuéntame brevemente sobre tu proyecto, contexto, plazos y objetivos."
                className="resize-y rounded-xl border border-border bg-background/60 px-4 py-3 text-sm leading-relaxed text-foreground placeholder:text-muted-foreground focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-ring/40"
              />
            </div>
            <button
              type="submit"
              disabled={status === "submitting"}
              className="btn-primary mt-2 w-full sm:w-auto"
            >
              {status === "submitting" ? "Enviando..." : "Enviar mensaje"}
              <Send className="h-4 w-4" />
            </button>
            {status === "success" && (
              <p className="text-xs text-emerald-600 dark:text-emerald-400">
                Abrí tu cliente de correo con el mensaje listo. Si no se abrió,
                escríbeme directamente a {profile.email}.
              </p>
            )}
            {status === "error" && (
              <p className="text-xs text-rose-600 dark:text-rose-400">
                No pude abrir tu cliente de correo. Escríbeme a {profile.email}.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function ContactItem({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-center gap-4 rounded-2xl border border-border bg-card/70 px-4 py-3 transition hover:border-brand-400">
      <div className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-500/15 to-accent-violet/15 text-brand-600 dark:text-brand-300">
        <Icon className="h-4 w-4" />
      </div>
      <div className="min-w-0">
        <p className="label-mono text-muted-foreground">{label}</p>
        <p className="truncate text-sm font-medium text-foreground">{value}</p>
      </div>
    </div>
  );
  return href ? (
    <li>
      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
        {inner}
      </a>
    </li>
  ) : (
    <li>{inner}</li>
  );
}

function SocialLink({
  href,
  label,
  icon: Icon,
}: {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/70 text-foreground transition hover:-translate-y-0.5 hover:border-brand-400 hover:text-brand-600 dark:hover:text-brand-300"
    >
      <Icon className="h-4 w-4" />
    </a>
  );
}

function Field({
  label,
  name,
  type,
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm font-medium">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-ring/40"
      />
    </div>
  );
}

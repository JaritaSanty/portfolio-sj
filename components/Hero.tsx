"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Download, Mail, MapPin, Sparkles } from "lucide-react";
import { profile } from "@/data/profile";

const eyebrowParts = [
  "Docente Universitario",
  "Ingeniero en Sistemas",
  "Consultor",
];

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden pt-28 sm:pt-32"
      aria-label="Presentación"
    >
      {/* Fondo decorativo */}
      <div aria-hidden className="absolute inset-0 -z-10 grid-bg mask-fade-b" />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-[700px] bg-radial-fade"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-24 -z-10 h-96 w-96 rounded-full bg-brand-500/30 blur-3xl animate-blob-drift"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-48 -z-10 h-96 w-96 rounded-full bg-accent-violet/25 blur-3xl animate-blob-drift"
        style={{ animationDelay: "-6s" }}
      />

      <div className="container grid items-center gap-12 pb-20 sm:pb-28 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div className="flex flex-col gap-7">
          <motion.span
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow"
          >
            <Sparkles className="h-3.5 w-3.5 text-brand-500" />
            {eyebrowParts.join(" · ")}
          </motion.span>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="heading-1 text-balance"
          >
            {profile.name.split(" ").slice(0, 2).join(" ")}{" "}
            <span className="gradient-text">
              {profile.name.split(" ").slice(2).join(" ")}
            </span>
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lead max-w-2xl"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-wrap items-center gap-3"
          >
            <a href="#servicios" className="btn-primary">
              Ver servicios
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contacto" className="btn-outline">
              <Mail className="h-4 w-4" />
              Contactar
            </a>
            <a href={profile.cvUrl} className="btn-ghost" download>
              <Download className="h-4 w-4" />
              Descargar CV
            </a>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground"
          >
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" /> {profile.location}
            </span>
            <span className="hidden h-4 w-px bg-border sm:block" />
          </motion.div>
        </div>

        {/* Tarjeta visual derecha */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -inset-px -z-10 rounded-3xl bg-gradient-to-br from-brand-500/40 via-accent-violet/30 to-accent-cyan/30 blur-2xl" />
          <div className="card-surface relative overflow-hidden rounded-3xl p-6 sm:p-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="label-mono text-muted-foreground">Marca personal</p>
                <p className="mt-1 font-display text-lg font-semibold">
                  SanTIC Education
                </p>
              </div>
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-700 to-brand-900 shadow-glow">
                <Image
                  src="/santic-education.png"
                  alt="Logo SanTIC Education"
                  width={40}
                  height={40}
                  className="h-10 w-10 object-contain"
                />
              </div>
            </div>

            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              {profile.brandLines[1]}
            </p>

            <ul className="mt-6 grid grid-cols-2 gap-3">
              {profile.highlights.map((h) => (
                <li
                  key={h.label}
                  className="rounded-xl border border-border bg-background/60 p-3"
                >
                  <p className="font-display text-2xl font-semibold tracking-tight">
                    {h.value}
                  </p>
                  <p className="text-xs text-muted-foreground">{h.label}</p>
                </li>
              ))}
            </ul>

            <a
              href={profile.websites.company}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-6 w-full justify-center"
            >
              <Image
                src="/santic-education.png"
                alt=""
                width={20}
                height={20}
                className="h-5 w-5 object-contain"
              />
              Visitar SanTIC Education
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Trust bar */}
      <div className="border-y border-border/70 bg-muted/40">
        <div className="container flex flex-wrap items-center justify-center gap-x-10 gap-y-3 py-5 text-sm text-muted-foreground">
          <span className="label-mono">Trayectoria con</span>
          {profile.trustedBy.map((org) => (
            <span key={org} className="font-medium text-foreground/80">
              {org}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

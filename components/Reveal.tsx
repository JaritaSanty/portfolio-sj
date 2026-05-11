"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ElementType, ReactNode } from "react";

type Tag = "div" | "section" | "article" | "li" | "header" | "footer";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: Tag;
};

export function Reveal({ children, delay = 0, className, as = "div" }: RevealProps) {
  const reduce = useReducedMotion();
  // motion[as] devuelve el componente con animación correspondiente; lo tipamos como
  // ElementType para que JSX lo acepte sin perder funcionalidad de framer-motion.
  const Component = motion[as] as ElementType;

  return (
    <Component
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </Component>
  );
}

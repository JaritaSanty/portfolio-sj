# Portafolio · Santiago David Jara Moya

Portafolio profesional de **Santiago David Jara Moya** — docente universitario, ingeniero en sistemas, CEO de **SanTIC Education** y consultor en tecnología educativa e inteligencia artificial aplicada a la educación.

Construido con **Next.js 15 (App Router) · TypeScript · Tailwind CSS · Framer Motion · Lucide React**, optimizado para SEO, accesible y listo para desplegar en **Vercel**.

---

## Características

- **Next.js 15 + App Router** con Server Components por defecto.
- **TypeScript estricto** con alias `@/*`.
- **Tailwind CSS 3** con design tokens HSL y modo claro/oscuro vía `next-themes`.
- **Animaciones suaves** con Framer Motion, respetando `prefers-reduced-motion`.
- **Contenido centralizado** en `/data` para mantener y editar el portafolio sin tocar componentes.
- **SEO completo**: metadata, Open Graph, Twitter Card, `sitemap.xml` y `robots.txt`.
- **Accesibilidad**: skip link, focus visible, navegación por teclado y contraste cuidado.
- **Mobile-first** con menú responsive, scroll suave y secciones jerarquizadas.
- **Formulario de contacto** funcional vía `mailto:` (listo para conectarse a Resend / Formspree / API Route).

---

## Secciones del sitio

1. **Hero** — Presentación, tagline, CTA principal y tarjeta de marca SanTIC Education.
2. **Sobre mí** — Resumen profesional + cards de rol (incluye hobbies / trail running).
3. **Experiencia** — Timeline profesional.
4. **Servicios profesionales** — Catálogo de servicios (incluye docencia universitaria e investigación TIC).
5. **Formación académica** — Estudios, idiomas y publicaciones científicas.
6. **Certificaciones**.
7. **Reconocimientos y méritos** — Registros de software, hackathons, concursos, organizaciones.
8. **CTA + Contacto** — Email directo a `santiagojara@santiceducation.com`.

---

## Estructura del proyecto

```
portfolio-sj/
├─ app/
│  ├─ globals.css           # Tailwind + tokens de diseño
│  ├─ layout.tsx            # Metadata, fuentes, ThemeProvider
│  ├─ page.tsx              # Composición de secciones
│  ├─ icon.png              # Favicon (Next.js auto-discovered)
│  ├─ apple-icon.png        # Apple touch icon
│  ├─ sitemap.ts
│  └─ robots.ts
├─ components/              # Hero, Navbar, About, Services, Recognitions, etc.
├─ data/                    # Contenido tipado del portafolio
│  ├─ profile.ts            # Nombre, contacto, redes, marca personal
│  ├─ nav.ts                # Enlaces del menú
│  ├─ experience.ts         # Timeline profesional
│  ├─ services.ts           # Servicios profesionales
│  ├─ education.ts          # Formación, idiomas y publicaciones
│  ├─ certifications.ts     # Certificaciones
│  └─ recognitions.ts       # Premios, registros, hackathons
├─ public/
│  ├─ logo.png              # Logo personal
│  ├─ santic-education.png  # Logo SanTIC Education
│  ├─ favicon.png
│  ├─ images/               # OG image y otros assets
│  └─ cv/                   # CV en PDF
├─ tailwind.config.ts
├─ tsconfig.json
├─ next.config.mjs
├─ LICENSE
└─ package.json
```

---

## Requisitos

- **Node.js** 18.18+ (recomendado 20 LTS).
- **npm** 9+ (o pnpm / yarn equivalente).

---

## Instalación y uso local

```bash
# 1. Clonar el repositorio
git clone https://github.com/<usuario>/portfolio-sj.git
cd portfolio-sj

# 2. Instalar dependencias
npm install

# 3. (Opcional) Variables de entorno
cp .env.example .env.local
# Edita NEXT_PUBLIC_SITE_URL con tu dominio canónico

# 4. Levantar servidor de desarrollo
npm run dev
# → http://localhost:3000
```

---

## Scripts disponibles

| Script              | Acción                                              |
| ------------------- | --------------------------------------------------- |
| `npm run dev`       | Servidor de desarrollo con hot reload.              |
| `npm run build`     | Build de producción optimizado.                     |
| `npm start`         | Servidor de producción (requiere `build` previo).   |
| `npm run lint`      | ESLint con `next/core-web-vitals`.                  |
| `npm run typecheck` | Validación de tipos TypeScript en modo estricto.    |

---

## Personalización del contenido

Casi todo el contenido vive en `/data/`:

| Archivo                    | Para qué sirve                                              |
| -------------------------- | ----------------------------------------------------------- |
| `data/profile.ts`          | Nombre, tagline, descripción, email, redes, marca personal. |
| `data/nav.ts`              | Enlaces del menú principal.                                 |
| `data/experience.ts`       | Línea de tiempo profesional.                                |
| `data/services.ts`         | Servicios profesionales.                                    |
| `data/education.ts`        | Formación académica, idiomas y publicaciones.               |
| `data/certifications.ts`   | Certificaciones.                                            |
| `data/recognitions.ts`     | Premios, registros y reconocimientos.                       |

### Reemplazos clave

1. **CV**: coloca el PDF en `public/cv/santiago-jara-moya-cv.pdf` (o ajusta `profile.cvUrl`).
2. **Logos**: `public/logo.png` (personal) y `public/santic-education.png` (empresa). Idealmente PNG con canal alfa (RGBA) para que se vean bien sobre los fondos oscuros del header/footer.
3. **OG image**: `public/images/og.jpg` en 1200×630 px.
4. **Favicon**: reemplaza `app/icon.png` y `app/apple-icon.png`.
5. **Dominio canónico**: define `NEXT_PUBLIC_SITE_URL` en `.env.local` y en el panel de Vercel.

---

## Despliegue en Vercel

1. **Sube el repositorio a GitHub** (o GitLab/Bitbucket).
2. Entra a [vercel.com](https://vercel.com) → **Add New** → **Project** → importa el repositorio.
3. Framework preset: **Next.js** (autodetectado). No requiere comandos adicionales.
4. En **Environment Variables** agrega:
   ```
   NEXT_PUBLIC_SITE_URL = https://tu-dominio.com
   ```
5. Pulsa **Deploy**. Vercel se encarga de CDN, HTTPS y previews automáticos por PR.
6. Vincula tu dominio personalizado desde **Settings → Domains**.

> **Tip:** Activa los previews por rama. Cada Pull Request genera una URL pública para revisar cambios antes de hacer merge a `main`.

### Despliegue manual / servidor propio

```bash
npm run build
npm start
# Sirve en http://localhost:3000
```

Para producción detrás de Nginx / Caddy, apunta el reverse proxy a `localhost:3000` y maneja el TLS desde el servidor.

---

## Sistema de diseño

- **Tipografías**: `Manrope` (display) e `Inter` (texto), cargadas con `next/font/google`.
- **Paleta** (`tailwind.config.ts`):
  - `brand` — azul profundo (`#124773` → `#121724`).
  - `accent.violet` — verde (`#1ab46d`).
  - `accent.cyan` — lima (`#c8e872`).
  - `accent.cream` — crema (`#f6eda9`).
- **Tokens HSL** en `app/globals.css`, expuestos como `bg-background`, `text-foreground`, etc.
- **Utilidades**: `.btn-primary`, `.btn-outline`, `.btn-ghost`, `.card-surface`, `.card-surface-hover`, `.eyebrow`, `.gradient-text`, `.section`.
- **Modo oscuro**: `class="dark"` en `<html>`, conmutado por `next-themes`.

---

## Accesibilidad y rendimiento

- Skip link al contenido principal.
- Focus visible en elementos interactivos.
- `prefers-reduced-motion` honrado en CSS y en Framer Motion.
- Iconos decorativos marcados con `aria-hidden`.
- Imágenes optimizadas con `next/image`.
- Sin librerías pesadas: solo Framer Motion + Lucide.

---

## Contacto

- **Email**: santiagojara@santiceducation.com
- **Web**: [santiceducation.com](https://santiceducation.com)
- **Ubicación**: Ambato, Ecuador

---

## Licencia

El código fuente está bajo licencia **MIT** — ver [`LICENSE`](./LICENSE).
El contenido personal (textos, fotos, CV, logos y demás piezas de marca) es propiedad de Santiago David Jara Moya y no está cubierto por la licencia MIT.

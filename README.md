# Anil Dhakad — Portfolio

Personal portfolio site for Anil Kumar Dhakad, a full-stack .NET developer. Built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Stack

- **Next.js 16** (App Router, static generation)
- **TypeScript**
- **Tailwind CSS v4**
- Self-hosted fonts via `next/font` (no external font requests)
- No UI/animation libraries — scroll reveals are a small custom `IntersectionObserver` hook, kept behind a `.js` class so content stays visible without JavaScript

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
src/
  app/            App Router pages, layout, metadata, sitemap/robots, OG image
  components/     Header, Footer, Reveal (scroll-in animation), ContactForm
  components/sections/   One component per landing-page section
  components/ui/  Small shared primitives (Container, Button, SectionHeading)
  lib/data.ts     All real content — profile, skills, projects, experience, services
public/
  Anil-Dhakad-Resume.pdf   Linked from the header "Resume" button
```

To update content (roles, projects, skills, contact details), edit `src/lib/data.ts` — nothing else needs to change.

## Editing project links

`src/lib/data.ts` currently points each project's "GitHub" link at the general GitHub profile, since the underlying repositories are private client work. Replace `githubHref` / add `liveHref` per project once specific repo or deployment URLs are available.

## Scripts

- `npm run dev` — local dev server
- `npm run build` — production build
- `npm run start` — run the production build locally
- `npm run lint` — ESLint

## Deployment

Deploys cleanly to Vercel (zero config) or any Node host / IIS via `npm run build && npm run start`.

# J.A.R.V.I.S. // Vamsi Krishna Bendalam

> Just A Rather Very Intelligent System.
> Iron-Man-HUD inspired personal portfolio.

A Next.js 16 + React 19 + Three.js + GSAP + Framer Motion + Tailwind 4 portfolio,
designed as a Stark-Industries-style operator console. Statically exported and
deployed via GitHub Pages.

## Stack

- **Next.js 16** (App Router, static export)
- **React 19** + **TypeScript**
- **Three.js** + **@react-three/fiber** + **@react-three/drei** — 3D arc reactor & skills constellation
- **GSAP** + **Framer Motion** — cinematic motion & UI transitions
- **Tailwind CSS 4** — design system
- **react-icons** — iconography
- Fonts: **Orbitron** (display), **Rajdhani** (sans), **JetBrains Mono** (mono)

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build (static export)

```bash
npm run build
# Output → ./out
```

The `out/` directory contains the static site ready to upload anywhere.

## Deploy to GitHub Pages

A workflow is included at [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

### One-time setup

1. Push this repo to **`vamsikrishnabendalam/vamsikrishnabendalam.github.io`** (the user-site repo).
2. On GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. (Optional) Add a repo secret `NEXT_PUBLIC_FORMSPREE_ENDPOINT` with your Formspree form URL to enable the contact form. Without it, the form falls back to `mailto:`.
4. Push to `main` — the workflow builds and deploys automatically.

The live site will be available at **https://vamsikrishnabendalam.github.io**.

## Project structure

```
src/
  app/
    layout.tsx        Root layout, fonts, metadata
    page.tsx          Composes all sections + boot sequence
    globals.css       Jarvis theme tokens & animations
  components/
    hud/              Reusable HUD primitives (HudFrame, GlowButton, etc.)
    three/            3D scenes (ArcReactor, SkillsConstellation)
    sections/         Page sections (Hero, About, Experience, ...)
  lib/
    data.ts           All resume content centralized here
    utils.ts          cn() class helper
public/
  Vamsi_Krishna_Bendalam_Resume.pdf
```

To update résumé content, edit [`src/lib/data.ts`](src/lib/data.ts).

## Customisation tips

- **Tweak the boot intro**: edit `bootLines` in [`src/components/sections/BootSequence.tsx`](src/components/sections/BootSequence.tsx).
- **Arc reactor colors / rings**: tune `ArcReactor.tsx` (ring radii, speeds, colors).
- **Skills radar**: edit `skillsRadar` in `data.ts` — auto-distributes nodes on a sphere.
- **Section copy**: every section reads from `data.ts`. No magic strings.

## Credits

Designed and engineered by **Vamsi Krishna Bendalam** ([LinkedIn](https://www.linkedin.com/in/vamsi-krishna-bendalam)).
Visual language inspired by Stark Industries operator interfaces.

## Purpose

This file provides concise, repository-specific guidance for AI coding agents working on this Next.js (app-router) TypeScript project. Focus on immediate, actionable patterns discovered in the codebase so you can be productive quickly.

## Quick start (preferred)

- **Install:** `pnpm install` (this repo contains `pnpm-lock.yaml`).
- **Dev server:** `pnpm dev` (runs `next dev` from `package.json`).
- **Build / Start:** `pnpm build` then `pnpm start`.
- **Lint:** `pnpm lint` (runs `eslint .`).

## Big picture

- App uses Next.js App Router (see [app/layout.tsx](app/layout.tsx)). Pages and layout are in `app/`.
- UI primitives live in `ui/` (shared small components). App-specific composition components live in `components/` (see `components/apology-page.tsx`).
- Styling: Tailwind + custom CSS. Global styles are under `app/globals.css` and `styles/globals.css`. Design tokens (CSS variables) are used in components and layout.
- Fonts use `next/font/google` in [app/layout.tsx](app/layout.tsx); analytics via `@vercel/analytics` is included in the root layout.

## Project-specific conventions to follow

- Server vs Client: files are server components by default. Add a top-line `"use client"` when the component uses hooks, browser APIs, or state. Examples: `components/theme-provider.tsx` and `components/apology-page.tsx` both declare `use client`.
- Keep primitives in `ui/` and app-specific compositions in `components/` — follow existing filenames and props patterns.
- Prefer CSS variables and Tailwind utility classes for styling (see `components/apology-page.tsx` for typical usage).

## Important integration points

- Theme handling: `next-themes` is wrapped by `components/theme-provider.tsx` (client component). Be cautious when moving theme logic into server components.
- Analytics: `@vercel/analytics/next` is mounted in `app/layout.tsx` — avoid removing without understanding telemetry consequences.
- External libs: many Radix primitives are used (see `package.json`) and the UI expects their API shapes.

## Files to inspect first (examples)

- Root layout: [app/layout.tsx](app/layout.tsx)
- Example client component: [components/theme-provider.tsx](components/theme-provider.tsx)
- App composition: [components/apology-page.tsx](components/apology-page.tsx)
- UI primitives: `ui/` directory
- Scripts/deps: [package.json](package.json)

## Useful rules for code changes

- If you touch a component consumed by `app/` routes, respect server/client boundary: add `"use client"` only when necessary.
- Preserve Tailwind classnames and utility-first approach — avoid adding heavy CSS-in-JS unless justified.
- When adding new dependencies, prefer lightweight, well-known packages already used here (Radix, next-themes, sonner).

## What I couldn't infer

- Node / engine version is not declared; prefer the Node version recommended by the Next.js version in `package.json` when running CI or production. Confirm with the maintainer if needed.

---
If anything above is unclear or you'd like more detail (examples for common changes, a contribution checklist, or CI instructions), tell me which area to expand and I'll iterate.

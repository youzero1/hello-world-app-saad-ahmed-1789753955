---
status: implemented
title: Hello World App
---

Project is empty (only README.md), so this plan covers full scaffolding plus the single home route.

1. Create `package.json` — ESM (`"type": "module"`), npm scripts for `dev`, `build`, `preview`. Dependencies: `react`, `react-dom`, `@tanstack/react-router`. Dev dependencies: `vite`, `@vitejs/plugin-react`, `typescript`, `@types/react`, `@types/react-dom`, `tailwindcss`, `@tailwindcss/vite`, `@tanstack/router-plugin`. Outcome: installable project manifest.
2. Create `vite.config.ts` — register `@vitejs/plugin-react`, `@tailwindcss/vite`, and the TanStack Router plugin (`@tanstack/router-plugin/vite`) configured for file-based routes in `src/routes`; add the `@` alias pointing at `src`. Outcome: dev server generates `src/routeTree.gen.ts` automatically and Tailwind processes styles.
3. Create `tsconfig.json` (and `tsconfig.node.json` if needed for the Vite config) — strict mode, `bundler` module resolution, JSX `react-jsx`, and `paths` mapping `@/*` to `src/*`. Outcome: type checking and alias resolution work in the editor and build.
4. Create `index.html` at the project root — root `<div id="root">`, module script pointing at `/src/main.tsx`, page title "Hello World". Outcome: Vite entry document.
5. Create `src/styles/global.css` — the file starts with exactly `@import "tailwindcss";` as its first line and contains nothing else beyond optional base tweaks. Outcome: Tailwind v4 available app-wide.
6. Create `src/main.tsx` — import `@/styles/global.css` once, create the router from the generated `routeTree.gen`, register router types, and render `RouterProvider` into `#root` inside `StrictMode`. Outcome: app boots with routing.
7. Create `src/routes/__root.tsx` — root layout using `createRootRoute`, rendering an `<Outlet />` inside a full-height wrapper with a subtle gradient background and base typography classes. Outcome: consistent app shell for all routes.
8. Create `src/routes/index.tsx` — home route at `/` rendering a centered greeting component. Outcome: visiting `/` shows the page.
9. Create `src/components/HelloWorld.tsx` — presentational component with a large bold "Hello World" heading, a short friendly subtitle line, centered layout, generous spacing, and responsive text sizes via Tailwind utilities. Imported into the home route using the `@/` alias. Outcome: nicely styled greeting.
10. Add `.gitignore` covering `node_modules`, `dist`, and local env files; note that `src/routeTree.gen.ts` is generated and must never be hand-edited. Outcome: clean repository state.
11. Verify: run the dev server, confirm `/` renders the centered greeting with gradient background, no TypeScript errors, and `src/routeTree.gen.ts` was created by the plugin.

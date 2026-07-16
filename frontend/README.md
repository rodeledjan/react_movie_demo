# React Movie Demo

A small React app built with Vite. The frontend demonstrates a modern React project structure with routing and reusable components.

## Tech stack

- React 19
- Vite 8
- React Router DOM
- Oxlint

## Getting started

From the project root:

```bash
cd frontend
npm install
npm run dev
```

Open the local URL shown in the terminal, usually `http://localhost:5173`.

## Available scripts

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

- `npm run dev` starts the development server
- `npm run build` creates a production build
- `npm run preview` previews the production build locally
- `npm run lint` runs Oxlint against the source files

## Project structure

- `src/`
  - `components/` — reusable UI components like `Navbar` and `MovieCard`
  - `pages/` — page views such as `Home` and `Favorites`
  - `App.jsx` — top-level app layout and routes
  - `main.jsx` — app bootstrap entry point
- `public/` — static assets
- `package.json` — app dependencies and scripts
- `vite.config.js` — Vite configuration

## Notes

- Ensure Node.js and npm are installed before running the project.
- Ignore generated folders such as `node_modules/` and `dist/` in your editor.

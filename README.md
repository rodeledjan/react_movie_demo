# React Movie Demo

A small React app built with Vite.  This demo was provided by Tech with Tim.  The app demonstrates the React structure and shows how to work with a modern frontend setup.

The frontend includes a home page, favorites page, reusable movie cards, and a responsive navbar.

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

- `frontend/`
  - `src/` — React source files
    - `components/` — shared UI components like `Navbar` and `MovieCard`
    - `pages/` — route pages such as `Home` and `Favorites`
  - `public/` — static assets
  - `package.json` — app dependencies and scripts
  - `vite.config.js` — Vite configuration

## Notes

- Make sure Node.js and npm are installed before running the app.
- Ignore generated folders such as `node_modules/` and `dist/` in your editor.




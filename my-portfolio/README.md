# Eddy Yego Portfolio

A personal portfolio website for Eddy Yego, a full-stack developer. It presents selected projects, skills, services, experience, and ways to get in touch.

## Built with

- React and TypeScript
- Vite
- Tailwind CSS
- TanStack Router
- Framer Motion and GSAP for animations

## Run the project locally

You need a recent version of [Node.js](https://nodejs.org/) installed.

```bash
npm install
npm run dev
```

Open the local address shown in the terminal, usually `http://localhost:5173`.

## Available commands

```bash
# Start the development server
npm run dev

# Create an optimized production build
npm run build

# Check the code for linting issues
npm run lint

# Preview the production build locally
npm run preview
```

## Project structure

```text
src/
├── assets/        Images used by the website
├── components/    Page sections, layout, and reusable UI components
├── constants/     Portfolio content such as projects, skills, and links
├── routes/        Application routes
├── styles.css     Global styles and Tailwind theme settings
└── main.tsx       Application entry point
```

## Updating content

Most personal details are kept in `src/constants/portfolio.ts`. Update this file to change:

- Social and contact links
- Navigation links
- Skills, experience, services, and statistics
- Project descriptions, GitHub links, and deployment status

Page sections are in `src/components/sections/`. For example, edit `Projects.tsx` to change how project cards look, or `Contact.tsx` to update the contact section.

## Deployment

Run `npm run build` before deploying. The generated `dist` folder contains the production-ready static site and can be deployed to services such as Vercel, Netlify, or GitHub Pages.

## License

This project is for Eddy Yego's personal portfolio. Do not reuse personal content or images without permission.

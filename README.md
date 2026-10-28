# React developer portfolio

Personal portfolio site built with React 19, TypeScript, Vite and Tailwind CSS v4.

## Make it yours

All content lives in one file: `src/data/profile.ts`.

1. Replace every value marked `TODO` (name, email, Upwork, Fiverr, GitHub, LinkedIn).
2. Check the four production case studies read accurately for your work.
3. As you finish each portfolio project, add its `live` and `code` links under `builds`.
   Projects without links show as "In progress".
4. Update the page title and description in `index.html`.

## Run locally

```bash
npm install
npm run dev
```

## Deploy for free on Vercel

1. Push this folder to a new public GitHub repository.
2. Go to vercel.com, sign in with GitHub, click "Add New Project" and pick the repo.
3. Vercel detects Vite automatically. Click Deploy.
4. You get a link like `your-name.vercel.app`. Use it on Upwork, Fiverr and LinkedIn.

Netlify works the same way (build command `npm run build`, publish directory `dist`).

## Structure

```
src/
  data/profile.ts      all text and links
  components/          one file per section
  index.css            colour tokens, light and dark themes
```

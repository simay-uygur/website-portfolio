# Portfolio Website

This repository uses an Astro template as the base and is configured to deploy to GitHub Pages through GitHub Actions.

## Node.js Requirement

Astro 6 in this project requires Node.js `22.12.0` or newer. The repository pins that version in both `.nvmrc` and `.node-version`.

If your shell is still on Node `20.17.0`, switch before installing dependencies or running a build:

```bash
nvm install 22.12.0
nvm use 22.12.0
```

Confirm the active version:

```bash
node -v
```

Expected output:

```text
v22.12.0
```

## Local Run Commands

Install dependencies:

```bash
npm install
```

Start the local dev server:

```bash
npm run dev
```

Open the local site:

```text
http://localhost:4321
```

Build the production version locally:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Deployment

Push to `main` and GitHub Actions will build and deploy the site to GitHub Pages.

If your repository is named `yourname.github.io`, the site will deploy at:

```text
https://yourname.github.io/
```

If your repository is a project repository such as `website-portfolio`, the site will usually deploy at:

```text
https://yourname.github.io/website-portfolio/
```

## GitHub Pages Settings

In the GitHub repository settings:

1. Go to `Settings` -> `Pages`.
2. Set `Source` to `GitHub Actions`.

## Template Notes

This project keeps the template's content structure and page system. The main content lives in:

```
src/
├── components/
├── content/
├── content.config.ts
├── layouts/
├── pages/
└── styles/global.scss
```

See [STYLEGUIDE.md](STYLEGUIDE.md) for the template's design system and editing guidance.

## Next Adjustments

- Replace the template content in `src/content/` with your own projects, writing, and profile details.
- Update metadata and layout text in `src/layouts/` and `src/pages/`.
- Replace images in `public/` with your own assets.
- Keep `.github/workflows/ci.yml` for checks and `.github/workflows/deploy.yml` for publishing.
- Update the personal profile values in `src/data/site.ts`.

## License

MIT License. Original CodePen layout © Aysenur Turk

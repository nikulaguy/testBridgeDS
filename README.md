# Frontguys Accessibility Website

Website URL: https://inspiring-gecko-d9ada2.netlify.app/

## How to pull design tokens
1. Open [Colors Figma file](https://www.figma.com/design/sudoHypKpnMktYVplKcTt2/Foundation---Colors?node-id=4117-8)
2. Open [TokensBrücke](https://www.figma.com/community/plugin/1254538877056388290) Figma plugin from Figma panel (no need to install it)
3. Enable "Use DTCG keys format"
4. Either download the JSON file and override the `src/tokens/colors.json` file or set up a connection to GitLab with your personal access token.

## 🚀 Project Structure

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   ├── img/
│   │   ├── icons/
│   │   └── styles/
│   ├── components/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `pnpm install`         | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |
| `pnpm storybook`       | Start Storybook dev server                       |
| `pnpm build-storybook` | Build Storybook                                  |
| `pnpm build-tokens`    | Build design tokens                              |
| `pnpm format-files`    | Format all files                                 |
| `pnpm lint-files`      | Lint and apply safe fixes to all files           |

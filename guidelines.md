# AI Reference Guide

This file provides comprehensive guidance for all LLMs and AI agents working on this repository. It serves as the single source of truth for understanding the architecture, conventions, accessibility best practices, and project workflows.

## Commands & workflows

### Core app (Astro)
- Install deps: `pnpm install`
- Dev server: `pnpm dev` (Astro dev server on port 4321 by default)
- Production build: `pnpm build` (outputs to `dist/`)
- Preview production build: `pnpm preview`
- Astro CLI: `pnpm astro ...` (e.g. `pnpm astro check` for type/syntax checking)

### Storybook & visual testing
- Start Storybook: `pnpm storybook` (React/Vite Storybook using components from `src/components`)
- Build Storybook: `pnpm build-storybook`

Storybook is configured in `.storybook/` and reuses the `svgrPlugin` exported from `astro.config.mjs` so SVG components behave consistently between the site and Storybook.

### Vitest + Storybook integration (tests)
There is no dedicated `test` script, but Vitest is configured in `vitest.config.ts` to run Storybook-based browser tests via `@storybook/addon-vitest` and Playwright.

Use `pnpm exec vitest` with the Storybook project:
- Run all Storybook tests in headless Chromium:
  - `pnpm exec vitest --project storybook`
- Run a specific test file:
  - `pnpm exec vitest --project storybook src/components/Button/Button.stories.tsx`
- Filter by test name within the Storybook test project:
  - `pnpm exec vitest --project storybook -t "Button"`

Vitest setup for Storybook lives in `.storybook/vitest.setup.ts` and composes the global Storybook annotations (including a11y configuration) so tests run with the same parameters as the UI.

### Design tokens pipeline
Design tokens live in `src/tokens/*.json` and are built into CSS/SCSS using the Terrazzo CLI:
- Build tokens: `pnpm build-tokens` (runs `npx tz build` via `@terrazzo/cli` and `@terrazzo/plugin-css`).

Color tokens are maintained in Figma and synchronized via the TokensBrücke plugin (see `README.md`):
1. Open the "Foundation - Colors" Figma file.
2. Run the "TokensBrücke" plugin and enable "Use DTCG keys format".
3. Export and overwrite `src/tokens/colors.json` (or hook up the plugin to push directly to Git).

Global styles are composed in `src/assets/styles/style.scss`, which imports:
- `01-utils/` – variables, mixins, utility classes, token-derived SCSS maps.
- `02-base/` – base resets and global element styles.
- `03-fonts/` – font-face definitions.

### Linting & formatting
This repo uses Biome via `@biomejs/biome`:
- Format all files: `pnpm format-files`
- Lint and apply safe fixes: `pnpm lint-files`

## Architecture & structure

### High-level stack
- **Framework**: Astro 5 (`astro.config.mjs`) with static output (`output: "static"`) and Netlify adapter.
- **UI composition**: Mix of Astro components (`.astro`) and isolated React components (notably the polymorphic `Button` in `src/components/Button/Button.tsx`).
- **Styling**: SCSS architecture in `src/assets/styles/` plus CSS Modules for some React pieces (e.g. `Button.module.css`).
- **Content**: Astro Content Collections under `src/content/` (Markdown and YAML) combined with template pages in `src/pages/`.

### Accessibility

All code and content in this repository must follow WCAG 2.1 AA (or higher) and general accessibility best practices. This project is a showcase of accessibility expertise—every implementation must be exemplary.

#### Core principles

- **Semantics first**: Always prefer native HTML elements over ARIA. Use ARIA only when native semantics are insufficient.
- **Progressive enhancement**: Ensure all functionality works without JavaScript where possible; enhance with JS for better UX.
- **Language**: The site is in French (`<html lang="fr">`). Use `lang` attributes for any content in other languages.

#### Semantics & landmarks

- Use the most appropriate semantic HTML elements:
  - `<button>` for actions, `<a>` for navigation
  - `<nav>`, `<header>`, `<main>`, `<footer>`, `<aside>` for landmark regions
  - `<section>` with `aria-labelledby` for named regions (see `Section.astro` script pattern)
  - `<article>` for self-contained content
  - `<form>`, `<fieldset>`, `<legend>`, `<label>` for forms
- Ensure every page has exactly one `<h1>` via `PageHeader.astro` and a logical heading hierarchy (`h1` → `h2` → `h3`...).
- Never skip heading levels; use `Text.astro` with `variant` prop for visual styling while keeping semantic tags correct.
- Provide proper landmark regions so screen reader users can navigate efficiently. The `Layout.astro` shell provides: `SkipLinks` (nav), `Header` (banner), `main`, and `Footer` (contentinfo).

#### Keyboard support

- All interactive elements must be reachable and operable with keyboard alone:
  - Tab/Shift+Tab for focus navigation
  - Enter/Space for activation
  - Escape to close overlays (see `Header.astro` mobile nav implementation)
  - Arrow keys for composite widgets (menus, tabs, etc.)
- Never rely solely on `onClick` for interactive elements—ensure native focus and keyboard behavior or add explicit keyboard handlers.
- Use visible focus indicators. The project defines `:focus-visible { outline-offset: .1875rem; }` in `_base.scss`. Never remove focus outlines; customize them to meet WCAG 3:1 contrast.
- For block links (clickable cards), follow the pattern in `Card.astro`: main link in heading, click delegation on card, preserve text selection.

#### Color, contrast & motion

- Do not use color alone to convey meaning. Example: `Alert.astro` uses both icons and `role="alert"/"status"` alongside color.
- Maintain at least 4.5:1 contrast for normal text and 3:1 for large text (18pt+) and essential UI elements.
- Use design tokens from `src/tokens/` for colors to ensure consistency. Tokens are synchronized from Figma with accessibility-checked palettes.
- Respect `prefers-reduced-motion`. All animations in `Button.module.css`, `Header.scss`, and `_base.scss` are wrapped in `@media (prefers-reduced-motion: no-preference)` blocks.
- If adding new animations, always include a reduced-motion fallback.

#### Forms & feedback

- Every form control must have a programmatically associated label:
  - `<label for="id">` for visible labels (preferred)
  - `aria-label` for icon-only inputs
  - `aria-labelledby` for complex labels
- Use `FormElement.astro` for all form fields—it handles:
  - Label association via `for` and `id`
  - `aria-required` (not native `required` to allow custom validation UX)
  - `aria-invalid` for error states
  - `aria-describedby` linking to error messages and hints
  - Proper input types (`email`, `tel`, etc.)
- Use `autocomplete` attributes appropriately (e.g., `autocomplete="email"`, `autocomplete="given-name"`)—see `ContactForm.astro`.
- On form submission errors:
  - Display an `Alert` component with `variant="error"`
  - Focus the error summary (see `ContactForm.astro` with `tabindex="-1"` and `focus()` on load)
  - Update `document.title` to prefix with error state
  - Provide a link to the first error field

#### Links & buttons

- Use `Button.tsx` for all button-like interactions. It's polymorphic (`as="button"` or `as="a"`).
- External links must:
  - Have a `title` attribute including "Nouvelle fenêtre" (enforced by `Button.tsx` throwing an error if missing)
  - Include `<VisuallyHidden label={externalLinkLabel} />` for screen readers
  - Display an external link icon (`link-arrow`)
- Use `Link.astro` for inline and standalone links—it automatically handles external link indicators.
- Ensure link and button texts are descriptive out of context. Avoid "click here" or "learn more" without context. Use `complementaryLabel` prop in `Link.astro` for additional screen-reader-only context.
- Icon-only buttons must include visually hidden text via `<VisuallyHidden label="..." />` (see social buttons in `Footer.astro`).

#### Images & media

- All informative images must have descriptive `alt` text.
- Decorative images and icons must have `alt=""` or `aria-hidden="true"` (see all `<Icon>` usages with `aria-hidden="true"`).
- Use `<Picture>` component from `astro:assets` for responsive images with modern formats (see `MediaObject.astro`).
- For complex images (charts, diagrams), provide a text alternative or link to a detailed description.
- Videos must have captions and transcripts. Avoid autoplay; if used, provide pause controls.

#### Navigation & skip links

- The `SkipLinks.astro` component provides "Aller au contenu" (`#main`) and "Aller au menu principal" (`#site-nav`) links.
- Pages can add custom skip links via the `pageSkipLinks` prop (see `pages.contact` in `site.config.ts`).
- Skip links use `u-visually-hidden-focusable` class: hidden until focused, then visible.
- Use `aria-current="page"` on navigation links to indicate the current page (see `getAriaCurrentValue()` utility).

#### Mobile navigation

The `Header.astro` mobile nav is a reference implementation:
- Toggle button with `aria-expanded`, `aria-controls`, `aria-haspopup`, dynamic `aria-label`
- Background content made inert with `inert` attribute when nav is open
- Escape key closes the nav and returns focus to toggle
- Respects `prefers-reduced-motion` for open/close animations

#### Focus management & overlays

- When opening dialogs, modals, or overlays:
  - Move focus into the dialog
  - Trap focus within until closed (use `inert` on background content, as in `Header.astro`)
  - Handle Escape key to close
  - Restore focus to the trigger element after closing
- Use native `<dialog>` element where possible for built-in focus management.
- For non-modal overlays, ensure background content remains accessible but clearly distinguish the overlay.

#### Live regions & dynamic content

- Use `role="alert"` for urgent error messages (interrupts screen reader).
- Use `role="status"` for non-urgent updates (politely announced).
- The `Alert.astro` component correctly chooses role based on `variant` ("error" → alert, "success" → status).
- For loading states, use `aria-busy="true"` on the updating region.
- For dynamic lists or content updates, consider `aria-live="polite"` regions.

#### Tables

- Use `<table>` with proper structure: `<thead>`, `<tbody>`, `<th scope="col">` or `<th scope="row">`.
- Provide a `<caption>` for complex tables or use `aria-labelledby` to reference a visible heading.
- Avoid layout tables; use CSS Grid or Flexbox (see `.grid` class in `_base.scss`).

#### Touch targets & spacing

- All interactive elements must have a minimum touch target of 44×44px.
- Buttons use `--interactive-element-height` (48px) and `--interactive-element-height-small` for touch compliance.
- Ensure adequate spacing between clickable elements to prevent accidental taps.

#### Text & content

- Preserve a logical reading order that matches visual layout. Avoid CSS `order` that breaks the relationship.
- Ensure content is readable at 200% zoom without horizontal scrolling.
- Support text spacing adjustments (line height, letter spacing, word spacing) without breaking layout.
- Use relative units (`rem`, `em`) for font sizes; avoid fixed `px` where possible.

#### Error handling & 404

- The `404.astro` page provides clear navigation back to home and site map.
- Error pages maintain the same accessible shell (skip links, header, footer).
- Form errors follow the pattern in `ContactForm.astro` with accessible error summaries.

#### Testing & review

- **Automated testing**: Storybook includes `@storybook/addon-a11y` (axe-core). The `.storybook/preview.ts` configures a11y tests in "todo" mode. Run tests with `pnpm exec vitest --project storybook`.
- **Manual testing checklist**:
  - Keyboard-only navigation (Tab, Enter, Space, Escape, Arrow keys)
  - Screen reader testing (VoiceOver on Mac: Cmd+F5)
  - Zoom to 200% without horizontal scroll
  - High contrast mode (Windows) or invert colors
  - Reduced motion preference
- **Browser tools**: Use Lighthouse, axe DevTools, or WAVE for quick checks.
- **Prefer existing primitives**: Reuse `Button`, `Link`, `FormElement`, `Alert`, `VisuallyHidden`, `SkipLinks` rather than building ad-hoc patterns.

#### Component accessibility reference

| Component | Key accessibility features |
|-----------|---------------------------|
| `Button.tsx` | Polymorphic, external link handling, focus styles, disabled states |
| `Link.astro` | External link indicators, complementary labels |
| `FormElement.astro` | Label association, aria-required/invalid/describedby, error display |
| `Alert.astro` | role="alert"/"status", aria-labelledby, icon + text |
| `SkipLinks.astro` | Visually hidden until focused, customizable per page |
| `VisuallyHidden.astro` | Screen-reader-only text, external link labels |
| `Header.astro` | Mobile nav with aria-expanded, inert, Escape key |
| `Card.astro` | Block link pattern, click delegation, text selection |
| `Section.astro` | Auto aria-labelledby for sections with titles |
| `Accordion.astro` | Native `<details>`/`<summary>` for built-in a11y |

If a design or implementation conflicts with these guidelines, prioritize accessibility and WCAG 2.1 AA compliance and document any constraints in code comments or PR descriptions.

### Layout & page composition

- **Main layout**: `src/layouts/Layout.astro`
  - Imports global SCSS entrypoint `src/assets/styles/style.scss`.
  - Renders `<!DOCTYPE html>`, `<html lang="fr">`, `<head>` (via `MainHead.astro`), `<body>`, and the persistent shell: `SkipLinks`, `Header`, `<main id="main">`, and `Footer`.
  - Computes `<title>` and `<meta>` description via `getPageTitle` / `getPageDescription` from `src/utils/string.utils.ts`.
  - Accepts a `page` prop (from `site.config.ts`) to configure title, description, header content, and page-specific skip links.
  - Renders `PageHeader` with optional `MediaObject` when `usePageHeader` is true (default).
  - Most `.astro` pages (e.g. `src/pages/index.astro`, `styleguide.astro`) use this layout.

- **Content layout**: `src/layouts/ContentLayout.astro`
  - Thin wrapper around `Layout.astro` for long-form content pages (legal, articles).
  - Renders an `<article>` with a back link to home and a `.prose` content area.
  - Automatically resolves page data from `site.config.ts` based on current URL.

- **Contact form**: `src/layouts/ContactForm.astro`
  - Reusable contact form component with full accessibility implementation.
  - Uses `FormElement.astro` for all fields with proper error handling.
  - Implements accessible error summary with focus management.

When adding new page types:
- Use `Layout.astro` for general marketing/landing pages with the standard header/footer shell.
- Use `ContentLayout.astro` for long-form editorial content with back navigation and prose styling.
- Add page configuration to `site.config.ts` to define title, description, header content, and optional skip links.

### Navigation, routing & global config
Global site metadata and navigation live in `src/site.config.ts`:
- `siteName`, `siteDescription` – used for SEO titles/descriptions via `string.utils.ts` + `MainHead.astro`.
- `pages` – single source of truth for route paths (home, expertise, offer, trainings, business cases, legal pages, styleguide, etc.).
- `skipLinks` – used by `src/components/SkipLinks/SkipLinks.astro` to build the skip navigation bar (e.g. links to `#main`, `#site-nav`).
- `headerLinks` – consumed by `Header.astro` to build the main nav; some links are rendered as primary CTA buttons via `asButton`.
- `footerLinks` and `footerLegalLinks` – consumed by `Footer.astro` to build secondary and legal navigation.
- `socialLinks` – used by `Footer.astro` to render social icon buttons with `VisuallyHidden` labels.

`Header.astro`, `Footer.astro`, and other navigation components use `getAriaCurrentValue` from `src/utils/string.utils.ts` to set `aria-current="page"` based on `Astro.request.url`, ensuring consistent highlighting of the active page.

### Content model (Astro Content Collections)
Structured content is stored under `src/content/` and accessed via `astro:content`:
- `src/utils/collection.utils.ts` defines `getCollectionSortedByOrder`, which:
  - Calls `getCollection(collectionName)` and, if entries have an `order` field, sorts them ascending by `data.order`.
- Collections observed in the tree include:
  - `content/cas-clients/` – case studies; `BusinessCases.astro` plus multiple Markdown entries.
  - `content/formations/` – training offerings (Markdown and YAML for metadata/methodology).
  - `content/enjeux/`, `content/expertise/`, `content/offre/`, `content/guide-gratuit/` – YAML and Markdown backing various marketing/strategy pages.

Key usage patterns:
- `src/pages/index.astro` calls `getCollectionSortedByOrder("services")` to render services cards.
- `src/pages/styleguide.astro` reads `businessCases` to generate card lists demonstrating the design system.

To add new structured content (e.g. a new training or case study), prefer adding an entry under the appropriate `src/content/...` collection and consume it via `getCollection` / `getCollectionSortedByOrder` instead of hardcoding data in page components.

### Components & design system
Components live under `src/components/` and are shared between the Astro site and Storybook.

Key patterns:
- **Layout primitives**: `Section.astro`, `Stack.astro`, and `Text.astro` provide spacing, typography variants, and background color semantics. Higher-level components (e.g. `MediaObject`, `ProfileBanner`, `Banner`, `Card`) are composed from these primitives.
- **Navigation & accessibility**:
  - `SkipLinks.astro` builds a focusable, visually-hidden-on-idle navigation bar from `skipLinks` to jump to main content or navigation.
  - `VisuallyHidden.astro` is used throughout (e.g. in `Button` icon-only variants, social buttons, metadata blocks) to provide accessible labels while keeping visuals clean.
  - `Header.astro` implements a mobile navigation toggle button with `aria-expanded` and `aria-label` updates and icon swapping via a small `<script>` bound to the `astro:page-load` event.
- **React `Button` component**: `src/components/Button/Button.tsx`
  - Uses `class-variance-authority` and a CSS module (`Button.module.css`) to define variants (`primary`, `secondary`, `ghost`), size, `isFullWidth`, and `isSquared` options.
  - Polymorphic between `<button>` and `<a>` via an `as` prop constrained to those tags.
  - Reused across Astro components (via `import { Button } from "../components/Button/Button"`) for CTAs, icon buttons, and navigation actions.

The style guide page (`src/pages/styleguide.astro`) is an in-repo catalog of the design system, exercising most components in realistic combinations (headings, text, badges, lists, forms, cards, accordions, media objects, banners, profile banners, etc.). It is the best reference for how components are intended to be composed.

### Astro pages
Route-level pages live in `src/pages/`:
- `.astro` pages for main sections (home, expertise, offer, trainings, cases, contact, styleguide, etc.) typically:
  - Import `Layout.astro` for the shell.
  - Use Sections + design system components to compose the page.
  - Pull data from `src/content/` collections when dynamic lists are needed.
- `.md` Markdown pages use `ContentLayout.astro` for long-form content with consistent styling and back navigation.

When adding new routes:
- Prefer creating a `.astro` file under `src/pages/` that uses `Layout.astro` or `ContentLayout.astro`.
- If the content is editorial and may grow into a collection, consider putting it under `src/content/` and driving the page from a collection entry.

## Guide for AI Agents: Approach to Changes

This section provides specific guidance for AI agents and LLMs working on this project. Follow these principles to ensure code consistency and quality.

### General Principles

- **Respect existing architecture**: Before adding new features, explore existing components and utilities. Reuse rather than reinvent.
- **Accessibility first**: Any modification must maintain or improve WCAG 2.1 AA compliance. Consult the "Accessibility" section above before any implementation.
- **Design system consistency**: Use design tokens (`src/tokens/`) and existing components rather than creating ad-hoc styles.
- **Documentation**: Comment on complex decisions or necessary compromises, especially if they concern accessibility.

### Common Modifications and Best Practices

#### Navigation or URL Changes
- **Step 1**: Update paths and titles in `src/site.config.ts` first.
- **Step 2**: Adjust layout logic or page imports if necessary.
- **Result**: Components that depend on `pages`/`headerLinks`/`footerLinks` will automatically pick up changes.

#### Design or Token Changes
- **Prefer**: Update JSON tokens in `src/tokens/` and rebuild via `pnpm build-tokens` so SCSS and components stay synchronized.
- **Avoid**: Hardcoding color, spacing, or typography values.
- **Workflow**: If tokens come from Figma, follow the synchronization process described in the "Design tokens pipeline" section.

#### New UI Components
- **Pattern**: Follow existing patterns by creating composable primitives in `src/components/`.
- **Documentation**: Showcase new components on `src/pages/styleguide.astro` and via a Storybook story (`*.stories.tsx`).
- **Accessibility**: Ensure the component respects all accessibility guidelines (keyboard, ARIA, contrast, etc.).
- **Tests**: Create Storybook tests with `@storybook/addon-a11y` to validate accessibility.

#### Test Modifications
- **Validation**: When modifying existing Storybook stories or adding new ones, ensure Vitest Storybook tests still pass with `pnpm exec vitest --project storybook`.
- **Configuration**: Adjust `.storybook/vitest.setup.ts` only if the global Storybook configuration changes.

#### Content Addition
- **Collections**: For structured content (trainings, case studies, articles), add an entry under `src/content/` rather than hardcoding in components.
- **Pages**: Use `Layout.astro` for marketing/landing pages, `ContentLayout.astro` for long-form editorial content.

#### Accessibility Modifications
- **Reference**: Always consult the "Accessibility" section of this document before any modification.
- **Existing components**: Reuse `Button`, `Link`, `FormElement`, `Alert`, `VisuallyHidden`, `SkipLinks` rather than creating ad-hoc patterns.
- **Tests**: Validate with automated tools (axe-core via Storybook) and the manual checklist.

### Recommended Workflow for AI Agents

1. **Understand context**: Read this `guidelines.md` file in full before starting.
2. **Explore existing code**: Search for similar components or patterns before creating something new.
3. **Plan modifications**: Identify all files that will be affected (config, components, styles, tests).
4. **Implement**: Follow existing conventions and patterns.
5. **Validate**: Run tests and verify accessibility.
6. **Document**: Add comments for complex decisions or compromises.

### Key Resources to Consult

- **Architecture**: "Architecture & structure" section of this document
- **Accessibility**: "Accessibility" section (principles, components, tests)
- **Components**: `src/pages/styleguide.astro` to see all components in action
- **Configuration**: `src/site.config.ts` for navigation and metadata
- **Tokens**: `src/tokens/` for design values
- **Tests**: `.storybook/` for test configuration

### Important Notes

- **Language**: The site is in French. All texts, labels, and messages must be in French.
- **Modern CSS**: Use modern CSS rules (Grid, Container Queries, CSS Layers, etc.) as specified in the project rules.
- **Standards**: Strictly respect WCAG 2.1 AA guidelines and web accessibility best practices.


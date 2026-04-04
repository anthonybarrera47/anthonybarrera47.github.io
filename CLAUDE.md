# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a static personal portfolio website for Anthony Barrera, hosted on GitHub Pages at `anthonybarrera47.github.io`. No build step, no framework, no package manager — just plain HTML, CSS, and vanilla JavaScript served directly by GitHub Pages.

## Development

Open `index.html` directly in a browser. There is no local server required, no build process, and no dependencies to install.

## Architecture

The site is a single-page portfolio (`index.html`) with the following structure:

- **`index.html`** — All markup. Sections: `#hero`, `#sobre-mi`, `#especialidades`, `#proyectos`, `#contacto`. Navigation uses anchor links with smooth scroll.
- **`styles/main.css`** — All styling. Single stylesheet, no preprocessor.
- **`js/main.js`** — Two concerns:
  1. **i18n**: A `translations` object holds all UI strings in `es`/`en`. `changeLanguage(lang)` swaps text by querying DOM selectors. When adding new text content to `index.html`, a corresponding entry must be added to both language objects in `main.js`.
  2. **Scroll animations**: IntersectionObserver adds `.fade-in` class to elements as they enter the viewport.
- **`resources/`** — Images for the portfolio (profile photo, project screenshots).
- **`HB/` and `HB2/`** — Self-contained birthday card mini-projects unrelated to the main portfolio.
- **`proposal/`** — Separate standalone mini-project.

## Key Conventions

- **Language switching**: All user-visible text in `index.html` must have a matching translation key under both `translations.es` and `translations.en` in `js/main.js`. The `changeLanguage()` function selects DOM nodes by CSS selectors (nth-child, class names) — adding/removing sections or reordering elements can break these selectors.
- **Inline script in `index.html`**: The mobile hamburger menu toggle is handled by an inline `<script>` at the bottom of `index.html`, separate from `js/main.js`.
- **No JS bundler**: All JS is loaded via plain `<script src="...">` tags. External libraries (jQuery, lightbox, baffle) are vendored in `js/` as minified files.

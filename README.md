# nicolasallerponte.com

Personal website of Nicolás Aller Ponte, Data & AI Engineer. Live at
[nicolasallerponte.com](https://nicolasallerponte.com).

## Overview

A bilingual (Spanish/English) single page covering background, projects and awards.
The language toggle rewrites the page in place and switches the CV link; the email
address is obfuscated and revealed on click.

Each entry in the background section opens a spec sheet with the stack behind it.

## Tech stack

- **Bundler**: [Parcel](https://parceljs.org/)
- **Styling**: plain CSS, no framework
- **Scripts**: vanilla JavaScript, no dependencies
- **Typography**: Bodoni Moda for display, system sans for body text

## Getting started

Requirements: [Node.js](https://nodejs.org/) v14 or later and npm.

```bash
npm install
npm run dev     # http://localhost:1234
npm run build   # production build into dist/
```

## Layout

```
src/
  index.html        the whole page
  style.css         the whole stylesheet
  assets/           images, logos, CV and thesis
  assets/brand/     symbol, wordmark and favicons
```

## Deployment

Cloudflare builds the site with `npm run build` and serves `dist/`.

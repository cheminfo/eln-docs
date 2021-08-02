# Building a PDF

```bash
npx mr-pdf --initialDocURLs="https://docs.c6h6.org/docs/eln/" --contentSelector="article" --paginationSelector=".pagination-nav__item--next > a" --excludeSelectors=".margin-vert--xl a" --coverImage="https://cheminfo.github.io/assets/images/logo.svg" --coverTitle="www.c6h6.org"
```

# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Installation

```console
npm install
```

## Local Development

```console
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
npm build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

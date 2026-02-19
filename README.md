# Rakam Systems Documentation Portal (Docusaurus + Docker)

This folder contains a Docusaurus documentation portal designed to scale across:
- Core AI Modules Library
- SDK (submodules/APIs)
- Developer Console
- Templates & Off-the-Shelf Solutions
- Architecture, Operations, Security & Compliance, Release & Maintenance, Contributing

## Local development

The `docs/` directory is not tracked in this repository. It is synced from [rakam_systems](https://github.com/Rakam-AI/rakam_systems) at build time by the CI pipeline.

To run the site locally, first copy the docs from the source repository:

```bash
cp -r ../rakam_systems/docs ./docs
```

Then start the dev server:

```bash
npm install
npm run start
```

## Build

```bash
npm run build
```

## Docker

```bash
docker build -t rakam-systems-docs:latest .
docker run --rm -p 8080:8080 rakam-systems-docs:latest
```

Open: http://localhost:8080

## Versioning

Docusaurus supports docs versioning natively.

Create a new version:

```bash
npm run version:current -- v1.2.0
```

## Repository links

- Repo: https://github.com/Rakam-AI/rakam_systems
- Issues: https://github.com/Rakam-AI/rakam_systems/issues
- Create issue: https://github.com/Rakam-AI/rakam_systems/issues/new/choose


## GitHub Pages vs Docker baseUrl

Docusaurus uses `baseUrl` at build time. This project supports both:

- Docker/local: `DOCS_BASEURL=/`
- GitHub Pages (project pages): `DOCS_BASEURL=/rakam_systems/`

Example GH Pages build:
```bash
DOCS_URL=https://rakam-ai.github.io DOCS_BASEURL=/rakam_systems/ npm run build
```

Example Docker build (defaults are already correct):
```bash
docker build -t rakam-systems-docs:latest .
```

You can also override:
```bash
docker build --build-arg DOCS_BASEURL=/rakam_systems/ --build-arg DOCS_URL=https://rakam-ai.github.io -t rakam-systems-docs:latest .
```

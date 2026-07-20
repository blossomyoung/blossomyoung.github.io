# Blossom Young — Councillor Website

Static site for Cllr Blossom Young (Beckton ward, Newham Council). Built with
[Astro](https://astro.build), no client-side framework, deployed to GitHub Pages at
**blossomyoung.uk**.

## Still needed from the client before launch

See `src/lib/site.ts` for every `TODO` — search that file for `TODO` to find them all in one place.
In short:

- Confirmed contact email / phone / office address
- Ward surgery day, time, location (currently a placeholder)
- Confirmed social media handles/URLs (none are wired in yet — verify each resolves to the real
  profile before adding)
- Exact imprint/promoter wording, word for word, for UK political communications compliance
- Bio copy, priorities copy, "how I got here" timeline milestones (`src/pages/about/index.astro`)
- Headshot and other real photos (see below)
- Formspree endpoints for the contact, casework, and newsletter forms
- Real news posts

Until these arrive, the site uses clearly labelled placeholders (gradient photo placeholders,
`[TODO: ...]` text) — nothing is silently faked.

## Adding a news post

Drop a new `.md` file into `src/content/news/`. The filename becomes the URL slug
(e.g. `pothole-fixed.md` → `/news/pothole-fixed/`). Required frontmatter:

```yaml
---
title: "Post title"
date: 2026-03-01
category: Housing # one of: Housing, Community, Environment, Council, Transport
excerpt: "One or two sentence summary shown on listing cards."
image: "placeholder" # legacy field, not directly rendered
imageAlt: "Alt text for the photo"
draft: false
---
Body content in Markdown.
```

An example draft post (`example-post.md`) is included — edit it, publish it, or delete it.

## Adding a real photo

**News post photos** (auto-matched by filename): save the image as
`src/assets/images/news/<post-slug>.(jpg|jpeg|png|webp)` — no code change needed.

**Fixed photo slots** (hero headshot, About page photo): add the file to `src/assets/images/`,
then swap the relevant `<PlaceholderPhoto>` for `<SitePhoto image={...} alt="..." />` in the
component/page — see comments in `Hero.astro` and `src/pages/about/index.astro`.

Pre-resize any source photo wider than ~1400px (e.g. with `sharp`) before adding it, to keep
build output light — this applies especially to photos embedded directly in a news post's
Markdown body.

## Updating social links

Edit the `socialLinks` array in `src/lib/site.ts`. Both the header strip and footer read from
this single array.

## Forms (Formspree)

1. Sign up at [formspree.io](https://formspree.io) (free tier: 50 submissions/month).
2. Create one form per endpoint needed: Contact, Casework (Find Help page), Newsletter.
3. Paste each endpoint URL into the `formspree` object in `src/lib/site.ts`.
4. Formspree sends a one-time verification email to the destination address on the first real
   submission — expect and confirm that.

Until an endpoint is set, each form falls back to a harmless local "preview" mode (shows a
success message, sends nothing) so the site is fully demoable before Formspree is wired up.

## Local development

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # type-checks then builds to dist/
npm run preview   # preview the production build locally
```

## Deployment (GitHub Pages, custom domain)

This repo is configured for GitHub Pages with the custom domain **blossomyoung.uk** from day one
(no `/repo-name/` subpath, no `base` option needed).

1. Create a **public** GitHub repository (Pages on the free tier requires public) and push this
   code to the `main` branch.
2. In the repo: **Settings → Pages → Source → GitHub Actions**. This one step has to be done by a
   human in the GitHub web UI — it can't be automated via the API.
3. At your domain registrar, add DNS records for `blossomyoung.uk`:
   - Four `A` records for `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`,
     `185.199.111.153`
   - A `CNAME` record for `www` → `<your-github-username>.github.io`
4. In **Settings → Pages → Custom domain**, enter `blossomyoung.uk`, wait for the DNS check to
   pass, then tick **Enforce HTTPS** once it becomes available (can take minutes to hours after
   DNS verifies). The `public/CNAME` file in this repo already contains the domain so it survives
   every future deploy.
5. Every push to `main` triggers `.github/workflows/deploy.yml`, which builds and deploys
   automatically.

If you ever see `ERR_SSL_VERSION_OR_CIPHER_MISMATCH` after DNS has verified correctly: try
removing and re-adding the custom domain in Settings → Pages to force certificate reissuance, and
also try loading the site from a different network (e.g. mobile data) before assuming the site
itself is broken — some organisational networks flag new domains during TLS inspection.

## Legal pages

`src/pages/legal/*.astro` are marked `noindex` until you've reviewed and approved the copy —
remove the `noindex` prop in each page's `<BaseLayout>` once approved.

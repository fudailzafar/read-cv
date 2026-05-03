# read.cv template

A minimal, open-source portfolio template inspired by [read.cv](https://read.cv) — built for designers and developers who want a clean, editorial digital presence.

![Preview](./public/demo.png)

---

## What is this?

This is a fully functional read.cv-style profile template. It gives you a calm, structured, text-first personal page — no flashy animations, no heavy UI frameworks, just clean hierarchy and good typography.

Sections included out of the box:

- **About** — a short personal bio
- **Work Experience** — company, role, and years
- **Education** — degree and institution
- **Speaking** — conference talks with location
- **Side Projects** — personal builds and experiments
- **Writing** — powered by a Markdown file-system CMS
- **Contact** — structured social links grid

---

## Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 14 | App Router, static generation |
| TypeScript | Type safety throughout |
| Tailwind CSS | All styling, zero custom CSS |
| Framer Motion | Subtle page transitions |
| gray-matter | Markdown frontmatter parsing |
| remark | Markdown → HTML rendering |

---

## Getting Started

```bash
git clone https://github.com/fudailzafar/read-cv.git
cd read-cv
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

---

## Customization

### Profile, Experience & Sections

All content is managed from a single file:

```
data/siteContent.ts
```

Edit your name, bio, experience, education, speaking engagements, side projects, and contact links here. No component editing needed.

### Writing / Blog

Blog posts are plain Markdown files stored in:

```
content/blog/
```

Create a new post by adding a `.md` file:

```md
---
title: "Post Title"
date: "2025-01-01"
description: "A short summary."
tags: ["design"]
---

Your content here.
```

The filename becomes the URL slug automatically.

### Work / Projects

Case studies and project pages live in:

```
content/work/
```

Same Markdown format as blog posts — add a file, it appears at `/work/[slug]`.

### Profile Image

Replace `/public/profile-avatar.png` with your own photo. Keep it square for best results with the circular crop.

### Theme

Adjust CSS variables in `app/globals.css`:

```css
--color-bg: #FAFAFA;
--color-text: #111111;
--color-muted: #777777;
```

---

## Project Structure

```
.
├── app/                  # Next.js App Router (pages, layout, global CSS)
├── components/
│   ├── sections/         # Profile sections (About, WorkExperience, Writing…)
│   └── ui/               # Shared primitives (FadeIn, Section, Container…)
├── content/
│   ├── blog/             # Markdown blog posts
│   └── work/             # Markdown case studies
├── data/
│   └── siteContent.ts    # All profile content in one place
├── lib/
│   ├── blog.ts           # Blog parsing utilities
│   └── work.ts           # Work parsing utilities
└── public/               # Static assets
```

---

## Deployment

Push to GitHub, then deploy instantly on [Vercel](https://vercel.com/new) — no config needed. Vercel auto-detects Next.js.

---

## License

MIT — use it, fork it, make it yours. See [LICENSE](./LICENSE).
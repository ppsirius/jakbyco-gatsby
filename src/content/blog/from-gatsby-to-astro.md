---
title: "From Gatsby to Astro — Why I Rebuilt My Portfolio"
description: "My experience migrating from Gatsby to Astro and why the new stack feels better."
pubDate: 2024-01-15
tags: ["astro", "gatsby", "frontend", "performance"]
---

After running my portfolio on Gatsby for a few years, I decided it was time for a change. The JavaScript ecosystem moves fast, and I wanted to try something new.

## Why Gatsby Was Great

Gatsby served me well. GraphQL-powered data fetching, great image optimization, and a rich plugin ecosystem. For a portfolio in the early 2020s, it was a solid choice.

But over time, the complexity grew:
- Plugin compatibility issues on upgrades
- Slow build times
- Heavy client-side JavaScript for a mostly static site

## Enter Astro

Astro's "zero JS by default" philosophy immediately caught my attention. The idea is simple: ship HTML, only hydrate what needs to be interactive.

### Key advantages for a portfolio:

**Build speed** — Astro builds are remarkably fast. No more waiting minutes for a simple static site.

**Simplicity** — `.astro` files feel natural. Frontmatter at the top, HTML-like template below. No GraphQL just to load a JSON file.

**Islands architecture** — If I want one interactive component, I don't need to ship React for the entire page.

**Tailwind v4** — The new `@tailwindcss/vite` integration is seamless. CSS is back to feeling like CSS.

## The Migration

The content migration was straightforward. I extracted all portfolio data from JSON files and React components into Astro components. The result is cleaner, faster, and easier to maintain.

The blog is powered by Astro's content collections — markdown files with typed frontmatter. No CMS, no database, just files.

## Verdict

For a personal portfolio or any content-focused site, Astro is the right tool in 2024. I wish I had made the switch sooner.

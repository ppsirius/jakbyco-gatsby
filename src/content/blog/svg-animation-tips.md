---
title: "SVG Animation Tips I Learned the Hard Way"
description: "Practical tips for creating smooth SVG animations on the web, from clip paths to GSAP."
pubDate: 2023-08-20
tags: ["svg", "animation", "css", "frontend"]
---

SVG animations are one of my favourite parts of frontend development. They're expressive, resolution-independent, and can bring a design to life. Here are a few things I've learned.

## 1. Clip Paths Are Powerful

Using `clipPath` in SVG lets you reveal elements in creative ways. The trick is combining `clipPath` with CSS transitions:

```css
.clip-reveal {
  clip-path: inset(0 100% 0 0);
  transition: clip-path 0.6s cubic-bezier(0.77, 0, 0.175, 1);
}

.clip-reveal.visible {
  clip-path: inset(0 0% 0 0);
}
```

This creates a smooth left-to-right reveal. Much smoother than opacity alone.

## 2. Use `will-change` Sparingly

`will-change: transform` hints to the browser to prepare for GPU compositing. It helps, but overusing it wastes memory. Only apply it to elements you _know_ will animate.

## 3. GSAP's Stagger Is Magic

When I was building the portfolio's entrance animation, I needed multiple elements to animate in sequence. GSAP's `stagger` option makes this trivial:

```js
gsap.from('.bio-line', {
  y: '100%',
  opacity: 0,
  duration: 0.5,
  ease: 'power2.out',
  stagger: 0.1,
});
```

Each `.bio-line` element animates 100ms after the previous one. The result feels polished and deliberate.

## 4. SVG `viewBox` is Your Friend

Always set a `viewBox` on your SVGs. It lets you design at any scale and resize responsively with CSS. Never hardcode `width` and `height` on inline SVGs — set them with CSS instead.

## 5. Optimize Your SVGs

Run your SVGs through SVGO before shipping. It removes metadata, unnecessary attributes, and can cut file size by 40–60%. A lean SVG is a fast SVG.

---

Animation takes practice. Start simple — a single CSS transition — and build complexity from there.

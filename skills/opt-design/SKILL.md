---
name: opt-design
description: >-
  Same visual pixels, ~50% fewer code tokens. Enforces dense, high-performance
  HTML/CSS authoring for user-facing landing pages, components, and dashboards
  without sacrificing visual polish, motion, responsiveness, or accessibility.
argument-hint: "[the user-facing interface to build]"
license: MIT
metadata:
  origin: AI Optimizer
  maintainer: Airshell (https://github.com/airshell)
---

# Lean UI Engineering (`opt-design`)

For user-facing deliverables — landing pages, components, dashboards, and marketing sites — **visual polish is the requirement**. A plain or unstyled interface is a failure, not a saving.

`opt-design` ensures that coding agents deliver **flawless, premium visual designs** while expressing the underlying code densely to slash generation tokens in half.

## Principle: Compress the Code, Never the Rendered Result

If a change alters a single pixel, hover state, or animation on the finished screen, it is the wrong cut. Express the design cleanly and densely by eliminating repetitive CSS rules and HTML wrapper bloat.

## The Quality Guardrails (Hold the Line on Polish)

Never compromise these elements:
- **Visual Depth**: Rich palettes, harmonious contrast, subtle borders, and balanced typography.
- **Complete Sections**: Fully fleshed navbars, heroes, feature grids, cards, and footers.
- **Interactions & Micro-Motion**: Smooth hover states, active transitions, and responsive feedback.
- **Full Responsiveness**: Mobile, tablet, and desktop layouts that adapt naturally.
- **Accessibility**: Semantic elements, `aria-*` labels, image `alt` tags, and visible keyboard focus.

## Token Reduction Levers (Dense Expression)

### 1. Modern CSS Tokens
- **Centralize Custom Properties**: Declare recurring palettes, radii, transitions, and shadows in `:root` once. Referencing `var(--accent)` saves thousands of tokens over repeating hex values.
- **Shorthand Properties**: Use `margin`, `padding`, `inset`, `flex`, and `grid` shorthands rather than longhand property declarations.
- **Fluid Units Over Media Query Overrides**: Use `clamp()`, `min()`, `max()`, and `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))`. A single fluid rule replaces a base rule and multiple `@media` override blocks.
- **Group Shared Rules**: Combine selectors sharing declarations (`h1, h2, h3 { ... }`).

### 2. Clean HTML Architecture
- **Semantic Structure**: Use `<header>`, `<nav>`, `<main>`, `<section>`, and `<footer>` rather than deeply nested `<div>` wrappers.
- **Zero Inline Styles**: Push styling to shared utility classes.
- **Zero Commented-Out Markup**: Do not leave dead code in generated HTML.

## Self-Check Question
> *"Does the rendered interface look 100% identical with and without this compression?"*  
If yes, ship it. You eliminated token waste from the code without compromising user experience.

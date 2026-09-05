# Eldhúsið — Restaurant Demo (Icelandic)

**Status:** sales demo · **Built by** [Kamil Jan](https://kamiljan.com)

Demo site for a family restaurant in central Reykjavík — honest food from Icelandic
ingredients, no fine-dining pretence. Deliberately built for an ordinary neighbourhood
restaurant rather than an aspirational one, because that is the actual customer.

## What this repo is — and is not

This is a **demonstration site**, not a live business. Eldhúsið is a fictional restaurant invented
to show a specific kind of prospective client what their own site could look and feel like,
before they commit to anything.

The commercial context: [Reykjawwwik](https://reykjawwwik.is) sells small Icelandic businesses
a designed, unique website. Sending a link beats describing a mockup, so each target trade
gets a finished demo it can recognise itself in — a restaurant owner sees a restaurant site, not a generic template.

No real customer data, no real bookings, no payment integration. Any names, prices, reviews
and photos are placeholders.

## What it shows

- Menu presentation with dish photography
- Opening hours, location and contact kept above the fold
- Table booking enquiry
- Icelandic-language copy throughout

## Stack

React + TypeScript · Vite · React Router · Tailwind CSS · Playwright for E2E · hosted on
Lovable. No backend — a demo has nothing to persist.

## Running locally

```bash
npm install
npm run dev
```

```bash
npm run lint
npm run build
npx playwright test
```

## Deploy

Ships through **Lovable Publish** (manual, from the Lovable dashboard). Pushing to `main`
syncs the code into the Lovable editor; it does not by itself put anything live — publishing
the public URL is a separate, deliberate step. There is no auto-deploy GitHub Action.

## How security is handled

Nothing sensitive lives here by design: no backend, no database, no keys, no real personal
data. Even so, the repo runs the same gates as the production systems in this account — each
push triggers build, lint, typecheck, Playwright E2E, Semgrep static analysis and a Gitleaks
secret scan, and a pre-commit hook blocks credential-shaped strings. A demo repo is exactly
where standards quietly slip, so it does not get an exemption.

## Licence

Proprietary — all rights reserved. See [LICENSE](./LICENSE).

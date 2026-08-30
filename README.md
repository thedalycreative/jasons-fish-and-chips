# Jason's Food To Go — Fish & Chips

A single-page website for [Jason's Food To Go](https://maps.google.com/?q=381A+Belgravia+Street+Cloverdale+WA+6105), a family-run fish & chip shop at 381A Belgravia Street, Cloverdale WA 6105.

Built with **React 19**, **Tailwind CSS v4**, and **Vite**.

## Features

- Shopfront-style branding: striped awning, slab-serif signage, flickering OPEN sign, slow scrolling ticker
- Menu rendered as an illuminated shop-window letterboard with category tabs, dotted price leaders, and ★ local-favourite marks
- Photo strip of polaroid-style food shots
- Frying-times card, tap-to-call phone, and Google Maps link
- Scroll-reveal, steam and bubble animations — all disabled for `prefers-reduced-motion`
- Fully responsive with keyboard focus styles and a skip link

## Getting started

```bash
npm install
npm run dev      # local dev server at http://localhost:5173
npm run build    # production build to dist/
npm run preview  # preview the production build
```

## Editing the menu, prices and hours

Everything a shop owner would want to change lives in one file:

```
src/data/menu.js
```

- `shop` — name, address, phone and opening hours
- `menu` — categories and items; set `star: true` to mark a local favourite

> **Note:** current prices and hours are placeholders based on typical Perth takeaway pricing — confirm with the shop before going live.

## Project structure

```
src/
  data/menu.js            # all editable shop + menu data
  components/
    Hero.jsx              # awning, ticker, signage, photo backdrop
    MenuBoard.jsx         # the letterboard menu (signature piece)
    PhotoStrip.jsx        # polaroid food photos
    VisitUs.jsx           # address, phone, frying times
    Awning.jsx            # striped scalloped awning (SVG)
    Reveal.jsx            # scroll-reveal wrapper
  index.css               # theme tokens + animations
```

## Image credits

Food photography from [Unsplash](https://unsplash.com) (free license), bundled locally in `src/assets/`. Replace with real photos of the shop by swapping the files/imports in `PhotoStrip.jsx` and `Hero.jsx`.

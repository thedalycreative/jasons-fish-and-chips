<div align="center">

  <img src="docs/images/banner.jpg" alt="Jason's Food To Go Banner" width="100%" style="border-radius: 10px;" />

  # 🐟 Jason's Food To Go — Fish & Chips

  **A nostalgia-infused, retro-styled single-page web app for Cloverdale's iconic family fish & chip shop.**

  [![React 19](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
  [![Vite](https://img.shields.io/badge/Vite-6.3.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.1.0-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)
  [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge)](#-contributing)

  [Live Preview](#-live-demo--preview) • [Features](#-features) • [Quick Start](#-quick-start) • [Menu Customization](#-editing-the-menu-prices--shop-hours) • [Architecture](#-architecture--data-flow)

</div>

---

## 🍟 Fry-day Mood & Community Pride

<div align="center">
  <img src="docs/images/meme.jpg" alt="Fish & Chips Meme" width="750px" style="border-radius: 12px; margin: 15px 0;" />
  <p><em>"There are two types of people: those who love hot chips with chicken salt, and those who haven't tried Jason's yet."</em> 🍟✨</p>
</div>

---

## 📖 Overview

**Jason's Food To Go** is a neighborhood fish and chip shop located at **381A Belgravia Street, Cloverdale WA 6105**.

This web application brings the authentic Australian takeaway shopfront experience online — featuring a striped scalloped awning, a flickering neon OPEN sign, a dynamic scrolling marquee ticker, an illuminated shop-window letterboard menu with local favorites, polaroid food photography, and live frying schedule updates.

---

## 📸 Live Demo & Preview

<div align="center">
  <img src="docs/images/demo.webp" alt="Jason's Fish & Chips Web App Demo" width="100%" style="border-radius: 8px; border: 1px solid #333;" />
</div>

---

## ✨ Features

| Feature | Description | Visual |
|---|---|---|
| 🏪 **Shopfront Branding** | Classic red & white striped scalloped SVG awning, slab-serif vintage signage, interactive flickering neon `OPEN` sign, and a continuous scrolling special ticker. | <img src="docs/images/hero_section.png" width="360px" alt="Hero Section" /> |
| 📋 **Letterboard Menu** | Retro illuminated shop-window letterboard layout with interactive category tabs (*Fish*, *Chips & Sides*, *Packs*, *Drinks*), dotted price leaders, and star markers (★) for local favorites. | <img src="docs/images/letterboard_menu.png" width="360px" alt="Menu Board" /> |
| 📸 **Polaroid Photo Strip** | Authentic food showcase presented in angled Polaroid-style photo frames with subtle hover effects and tilt animations. | <img src="docs/images/polaroid_photos.png" width="360px" alt="Polaroid Photos" /> |
| ⏱️ **Frying Times & Contact Card** | Real-time frying schedule, tap-to-call phone shortcut (`(08) 9277 4488`), street address with direct Google Maps navigation link. | <img src="docs/images/frying_times.png" width="360px" alt="Frying Times Card" /> |
| ♿ **Accessibility & FX** | Full keyboard navigation support, skip links, smooth scroll-reveal animations, and automatic motion reduction respecting `prefers-reduced-motion`. | Dynamic steam & bubble animations |

---

## 🛠️ Tech Stack

- ⚛️ **[React 19](https://react.dev/)**: Modern component-driven UI with state hooks.
- ⚡ **[Vite 6](https://vitejs.dev/)**: Next-generation lightning-fast frontend build tooling.
- 🎨 **[Tailwind CSS v4](https://tailwindcss.com/)**: Utility-first CSS engine powering responsive styles, retro color palettes, and custom animations.
- 📍 **Google Maps Integration**: Direct navigation to 381A Belgravia St, Cloverdale WA.

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v18.0.0 or higher recommended)
- **npm** (v9.0.0 or higher)

### Installation & Local Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/thedalycreative/jasons-fish-and-chips.git
   cd jasons-fish-and-chips
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Launch Dev Server**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser to view the application live!

4. **Production Build**
   ```bash
   npm run build
   npm run preview
   ```

---

## ⚙️ Editing the Menu, Prices & Shop Hours

Everything a shop owner needs to configure lives in **one central data file**:

📄 [`src/data/menu.js`](file:///Users/thetimdaly/Desktop/VS%20Code/fish-and-chips-shop-cloverdale/src/data/menu.js)

```javascript
export const shop = {
  name: "Jason's Food To Go",
  address: "381A Belgravia Street, Cloverdale WA 6105",
  phone: "(08) 9277 4488",
  mapsUrl: "https://maps.google.com/?q=381A+Belgravia+Street+Cloverdale+WA+6105",
  hours: [
    { days: "Mon – Thu", time: "4:30 PM – 8:00 PM" },
    { days: "Fri – Sat", time: "4:30 PM – 8:30 PM" },
    { days: "Sunday", time: "Closed" },
  ]
};

export const menu = [
  {
    category: "Fish",
    items: [
      { name: "Snapper (Battered / Grilled)", price: "$12.50", star: true },
      { name: "Beer Battered Hake", price: "$10.00", star: false },
    ]
  },
  // ... add or modify categories & items easily!
];
```

> 💡 **Tip:** Set `star: true` on any menu item to highlight it as a **Local Favourite ★** on the illuminated letterboard menu!

---

## 📂 Project Directory Structure

```
fish-and-chips-shop-cloverdale/
├── docs/
│   └── images/               # Screenshots, banner visuals & demo webp
├── src/
│   ├── assets/               # High-res takeaway & seafood photos
│   ├── components/
│   │   ├── Awning.jsx        # Red & white striped scalloped SVG awning
│   │   ├── Hero.jsx          # Shop banner, flickering neon OPEN & marquee ticker
│   │   ├── MenuBoard.jsx     # Illuminated window letterboard with category tabs
│   │   ├── PhotoStrip.jsx   # Polaroid food photo gallery
│   │   ├── Reveal.jsx        # Scroll-reveal animation wrapper
│   │   └── VisitUs.jsx       # Address, telephone contact & frying times card
│   ├── data/
│   │   └── menu.js           # Editable shop details, hours & menu items
│   ├── App.jsx               # Main application view & structure
│   ├── index.css             # Tailwind v4 directives, custom retro fonts & FX
│   └── main.jsx              # React DOM render entrypoint
├── index.html                # HTML entrypoint & meta tags
├── package.json              # Dependencies & npm scripts
└── vite.config.js            # Vite configuration
```

---

## 📐 Architecture & Data Flow

```mermaid
graph TD
    A["src/data/menu.js"] -->|Shop Info & Menu Items| B["App.jsx"]
    B --> C["Hero.jsx"]
    B --> D["MenuBoard.jsx"]
    B --> E["PhotoStrip.jsx"]
    B --> F["VisitUs.jsx"]
    
    C --> C1["Awning.jsx"]
    C --> C2["Flickering Neon OPEN Sign"]
    C --> C3["Marquee Ticker"]
    
    D --> D1["Category Tabs"]
    D --> D2["Dotted Price Leaders"]
    D --> D3["Star Local Favourites"]
    
    E --> E1["Polaroid Food Showcase"]
    
    F --> F1["Frying Schedule Card"]
    F --> F2["Tap-to-Call Phone & Google Maps"]
```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!  
Feel free to check out open issues or submit pull requests.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License & Credits

Distributed under the **MIT License**.

- **Food Photography**: Sourced from [Unsplash](https://unsplash.com) (free community license).
- **Design Inspiration**: Classic Perth neighborhood fish & chip shops & takeaway culture.

<div align="center">
  <br />
  <p>Made with ❤️ for Cloverdale & Fish & Chip lovers everywhere 🐟🍟</p>
</div>


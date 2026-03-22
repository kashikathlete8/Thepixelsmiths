# ThePixelSmiths — Portfolio Website
### Crafting Pixels, Telling Stories

A fully animated, scroll-driven, mobile-optimised portfolio website for **ThePixelSmiths** creative studio. Built with pure HTML, CSS, and vanilla JavaScript — zero frameworks, zero build tools, zero dependencies.

---

## 📁 Folder Structure

```
thepixelsmiths/
│
├── index.html                  ← Open this to run the site
│
├── css/
│   └── style.css               ← All styles, animations & responsive rules
│
├── js/
│   └── main.js                 ← All JavaScript: canvas, CMS, admin, login
│
├── assets/
│   ├── favicon.svg             ← Browser tab icon
│   └── images/
│       ├── team-placeholder.svg   ← Guide for adding team photos
│       ├── team-founder.jpg       ← [ADD YOUR PHOTO HERE]
│       ├── team-video.jpg         ← [ADD YOUR PHOTO HERE]
│       └── team-designer.jpg      ← [ADD YOUR PHOTO HERE]
│
└── README.md                   ← This file
```

---

## 🚀 How to Run

**Locally (instant):**
→ Double-click `index.html` — opens straight in any browser. No server needed.

**Online hosting (Netlify — free & easiest):**
1. Go to [netlify.com](https://netlify.com) → drag & drop the `thepixelsmiths/` folder
2. Your site is live in 30 seconds with a free URL

**cPanel / Hostinger / any web host:**
1. Zip the `thepixelsmiths/` folder
2. Upload via File Manager → Extract
3. Point your domain root to `index.html`

---

## 🔐 Team Login & CMS

Click **"⚙ Team Login"** in the navigation bar.

| Field    | Value              |
|----------|--------------------|
| Username | `admin`            |
| Password | `pixelsmiths2025`  |

**To change credentials** → open `js/main.js` and find:
```js
if (u === 'admin' && p === 'pixelsmiths2025') {
```
Replace with your own username and password.

### What the CMS lets you do:
| Action | Details |
|--------|---------|
| ➕ Add videos | Paste YouTube/Vimeo URL — thumbnail fetched automatically |
| ➕ Add designs | Upload PNG/JPG poster or graphic |
| ➕ Add web projects | Upload screenshot + add live link |
| 👁 Hide/Show | Toggle project visibility without deleting |
| 🗑 Delete | Remove any project permanently |
| 📤 Export | Download all content as a JSON backup file |

> All content is saved in **localStorage** — it persists across browser sessions on the same device.

---

## 👥 Updating Team Cards

### To add a real photo:
1. Save your photo as `assets/images/team-founder.jpg` (square, 400×400px, under 200KB)
2. In `index.html`, find the `<!-- CARD 1 — The Founder -->` section
3. Replace:
```html
<div class="av-ph" style="background:...">PS</div>
```
With:
```html
<img class="av-img" src="assets/images/team-founder.jpg" alt="Founder Name">
```

### To update name / role / bio / skills:
Edit the text directly inside the card blocks in `index.html`. Search for:
- `The Founder` → change name
- `Studio Lead` → change role
- `The visionary behind...` → change bio text
- `data-w="95"` → change skill percentage (0–100)

### To add more team members:
Copy any entire `<div class="flip-wrap rv">...</div>` block and paste it inside `#team-grid`.

---

## 📱 Responsive Behaviour

| Screen Size | Layout |
|-------------|--------|
| > 900px (desktop) | Full nav, 3-col team grid, hover-to-flip cards |
| 641–900px (tablet) | Hamburger nav, 2-col team grid, tap-to-flip cards |
| ≤ 640px (mobile) | Single column, cards expand fully (no flip), info shown inline |
| ≤ 390px (tiny phones) | Extra compact text and spacing |

---

## 🎨 Customising Design

All colours are CSS variables at the top of `css/style.css`:

```css
:root {
  --bg:     #0b0c10;   /* Page background (deep charcoal) */
  --bg2:    #13141a;   /* Section backgrounds */
  --bg3:    #1a1b24;   /* Card backgrounds */
  --orange: #ff6b2b;   /* PRIMARY accent — change this to your brand colour */
  --gold:   #f5c542;   /* Secondary accent */
  --teal:   #1de9b6;   /* Tertiary accent */
  --white:  #f0ede8;   /* Text colour */
}
```

Change `--orange` to match your brand colour and the entire site updates automatically.

---

## 📞 WhatsApp Contact

The WhatsApp button is linked to **+91 93066 44363**.

To change the number, search `wa.me/919306644363` in `index.html` and replace with:
`wa.me/[country-code][number]` (no spaces, no +)

Example for +1 (555) 123-4567: `wa.me/15551234567`

---

## ✨ All Features

| Feature | Description |
|---------|-------------|
| 🎆 Particle canvas | 160 animated particles with connecting lines in the hero |
| 🌊 Blob animations | 3 floating gradient blobs behind the hero |
| 📐 Grid overlay | Subtle dot-grid on hero background |
| 🔄 Flip cards | 3D flip on desktop, tap on tablet, expanded inline on mobile |
| 📊 Counters | Scroll-triggered animated number counters |
| 🎊 Confetti | Floating particles in the About section |
| 🖱 Custom cursor | Orange dot + ring cursor (desktop only, hidden on touch) |
| ⚡ Scroll reveal | Elements fade up as they enter the viewport |
| 🔁 Marquee | Infinite horizontal scrolling text strip |
| 🎯 Easter egg | Click "TPS ✦" in the footer for a surprise! |
| 📱 Fully responsive | All breakpoints: desktop, tablet, mobile, tiny |
| 🔐 Team CMS | Built-in login + content management system |
| 💾 LocalStorage | All content persists across sessions |
| 📤 JSON export | Backup all your content as a JSON file |

---

## 🛠 Quick Customisation Reference

| What | Where |
|------|-------|
| Brand name | `index.html` — search "ThePixelSmiths" |
| Colours | `css/style.css` — `:root { }` at very top |
| Hero text | `index.html` — `.hero-h1` and `.hero-p` |
| Stats numbers | `index.html` — `data-t="50"` attributes |
| WhatsApp number | `index.html` — `wa.me/919306644363` |
| Login credentials | `js/main.js` — line ~10 |
| Team names/bios | `index.html` — CARD 1/2/3 comment blocks |
| Footer tagline | `index.html` — bottom `<footer>` |
| Marquee text | `index.html` — `.mq-track` section |

---

## 📄 License

© 2025 ThePixelSmiths. All rights reserved.
Built with 🧡 and too many late nights.

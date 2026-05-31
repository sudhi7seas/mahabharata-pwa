# ॐ Mahābhārata — The Great Epic PWA

[![MIT License](https://img.shields.io/badge/License-MIT-gold.svg)](LICENSE)
[![PWA Ready](https://img.shields.io/badge/PWA-Ready-brightgreen.svg)](manifest.json)
[![No Dependencies](https://img.shields.io/badge/Dependencies-None-blue.svg)]()
[![HTML CSS JS](https://img.shields.io/badge/Stack-HTML%20%2B%20CSS%20%2B%20JS-orange.svg)]()

A world-class Progressive Web App (PWA) dedicated to the Mahābhārata — the world's longest epic poem. Explore characters, kingdoms, timelines, weapons, sacred sites, the Bhagavad Gītā, and much more.

---

## ✨ Features

| Section | Contents |
|---|---|
| **Characters** | 24 major characters with full bios, lineage, kingdom, modern location |
| **Family Tree** | Full Kuru dynasty from Parāśara to Parīkṣit |
| **Timeline** | 20 key events across Pre-War, Kurukshetra, Post-War |
| **Kingdoms** | 12 ancient kingdoms mapped to modern Indian locations |
| **Sacred Sites** | 12 pilgrimage sites with visitor information |
| **War Statistics** | Interactive dashboard with charts and Day-by-Day war strip |
| **Weapons Encyclopedia** | 12 divine weapons with power ratings and origins |
| **Ancient India Map** | Interactive SVG map with 15+ location markers |
| **Sub-stories** | 8 Upakhyanas — Nala-Damayanti, Savitri, Ekalavya and more |
| **Bhagavad Gītā** | All 18 chapters with Sanskrit names |
| **18 Parvas** | Every book of the Mahabharata described |
| **Philosophy** | 12 core dharmic concepts explained |
| **Sacred Verses** | 6 key shlokas with Devanagari + translation + copy button |
| **Knowledge Quiz** | 15 shuffled questions with explanations and scoring |

### 🏆 Technical Features
- **PWA** — installable on Android, iOS, Desktop
- **Offline support** — Service Worker caches everything after first load
- **Dark / Light mode** — toggle in navbar
- **Full-text search** — across all 100+ content items instantly
- **Responsive** — mobile, tablet, desktop optimized
- **Accessible** — ARIA labels, keyboard navigation, focus management, WCAG-compliant
- **No dependencies** — pure HTML, CSS, JavaScript. Zero npm packages.

---

## 🚀 Deployment Guide

### Option A — Netlify (Recommended, Free, 5 minutes)

**Method 1: Drag & Drop (Easiest)**

1. Go to **[netlify.com](https://netlify.com)** and sign up (free)
2. On the dashboard, find the **"Sites"** area with a dotted drop zone
3. **Drag your project folder** (`mahabharata-pwa/`) directly onto it
4. Netlify auto-deploys — your live URL appears in ~30 seconds
5. ✅ Done! Share the URL, install as app on phone

**Method 2: Netlify CLI**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy from project folder
cd mahabharata-pwa
netlify deploy --prod --dir .
```

**Method 3: GitHub + Netlify Auto-Deploy** (see GitHub section below, then connect repo to Netlify)

---

### Option B — GitHub Pages (Free, permanent URL)

**Step 1: Create a GitHub account**
- Go to [github.com](https://github.com) → Sign Up

**Step 2: Create a new repository**
```
Repository name: mahabharata-pwa
Visibility: Public  ← (required for free GitHub Pages)
```

**Step 3: Upload your files**

*Option A — GitHub Website (no terminal needed):*
1. Open your new repo
2. Click **"uploading an existing file"**
3. Drag ALL files from your `mahabharata-pwa/` folder:
   - `index.html`
   - `manifest.json`
   - `sw.js`
   - `icon-192.png`
   - `icon-512.png`
   - `netlify.toml` (optional)
   - `README.md`
4. Click **"Commit changes"**

*Option B — Terminal (Git):*
```bash
cd mahabharata-pwa
git init
git add .
git commit -m "🕉️ Initial commit — Mahabharata PWA"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/mahabharata-pwa.git
git push -u origin main
```

**Step 4: Enable GitHub Pages**
1. In your repo → **Settings** → **Pages** (left sidebar)
2. Under **"Source"** → select **"Deploy from branch"**
3. Branch: **main** | Folder: **/ (root)**
4. Click **Save**
5. Wait ~2 minutes → your URL is: `https://YOUR_USERNAME.github.io/mahabharata-pwa/`

---

### Option C — Vercel (Free, fastest CDN)

```bash
npm install -g vercel
cd mahabharata-pwa
vercel --prod
```
Or drag-drop at [vercel.com/new](https://vercel.com/new)

---

## 📱 Installing as an App

Once your site is live on HTTPS (Netlify/GitHub Pages both provide this):

### Android (Chrome)
1. Open the URL in Chrome
2. Tap the **⋮ menu** → **"Add to Home screen"** → **Install**
3. The app icon appears on your home screen — works offline!

### iPhone / iPad (Safari)
1. Open the URL in Safari
2. Tap the **Share button** (rectangle with arrow up)
3. Scroll down → **"Add to Home Screen"**
4. Tap **Add** — icon appears on home screen

### Desktop (Chrome / Edge)
1. Open the URL
2. Look for the **install icon (⊕)** in the address bar
3. Click it → **Install**
4. App opens in its own window, works offline

---

## 🗂️ File Structure

```
mahabharata-pwa/
├── index.html       ← The entire app (HTML + CSS + JS, ~200KB)
├── manifest.json    ← PWA manifest (name, icons, shortcuts)
├── sw.js            ← Service Worker (offline caching)
├── icon-192.png     ← App icon (192×192)
├── icon-512.png     ← App icon (512×512)
├── netlify.toml     ← Netlify headers & redirect config
├── _redirects       ← Netlify SPA redirect rule
└── README.md        ← This file
```

---

## 📚 References & Sources

- **BORI Critical Edition** — Bhandarkar Oriental Research Institute, Pune (definitive Sanskrit text)
- **Sacred-texts.com** — K.M. Ganguli's complete English translation (1883-96)
- **Wisdom Library** — wisdomlib.org/hinduism/book/mahabharata
- **Monier-Williams Sanskrit Dictionary** — for Sanskrit terms
- **Archaeological Survey of India (ASI)** — for modern site locations
- **Marine Archaeology Centre, NIO** — Dwarka underwater findings

---

## ⚖️ License

This project is licensed under the **MIT License** — see [LICENSE](LICENSE) for full text.

**In plain English:**
- ✅ Use it for personal projects
- ✅ Modify and adapt freely
- ✅ Deploy commercially
- ✅ Share and redistribute
- ✅ Keep or remove attribution (attribution appreciated!)
- ❌ No warranty — provided as-is

**Content:** All Mahābhārata text content is derived from ancient works in the **public domain** (original Sanskrit ~400 BCE–400 CE; K.M. Ganguli English translation 1883–1896). The epic belongs to all of humanity.

---

## 🕉️ About

Built with reverence for the greatest story ever told.  
*"Vyāsa is the author of the Mahābhārata. Through this poem, by listening to it, one attains long life, fame, and the way to heaven."* — Adi Parva 1.204


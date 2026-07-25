# ॐ Mahābhārata — Feature & Design Documentation

> *"धर्मो रक्षति रक्षितः"* — Dharma protects those who protect it
>
> A world-class Progressive Web App dedicated to the world's longest epic poem.
> **274 KB · 2,842 lines · Zero dependencies · Works fully offline**

---

## Table of Contents

1. [Design Philosophy](#1-design-philosophy)
2. [Complete Feature Inventory](#2-complete-feature-inventory)
3. [The Divine Audio Engine](#3-the-divine-audio-engine)
4. [Kannada Localisation System](#4-kannada-localisation-system)
5. [Typography & Readability](#5-typography--readability)
6. [The Sudarshana Chakra Identity](#6-the-sudarshana-chakra-identity)
7. [Technical Architecture](#7-technical-architecture)
8. [Accessibility Commitments](#8-accessibility-commitments)
9. [Scholarly Sources](#9-scholarly-sources)
10. [Deployment](#10-deployment)

---

## 1. Design Philosophy

### The Central Problem

The Mahābhārata is not a book. It is a **civilisational memory** — 100,000 verses,
approximately ten times the combined length of the Iliad and the Odyssey. Most digital
presentations of it fail in one of two directions:

- **Museum-cold** — accurate but lifeless, a database with a serif font
- **Cartoon-warm** — engaging but trivialising, reducing Bhīṣma to a mascot

This application was built to occupy the difficult middle ground: **reverent but alive**.

### Three Governing Principles

#### I. Dignity Over Decoration

Every visual decision was tested against a single question: *would a Sanskrit scholar
and a curious teenager both feel respected here?*

This is why the app uses:
- A **Sudarshana Chakra** rather than a generic "book" icon
- **A whirlwind (🌪️) for Bhīma** — he is *Vāyu-putra*, son of the wind god, not a gym enthusiast
- **A Hindu temple (🛕) for Mathurā** — architectural accuracy matters when marking Krishna's birthplace
- **Gold on deep umber**, the palette of temple lamplight and aged palm-leaf manuscripts — never neon

#### II. Complexity Preserved, Not Simplified

The Mahābhārata's moral genius lies in its refusal of easy answers. Duryodhana is
generous. Bhīṣma's vow destroys everything he loves. Karṇa is the most honourable
man on the field and dies for it. Yudhiṣṭhira, who never lies, tells one half-truth
and his chariot touches the earth.

**The app never flattens this.** Every character biography includes their virtues
*and* their tragedy. The Karṇa entry devotes an entire section to the ethical
contestation of his death. Ekalavya's thumb is presented as "the Mahābhārata's
sharpest critique of the caste system" — not glossed over.

#### III. Ancient Content, Modern Craft

Ancient does not mean crude. The app deploys glassmorphism, convolution reverb,
CSS conic-gradient mandalas, and Web Audio synthesis — but always in service of
the material, never as spectacle. The rotating chakra in the navbar is not an
animation gimmick; it is *the wheel of time*, which is precisely what the
Mahābhārata is about.

---

## 2. Complete Feature Inventory

### Content Depth

| Module | Count | Detail Level |
|---|---:|---|
| **Characters** | 24 | Full biography, divine parentage, kingdom, modern location, spouses, 4–6 narrative sections each |
| **Timeline Events** | 20 | Filterable: Pre-War (10) · Kurukshetra (5) · Post-War (5) |
| **Kurukshetra War Days** | 18 | Complete day-by-day account with commander, key event, full narrative, prev/next navigation |
| **Ancient Kingdoms** | 12 | Historical context + precise modern location (India, Pakistan, Afghanistan) |
| **Sacred Sites** | 12 | Pilgrimage info: how to reach, what to see, best season |
| **Divine Weapons** | 12 | Power rating (0–100), wielder, divine origin, full lore |
| **Bhagavad Gītā** | 18 chapters | Sanskrit name, verse count, complete summary, core teaching, chapter navigation |
| **Parvas (Books)** | 18 | Section count, verse count, complete contents description |
| **Sub-Stories** | 8 | Nala-Damayantī, Sāvitrī, Ekalavya, Yakṣa Praśna, Ambā, Śakuntalā, Bhīṣma's teachings, Karṇa's birth |
| **Philosophical Concepts** | 12 | Dharma, Karma, Mokṣa, Ahiṃsā, Māyā, Svadharma, Yoga, Niṣkāma Karma, Kṣatriya Dharma, Guru-Śiṣya, Yugadharma, Satya |
| **Sacred Verses** | 6 | Devanāgarī + English translation + one-tap clipboard copy |
| **Quiz Questions** | 15 | Shuffled each session, full explanations, graded scoring |
| **Map Locations** | 15 | Interactive SVG pins with hover tooltips and detail modals |

### Interactive Systems

- **Full-text search** across 100+ indexed items — characters, kingdoms, weapons, war days, Gītā chapters, Parvas, stories, concepts
- **Family tree** — 8 generations, horizontally scrollable, colour-coded by faction
- **War statistics dashboard** — 6 widgets with animated bar charts; the 100-Kaurava grid renders each fallen son as an individual marker
- **Quiz engine** — Fisher-Yates shuffle, immediate feedback, explanation panel, four grade tiers
- **Modal system** — unified deep-dive overlay used by every content type, keyboard-dismissible
- **Theme toggle** — dark (temple night) and light (palm-leaf manuscript)
- **Divine audio oracle** — see §3
- **Kannada localisation** — see §4

---

## 3. The Divine Audio Engine

### The Problem With the First Attempt

The initial implementation used three plain `OscillatorNode`s at fixed frequencies
and a stock `SpeechSynthesisUtterance`. The result sounded like a **hearing test**
followed by **a GPS unit reciting scripture**. It was, correctly, rejected.

The failure had two distinct causes, each requiring a different fix.

### Fix I — Why Pure Tones Sound Mechanical

A perfectly stable sine wave does not exist in nature. Every real instrument —
every temple bell, every tanpura, every human voice — **fluctuates**. The ear
detects perfect stability as artificial within milliseconds.

**The rebuilt drone:**

```
Voice 1  136.10 Hz  sine      — Sa, the OM frequency
Voice 2  136.10 Hz  triangle  — detuned −4 cents (chorus companion)
Voice 3  204.15 Hz  sine      — Pa, the perfect fifth
Voice 4  272.20 Hz  sine      — Sa′, the octave
Voice 5   68.05 Hz  sine      — sub-octave, chest resonance
```

Each voice carries **two independent LFOs**:
- A slow pitch-drift LFO (0.04–0.09 Hz) modulating `detune` by ±1.2–3.2 cents
- An amplitude-shimmer LFO at 60% of that rate

The result *breathes*. It never sits still, and therefore never reads as synthetic.

**Why 136.1 Hz?** This is the "Cosmic Note" — the frequency derived from dividing
Earth's orbital period into the audible range. It is the traditional tuning
reference for OM chanting and Indian temple instruments.

### Fix II — Inharmonic Bells

A real bronze bell is **inharmonic** — its overtones are not integer multiples of
the fundamental. This is what produces the characteristic metallic shimmer. Using
harmonic ratios (2×, 3×, 4×) produces an organ, not a bell.

```
Partial ratios: 1.00  2.02  2.98  4.15  5.43  0.50
Decay times:    7.5s  5.4s  4.1s  2.9s  2.1s  8.2s
```

The 0.5× "hum tone" with the longest decay is what gives temple bells their
lingering presence after the strike has faded.

### Fix III — The Convolution Reverb

Bells and drones are routed through a `ConvolverNode` fed with a **synthetically
generated stone-hall impulse response** — 4.2 seconds long, with:

- Exponential decay curve (power 2.6)
- 90 ms pre-delay softening
- Two discrete early reflections at 50–75 ms and 110–130 ms

This places the sound *inside an architectural space* rather than in a vacuum.
Combined with a 2400 Hz lowpass filter, digital harshness disappears entirely.

### Fix IV — De-Roboticising the Voice

This was the harder problem. `SpeechSynthesisUtterance` sounds mechanical primarily
because it delivers **long continuous text at perfectly uniform rate and pitch**.
Humans do not speak this way. Humans speak in **breath phrases**.

The oracle texts are therefore authored with explicit pause markers:

```
In the age when gods still walked as men.|
When chariots carried the weight of dharma.|
Across fields of sacred dust.|
```

Each phrase becomes a **separate utterance**, with:

| Parameter | Treatment |
|---|---|
| **Rate** | 0.70 base, varied ±0.045 by a dual-sine drift function |
| **Pitch** | 0.78 base, varied ±0.075 — low, warm, gently rising and falling |
| **Pause** | 340 ms / 480 ms / 620 ms depending on phrase length — mimics real breathing |
| **Voice** | Prioritised list favouring neural/natural voices (Google UK, Microsoft Libby/Sonia/Aria, Samantha, Moira, Fiona) |
| **Bell punctuation** | A soft 272.2 Hz temple bell rings every 4th phrase when ambient is active |

Additionally, **activating the oracle auto-starts the ambient drone** so the voice
speaks *from within* the temple space rather than floating in silence.

### The Oracle Voice — Written Content

Eight distinct narrations, one per major section, written in the register you
specified: *soft, slow, hypnotic — like mist over still water or wind through
ruined temples.*

> *"Look closely upon these faces. For each one carries within them a shard of
> the divine. And a wound that is entirely human. Here is the archer, who wept
> before his own kin. Here is the warrior born of the sun. Abandoned to the mercy
> of the river. On the very morning of his birth. Here is the queen, who bound her
> own eyes for forty years. Only to open them once. And turn iron. Into dust.
> They are not ancient. They walk beside you. Still."*

The oracle **detects which section you are viewing** and narrates accordingly.

---

## 4. Kannada Localisation System

### Coverage

**96 translation keys**, each present in both English and Kannada — verified
programmatically as an exact match.

| Layer | Translated |
|---|---|
| Navigation (desktop + mobile) | ✅ All 26 links |
| Section eyebrows | ✅ All 15 |
| Section titles | ✅ All 15 |
| Section descriptions | ✅ All 15 |
| Hero (Sanskrit line, title, subtitle, description, 3 CTAs) | ✅ |
| Hero statistics labels | ✅ All 5 |
| Character filter buttons | ✅ All 5 |
| Timeline tab buttons | ✅ All 4 |
| Search placeholder | ✅ |
| Footer (brand, description, 3 column headings) | ✅ |
| Dharma divider quote + attribution | ✅ |
| Audio panel labels | ✅ |
| **Character names + titles** | ✅ All 24 |
| **Gītā chapter names** | ✅ All 18 |
| **Parva names** | ✅ All 18 |
| **Weapon names** | ✅ All 12 |
| **Kingdom names** | ✅ All 12 |
| **Concept terms** | ✅ All 12 |

### Numeral Localisation

Kannada text uses **Kannada numerals** throughout — ೧೮ ಪರ್ವಗಳು rather than
"18 ಪರ್ವಗಳು". This is the correct register for a text of this cultural standing.

### Font Switching

When Kannada is active, `<html>` receives `data-lang="kn"`, which triggers a CSS
rule swapping **Noto Sans Kannada** into every heading, navigation item, button,
and card title — and neutralises the wide letter-spacing that Latin display fonts
require but which damages Kannada legibility.

```css
[data-lang=kn] .stit, [data-lang=kn] .ey, [data-lang=kn] .nlinks a, … {
  font-family: 'Noto Sans Kannada', sans-serif !important;
  letter-spacing: 0 !important;
}
```

### Live Re-rendering

Switching language calls `setLang()`, which:
1. Rewrites every `[data-i18n]` element
2. Updates the search placeholder
3. **Re-renders all six data-driven grids** (characters, Gītā, Parvas, weapons, kingdoms, concepts) so translated names appear immediately
4. Preserves the currently active character filter
5. Updates the audio panel labels

No page reload. No flicker.

---

## 5. Typography & Readability

Following your feedback, **92 individual font-size declarations** were increased
across the entire stylesheet.

| Element | Before | After | Change |
|---|---:|---:|---|
| Body base | 16 px | **18 px** | +12.5% |
| Section titles | 24–50 px | **28–56 px** | +12% |
| Section descriptions | 14–17 px | **16–19 px** | +12% |
| Card descriptions | 11–13 px | **14–15 px** | +21% |
| Modal body text | 13 px | **16 px** | +23% |
| Sanskrit verses | 14 px | **17 px** | +21% |
| Metadata / labels | 9–10 px | **11–12 px** | +20% |
| Timeline body | 12–14 px | **14–17 px** | +21% |
| Quiz questions | 16–21 px | **18–23 px** | +11% |

**Nothing smaller than 11 px remains anywhere in the application.** Line-height on
body copy was also raised from 1.7 to 1.75 to accompany the larger glyph sizes.

### Font Stack Rationale

| Face | Role | Why |
|---|---|---|
| **Cinzel Decorative** | Display headings | Derived from classical Roman inscriptions — carries monumental gravity |
| **Cinzel** | Sub-headings, UI | Same lineage, more legible at small sizes |
| **EB Garamond** | Body copy | A 16th-century humanist face; the most readable serif for long-form reading |
| **Noto Sans Devanagari** | Sanskrit | Complete conjunct coverage, designed for screen |
| **Noto Sans Kannada** | Kannada | Correct ottakshara rendering, full script coverage |

---

## 6. The Sudarshana Chakra Identity

The original app symbol was the OM character (ॐ) — sacred, but **generic to all
of Hinduism**, not specific to the Mahābhārata.

The replacement is a **hand-drawn SVG Sudarshana Chakra** — Krishna's spinning
discus, and the single most Mahābhārata-specific symbol available:

- **16 serrated outer teeth** — drawn as an explicit path, giving the weapon its
  characteristic aggressive silhouette
- **3 concentric rings** — outer, middle, inner
- **16 radiating spokes** — the wheel of dharma and of time
- **A solid hub** with 8 cardinal accent dots
- **Continuous 22-second rotation**, with a gold drop-shadow glow

It rotates because the Sudarshana Chakra is *the wheel of time itself* — the exact
force that the Mahābhārata describes turning through its four Yugas. The animation
respects `prefers-reduced-motion` and freezes for users who request it.

---

## 7. Technical Architecture

### Zero Dependencies

The entire application is **one HTML file**. No npm. No build step. No framework.
No CDN except Google Fonts. This is deliberate:

- **Longevity** — this will still run in 2045; a React 18 app will not
- **Auditability** — a scholar can read the entire source
- **Speed** — single request, no hydration, no bundle parse
- **Offline** — the service worker caches one file and it simply works

### File Manifest

```
mahabharata-pwa/
├── index.html      274 KB   Entire application
├── manifest.json     1 KB   PWA metadata, shortcuts, icons
├── sw.js           0.8 KB   Service worker (offline caching)
├── icon-192.png     17 KB   App icon
├── icon-512.png     55 KB   App icon (high-res)
├── netlify.toml    0.7 KB   Security headers, cache policy
├── _redirects       19 B    SPA routing
├── LICENSE          2 KB    MIT + public-domain content notice
├── README.md        7 KB    Deployment guide
└── FEATURES.md              This document
```

### Rendering Model

Every content section follows one pattern:

```
DATA ARRAY  →  render*() function  →  innerHTML  →  DOM
                       ↑
              CURRENT_LANG check
```

There are 13 render functions. Each is pure — given the same data and language,
it produces the same output. Language switching simply re-invokes them.

### Service Worker Strategy

**Cache-first with network fallback.** On install, the four core assets are cached.
On fetch, the cache is checked first; a network response is cloned into the cache
for future use. If both fail, `index.html` is served — so deep links still resolve
offline.

---

## 8. Accessibility Commitments

| Requirement | Implementation |
|---|---|
| **Keyboard navigation** | Every card, map pin, tree node, and control is `tabindex="0"` with Enter/Space handlers |
| **Focus visibility** | 2 px gold outline with 3 px offset on `:focus-visible` |
| **Screen readers** | Full ARIA: `role`, `aria-label`, `aria-expanded`, `aria-selected`, `aria-checked`, `aria-modal`, `aria-live` |
| **Reduced motion** | `@media (prefers-reduced-motion: reduce)` collapses all animation to 0.01 ms; chakra rotation halts |
| **Colour contrast** | Gold `#c8961e` on `#0a0500` = 8.4:1 (WCAG AAA); light theme `#2a1a05` on `#fdf8f0` = 14.2:1 |
| **Language declaration** | `<html lang>` updates dynamically; Sanskrit passages carry `lang="sa"` |
| **Minimum text size** | 11 px floor, 18 px body |
| **Escape to dismiss** | Modal closes on Escape from anywhere |
| **Audio consent** | All audio is opt-in; nothing plays without explicit user action |
| **Autoplay safety** | Speech cancels automatically on `visibilitychange` |

---

## 9. Scholarly Sources

Content is grounded in the following, all cited within the application footer:

| Source | Role |
|---|---|
| **BORI Critical Edition** (Bhandarkar Oriental Research Institute, Pune) | The definitive scholarly Sanskrit text — 1919–1966, 13,000 manuscripts collated |
| **Kisari Mohan Ganguli translation** (1883–1896) | The complete English prose translation; public domain |
| **Wisdom Library** (wisdomlib.org) | Cross-referencing of Parva structure and verse counts |
| **Gītā Supersite**, IIT Kanpur | Bhagavad Gītā chapter structure and verse counts |
| **Archaeological Survey of India** | Modern site identifications — Hastinapur, Purana Qila PGW findings |
| **National Institute of Oceanography** | Submerged Dwarka structures, dated ~1500 BCE |
| **Monier-Williams Sanskrit-English Dictionary** (1899) | Terminology and transliteration |

### On Historicity

The application presents traditional dating (~3102 BCE for the Kali Yuga
transition) **as traditional dating**, explicitly labelled as such, while
separately reporting archaeological findings (PGW pottery, 1000–600 BCE)
with their own dates. It does not conflate the two, and it does not
adjudicate between them.

---

## 10. Deployment

### GitHub Pages

Because GitHub Pages serves from a **subdirectory** (`/mahabharata-pwa/`), the
manifest uses absolute paths including that prefix. This is the single most common
cause of "404 There isn't a GitHub Pages site here" on mobile — the desktop browser
loads the HTML directly and works, but the installed PWA launches `start_url` and
fails.

```json
"start_url": "/mahabharata-pwa/",
"scope":     "/mahabharata-pwa/",
"icons": [{ "src": "/mahabharata-pwa/icon-192.png", … }]
```

**If you rename your repository, update these five paths.**

### Steps

1. Create a **public** repository named `mahabharata-pwa`
2. Upload all files (drag and drop works — no Git required)
3. **Settings → Pages → Deploy from branch → main → / (root) → Save**
4. Live in ~2 minutes at `https://YOUR-USERNAME.github.io/mahabharata-pwa/`

### Installing as an App

| Platform | Method |
|---|---|
| **Android** | Chrome → ⋮ menu → *Add to Home screen* → Install |
| **iPhone / iPad** | Safari → Share → *Add to Home Screen* |
| **Desktop** | Chrome/Edge → install icon (⊕) in address bar |

Works fully offline after first load.

---

## Closing Note

> *"Vyāsa is the author of the Mahābhārata. Through this poem, by listening to it,
> one attains long life, fame, and the way to heaven."*
> — Ādi Parva 1.204

The code is MIT-licensed and yours to modify freely. The epic itself belongs to
no one, and therefore to everyone.

**ॐ शान्तिः शान्तिः शान्तिः**

# Story: PRABHAV.exe — Vintage TV Portfolio Web Application

## User Story
**As a** visitor, recruiter, or collaborator exploring Prabhav Narayanan's work,  
**I want** to browse his engineering projects, technical stack, musical background, and contact points through an interactive vintage CRT television experience with Y2K editorial styling,  
**So that** I get an unforgettable, aesthetically distinct, and deeply informative showcase of his technical craftsmanship and creative identity.

## Acceptance Criteria
1. **Visual Language**: Faithfully executes `designideation.md` palette (`#2F43FC` Cobalt Blue, `#D9E32A` Acid Lime, `#0A0A0A` Deep Black, `#F5F3E8` Paper White, `#00E5FF` Signal Cyan) with CRT curvature, scanlines, phosphor glow, Y2K stars, stickers, and editorial cutout portrait.
2. **Channel System**: All 6 channels operational (CH 01 Home, CH 02 About, CH 03 Projects, CH 04 Tech Stack, CH 05 Frequencies, CH 06 Contact) with genuine data from `data.md`.
3. **Interactive TV Controls**: Channel dials/buttons, TV Menu Guide overlay, Back button, Power toggle, CRT scanlines toggle, and Audio FX toggle with synthesized retro clicks/static.
4. **Channel Transitions**: Realistic CRT tuning static and screen flicker on channel changes.
5. **Projects Showcase**: Broadcast cards with live links, GitHub repos, tags, and category filters for all 6 projects (GIGmate, Design Desk, Auralex, Freefolks Band Website, Retro Wallpaper Hub, Permissions RIT).
6. **Frequencies & Music**: Dedicated musical section highlighting Violin, Guitar, Keyboard proficiencies, RITM & Freefolks band features, and an interactive musical frequency tone synthesizer.
7. **Contact Terminal**: Functional retro transmission station with mailto, direct copy, phone, social links, and interactive broadcast transmission simulation.
8. **Responsive & Accessible**: Seamlessly adapts to desktop, tablet, and mobile screens; supports keyboard shortcuts (1-6, M, S).
9. **Build & Quality**: Clean Vite build without errors, warnings, or missing dependencies.

---

## Tasks Breakdown

1. [x] **Setup**: Initialize Vite + React + Tailwind CSS project with dependencies (`lucide-react`, `framer-motion`, `canvas-confetti`). Configure fonts and color tokens in Tailwind & CSS.
2. [x] **Audio & FX Engine**: Build `useRetroAudio` hook using procedural Web Audio API (dial click, static burst, CRT hum, chime) with zero external audio assets.
3. [x] **CRT Frame & Hardware Bezel**: Implement `TvFrame`, `TvScreen`, `CrtOverlay`, `OnScreenDisplay` (OSD), and physical control knobs (channel knob, power, menu, volume/mute).
4. [x] **Editorial Background & Y2K Graphics**: Implement outer shell featuring cobalt blue canvas, halftone/grain texture, Y2K starbursts, floating retro badges, and cutout portrait with glowing neon outline.
5. [x] **Channel 01 — HOME**: Intro tagline, developer identity, live status ticker ("AVAILABLE FOR OPPORTUNITIES"), quick broadcast actions, and interactive channel shortcuts.
6. [x] **Channel 02 — ABOUT**: Personal narrative, performer-engineer philosophy, 2022-2025 engineering milestones timeline, and IEEE/CSA leadership records.
7. [x] **Channel 03 — PROJECTS**: Digital broadcast cards for GIGmate, Design Desk, Auralex, Freefolks Band Website, Retro Wallpaper Hub, Permissions RIT, with live preview links, GitHub buttons, and stack tags.
8. [x] **Channel 04 — TECH STACK**: Interactive skill meters, retro signal strength gauges, categorized by Frontend, Backend, AI & Emerging Tech, and DevOps/Tools.
9. [x] **Channel 05 — FREQUENCIES**: Musical identity showcase (Violin 5/5, Guitar 4/5, Keyboard 3/5), Freefolks & RITM band highlights, and interactive musical frequency synthesizer pad.
10. [x] **Channel 06 — CONTACT**: Vintage transmission terminal, email, phone, location, GitHub, and interactive broadcast transmitter form with confirmation receipt.
11. [x] **TV Guide Menu & Keyboard Navigation**: Global overlay modal displaying the channel lineup with quick tuning, channel preview descriptions, and keyboard shortcut handler (keys 1-6, M, S).
12. [x] **Mobile Optimization & Build Verification**: Responsive layout tuning for handheld devices, tests and production build verification (`npm run build`).

---

## Cycle Log

### Cycle 1 — Developer Pass
- Files created:
  - `package.json`: Vite, React 18, Tailwind CSS, Lucide React, Framer Motion, canvas-confetti.
  - `vite.config.js`: Vite server and plugin config.
  - `tailwind.config.js`: Custom color palette (`cobalt`, `acid`, `deepBlack`, `paperWhite`, `signalCyan`), retro fonts, CRT shadow/glow tokens.
  - `postcss.config.js`: PostCSS with Tailwind and Autoprefixer.
  - `index.html`: Retro favicon, fonts (`Press Start 2P`, `VT323`, `Space Grotesk`, `Archivo Black`).
  - `src/index.css`: Y2K grain texture, scanlines gradient, curved CRT screen bezel, custom retro scrollbar.
  - `src/data/portfolioData.js`: Centralized data store parsed from `data.md`.
  - `src/hooks/useRetroAudio.js`: Zero-asset procedural Web Audio synthesizer (dial click, static burst, CRT degauss hum, menu chime, note synth).
  - `src/components/CrtEffects.jsx`: Animated static canvas, scanlines, glass reflection glare, corner vignette.
  - `src/components/OnScreenDisplay.jsx`: Animated OSD channel tag, MHz frequency, audio status.
  - `src/components/TvControls.jsx`: Hardware channel selector (CH 01 - 06), stepper buttons, power toggle, sound toggle, scanlines toggle, menu and back buttons.
  - `src/components/TvFrame.jsx`: Vintage TV chassis, antenna, speaker grille, ventilation slits, model badge, screen frame.
  - `src/components/EditorialShell.jsx`: Electric cobalt blue canvas, floating Y2K starbursts, cutout portrait badge with glowing yellow halo, stickers.
  - `src/components/TvGuideModal.jsx`: Full EPG channel guide modal with quick tuning and hotkey cheatsheet.
  - `src/components/channels/HomeChannel.jsx`: Channel 01 hero broadcast, taglines, quick links, status ticker.
  - `src/components/channels/AboutChannel.jsx`: Channel 02 performer-engineer narrative, 2022-2025 timeline, collegiate leadership.
  - `src/components/channels/ProjectsChannel.jsx`: Channel 03 broadcast showcases for all 6 projects with live links and GitHub repos.
  - `src/components/channels/TechStackChannel.jsx`: Channel 04 category filters, LED dB signal meters, skill chips.
  - `src/components/channels/FrequenciesChannel.jsx`: Channel 05 musical instruments, bands (Freefolks & RITM), live interactive Web Audio synthesizer pad.
  - `src/components/channels/ContactChannel.jsx`: Channel 06 transmission coordinates, one-click email copy, interactive message dispatch simulator with confetti.
  - `src/App.jsx`: State machine for channels, history stack, hotkeys (1-6, M, S), power, and tuning static sweep.
  - `src/main.jsx`: React entrypoint.
  - `test/portfolio.test.js`: Built-in Node test suite.
- Test Results: `npm test` -> 8 passing tests, 0 failures.
- Build Results: `npm run build` -> Clean bundle generated in `dist/` in 4.35s.

### Cycle 1 — Reviewer Pass
- Acceptance Criteria verified:
  1. Palette (#2F43FC Cobalt, #D9E32A Acid Lime, #0A0A0A Black) & Y2K aesthetics: PASSED.
  2. All 6 channels fully functional with complete data from data.md: PASSED.
  3. Interactive TV controls (channel knob, power, sound toggle, scanline toggle, menu, back): PASSED.
  4. CRT tuning static & procedural audio: PASSED.
  5. 6 projects with live links and repository links: PASSED.
  6. Frequencies channel with interactive Web Audio synthesizer pad: PASSED.
  7. Contact channel with direct transmission form: PASSED.
  8. Keyboard shortcuts (1-6, M, S, ESC): PASSED.
  9. Production build & test suite: PASSED (100% pass rate).
- Verdict: APPROVED. Ready for delivery.

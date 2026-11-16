# PRABHAV.exe // VINTAGE BROADCAST PORTFOLIO 📺⚡

> *"Connected to the past. Designed for the future."*  
> An interactive personal portfolio website disguised as a vintage CRT television set from an alternate Y2K digital editorial universe.

---

## ⚡ Overview

**PRABHAV.exe** is the personal portfolio of **Prabhav Narayanan** — Frontend Developer, Creative Technologist, and Multi-Instrumentalist. 

Rather than following a standard hero section and card grid, the entire experience is engineered as a physical broadcast television interface. Visitors browse through projects, skill radars, musical identity, and contact channels by turning analog dials or clicking a handheld infrared remote control.

---

## 🎮 Features & Interactive Mechanics

- **📺 Realistic CRT Engine**:
  - Curved glass bulb distortion, phosphor corner vignette, and realistic CRT scanlines.
  - **Phosphor Power Collapse**: Turning off the TV collapses the picture into a center horizontal discharge line and single white phosphor dot that fades away with authentic degauss/capacitor audio discharge.
  - **Static Sweep Tuning**: Realistic analog television white noise and frequency tuning during channel changes.

- **🎛️ Procedural Web Audio Synthesizer (Zero External Audio Files)**:
  - Rotary dial clunks, static sweeps, power tones, and menu chimes synthesized entirely in real-time using the **Web Audio API**.
  - **Lo-Fi Ambient Tape Loop BGM**: Dreamy procedural 90s chord progression (*Fmaj7 &rarr; G6 &rarr; Em7 &rarr; Am7*) with subtle tape flutter and analog low-pass filtering.

- **📊 Live Tektronix Oscilloscope & Spectrum Visualizer (CH 05)**:
  - Real-time oscilloscope canvas tapping directly into the audio `AnalyserNode`.
  - Switchable between **Waveform Reticle** and **FFT Frequency Spectrum** modes with glowing acid/cyan phosphor traces.
  - Reacts live to both synth keys and background music.

- **📱 Handheld IR Remote Commander (`RC-90`)**:
  - **Desktop (`lg+`)**: Docks beside the TV with an animated red infrared bulb that flashes on transmission.
  - **Mobile (`< lg`)**: A non-intrusive floating `[IR REMOTE]` badge slides up a bottom drawer remote without taking up screen real estate.

- **⌨️ Hardware Hotkeys**:
  - `1` – `6`: Instant channel selection.
  - `M`: Electronic Program Guide (EPG Menu).
  - `S`: Toggle procedural audio sound effects.
  - `B`: Toggle Lo-Fi Ambient BGM.
  - `ESC`: Close overlay modals.

---

## 📡 Channel Directory

| Channel | Label | Content & Focus |
|---|---|---|
| **CH 01** | **HOME** | Broadcast introduction, tagline *"CREATIVE DEVELOPER. DIGITAL EXPERIMENTER. MUSICIAN."*, live status ticker, and quick jump triggers. |
| **CH 02** | **ABOUT** | Performer-engineer philosophy, 2022–2025 developer milestones, and collegiate leadership archive (IEEE, CSA, RITU '25). |
| **CH 03** | **PROJECTS** | Broadcast showcases for 6 flagship applications (*GIGmate, Design Desk, Auralex, Freefolks Band Website, Retro Wallpaper Hub, Permissions RIT*) with live demo links and GitHub repos. |
| **CH 04** | **TECH STACK** | Interactive skill matrix featuring retro analog LED dB signal meters across Frontend, Backend, AI/ML, and DevOps. |
| **CH 05** | **FREQUENCIES** | Musical identity (Violin 5/5, Guitar 4/5, Keyboard 3/5), band features (*Freefolks* & *RITM*), live interactive synthesizer, and oscilloscope. |
| **CH 06** | **TRANSMIT** | Transmission terminal, coordinates (one-click email copy, phone, location, GitHub), and simulated packet dispatch form. |

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + Custom CRT CSS Modules
- **Sound Engine**: Procedural [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)
- **Visuals & Canvas**: HTML5 Canvas (Oscilloscope, Noise generator, Glare)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Effects**: [canvas-confetti](https://github.com/catdad/canvas-confetti)
- **Fonts**: *Press Start 2P*, *VT323*, *Space Grotesk*, *Archivo Black* (Google Fonts)
- **Deployment**: [Vercel](https://vercel.com/)

---

## 🚀 Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Prabhav04/vintage-tvportfo.git
   cd vintage-tvportfo
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```

4. **Run automated test suites**:
   ```bash
   npm test
   ```

5. **Build for production**:
   ```bash
   npm run build
   ```

---

## 📄 License

Created by **[Prabhav Narayanan](https://github.com/Prabhav04)**.  
Licensed under the [MIT License](LICENSE).


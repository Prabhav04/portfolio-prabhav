# PRABHAV.exe — Architecture Decision

## Technical Approach
- **Core Framework**: React 18 / 19 with Vite for ultra-fast HMR and bundle optimization.
- **Styling**: Tailwind CSS with custom theme extensions (`cobalt`, `acid`, `deepBlack`, `paperWhite`, `signalCyan`, `staticGrey`) and custom CSS modules for CRT scanlines, curve bulge, screen distortion, and Y2K aesthetic textures.
- **Typography**: Google Fonts loaded via `@import` or preconnect (`Press Start 2P`, `VT323`, `Space Grotesk`, `Archivo Black`).
- **Sound Engine**: Zero-asset procedural Web Audio API audio synthesis (pure code: square/sawtooth waves, pink noise for static, resonant clicks on buttons/channel dials, low-pass filter humming) with sound mute state persisted to `localStorage`.
- **Motion & Transitions**: Framer Motion for channel static blips, bezel knob rotation animations, floating stickers, and page transitions.
- **Iconography**: Lucide React for consistent hardware and status iconography.
- **State Architecture**:
  - `channelState`: current channel (1-6), previous channel history stack, transition state (`isTuning`, `staticLevel`).
  - `tvSettings`: sound enabled, crtFx enabled, menuOpen, powerState (on/standby).
  - Centralized portfolio data module derived from `data.md`.
- **Testing & Verification**: Production build via `npm run build` + unit/component testing with Vitest/Playwright or smoke test scripts.


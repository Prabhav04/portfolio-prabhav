import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Star, Sparkles, Radio, Zap, Disc } from 'lucide-react';

export function EditorialShell({ children, currentChannelId }) {
  const { profile } = PORTFOLIO_DATA;

  return (
    <div className="relative min-h-screen bg-cobalt text-paperWhite bg-grain overflow-x-hidden selection:bg-acid selection:text-deepBlack flex flex-col justify-between p-3 sm:p-6 lg:p-8">
      {/* Background Decorative Y2K Floating Stars & Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Large 4-Point Star Top Left */}
        <div className="absolute -top-12 -left-12 text-acid/20 animate-spin-slow">
          <svg width="240" height="240" viewBox="0 0 100 100" fill="currentColor">
            <path d="M50 0 C50 35 35 50 0 50 C35 50 50 65 50 100 C50 65 65 50 100 50 C65 50 50 35 50 0 Z" />
          </svg>
        </div>

        {/* 4-Point Star Bottom Right */}
        <div className="absolute -bottom-16 -right-16 text-acid/15 animate-spin-slow">
          <svg width="280" height="280" viewBox="0 0 100 100" fill="currentColor">
            <path d="M50 0 C50 35 35 50 0 50 C35 50 50 65 50 100 C50 65 65 50 100 50 C65 50 50 35 50 0 Z" />
          </svg>
        </div>

        {/* Small floating stars */}
        <div className="absolute top-24 right-12 text-acid animate-float-slow hidden md:block">
          <svg width="32" height="32" viewBox="0 0 100 100" fill="currentColor">
            <path d="M50 0 C50 35 35 50 0 50 C35 50 50 65 50 100 C50 65 65 50 100 50 C65 50 50 35 50 0 Z" />
          </svg>
        </div>
        <div className="absolute bottom-32 left-16 text-acid animate-float-reverse hidden md:block">
          <svg width="40" height="40" viewBox="0 0 100 100" fill="currentColor">
            <path d="M50 0 C50 35 35 50 0 50 C35 50 50 65 50 100 C50 65 65 50 100 50 C65 50 50 35 50 0 Z" />
          </svg>
        </div>
      </div>

      {/* Top Editorial Magazine Header */}
      <header className="relative z-10 max-w-6xl w-full mx-auto flex flex-col sm:flex-row sm:items-end justify-between border-b-4 border-paperWhite pb-3 mb-2 gap-2">
        <div>
          <div className="flex items-center gap-2">
            <span className="font-pixel text-[9px] bg-acid text-deepBlack px-2 py-0.5 border border-deepBlack font-bold">
              ISSUE NO. 04 // 2025
            </span>
            <span className="font-vt text-sm tracking-widest text-paperWhite/80 uppercase">
              EDITORIAL BROADCAST SPECIFICATION
            </span>
          </div>
          <div className="font-archivo text-2xl sm:text-4xl lg:text-5xl tracking-tighter uppercase text-paperWhite leading-none mt-1">
            PRABHAV.EXE
          </div>
        </div>

        {/* Editorial Subtitle Badge */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:block text-right">
            <div className="font-pixel text-[8px] text-acid">THEME OF BROADCAST:</div>
            <div className="font-display font-bold text-xs uppercase tracking-wider text-paperWhite">
              CONNECTED TO THE PAST. DESIGNED FOR THE FUTURE.
            </div>
          </div>

          {/* Cutout Portrait Thumbnail Badge with Bright Yellow Outline */}
          <div className="relative group shrink-0">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-3 border-acid shadow-[0_0_15px_#D9E32A] overflow-hidden bg-deepBlack flex items-center justify-center p-0.5">
              {/* Stylized high-contrast B&W cutout avatar */}
              <div className="w-full h-full rounded-full bg-zinc-900 border border-acid/50 flex flex-col items-center justify-center text-center p-1 relative">
                <span className="font-archivo text-acid text-xs leading-none">PN</span>
                <span className="font-pixel text-[7px] text-paperWhite tracking-tighter">VIOLIN & CODE</span>
                <div className="absolute inset-0 border-2 border-dashed border-acid/40 rounded-full animate-spin-slow pointer-events-none" />
              </div>
            </div>
            {/* Sticker star badge */}
            <div className="absolute -bottom-1 -right-1 bg-acid text-deepBlack font-pixel text-[7px] px-1 py-0.5 border border-deepBlack shadow-sm">
              ★ 2025
            </div>
          </div>
        </div>
      </header>

      {/* Main Container Housing the TV Set */}
      <main className="relative z-10 max-w-6xl w-full mx-auto my-auto flex items-center justify-center">
        {children}
      </main>

      {/* Bottom Editorial Banner & Floating Stickers */}
      <footer className="relative z-10 max-w-6xl w-full mx-auto mt-4 pt-3 border-t-4 border-paperWhite flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-pixel text-[8px] bg-paperWhite text-deepBlack px-2 py-0.5 border border-deepBlack font-bold">
            PRABHAV NARAYANAN
          </span>
          <span className="font-vt text-sm tracking-wider text-paperWhite/90">
            KERALA, INDIA • CREATIVE TECHNOLOGIST & PERFORMER
          </span>
        </div>

        {/* Sticker badges */}
        <div className="flex items-center gap-2">
          <div className="bg-acid text-deepBlack font-pixel text-[8px] px-2 py-1 border-2 border-deepBlack shadow-pixel-sm transform -rotate-2">
            ★ Y2K RETRO ENGINE
          </div>
          <div className="bg-signalCyan text-deepBlack font-pixel text-[8px] px-2 py-1 border-2 border-deepBlack shadow-pixel-sm transform rotate-2">
            WEB AUDIO ACTIVE
          </div>
        </div>
      </footer>
    </div>
  );
}


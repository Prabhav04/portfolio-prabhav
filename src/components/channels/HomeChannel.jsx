import React from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { Sparkles, ArrowRight, Radio, Disc, Terminal, Zap } from 'lucide-react';

export function HomeChannel({ onSelectChannel, onOpenMenu, onPlayClick }) {
  const { profile } = PORTFOLIO_DATA;

  return (
    <div className="p-4 sm:p-7 text-deepBlack font-display flex flex-col justify-between min-h-full">
      {/* Top Broadcast Banner */}
      <div className="border-b-4 border-deepBlack pb-3 mb-4 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="font-pixel text-[9px] sm:text-[10px] bg-deepBlack text-acid px-2 py-0.5">
            SIGNAL: OPTIMAL
          </span>
          <span className="font-vt text-sm tracking-wider uppercase text-deepBlack/80">
            {profile.systemId} // {profile.version}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-red-600 animate-ping" />
          <span className="font-pixel text-[9px] tracking-widest uppercase">LIVE BROADCAST</span>
        </div>
      </div>

      {/* Main Hero Broadcast */}
      <div className="my-auto space-y-4">
        {/* Animated Punchy Taglines */}
        <div className="space-y-1">
          <div className="font-pixel text-[10px] sm:text-xs text-deepBlack/80 tracking-wider flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-deepBlack fill-deepBlack" />
            <span>TRANSMISSION SOURCE: {profile.location.toUpperCase()}</span>
          </div>
          <h1 className="font-archivo text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[0.95] uppercase text-deepBlack">
            {profile.name}
          </h1>
          <div className="font-pixel text-xs sm:text-sm text-deepBlack bg-deepBlack text-paperWhite px-3 py-1.5 inline-block border-2 border-deepBlack shadow-pixel-sm mt-1">
            CREATIVE DEVELOPER • MUSICIAN • PERFORMER
          </div>
        </div>

        {/* Triple Tagline Quote from Design Ideation */}
        <div className="bg-paperWhite border-3 border-deepBlack p-3 sm:p-4 shadow-pixel">
          <div className="font-pixel text-[9px] text-deepBlack/60 mb-1">TRANSMISSION FREQUENCY // IDENTITY:</div>
          <p className="font-archivo text-base sm:text-xl tracking-wide uppercase leading-tight text-deepBlack">
            "CREATIVE DEVELOPER. DIGITAL EXPERIMENTER. MUSICIAN."
          </p>
          <p className="font-display text-xs sm:text-sm text-deepBlack/80 mt-2 italic leading-relaxed">
            "{profile.elevatorPitch}"
          </p>
        </div>

        {/* Quick Action Station */}
        <div className="pt-2">
          <div className="font-pixel text-[9px] text-deepBlack/70 mb-2 uppercase flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-deepBlack" />
            <span>QUICK BROADCAST JUMP:</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            <button
              onClick={() => {
                onPlayClick?.();
                onSelectChannel(3); // Projects
              }}
              className="retro-btn p-2.5 bg-deepBlack text-acid hover:bg-zinc-800 border-2 border-deepBlack shadow-pixel-sm text-left flex items-center justify-between group"
            >
              <div>
                <div className="font-pixel text-[9px] text-signalCyan">CH 03</div>
                <div className="font-archivo text-sm text-paperWhite">PROJECTS</div>
              </div>
              <ArrowRight className="w-4 h-4 text-acid group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => {
                onPlayClick?.();
                onSelectChannel(5); // Frequencies
              }}
              className="retro-btn p-2.5 bg-deepBlack text-acid hover:bg-zinc-800 border-2 border-deepBlack shadow-pixel-sm text-left flex items-center justify-between group"
            >
              <div>
                <div className="font-pixel text-[9px] text-signalCyan">CH 05</div>
                <div className="font-archivo text-sm text-paperWhite">FREQUENCIES</div>
              </div>
              <Disc className="w-4 h-4 text-acid group-hover:rotate-45 transition-transform" />
            </button>

            <button
              onClick={() => {
                onPlayClick?.();
                onSelectChannel(6); // Contact
              }}
              className="retro-btn p-2.5 bg-deepBlack text-acid hover:bg-zinc-800 border-2 border-deepBlack shadow-pixel-sm text-left flex items-center justify-between group"
            >
              <div>
                <div className="font-pixel text-[9px] text-signalCyan">CH 06</div>
                <div className="font-archivo text-sm text-paperWhite">TRANSMIT</div>
              </div>
              <Terminal className="w-4 h-4 text-acid group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Ticker / Footer CTA */}
      <div className="border-t-3 border-deepBlack pt-3 mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div className="font-vt text-xs sm:text-sm tracking-wider text-deepBlack/80 overflow-hidden text-ellipsis whitespace-nowrap">
          {profile.statusTicker}
        </div>
        <button
          onClick={() => {
            onPlayClick?.();
            onOpenMenu();
          }}
          className="retro-btn font-pixel text-[9px] bg-deepBlack text-acid px-3 py-1.5 border-2 border-deepBlack shadow-pixel-sm hover:bg-zinc-900 inline-flex items-center gap-1.5 self-start sm:self-auto"
        >
          <span>PRESS MENU TO EXPLORE</span>
          <ArrowRight className="w-3 h-3 text-acid" />
        </button>
      </div>
    </div>
  );
}


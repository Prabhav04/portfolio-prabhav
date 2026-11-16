import React from 'react';
import { X, Tv, Radio, ArrowRight, Volume2, Monitor } from 'lucide-react';

export function TvGuideModal({
  isOpen,
  onClose,
  channels,
  currentChannelId,
  onSelectChannel,
  onPlayClick
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-deepBlack/80 backdrop-blur-sm animate-flicker">
      <div className="relative w-full max-w-2xl bg-acid border-4 border-deepBlack shadow-[8px_8px_0px_#0A0A0A] p-5 sm:p-6 text-deepBlack font-display">
        {/* Header */}
        <div className="flex items-start justify-between border-b-4 border-deepBlack pb-3 mb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-red-600 rounded-full animate-ping" />
              <h2 className="font-archivo text-xl sm:text-2xl tracking-tighter uppercase">
                ELECTRONIC PROGRAM GUIDE // EPG
              </h2>
            </div>
            <p className="font-pixel text-[9px] sm:text-[10px] text-deepBlack/80 mt-1">
              PRABHAV.EXE BROADCAST DIRECTORY • SELECT ANY CHANNEL TO TUNE
            </p>
          </div>
          <button
            onClick={() => {
              onPlayClick?.();
              onClose();
            }}
            aria-label="Close Channel Guide"
            className="retro-btn p-1.5 bg-deepBlack text-acid hover:bg-zinc-800 border-2 border-deepBlack"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Channel Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
          {channels.map((chan) => {
            const isCurrent = chan.id === currentChannelId;
            return (
              <button
                key={chan.id}
                onClick={() => {
                  onPlayClick?.();
                  onSelectChannel(chan.id);
                  onClose();
                }}
                className={`retro-btn text-left p-3 border-2 border-deepBlack transition-all flex flex-col justify-between ${
                  isCurrent
                    ? 'bg-deepBlack text-acid shadow-pixel font-bold ring-2 ring-acid'
                    : 'bg-paperWhite hover:bg-white text-deepBlack'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <span className="font-pixel text-xs bg-acid text-deepBlack px-1.5 py-0.5 border border-deepBlack">
                      {chan.code}
                    </span>
                    <span className="font-archivo text-base tracking-tight">{chan.name}</span>
                  </div>
                  <span className="font-vt text-sm tracking-wider opacity-75">{chan.frequency}</span>
                </div>
                <p className="font-display text-xs text-opacity-90 leading-snug line-clamp-2 mt-1">
                  {chan.description}
                </p>
                {isCurrent && (
                  <div className="mt-2 text-[10px] font-pixel text-signalCyan flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-signalCyan rounded-full animate-ping" />
                    <span>CURRENT BROADCAST</span>
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Keyboard Quick Navigation Guide Footer */}
        <div className="bg-deepBlack text-paperWhite p-3 border-2 border-deepBlack flex flex-wrap items-center justify-between gap-3 text-xs font-vt">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="text-acid font-pixel text-[9px]">HOTKEYS:</span>
            <span><kbd className="bg-zinc-800 px-1 py-0.5 border border-zinc-600 text-acid">1</kbd>-<kbd className="bg-zinc-800 px-1 py-0.5 border border-zinc-600 text-acid">6</kbd> Channels</span>
            <span><kbd className="bg-zinc-800 px-1 py-0.5 border border-zinc-600 text-acid">M</kbd> Menu Guide</span>
            <span><kbd className="bg-zinc-800 px-1 py-0.5 border border-zinc-600 text-acid">S</kbd> Sound FX</span>
            <span><kbd className="bg-zinc-800 px-1 py-0.5 border border-zinc-600 text-acid">ESC</kbd> Close</span>
          </div>
          <button
            onClick={() => {
              onPlayClick?.();
              onClose();
            }}
            className="retro-btn text-[10px] font-pixel text-acid bg-zinc-900 border border-acid px-3 py-1 hover:bg-acid hover:text-deepBlack"
          >
            RETURN TO SCREEN
          </button>
        </div>
      </div>
    </div>
  );
}


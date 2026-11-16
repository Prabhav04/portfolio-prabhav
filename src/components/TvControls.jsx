import React from 'react';
import { 
  Tv, 
  Volume2, 
  VolumeX, 
  Power, 
  Menu, 
  RotateCcw, 
  Monitor, 
  Radio, 
  ChevronUp, 
  ChevronDown 
} from 'lucide-react';

export function TvControls({
  channels,
  currentChannelId,
  onSelectChannel,
  onPrevChannel,
  onNextChannel,
  onBack,
  canGoBack,
  isPoweredOn,
  onTogglePower,
  soundEnabled,
  onToggleSound,
  scanlinesEnabled,
  onToggleScanlines,
  onOpenMenu,
  onPlayClick
}) {
  const currentChan = channels.find(c => c.id === currentChannelId) || channels[0];

  return (
    <div className="bg-[#18181b] border-t-4 sm:border-t-0 sm:border-l-4 border-deepBlack p-3 sm:p-4 flex flex-col justify-between select-none text-paperWhite">
      {/* Top Header / TV Badge */}
      <div className="border-b-2 border-white/10 pb-3 mb-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full border border-black shadow-inner flex items-center justify-center bg-black">
            <span className={`w-2 h-2 rounded-full ${isPoweredOn ? 'bg-acid shadow-[0_0_8px_#D9E32A]' : 'bg-red-600'}`} />
          </div>
          <div>
            <div className="font-pixel text-[8px] text-acid tracking-widest uppercase">PRABHAV CRT-90</div>
            <div className="font-vt text-xs text-white/50 tracking-wider">SOLID STATE STEREO</div>
          </div>
        </div>

        {/* Power Toggle Button */}
        <button
          onClick={() => {
            onPlayClick?.();
            onTogglePower();
          }}
          title={isPoweredOn ? 'Turn TV Off' : 'Turn TV On'}
          className={`retro-btn p-2 rounded border-2 border-deepBlack flex items-center justify-center ${
            isPoweredOn 
              ? 'bg-red-600 hover:bg-red-500 text-white shadow-pixel-sm' 
              : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
          }`}
        >
          <Power className="w-4 h-4" />
        </button>
      </div>

      {/* Channel Rotary / Step Selector */}
      <div className="my-auto space-y-3">
        <div className="flex items-center justify-between">
          <span className="font-pixel text-[9px] text-white/70">CH SELECTOR</span>
          <span className="font-pixel text-[10px] text-acid bg-deepBlack px-2 py-0.5 border border-white/20">
            CH 0{currentChannelId}
          </span>
        </div>

        {/* Rotary Knobs or Grid Buttons */}
        <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
          {channels.map((chan) => {
            const isActive = chan.id === currentChannelId;
            return (
              <button
                key={chan.id}
                onClick={() => {
                  onPlayClick?.();
                  onSelectChannel(chan.id);
                }}
                disabled={!isPoweredOn}
                className={`retro-btn py-2 px-1 rounded flex flex-col items-center justify-center font-pixel text-[9px] border-2 transition-all ${
                  isActive
                    ? 'bg-acid text-deepBlack border-deepBlack shadow-pixel font-bold'
                    : 'bg-zinc-800 text-paperWhite/80 border-black hover:bg-zinc-700 hover:text-white'
                } ${!isPoweredOn ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}
              >
                <span>0{chan.id}</span>
                <span className="text-[7px] truncate max-w-[50px] font-vt mt-0.5 opacity-80">{chan.name}</span>
              </button>
            );
          })}
        </div>

        {/* Stepper buttons (Up / Down) */}
        <div className="flex gap-2">
          <button
            onClick={() => {
              onPlayClick?.();
              onPrevChannel();
            }}
            disabled={!isPoweredOn}
            className="retro-btn flex-1 py-1.5 bg-zinc-800 hover:bg-zinc-700 disabled:opacity-40 border-2 border-black rounded text-[9px] font-pixel flex items-center justify-center gap-1 text-white shadow-pixel-sm"
          >
            <ChevronUp className="w-3.5 h-3.5 text-acid" />
            <span>PREV</span>
          </button>
          <button
            onClick={() => {
              onPlayClick?.();
              onNextChannel();
            }}
            disabled={!isPoweredOn}
            className="retro-btn flex-1 py-1.5 bg-zinc-800 hover:bg-zinc-700 disabled:opacity-40 border-2 border-black rounded text-[9px] font-pixel flex items-center justify-center gap-1 text-white shadow-pixel-sm"
          >
            <span>NEXT</span>
            <ChevronDown className="w-3.5 h-3.5 text-acid" />
          </button>
        </div>
      </div>

      {/* Mechanical Dial Sliders & Quick Buttons */}
      <div className="pt-3 border-t-2 border-white/10 space-y-2 mt-3">
        <div className="grid grid-cols-2 gap-2">
          {/* MENU BUTTON */}
          <button
            onClick={() => {
              onPlayClick?.();
              onOpenMenu();
            }}
            disabled={!isPoweredOn}
            className="retro-btn py-2 px-2 bg-acid text-deepBlack font-pixel text-[9px] border-2 border-deepBlack rounded shadow-pixel-sm flex items-center justify-center gap-1.5 hover:bg-acid-hover disabled:opacity-40"
          >
            <Menu className="w-3.5 h-3.5" />
            <span>MENU</span>
          </button>

          {/* BACK BUTTON */}
          <button
            onClick={() => {
              onPlayClick?.();
              onBack();
            }}
            disabled={!isPoweredOn || !canGoBack}
            className="retro-btn py-2 px-2 bg-zinc-800 text-paperWhite font-pixel text-[9px] border-2 border-black rounded shadow-pixel-sm flex items-center justify-center gap-1.5 hover:bg-zinc-700 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <RotateCcw className="w-3.5 h-3.5 text-signalCyan" />
            <span>BACK</span>
          </button>
        </div>

        {/* Feature Toggles (Sound & Scanlines) */}
        <div className="flex items-center justify-between pt-1">
          {/* Sound Toggle */}
          <button
            onClick={() => {
              onPlayClick?.();
              onToggleSound();
            }}
            title={soundEnabled ? 'Mute Procedural Audio' : 'Enable Procedural Audio'}
            className={`retro-btn px-2.5 py-1.5 rounded border border-black flex items-center gap-1.5 text-[8px] font-pixel ${
              soundEnabled ? 'bg-zinc-800 text-acid' : 'bg-zinc-900 text-zinc-500'
            }`}
          >
            {soundEnabled ? <Volume2 className="w-3.5 h-3.5 text-acid" /> : <VolumeX className="w-3.5 h-3.5" />}
            <span>{soundEnabled ? 'SFX ON' : 'MUTED'}</span>
          </button>

          {/* Scanlines Toggle */}
          <button
            onClick={() => {
              onPlayClick?.();
              onToggleScanlines();
            }}
            title={scanlinesEnabled ? 'Turn Scanlines Off' : 'Turn Scanlines On'}
            className={`retro-btn px-2.5 py-1.5 rounded border border-black flex items-center gap-1.5 text-[8px] font-pixel ${
              scanlinesEnabled ? 'bg-zinc-800 text-signalCyan' : 'bg-zinc-900 text-zinc-500'
            }`}
          >
            <Monitor className="w-3.5 h-3.5" />
            <span>{scanlinesEnabled ? 'CRT FX' : 'FLAT'}</span>
          </button>
        </div>

        {/* Speaker Grille Decoration */}
        <div className="pt-2 flex flex-col gap-1 opacity-40">
          <div className="h-0.5 bg-zinc-600 rounded-full w-full" />
          <div className="h-0.5 bg-zinc-600 rounded-full w-full" />
          <div className="h-0.5 bg-zinc-600 rounded-full w-full" />
          <div className="h-0.5 bg-zinc-600 rounded-full w-full" />
        </div>
      </div>
    </div>
  );
}


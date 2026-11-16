import React, { useState } from 'react';
import { 
  Power, 
  Volume2, 
  VolumeX, 
  Menu, 
  Music, 
  ChevronUp, 
  ChevronDown, 
  RotateCcw, 
  X,
  Radio
} from 'lucide-react';

export function RemoteControl({
  channels,
  currentChannelId,
  onSelectChannel,
  onPrevChannel,
  onNextChannel,
  onTogglePower,
  isPoweredOn,
  soundEnabled,
  onToggleSound,
  bgmEnabled,
  onToggleBgm,
  onOpenMenu,
  onPlayClick,
  isOpenMobile,
  onCloseMobile
}) {
  const [isBlasting, setIsBlasting] = useState(false);

  const handleAction = (actionFn) => {
    setIsBlasting(true);
    onPlayClick?.();
    actionFn?.();
    setTimeout(() => {
      setIsBlasting(false);
    }, 200);
  };

  const remoteContent = (
    <div className="w-56 bg-[#1f2024] border-4 border-deepBlack rounded-3xl p-4 shadow-[8px_8px_0px_#0A0A0A] text-paperWhite select-none font-pixel flex flex-col justify-between">
      {/* Top Infrared Blaster Bulb & Header */}
      <div className="flex flex-col items-center border-b-2 border-white/10 pb-3 mb-3">
        {/* Blaster Bulb */}
        <div className="relative mb-2">
          <div
            className={`w-4 h-4 rounded-full border-2 border-black transition-all ${
              isBlasting
                ? 'bg-red-500 shadow-[0_0_16px_#ff0000] scale-125'
                : 'bg-red-950 shadow-inner'
            }`}
          />
          {isBlasting && (
            <div className="absolute -top-1 -left-1 w-6 h-6 rounded-full bg-red-500/30 animate-ping pointer-events-none" />
          )}
        </div>

        <div className="flex items-center justify-between w-full">
          <div>
            <div className="text-[7px] text-acid tracking-widest uppercase">IR COMMANDER</div>
            <div className="font-vt text-xs text-white/50">MODEL RC-90</div>
          </div>
          {/* Close button on mobile */}
          {onCloseMobile && (
            <button
              onClick={onCloseMobile}
              aria-label="Close remote drawer"
              className="lg:hidden p-1 bg-deepBlack text-acid border border-deepBlack rounded"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Top Row: Power & Mute & BGM */}
      <div className="grid grid-cols-3 gap-2 mb-3">
        <button
          onClick={() => handleAction(onTogglePower)}
          title="TV Power"
          aria-label={isPoweredOn ? 'Turn TV Off' : 'Turn TV On'}
          className={`retro-btn py-2 rounded-lg border-2 border-black flex flex-col items-center justify-center text-[7px] ${
            isPoweredOn ? 'bg-red-600 text-white shadow-sm' : 'bg-zinc-800 text-zinc-500'
          }`}
        >
          <Power className="w-3.5 h-3.5 mb-0.5" />
          <span>PWR</span>
        </button>

        <button
          onClick={() => handleAction(onToggleSound)}
          title="Mute / Unmute"
          aria-label={soundEnabled ? 'Mute Procedural Audio' : 'Unmute Procedural Audio'}
          className={`retro-btn py-2 rounded-lg border-2 border-black flex flex-col items-center justify-center text-[7px] ${
            soundEnabled ? 'bg-zinc-700 text-acid' : 'bg-zinc-900 text-zinc-500'
          }`}
        >
          {soundEnabled ? <Volume2 className="w-3.5 h-3.5 mb-0.5 text-acid" /> : <VolumeX className="w-3.5 h-3.5 mb-0.5" />}
          <span>SFX</span>
        </button>

        <button
          onClick={() => handleAction(onToggleBgm)}
          title="Lo-Fi Ambient BGM"
          aria-label={bgmEnabled ? 'Stop Lo-Fi Ambient BGM' : 'Start Lo-Fi Ambient BGM'}
          className={`retro-btn py-2 rounded-lg border-2 border-black flex flex-col items-center justify-center text-[7px] ${
            bgmEnabled ? 'bg-signalCyan text-deepBlack font-bold shadow-sm' : 'bg-zinc-800 text-zinc-400'
          }`}
        >
          <Music className="w-3.5 h-3.5 mb-0.5" />
          <span>BGM</span>
        </button>
      </div>

      {/* Channel Number Pad (1-6) */}
      <div className="bg-[#121316] p-2 rounded-xl border border-white/10 mb-3">
        <div className="text-[7px] text-white/60 text-center mb-1.5 uppercase">CH DIRECT ACCESS</div>
        <div className="grid grid-cols-3 gap-1.5">
          {channels.map((chan) => {
            const isActive = chan.id === currentChannelId;
            return (
              <button
                key={chan.id}
                onClick={() => handleAction(() => onSelectChannel(chan.id))}
                disabled={!isPoweredOn}
                aria-label={`Tune to Channel ${chan.id} ${chan.name}`}
                className={`retro-btn py-2 rounded-md font-pixel text-xs border border-black flex items-center justify-center ${
                  isActive
                    ? 'bg-acid text-deepBlack font-bold shadow-pixel-sm'
                    : 'bg-zinc-800 text-paperWhite hover:bg-zinc-700'
                } ${!isPoweredOn ? 'opacity-30 cursor-not-allowed' : ''}`}
              >
                {chan.id}
              </button>
            );
          })}
        </div>
      </div>

      {/* Rocker Steppers (CH & VOL / MENU) */}
      <div className="grid grid-cols-2 gap-2 mb-3">
        {/* CH Stepper */}
        <div className="bg-[#121316] p-1.5 rounded-xl border border-white/10 flex flex-col items-center justify-between">
          <div className="text-[7px] text-acid">CHANNEL</div>
          <button
            onClick={() => handleAction(onNextChannel)}
            disabled={!isPoweredOn}
            aria-label="Next Channel"
            className="retro-btn w-full py-1.5 bg-zinc-800 hover:bg-zinc-700 disabled:opacity-30 rounded border border-black flex items-center justify-center my-0.5 text-white"
          >
            <ChevronUp className="w-3.5 h-3.5 text-acid" />
          </button>
          <button
            onClick={() => handleAction(onPrevChannel)}
            disabled={!isPoweredOn}
            aria-label="Previous Channel"
            className="retro-btn w-full py-1.5 bg-zinc-800 hover:bg-zinc-700 disabled:opacity-30 rounded border border-black flex items-center justify-center my-0.5 text-white"
          >
            <ChevronDown className="w-3.5 h-3.5 text-acid" />
          </button>
        </div>

        {/* EPG / Guide Button */}
        <div className="bg-[#121316] p-1.5 rounded-xl border border-white/10 flex flex-col items-center justify-between">
          <div className="text-[7px] text-signalCyan">EPG GUIDE</div>
          <button
            onClick={() => handleAction(onOpenMenu)}
            disabled={!isPoweredOn}
            aria-label="Open EPG Program Guide Menu"
            className="retro-btn w-full h-full my-0.5 bg-acid text-deepBlack hover:bg-acid-hover disabled:opacity-30 rounded border border-deepBlack flex flex-col items-center justify-center gap-1 font-bold text-[8px]"
          >
            <Menu className="w-4 h-4" />
            <span>MENU</span>
          </button>
        </div>
      </div>

      {/* Bottom Branding */}
      <div className="text-center pt-1 border-t border-white/10 font-vt text-xs text-white/40">
        PN ELECTRONICS • 38kHz IR
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop view: Fixed / Floated beside TV on lg+ screens */}
      <div className="hidden xl:block shrink-0 self-center pl-6 transform rotate-1 hover:rotate-0 transition-transform duration-300">
        {remoteContent}
      </div>

      {/* Mobile Drawer view: Slide-up sheet when triggered */}
      {isOpenMobile && (
        <div className="xl:hidden fixed inset-0 z-50 flex items-end justify-center bg-deepBlack/80 backdrop-blur-sm p-4 animate-flicker">
          <div className="animate-float-slow">
            {remoteContent}
          </div>
        </div>
      )}
    </>
  );
}


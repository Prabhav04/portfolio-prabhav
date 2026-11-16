import React from 'react';
import { CrtEffects } from './CrtEffects';
import { OnScreenDisplay } from './OnScreenDisplay';
import { TvControls } from './TvControls';
import { Antenna } from 'lucide-react';

export function TvFrame({
  children,
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
  onPlayClick,
  isTuning,
  powerTransition
}) {
  const currentChan = channels.find(c => c.id === currentChannelId) || channels[0];

  return (
    <div className="relative w-full max-w-5xl mx-auto my-4 sm:my-8">
      {/* Decorative TV Antenna on top */}
      <div className="hidden sm:flex items-end justify-center mb-[-6px] relative z-0">
        <div className="relative flex items-center justify-center">
          {/* Left antenna rod */}
          <div 
            className="w-1.5 h-20 bg-zinc-400 border border-black origin-bottom transform -rotate-30 rounded-t-full shadow-md"
            style={{ transform: 'rotate(-28deg)' }}
          />
          {/* Central antenna mount base */}
          <div className="w-8 h-4 bg-zinc-800 border-2 border-black rounded-t-lg z-10 -mx-1" />
          {/* Right antenna rod */}
          <div 
            className="w-1.5 h-20 bg-zinc-400 border border-black origin-bottom transform rotate-30 rounded-t-full shadow-md"
            style={{ transform: 'rotate(28deg)' }}
          />
        </div>
      </div>

      {/* Main TV Cabinet Outer Shell */}
      <div className="relative z-10 bg-[#212124] border-4 sm:border-6 border-deepBlack rounded-[2rem] sm:rounded-[2.5rem] p-3 sm:p-5 shadow-[12px_12px_0px_#0A0A0A] overflow-hidden">
        {/* Subtle wood / plastic grain sheen */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-black/30 pointer-events-none rounded-[2rem] sm:rounded-[2.5rem]" />

        {/* Chassis Top ventilation slits & branding */}
        <div className="flex items-center justify-between px-3 sm:px-6 pb-2 sm:pb-3 border-b-2 border-white/10 select-none">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-700 border border-black" />
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-700 border border-black" />
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-700 border border-black" />
            <span className="font-pixel text-[8px] sm:text-[9px] text-zinc-400 ml-1">MODEL: CRT-1990-DELUXE</span>
          </div>

          <div className="font-archivo text-xs sm:text-sm tracking-wider text-acid uppercase flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
            <span>PRABHAV VISION</span>
          </div>

          <div className="hidden sm:flex items-center gap-1">
            <div className="h-1 w-6 bg-zinc-600 rounded-full" />
            <div className="h-1 w-6 bg-zinc-600 rounded-full" />
            <div className="h-1 w-6 bg-zinc-600 rounded-full" />
          </div>
        </div>

        {/* Interior layout: Curved CRT Screen Frame + Hardware Controls Side-Panel */}
        <div className="mt-3 sm:mt-4 grid grid-cols-1 lg:grid-cols-4 gap-3 sm:gap-4 items-stretch">
          {/* CRT Screen Column (Spans 3 cols on desktop) */}
          <div className="lg:col-span-3 relative">
            <div className="crt-screen-frame relative min-h-[480px] sm:min-h-[540px] flex flex-col justify-between overflow-hidden">
              {/* OSD Overlay */}
              {isPoweredOn && !isTuning && (
                <OnScreenDisplay
                  currentChannel={currentChan}
                  volume={80}
                  isMuted={!soundEnabled}
                />
              )}

              {/* Channel Screen Body */}
              <div className={`relative z-10 w-full h-full flex flex-col ${!isPoweredOn ? 'pointer-events-none opacity-0' : 'opacity-100'}`}>
                {children}
              </div>

              {/* CRT Special Effects (Scanlines, Flicker, Reflection, Static noise) */}
              <CrtEffects
                isTuning={isTuning}
                isPoweredOn={isPoweredOn}
                powerTransition={powerTransition}
                scanlinesEnabled={scanlinesEnabled}
              />
            </div>
          </div>

          {/* Physical Controls Column (Spans 1 col on desktop) */}
          <div className="lg:col-span-1 flex flex-col rounded-2xl overflow-hidden border-2 border-black">
            <TvControls
              channels={channels}
              currentChannelId={currentChannelId}
              onSelectChannel={onSelectChannel}
              onPrevChannel={onPrevChannel}
              onNextChannel={onNextChannel}
              onBack={onBack}
              canGoBack={canGoBack}
              isPoweredOn={isPoweredOn}
              onTogglePower={onTogglePower}
              soundEnabled={soundEnabled}
              onToggleSound={onToggleSound}
              scanlinesEnabled={scanlinesEnabled}
              onToggleScanlines={onToggleScanlines}
              onOpenMenu={onOpenMenu}
              onPlayClick={onPlayClick}
            />
          </div>
        </div>

        {/* Chassis Bottom Foot Studs */}
        <div className="flex justify-between items-center px-6 pt-3 sm:pt-4 text-[9px] font-pixel text-zinc-500">
          <div>ANTENNA GAIN: +12dB</div>
          <div className="flex gap-4">
            <span>VOLTAGE: 230V ~ 50Hz</span>
            <span className="text-acid">NTSC/PAL AUTO</span>
          </div>
        </div>
      </div>

      {/* TV Rubber Stand Feet */}
      <div className="flex justify-between px-16 sm:px-24">
        <div className="w-12 sm:w-16 h-3 bg-zinc-900 rounded-b-lg border-2 border-t-0 border-black shadow-md" />
        <div className="w-12 sm:w-16 h-3 bg-zinc-900 rounded-b-lg border-2 border-t-0 border-black shadow-md" />
      </div>
    </div>
  );
}


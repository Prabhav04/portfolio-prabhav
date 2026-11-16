import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { Music, Radio, Disc, Volume2, Sparkles, ExternalLink, Activity } from 'lucide-react';
import { Oscilloscope } from '../Oscilloscope';

export function FrequenciesChannel({ onPlayClick, onPlayNote, getAnalyser, isBgmActive }) {
  const { music } = PORTFOLIO_DATA;
  const [activeTab, setActiveTab] = useState('synth'); // default to synth to showcase the oscilloscope!
  const [playingNote, setPlayingNote] = useState(null);

  const handleTriggerNote = (fObj) => {
    setPlayingNote(fObj.note);
    onPlayNote?.(fObj.freq, 0.7);
    setTimeout(() => {
      setPlayingNote(null);
    }, 600);
  };

  return (
    <div className="p-3 sm:p-5 text-deepBlack font-display flex flex-col h-full overflow-y-auto">
      {/* Header */}
      <div className="border-b-4 border-deepBlack pb-2 mb-2 flex items-center justify-between flex-wrap gap-2">
        <div>
          <div className="font-pixel text-[9px] text-deepBlack/70">SONIC BROADCAST // CHANNEL 05</div>
          <h2 className="font-archivo text-xl sm:text-2xl uppercase tracking-tight">
            FREQUENCIES & MUSIC
          </h2>
        </div>

        {/* Tab switchers */}
        <div className="flex gap-1.5">
          <button
            onClick={() => {
              onPlayClick?.();
              setActiveTab('synth');
            }}
            className={`retro-btn px-2 py-1 text-[9px] font-pixel border-2 border-deepBlack ${
              activeTab === 'synth' ? 'bg-deepBlack text-acid shadow-pixel-sm' : 'bg-paperWhite hover:bg-white'
            }`}
          >
            SYNTH & SCOPE
          </button>
          <button
            onClick={() => {
              onPlayClick?.();
              setActiveTab('instruments');
            }}
            className={`retro-btn px-2 py-1 text-[9px] font-pixel border-2 border-deepBlack ${
              activeTab === 'instruments' ? 'bg-deepBlack text-acid shadow-pixel-sm' : 'bg-paperWhite hover:bg-white'
            }`}
          >
            INSTRUMENTS
          </button>
          <button
            onClick={() => {
              onPlayClick?.();
              setActiveTab('bands');
            }}
            className={`retro-btn px-2 py-1 text-[9px] font-pixel border-2 border-deepBlack ${
              activeTab === 'bands' ? 'bg-deepBlack text-acid shadow-pixel-sm' : 'bg-paperWhite hover:bg-white'
            }`}
          >
            BANDS
          </button>
        </div>
      </div>

      {/* Live CRT Oscilloscope Screen */}
      <Oscilloscope
        getAnalyser={getAnalyser}
        isPlayingNote={Boolean(playingNote)}
        isBgmActive={isBgmActive}
      />

      {/* Tab 1: Interactive Synth Pad */}
      {activeTab === 'synth' && (
        <div className="space-y-2 flex-1 flex flex-col justify-between">
          <div className="bg-paperWhite border-2 border-deepBlack p-2.5 shadow-pixel-sm flex items-center justify-between">
            <div>
              <div className="font-pixel text-[8px] text-deepBlack/80">INTERACTIVE KEYBOARD:</div>
              <p className="font-display text-xs text-deepBlack">
                Trigger musical tones below. Watch the oscilloscope reticle respond in real-time.
              </p>
            </div>
            {isBgmActive && (
              <span className="font-pixel text-[8px] bg-deepBlack text-acid px-2 py-1">
                BGM CHORD LOOP ACTIVE
              </span>
            )}
          </div>

          {/* Synth Keys */}
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5 my-1">
            {music.frequencies.map((fObj) => {
              const isPlaying = playingNote === fObj.note;
              return (
                <button
                  key={fObj.note}
                  onClick={() => handleTriggerNote(fObj)}
                  className={`retro-btn p-2 border-2 border-deepBlack text-center transition-all ${
                    isPlaying
                      ? 'bg-deepBlack text-acid shadow-pixel translate-x-0.5 translate-y-0.5'
                      : 'bg-paperWhite hover:bg-white text-deepBlack shadow-pixel-sm'
                  }`}
                >
                  <div className="font-archivo text-base sm:text-lg leading-tight">{fObj.note}</div>
                  <div className="font-pixel text-[8px] opacity-80">{fObj.freq.toFixed(0)} Hz</div>
                  <div className="font-vt text-[10px] tracking-wider truncate opacity-75 mt-0.5">
                    {fObj.label.split(' ')[0]}
                  </div>
                </button>
              );
            })}
          </div>

          <div className="bg-deepBlack text-paperWhite p-2 border-2 border-deepBlack text-center font-pixel text-[8px] text-acid flex items-center justify-around">
            <span>♪ STEREO ANALOG OSCILLATOR</span>
            <span className="text-signalCyan">LOW-PASS FILTER: 1.6kHz</span>
          </div>
        </div>
      )}

      {/* Tab 2: Instruments */}
      {activeTab === 'instruments' && (
        <div className="space-y-2.5 flex-1">
          <div className="bg-paperWhite border-2 border-deepBlack p-3 shadow-pixel-sm">
            <div className="flex items-center gap-2 font-pixel text-[9px] text-deepBlack/70 mb-1">
              <Music className="w-3.5 h-3.5 text-deepBlack" />
              <span>THE MUSICAL CORE:</span>
            </div>
            <p className="font-display text-xs sm:text-sm text-deepBlack leading-snug">
              Violin is my lead sonic signature. Classical discipline on the violin translates directly to clean software engineering: micro-timing, harmonic balance, and daily practice.
            </p>
          </div>

          <div className="space-y-1.5">
            {music.instruments.map((inst, idx) => (
              <div
                key={idx}
                className="bg-paperWhite border-2 border-deepBlack p-2.5 shadow-pixel-sm flex items-center justify-between gap-2"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-archivo text-sm text-deepBlack">{inst.name}</span>
                    <span className="font-pixel text-[8px] bg-deepBlack text-acid px-1.5 py-0.5">
                      {inst.role}
                    </span>
                  </div>
                  <p className="font-display text-[11px] text-deepBlack/80 mt-0.5">
                    {inst.notes}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  <div className="flex gap-1">
                    {Array.from({ length: inst.max }).map((_, starIdx) => (
                      <span
                        key={starIdx}
                        className={`w-3.5 h-3.5 border border-deepBlack flex items-center justify-center font-bold text-[10px] ${
                          starIdx < inst.score ? 'bg-acid text-deepBlack shadow-sm' : 'bg-zinc-200 text-zinc-400'
                        }`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 3: Bands */}
      {activeTab === 'bands' && (
        <div className="space-y-2.5 flex-1">
          {music.bands.map((band, idx) => (
            <div
              key={idx}
              className="bg-paperWhite border-2 border-deepBlack p-3 shadow-pixel-sm"
            >
              <div className="flex items-center justify-between flex-wrap gap-1 mb-1 border-b border-deepBlack/20 pb-1">
                <div className="flex items-center gap-2">
                  <Disc className="w-4 h-4 text-deepBlack animate-spin-slow" />
                  <span className="font-archivo text-base text-deepBlack">{band.name}</span>
                </div>
                <span className="font-pixel text-[8px] bg-deepBlack text-acid px-1.5 py-0.5">
                  {band.status}
                </span>
              </div>
              <div className="font-vt text-xs text-deepBlack/70 tracking-wider mb-1">
                {band.type}
              </div>
              <p className="font-display text-xs text-deepBlack leading-snug">
                {band.desc}
              </p>
              {band.link && (
                <div className="mt-2">
                  <a
                    href={band.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="retro-btn inline-flex items-center gap-1.5 bg-deepBlack text-acid font-pixel text-[8px] px-2.5 py-1 border border-deepBlack shadow-pixel-sm hover:bg-zinc-800"
                  >
                    <span>VISIT BAND PORTAL</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

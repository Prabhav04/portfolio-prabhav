import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { Music, Radio, Disc, Volume2, Sparkles, ExternalLink } from 'lucide-react';

export function FrequenciesChannel({ onPlayClick, onPlayNote }) {
  const { music } = PORTFOLIO_DATA;
  const [activeTab, setActiveTab] = useState('instruments'); // 'instruments', 'bands', 'synth'
  const [playingNote, setPlayingNote] = useState(null);

  const handleTriggerNote = (noteObj) => {
    setPlayingNote(noteObj.note);
    onPlayNote?.(noteObj.freq, 0.7);
    setTimeout(() => {
      setPlayingNote(null);
    }, 600);
  };

  return (
    <div className="p-3 sm:p-6 text-deepBlack font-display flex flex-col h-full overflow-y-auto">
      {/* Header */}
      <div className="border-b-4 border-deepBlack pb-2 mb-3 flex items-center justify-between flex-wrap gap-2">
        <div>
          <div className="font-pixel text-[9px] text-deepBlack/70">SONIC BROADCAST // CHANNEL 05</div>
          <h2 className="font-archivo text-xl sm:text-3xl uppercase tracking-tight">
            FREQUENCIES & MUSIC
          </h2>
        </div>

        {/* Tab switchers */}
        <div className="flex gap-1.5">
          <button
            onClick={() => {
              onPlayClick?.();
              setActiveTab('instruments');
            }}
            className={`retro-btn px-2.5 py-1 text-[9px] font-pixel border-2 border-deepBlack ${
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
            className={`retro-btn px-2.5 py-1 text-[9px] font-pixel border-2 border-deepBlack ${
              activeTab === 'bands' ? 'bg-deepBlack text-acid shadow-pixel-sm' : 'bg-paperWhite hover:bg-white'
            }`}
          >
            BANDS
          </button>
          <button
            onClick={() => {
              onPlayClick?.();
              setActiveTab('synth');
            }}
            className={`retro-btn px-2.5 py-1 text-[9px] font-pixel border-2 border-deepBlack ${
              activeTab === 'synth' ? 'bg-deepBlack text-acid shadow-pixel-sm' : 'bg-paperWhite hover:bg-white'
            }`}
          >
            SYNTH PAD
          </button>
        </div>
      </div>

      {/* Tab 1: Instruments */}
      {activeTab === 'instruments' && (
        <div className="space-y-3 flex-1">
          <div className="bg-paperWhite border-3 border-deepBlack p-3.5 shadow-pixel">
            <div className="flex items-center gap-2 font-pixel text-[9px] text-deepBlack/70 mb-1">
              <Music className="w-3.5 h-3.5 text-deepBlack" />
              <span>THE MUSICAL CORE:</span>
            </div>
            <p className="font-display text-xs sm:text-sm text-deepBlack leading-snug">
              Violin is my sonic signature. Classical discipline on the violin translates directly to clean software architecture: micro-timing, harmonic balance, and rigorous practice.
            </p>
          </div>

          <div className="space-y-2">
            {music.instruments.map((inst, idx) => (
              <div
                key={idx}
                className="bg-paperWhite border-2 border-deepBlack p-3 shadow-pixel-sm flex flex-col sm:flex-row sm:items-center justify-between gap-2"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-archivo text-base text-deepBlack">{inst.name}</span>
                    <span className="font-pixel text-[8px] bg-deepBlack text-acid px-1.5 py-0.5">
                      {inst.role}
                    </span>
                  </div>
                  <p className="font-display text-xs text-deepBlack/80 mt-0.5">
                    {inst.notes}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-pixel text-[9px] text-deepBlack/70">MASTERY:</span>
                  <div className="flex gap-1">
                    {Array.from({ length: inst.max }).map((_, starIdx) => (
                      <span
                        key={starIdx}
                        className={`w-4 h-4 border border-deepBlack flex items-center justify-center font-bold text-xs ${
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

      {/* Tab 2: Bands */}
      {activeTab === 'bands' && (
        <div className="space-y-3 flex-1">
          {music.bands.map((band, idx) => (
            <div
              key={idx}
              className="bg-paperWhite border-3 border-deepBlack p-4 shadow-pixel"
            >
              <div className="flex items-center justify-between flex-wrap gap-2 mb-1.5 border-b-2 border-deepBlack/20 pb-1.5">
                <div className="flex items-center gap-2">
                  <Disc className="w-4 h-4 text-deepBlack animate-spin-slow" />
                  <span className="font-archivo text-lg sm:text-xl text-deepBlack">{band.name}</span>
                </div>
                <span className="font-pixel text-[8px] bg-deepBlack text-acid px-2 py-0.5">
                  {band.status}
                </span>
              </div>
              <div className="font-vt text-xs text-deepBlack/70 tracking-wider mb-2">
                {band.type}
              </div>
              <p className="font-display text-xs sm:text-sm text-deepBlack leading-snug">
                {band.desc}
              </p>
              {band.link && (
                <div className="mt-3">
                  <a
                    href={band.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="retro-btn inline-flex items-center gap-1.5 bg-deepBlack text-acid font-pixel text-[9px] px-3 py-1.5 border border-deepBlack shadow-pixel-sm hover:bg-zinc-800"
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

      {/* Tab 3: Interactive Synth Pad */}
      {activeTab === 'synth' && (
        <div className="space-y-3 flex-1 flex flex-col justify-between">
          <div className="bg-paperWhite border-3 border-deepBlack p-3.5 shadow-pixel">
            <div className="flex items-center gap-2 font-pixel text-[9px] text-deepBlack/80 mb-1">
              <Volume2 className="w-4 h-4 text-deepBlack" />
              <span>PROCEDURAL ANALOG SYNTHESIZER // WEB AUDIO API</span>
            </div>
            <p className="font-display text-xs sm:text-sm text-deepBlack">
              Click the frequency pads below to synthesize live analog waveform tones directly through the TV audio circuits:
            </p>
          </div>

          {/* Synth Keys */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 my-auto">
            {music.frequencies.map((fObj) => {
              const isPlaying = playingNote === fObj.note;
              return (
                <button
                  key={fObj.note}
                  onClick={() => handleTriggerNote(fObj)}
                  className={`retro-btn p-3 border-3 border-deepBlack text-left transition-all ${
                    isPlaying
                      ? 'bg-deepBlack text-acid shadow-pixel translate-x-1 translate-y-1'
                      : 'bg-paperWhite hover:bg-white text-deepBlack shadow-pixel-sm'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-archivo text-xl">{fObj.note}</span>
                    <span className="font-pixel text-[9px] text-opacity-80">
                      {fObj.freq.toFixed(1)} Hz
                    </span>
                  </div>
                  <div className="font-vt text-xs tracking-wider opacity-75">
                    {fObj.label}
                  </div>
                </button>
              );
            })}
          </div>

          <div className="bg-deepBlack text-paperWhite p-2.5 border-2 border-deepBlack text-center font-pixel text-[9px] text-acid">
            ♪ PLAY HARMONIES • STEREO AUDIO OSCILLATOR ACTIVE
          </div>
        </div>
      )}
    </div>
  );
}

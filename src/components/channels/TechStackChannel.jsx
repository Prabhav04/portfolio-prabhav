import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { Cpu, Server, Sparkles, Terminal, Activity, Wifi } from 'lucide-react';

export function TechStackChannel({ onPlayClick }) {
  const { skills } = PORTFOLIO_DATA;
  const [selectedCategory, setSelectedCategory] = useState('frontend');

  const categories = [
    { key: 'frontend', label: 'FRONTEND', icon: Cpu, count: skills.frontend.length },
    { key: 'backend', label: 'BACKEND & DB', icon: Server, count: skills.backend.length },
    { key: 'aiAndAudio', label: 'AI & AUDIO', icon: Sparkles, count: skills.aiAndAudio.length },
    { key: 'tools', label: 'DEVOPS & TOOLS', icon: Terminal, count: skills.tools.length }
  ];

  const currentList = skills[selectedCategory] || [];

  return (
    <div className="p-3 sm:p-6 text-deepBlack font-display flex flex-col h-full overflow-y-auto">
      {/* Header */}
      <div className="border-b-4 border-deepBlack pb-2 mb-3 flex items-center justify-between flex-wrap gap-2">
        <div>
          <div className="font-pixel text-[9px] text-deepBlack/70">RADAR & METERS // CHANNEL 04</div>
          <h2 className="font-archivo text-xl sm:text-3xl uppercase tracking-tight">
            TECHNICAL ARSENAL
          </h2>
        </div>
        <div className="flex items-center gap-1.5 font-pixel text-[9px] bg-deepBlack text-acid px-2.5 py-1">
          <Activity className="w-3.5 h-3.5 text-signalCyan animate-pulse" />
          <span>ALL PROTOCOLS OPERATIONAL</span>
        </div>
      </div>

      {/* Category Filter Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isActive = selectedCategory === cat.key;
          return (
            <button
              key={cat.key}
              onClick={() => {
                onPlayClick?.();
                setSelectedCategory(cat.key);
              }}
              className={`retro-btn p-2 border-2 border-deepBlack flex items-center justify-center gap-1.5 font-pixel text-[9px] transition-all ${
                isActive
                  ? 'bg-deepBlack text-acid shadow-pixel-sm font-bold'
                  : 'bg-paperWhite hover:bg-white text-deepBlack'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Signal Strength & Skill Meters Grid */}
      <div className="space-y-2.5 flex-1">
        {currentList.map((skill, idx) => {
          const totalBars = 10;
          const filledBars = Math.round((skill.level / 100) * totalBars);

          return (
            <div
              key={idx}
              className="bg-paperWhite border-2 border-deepBlack p-3 shadow-pixel-sm flex flex-col sm:flex-row sm:items-center justify-between gap-2"
            >
              {/* Skill Name & Role */}
              <div className="min-w-[200px]">
                <div className="flex items-center gap-2">
                  <span className="font-archivo text-sm sm:text-base text-deepBlack">
                    {skill.name}
                  </span>
                  <span className="font-pixel text-[8px] bg-acid text-deepBlack px-1.5 py-0.5 border border-deepBlack">
                    {skill.tag}
                  </span>
                </div>
              </div>

              {/* Retro Signal Meter LED Bars */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 bg-deepBlack p-1.5 border border-deepBlack rounded-sm">
                  {Array.from({ length: totalBars }).map((_, bIdx) => {
                    const isFilled = bIdx < filledBars;
                    // Color gradient from green to lime to cyan
                    let barColor = 'bg-zinc-700';
                    if (isFilled) {
                      if (bIdx < 6) barColor = 'bg-lime-400';
                      else if (bIdx < 8) barColor = 'bg-yellow-400';
                      else barColor = 'bg-cyan-400';
                    }

                    return (
                      <span
                        key={bIdx}
                        className={`w-2.5 sm:w-3 h-5 border border-black/40 transition-all ${barColor}`}
                      />
                    );
                  })}
                </div>

                <div className="text-right min-w-[70px]">
                  <span className="font-pixel text-[9px] text-deepBlack/80 block">
                    {skill.level}%
                  </span>
                  <span className="font-vt text-xs tracking-wider text-deepBlack/60 block uppercase">
                    [{skill.signal}]
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer Diagnostic Note */}
      <div className="mt-3 pt-2 border-t-2 border-deepBlack/30 flex items-center justify-between text-xs font-vt text-deepBlack/70">
        <span>SIGNAL CALIBRATION: ACTIVE MATRIX</span>
        <span>SYS FREQ: 60Hz CRT REFRESH</span>
      </div>
    </div>
  );
}


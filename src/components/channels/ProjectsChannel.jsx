import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { ExternalLink, Github, Radio, CheckCircle, ChevronLeft, ChevronRight, Layers } from 'lucide-react';

export function ProjectsChannel({ onPlayClick }) {
  const { projects } = PORTFOLIO_DATA;
  const [selectedIdx, setSelectedIdx] = useState(0);

  const currentProj = projects[selectedIdx];

  const handlePrev = () => {
    onPlayClick?.();
    setSelectedIdx(prev => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    onPlayClick?.();
    setSelectedIdx(prev => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="p-3 sm:p-6 text-deepBlack font-display flex flex-col h-full overflow-y-auto">
      {/* Header */}
      <div className="border-b-4 border-deepBlack pb-2 mb-3 flex items-center justify-between flex-wrap gap-2">
        <div>
          <div className="font-pixel text-[9px] text-deepBlack/70">BROADCAST ARCHIVE // CHANNEL 03</div>
          <h2 className="font-archivo text-xl sm:text-3xl uppercase tracking-tight">
            ENGINEERING PROJECTS
          </h2>
        </div>

        {/* Project Stepper Controls */}
        <div className="flex items-center gap-1.5 bg-deepBlack p-1 rounded border-2 border-deepBlack">
          <button
            onClick={handlePrev}
            className="retro-btn p-1 bg-acid text-deepBlack hover:bg-white rounded text-xs font-bold"
            title="Previous Broadcast"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="font-pixel text-[10px] text-acid px-2">
            0{selectedIdx + 1} / 0{projects.length}
          </span>
          <button
            onClick={handleNext}
            className="retro-btn p-1 bg-acid text-deepBlack hover:bg-white rounded text-xs font-bold"
            title="Next Broadcast"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Project Selector Mini-Bar */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-3 scrollbar-none">
        {projects.map((proj, idx) => (
          <button
            key={proj.id}
            onClick={() => {
              onPlayClick?.();
              setSelectedIdx(idx);
            }}
            className={`retro-btn px-2.5 py-1 text-[9px] font-pixel border-2 border-deepBlack whitespace-nowrap shrink-0 transition-all ${
              selectedIdx === idx
                ? 'bg-deepBlack text-acid shadow-pixel-sm font-bold'
                : 'bg-paperWhite hover:bg-white text-deepBlack'
            }`}
          >
            0{idx + 1}. {proj.title}
          </button>
        ))}
      </div>

      {/* Selected Project Broadcast Card */}
      <div className="bg-paperWhite border-3 border-deepBlack p-4 sm:p-5 shadow-pixel flex flex-col justify-between flex-1">
        <div>
          {/* Card Top Metadata */}
          <div className="flex items-center justify-between flex-wrap gap-2 mb-2 border-b-2 border-deepBlack/20 pb-2">
            <div className="flex items-center gap-2">
              <span className="font-pixel text-[9px] bg-deepBlack text-acid px-2 py-0.5 border border-deepBlack">
                {currentProj.badge}
              </span>
              <span className="font-vt text-xs text-deepBlack/70 tracking-widest">
                YEAR: {currentProj.year}
              </span>
            </div>
            <div className="flex items-center gap-1.5 font-pixel text-[9px] text-deepBlack">
              <span className="w-2 h-2 rounded-full bg-green-600 animate-ping" />
              <span>SIGNAL: {currentProj.channelSignal}</span>
            </div>
          </div>

          {/* Project Title & Tagline */}
          <h3 className="font-archivo text-2xl sm:text-3xl text-deepBlack tracking-tight leading-none mb-1">
            {currentProj.title}
          </h3>
          <p className="font-display font-medium text-xs sm:text-sm text-deepBlack/80 mb-3 italic">
            "{currentProj.tagline}"
          </p>

          {/* Problem & Solution */}
          <div className="space-y-2 mb-4 bg-acid/40 p-3 border-2 border-deepBlack">
            <div>
              <span className="font-pixel text-[9px] text-deepBlack/70 uppercase block mb-0.5">THE PROBLEM:</span>
              <p className="font-display text-xs sm:text-sm text-deepBlack leading-snug">
                {currentProj.problem}
              </p>
            </div>
            <div className="border-t border-deepBlack/20 pt-2">
              <span className="font-pixel text-[9px] text-deepBlack/70 uppercase block mb-0.5">THE ARCHITECTURE:</span>
              <p className="font-display text-xs sm:text-sm text-deepBlack leading-snug">
                {currentProj.description}
              </p>
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="mb-4">
            <div className="font-pixel text-[9px] text-deepBlack/70 uppercase mb-1.5 flex items-center gap-1">
              <Layers className="w-3 h-3 text-deepBlack" />
              <span>TECHNOLOGIES DEPLOYED:</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {currentProj.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="font-pixel text-[8px] sm:text-[9px] bg-deepBlack text-paperWhite px-2 py-1 border border-deepBlack"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Link Buttons */}
        <div className="flex items-center gap-2.5 pt-3 border-t-2 border-deepBlack/30 flex-wrap">
          {currentProj.liveUrl && (
            <a
              href={currentProj.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="retro-btn bg-acid text-deepBlack hover:bg-acid-hover font-pixel text-[10px] px-4 py-2 border-2 border-deepBlack shadow-pixel-sm flex items-center gap-1.5 font-bold"
            >
              <span>LIVE DEMONSTRATION</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}

          {currentProj.githubUrl && (
            <a
              href={currentProj.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="retro-btn bg-deepBlack text-paperWhite hover:bg-zinc-800 font-pixel text-[10px] px-4 py-2 border-2 border-deepBlack shadow-pixel-sm flex items-center gap-1.5"
            >
              <Github className="w-3.5 h-3.5 text-signalCyan" />
              <span>SOURCE CODE</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}


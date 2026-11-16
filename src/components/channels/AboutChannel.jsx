import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { History, Award, BookOpen, User, Flame } from 'lucide-react';

export function AboutChannel({ onPlayClick }) {
  const { profile, milestones, leadership } = PORTFOLIO_DATA;
  const [activeTab, setActiveTab] = useState('narrative'); // 'narrative', 'timeline', 'leadership'

  return (
    <div className="p-4 sm:p-6 text-deepBlack font-display flex flex-col h-full overflow-y-auto">
      {/* Header */}
      <div className="border-b-4 border-deepBlack pb-3 mb-4 flex items-center justify-between flex-wrap gap-2">
        <div>
          <div className="font-pixel text-[9px] text-deepBlack/70">ARCHIVE DATA // CHANNEL 02</div>
          <h2 className="font-archivo text-2xl sm:text-3xl uppercase tracking-tight">
            BIOGRAPHY & JOURNEY
          </h2>
        </div>
        <div className="flex gap-1.5">
          <button
            onClick={() => {
              onPlayClick?.();
              setActiveTab('narrative');
            }}
            className={`retro-btn px-2.5 py-1 text-[9px] font-pixel border-2 border-deepBlack ${
              activeTab === 'narrative' ? 'bg-deepBlack text-acid shadow-pixel-sm' : 'bg-paperWhite hover:bg-white'
            }`}
          >
            NARRATIVE
          </button>
          <button
            onClick={() => {
              onPlayClick?.();
              setActiveTab('timeline');
            }}
            className={`retro-btn px-2.5 py-1 text-[9px] font-pixel border-2 border-deepBlack ${
              activeTab === 'timeline' ? 'bg-deepBlack text-acid shadow-pixel-sm' : 'bg-paperWhite hover:bg-white'
            }`}
          >
            TIMELINE
          </button>
          <button
            onClick={() => {
              onPlayClick?.();
              setActiveTab('leadership');
            }}
            className={`retro-btn px-2.5 py-1 text-[9px] font-pixel border-2 border-deepBlack ${
              activeTab === 'leadership' ? 'bg-deepBlack text-acid shadow-pixel-sm' : 'bg-paperWhite hover:bg-white'
            }`}
          >
            ROLES
          </button>
        </div>
      </div>

      {/* Tab 1: Narrative */}
      {activeTab === 'narrative' && (
        <div className="space-y-4 my-auto">
          <div className="bg-paperWhite border-3 border-deepBlack p-4 shadow-pixel">
            <div className="flex items-center gap-2 mb-2 font-pixel text-[10px] text-deepBlack/80">
              <User className="w-4 h-4 text-deepBlack" />
              <span>THE PERFORMER-ENGINEER PARADIGM</span>
            </div>
            <p className="font-display text-sm sm:text-base leading-relaxed text-deepBlack">
              {profile.shortBio}
            </p>
            <div className="border-t-2 border-deepBlack/20 my-3 pt-3">
              <p className="font-display text-xs sm:text-sm leading-relaxed text-deepBlack/90">
                With a background in music, I understand rhythm, harmony, and the importance of user experience timing. These principles guide my approach to building interfaces and systems that feel natural and intuitive. I am constantly exploring the intersection of art and technology, always looking for ways to make the digital world more elegant and human-centered.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-deepBlack text-paperWhite p-3.5 border-2 border-deepBlack shadow-pixel-sm">
              <div className="font-pixel text-[9px] text-acid mb-1">ACADEMIC FOUNDATION</div>
              <div className="font-archivo text-base text-paperWhite">RIT KOTTAYAM</div>
              <div className="font-vt text-xs text-paperWhite/80 mt-1">
                Rajiv Gandhi Institute of Technology • Computer Science & Engineering
              </div>
            </div>

            <div className="bg-deepBlack text-paperWhite p-3.5 border-2 border-deepBlack shadow-pixel-sm">
              <div className="font-pixel text-[9px] text-signalCyan mb-1">CRAFT PHILOSOPHY</div>
              <div className="font-archivo text-base text-paperWhite">LOGIC + HARMONY</div>
              <div className="font-vt text-xs text-paperWhite/80 mt-1">
                Clean architectures, performant rendering, and creative intuition in every commit.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Timeline (2022-2025) */}
      {activeTab === 'timeline' && (
        <div className="space-y-3">
          <div className="font-pixel text-[9px] text-deepBlack/70 flex items-center gap-1.5">
            <History className="w-3.5 h-3.5 text-deepBlack" />
            <span>DEVELOPER EVOLUTION LOG:</span>
          </div>

          <div className="space-y-2.5">
            {milestones.map((m) => (
              <div
                key={m.year}
                className="bg-paperWhite border-2 border-deepBlack p-3 shadow-pixel-sm flex items-start gap-3"
              >
                <div className="bg-deepBlack text-acid font-pixel text-xs px-2 py-1.5 border border-deepBlack shadow-sm text-center min-w-[58px]">
                  {m.year}
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-archivo text-sm sm:text-base tracking-tight">{m.phase}</span>
                    <span className="font-vt text-xs text-deepBlack/70 bg-acid px-1.5 py-0.2 border border-deepBlack">
                      {m.subtitle}
                    </span>
                  </div>
                  <p className="font-display text-xs sm:text-sm text-deepBlack/85 mt-1 leading-snug">
                    {m.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 3: Leadership & Campus Organizing */}
      {activeTab === 'leadership' && (
        <div className="space-y-3">
          <div className="font-pixel text-[9px] text-deepBlack/70 flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5 text-deepBlack" />
            <span>INSTITUTIONAL LEADERSHIP & RESPONSIBILITIES:</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {leadership.map((item, idx) => (
              <div
                key={idx}
                className="bg-paperWhite border-2 border-deepBlack p-2.5 shadow-pixel-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-pixel text-[8px] bg-deepBlack text-acid px-1.5 py-0.5">
                      {item.period}
                    </span>
                    <span className="font-vt text-xs font-bold text-deepBlack/70">{item.org}</span>
                  </div>
                  <div className="font-archivo text-xs sm:text-sm leading-tight text-deepBlack">
                    {item.role}
                  </div>
                  <p className="font-display text-[11px] sm:text-xs text-deepBlack/80 mt-1 leading-tight">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}


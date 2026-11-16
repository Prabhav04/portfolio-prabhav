import React, { useState, useEffect } from 'react';

export function OnScreenDisplay({ currentChannel, volume, isMuted }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(true);
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3800);
    return () => clearTimeout(timer);
  }, [currentChannel]);

  if (!visible) return null;

  return (
    <div className="absolute top-4 left-5 z-30 pointer-events-none select-none font-pixel text-deepBlack animate-pulse-fast">
      <div className="bg-acid/95 border-2 border-deepBlack px-3 py-1.5 shadow-pixel text-[11px] leading-tight space-y-1">
        <div className="flex items-center space-x-2">
          <span className="inline-block w-2 h-2 bg-red-600 rounded-full animate-ping mr-1" />
          <span className="font-bold tracking-wider">{currentChannel.code}</span>
          <span className="text-[9px] bg-deepBlack text-acid px-1 py-0.5">{currentChannel.name}</span>
        </div>
        <div className="text-[9px] font-vt text-deepBlack/80 tracking-widest flex items-center justify-between gap-3">
          <span>{currentChannel.frequency}</span>
          <span>{isMuted ? 'AUDIO: MUTED' : 'STEREO HI-FI'}</span>
        </div>
      </div>
    </div>
  );
}


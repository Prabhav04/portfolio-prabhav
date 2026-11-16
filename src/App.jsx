import React, { useState, useEffect, useCallback } from 'react';
import { PORTFOLIO_DATA } from './data/portfolioData';
import { useRetroAudio } from './hooks/useRetroAudio';
import { EditorialShell } from './components/EditorialShell';
import { TvFrame } from './components/TvFrame';
import { TvGuideModal } from './components/TvGuideModal';
import { RemoteControl } from './components/RemoteControl';

import { HomeChannel } from './components/channels/HomeChannel';
import { AboutChannel } from './components/channels/AboutChannel';
import { ProjectsChannel } from './components/channels/ProjectsChannel';
import { TechStackChannel } from './components/channels/TechStackChannel';
import { FrequenciesChannel } from './components/channels/FrequenciesChannel';
import { ContactChannel } from './components/channels/ContactChannel';
import { Radio, Music } from 'lucide-react';

export function App() {
  const { channels } = PORTFOLIO_DATA;

  // TV State
  const [currentChannelId, setCurrentChannelId] = useState(1);
  const [historyStack, setHistoryStack] = useState([]);
  const [isPoweredOn, setIsPoweredOn] = useState(true);
  const [powerTransition, setPowerTransition] = useState('idle'); // 'idle' | 'turning-off' | 'turning-on'
  const [isTuning, setIsTuning] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scanlinesEnabled, setScanlinesEnabled] = useState(true);
  const [isMobileRemoteOpen, setIsMobileRemoteOpen] = useState(false);

  // Audio Hook with BGM & Analyser
  const {
    soundEnabled,
    toggleSound,
    bgmEnabled,
    toggleBgm,
    getAnalyser,
    playDialClick,
    playStaticSweep,
    playPowerTone,
    playMenuChime,
    playNote
  } = useRetroAudio();

  // Channel Change Handler
  const handleSelectChannel = useCallback((channelId) => {
    if (channelId === currentChannelId) return;

    playDialClick();
    playStaticSweep(0.35);

    setIsTuning(true);
    setHistoryStack(prev => [...prev, currentChannelId]);
    setCurrentChannelId(channelId);

    const timer = setTimeout(() => {
      setIsTuning(false);
    }, 320);

    return () => clearTimeout(timer);
  }, [currentChannelId, playDialClick, playStaticSweep]);

  // Stepper: Previous Channel
  const handlePrevChannel = useCallback(() => {
    const prevId = currentChannelId === 1 ? channels.length : currentChannelId - 1;
    handleSelectChannel(prevId);
  }, [currentChannelId, channels.length, handleSelectChannel]);

  // Stepper: Next Channel
  const handleNextChannel = useCallback(() => {
    const nextId = currentChannelId === channels.length ? 1 : currentChannelId + 1;
    handleSelectChannel(nextId);
  }, [currentChannelId, channels.length, handleSelectChannel]);

  // History Back Button
  const handleBack = useCallback(() => {
    if (historyStack.length === 0) return;
    const lastChannel = historyStack[historyStack.length - 1];
    setHistoryStack(prev => prev.slice(0, -1));

    playDialClick();
    playStaticSweep(0.3);
    setIsTuning(true);
    setCurrentChannelId(lastChannel);

    setTimeout(() => {
      setIsTuning(false);
    }, 300);
  }, [historyStack, playDialClick, playStaticSweep]);

  // Power Toggle with Realistic Phosphor Collapse Effect
  const handleTogglePower = useCallback(() => {
    if (isPoweredOn) {
      setPowerTransition('turning-off');
      playPowerTone(false);
      setTimeout(() => {
        setIsPoweredOn(false);
        setPowerTransition('idle');
      }, 450);
    } else {
      setIsPoweredOn(true);
      setPowerTransition('turning-on');
      playPowerTone(true);
      setTimeout(() => {
        setPowerTransition('idle');
      }, 450);
    }
  }, [isPoweredOn, playPowerTone]);

  // Menu Modal Toggle
  const handleToggleMenu = useCallback(() => {
    setIsMenuOpen(prev => {
      const next = !prev;
      playMenuChime(!next);
      return next;
    });
  }, [playMenuChime]);

  // Scanlines Toggle
  const handleToggleScanlines = useCallback(() => {
    playDialClick();
    setScanlinesEnabled(prev => !prev);
  }, [playDialClick]);

  // Global Keyboard Shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;

      const key = e.key.toLowerCase();

      if (['1', '2', '3', '4', '5', '6'].includes(key)) {
        e.preventDefault();
        const chanNum = parseInt(key, 10);
        handleSelectChannel(chanNum);
      } else if (key === 'm') {
        e.preventDefault();
        handleToggleMenu();
      } else if (key === 's') {
        e.preventDefault();
        toggleSound();
      } else if (key === 'b') {
        e.preventDefault();
        toggleBgm();
      } else if (key === 'escape') {
        if (isMenuOpen) {
          setIsMenuOpen(false);
        }
        if (isMobileRemoteOpen) {
          setIsMobileRemoteOpen(false);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleSelectChannel, handleToggleMenu, toggleSound, toggleBgm, isMenuOpen, isMobileRemoteOpen]);

  // Render current active channel screen
  const renderCurrentChannel = () => {
    switch (currentChannelId) {
      case 1:
        return (
          <HomeChannel
            onSelectChannel={handleSelectChannel}
            onOpenMenu={handleToggleMenu}
            onPlayClick={playDialClick}
          />
        );
      case 2:
        return (
          <AboutChannel
            onPlayClick={playDialClick}
          />
        );
      case 3:
        return (
          <ProjectsChannel
            onPlayClick={playDialClick}
          />
        );
      case 4:
        return (
          <TechStackChannel
            onPlayClick={playDialClick}
          />
        );
      case 5:
        return (
          <FrequenciesChannel
            onPlayClick={playDialClick}
            onPlayNote={playNote}
            getAnalyser={getAnalyser}
            isBgmActive={bgmEnabled}
          />
        );
      case 6:
        return (
          <ContactChannel
            onPlayClick={playDialClick}
          />
        );
      default:
        return (
          <HomeChannel
            onSelectChannel={handleSelectChannel}
            onOpenMenu={handleToggleMenu}
            onPlayClick={playDialClick}
          />
        );
    }
  };

  return (
    <EditorialShell currentChannelId={currentChannelId}>
      <div className="w-full flex items-center justify-center gap-4">
        {/* Vintage Television Hardware Set */}
        <TvFrame
          channels={channels}
          currentChannelId={currentChannelId}
          onSelectChannel={handleSelectChannel}
          onPrevChannel={handlePrevChannel}
          onNextChannel={handleNextChannel}
          onBack={handleBack}
          canGoBack={historyStack.length > 0}
          isPoweredOn={isPoweredOn}
          onTogglePower={handleTogglePower}
          soundEnabled={soundEnabled}
          onToggleSound={toggleSound}
          scanlinesEnabled={scanlinesEnabled}
          onToggleScanlines={handleToggleScanlines}
          onOpenMenu={handleToggleMenu}
          onPlayClick={playDialClick}
          isTuning={isTuning}
          powerTransition={powerTransition}
        >
          {renderCurrentChannel()}
        </TvFrame>

        {/* Handheld Remote Control (Desktop: docked side-panel; Mobile: drawer) */}
        <RemoteControl
          channels={channels}
          currentChannelId={currentChannelId}
          onSelectChannel={handleSelectChannel}
          onPrevChannel={handlePrevChannel}
          onNextChannel={handleNextChannel}
          onTogglePower={handleTogglePower}
          isPoweredOn={isPoweredOn}
          soundEnabled={soundEnabled}
          onToggleSound={toggleSound}
          bgmEnabled={bgmEnabled}
          onToggleBgm={toggleBgm}
          onOpenMenu={handleToggleMenu}
          onPlayClick={playDialClick}
          isOpenMobile={isMobileRemoteOpen}
          onCloseMobile={() => setIsMobileRemoteOpen(false)}
        />
      </div>

      {/* Mobile Floating Action Button: Quick Remote Trigger */}
      <div className="xl:hidden fixed bottom-4 right-4 z-40 flex items-center gap-2">
        {/* Quick BGM toggle badge */}
        <button
          onClick={() => {
            playDialClick();
            toggleBgm();
          }}
          className={`retro-btn px-2.5 py-1.5 rounded-full border-2 border-deepBlack font-pixel text-[8px] flex items-center gap-1 shadow-pixel ${
            bgmEnabled ? 'bg-signalCyan text-deepBlack font-bold' : 'bg-zinc-900 text-paperWhite'
          }`}
        >
          <Music className="w-3 h-3" />
          <span>{bgmEnabled ? 'BGM: ON' : 'BGM: OFF'}</span>
        </button>

        {/* Mobile Remote Drawer Launcher */}
        <button
          onClick={() => {
            playDialClick();
            setIsMobileRemoteOpen(true);
          }}
          className="retro-btn bg-acid text-deepBlack font-pixel text-[9px] px-3 py-1.5 rounded-full border-2 border-deepBlack shadow-pixel font-bold flex items-center gap-1.5 hover:bg-acid-hover"
        >
          <Radio className="w-3.5 h-3.5 animate-pulse" />
          <span>IR REMOTE</span>
        </button>
      </div>

      {/* Fullscreen TV Guide / EPG Menu Modal */}
      <TvGuideModal
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        channels={channels}
        currentChannelId={currentChannelId}
        onSelectChannel={handleSelectChannel}
        onPlayClick={playDialClick}
      />
    </EditorialShell>
  );
}

export default App;

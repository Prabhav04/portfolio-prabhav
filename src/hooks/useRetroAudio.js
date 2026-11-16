import { useEffect, useRef, useState, useCallback } from 'react';

export function useRetroAudio() {
  const [soundEnabled, setSoundEnabled] = useState(() => {
    const saved = localStorage.getItem('prabhav_tv_sound');
    return saved !== null ? saved === 'true' : true;
  });

  const [bgmEnabled, setBgmEnabled] = useState(false);

  const audioCtxRef = useRef(null);
  const masterGainRef = useRef(null);
  const analyserRef = useRef(null);
  const bgmLoopRef = useRef(null);
  const isBgmPlayingRef = useRef(false);

  // Initialize Audio Context with Master AnalyserNode for real-time Oscilloscope
  const initAudio = useCallback(() => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        const ctx = new AudioCtx();
        audioCtxRef.current = ctx;

        // Analyser node for Oscilloscope visualizer
        const analyser = ctx.createAnalyser();
        analyser.fftSize = 256;
        analyserRef.current = analyser;

        // Master Gain
        const masterGain = ctx.createGain();
        masterGain.gain.setValueAtTime(soundEnabled ? 1 : 0, ctx.currentTime);
        masterGainRef.current = masterGain;

        masterGain.connect(analyser);
        analyser.connect(ctx.destination);
      }
    }
    if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
    return audioCtxRef.current;
  }, [soundEnabled]);

  // Sync master gain when sound is toggled
  useEffect(() => {
    if (masterGainRef.current && audioCtxRef.current) {
      masterGainRef.current.gain.setValueAtTime(
        soundEnabled ? 1 : 0,
        audioCtxRef.current.currentTime
      );
    }
  }, [soundEnabled]);

  const toggleSound = useCallback(() => {
    setSoundEnabled(prev => {
      const next = !prev;
      localStorage.setItem('prabhav_tv_sound', String(next));
      return next;
    });
  }, []);

  // Mechanical rotary dial click
  const playDialClick = useCallback(() => {
    if (!soundEnabled) return;
    try {
      const ctx = initAudio();
      if (!ctx || !masterGainRef.current) return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(320, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(80, ctx.currentTime + 0.04);

      gain.gain.setValueAtTime(0.25, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);

      osc.connect(gain);
      gain.connect(masterGainRef.current);

      osc.start();
      osc.stop(ctx.currentTime + 0.045);
    } catch {
      // Ignored
    }
  }, [soundEnabled, initAudio]);

  // Analog static noise sweep on channel tune
  const playStaticSweep = useCallback((duration = 0.35) => {
    if (!soundEnabled) return;
    try {
      const ctx = initAudio();
      if (!ctx || !masterGainRef.current) return;

      const bufferSize = ctx.sampleRate * duration;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);

      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * 0.35;
      }

      const noise = ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1400, ctx.currentTime);
      filter.frequency.exponentialRampToValueAtTime(350, ctx.currentTime + duration);
      filter.Q.value = 3;

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(masterGainRef.current);

      noise.start();
    } catch {
      // Ignored
    }
  }, [soundEnabled, initAudio]);

  // CRT Degauss / Power On & Power Off Collapse Sound
  const playPowerTone = useCallback((poweringOn = true) => {
    if (!soundEnabled) return;
    try {
      const ctx = initAudio();
      if (!ctx || !masterGainRef.current) return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      if (poweringOn) {
        // High voltage flyback transformer charge
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(50, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(920, ctx.currentTime + 0.35);

        gain.gain.setValueAtTime(0.28, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.4);

        osc.connect(gain);
        gain.connect(masterGainRef.current);

        osc.start();
        osc.stop(ctx.currentTime + 0.4);
      } else {
        // CRT power discharge / capacitor drain "pew-thump"
        osc.type = 'sine';
        osc.frequency.setValueAtTime(800, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(20, ctx.currentTime + 0.4);

        gain.gain.setValueAtTime(0.3, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.45);

        osc.connect(gain);
        gain.connect(masterGainRef.current);

        osc.start();
        osc.stop(ctx.currentTime + 0.45);
      }
    } catch {
      // Ignored
    }
  }, [soundEnabled, initAudio]);

  // Menu Chime
  const playMenuChime = useCallback((isClose = false) => {
    if (!soundEnabled) return;
    try {
      const ctx = initAudio();
      if (!ctx || !masterGainRef.current) return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'square';
      const startFreq = isClose ? 784 : 523.25;
      const endFreq = isClose ? 440 : 880;

      osc.frequency.setValueAtTime(startFreq, ctx.currentTime);
      osc.frequency.setValueAtTime(endFreq, ctx.currentTime + 0.05);

      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);

      osc.connect(gain);
      gain.connect(masterGainRef.current);

      osc.start();
      osc.stop(ctx.currentTime + 0.13);
    } catch {
      // Ignored
    }
  }, [soundEnabled, initAudio]);

  // Musical note played via synth with rich harmonics
  const playNote = useCallback((freq, duration = 0.6) => {
    if (!soundEnabled) return;
    try {
      const ctx = initAudio();
      if (!ctx || !masterGainRef.current) return;

      // Primary oscillator
      const osc1 = ctx.createOscillator();
      // Octave shimmer oscillator
      const osc2 = ctx.createOscillator();
      const gain = ctx.createGain();

      osc1.type = 'sawtooth';
      osc1.frequency.setValueAtTime(freq, ctx.currentTime);

      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(freq * 2, ctx.currentTime);

      // Low pass filter for analog warmth
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1600, ctx.currentTime);

      gain.gain.setValueAtTime(0.001, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.28, ctx.currentTime + 0.06);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

      osc1.connect(filter);
      osc2.connect(filter);
      filter.connect(gain);
      gain.connect(masterGainRef.current);

      osc1.start();
      osc2.start();
      osc1.stop(ctx.currentTime + duration);
      osc2.stop(ctx.currentTime + duration);
    } catch {
      // Ignored
    }
  }, [soundEnabled, initAudio]);

  // Lo-Fi Procedural Ambient BGM Generator (Dreamy tape chords)
  const stopBgm = useCallback(() => {
    if (bgmLoopRef.current) {
      clearInterval(bgmLoopRef.current);
      bgmLoopRef.current = null;
    }
    isBgmPlayingRef.current = false;
  }, []);

  const startBgm = useCallback(() => {
    stopBgm();
    isBgmPlayingRef.current = true;

    // Vintage 90s dream progression: Fmaj7 -> G6 -> Em7 -> Am7
    const chords = [
      [174.61, 220.00, 261.63, 329.63], // Fmaj7 (F3, A3, C4, E4)
      [196.00, 246.94, 293.66, 329.63], // G6 (G3, B3, D4, E4)
      [164.81, 196.00, 246.94, 293.66], // Em7 (E3, G3, B3, D4)
      [220.00, 261.63, 329.63, 392.00]  // Am7 (A3, C4, E4, G4)
    ];

    let chordIndex = 0;

    const playChordStep = () => {
      if (!isBgmPlayingRef.current) return;
      try {
        const ctx = initAudio();
        if (!ctx || !masterGainRef.current) return;

        const currentChord = chords[chordIndex % chords.length];
        chordIndex++;

        currentChord.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          const filter = ctx.createBiquadFilter();

          osc.type = 'triangle';
          // Subtle detune for tape warble
          const detuneCents = (Math.random() - 0.5) * 8;
          osc.detune.setValueAtTime(detuneCents, ctx.currentTime);
          osc.frequency.setValueAtTime(freq, ctx.currentTime);

          filter.type = 'lowpass';
          filter.frequency.setValueAtTime(750, ctx.currentTime);

          const noteDuration = 2.4;
          const stagger = idx * 0.05;

          gain.gain.setValueAtTime(0.001, ctx.currentTime + stagger);
          gain.gain.linearRampToValueAtTime(0.04, ctx.currentTime + stagger + 0.4);
          gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + stagger + noteDuration);

          osc.connect(filter);
          filter.connect(gain);
          gain.connect(masterGainRef.current);

          osc.start(ctx.currentTime + stagger);
          osc.stop(ctx.currentTime + stagger + noteDuration);
        });
      } catch {
        // Ignored
      }
    };

    playChordStep();
    bgmLoopRef.current = setInterval(playChordStep, 2500);
  }, [initAudio, stopBgm]);

  const toggleBgm = useCallback(() => {
    setBgmEnabled(prev => {
      const next = !prev;
      if (next) {
        startBgm();
      } else {
        stopBgm();
      }
      return next;
    });
  }, [startBgm, stopBgm]);

  // Clean up BGM on unmount
  useEffect(() => {
    return () => {
      stopBgm();
    };
  }, [stopBgm]);

  return {
    soundEnabled,
    toggleSound,
    bgmEnabled,
    toggleBgm,
    getAnalyser: () => analyserRef.current,
    playDialClick,
    playStaticSweep,
    playPowerTone,
    playMenuChime,
    playNote
  };
}

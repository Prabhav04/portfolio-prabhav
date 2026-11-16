import React, { useEffect, useRef, useState } from 'react';
import { Activity, Radio, Zap } from 'lucide-react';

export function Oscilloscope({ getAnalyser, isPlayingNote, isBgmActive }) {
  const canvasRef = useRef(null);
  const [viewMode, setViewMode] = useState('waveform'); // 'waveform' or 'fft'

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;
    let phase = 0;

    const render = () => {
      const width = canvas.width;
      const height = canvas.height;
      phase += 0.05;

      // Clear with dark phosphor CRT green-black
      ctx.fillStyle = '#0a0f0a';
      ctx.fillRect(0, 0, width, height);

      // Draw Oscilloscope Reticle Grid
      ctx.strokeStyle = 'rgba(217, 227, 42, 0.12)';
      ctx.lineWidth = 1;

      // Vertical grid lines
      for (let x = 0; x < width; x += 20) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      // Horizontal grid lines
      for (let y = 0; y < height; y += 15) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Center crosshair axis
      ctx.strokeStyle = 'rgba(217, 227, 42, 0.25)';
      ctx.beginPath();
      ctx.moveTo(0, height / 2);
      ctx.lineTo(width, height / 2);
      ctx.moveTo(width / 2, 0);
      ctx.lineTo(width / 2, height);
      ctx.stroke();

      const analyser = getAnalyser?.();

      if (viewMode === 'waveform') {
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#D9E32A';
        ctx.shadowColor = '#D9E32A';
        ctx.shadowBlur = 8;
        ctx.beginPath();

        if (analyser) {
          const bufferLength = analyser.fftSize;
          const dataArray = new Uint8Array(bufferLength);
          analyser.getByteTimeDomainData(dataArray);

          const sliceWidth = width / bufferLength;
          let x = 0;

          for (let i = 0; i < bufferLength; i++) {
            const v = dataArray[i] / 128.0;
            const y = (v * height) / 2;

            if (i === 0) {
              ctx.moveTo(x, y);
            } else {
              ctx.lineTo(x, y);
            }

            x += sliceWidth;
          }
        } else {
          // Idle ambient analog sine wave simulation
          for (let x = 0; x < width; x++) {
            const amp = isBgmActive ? 18 : 6;
            const y = height / 2 + Math.sin(x * 0.08 + phase) * amp;
            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
        }

        ctx.stroke();
        ctx.shadowBlur = 0;
      } else {
        // FFT Frequency bars
        ctx.fillStyle = '#00E5FF';
        ctx.shadowColor = '#00E5FF';
        ctx.shadowBlur = 6;

        if (analyser) {
          const bufferLength = analyser.frequencyBinCount;
          const dataArray = new Uint8Array(bufferLength);
          analyser.getByteFrequencyData(dataArray);

          const barWidth = (width / bufferLength) * 2.5;
          let x = 0;

          for (let i = 0; i < bufferLength; i++) {
            const barHeight = (dataArray[i] / 255) * height;
            ctx.fillRect(x, height - barHeight, barWidth - 1, barHeight);
            x += barWidth;
          }
        } else {
          // Idle ambient bars
          const numBars = 24;
          const barWidth = width / numBars;
          for (let i = 0; i < numBars; i++) {
            const barHeight = 8 + Math.sin(i * 0.5 + phase) * 6;
            ctx.fillRect(i * barWidth, height - barHeight, barWidth - 2, barHeight);
          }
        }
        ctx.shadowBlur = 0;
      }

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [getAnalyser, viewMode, isBgmActive]);

  return (
    <div className="bg-[#0e140e] border-3 border-deepBlack p-3 rounded-lg shadow-pixel mb-3">
      {/* Top Scope Header */}
      <div className="flex items-center justify-between pb-2 mb-2 border-b border-acid/20 text-acid font-pixel text-[8px]">
        <div className="flex items-center gap-1.5">
          <Activity className="w-3.5 h-3.5 text-acid animate-pulse" />
          <span>TEKTRONIX // OSCILLOSCOPE MODEL 465</span>
        </div>

        <div className="flex gap-1">
          <button
            onClick={() => setViewMode('waveform')}
            className={`px-1.5 py-0.5 border border-acid/40 rounded transition-all ${
              viewMode === 'waveform' ? 'bg-acid text-deepBlack font-bold' : 'text-acid/70 hover:text-acid'
            }`}
          >
            WAVE
          </button>
          <button
            onClick={() => setViewMode('fft')}
            className={`px-1.5 py-0.5 border border-acid/40 rounded transition-all ${
              viewMode === 'fft' ? 'bg-signalCyan text-deepBlack font-bold' : 'text-signalCyan/70 hover:text-signalCyan'
            }`}
          >
            FFT
          </button>
        </div>
      </div>

      {/* Canvas Scope Screen */}
      <div className="relative w-full h-24 sm:h-28 rounded overflow-hidden border-2 border-acid/40 shadow-inner">
        <canvas
          ref={canvasRef}
          width={360}
          height={110}
          className="w-full h-full object-cover pixel-crisp"
        />

        {/* Oscilloscope Corner Overlay Labels */}
        <div className="absolute top-1 left-2 pointer-events-none font-vt text-[10px] text-acid/80 tracking-widest">
          CAL: 1V/DIV • 50μs
        </div>
        <div className="absolute top-1 right-2 pointer-events-none font-vt text-[10px] text-acid/80 tracking-widest">
          {isPlayingNote ? 'AUDIO IN: PEAK' : isBgmActive ? 'BGM: TAPE LOOP' : 'INPUT: STEREO GND'}
        </div>
      </div>
    </div>
  );
}

import React, { useEffect, useRef } from 'react';

export function CrtEffects({ isTuning, isPoweredOn, scanlinesEnabled = true }) {
  const canvasRef = useRef(null);

  // Procedural static noise animation on canvas for performance
  useEffect(() => {
    if (!isTuning && isPoweredOn) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;
    canvas.width = 320;
    canvas.height = 240;

    const renderNoise = () => {
      const imgData = ctx.createImageData(canvas.width, canvas.height);
      const data = imgData.data;
      const len = data.length;

      for (let i = 0; i < len; i += 4) {
        const val = Math.random() > 0.5 ? 240 : 15;
        data[i] = val;     // R
        data[i + 1] = val; // G
        data[i + 2] = val; // B
        data[i + 3] = 255; // Alpha
      }

      ctx.putImageData(imgData, 0, 0);
      animationId = requestAnimationFrame(renderNoise);
    };

    renderNoise();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isTuning, isPoweredOn]);

  return (
    <>
      {/* Static Noise Overlay when Tuning or Off */}
      {(!isPoweredOn || isTuning) && (
        <div className="absolute inset-0 z-40 bg-deepBlack flex items-center justify-center overflow-hidden">
          <canvas
            ref={canvasRef}
            className="w-full h-full object-cover opacity-85 mix-blend-screen pixel-crisp"
          />
          {!isPoweredOn && (
            <div className="absolute font-pixel text-acid text-xs tracking-widest animate-pulse-fast bg-deepBlack/80 px-3 py-1 border border-acid">
              STANDBY // POWER OFF
            </div>
          )}
          {isPoweredOn && isTuning && (
            <div className="absolute font-pixel text-deepBlack text-xs tracking-widest bg-acid px-3 py-1 border-2 border-deepBlack shadow-pixel">
              TUNING FREQUENCY...
            </div>
          )}
        </div>
      )}

      {/* CRT Scanline Grate */}
      {scanlinesEnabled && (
        <div className="crt-scanlines absolute inset-0 z-30 pointer-events-none" />
      )}

      {/* Glass Glare Reflection */}
      <div className="crt-glass-glare absolute inset-0 z-30 pointer-events-none rounded-[1.75rem]" />

      {/* Phosphor Corner Vignette */}
      <div 
        className="absolute inset-0 z-20 pointer-events-none rounded-[1.75rem]"
        style={{
          boxShadow: 'inset 0 0 35px rgba(0, 0, 0, 0.45), inset 0 0 8px rgba(0, 0, 0, 0.8)'
        }}
      />
    </>
  );
}

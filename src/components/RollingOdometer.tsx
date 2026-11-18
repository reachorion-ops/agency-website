import React, { useEffect, useRef } from 'react';

/**
 * HeroMetricsOdometer:
 * Synchronized, GPU-accelerated mechanical odometer triad for the Hero section.
 * - Single master requestAnimationFrame loop (zero timing mismatch)
 * - Zero layout reflows (uses transform scaleX & translateY with translateZ layer promotion)
 * - Runs once automatically on page open / refresh
 * - No hover replay button or jitter
 */
export const HeroMetricsOdometer: React.FC = () => {
  // Metric 1: *100 Core Web Vitals
  const m1Col2 = useRef<HTMLDivElement>(null); // hundreds
  const m1Col1 = useRef<HTMLDivElement>(null); // tens
  const m1Col0 = useRef<HTMLDivElement>(null); // units
  const m1Bar = useRef<HTMLDivElement>(null);
  const m1Ast = useRef<HTMLSpanElement>(null);

  // Metric 2: *0.18s Global Edge TTFB
  const m2Col1 = useRef<HTMLDivElement>(null); // tenths
  const m2Col0 = useRef<HTMLDivElement>(null); // hundredths
  const m2Bar = useRef<HTMLDivElement>(null);
  const m2Ast = useRef<HTMLSpanElement>(null);

  // Metric 3: *100% Headless Decoupled
  const m3Col2 = useRef<HTMLDivElement>(null); // hundreds
  const m3Col1 = useRef<HTMLDivElement>(null); // tens
  const m3Col0 = useRef<HTMLDivElement>(null); // units
  const m3Bar = useRef<HTMLDivElement>(null);
  const m3Ast = useRef<HTMLSpanElement>(null);

  const DURATION = 1200; // ms (snappy, smooth and zero main-thread stall)

  // Cubic Ease-Out deceleration formula matching mechanical odometer physics
  const ease = (t: number) => 1 - Math.pow(1 - t, 3.2);

  const renderAll = (p: number, isFinal: boolean) => {
    if (isFinal) {
      // 1. Final lock for Metric 1 (*100)
      if (m1Col2.current) m1Col2.current.style.transform = 'translateY(-1.15em) translateZ(0)';
      if (m1Col1.current) m1Col1.current.style.transform = 'translateY(0em) translateZ(0)';
      if (m1Col0.current) m1Col0.current.style.transform = 'translateY(0em) translateZ(0)';

      // 2. Final lock for Metric 3 (*100%)
      if (m3Col2.current) m3Col2.current.style.transform = 'translateY(-1.15em) translateZ(0)';
      if (m3Col1.current) m3Col1.current.style.transform = 'translateY(0em) translateZ(0)';
      if (m3Col0.current) m3Col0.current.style.transform = 'translateY(0em) translateZ(0)';

      // 3. Final lock for Metric 2 (*0.18s)
      if (m2Col1.current) m2Col1.current.style.transform = 'translateY(-1.15em) translateZ(0)';
      if (m2Col0.current) m2Col0.current.style.transform = 'translateY(-9.2em) translateZ(0)'; // 8 * 1.15em

      // 4. Progress bars to 100% (GPU scaleX only, zero forced reflow)
      const fullScale = 'scaleX(1) translateZ(0)';
      if (m1Bar.current) m1Bar.current.style.transform = fullScale;
      if (m2Bar.current) m2Bar.current.style.transform = fullScale;
      if (m3Bar.current) m3Bar.current.style.transform = fullScale;
    } else {
      // Metric 1 & 3: value 0 to 100
      const v100 = 100 * p;
      const pos0 = (v100 % 10) * 1.15;

      const x1 = v100 / 10;
      const f1 = x1 - Math.floor(x1);
      const k1 = Math.min(1, Math.max(0, (f1 - 0.9) * 10));
      let pos1 = Math.floor(x1) + k1;
      pos1 = (pos1 >= 10 ? pos1 % 10 : pos1) * 1.15;

      const x2 = v100 / 100;
      const f2 = x2 - Math.floor(x2);
      const k2 = Math.min(1, Math.max(0, (f2 - 0.9) * 10));
      const pos2 = Math.min(1, Math.floor(x2) + k2) * 1.15;

      const t0 = `translateY(${-pos0}em) translateZ(0)`;
      const t1 = `translateY(${-pos1}em) translateZ(0)`;
      const t2 = `translateY(${-pos2}em) translateZ(0)`;

      if (m1Col0.current) m1Col0.current.style.transform = t0;
      if (m1Col1.current) m1Col1.current.style.transform = t1;
      if (m1Col2.current) m1Col2.current.style.transform = t2;

      if (m3Col0.current) m3Col0.current.style.transform = t0;
      if (m3Col1.current) m3Col1.current.style.transform = t1;
      if (m3Col2.current) m3Col2.current.style.transform = t2;

      // Metric 2: value 0 to 18 (for 0.18s)
      const v18 = 18 * p;
      const pos2_0 = (v18 % 10) * 1.15;

      const x2_1 = v18 / 10;
      const f2_1 = x2_1 - Math.floor(x2_1);
      const k2_1 = Math.min(1, Math.max(0, (f2_1 - 0.9) * 10));
      let pos2_1 = Math.floor(x2_1) + k2_1;
      pos2_1 = (pos2_1 >= 10 ? pos2_1 % 10 : pos2_1) * 1.15;

      if (m2Col0.current) m2Col0.current.style.transform = `translateY(${-pos2_0}em) translateZ(0)`;
      if (m2Col1.current) m2Col1.current.style.transform = `translateY(${-pos2_1}em) translateZ(0)`;

      // Hairline progress bar via scaleX (GPU compositor only, zero layout reflows)
      const scale = `scaleX(${p}) translateZ(0)`;
      if (m1Bar.current) m1Bar.current.style.transform = scale;
      if (m2Bar.current) m2Bar.current.style.transform = scale;
      if (m3Bar.current) m3Bar.current.style.transform = scale;
    }
  };

  useEffect(() => {
    // Check prefers-reduced-motion
    const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      renderAll(1, true);
      return;
    }

    let rafId = 0;
    let timerId: ReturnType<typeof setTimeout>;

    // Pre-lock target numbers immediately to guarantee zero initial CLS and zero main-thread stall
    renderAll(1, true);

    const startRoll = () => {
      renderAll(0, false);
      let t0: number | null = null;

      const frame = (ts: number) => {
        if (t0 === null) t0 = ts;
        const elapsed = ts - t0;
        const t = Math.min(1, elapsed / DURATION);
        const p = ease(t);

        if (t < 1) {
          renderAll(p, false);
          rafId = requestAnimationFrame(frame);
        } else {
          renderAll(1, true);
        }
      };

      rafId = requestAnimationFrame(frame);
    };

    // Defer the rolling animation until browser main thread is completely idle after FCP/LCP
    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      const idleId = (window as unknown as { requestIdleCallback: (cb: () => void, opts: { timeout: number }) => number })
        .requestIdleCallback(() => {
          timerId = setTimeout(startRoll, 400);
        }, { timeout: 2500 });

      return () => {
        clearTimeout(timerId);
        cancelAnimationFrame(rafId);
        if ('cancelIdleCallback' in window) {
          (window as unknown as { cancelIdleCallback: (id: number) => void }).cancelIdleCallback(idleId);
        }
      };
    } else {
      timerId = setTimeout(startRoll, 800);
      return () => {
        clearTimeout(timerId);
        cancelAnimationFrame(rafId);
      };
    }
  }, []);

  const digitStrip = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  return (
    <div className="grid grid-cols-3 gap-2.5 xs:gap-4 sm:gap-8 md:gap-12 text-left select-none w-full max-w-xl">
      
      {/* 1. Metric: Core Web Vitals (*100) */}
      <div className="group cursor-default">
        <div className="flex items-baseline text-lg sm:text-2xl font-extrabold tracking-tight font-editorial-mono text-white leading-none">
          <span ref={m1Ast} className="mr-0.5 text-[#0071E3]">
            *
          </span>
          <div className="inline-flex items-center" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {/* Hundreds */}
            <div
              className="h-[1.15em] w-[0.62em] overflow-hidden relative"
              style={{
                maskImage: 'linear-gradient(to bottom, transparent 0%, #000 18%, #000 82%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, #000 18%, #000 82%, transparent 100%)',
              }}
            >
              <div ref={m1Col2} style={{ willChange: 'transform' }}>
                <span className="block h-[1.15em] text-center leading-[1.15em] text-white">0</span>
                <span className="block h-[1.15em] text-center leading-[1.15em] text-white">1</span>
              </div>
            </div>
            {/* Tens */}
            <div
              className="h-[1.15em] w-[0.62em] overflow-hidden relative"
              style={{
                maskImage: 'linear-gradient(to bottom, transparent 0%, #000 18%, #000 82%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, #000 18%, #000 82%, transparent 100%)',
              }}
            >
              <div ref={m1Col1} style={{ willChange: 'transform' }}>
                {digitStrip.map((d, i) => (
                  <span key={i} className="block h-[1.15em] text-center leading-[1.15em] text-white">
                    {d}
                  </span>
                ))}
              </div>
            </div>
            {/* Units */}
            <div
              className="h-[1.15em] w-[0.62em] overflow-hidden relative"
              style={{
                maskImage: 'linear-gradient(to bottom, transparent 0%, #000 18%, #000 82%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, #000 18%, #000 82%, transparent 100%)',
              }}
            >
              <div ref={m1Col0} style={{ willChange: 'transform' }}>
                {digitStrip.map((d, i) => (
                  <span key={i} className="block h-[1.15em] text-center leading-[1.15em] text-white">
                    {d}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="text-[9px] xs:text-[10px] sm:text-xs tracking-wider sm:tracking-widest text-[#D9D9D9]/70 uppercase mt-1 truncate">
          Core Web Vitals
        </div>
        <div className="w-full max-w-[120px] h-[1.5px] bg-white/10 rounded-full overflow-hidden mt-2 relative">
          <div
            ref={m1Bar}
            className="h-full bg-[#0071E3]"
            style={{ width: '100%', transform: 'scaleX(0) translateZ(0)', transformOrigin: 'left' }}
          />
        </div>
      </div>

      {/* 2. Metric: Global Edge TTFB (*0.18s) */}
      <div className="group cursor-default">
        <div className="flex items-baseline text-lg sm:text-2xl font-extrabold tracking-tight font-editorial-mono text-white leading-none">
          <span ref={m2Ast} className="mr-0.5 text-[#0071E3]">
            *
          </span>
          <span className="text-white tracking-tighter">0.</span>
          <div className="inline-flex items-center" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {/* Tenths */}
            <div
              className="h-[1.15em] w-[0.62em] overflow-hidden relative"
              style={{
                maskImage: 'linear-gradient(to bottom, transparent 0%, #000 18%, #000 82%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, #000 18%, #000 82%, transparent 100%)',
              }}
            >
              <div ref={m2Col1} style={{ willChange: 'transform' }}>
                {digitStrip.map((d, i) => (
                  <span key={i} className="block h-[1.15em] text-center leading-[1.15em] text-white">
                    {d}
                  </span>
                ))}
              </div>
            </div>
            {/* Hundredths */}
            <div
              className="h-[1.15em] w-[0.62em] overflow-hidden relative"
              style={{
                maskImage: 'linear-gradient(to bottom, transparent 0%, #000 18%, #000 82%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, #000 18%, #000 82%, transparent 100%)',
              }}
            >
              <div ref={m2Col0} style={{ willChange: 'transform' }}>
                {digitStrip.map((d, i) => (
                  <span key={i} className="block h-[1.15em] text-center leading-[1.15em] text-white">
                    {d}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <span className="text-white transition-colors duration-300 ml-0.5">s</span>
        </div>
        <div className="text-[9px] xs:text-[10px] sm:text-xs tracking-wider sm:tracking-widest text-[#D9D9D9]/70 uppercase mt-1 truncate">
          Global Edge TTFB
        </div>
        <div className="w-full max-w-[120px] h-[1.5px] bg-white/10 rounded-full overflow-hidden mt-2 relative">
          <div
            ref={m2Bar}
            className="h-full bg-[#0071E3]"
            style={{ width: '100%', transform: 'scaleX(0) translateZ(0)', transformOrigin: 'left' }}
          />
        </div>
      </div>

      {/* 3. Metric: Headless Decoupled (*100%) */}
      <div className="group cursor-default">
        <div className="flex items-baseline text-lg sm:text-2xl font-extrabold tracking-tight font-editorial-mono text-white leading-none">
          <span ref={m3Ast} className="mr-0.5 text-[#0071E3]">
            *
          </span>
          <div className="inline-flex items-center" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {/* Hundreds */}
            <div
              className="h-[1.15em] w-[0.62em] overflow-hidden relative"
              style={{
                maskImage: 'linear-gradient(to bottom, transparent 0%, #000 18%, #000 82%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, #000 18%, #000 82%, transparent 100%)',
              }}
            >
              <div ref={m3Col2} style={{ willChange: 'transform' }}>
                <span className="block h-[1.15em] text-center leading-[1.15em] text-white">0</span>
                <span className="block h-[1.15em] text-center leading-[1.15em] text-white">1</span>
              </div>
            </div>
            {/* Tens */}
            <div
              className="h-[1.15em] w-[0.62em] overflow-hidden relative"
              style={{
                maskImage: 'linear-gradient(to bottom, transparent 0%, #000 18%, #000 82%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, #000 18%, #000 82%, transparent 100%)',
              }}
            >
              <div ref={m3Col1} style={{ willChange: 'transform' }}>
                {digitStrip.map((d, i) => (
                  <span key={i} className="block h-[1.15em] text-center leading-[1.15em] text-white">
                    {d}
                  </span>
                ))}
              </div>
            </div>
            {/* Units */}
            <div
              className="h-[1.15em] w-[0.62em] overflow-hidden relative"
              style={{
                maskImage: 'linear-gradient(to bottom, transparent 0%, #000 18%, #000 82%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, #000 18%, #000 82%, transparent 100%)',
              }}
            >
              <div ref={m3Col0} style={{ willChange: 'transform' }}>
                {digitStrip.map((d, i) => (
                  <span key={i} className="block h-[1.15em] text-center leading-[1.15em] text-white">
                    {d}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <span className="text-white transition-colors duration-300 ml-0.5">%</span>
        </div>
        <div className="text-[9px] xs:text-[10px] sm:text-xs tracking-wider sm:tracking-widest text-[#D9D9D9]/70 uppercase mt-1 truncate">
          Headless Decoupled
        </div>
        <div className="w-full max-w-[120px] h-[1.5px] bg-white/10 rounded-full overflow-hidden mt-2 relative">
          <div
            ref={m3Bar}
            className="h-full bg-[#0071E3]"
            style={{ width: '100%', transform: 'scaleX(0) translateZ(0)', transformOrigin: 'left' }}
          />
        </div>
      </div>

    </div>
  );
};

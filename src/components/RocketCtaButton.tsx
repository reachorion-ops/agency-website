import React from 'react';

interface RocketCtaButtonProps {
  onClick: () => void;
  className?: string;
}

/**
 * RocketCtaButton:
 * Luxury interactive circular CTA button inspired by agency portfolio art direction.
 * - Layer 1: Solid high-contrast circular button body with hairline border and depth lighting
 * - Layer 2: Dedicated interior celestial canvas with animated floating rocket & twinkling stars
 * - Layer 3: Independent, razor-sharp rotating perimeter text ring layer (400x400 high-precision coordinate space)
 * - 100% crisp typography: No backdrop-filter blurring, no overflow-hidden rasterization clipping
 * - Continuous buttery GPU rotation that never buffers or restarts on hover
 */
export const RocketCtaButton: React.FC<RocketCtaButtonProps> = ({ onClick, className = '' }) => {
  // Geometry constants for 400x400 high-precision text ring:
  // Center: (200, 200), Radius: 161.5 (Ratio ~80.75% matching button perimeter)
  // Circumference = 2 * PI * 161.5 = 1014.73
  const r = 161.5;
  const circumference = 1014.73;

  return (
    <div className={`relative self-end md:self-auto flex items-center justify-center group z-10 hover:z-20 ${className}`}>
      {/* Outer ambient cosmic halo on hover */}
      <div className="absolute -inset-4 rounded-full bg-[#0071E3]/0 group-hover:bg-[#0071E3]/25 blur-2xl transition-all duration-500 pointer-events-none" />

      {/* Interactive Circular CTA Button */}
      <button
        onClick={onClick}
        className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-[#1D1D1F] border border-white/20 hover:border-white/50 flex items-center justify-center transition-transform duration-300 ease-out transform hover:scale-120 sm:hover:scale-125 active:scale-95 shadow-2xl select-none cursor-pointer focus:outline-none"
        aria-label="Start A Project — Initiate Commission"
      >
        {/* Layer 1: Subtle radial glass highlight */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/[0.03] via-transparent to-white/[0.08] pointer-events-none" />

        {/* Layer 2: Dedicated Interior Celestial Canvas (Stars & Floating Rocket Ship) */}
        <svg
          viewBox="0 0 130 130"
          className="w-full h-full absolute inset-0 pointer-events-none select-none"
          style={{ shapeRendering: 'geometricPrecision' }}
        >
          <defs>
            {/* Thruster core gradient */}
            <linearGradient id="rocketThrusterGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0071E3" stopOpacity="0.85" />
              <stop offset="60%" stopColor="#00C6FF" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#0071E3" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Celestial Sparkles & Floating Particles (Twinkling cosmic dust) */}
          <g>
            {/* Sparkle Star 1 (Top Center) */}
            <path
              d="M 67 31 Q 67 34 70 34 Q 67 34 67 37 Q 67 34 64 34 Q 67 34 67 31 Z"
              fill="white"
              className="animate-star-twinkle-fast-1 opacity-75 group-hover:opacity-100 transition-opacity duration-300"
              style={{ transformOrigin: '67px 34px' }}
            />
            {/* Sparkle Star 2 (Bottom Right) */}
            <path
              d="M 75 97 Q 75 99 77 99 Q 75 99 75 101 Q 75 99 73 99 Q 75 99 75 97 Z"
              fill="white"
              className="animate-star-twinkle-fast-2 opacity-70 group-hover:opacity-100 transition-opacity duration-300"
              style={{ transformOrigin: '75px 99px' }}
            />
            {/* Sparkle Star 3 (Mid-Left) */}
            <path
              d="M 37 73 Q 37 74.5 38.5 74.5 Q 37 74.5 37 76 Q 37 74.5 35.5 74.5 Q 37 74.5 37 73 Z"
              fill="white"
              className="opacity-50 animate-pulse"
            />
            {/* Celestial Micro Ring 1 (Top Left) */}
            <circle
              cx="48"
              cy="45"
              r="2.2"
              fill="none"
              stroke="white"
              strokeWidth="0.8"
              className="opacity-40 group-hover:opacity-85 transition-opacity duration-300"
            />
            {/* Celestial Micro Ring 2 (Mid Right) */}
            <circle
              cx="98"
              cy="63"
              r="2.5"
              fill="none"
              stroke="white"
              strokeWidth="0.8"
              className="opacity-35 group-hover:opacity-85 transition-opacity duration-300"
            />
            {/* Micro cosmic dust dot (Bottom Left) */}
            <circle cx="43" cy="84" r="1.2" fill="white" opacity="0.4" />
          </g>

          {/* Vector Rocket Ship with Zero-g Drift & Butter-Smooth Hover Lift */}
          <g className="transition-transform duration-300 ease-out group-hover:translate-x-1.5 group-hover:-translate-y-1.5">
            <g className="animate-float-drift-fast">
              {/* Rotated Rocket Body & Wings (Angled at 45° towards top-right launch) */}
              <g transform="translate(65, 65) rotate(45) translate(-65, -65)">
                
                {/* Outer Thruster Flame Plume */}
                <path
                  d="M 61.5 77 C 56.5 87, 61.5 96, 65 101 C 68.5 96, 73.5 87, 68.5 77 Z"
                  fill="url(#rocketThrusterGlow)"
                  stroke="#0071E3"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="animate-thruster-pulse opacity-75 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ transformOrigin: '65px 77px' }}
                />

                {/* Inner Core Flame */}
                <path
                  d="M 63.3 77 C 61.8 83, 63.5 89, 65 92.5 C 66.5 89, 68.2 83, 66.7 77 Z"
                  fill="#FFFFFF"
                  className="opacity-85 group-hover:opacity-100 transition-opacity duration-300"
                />

                {/* Left Wing Fin */}
                <path
                  d="M 57 65 C 49 69, 47.5 77, 49.5 80 C 54 80, 56.5 76, 58 71.5 Z"
                  fill="rgba(255,255,255,0.08)"
                  stroke="white"
                  strokeWidth="1.75"
                  strokeLinejoin="round"
                />

                {/* Right Wing Fin */}
                <path
                  d="M 73 65 C 81 69, 82.5 77, 80.5 80 C 76 80, 73.5 76, 72 71.5 Z"
                  fill="rgba(255,255,255,0.08)"
                  stroke="white"
                  strokeWidth="1.75"
                  strokeLinejoin="round"
                />

                {/* Rocket Fuselage Capsule */}
                <path
                  d="M 65 35 C 57 46, 55.5 64, 56.5 77 L 73.5 77 C 74.5 64, 73 46, 65 35 Z"
                  fill="#1D1D1F"
                  stroke="white"
                  strokeWidth="1.9"
                  strokeLinejoin="round"
                />

                {/* Major Upper Porthole Window */}
                <circle
                  cx="65"
                  cy="52.5"
                  r="4.2"
                  fill="#1D1D1F"
                  stroke="white"
                  strokeWidth="1.6"
                  className="group-hover:fill-[#0071E3] transition-colors duration-300"
                />

                {/* Minor Lower Porthole Window */}
                <circle
                  cx="65"
                  cy="64.5"
                  r="2.6"
                  fill="#1D1D1F"
                  stroke="white"
                  strokeWidth="1.3"
                />
              </g>
            </g>
          </g>
        </svg>

        {/* Layer 3: Dedicated Separated Layer for Ultra-Crisp Rotating Perimeter Text Ring */}
        <svg
          viewBox="0 0 400 400"
          className="w-full h-full absolute inset-0 animate-spin-cta pointer-events-none select-none"
          style={{
            overflow: 'visible',
            textRendering: 'geometricPrecision',
            shapeRendering: 'geometricPrecision',
            transformOrigin: '50% 50%',
          }}
        >
          <defs>
            {/* Clockwise circular path for perimeter text with high-resolution coordinates */}
            <path
              id="startProjectCirclePath"
              d={`M 200, ${200 - r} a ${r},${r} 0 1,1 0,${2 * r} a ${r},${r} 0 1,1 0,${-2 * r}`}
              fill="none"
            />
          </defs>

          <text
            fontFamily="'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
            fontSize="18.5"
            fontWeight="800"
            fill="#FFFFFF"
            letterSpacing="3"
            className="uppercase"
            style={{
              textRendering: 'geometricPrecision',
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale',
            }}
          >
            <textPath
              href="#startProjectCirclePath"
              textLength={circumference.toFixed(1)}
              lengthAdjust="spacing"
            >
              START A PROJECT • START A PROJECT • START A PROJECT • 
            </textPath>
          </text>
        </svg>
      </button>
    </div>
  );
};

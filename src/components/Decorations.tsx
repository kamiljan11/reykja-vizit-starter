/** Reusable hand-crafted SVG decorative accents for Eldhúsið */

/** Nordic knot divider — use between section label and title */
export const KnotDivider = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 120 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-24 h-4 ${className}`}
    aria-hidden="true"
  >
    <path
      d="M0 8h20c4 0 6-6 10-6s6 12 10 12 6-12 10-12 6 12 10 12 6-12 10-12 6 6 10 6h20"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle cx="60" cy="8" r="2" fill="currentColor" opacity="0.5" />
  </svg>
);

/** Simple wave separator — place between sections */
export const WaveSeparator = ({ className = "", flip = false }: { className?: string; flip?: boolean }) => (
  <svg
    viewBox="0 0 1200 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-full h-6 md:h-10 ${flip ? "rotate-180" : ""} ${className}`}
    preserveAspectRatio="none"
    aria-hidden="true"
  >
    <path
      d="M0 20C100 8 200 32 300 20S500 8 600 20 800 32 900 20 1100 8 1200 20"
      stroke="currentColor"
      strokeWidth="1"
      opacity="0.2"
    />
    <path
      d="M0 24C100 12 200 36 300 24S500 12 600 24 800 36 900 24 1100 12 1200 24"
      stroke="currentColor"
      strokeWidth="0.5"
      opacity="0.1"
    />
  </svg>
);

/** Flame icon — small accent next to the restaurant name */
export const FlameAccent = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 16 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-4 h-5 ${className}`}
    aria-hidden="true"
  >
    <path
      d="M8 0C8 0 2 7 2 13a6 6 0 0012 0c0-2-1-3.5-2.5-5C10 6.5 8 4 8 0z"
      fill="currentColor"
      opacity="0.8"
    />
    <path
      d="M8 10c0 0-2 2-2 4.5a2.5 2.5 0 005 0C11 12 8 10 8 10z"
      fill="currentColor"
      opacity="0.4"
    />
  </svg>
);

/** Leaf sprig — decorative accent for food/menu sections */
export const LeafSprig = ({ className = "", mirror = false }: { className?: string; mirror?: boolean }) => (
  <svg
    viewBox="0 0 40 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-8 h-12 ${mirror ? "scale-x-[-1]" : ""} ${className}`}
    aria-hidden="true"
  >
    <path d="M20 58V10" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    <path d="M20 15c-8-2-14 4-12 10 3-4 8-6 12-8z" fill="currentColor" opacity="0.15" />
    <path d="M20 25c8-2 14 4 12 10-3-4-8-6-12-8z" fill="currentColor" opacity="0.15" />
    <path d="M20 35c-8-2-14 4-12 10 3-4 8-6 12-8z" fill="currentColor" opacity="0.15" />
    <path d="M20 45c8-2 12 3 10 8-2-3-6-5-10-6z" fill="currentColor" opacity="0.15" />
  </svg>
);

/** Diamond dots — subtle row of diamond shapes */
export const DiamondDots = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 80 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-20 h-3 ${className}`}
    aria-hidden="true"
  >
    <path d="M10 6l3-3 3 3-3 3z" fill="currentColor" opacity="0.2" />
    <path d="M25 6l2-2 2 2-2 2z" fill="currentColor" opacity="0.3" />
    <path d="M37 6l3-3 3 3-3 3z" fill="currentColor" opacity="0.5" />
    <path d="M52 6l2-2 2 2-2 2z" fill="currentColor" opacity="0.3" />
    <path d="M64 6l3-3 3 3-3 3z" fill="currentColor" opacity="0.2" />
  </svg>
);

/** Corner flourish — for cards or section accents */
export const CornerFlourish = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-8 h-8 ${className}`}
    aria-hidden="true"
  >
    <path
      d="M2 38C2 18 18 2 38 2"
      stroke="currentColor"
      strokeWidth="1"
      opacity="0.15"
    />
    <path
      d="M8 38C8 22 22 8 38 8"
      stroke="currentColor"
      strokeWidth="0.75"
      opacity="0.1"
    />
    <circle cx="38" cy="2" r="1.5" fill="currentColor" opacity="0.2" />
    <circle cx="2" cy="38" r="1.5" fill="currentColor" opacity="0.2" />
  </svg>
);

/** Subtle topographic/contour lines background — for light sections */
export const TopoBackground = ({ className = "" }: { className?: string }) => (
  <svg
    className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <defs>
      <pattern id="topo" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
        <path d="M20 100c30-20 60 10 90-5s50-30 70-10" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.06" />
        <path d="M10 140c40-15 50 20 80 5s60-25 80-5" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.04" />
        <path d="M30 60c25-10 45 15 70 0s55-20 70 5" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.05" />
        <path d="M0 30c35-5 55 25 90 10s45-15 80-5" stroke="currentColor" strokeWidth="0.4" fill="none" opacity="0.03" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#topo)" />
  </svg>
);

/** Dot grid background — for card-heavy sections */
export const DotGridBackground = ({ className = "" }: { className?: string }) => (
  <svg
    className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <defs>
      <pattern id="dotgrid" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
        <circle cx="16" cy="16" r="1" fill="currentColor" opacity="0.07" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#dotgrid)" />
  </svg>
);

/** Cross-hatch texture — for dark sections like reservation/promo */
export const CrossHatchBackground = ({ className = "" }: { className?: string }) => (
  <svg
    className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <defs>
      <pattern id="crosshatch" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
        <line x1="0" y1="0" x2="0" y2="20" stroke="currentColor" strokeWidth="0.3" opacity="0.06" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#crosshatch)" />
  </svg>
);

/** Organic grain texture — subtle noise-like pattern */
export const GrainBackground = ({ className = "" }: { className?: string }) => (
  <svg
    className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <defs>
      <filter id="grain">
        <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
        <feColorMatrix type="saturate" values="0" />
      </filter>
    </defs>
    <rect width="100%" height="100%" filter="url(#grain)" opacity="0.03" />
  </svg>
);

/** Nordic diamond pattern — for accent sections */
export const NordicPatternBackground = ({ className = "" }: { className?: string }) => (
  <svg
    className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <defs>
      <pattern id="nordic" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
        <path d="M24 4l8 8-8 8-8-8z" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.05" />
        <path d="M0 28l8 8-8 8" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.04" />
        <path d="M48 28l-8 8 8 8" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.04" />
        <circle cx="24" cy="12" r="1" fill="currentColor" opacity="0.04" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#nordic)" />
  </svg>
);

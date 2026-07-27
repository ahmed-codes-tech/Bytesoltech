import React from 'react';

// Decorative corner patterns inspired by the horizontal capsule "speed
// lines" in the Bytesoltech logo mark. Purely atmospheric — aria-hidden,
// pointer-events:none, sit behind content, never over it.
//
// Two distinct arrangements (not one pattern re-used with a transform)
// so the top-left and bottom-right corners feel related in style but
// not identical, per spec.

// Evenly-spaced rows (~24px) trailing diagonally from the corner, with
// varying line length/x-offset per row for an organic, non-mechanical
// feel — "consistent spacing, varying lengths."
const PRIMARY_LINES = [
  { x: 6, y: 10, w: 70 },
  { x: 4, y: 34, w: 40 },
  { x: 54, y: 34, w: 26 },
  { x: 10, y: 58, w: 96 },
  { x: 8, y: 82, w: 30 },
  { x: 46, y: 82, w: 44 },
  { x: 6, y: 106, w: 60 },
  { x: 76, y: 106, w: 20 },
  { x: 14, y: 130, w: 36 },
  { x: 58, y: 130, w: 50 },
  { x: 6, y: 154, w: 84 },
  { x: 20, y: 178, w: 28 },
  { x: 56, y: 178, w: 40 },
  { x: 10, y: 202, w: 54 },
];

const PRIMARY_NODES = [
  { x: 76, y: 13.5 }, { x: 106, y: 61.5 }, { x: 108, y: 133.5 }, { x: 64, y: 205.5 },
];

// A related but distinct arrangement for the mirrored corner — different
// count, lengths, and rhythm, not a transform of PRIMARY_LINES.
const VARIANT_LINES = [
  { x: 0, y: 6, w: 44 },
  { x: 58, y: 6, w: 84 },
  { x: 20, y: 28, w: 30 },
  { x: 0, y: 50, w: 62 },
  { x: 76, y: 50, w: 26 },
  { x: 34, y: 72, w: 96 },
  { x: 0, y: 94, w: 22 },
  { x: 40, y: 94, w: 48 },
  { x: 10, y: 116, w: 70 },
  { x: 96, y: 116, w: 18 },
  { x: 0, y: 138, w: 38 },
  { x: 52, y: 138, w: 56 },
  { x: 24, y: 160, w: 90 },
  { x: 0, y: 182, w: 30 },
];

const VARIANT_NODES = [
  { x: 44, y: 9.5 }, { x: 62, y: 53.5 }, { x: 130, y: 75.5 }, { x: 66, y: 141.5 },
];

// Shared defs (gradient + soft-glow filter). Rendered once per SVG since
// each corner is its own <svg> document.
const Defs = ({ idPrefix }) => (
  <defs>
    <linearGradient id={`${idPrefix}-grad`} x1="0%" y1="0%" x2="100%" y2="60%">
      <stop offset="0%" stopColor="#9FC1FF" />
      <stop offset="100%" stopColor="#4169FF" />
    </linearGradient>
    <filter id={`${idPrefix}-glow`} x="-60%" y="-60%" width="220%" height="220%">
      <feGaussianBlur in="SourceGraphic" stdDeviation="1.6" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>
);

const LineGroup = ({ idPrefix, lines, nodes }) => (
  <>
    <Defs idPrefix={idPrefix} />
    <g filter={`url(#${idPrefix}-glow)`}>
      {lines.map((l, i) => (
        <rect
          key={i}
          x={l.x}
          y={l.y}
          width={l.w}
          height="6"
          rx="3"
          fill="none"
          stroke={`url(#${idPrefix}-grad)`}
          strokeWidth="1.5"
        />
      ))}
      {nodes.map((n, i) => (
        <circle key={i} cx={n.x} cy={n.y} r="2.2" fill="#4F8DFF" />
      ))}
    </g>
  </>
);

export const CircuitPattern = ({ className, variant = 'primary' }) => {
  const lines = variant === 'primary' ? PRIMARY_LINES : VARIANT_LINES;
  const nodes = variant === 'primary' ? PRIMARY_NODES : VARIANT_NODES;
  const idPrefix = variant === 'primary' ? 'wwd-circuit-a' : 'wwd-circuit-b';

  return (
    <svg
      className={className}
      viewBox="0 0 300 230"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <LineGroup idPrefix={idPrefix} lines={lines} nodes={nodes} />
    </svg>
  );
};

// Tiny dot-grid — soft blue tint, very low opacity, no randomness needed
// here since a grid is the point (unlike the circuit pattern above).
export const DotGridPattern = ({ className, rows = 7, cols = 7, spacing = 22 }) => {
  const dots = [];
  for (let r = 0; r < rows; r += 1) {
    for (let c = 0; c < cols; c += 1) {
      dots.push({ cx: c * spacing + 6, cy: r * spacing + 6 });
    }
  }
  const size = Math.max(rows, cols) * spacing;

  return (
    <svg
      className={className}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      {dots.map((d, i) => (
        <circle key={i} cx={d.cx} cy={d.cy} r="1.4" fill="#4F8DFF" opacity="0.9" />
      ))}
    </svg>
  );
};
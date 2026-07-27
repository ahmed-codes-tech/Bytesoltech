import React from "react";
// Decorative corner patterns inspired by the horizontal capsule "speed
// lines" in the Bytesoltech logo mark. Purely atmospheric — aria-hidden,
// pointer-events:none, sit behind content, never over it.
const TOP_LEFT_CAPSULES = [
  { x: 40, y: 8, w: 90, o: 0.55 },
  { x: 150, y: 8, w: 30, o: 0.4 },
  { x: 20, y: 30, w: 60, o: 0.9 },
  { x: 100, y: 30, w: 50, o: 0.5 },
  { x: 60, y: 52, w: 110, o: 0.7 },
  { x: 10, y: 74, w: 40, o: 0.9 },
  { x: 70, y: 74, w: 24, o: 0.6 },
  { x: 30, y: 96, w: 80, o: 0.8 },
  { x: 130, y: 96, w: 40, o: 0.45 },
  { x: 0, y: 118, w: 50, o: 0.55 },
  { x: 70, y: 118, w: 90, o: 0.85 },
  { x: 50, y: 140, w: 60, o: 0.6 },
  { x: 130, y: 140, w: 30, o: 0.4 },
  { x: 20, y: 162, w: 70, o: 0.7 },
  { x: 110, y: 184, w: 40, o: 0.35 },
];
const TOP_LEFT_DOTS = [
  { x: 135, y: 11 },
  { x: 8, y: 55 },
  { x: 175, y: 121 },
  { x: 100, y: 165 },
];
export function SpeedLines({ className, gradientId = "cap-grad" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 220 220"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#B8D0FF" stopOpacity="0.3" />
          <stop offset="50%" stopColor="#4F8DFF" />
          <stop offset="100%" stopColor="#1E5BFF" />
        </linearGradient>
      </defs>
      {TOP_LEFT_CAPSULES.map((c, i) => (
        <rect
          key={i}
          x={c.x}
          y={c.y}
          width={c.w}
          height={6}
          rx={3}
          fill={`url(#${gradientId})`}
          opacity={c.o ?? 0.8}
        />
      ))}
      {TOP_LEFT_DOTS.map((d, i) => (
        <circle key={i} cx={d.x} cy={d.y} r={2.5} fill="#4F8DFF" />
      ))}
    </svg>
  );
}
export function DotGrid({ className }) {
  const dots = [];
  const rows = 8;
  const cols = 8;
  const spacing = 14;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      dots.push({ x: c * spacing + 4, y: r * spacing + 4 });
    }
  }
  return (
    <svg
      className={className}
      viewBox={`0 0 ${cols * spacing} ${rows * spacing}`}
      aria-hidden="true"
      focusable="false"
    >
      {dots.map((d, i) => (
        <circle key={i} cx={d.x} cy={d.y} r={1.4} fill="#4F8DFF" opacity={0.55} />
      ))}
    </svg>
  );
}
export default function CornerPatterns() {
  return (
    <>
      <SpeedLines className="wwd-speedlines wwd-speedlines--tl" gradientId="cap-grad-tl" />
      <SpeedLines className="wwd-speedlines wwd-speedlines--br" gradientId="cap-grad-br" />
      <DotGrid className="wwd-dotgrid wwd-dotgrid--tr" />
      <DotGrid className="wwd-dotgrid wwd-dotgrid--bl" />
    </>
  );
}
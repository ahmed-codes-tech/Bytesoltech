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
export function LeftPattern() {
  return (
    <svg className="portfolio-pattern portfolio-pattern-left" width="220" height="200" viewBox="0 0 220 200" fill="none" aria-hidden="true">
      {Array.from({ length: 10 }).map((_, i) => {
        const y = 20 + i * 16;
        const w = 60 + (i % 5) * 30;
        const x = i % 2 === 0 ? 0 : 30;
        return (
          <g key={i}>
            <line x1={x} y1={y} x2={x + w} y2={y} stroke="#2563eb" strokeWidth="2" strokeLinecap="round" opacity={0.35 + (i % 3) * 0.2} />
            <circle cx={x + w + 6} cy={y} r="3" fill="#2563eb" opacity="0.7" />
          </g>
        );
      })}
    </svg>
  );
}

export function RightPattern() {
  return (
    <svg className="portfolio-pattern portfolio-pattern-right" width="260" height="240" viewBox="0 0 260 240" fill="none" aria-hidden="true">
      <path d="M10 10 Q 250 120 10 230" stroke="#93c5fd" strokeWidth="1" fill="none" opacity="0.6" />
      {Array.from({ length: 60 }).map((_, i) => {
        const cx = 20 + (i % 10) * 24;
        const cy = 20 + Math.floor(i / 10) * 34;
        return <circle key={i} cx={cx} cy={cy} r="1.6" fill="#60a5fa" opacity={0.4 + ((i * 7) % 5) / 10} />;
      })}
    </svg>
  );
}

export function BottomRightPattern() {
  return (
    <svg className="portfolio-pattern portfolio-pattern-bottom-right" width="240" height="180" viewBox="0 0 240 180" fill="none" aria-hidden="true">
      {Array.from({ length: 9 }).map((_, i) => {
        const y = 15 + i * 18;
        const w = 70 + (i % 4) * 35;
        const x = 240 - w - (i % 2 === 0 ? 0 : 30);
        return (
          <g key={i}>
            <circle cx={x - 6} cy={y} r="3" fill="#2563eb" opacity="0.7" />
            <line x1={x} y1={y} x2={x + w} y2={y} stroke="#2563eb" strokeWidth="2" strokeLinecap="round" opacity={0.35 + (i % 3) * 0.2} />
          </g>
        );
      })}
    </svg>
  );
}

export function IconBox() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 8L12 3 3 8v8l9 5 9-5V8z" />
      <path d="M3 8l9 5 9-5" />
      <path d="M12 13v8" />
    </svg>
  );
}
export function IconGlobe() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
    </svg>
  );
}
export function IconUsers() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
      <circle cx="10" cy="7" r="4" />
      <path d="M21 21v-2a4 4 0 0 0-3-3.87M17 3.13A4 4 0 0 1 17 11" />
    </svg>
  );
}
export function IconTrend() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 17l6-6 4 4 8-8" /><path d="M14 7h7v7" />
    </svg>
  );
}
export function IconClock() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" />
    </svg>
  );
}
export function IconGauge() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 14l4-4" /><path d="M3 18a9 9 0 1 1 18 0" />
    </svg>
  );
}
export function IconArrow() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}
export function IconPlay() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="#2563eb" stroke="#2563eb" strokeWidth="1" strokeLinejoin="round">
      <polygon points="6,4 20,12 6,20" />
    </svg>
  );
}
export function IconExternal() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 3h7v7" /><path d="M10 14L21 3" /><path d="M21 14v7H3V3h7" />
    </svg>
  );
}
export function IconDot() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2.5">
      <circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="3" fill="#2563eb" />
    </svg>
  );
}

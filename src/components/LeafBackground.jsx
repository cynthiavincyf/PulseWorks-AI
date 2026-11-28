// Save as: src/components/LeafBackground.jsx
// Decorative burgundy leaves that sit behind the login / register card.

const leaves = [
  // x, y, rotation, scale, opacity
  // top-left cluster
  { x: 40, y: 70, r: 35, s: 1.5, o: 0.16 },
  { x: 150, y: 20, r: 70, s: 1.1, o: 0.12 },
  { x: -10, y: 190, r: 15, s: 1.2, o: 0.1 },
  { x: 200, y: 140, r: 50, s: 0.8, o: 0.14 },
  // top-right cluster
  { x: 1340, y: 60, r: 145, s: 1.4, o: 0.15 },
  { x: 1230, y: 20, r: 110, s: 1, o: 0.11 },
  { x: 1400, y: 190, r: 165, s: 1.1, o: 0.1 },
  // bottom-left cluster
  { x: 60, y: 780, r: -40, s: 1.6, o: 0.15 },
  { x: 190, y: 860, r: -15, s: 1.1, o: 0.11 },
  { x: -20, y: 650, r: -70, s: 1.2, o: 0.1 },
  { x: 250, y: 740, r: -55, s: 0.7, o: 0.13 },
  // bottom-right cluster
  { x: 1380, y: 800, r: 215, s: 1.5, o: 0.16 },
  { x: 1250, y: 870, r: 190, s: 1.2, o: 0.12 },
  { x: 1420, y: 660, r: 250, s: 1.1, o: 0.1 },
  { x: 1180, y: 790, r: 230, s: 0.75, o: 0.13 },
  // a few drifting leaves in the middle edges
  { x: 330, y: 430, r: 20, s: 0.6, o: 0.07 },
  { x: 1120, y: 470, r: 160, s: 0.6, o: 0.07 },
];

const stems = [
  "M-20 120 C 80 110, 160 70, 260 30",
  "M1460 130 C 1360 120, 1280 80, 1180 40",
  "M-20 720 C 90 740, 190 800, 300 840",
  "M1460 740 C 1350 760, 1250 820, 1140 860",
];

export default function LeafBackground() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        {/* One leaf, pointing right, base at (0,0) */}
        <g id="pw-leaf">
          <path
            d="M0 0 C 25 -38, 85 -42, 120 0 C 85 42, 25 38, 0 0 Z"
            fill="#7B1D20"
          />
          {/* midrib + veins */}
          <path
            d="M4 0 L112 0 M30 0 L55 -16 M30 0 L55 16 M60 0 L82 -13 M60 0 L82 13"
            stroke="#F0EBE5"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
            opacity="0.45"
          />
        </g>
      </defs>

      {/* Branches */}
      {stems.map((d, i) => (
        <path
          key={i}
          d={d}
          stroke="#7B1D20"
          strokeOpacity="0.14"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
      ))}

      {/* Leaves */}
      {leaves.map((l, i) => (
        <g
          key={i}
          transform={`translate(${l.x} ${l.y}) rotate(${l.r}) scale(${l.s})`}
          opacity={l.o}
        >
          <use href="#pw-leaf" />
        </g>
      ))}
    </svg>
  );
}
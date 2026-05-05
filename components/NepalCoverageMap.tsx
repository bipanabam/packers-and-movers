"use client";

const cities = [
  { name: "Kathmandu", x: 630.4, y: 340.5, main: true },
  { name: "Lalitpur", x: 640.4, y: 374.5 },
  { name: "Bhaktapur", x: 653.4, y: 350.5 },
  { name: "Pokhara", x: 520.9, y: 285.2 },
  { name: "Chitwan", x: 540.8, y: 390.9 },
  { name: "Biratnagar", x: 853.4, y: 523.8 },
  { name: "Dhangadhi", x: 107.6, y: 243.3 },
];

const connections = [
  [0, 1],
  [0, 2],
  [0, 3],
  [0, 4],
  [0, 5],
  [0, 6]
];

const NepalCoverageMap = () => {
  return (
    <div className="relative w-full h-100 md:h-130 rounded-2xl overflow-hidden bg-slate-700 shadow-md">
      <svg viewBox="0 0 1000 569" className="w-full h-full" fill="#547A95">
        <image
          href="/assets/np.svg"
          x="0"
          y="0"
          width="1000"
          height="569"
          preserveAspectRatio="xMidYMid meet"
          style={{ opacity: 0.8 }}
        />
        <defs>
          {/* Glow filter */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Line gradient */}
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#f97316" />
          </linearGradient>
        </defs>

        {connections.map(([from, to], i) => (
          <line
          key={i}
          x1={cities[from].x}
          y1={cities[from].y}
          x2={cities[to].x}
          y2={cities[to].y}
          stroke="url(#lineGradient)"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.9"
          filter="url(#glow)"
          strokeDasharray="6 4"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="20"
            to="0"
            dur="1.5s"
            repeatCount="indefinite"
          />
        </line>
        ))}

        {/* city pins*/}
        {cities.map((city, i) => (
          <g 
            key={i} 
            filter="url(#glow)"
            className="cursor-pointer"
          >
          {/* Outer pulse */}
          <circle
            cx={city.x}
            cy={city.y}
            r="4"
            fill={city.main ? "#f97316" : "#38bdf8"}
            opacity="0.3"
          >
            <animate
              attributeName="r"
              values="4;10;4"
              dur="1.8s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.4;0;0.4"
              dur="1.8s"
              repeatCount="indefinite"
            />
          </circle>

          {/* Core dot */}
          <circle
            cx={city.x}
            cy={city.y}
            r="6.5"
            fill={city.main ? "#f97316" : "#38bdf8"}
          />

          {/* White center for contrast */}
          <circle cx={city.x} cy={city.y} r="1" fill="white" />

          {/* Label */}
          <text
            x={city.x + 5}
            y={city.y - 9}
            fontSize="15"
            fill="white"
            fontWeight="600"
            style={{ textShadow: "0 0 6px rgba(0,0,0,0.6)" }}
          >
            {city.name}
          </text>
        </g>
        ))}
      </svg>

      {/* Overlay */}
      <div className="absolute bottom-4 left-4 text-secondary bg-white/80 rounded-lg px-4 py-2 shadow-lg backdrop-blur-2xl hover:scale-105">
        <p className="text-xs text-foreground/80">Available in</p>
        <p className="text-sm font-semibold text-secondary">20+ cities</p>
      </div>
    </div>
  );
};

export default NepalCoverageMap;
"use client";

import { useState } from "react";
import { Truck, Clock3, MapPin } from "lucide-react";

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
  const [activeCity, setActiveCity] = useState<string | null>(null);

  return (
    <div className="relative w-full h-100 md:h-130 rounded-2xl overflow-hidden bg-linear-to-br from-slate-800 via-slate-700 to-slate-900 shadow-md">
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
            onMouseEnter={() => setActiveCity(city.name)}
            onMouseLeave={() => setActiveCity(null)}
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
              values={
                city.main
                  ? "8;18;8"
                  : "5;12;5"
              }
              dur="2s"
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
            r={city.name === 'Kathmandu' ? "8" : "6.5"}
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

          {/* Tooltip */}
          {activeCity === city.name && (
            <foreignObject
              x={city.x - 45}
              y={city.y - 75}
              width="150"
              height="70"
            >
              <div className="rounded-xl border border-white/10 bg-black/70 px-3 py-2 text-white shadow-xl">
                <p className="text-sm font-semibold">
                  {city.name}
                </p>

                <p className="mt-1 text-[10px] text-white/70">
                  Available within 24 hrs
                </p>
              </div>
            </foreignObject>
          )}
        </g>
        ))}
      </svg>

      {/* Top Badge */}
      <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-white/10 px-4 py-2 backdrop-blur-md">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/70">
          Nationwide Coverage
        </p>
      </div>
      {/* Trust Cards */}
      <div className="absolute bottom-5 left-5 right-5 grid grid-cols-2 lg:grid-cols-1 gap-3">
        {/* <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md w-fit">
          <div className="flex items-center gap-3">
            <Truck
              size={18}
              className="text-secondary"
            />

            <div>
              <p className="text-sm font-semibold text-white">
                500+
              </p>

              <p className="text-xs text-white/70">
                Successful Moves
              </p>
            </div>
          </div>
        </div> */}

        <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md w-fit">
          <div className="flex items-center gap-3">
            <Clock3
              size={18}
              className="text-secondary"
            />
            <div>
              <p className="text-sm font-semibold text-white">
                7 Days
              </p>

              <p className="text-xs text-white/70">
                Availability
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md w-fit">
          <div className="flex items-center gap-3">
            <MapPin
              size={18}
              className="text-secondary"
            />

            <div>
              <p className="text-sm font-semibold text-white">
                20+
              </p>

              <p className="text-xs text-white/70">
                Cities Covered
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NepalCoverageMap;
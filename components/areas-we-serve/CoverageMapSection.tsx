import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import NepalCoverageMap from "../NepalCoverageMap";

const points = [
  "Same-day shifting inside Kathmandu Valley",
  "Intercity relocation across Nepal",
  "Dedicated truck & logistics coordination",
  "Office, apartment & vehicle transportation",
];

const CoverageMapSection = () => {
  return (
    <section
      id="map"
      className="w-full bg-primary/5 py-16"
    >
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 max-w-7xl gap-10 px-6 items-center lg:items-start">
        <div className="relative overflow-hidden rounded-4xl border border-primary/10 bg-white shadow-lg">
          <div className="relative aspect-4/3">
            <NepalCoverageMap />
          </div>
        </div>

        <div className="w-full py-3 px-5">
          <div className="flex flex-col items-start gap-4 w-full">
            <span className="rounded-full border border-secondary/20 bg-secondary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
              Nationwide Operations
            </span>

           <h2 className="mt-4 font-inter text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
              Logistics Network Across Nepal
            </h2>

            <p className="max-w-xl leading-relaxed text-foreground/60">
              Our movers and packers team operates throughout Kathmandu Valley
              and major cities including Pokhara, Chitwan, Butwal, Dharan, and
              more.
            </p>

            <div className="mt-5 space-y-4">
              {points.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2
                    className="mt-1 text-secondary"
                    size={18}
                  />

                  <p className="text-sm text-foreground/70">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverageMapSection;
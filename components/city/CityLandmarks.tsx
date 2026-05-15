import Link from "next/link";
import {
  ArrowUpRight,
  Landmark,
  MapPin,
  Navigation,
} from "lucide-react";

import { CityDataType } from "@/types/city";

const CityLandmarks = ({
  data,
}: {
  data: CityDataType;
}) => {
  return (
    <section className="relative overflow-hidden py-16">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-primary to-primary/95" />

      {/* Decorative glow */}
      <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 backdrop-blur-xl">
              <MapPin size={14} />
              Popular Locations
            </span>

            <h2 className="mt-5 font-inter text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Major Landmarks &
              <br className="hidden md:block" />
              Service Areas in {data.city}
            </h2>

            <p className="mt-5 text-sm leading-relaxed text-white/70">
              Our movers frequently operate around major residential,
              commercial and high-traffic areas across {data.city},
              ensuring faster response times and better route planning.
            </p>
          </div>

          {/* Floating info card */}
          <div className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur-2xl lg:max-w-xs">
            <p className="text-sm text-white/70">
              Active Moving Coverage
            </p>

            <div className="mt-3 flex items-end gap-2">
              <p className="text-4xl font-semibold text-white">
                {data.landmarks.length}+
              </p>

              <p className="pb-1 text-sm text-white/60">
                key areas
              </p>
            </div>

            <div className="mt-5 flex items-center gap-2 text-sm text-white/80">
              <Navigation size={15} />
              Same-day availability in selected areas
            </div>
          </div>
        </div>

        {/* Landmark grid */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {data.landmarks.map((item, index) => (
            <Link
              key={item}
              href={`/contact`}
              className="group relative overflow-hidden rounded-4xl border border-white/10 bg-white/8 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-white/20 hover:bg-white/12"
            >
              {/* Gradient hover glow */}
              <div className="absolute inset-0 bg-linear-to-br from-white/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-white shadow-lg">
                    <Landmark size={24} strokeWidth={1.8} />
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-medium uppercase tracking-widest text-white/40">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="mt-2 text-lg font-semibold text-white">
                      {item}
                    </h3>

                    <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-white/8 px-3 py-1 text-xs text-white/70">
                      <MapPin size={13} />
                      {data.city}
                    </div>
                  </div>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/50 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white">
                  <ArrowUpRight size={18} />
                </div>
              </div>

              {/* Bottom subtle line */}
              <div className="mt-6 h-px w-full bg-linear-to-r from-white/10 via-white/5 to-transparent" />

              <p className="mt-5 text-sm leading-relaxed text-white/60">
                Professional house shifting and relocation support
                available near {item} and surrounding neighborhoods.
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CityLandmarks;
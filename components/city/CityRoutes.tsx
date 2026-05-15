import Link from "next/link";
import {
  ArrowRight,
  Clock3,
  Truck,
  MapPin,
} from "lucide-react";

import { CityDataType } from "@/types/city";

const CityRoutes = ({
  data,
}: {
  data: CityDataType;
}) => {
  return (
    <section className="bg-primary/5 py-20">
      <div className="mx-auto max-w-7xl px-8">
        {/* Heading */}
        <div className="max-w-2xl">
          <span className="rounded-full border border-secondary/20 bg-secondary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
            Popular Moving Routes
          </span>

          <h2 className="mt-5 font-inter text-3xl font-semibold tracking-tight md:text-4xl">
            Moving Routes from {data.city}
          </h2>

          <p className="mt-5 text-base leading-relaxed text-foreground/60">
            Explore frequently requested house shifting and
            office relocation routes handled by our movers
            across Nepal.
          </p>
        </div>

        {/* Route Grid */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {data.routes.map((route) => {
            const destinationSlug =
              route.to
                .toLowerCase()
                .replace(/\s+/g, "-") +
              "-packers-movers";

            return (
              <article
                key={`${route.from}-${route.to}`}
                className="group relative overflow-hidden rounded-4xl border border-primary/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Decorative Glow */}
                <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-primary/5 blur-3xl transition group-hover:bg-primary/10" />

                {/* Top */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="rounded-2xl bg-primary/10 p-3 text-primary">
                    <Truck size={22} />
                  </div>

                  <div className="flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-3 py-1 text-xs font-medium text-foreground/70">
                    <Clock3 size={14} />
                    {route.duration}
                  </div>
                </div>

                {/* Route */}
                <div className="relative z-10 mt-8">
                  <div className="flex items-center gap-3 text-xl font-semibold tracking-tight">
                    <span>{route.from}</span>

                    <ArrowRight
                      size={18}
                      className="text-secondary"
                    />

                    <span>{route.to}</span>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-foreground/60">
                    Professional house shifting, office moving,
                    furniture transport and packing services
                    available from {route.from} to {route.to}.
                  </p>
                </div>

                {/* Bottom */}
                <div className="relative z-10 mt-8 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-foreground/50">
                    <MapPin size={15} />
                    Nepal Route
                  </div>

                  <Link
                    href={`/${destinationSlug}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-secondary transition hover:gap-3"
                  >
                    Explore City
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CityRoutes;
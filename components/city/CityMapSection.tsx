import Link from "next/link";
import {
  MapPin,
  Phone,
  Clock3,
  Navigation,
  Building2,
} from "lucide-react";

import { CityDataType } from "@/types/city";

const CityMapSection = ({
  data,
}: {
  data: CityDataType;
}) => {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-primary/5 to-background py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        {/* MAP */}
        <div className="relative overflow-hidden rounded-4xl border border-primary/10 bg-white shadow-xl">
          <iframe
            src={data.mapEmbed}
            width="100%"
            height="100%"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="min-h-130 border-0"
          />

          {/* Floating stats */}
          <div className="absolute left-5 top-5 rounded-2xl bg-white/90 px-5 py-4 shadow-lg backdrop-blur-xl">
            <p className="text-[11px] uppercase tracking-wider text-foreground/50">
              Operational Coverage
            </p>

            <p className="mt-1 text-2xl font-semibold text-secondary">
              {data.city}
            </p>

            <p className="mt-1 text-sm text-foreground/60">
              Same-day moving support available
            </p>
          </div>
        </div>

        {/* CONTENT */}
        <div className="flex flex-col gap-5">
          <span className="rounded-full border border-secondary/20 bg-secondary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-secondary w-fit">
            Local Office & Operations
          </span>

          <h2 className="font-inter text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Packers and Movers Office in {data.city}
          </h2>

          <p className="text-sm leading-relaxed text-foreground/60">
            Our local movers regularly handle apartment shifting,
            office relocation, furniture transport, and packing
            services across {data.city} and nearby areas.
          </p>

          {/* OFFICE CARD */}
          <div className="mt-3 rounded-4xl border border-primary/10 bg-white px-4 py-4 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="rounded-2xl bg-primary/10 p-3 text-primary">
                <Building2 size={22} />
              </div>

              <div>
                <h3 className="font-semibold text-foreground/90">
                  {data.office.address}
                </h3>

                <div className="mt-2 flex flex-col gap-2 text-sm text-foreground/60">
                  <div className="flex items-center gap-2 text-secondary">
                    <Clock3 size={16} />
                    Open 7 Days • 8AM – 8PM
                  </div>

                  <div className="flex items-center gap-2">
                    <Navigation size={16} />
                    Near major moving routes in {data.city}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* LANDMARKS */}
          <div className="mt-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground/50">
              Nearby Landmarks
            </h3>

            <div className="mt-4 flex flex-wrap gap-3">
              {data.landmarks.map((landmark) => (
                <div
                  key={landmark}
                  className="rounded-full border border-primary/10 bg-white px-4 py-2 text-sm shadow-sm"
                >
                  {landmark}
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-3 flex flex-col gap-4 sm:flex-row">
            <a
              href="tel:+977XXXXXXXXX"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-secondary px-6 py-3 text-sm font-medium text-white shadow-lg shadow-secondary/20 transition hover:-translate-y-0.5"
            >
              <Phone size={18} />
              Call Now
            </a>

            <Link
              href="/get-quote"
              className="inline-flex items-center justify-center rounded-2xl border border-primary/10 bg-white px-6 py-3 text-sm font-medium text-foreground transition hover:border-primary/30 hover:bg-primary/5"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CityMapSection;
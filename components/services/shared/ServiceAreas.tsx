import Link from "next/link";
import {
  ArrowUpRight,
  MapPin,
  Navigation,
  Building2,
} from "lucide-react";

const cities = [
  {
    name: "Kathmandu",
    slug: "kathmandu-packers-movers",
    desc: "Apartment shifting, office relocation and local moving services across Kathmandu Valley.",
  },
  {
    name: "Lalitpur",
    slug: "lalitpur-packers-movers",
    desc: "Professional movers available in Jawalakhel, Pulchowk, Satdobato and nearby areas.",
  },
  {
    name: "Bhaktapur",
    slug: "bhaktapur-packers-movers",
    desc: "Reliable packing and relocation services for homes and businesses in Bhaktapur.",
  },
  {
    name: "Pokhara",
    slug: "pokhara-packers-movers",
    desc: "Intercity and local moving services with safe transportation support in Pokhara.",
  },
  {
    name: "Chitwan",
    slug: "chitwan-packers-movers",
    desc: "House shifting and furniture moving services across Bharatpur and surrounding areas.",
  },
  {
    name: "Butwal",
    slug: "butwal-packers-movers",
    desc: "Fast relocation support for residential and commercial shifting in Butwal.",
  },
];

const ServiceAreas = ({
  service, description
}: {
  service: string;
  description: string;
}) => {
  return (
    <section className="relative overflow-hidden w-full">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-primary to-primary/95" />

      {/* Glow */}
      <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-10 md:px-18 py-18">
        {/* Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 backdrop-blur-xl">
              <MapPin size={14} />
              Areas We Serve
            </span>

            <h2 className="mt-5 font-inter text-3xl font-semibold tracking-tight text-white md:text-4xl">
              {service}
              <br className="hidden md:block" />
              Services Across Nepal
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/70 md:text-base">
              {description} available across
              major cities in Nepal with same-day support in
              selected locations.
            </p>
          </div>

          {/* Floating stats card */}
          <div className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur-2xl lg:max-w-xs">
            <p className="text-sm text-white/70">
              Active Service Coverage
            </p>

            <div className="mt-3 flex items-end gap-2">
              <p className="text-4xl font-semibold text-white">
                {cities.length}+
              </p>

              <p className="pb-1 text-sm text-white/60">
                major cities
              </p>
            </div>

            <div className="mt-5 flex items-center gap-2 text-sm text-white/80">
              <Navigation size={15} />
              Same-day moving support available
            </div>
          </div>
        </div>

        {/* City Grid */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {cities.map((city, index) => (
            <Link
              key={city.slug}
              href={`/${city.slug}`}
              className="group relative overflow-hidden rounded-4xl border border-white/10 bg-white/8 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-white/20 hover:bg-white/12"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-linear-to-br from-white/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-white shadow-lg">
                    <Building2 size={24} strokeWidth={1.8} />
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-medium uppercase tracking-widest text-white/40">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="mt-2 text-lg font-semibold text-white">
                      {city.name}
                    </h3>

                    <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-white/8 px-3 py-1 text-xs text-white/70">
                      <MapPin size={13} />
                      Nepal
                    </div>
                  </div>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/50 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white">
                  <ArrowUpRight size={18} />
                </div>
              </div>

              <div className="mt-6 h-px w-full bg-linear-to-r from-white/10 via-white/5 to-transparent" />

              <p className="mt-5 text-sm leading-relaxed text-white/60">
                {city.desc}
              </p>

              {/* Explore Link */}
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white transition group-hover:gap-3">
                Explore City
                <ArrowUpRight size={16} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
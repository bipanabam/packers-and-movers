import {
  Clock3,
  ShieldCheck,
  Users,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

const items = [
  {
    title: "Trained Moving Staff",
    desc: "Experienced movers trained for safe handling and organized relocation support.",
    icon: Users,
  },
  {
    title: "Secure Packing",
    desc: "Premium wrapping materials for furniture, appliances and fragile household items.",
    icon: ShieldCheck,
  },
  {
    title: "On-Time Delivery",
    desc: "Reliable transportation scheduling with same-day support in selected areas.",
    icon: Clock3,
  },
  {
    title: "Coverage Across Nepal",
    desc: "Available across Kathmandu Valley and major intercity relocation routes.",
    icon: MapPin,
  },
];

const ServiceWhyChooseUs = () => {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-10 lg:px-18">
        <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Left */}
          <div className="lg:sticky lg:top-28 h-fit">
            <span className="rounded-full border border-secondary/20 bg-secondary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
              Why Choose Us
            </span>

            <h2 className="mt-5 max-w-xl font-inter text-3xl font-semibold tracking-tight md:text-[40px] leading-tight">
              Trusted Packers &
              <br className="hidden md:block" />
              Movers Across Nepal
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-relaxed text-foreground/60 md:text-base">
              We combine experienced manpower, organized transportation,
              secure packing materials and responsive customer support
              to make every relocation simple and stress-free.
            </p>

            {/* Bottom feature line */}
            <div className="mt-10 space-y-4">
              {[
                "Same-day moving support",
                "Affordable transparent pricing",
                "Professional packing materials",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm text-foreground/70"
                >
                  <div className="h-2 w-2 rounded-full bg-secondary" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="grid gap-5 sm:grid-cols-2">
            {items.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-4xl border border-primary/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl"
                >
                  {/* top */}
                  <div className="flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                      <Icon size={24} />
                    </div>

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/10 text-foreground/40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary">
                      <ArrowUpRight size={18} />
                    </div>
                  </div>

                  {/* content */}
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold tracking-tight">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-sm leading-relaxed text-foreground/60">
                      {item.desc}
                    </p>
                  </div>

                  {/* bottom line */}
                  <div className="mt-8 h-px w-full bg-linear-to-r from-primary/10 via-primary/5 to-transparent" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceWhyChooseUs;
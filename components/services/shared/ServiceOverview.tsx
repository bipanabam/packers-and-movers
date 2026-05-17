import {
  ShieldCheck,
  Clock3,
  Truck,
  Users,
} from "lucide-react";

import { ServiceDataType } from "@/types/service";

const highlights = [
  {
    title: "Professional Team",
    description:
      "Trained movers experienced in safe handling and organized relocation.",
    icon: Users,
  },
  {
    title: "Damage Protection",
    description:
      "Protective wrapping and secure loading for fragile and valuable items.",
    icon: ShieldCheck,
  },
  {
    title: "On-Time Moving",
    description:
      "Reliable scheduling with same-day and planned relocation support.",
    icon: Clock3,
  },
  {
    title: "Modern Vehicles",
    description:
      "Well-maintained trucks and transport vehicles for safe delivery.",
    icon: Truck,
  },
];

const ServiceOverview = ({
  data,
}: {
  data: ServiceDataType;
}) => {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-background via-primary/5 to-background" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          {/* Left Content */}
          <div>
            <span className="rounded-full border border-secondary/20 bg-secondary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
              Complete Moving Solution
            </span>

            <h2 className="mt-6 max-w-2xl font-inter text-3xl font-semibold tracking-tight md:text-[40px] leading-tight">
              {data.intro.title}
            </h2>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/60">
              {data.intro.description}
            </p>

            {/* SEO Rich Content */}
            <div className="mt-8 space-y-4 text-sm leading-relaxed text-foreground/60">
              <p>
                Our {data.title.toLowerCase()} service is designed for
                safe, efficient and stress-free relocation across
                Kathmandu Valley and major cities of Nepal.
              </p>

              <p>
                From packing and loading to transportation and unloading,
                our trained movers handle every step professionally using
                modern equipment and secure packing materials.
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid gap-5 sm:grid-cols-2">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-4xl border border-primary/10 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition group-hover:scale-105">
                    <Icon size={24} />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold tracking-tight">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-foreground/60">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;
import {
  Check,
  Package,
  ShieldCheck,
  Sofa,
  Truck,
  Box,
} from "lucide-react";

const items = [
  {
    title: "Packing Materials",
    icon: Package,
  },
  {
    title: "Furniture Wrapping",
    icon: Sofa,
  },
  {
    title: "Loading & Unloading",
    icon: Truck,
  },
  {
    title: "Transportation",
    icon: Truck,
  },
  {
    title: "Furniture Rearrangement",
    icon: Box,
  },
  {
    title: "Fragile Item Protection",
    icon: ShieldCheck,
  },
];

const ServiceIncluded = () => {
  return (
    <section className="relative overflow-hidden bg-primary/5 w-full">
      {/* Soft glow */}
      <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl  px-10 lg:px-18 py-16">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          {/* Left */}
          <div>
            <span className="rounded-full border border-secondary/20 bg-secondary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
              Included Services
            </span>

            <h2 className="mt-5 font-inter text-3xl font-semibold tracking-tight md:text-5xl leading-tight">
              Everything Needed
              <br className="hidden md:block" />
              For A Smooth Move
            </h2>

            <p className="mt-6 max-w-lg text-sm leading-relaxed text-foreground/60 md:text-[15px]">
              From careful packing and secure loading to safe
              transportation and setup assistance, our relocation
              service covers every essential part of your move.
            </p>

            {/* mini stats */}
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="rounded-2xl border border-primary/10 bg-white px-5 py-3 shadow-sm">
                <p className="text-lg font-semibold text-primary">
                  500+
                </p>
                <p className="text-xs text-foreground/50">
                  Successful Moves
                </p>
              </div>

              <div className="rounded-2xl border border-primary/10 bg-white px-5 py-3 shadow-sm">
                <p className="text-lg font-semibold text-primary">
                  7 Days
                </p>
                <p className="text-xs text-foreground/50">
                  Availability
                </p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="grid gap-4 sm:grid-cols-2">
            {items.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-3xl border border-primary/10 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-white">
                      <Icon size={20} />
                    </div>

                    <div>
                      <h3 className="font-semibold tracking-tight">
                        {item.title}
                      </h3>

                      <div className="mt-2 flex items-center gap-2 text-sm text-foreground/50">
                        <Check size={14} className="text-secondary" />
                        Included in relocation support
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceIncluded;
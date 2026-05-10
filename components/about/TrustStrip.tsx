import {
  Truck,
  Clock3,
  Smile,
  MapPin,
} from "lucide-react";

const items = [
  {
    icon: Truck,
    title: "1000+",
    subtitle: "Moves Completed",
  },
  {
    icon: Clock3,
    title: "5+ Years",
    subtitle: "Relocation Experience",
  },
  {
    icon: Smile,
    title: "500+",
    subtitle: "Happy Customers",
  },
  {
    icon: MapPin,
    title: "Kathmandu +",
    subtitle: "Nationwide Coverage",
  },
];

const TrustStrip = () => {
  return (
    <section className="w-full bg-primary/5 border-y border-primary/10">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-10">
        <p className="text-center text-sm uppercase tracking-[0.2em] text-foreground/40 mb-8">
        Trusted Across Nepal
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex items-center gap-4 group"
              >
                {/* Icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm border border-primary/10 transition-transform duration-300 group-hover:-translate-y-1">
                  <Icon
                    size={28}
                    className="text-secondary"
                    strokeWidth={1.8}
                  />
                </div>

                {/* Text */}
                <div className="flex flex-col">
                  <h3 className="text-2xl font-bold text-secondary leading-none">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-sm text-foreground/50 leading-snug">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
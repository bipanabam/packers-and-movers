import {
  Star,
  Truck,
  Clock3,
  ShieldCheck,
} from "lucide-react";

const stats = [
  {
    icon: Truck,
    value: "1200+",
    label: "Moves Completed",
  },
  {
    icon: Star,
    value: "4.9★",
    label: "Customer Rating",
  },
  {
    icon: Clock3,
    value: "24/7",
    label: "Availability",
  },
  {
    icon: ShieldCheck,
    value: "100%",
    label: "Safe Handling",
  },
];

const CityTrustStats = () => {
  return (
    <section className="relative z-10 lg:-mt-10 px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 rounded-4xl border border-primary/10 bg-white p-5 shadow-xl shadow-primary/5 md:grid-cols-4 md:p-7">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="flex flex-col items-center justify-center rounded-3xl border border-primary/5 bg-primary/3 px-4 py-6 text-center"
            >
              <div className="rounded-2xl bg-primary/10 p-3 text-primary">
                <Icon size={22} />
              </div>

              <p className="mt-4 text-2xl font-semibold tracking-tight text-primary">
                {item.value}
              </p>

              <p className="mt-1 text-xs uppercase tracking-wide text-foreground/50">
                {item.label}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CityTrustStats;
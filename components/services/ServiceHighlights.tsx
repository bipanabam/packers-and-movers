import {
  Clock3,
  ShieldCheck,
  Truck,
  Users,
} from "lucide-react";

const highlights = [
  {
    icon: Clock3,
    title: "Same-Day Moving",
  },
  {
    icon: ShieldCheck,
    title: "Safe Packing",
  },
  {
    icon: Users,
    title: "Trained Movers",
  },
  {
    icon: Truck,
    title: "Nationwide Coverage",
  },
];

const ServiceHighlights = () => {
  return (
    <section className="border-y border-primary/10 bg-white py-5">
      <div className="mx-auto flex flex-wrap items-center justify-center gap-x-10 gap-y-4 px-6">
        {highlights.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="flex items-center gap-3"
            >
              <div className="rounded-xl bg-primary/10 p-2 text-primary">
                <Icon size={18} />
              </div>

              <span className="text-sm font-medium text-foreground/75">
                {item.title}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServiceHighlights;
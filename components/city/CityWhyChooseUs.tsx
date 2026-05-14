import Image from "next/image";
import {
  ShieldCheck,
  Truck,
  Clock3,
  PackageCheck,
  Building2,
  Users,
} from "lucide-react";

const features = [
  {
    title: "Same-Day Moving Support",
    desc: "Quick relocation scheduling across the city.",
    icon: Clock3,
  },
  {
    title: "Apartment Floor Handling",
    desc: "Safe shifting from apartments and high-rise buildings.",
    icon: Building2,
  },
  {
    title: "Furniture Protection",
    desc: "Protective wrapping for fragile and premium furniture.",
    icon: ShieldCheck,
  },
  {
    title: "Office Relocation",
    desc: "Weekend office moves with minimal downtime.",
    icon: Truck,
  },
  {
    title: "Dedicated Supervisor",
    desc: "Single point of coordination throughout the move.",
    icon: Users,
  },
  {
    title: "Safe Delivery",
    desc: "Careful loading, transport and unloading process.",
    icon: PackageCheck,
  },
];

const CityWhyChooseUs = ({
  city,
}: {
  city: string;
}) => {
  return (
    <section className="py-20">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        {/* IMAGE */}
        <div className="relative overflow-hidden rounded-4xl">
          <div className="relative h-140 overflow-hidden rounded-4xl">
            <Image
              src="/assets/cities/why-choose-us.jpeg"
              alt={`Professional movers and packers in ${city}`}
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>

          <div className="absolute bottom-5 left-5 rounded-2xl bg-white/90 px-5 py-4 shadow-xl backdrop-blur-xl">
            <p className="text-xs uppercase tracking-wider text-foreground/50">
              Trusted Operations
            </p>

            <p className="mt-1 text-xl font-semibold text-secondary">
              500+ Moves
            </p>

            <p className="mt-1 text-xs text-foreground/60">
              Completed across {city}
            </p>
          </div>
        </div>

        {/* CONTENT */}
        <div>
          <span className="rounded-full border border-secondary/20 bg-secondary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
            Why Choose Us
          </span>

          <h2 className="mt-5 font-inter text-3xl font-semibold tracking-tight md:text-4xl">
            Reliable Movers and Packers in {city}
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-foreground/60">
            Our experienced movers handle apartment shifting,
            office relocation, packing, loading and transportation
            with organized planning and secure handling.
          </p>

          {/* GRID */}
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {features.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-3xl border border-primary/10 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className="rounded-2xl bg-primary/10 p-3 text-primary transition group-hover:bg-primary group-hover:text-white">
                      <Icon size={22} />
                    </div>

                    <div>
                      <h3 className="font-semibold">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-relaxed text-foreground/60">
                        {item.desc}
                      </p>
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

export default CityWhyChooseUs;
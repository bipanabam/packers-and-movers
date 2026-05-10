import Image from "next/image";
import {
  ShieldCheck,
  Truck,
  PackageCheck,
} from "lucide-react";

const items = [
  {
    image: "/assets/expert-packers.jpg",
    title: "Expert Packers",
    subtitle:
      "Safe and professional packing for furniture, electronics, and fragile belongings.",
    icon: PackageCheck,
  },
  {
    image: "/assets/logistics-expert.jpg",
    title: "Logistics Experts",
    subtitle:
      "Efficient move coordination and route planning for smooth relocations across Nepal.",
    icon: Truck,
  },
  {
    image: "/assets/safe-drivers.png",
    title: "Verified Drivers",
    subtitle:
      "Experienced transport professionals trained for safe long-distance delivery.",
    icon: ShieldCheck,
  },
];

const OurTeam = () => {
  return (
    <section className="w-full px-5 md:px-10 py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
            {/* Heading */}
            <div className="mx-auto max-w-2xl text-center">
                <span className="rounded-full bg-primary/5 px-4 py-1 text-xs font-medium tracking-wider text-secondary">
                    Professional Moving Team
                </span>

                <h2 className="mt-4 font-inter text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
                    Experienced Professionals Behind Every Safe Move
                </h2>

                <p className="mt-4 text-sm leading-relaxed text-foreground/60">
                    Our trained movers, packers, and logistics professionals ensure
                    secure house shifting and office relocation services across
                    Kathmandu and Nepal.
                </p>
            </div>

            {/* Cards */}
            <div className="mt-12 grid gap-6 md:grid-cols-3">
            {items.map((item) => {
                const Icon = item.icon;

                return (
                <article
                    key={item.title}
                    className="group overflow-hidden rounded-3xl border border-primary/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden">
                    <Image
                        src={item.image}
                        alt="Expert house shifting packers in Kathmandu"
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col gap-4 p-6">
                    {/* Icon */}
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/5">
                        <Icon
                        size={22}
                        className="text-secondary"
                        strokeWidth={2}
                        />
                    </div>

                    {/* Text */}
                    <div className="flex flex-col gap-2">
                        <h3 className="text-xl font-semibold text-foreground">
                        {item.title}
                        </h3>

                        <p className="text-sm leading-relaxed text-foreground/60">
                        {item.subtitle}
                        </p>
                    </div>
                    </div>
                </article>
                );
            })}
            </div>
            {/* Trust Strip */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 border-t border-primary/10 pt-6 after:w-px after:h-4 after:bg-primary/10">
            {[
                "Background Checked",
                "Trained Movers",
                "Insured Handling",
            ].map((item) => (
                <div
                key={item}
                className="flex items-center gap-2 text-sm text-foreground/60"
                >
                <div className="h-2 w-2 rounded-full bg-secondary" />
                <span>{item}</span>
                </div>
            ))}
            </div>

            {/* CTA */}
            <div className="mt-12 rounded-3xl border border-primary/10 bg-primary/5 px-6 py-8 md:px-10 md:py-10">
                <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
                    
                    {/* Left */}
                    <div className="max-w-xl">
                        <h3 className="text-2xl font-semibold text-foreground">
                            Need Professional Movers for Your Next Relocation?
                        </h3>

                        <p className="mt-2 text-sm leading-relaxed text-foreground/60">
                            Get reliable house shifting and office relocation services from trusted movers in Kathmandu and across Nepal.
                        </p>
                    </div>

                    {/* Right */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="/get-quote"
                            className="rounded-xl bg-secondary px-6 py-3 text-sm font-medium text-white shadow-md transition-all duration-300 hover:scale-[1.02]"
                        >
                            Get Free Quote
                        </a>

                        <a
                            href="tel:+977XXXXXXXXX"
                            className="rounded-xl border border-primary/10 bg-white px-6 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:bg-primary/5"
                        >
                            Call Now
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default OurTeam;
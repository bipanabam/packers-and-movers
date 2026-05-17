import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Phone,
  ShieldCheck,
  Clock3,
  Truck,
} from "lucide-react";

const stats = [
  {
    label: "Successful Moves",
    value: "500+",
    icon: Truck,
  },
  {
    label: "Availability",
    value: "7 Days",
    icon: Clock3,
  },
  {
    label: "Safe Handling",
    value: "100%",
    icon: ShieldCheck,
  },
];

const ServiceHero = () => {
  return (
    <section className="w-full px-10 lg:px-18 py-10 lg:py-14">
        <div className="mx-auto grid gap-14 lg:grid-cols-2 lg:items-center">
            <div>
                <span className="rounded-full border border-secondary/20 bg-secondary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
                    Trusted Packers & Movers
                </span>

                <h1 className="mt-6 max-w-2xl font-inter text-4xl font-semibold tracking-tight text-foreground md:text-5xl md:leading-[1.1]">
                    Professional Relocation Services Across Nepal
                </h1>

                <p className="mt-6 max-w-xl text-sm md:text-base leading-relaxed text-foreground/65">
                    House shifting, office relocation, furniture moving,
                    packing and transportation services with trained movers,
                    secure handling and same-day availability.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                    <Link
                    href="/get-quote"
                    className="inline-flex items-center gap-2 rounded-2xl bg-secondary px-6 py-3 text-sm font-medium text-white shadow-lg shadow-secondary/20 transition hover:-translate-y-0.5"
                    >
                    Get Free Quote
                    <ArrowRight size={18} />
                    </Link>

                    <a
                    href="tel:+9779800000000"
                    className="inline-flex items-center gap-2 rounded-2xl border border-primary/10 bg-white px-6 py-3 text-sm font-medium shadow-sm transition hover:border-primary/30"
                    >
                    <Phone size={18} />
                    Call Now
                    </a>
                </div>

                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                    {stats.map((item) => {
                    const Icon = item.icon;

                    return (
                        <div
                        key={item.label}
                        className="rounded-3xl border border-primary/10 bg-white p-5 shadow-sm"
                        >
                        <div className="flex items-center justify-between">
                            <Icon size={20} className="text-primary" />

                            <span className="text-xs text-foreground/40">
                            Trusted
                            </span>
                        </div>
                        <p className="mt-5 text-2xl font-semibold tracking-tight">
                            {item.value}
                        </p>

                        <p className="mt-1 text-sm text-foreground/55">
                            {item.label}
                        </p>
                        </div>
                    );
                    })}
                </div>
            </div>

            <div className="relative overflow-hidden rounded-4xl border border-primary/10 bg-white shadow-2xl shadow-primary/5">
                <div className="relative h-125">
                    <Image
                    src="/assets/service-hero.jpg"
                    alt="Professional movers handling relocation service in Nepal"
                    fill
                    priority
                    sizes="(max-width:1024px)100vw,50vw"
                    className="object-cover"
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />

                    <div className="absolute bottom-5 left-5 rounded-3xl bg-white/90 p-5 backdrop-blur-xl shadow-xl">
                    <p className="text-xs uppercase tracking-[0.2em] text-foreground/50">
                        Available Across
                    </p>

                    <p className="mt-2 text-lg font-semibold text-secondary">
                        Kathmandu • Lalitpur • Bhaktapur • Pokhara
                    </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default ServiceHero;
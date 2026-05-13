import Link from "next/link";
import Image from "next/image";
import { Phone, ShieldCheck, Clock3, MapPin } from "lucide-react";

const trustItems = [
  "Same Day Availability",
  "7 Days Service",
  "Trained Movers",
  "Kathmandu to All Nepal",
];

const AreasHero = () => {
  return (
    <section className="w-full px-10 md:px-18 py-10 md:py-14">
      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
        {/* Left */}
        <div className="flex flex-col items-start w-full">
          <span className="rounded-full border border-secondary/20 bg-secondary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
            Areas We Serve
          </span>

          <h1 className="mt-6 max-w-2xl text-4xl font-semibold font-inter tracking-tight text-foreground md:text-5xl leading-tight">
            <span className="text-primary"> Packers </span> 
            and 
            <span className="text-secondary"> Movers </span> 
            Across Kathmandu & Nepal
          </h1>

          <p className="mt-5 max-w-xl text-sm md:text-base leading-relaxed text-foreground/60">
            Reliable house shifting, office relocation, packing, and vehicle
            transportation services across Kathmandu Valley and major cities of
            Nepal.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="tel:+9779812345678"
              className="flex items-center justify-center gap-2 rounded-2xl border border-secondary px-7 py-3 text-sm font-medium text-secondary transition hover:bg-secondary/10"
            >
              <Phone size={18} />
              Call Now
            </a>

            <Link
              href="/get-quote"
              className="rounded-2xl bg-secondary px-7 py-3 text-center text-sm font-medium text-white shadow-lg shadow-secondary/20 transition hover:-translate-y-0.5"
            >
              Get Free Quote
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {trustItems.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 rounded-full border border-primary/10 bg-white px-4 py-2 text-sm text-foreground/70 shadow-sm"
              >
                <ShieldCheck size={15} className="text-secondary" />
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-4xl border border-primary/10 bg-white shadow-xl">
            <div className="relative aspect-4/3">
              <Image
                src="/assets/areas-we-serve.jpg"
                alt="Packers and movers coverage map across Nepal"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/70 p-4 backdrop-blur-md">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 text-secondary" size={18} />
                <div>
                  <p className="font-medium text-foreground">
                    Nationwide Logistics Coverage
                  </p>

                  <p className="mt-1 text-xs text-foreground/60">
                    Serving Kathmandu, Lalitpur, Bhaktapur, Pokhara, Chitwan,
                    Butwal, Dharan and major cities across Nepal.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -left-4 top-4 hidden rounded-2xl border border-primary/10 bg-white p-4 shadow-lg md:block">
            <div className="flex items-center gap-3">
              <Clock3 className="text-secondary" size={18} />
              <div>
                <p className="text-sm font-medium">Fast Response</p>
                <p className="text-xs text-foreground/50">
                  Usually within 10 minutes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AreasHero;
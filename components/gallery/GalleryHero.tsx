import Link from "next/link";
import { Phone, ShieldCheck, Clock3, MapPin } from "lucide-react";

const trustItems = [
  "1000+ Successful Moves",
  "Available 7 Days",
  "Insured Handling",
  "Kathmandu to All Nepal",
];

const GalleryHero = () => {
  return (
    <section className="relative overflow-hidden w-full border-b border-primary/10 bg-linear-to-b from-primary/5 via-background to-background">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-10 md:py-16 text-center">
        <span className="rounded-full border border-secondary/20 bg-secondary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
          Our Work Gallery
        </span>

        <h1 className="mt-6 max-w-4xl font-inter text-4xl font-semibold tracking-tight text-foreground md:text-5xl leading-tight">
          Packers and Movers Across Kathmandu and Nepal
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-relaxed text-foreground/60 md:text-lg">
          Explore real house shifting, office relocation, vehicle transport,
          and packing service projects completed by our experienced movers and
          packers team across Kathmandu Valley and major cities in Nepal.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a
            href="tel:+977XXXXXXXXX"
            className="flex items-center justify-center gap-2 rounded-2xl border border-secondary px-7 py-3 text-sm font-medium text-secondary transition hover:bg-secondary hover:text-white"
          >
            <Phone size={18} />
            Call Now
          </a>

          <Link
            href="/get-quote"
            className="rounded-2xl bg-secondary px-7 py-3 text-sm font-medium text-white shadow-lg shadow-secondary/20 transition hover:-translate-y-0.5 hover:shadow-xl"
          >
            Get Free Quote
          </Link>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          {trustItems.map((item) => (
            <div
              key={item}
              className="rounded-full border border-primary/10 bg-white px-4 py-2 text-sm text-foreground/70 shadow-sm"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryHero;
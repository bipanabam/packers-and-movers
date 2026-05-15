import Link from "next/link";
import {
  Phone,
  ArrowRight,
} from "lucide-react";

const CityCTA = ({
  city,
}: {
  city: string;
}) => {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-primary" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.15),transparent_40%)]" />

      <div className="relative mx-auto max-w-5xl px-6 text-center text-white">
        <span className="rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] backdrop-blur-sm">
          Ready to Move?
        </span>

        <h2 className="mt-6 font-inter text-3xl font-semibold tracking-tight md:text-4xl">
          Book Trusted Packers and Movers in {city}
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-white/75">
          Get fast relocation support for house shifting,
          office moving, packing and transportation across
          {` ${city}`} and nearby areas.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="tel:+977XXXXXXXXX"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-7 py-3 text-sm font-semibold text-primary shadow-xl transition hover:-translate-y-0.5"
          >
            <Phone size={18} />
            Call Now
          </a>

          <Link
            href="/get-quote"
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-7 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
          >
            Get Free Quote
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CityCTA;
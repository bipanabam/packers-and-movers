import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

const ServiceCTA = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-16 mb-16">
        <div className="rounded-3xl p-8 md:p-12 shadow-xl bg-linear-to-br from-primary via-primary to-primary/80 border border-white/10">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
                <span className="rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
                Get Started
                </span>

                <h2 className="mt-5 font-inter text-3xl font-semibold text-white tracking-tight md:text-4xl md:leading-tight">
                Planning To Move? Get A Free Quote Today.
                </h2>

                <p className="mt-5 text-base leading-relaxed text-white/70">
                Contact our relocation team for secure packing,
                trained movers and fast transportation services.
                </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                    href="/get-quote"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3 text-sm font-medium text-primary transition hover:bg-white/90"
                    >
                    Get Free Quote
                    <ArrowRight size={18} />
                </Link>

                <a
                    href="tel:+9779800000000"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 py-3 text-sm text-white font-medium backdrop-blur-sm transition hover:bg-white/20"
                >
                    <Phone size={18} />
                    Call Now
                </a>
            </div>
            </div>
        </div>
    </section>
  );
};

export default ServiceCTA;
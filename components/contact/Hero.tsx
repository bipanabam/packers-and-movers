import Link from "next/link";
import { Phone, Star, ShieldCheck, Clock, MapPin } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

const Hero = () => {
  return (
    <section className="w-full bg-linear-to-b from-primary/5 via-background to-background">
      <div className="mx-auto max-w-7xl px-5 md:px-10 py-10 md:py-16">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <span className="rounded-full bg-secondary/10 px-4 py-1 text-secondary font-medium font-inter text-xs tracking-wide border border-secondary/20 shadow-sm">
          Contact Pashupati Packers & Movers
          </span>
          {/* Heading */}
          <h1 className="mt-6 max-w-4xl font-inter text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
            Get in Touch With Trusted Packers and Movers in Kathmandu
          </h1>

          {/* Subtitle */}
          <p className="mt-5 max-w-2xl text-sm md:text-base leading-relaxed text-foreground/60">
            Need house shifting, office relocation, or urgent moving support?
            Our relocation experts are available 7 days a week to help you
            move safely across Kathmandu and Nepal.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href="https://wa.me/977XXXXXXXXX"
              className="flex items-center justify-center gap-2 rounded-xl bg-green-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-green-500/20 transition hover:scale-[1.02]"
            >
              <WhatsAppIcon size={18} />
              WhatsApp Now
            </a>

            <a
              href="tel:+977XXXXXXXXX"
              className="flex items-center justify-center gap-2 rounded-xl border border-primary/15 bg-white px-6 py-3 text-sm font-medium text-foreground shadow-sm transition hover:bg-primary/5"
            >
              <Phone size={18} />
              Call Now
            </a>

            <Link
              href="/get-quote"
              className="flex items-center justify-center rounded-xl bg-secondary px-6 py-3 text-sm font-medium text-white shadow-lg shadow-secondary/20 transition hover:scale-[1.02]"
            >
              Get Free Quote
            </Link>
          </div>

          {/* Trust badges */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-5 md:gap-8">
            {[
              {
                icon: Star,
                label: "4.9★ Rated",
              },
              {
                icon: Clock,
                label: "10 Min Response",
              },
              {
                icon: ShieldCheck,
                label: "Verified Movers",
              },
              {
                icon: MapPin,
                label: "Kathmandu & Nepal",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="flex items-center gap-2 text-sm text-foreground/70"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-secondary">
                    <Icon size={18} />
                  </div>

                  <span>{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
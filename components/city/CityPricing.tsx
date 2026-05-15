import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

import { CityDataType } from "@/types/city";

const CityPricing = ({
  data,
}: {
  data: CityDataType;
}) => {
  return (
    <section className="relative overflow-hidden bg-primary/5 py-20">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.08),transparent_40%)]" />

      <div className="relative mx-auto max-w-7xl px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full border border-secondary/20 bg-secondary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
            Pricing Estimate
          </span>

          <h2 className="mt-5 font-inter text-3xl font-semibold tracking-tight md:text-5xl">
            House Shifting Cost in {data.city}
          </h2>

          <p className="mt-5 text-base leading-relaxed text-foreground/60">
            Transparent moving estimates based on house size,
            packing requirements, truck size and floor access.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {data.pricing.map((plan) => (
            <div
              key={plan.title}
              className={`group relative overflow-hidden rounded-4xl border p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                plan.highlighted
                  ? "border-primary bg-primary/10 shadow-xl"
                  : "border-primary/10 bg-white shadow-sm"
              }`}
            >
              {/* Popular Badge */}
              {plan.highlighted && (
                <div className="absolute right-4 top-4 rounded-full bg-primary px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
                  Most Popular
                </div>
              )}

              {/* Title */}
              <h3 className="text-2xl font-semibold tracking-tight">
                {plan.title}
              </h3>

              {/* Price */}
              <p className="mt-5 text-4xl font-bold tracking-tight text-secondary">
                {plan.price}
              </p>

              <p className="mt-2 text-sm text-foreground/50">
                Final pricing depends on distance,
                packing and accessibility.
              </p>

              {/* Features */}
              <div className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0 text-primary"
                    />

                    <span className="text-sm text-foreground/75">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link
                href="/get-quote"
                className={`mt-10 inline-flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-4 text-sm font-medium transition ${
                  plan.highlighted
                    ? "bg-primary text-white hover:bg-primary/90"
                    : "border border-primary/20 bg-white hover:bg-primary/5"
                }`}
              >
                Get Quote
                <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-10 text-center">
          <p className="text-sm text-foreground/50">
            Need custom pricing for intercity relocation,
            warehouse shifting or commercial transport?
          </p>

          <Link
            href="/get-quote"
            className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-secondary transition hover:gap-3"
          >
            Request Custom Quote
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CityPricing;
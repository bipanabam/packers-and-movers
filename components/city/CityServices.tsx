import Image from "next/image";
import Link from "next/link";

import {
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

import { CityDataType } from "@/types/city";

const serviceHighlights = [
  "Safe Packing",
  "Trained Staff",
  "Fast Delivery",
];

const CityServices = ({
  data,
}: {
  data: CityDataType;
}) => {
  return (
    <section className="relative overflow-hidden py-20">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-primary/5 via-background to-background" />

      <div className="relative mx-auto max-w-7xl px-8">
        {/* Heading */}
        <div className="max-w-3xl">
          <span className="rounded-full border border-secondary/20 bg-secondary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
            Professional Moving Solutions
          </span>

          <h2 className="mt-5 font-inter text-3xl font-semibold tracking-tight md:text-5xl">
            Moving Services in {data.city}
          </h2>

          <p className="mt-5 text-base leading-relaxed text-foreground/60">
            Reliable packing and moving services designed for apartments,
            offices, commercial spaces and intercity relocation across{" "}
            {data.city}.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-14 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {data.services.map((service, index) => (
            <article
              key={service.title}
              className="group relative overflow-hidden rounded-4xl border border-primary/10 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={service.image}
                  alt={`${service.title} in ${data.city}`}
                  fill
                  sizes="(max-width:768px)100vw,33vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent" />

                {/* Top */}
                <div className="absolute left-5 top-5 flex items-center gap-3">
                  <div className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
                    0{index + 1}
                  </div>

                  <div className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-white">
                    Popular
                  </div>
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-2xl font-semibold tracking-tight">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-white/75">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Features */}
                <div className="flex flex-wrap gap-3">
                  {serviceHighlights.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 rounded-full bg-primary/5 px-3 py-2 text-xs font-medium text-foreground/70"
                    >
                      <CheckCircle2
                        size={14}
                        className="text-primary"
                      />

                      {item}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-8 flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-foreground/40">
                      Available in
                    </p>

                    <p className="text-sm font-semibold">
                      {data.city}, Nepal
                    </p>
                  </div>

                  <Link
                    href="/get-quote"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white transition group-hover:rotate-45"
                  >
                    <ArrowUpRight size={20} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CityServices;
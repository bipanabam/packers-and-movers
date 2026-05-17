import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Clock3, Phone } from "lucide-react";

import { ServiceDataType } from "@/types/service";

const ServiceHero = ({
  data,
}: {
  data: ServiceDataType;
}) => {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-primary/5 via-background to-background w-full px-10 lg:px-18 py-10 lg:py-14">
      <div className="mx-auto grid gap-14 lg:grid-cols-2 items-center lg:items-start">
        <div>
          <span className="rounded-full border border-secondary/20 bg-secondary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
            Professional Moving Service
          </span>

          <h1 className="mt-6 max-w-2xl font-inter text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            {data.heroTitle}
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/60">
            {data.heroDescription}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/get-quote"
              className="rounded-2xl bg-secondary px-6 py-3 text-sm font-medium text-white shadow-lg shadow-secondary/20 transition hover:-translate-y-0.5"
            >
              Get Free Quote
            </Link>

            <a
              href="tel:+97798XXXXXXXX"
              className="rounded-2xl border border-primary/10 bg-white px-6 py-3 text-sm font-medium shadow-sm transition hover:border-primary/30"
            >
              Call Now
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-6">
            <div className="flex items-center gap-2 text-sm text-foreground/70">
              <ShieldCheck size={16} className="text-secondary" />
              Damage Protection
            </div>

            <div className="flex items-center gap-2 text-sm text-foreground/70">
              <Clock3 size={16} className="text-secondary" />
              Same Day Available
            </div>

            <div className="flex items-center gap-2 text-sm text-foreground/70">
              <Phone size={16} className="text-secondary" />
              Fast Response
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-4xl border border-primary/10 bg-white shadow-2xl">
          <div className="relative h-105 lg:h-130">
            <Image
              src={data.heroImage}
              alt={data.title}
              fill
              priority
              sizes="(max-width:1024px)100vw,50vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
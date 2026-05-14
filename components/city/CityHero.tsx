import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  MessageCircle,
  Clock3,
  ShieldCheck,
  MapPin,
} from "lucide-react";
import WhatsAppIcon from "../icons/WhatsAppIcon";

import { CityDataType } from "@/types/city";

const stats = [
  {
    label: "Successful Moves",
    value: "500+",
    icon: ShieldCheck,
  },
  {
    label: "Availability",
    value: "7 Days",
    icon: Clock3,
  },
  {
    label: "Response Time",
    value: "15 Min",
    icon: Phone,
  },
];

const CityHero = ({
  data,
}: {
  data: CityDataType;
}) => {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-primary/5 via-background to-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-10 md:py-14 lg:grid-cols-2 lg:items-center">
        <div>
          <div className="flex flex-col items-start w-full gap-4">
            <span className="rounded-full border border-secondary/20 bg-secondary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
              Packers & Movers in {data.city}
            </span>

            <h1 className="font-inter text-4xl font-semibold tracking-tight text-foreground md:text-5xl leading-tight">
              {data.heroTitle}
            </h1>

            <p className="max-w-2xl text-sm leading-relaxed text-foreground/60 md:text-base">
              {data.heroDescription}
            </p>
            <div className="mt-3 flex flex-wrap gap-4">
              <a
                href="tel:+977XXXXXXXXX"
                className="flex items-center gap-2 rounded-2xl bg-secondary px-6 py-3 text-sm font-medium text-white shadow-lg shadow-secondary/20 transition hover:-translate-y-0.5"
              >
                <Phone size={18} />
                Call Now
              </a>
              <a
                href="https://wa.me/977XXXXXXXXX"
                className="flex items-center gap-2 rounded-2xl border border-primary/10 bg-white px-6 py-3 text-sm font-medium shadow-sm transition hover:border-primary/30"
              >
                <WhatsAppIcon size={20} />
                WhatsApp
              </a>
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {stats.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="rounded-2xl border border-primary/10 bg-white p-4 shadow-sm"
                >
                  <Icon className="text-secondary" size={18} />

                  <p className="mt-3 text-xl font-semibold">
                    {item.value}
                  </p>

                   <p className="text-xs text-foreground/60">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {data.areas.slice(0, 8).map((area: string) => (
              <div
                key={area}
                className="rounded-full bg-primary/5 px-3 py-1 text-xs text-foreground/70"
              >
                <MapPin size={12} className="inline mr-1" />
                {area}
              </div>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-4xl border border-primary/10 bg-white shadow-2xl">
          <div className="relative h-125">
            <Image
              src={data.heroImage}
              alt={`Packers and movers in ${data.city}`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
           <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />

            <div className="absolute bottom-5 left-5 rounded-2xl bg-white/90 p-4 backdrop-blur-xl shadow-xl">
              <p className="text-xs text-foreground/60">
                Available Across
              </p>

              <p className="mt-1 text-base font-semibold text-secondary">
                {data.city} & Nearby Areas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CityHero;
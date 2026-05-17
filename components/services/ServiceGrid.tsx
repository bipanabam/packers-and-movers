import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "House Shifting",
    slug: "/services/house-shifting",
    image: "/assets/services/house-shifting.png",
    desc: "Apartment and residential relocation services with secure packing and transportation.",
    features: [
      "Packing Included",
      "Furniture Wrapping",
      "Same-Day Available",
    ],
  },
  {
    title: "Office Relocation",
    slug: "/services/office-relocation",
    image: "/assets/services/office-relocation.jpeg",
    desc: "Professional office relocation with minimal downtime and secure equipment handling.",
    features: [
      "Weekend Moving",
      "IT Equipment Packing",
      "Fast Setup",
    ],
  },
  {
    title: "Packing Services",
    slug: "/services/packing-services",
    image: "/assets/services/packing-service.jpeg",
    desc: "Multi-layer packing protection for fragile household and office items.",
    features: [
      "Bubble Wrap",
      "Fragile Protection",
      "Premium Materials",
    ],
  },
  {
    title: "Bike Transport",
    slug: "/services/bike-transport",
    image: "/assets/services/bike-transport.jpg",
    desc: "Bike transport service with multi-layer packing protection.",
    features: [
      "Fragile Protection",
      "Premium Materials",
    ],
  },
];

const ServiceGrid = () => {
  return (
    <section className="bg-primary/5 w-full">
      <div className="mx-auto max-w-7xl px-10 lg:px-18 py-10 lg:py-20">
        <div className="max-w-2xl">
          <span className="rounded-full border border-secondary/20 bg-secondary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
            Services
          </span>

          <h2 className="mt-5 font-inter text-3xl font-semibold tracking-tight md:text-4xl">
            Relocation Services Designed For Every Move
          </h2>

          <p className="mt-5 text-sm lg:text-base leading-relaxed text-foreground/60">
            From local apartment shifting to corporate office relocation,
            we provide professional moving services with trained staff,
            safe packing and secure transportation.
          </p>
        </div>

        <div className="mt-16 grid gap-7 lg:grid-cols-3">
        {services.map((service) => (
          <article
          key={service.title}
          className="group overflow-hidden rounded-4xl border border-primary/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            <div className="relative h-64 overflow-hidden">
              <Image
              src={service.image}
              alt={service.title}
              fill
              sizes="(max-width:768px)100vw,33vw"
              className="object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />

              <div className="absolute left-5 top-5">
              <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium backdrop-blur-sm">
                  Popular Service
              </span>
              </div>
            </div>

            <div className="p-7">
              <h3 className="text-2xl font-semibold tracking-tight">
              {service.title}
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-foreground/60">
              {service.desc}
              </p>

              <div className="mt-6 space-y-3">
              {service.features.map((feature) => (
                  <div
                  key={feature}
                  className="flex items-center gap-3 text-sm"
                  >
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  {feature}
                  </div>
              ))}
              </div>
              <Link
              href={service.slug}
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary transition hover:gap-3"
              >
              Explore Service
              <ArrowRight size={16} />
              </Link>
            </div>
          </article>
        ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;


import { Star, Quote } from "lucide-react";

import { ServiceDataType } from "@/types/service";

const ServiceTestimonials = ({
  data,
}: {
  data: ServiceDataType;
}) => {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl text-center mx-auto">
            <span className="rounded-full border border-secondary/20 bg-secondary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
                Customer Reviews
            </span>
            <h2 className="mt-5 font-inter text-3xl font-semibold tracking-tight md:text-4xl">
                Hear What Our Customers Has To Say
            </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {data.testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-4xl border border-primary/10 bg-white p-7 shadow-sm"
            >
                <div className="flex items-center justify-between">
                    <Quote
                    size={28}
                    className="text-primary/30"
                    />

                    <div className="flex items-center gap-1 text-secondary">
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    </div>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-foreground/70">
                    {item.review}
                </p>

                <div className="mt-6">
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-foreground/50">{item.location}</p>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceTestimonials;
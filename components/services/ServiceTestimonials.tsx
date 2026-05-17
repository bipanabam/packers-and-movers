import { Quote, Star } from "lucide-react";

import { customerReviews } from "@/constants/reviews";

const ServiceTestimonials = () => {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <span className="rounded-full border border-secondary/20 bg-secondary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
            Testimonials
          </span>
          <h2 className="mt-5 font-inter text-3xl font-semibold tracking-tight md:text-4xl">
            Trusted By Hundreds Of Customers
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {customerReviews.map((item) => (
            <div
              key={item.id}
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

              <p className="mt-6 text-base leading-relaxed text-foreground/70">
                “{item.review}”
              </p>

              <div className="mt-6">
                <p className="font-semibold">
                  {item.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceTestimonials;
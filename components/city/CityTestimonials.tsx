import {
  Quote,
  Star,
} from "lucide-react";

import { CityDataType } from "@/types/city";

const CityTestimonials = ({
  data,
}: {
  data: CityDataType;
}) => {
  return (
    <section className="bg-linear-to-b from-primary/5 to-background py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="rounded-full border border-secondary/20 bg-secondary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
            Testimonials
          </span>

          <h2 className="mt-5 font-inter text-3xl font-semibold tracking-tight md:text-4xl">
            What Customers Say in {data.city}
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
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

              <p className="mt-6 text-sm leading-relaxed text-foreground/70">
                "{item.text}"
              </p>

              <div className="mt-8">
                <p className="font-semibold">
                  {item.name}
                </p>

                <p className="mt-1 text-sm text-foreground/50">
                  {item.area}, {data.city}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CityTestimonials;
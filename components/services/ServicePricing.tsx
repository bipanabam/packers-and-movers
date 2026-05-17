import { Check } from "lucide-react";

const pricing = [
  {
    title: "1 BHK Home",
    price: "Starting NPR 6,000",
    features: [
      "2 Packing Staff",
      "1 Mini Truck",
      "Basic Packing Material",
    ],
  },
  {
    title: "2 BHK Home",
    price: "Starting NPR 12,000",
    highlighted: true,
    features: [
      "4 Packing Staff",
      "1 Large Truck",
      "Premium Packing Material",
    ],
  },
  {
    title: "Office Move",
    price: "Custom Quote",
    features: [
      "IT Equipment Packing",
      "Furniture Dismantling",
      "Weekend Shifting Support",
    ],
  },
];

const ServicePricing = () => {
  return (
    <section className="bg-linear-to-br from-primary/5 via-background to-secondary/5 w-full">
      <div className="mx-auto max-w-7xl px-10 lg:px-18 py-24">
        <div className="text-center">
          <span className="rounded-full border border-secondary/20 bg-secondary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
            Pricing
          </span>

          <h2 className="mt-5 font-inter text-3xl font-semibold tracking-tight md:text-4xl">
            Estimated Moving Costs
          </h2>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {pricing.map((item) => (
            <div
              key={item.title}
              className={`rounded-xl border p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                item.highlighted
                  ? "border-primary bg-primary/5 shadow-lg"
                  : "border-primary/10 bg-white"
              }`}
            >
              <h3 className="text-2xl font-semibold tracking-tight">
                {item.title}
              </h3>

              <p className="mt-5 text-4xl font-semibold tracking-tight text-primary">
                {item.price}
              </p>

              <div className="mt-8 space-y-4">
                {item.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 text-sm"
                  >
                    <Check size={18} className="text-primary" />
                    {feature}
                  </div>
                ))}
              </div>

              <button className="mt-10 w-full rounded-2xl bg-primary px-5 py-3 text-sm font-medium text-white transition hover:opacity-90">
                Get Quote
              </button>
            </div>
          ))}
           </div>
      </div>
    </section>
  );
};

export default ServicePricing;
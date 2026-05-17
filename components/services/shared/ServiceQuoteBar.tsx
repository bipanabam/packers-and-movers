import ServiceQuoteForm from "./ServiceQuoteForm";

const ServiceQuoteBar = () => {
  return (
    <section className="relative z-10 -mt-8 px-10 lg:px-18 py-10 lg:py-14">
      <div className="mx-auto rounded-4xl bg-primary p-6 shadow-2xl shadow-primary/20 lg:p-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h2 className="text-2xl font-semibold text-white">
              Get Instant Moving Estimate
            </h2>

            <p className="mt-2 text-sm text-white/70">
              Quick moving quote for apartments, offices and vehicle transport.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {/* <button className="rounded-2xl bg-secondary px-6 py-3 text-sm font-medium text-white">
              Check Pricing
            </button> */}

            <a
              href="tel:+97798XXXXXXXX"
              className="rounded-2xl border border-white/15 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm"
            >
              Call Now
            </a>
          </div>
        </div>

        <ServiceQuoteForm />
      </div>
    </section>
  );
};

export default ServiceQuoteBar;
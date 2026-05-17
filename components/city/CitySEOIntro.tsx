import { CityDataType } from "@/types/city";

const CitySEOIntro = ({
  data,
}: {
  data: CityDataType;
}) => {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-4xl border border-primary/10 bg-linear-to-br from-primary/5 via-background to-secondary/5 p-8 md:p-12">
          <span className="rounded-full border border-secondary/20 bg-secondary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
            Local Moving Experts
          </span>

          <h2 className="mt-6 font-inter text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
            Reliable Packers and Movers in {data.city}
          </h2>

          <div className="mt-8 space-y-5 text-base leading-relaxed text-foreground/70">
            <p>
              Looking for trusted packers and movers in{" "}
              <strong>{data.city}</strong>? We provide
              professional house shifting, office relocation,
              furniture moving, apartment shifting, and
              packing services across {data.city} and nearby
              areas.
            </p>

            <p>
              Our trained moving staff handles packing,
              loading, transportation, unloading, and setup
              with care and efficiency. Whether you are
              moving within {data.city} or planning an
              intercity relocation, our team ensures a safe
              and stress-free moving experience.
            </p>

            <p>
              We regularly serve areas like{" "}
              {data.areas.slice(0, 4).join(", ")} and nearby
              locations with same-day availability and
              transparent pricing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CitySEOIntro;
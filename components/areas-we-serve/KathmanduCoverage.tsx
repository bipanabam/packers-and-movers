import { Truck, Clock3, ShieldCheck } from "lucide-react";

const valleyCoverage = {
  Kathmandu: ["Baneshwor", "Kalanki", "Koteshwor", "Maitidevi"],
  Lalitpur: ["Jawalakhel", "Pulchowk", "Satdobato"],
  Bhaktapur: ["Thimi", "Suryabinayak", "Bhaktapur Durbar Area"],
};

const KathmanduCoverage = () => {
  return (
    <section className="w-full bg-primary">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-10">
        <div className="relative overflow-hidden px-5 py-5 md:px-10 md:py-10">
          <div className="relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr] items-center">
            {/* Left */}
            <div>
              <span className="rounded-full border border-white/10 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                Valley Coverage
              </span>

              <h2 className="mt-4 font-inter text-3xl md:text-4xl font-semibold tracking-tight text-white">
                Kathmandu Valley Coverage
              </h2>

              <p className="mt-5 max-w-lg text-sm leading-relaxed text-white/70">
                Fast and reliable packers and movers service across Kathmandu,
                Lalitpur and Bhaktapur with same-day availability in many
                locations.
              </p>

              {/* Stats */}
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                  <Clock3 className="text-secondary" size={18} />
                  <p className="mt-3 text-xl font-semibold text-white">
                    24/7
                  </p>
                  <p className="text-sm text-white/60">Availability</p>
                </div>

                <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                  <Truck className="text-secondary" size={18} />
                  <p className="mt-3 text-xl font-semibold text-white">
                    500+
                  </p>
                  <p className="text-sm text-white/60">Valley Moves</p>
                </div>

                <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                  <ShieldCheck className="text-secondary" size={18} />
                  <p className="mt-3 text-xl font-semibold text-white">
                    Safe
                  </p>
                  <p className="text-sm text-white/60">Handling</p>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="grid gap-5 sm:grid-cols-3">
              {Object.entries(valleyCoverage).map(([district, areas]) => (
                <div
                  key={district}
                  className="rounded-3xl bg-white/10 p-5 backdrop-blur-sm"
                >
                  <h3 className="text-lg font-semibold text-white">
                    {district}
                  </h3>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {areas.map((area) => (
                      <div
                        key={area}
                        className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80"
                      >
                        {area}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KathmanduCoverage;
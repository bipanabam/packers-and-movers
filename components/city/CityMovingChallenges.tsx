import {
  Building2,
  TrafficCone,
  Mountain,
  Clock3,
} from "lucide-react";

const CityMovingChallenges = ({
  city,
}: {
  city: string;
}) => {
  const items = [
    {
      icon: Building2,
      title: "Apartment Floor Access",
      desc:
        `Many homes and apartments in ${city} have limited lift access and narrow staircases, requiring experienced movers and careful handling.`,
    },
    {
      icon: TrafficCone,
      title: "Traffic & Timing",
      desc:
        `Busy roads, market areas, and peak-hour traffic require proper moving coordination and route planning.`,
    },
    {
      icon: Mountain,
      title: "Road & Area Conditions",
      desc:
        `Different neighborhoods and road conditions require trained drivers and secure transportation handling.`,
    },
    {
      icon: Clock3,
      title: "Same-Day Coordination",
      desc:
        `Urgent shifting requests require fast manpower allocation, truck availability, and efficient packing support.`,
    },
  ];

  return (
    <section className="bg-primary/5 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <span className="rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Local Moving Knowledge
          </span>

          <h2 className="mt-5 font-inter text-3xl font-semibold tracking-tight md:text-5xl">
            Why Moving in {city} Requires Experienced Movers
          </h2>

          <p className="mt-5 text-base leading-relaxed text-foreground/60">
            Every city has unique relocation challenges.
            Our local movers understand the roads,
            apartment structures, traffic conditions and
            logistics requirements of {city}.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-4xl border border-primary/10 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-start gap-5">
                  <div className="rounded-2xl bg-primary/10 p-4 text-primary transition group-hover:bg-primary group-hover:text-white">
                    <Icon size={26} />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold tracking-tight">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-foreground/60">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CityMovingChallenges;
import { MapPin } from "lucide-react";

const nationwideCities = [
  "Kathmandu Valley",
  "Pokhara Relocation",
  "Chitwan Logistics",
  "Dharan Moving",
  "Butwal Transport",
  "Janakpur Service",
  "Biratnagar Movers",
  "Hetauda Logistics",
];

const NationwideCoverageStrip = () => {
  return (
    <section className="relative w-full overflow-hidden border-y border-primary/10 bg-white py-6">
      <div className="flex animate-marquee gap-4 whitespace-nowrap">
        {[...nationwideCities, ...nationwideCities].map((city, index) => (
          <div
            key={`${city}-${index}`}
            className="flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-5 py-3 text-sm font-medium text-foreground/70"
          >
            <MapPin size={15} className="text-secondary" />
            {city}
          </div>
        ))}
      </div>
    </section>
  );
};

export default NationwideCoverageStrip;
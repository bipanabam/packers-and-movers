import {
  MapPin,
  Phone,
  Clock3,
  MessageCircle,
  Truck,
} from "lucide-react";

const MapSection = () => {
  return (
    <section className="w-full px-5 md:px-10 py-14 md:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-semibold font-inter text-3xl md:text-4xl tracking-tight text-foreground">
            Visit Our Moving Office
            </h2>
            <p className="mt-3 text-sm text-foreground/50 font-sans tracking-wide max-w-md mx-auto leading-relaxed">
            Connect with our relocation experts for house shifting, office
            relocation, and logistics services across Kathmandu and Nepal.
            </p>
        </div>

        {/* Content */}
        <div className="mt-14 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Map */}
          <div className="overflow-hidden rounded-3xl border border-primary/10 bg-white shadow-sm">
            <div className="h-112.5 w-full">
              <iframe
                title="Pashupati Packers and Movers Location"
                src="https://www.google.com/maps/embed?pb="
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full border-0"
              />
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col gap-4">
            {[
              {
                icon: MapPin,
                title: "Office Location",
                desc: "Kathmandu, Nepal",
                sub: "Near Pashupati Area",
              },
              {
                icon: Phone,
                title: "Call Us",
                desc: "+977 98XXXXXXXX",
                sub: "Available 7 days a week",
              },
              {
                icon: MessageCircle,
                title: "WhatsApp Support",
                desc: "Fast moving assistance",
                sub: "Quick response team",
              },
              {
                icon: Clock3,
                title: "Working Hours",
                desc: "7 AM – 8 PM",
                sub: "Emergency support available",
              },
              {
                icon: Truck,
                title: "Service Coverage",
                desc: "Kathmandu & Nepal",
                sub: "Local & nationwide relocation",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex gap-4 rounded-2xl border border-primary/10 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/5 text-primary">
                    <Icon size={22} />
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-foreground">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm text-foreground/80">
                      {item.desc}
                    </p>

                    <p className="mt-1 text-xs text-foreground/50">
                      {item.sub}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
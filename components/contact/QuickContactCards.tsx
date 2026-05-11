import {
  Phone,
  MapPin,
  Clock3,
} from "lucide-react";

import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

const cards = [
  {
    title: "Call Us",
    description: "Speak directly with our relocation team.",
    value: "+977 98XXXXXXXX",
    button: "Call Now",
    href: "tel:+977XXXXXXXXX",
    icon: Phone,
    bg: "bg-orange-50",
    iconBg: "bg-secondary/15",
    iconColor: "text-secondary",
  },
  {
    title: "WhatsApp",
    description: "Fast replies and instant moving assistance.",
    value: "Usually replies within 10 minutes",
    button: "Chat on WhatsApp",
    href: "https://wa.me/977XXXXXXXXX",
    icon: WhatsAppIcon,
    bg: "bg-green-50",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    title: "Visit Office",
    description: "Kathmandu, Nepal",
    value: "Available 7 days a week",
    button: "Open Map",
    href: "#map",
    icon: MapPin,
    bg: "bg-blue-50",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
];

const QuickContactCards = () => {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-7xl px-5 md:px-10 py-10">
        <div className="grid gap-5 md:grid-cols-3">
          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className={`group rounded-3xl border border-primary/10 ${card.bg} p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
              >
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl ${card.iconBg} ${card.iconColor}`}
                >
                  <Icon size={30} />
                </div>

                <div className="mt-5">
                  <h3 className="text-xl font-semibold text-foreground">
                    {card.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-foreground/60">
                    {card.description}
                  </p>

                  <p className="mt-3 text-sm font-medium text-foreground/80">
                    {card.value}
                  </p>
                </div>

                <a
                  href={card.href}
                  className="mt-6 inline-flex items-center justify-center rounded-xl border border-primary/10 bg-white px-5 py-3 text-sm font-medium text-foreground transition hover:bg-primary hover:text-white"
                >
                  {card.button}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuickContactCards;
import { Phone, MapPin } from "lucide-react";
import WhatsAppIcon from "../icons/WhatsAppIcon";

const cards = [
  {
    title: "Call Us",
    desc: "Speak directly with our coordinators",
    button: "Call Now",
    href: "tel:+9779812345678",
    icon: Phone,
    style: "bg-secondary text-white",
    iconBg: "bg-secondary/15",
    iconColor: "text-secondary",
  },
  {
    title: "WhatsApp",
    desc: "Quick quotes and instant replies",
    button: "Chat on WhatsApp",
    href: "https://wa.me/9779812345678",
    icon: WhatsAppIcon,
    style: "bg-green-500 text-white",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    title: "Visit Office",
    desc: "Kathmandu, Nepal",
    button: "Open Map",
    href: "#map",
    icon: MapPin,
    style: "border border-primary/20",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
];

const QuickContactCards = () => {
  return (
    <section className="w-full py-12 px-6 md:px-10">
      <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-3">
        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <div
              key={card.title}
              className="rounded-3xl border border-primary/10 bg-white p-7 shadow-sm"
            >
              <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl ${card.iconBg} ${card.iconColor}`}
                >
                <Icon size={24} />
              </div>

              <h3 className="mt-5 text-xl font-semibold text-foreground">
                {card.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-foreground/60">
                {card.desc}
              </p>

              <a
                href={card.href}
                className={`mt-6 inline-flex w-full items-center justify-center rounded-xl px-5 py-3 text-sm font-medium transition hover:scale-[1.02] ${card.style}`}
              >
                {card.button}
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default QuickContactCards;
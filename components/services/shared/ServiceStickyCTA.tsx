import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { Phone } from "lucide-react";

const ServiceStickyCTA = () => {
  return (
    <div className="fixed inset-x-0 bottom-4 z-50 px-4 lg:hidden">
      <div className="mx-auto flex max-w-md items-center justify-between gap-2 rounded-2xl bg-primary/70 p-3 shadow-2xl">
        <a
          href="tel:+97798XXXXXXXX"
          className="flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-2 text-center text-sm font-medium text-primary w-full"
        >
        <Phone size={20} />
          Call Now
        </a>

        <div className="w-3" />

        <a
          href="https://wa.me/977XXXXXXXX"
          className="flex items-center justify-center gap-2 px-6 py-2 bg-green-500 text-white rounded-xl shadow-md hover:scale-105 transition w-full"
        >
            <WhatsAppIcon size={20} />
            WhatsApp
        </a>
      </div>
    </div>
  );
};

export default ServiceStickyCTA;
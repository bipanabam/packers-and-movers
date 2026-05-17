import { Phone, ShieldUser, Clock, ShieldCheck } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

const ServiceCTA = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-16 mb-16">
        <div className="rounded-3xl p-8 md:p-16 shadow-xl bg-linear-to-br from-primary via-primary to-primary/80 border border-white/10 text-white">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
                <h2 className="font-inter text-3xl font-semibold tracking-tight md:text-5xl">
                    Planning Your Next Move?
                </h2>

                <p className="mt-5 max-w-2xl text-white/70">
                    Get professional packing, transportation and relocation support from our experienced moving team.
                </p>
                {/* Trust badges */}
                <div className="flex gap-4 mt-4 justify-center lg:justify-start text-xs text-white/70">
                    <div className="flex gap-1 items-center justify-center">
                        <ShieldUser size={18} />
                        Verified Movers
                    </div>
                    <div className="flex gap-1 items-center justify-center">
                        <Clock size={18} />
                        On-Time Delivery
                    </div>
                    <div className="flex gap-1 items-center justify-center">
                        <ShieldCheck size={18} />
                        Safe Packing
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap gap-4">
                <a
                    href="https://wa.me/977XXXXXXXXX"
                    className="flex items-center justify-center gap-2 px-6 py-2 bg-green-500 text-white rounded-xl shadow-md hover:scale-105 transition"
                    >
                    <WhatsAppIcon size={20} />
                    WhatsApp
                </a>
 
                <a
                    href="tel:+9779800000000"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 py-3 text-sm text-white font-medium backdrop-blur-sm transition hover:bg-white/20"
                >
                    <Phone size={18} />
                    Call Now
                </a>
            </div>
          </div>
        </div>
    </section>
  );
};

export default ServiceCTA;
// components/contact/UrgentMovingStrip.tsx

import { Phone, Zap } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

const UrgentMovingStrip = () => {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-7xl px-5 md:px-10 pb-10">
        <div className="overflow-hidden rounded-3xl bg-linear-to-r from-secondary via-secondary to-secondary/90 px-6 py-7 shadow-xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Left */}
            <div className="flex items-start gap-4">
              <div className="hidden sm:flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-white backdrop-blur-md">
                <Zap size={28} />
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
                  Need Urgent Shifting Today?
                </h2>

                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/75">
                  Our same-day movers are available across Kathmandu Valley for
                  emergency house shifting and office relocation support.
                </p>
              </div>
            </div>

            {/* Right */}
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <a
                href="tel:+977XXXXXXXXX"
                className="flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-medium text-secondary transition hover:scale-[1.02]"
              >
                <Phone size={18} />
                Call Now
              </a>

              <a
                href="https://wa.me/977XXXXXXXXX"
                className="flex items-center justify-center gap-2 rounded-xl bg-green-500 px-5 py-3 text-sm font-medium text-white transition hover:scale-[1.02]"
              >
                <WhatsAppIcon size={18} />
                WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UrgentMovingStrip;
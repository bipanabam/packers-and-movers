"use client";

import {
  Phone,
  Clock3,
  ShieldCheck,
  MapPinned,
  BadgeCheck,
} from "lucide-react";

import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

const ContactSidebar = () => {
  return (
    <aside className="hidden xl:flex flex-col gap-5 w-84 sticky top-24 self-start">
      {/* Main CTA Card */}
      <div className="overflow-hidden rounded-3xl border border-primary/10 bg-primary shadow-xl">
        {/* Top Glow */}
        <div className="h-1 w-full bg-secondary" />

        <div className="p-7">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-white/80">
            <Clock3 size={14} />
            Usually replies within 10–15 mins
          </div>

          <h3 className="mt-5 text-2xl font-semibold text-white">
            Need Immediate Help?
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-white/70">
            Speak directly with our relocation experts for urgent house shifting,
            office relocation, and moving support in Kathmandu.
          </p>

          {/* Buttons */}
          <div className="mt-7 flex flex-col gap-3">
            <a
              href="https://wa.me/977XXXXXXXXX"
              className="flex items-center justify-center gap-2 rounded-xl bg-green-500 px-5 py-3 text-sm font-medium text-white transition hover:scale-[1.02]"
            >
              <WhatsAppIcon size={18} />
              Chat on WhatsApp
            </a>

            <a
              href="tel:+977XXXXXXXXX"
              className="flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              <Phone size={18} />
              Call Now
            </a>
          </div>

          {/* Trust Points */}
          <div className="mt-7 space-y-3 border-t border-white/10 pt-6">
            {[
              "Same day moving support",
              "Verified relocation staff",
              "Safe packing & insured handling",
              "Available across Nepal",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 text-sm text-white/80"
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-secondary/20">
                  <BadgeCheck size={15} className="text-secondary" />
                </div>

                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mini Info Cards */}
      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-2xl border border-primary/10 bg-white p-4 shadow-sm">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/5 text-primary">
            <ShieldCheck size={18} />
          </div>

          <p className="mt-3 text-lg font-semibold text-foreground">
            1000+
          </p>

          <span className="text-xs text-foreground/50">
            Successful Moves
          </span>
        </div>

        <div className="rounded-2xl border border-primary/10 bg-white p-4 shadow-sm">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/5 text-primary">
            <MapPinned size={18} />
          </div>

          <p className="mt-3 text-lg font-semibold text-foreground">
            Nepal Wide
          </p>

          <span className="text-xs text-foreground/50">
            Service Coverage
          </span>
        </div>
      </div>
    </aside>
  );
};

export default ContactSidebar;
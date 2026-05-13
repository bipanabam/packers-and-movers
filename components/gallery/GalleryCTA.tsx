import Link from "next/link";
import { Phone } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

const GalleryCTA = () => {
  return (
    <section className="w-full bg-primary py-20">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="font-inter text-4xl font-semibold tracking-tight text-white">
          Ready To Move With Professionals?
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/70">
          Contact our experienced movers and packers team today for safe house
          shifting, office relocation, and transportation services across Nepal.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://wa.me/977XXXXXXXXX"
            className="flex items-center justify-center gap-2 rounded-2xl bg-green-500 px-7 py-3 text-sm font-medium text-white transition hover:scale-[1.02]"
          >
            <WhatsAppIcon size={18} />
            WhatsApp Now
          </a>

          <a
            href="tel:+977XXXXXXXXX"
            className="flex items-center justify-center gap-2 rounded-2xl border border-white/20 px-7 py-3 text-sm font-medium text-white hover:bg-white/10"
          >
            <Phone size={18} />
            Call Now
          </a>

          <Link
            href="/get-quote"
            className="rounded-2xl bg-white px-7 py-3 text-sm font-medium text-primary shadow-lg transition hover:-translate-y-0.5"
          >
            Fill Quote Form
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GalleryCTA;
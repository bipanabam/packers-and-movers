import Link from "next/link";
import { Phone } from "lucide-react";
import WhatsAppIcon from "../icons/WhatsAppIcon";

const AreasFinalCTA = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-16 mb-16">
        <div className="rounded-3xl p-8 md:p-12 shadow-xl bg-linear-to-br from-primary via-primary to-primary/80 border border-white/10">
            <div className="flex flex-col items-center justify-between gap-8">
                {/* Heading */}
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="mt-4 font-inter text-3xl md:text-4xl font-semibold tracking-tight text-white">
                        Ready To Move With Professionals?
                    </h2>

                    <p className="mt-4 text-sm leading-relaxed text-white/70 max-w-2xl">
                        Get fast quotes, professional packing, and reliable transportation
                        anywhere in Nepal.
                    </p>
                </div>

                <div className="flex flex-col justify-center gap-4 sm:flex-row">
                    <a
                    href="https://wa.me/9779812345678"
                    className="flex items-center justify-center gap-2 rounded-2xl bg-green-500 px-7 py-3 text-sm font-medium text-white"
                    >
                    <WhatsAppIcon size={18} />
                    WhatsApp Now
                    </a>

                    <a
                    href="tel:+9779812345678"
                    className="flex items-center justify-center gap-2 rounded-2xl border border-white/20 px-7 py-3 text-sm font-medium text-white"
                    >
                    <Phone size={18} />
                    Call Now
                    </a>

                    <Link
                    href="/get-quote"
                    className="rounded-2xl bg-white px-7 py-3 text-sm font-medium text-primary text-center"
                    >
                    Get Free Quote
                    </Link>
                </div>
            </div>
        </div>
    </section>
  );
};

export default AreasFinalCTA;
import Link from "next/link";

import { Phone, ArrowDownToLine, ShieldUser, ShieldCheck, Clock } from "lucide-react";
import WhatsAppIcon from "./icons/WhatsAppIcon";

const CTA = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-16 mb-16">
        <div className="relative bg-primary rounded-3xl p-8 md:p-12 overflow-hidden shadow-2xl">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-linear-to-r from-primary/30 to-white/20 pointer-events-none" />
            
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10 relative z-10">
                {/*Text*/}
                <div className="max-w-xl text-center lg:text-left">
                    <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight">
                    Planning to Move? Get a Free Quote Today.
                    </h2>
                    <p className="mt-4 text-white/80">
                    Serving Kathmandu Valley. Fast, safe, and reliable moving services trusted by 1000+ customers.
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
                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                    <Link
                    href="/get-quote"
                    className="flex items-center justify-center gap-2 px-8 py-2 bg-white text-primary font-semibold rounded-xl shadow-xl hover:scale-105 transition text-lg"
                    >
                        <ArrowDownToLine size={20} />
                        Get Free Quote
                    </Link>
                    {/* Secondary */}
                    <a
                        href="tel:+977XXXXXXXXX"
                        className="flex items-center justify-center gap-2 px-6 py-2 bg-transparent border border-white text-white rounded-xl hover:bg-white/10 transition"
                    >
                        <Phone size={20} />
                        Call Now
                    </a>
                   {/* Tertiary */}
                    <a
                    href="https://wa.me/977XXXXXXXXX"
                    className="flex items-center justify-center gap-2 px-6 py-2 bg-green-500 text-white rounded-xl shadow-md hover:scale-105 transition"
                    >
                    <WhatsAppIcon size={20} />
                    WhatsApp
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CTA
import Link from "next/link";

import { Phone, ArrowRight } from "lucide-react";
import WhatsAppIcon from "../icons/WhatsAppIcon";

const AboutCTA = () => {
  return (
   <section className="w-full max-w-7xl mx-auto px-6 py-16 mb-16">
        <div className="rounded-3xl p-8 md:p-12 shadow-xl bg-linear-to-br from-primary via-primary to-primary/80 border border-white/10">
            <div className="flex flex-col items-center justify-between gap-10">
                {/* Heading */}
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="mt-4 font-inter text-3xl md:text-4xl font-semibold tracking-tight text-white">
                       Ready For A Safe & Hassle-Free Move?
                    </h2>

                    <p className="mt-4 text-sm leading-relaxed text-white/70 max-w-2xl">
                    Get a free moving quote today and relocate with professional packing, secure transport, and on-time delivery across Nepal.
                    </p>
                </div>
                {/* Buttons */}
                <div className="flex flex-col md:flex-row gap-4 w-full lg:w-auto">
                    <a
                    href="https://wa.me/977XXXXXXXXX"
                    className="flex items-center justify-center gap-2 rounded-xl bg-green-500/90 hover:bg-green-500 px-7 py-3 text-white font-medium shadow-lg hover:scale-[1.02] transition"
                    >
                    <WhatsAppIcon size={20} />
                    Chat on WhatsApp
                    </a>
                    <a
                        href="tel:+977XXXXXXXXX"
                        className="flex items-center justify-center gap-2 px-6 py-2 bg-transparent border border-white text-white rounded-xl hover:bg-white/10 transition"
                    >
                        <Phone size={20} />
                        Call Now
                    </a>
                    <Link
                    href="/get-quote"
                    className="flex items-center justify-center gap-2 px-8 py-3 bg-white text-primary font-semibold rounded-xl shadow-xl hover:scale-105 transition text-lg"
                    >
                        Fill Quote Form
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutCTA
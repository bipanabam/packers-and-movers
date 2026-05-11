import WhatsAppIcon from "../icons/WhatsAppIcon";
import { Phone } from "lucide-react";

const ContactCTA = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-16 mb-16">
        <div className="rounded-3xl p-8 md:p-12 shadow-xl bg-linear-to-br from-primary via-primary to-primary/80 border border-white/10">
            <div className="flex flex-col items-center justify-between gap-8">
                {/* Heading */}
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="mt-4 font-inter text-3xl md:text-4xl font-semibold tracking-tight text-white">
                       Planning a move soon?
                    </h2>

                    <p className="mt-4 text-sm leading-relaxed text-white/70 max-w-2xl">
                     Our experts are ready to assist you over the phone or WhatsApp right now.
                    </p>
                </div>
                {/* Buttons */}
                <div className="flex flex-col md:flex-row gap-4 w-full lg:w-auto">
                    <a
                    href="https://wa.me/977XXXXXXXXX"
                    className="flex items-center justify-center gap-2 rounded-xl bg-green-500 px-5 py-3 text-white transition hover:scale-[1.02]"
                    >
                    <WhatsAppIcon size={18} />
                    Chat on WhatsApp
                    </a>

                    <a
                    href="tel:+977XXXXXXXXX"
                    className="flex items-center justify-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-white hover:bg-white/10"
                    >
                    <Phone size={18} />
                    Call Now
                    </a>
                </div>

                <p className="text-xs text-white/60">
                    Usually replies within 10 minutes
                </p>
            </div>
        </div>
    </section>
  )
}

export default ContactCTA
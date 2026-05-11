import WhatsAppIcon from "../icons/WhatsAppIcon";
import { Phone } from "lucide-react";

const QuoteFormSidebar = () => {
  return (
    <aside className="hidden xl:flex flex-col gap-5 w-84 sticky top-24 self-start">
        {/* Trust card */}
        <div className="rounded-3xl border border-primary/10 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-foreground">
                Trusted Across Kathmandu Valley
            </h3>

            <p className="mt-2 text-sm text-foreground/60 leading-relaxed">
                Reliable movers for homes, apartments, offices, and vehicle transport.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-6 items-center">
                <div className="rounded-2xl bg-primary/5 p-4 items-center">
                <p className="text-xl font-bold text-primary">500+</p>
                <span className="text-[11px] text-foreground/60">
                    Successful Moves
                </span>
                </div>
                <div className="rounded-2xl bg-primary/5 p-4 items-center">
                <p className="text-xl font-bold text-primary">24/7</p>
                <span className="text-[11px] text-foreground/60">
                    Support Available
                </span>
                </div>

                <div className="rounded-2xl bg-primary/5 p-4">
                <p className="text-xl font-bold text-primary">15+</p>
                <span className="text-[11px] text-foreground/60">
                    Areas Covered
                </span>
                </div>

                <div className="rounded-2xl bg-primary/5 p-4">
                <p className="text-xl font-bold text-primary">4.9★</p>
                <span className="text-[11px] text-foreground/60">
                    Customer Rating
                </span>
                </div>
            </div>

            {/* Features */}
            <div className="mt-6 flex flex-col gap-4">
                {[
                "Safe Packaging",
                "Affordable Pricing",
                "On-time Service",
                "Trained Professionals",
                ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-secondary" />
                    <p className="text-sm text-foreground/80">
                    {item}
                    </p>
                </div>
                ))}
            </div>
        </div>

        {/* CTA card */}
        <div className="rounded-3xl bg-primary p-7">
            <h3 className="text-xl font-semibold text-white">
                Need Immediate Help ?
            </h3>

            <p className="mt-2 text-sm text-white/70">
                Our experts are ready to assist you over the phone or WhatsApp right now.
            </p>

            <div className="mt-6 flex flex-col gap-3">
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

            <p className="mt-4 text-xs text-white/60">
                Usually replies within 10 minutes
            </p>
        </div>
    </aside>
  )
}

export default QuoteFormSidebar;
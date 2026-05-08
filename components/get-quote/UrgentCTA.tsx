import { Phone } from "lucide-react";
import WhatsAppIcon from "../icons/WhatsAppIcon";

const UrgentCTA = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-16">
  <div className="rounded-3xl bg-primary p-8 md:p-12 shadow-xl">
    <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

      {/* Left */}
      <div className="max-w-xl">
        <h2 className="text-3xl md:text-4xl font-semibold text-white">
          Need Urgent Shifting Today?
        </h2>

        <p className="mt-4 text-white/80 leading-relaxed">
          Our movers are ready to help with house shifting, office relocation,
          packing, unpacking, and vehicle transportation across Kathmandu Valley.
        </p>

        {/* Trust */}
        <div className="flex flex-wrap gap-4 mt-6 text-sm text-white/80">
          <span>✓ Fast Response</span>
          <span>✓ Same-Day Availability</span>
          <span>✓ Transparent Pricing</span>
        </div>
      </div>

      {/* Right */}
      <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
        <a
          href="https://wa.me/977XXXXXXXXX"
          className="flex items-center justify-center gap-2 rounded-xl bg-green-500 px-7 py-3 text-white font-medium shadow-lg hover:scale-[1.02] transition"
        >
          <WhatsAppIcon size={20} />
          Chat on WhatsApp
        </a>

        <a
          href="tel:+977XXXXXXXXX"
          className="flex items-center justify-center gap-2 rounded-xl border border-white/20 px-7 py-3 text-white hover:bg-white/10 transition"
        >
          <Phone size={20} />
          Call Now
        </a>
      </div>
    </div>
  </div>
</section>
  )
}

export default UrgentCTA
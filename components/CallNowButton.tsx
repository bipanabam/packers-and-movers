import { Phone } from "lucide-react";

const CallNowButton = () => {
  return (
    <a
    href="tel:+977XXXXXXXXX"
    className="flex items-center justify-center gap-2 px-6 py-1 bg-white text-secondary rounded-lg ring-2 ring-secondary text-sm md:text-[15px] font-semibold shadow-sm hover:bg-secondary/5 transition"
    >
        <p>Call Now</p>
        <Phone size={22} strokeWidth={1.5} />
    </a>
  )
}

export default CallNowButton;
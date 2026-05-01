"use client";

import { Phone } from "lucide-react";

const CallNowButton = () => {
  return (
    <button
    type="button"
    className="flex items-center justify-center gap-2 px-6 py-1 bg-white text-secondary rounded-lg ring-2 ring-secondary text-sm md:text-[15px] font-semibold shadow-sm hover:scale-110 transition-transform"
    onClick={() => console.log("Call Now Button Clicked!!")}
    >
        <p>Call Now</p>
        <Phone size={22} strokeWidth={1.5} />
    </button>
  )
}

export default CallNowButton;
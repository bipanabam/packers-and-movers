"use client";

import { ArrowRight } from "lucide-react";

const GetFreeQuoteButton = () => {
  return (
    <button
    type="button"
    className="flex items-center justify-center gap-2 px-5 py-2 bg-secondary text-white rounded-lg text-sm md:text-[15px] font-semibold shadow-sm hover:scale-110 transition-transform"
    onClick={() => console.log("Free Quote Button Clicked!!")}
    >
        <p>Get free Quote</p>
        <ArrowRight size={22} strokeWidth={1.5} />
    </button>
  )
}

export default GetFreeQuoteButton;
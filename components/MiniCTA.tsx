"use client";

import { useRouter } from "next/navigation";

const MiniCTA = () => {
    const router = useRouter();
  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        {/* CTA */}
        <div className="rounded-2xl bg-white border border-primary/20 p-7 text-center shadow-sm">
            <p className="text-sm text-foreground/60 mb-3">
            Ready to move? Get an instant estimate or talk to our team.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button 
                onClick={() => {router.push("/get-quote")}}
                className="bg-primary text-white px-6 py-3 rounded-full hover:scale-105 transition-transform shadow-lg"
            >
                Get Free Quote
            </button>

            <button className="flex items-center justify-center gap-2 px-6 py-2 bg-white text-secondary rounded-full ring-2 ring-secondary text-sm md:text-sm shadow-sm hover:scale-105 transition-transform">
                Check Price
            </button>

            <a href="tel:+977XXXXXXXXX" className="flex items-center justify-center gap-2 px-6 py-2 bg-secondary text-white rounded-full text-sm md:text-base font-semibold shadow-md hover:scale-105 transition-transform">
                Call Now
            </a>
            </div>

        </div>
    </div>
  )
}

export default MiniCTA
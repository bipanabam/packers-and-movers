"use client";

import Image from "next/image";
import Link from "next/link";

import { Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="w-full">
        <div className="relative">
            <div className="relative w-full h-115 md:h-125 overflow-hidden shadow-xl">
                <Image
                    src="/assets/about.png"
                    alt="Professional packers and movers loading household goods into a truck"
                    fill
                    sizes="100vw"
                    className="object-cover object-center"
                    priority
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-primary/20" />

                {/* Optional gradient */}
                <div className="absolute inset-0 bg-linear-to-r from-black/60 via-primary/30 to-transparent" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex flex-col gap-3 items-center max-w-3xl text-center">
                    <span className="rounded-full bg-white/50 px-4 py-1 text-secondary font-medium font-inter text-xs tracking-wider">
                    About Pashupati Packers & Movers
                    </span>
                    <h1 className="font-inter font-semibold text-3xl md:text-4xl tracking-tight text-white">
                    Moving Nepal With Care, Safety & Reliability
                    </h1>
                    <p className="text-sm font-normal font-sans text-white/70 tracking-normal leading-relaxed">
                        Helping families and businesses with house shifting, office relocation, and professional relocation services across Kathmandu and Nepal.
                    </p>
                    {/* Stats Card */}
                    <div className="flex flex-wrap items-center justify-center gap-6 pt-3">
                    {[
                        {
                        value: "500+",
                        label: "Successful Moves",
                        },
                        {
                        value: "4.9★",
                        label: "Customer Rating",
                        },
                        {
                        value: "24/7",
                        label: "Support Available",
                        },
                    ].map((item) => (
                        <div
                        key={item.label}
                        className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md px-5 py-3 text-center shadow-lg"
                        >
                        <p className="text-xl font-semibold text-white">
                            {item.value}
                        </p>

                        <span className="text-xs text-white/70">
                            {item.label}
                        </span>
                        </div>
                    ))}
                    </div>
                   
                    {/* CTA */}
                    <div className="flex flex-col md:flex-row gap-5">
                        <a
                        href="tel:+977XXXXXXXXX"
                        className="flex items-center justify-center gap-2 rounded-xl border-2 border-secondary bg-white text-secondary px-7 py-3 hover:bg-white/90 transition"
                        >
                        <Phone size={20} />
                        Call Now
                        </a>
                        <Link 
                            href="/get-quote"
                            className="bg-secondary text-white px-6 py-3 rounded-xl hover:scale-105 transition-transform shadow-lg"
                        >
                            Get Free Quote
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero
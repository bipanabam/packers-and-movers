"use client";

import { useState } from "react";
import { faq } from "@/constants/faq";
import { ChevronDown, Truck, Check } from "lucide-react";

const FrequentlyAskedQuestions = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const toggle = (index: number) => {
        setActiveIndex(prev => (prev === index ? null : index));
    };
  return (
    <section
     id="frequently-asked-questions"  
     className="w-full max-w-7xl mx-auto px-4 md:px-8 py-16"
     aria-label="Frequently Asked Questions about house and office shifting in Kathmandu"
    >
        {/* Heading */}
        <div className="text-center mb-16">
            <h2 className="font-semibold font-inter text-3xl md:text-4xl tracking-tight text-foreground">
            Frequently Asked Questions 
            </h2>
            <p className="mt-3 text-sm text-foreground/50 font-sans tracking-wide max-w-md mx-auto leading-relaxed">
            Clear, honest answers to help you plan your move with confidence
            </p>
        </div>
        <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Illustration Side */}
            <div className="relative">
                <div className="bg-linear-to-br from-primary/10 to-transparent rounded-3xl p-10 shadow-xl">
                    <img
                    src="/illustrations/moving.svg"
                    alt="Moving illustration"
                    className="w-full h-auto hover:scale-105 transition-transform duration-700"
                    />
                </div>

                {/* Floating cards */}
                <div className="absolute -top-6 -left-6 bg-white shadow-lg rounded-xl px-4 py-2 text-sm text-green-400">
                    <div className="flex gap-1 items-center text-sm text-green-400">
                        <Check size={18} />
                        Safe Packing
                    </div>
                </div>
                <div className="absolute -bottom-1 -right-6 bg-white shadow-lg rounded-xl px-4 py-2">
                    <div className="flex gap-1 items-center text-sm text-secondary">
                        Fast Delivery
                        <Truck size={18} />
                    </div>
                </div>
            </div>
            {/* FAQ */}
            <ul className="flex flex-col gap-4 text-foreground items-center">
                {faq.map((item, i) => {
                    const isOpen = activeIndex === i;
                    return (
                    <li 
                    key={item.id} 
                    className="border border-primary/20 rounded-xl overflow-hidden bg-white/60 backdrop-blur-md shadow-sm"
                    >
                        {/* Question */}
                        <button
                            onClick={() => toggle(i)}
                            className="w-full flex items-center justify-between px-6 py-4 text-left text-foreground"
                        >
                            <span className="text-base md:text-lg font-medium tracking-wide">
                            {item.id}. {item.title}
                            </span>

                            <ChevronDown
                            size={20}
                            className={`
                                "transition-transform duration-300"
                                ${isOpen && "rotate-180"}`
                                }
                            />
                        </button>
                        {/* Answer */}
                        <div
                            className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                        >
                            <div className="overflow-hidden">
                                <p className="px-6 pb-4 text-sm text-foreground/60 leading-relaxed tracking-wide">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    </li>
                )})}
            </ul>
        </div>
        <div className="text-center mt-12">
            <p className="text-sm text-foreground/60">
                Still unsure? Talk to our team directly.
            </p>
            <button className="mt-4 bg-secondary text-white px-6 py-3 rounded-xl shadow-md hover:scale-105 transition">
                Call Now
            </button>
        </div>
    </section>
  )
}

export default FrequentlyAskedQuestions;
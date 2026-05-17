"use client";

import Image from "next/image";

import { useState } from "react";
import { FAQItem, homeFaq } from "@/constants/faq";
import { ChevronDown, Truck, Check } from "lucide-react";

type FrequentlyAskedQuestionsProps = {
  variant?: "default" | "compact";
  items?: FAQItem[];
};

const FrequentlyAskedQuestions = ({
  variant = "default", items = homeFaq
}: FrequentlyAskedQuestionsProps) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);
    const data = items

    const toggle = (index: number) => {
        setActiveIndex(prev => (prev === index ? null : index));
    };
  return (
    <section
     id="frequently-asked-questions"  
     className={`w-full mx-auto px-8 md:px-10 py-16 ${
        variant === "compact"
            ? "max-w-4xl"
            : "max-w-7xl"
        }`}
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
        <div
        className={`grid gap-10 items-start ${
            variant === "default"
            ? "md:grid-cols-2"
            : "grid-cols-1"
        }`}
        >
            {/* Illustration Side */}
            {variant === "default" && (
            <div className="relative">
                <div className="bg-linear-to-br from-primary/10 to-transparent rounded-3xl p-10 shadow-xl">
                    <Image
                    src="/illustrations/moving.svg"
                    alt="Professional packers and movers loading household goods into a truck"
                    width={700}
                    height={600}
                    priority
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
            </div>)}

            {/* FAQ */}
            <ul className="flex flex-col gap-4 text-foreground w-full">
                {data.map((item, i) => {
                    const isOpen = activeIndex === i;
                    return (
                    <li 
                    key={item.id} 
                    className="w-full border border-primary/20 rounded-xl overflow-hidden bg-white/60 backdrop-blur-md shadow-sm"
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
                            className={`transition-transform duration-300 ${
                                isOpen ? "rotate-180" : ""
                                }`}
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
        {variant === "default" && (
        <div className="text-center mt-12">
            <p className="text-sm text-foreground/60 mb-5">
                Still unsure? Talk to our team directly.
            </p>
            <a href="tel:+977XXXXXXXXX" className="bg-secondary text-white px-6 py-3 rounded-xl shadow-md hover:scale-105 transition">
                Call Now
            </a>
        </div>)}
    </section>
  )
}

export default FrequentlyAskedQuestions;
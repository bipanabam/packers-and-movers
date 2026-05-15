"use client";

import { useState } from "react";
import {
  ChevronDown,
} from "lucide-react";

import { CityDataType } from "@/types/city";

const CityFAQ = ({
  data,
}: {
  data: CityDataType;
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
      setActiveIndex(prev => (prev === index ? null : index));
  };

  return (
    <section className="bg-primary/5 py-20">
      <div className="mx-auto max-w-4xl px-8">
        <div className="text-center mb-16">
          <span className="rounded-full border border-secondary/20 bg-secondary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
            Frequently Asked Questions
          </span>

          <h2 className="font-semibold font-inter text-3xl md:text-4xl tracking-tight text-foreground mt-5">
            FAQs About Movers in {data.city}
          </h2>
        </div>

        {/* FAQ */}
        <ul className="flex flex-col gap-4 text-foreground w-full">
          {data.faqs.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <li 
                key={item.question} 
                className="w-full border border-primary/20 rounded-xl overflow-hidden bg-white/60 backdrop-blur-md shadow-sm"
                >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left text-foreground"
                >
                  <span className="text-base md:text-lg font-medium tracking-wide">
                    {item.question}
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
                            {item.answer}
                        </p>
                    </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default CityFAQ;
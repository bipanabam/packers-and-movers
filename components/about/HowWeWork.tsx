"use client";
import {
  FileText,
  ClipboardCheck,
  Package,
  Home,
} from "lucide-react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    icon: FileText,
    title: "Request a Free Quote",
    desc: "Share your house shifting or office relocation details for an accurate moving estimate.",
  },
  {
    icon: ClipboardCheck,
    title: "Move Planning",
    desc: "Our relocation experts schedule timelines and prepare the safest transport strategy.",
  },
  {
    icon: Package,
    title: "Secure Packing & Transit",
    desc: "Professional movers pack, load, and transport your belongings with insured handling.",
  },
  {
    icon: Home,
    title: "Safe Delivery & Setup",
    desc: "We unload and position everything carefully at your new home or office.",
  },
];

const HowWeWork = () => {
    const howWeWorksRef = useRef<HTMLElement | null>(null);

    useGSAP(() => {
        if (!howWeWorksRef.current) return;

        gsap.from(".step-item", {
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        scrollTrigger: {
            trigger: howWeWorksRef.current,
            start: "top 80%",
        },
        });
    });

  return (
    <section 
     aria-label="How Our Packers and Movers Service Works"
     id="how-we-works"  
     className="w-full max-w-7xl mx-auto px-4 md:px-8 py-16"
     ref={howWeWorksRef}
    >
      <style>{`
      /* Connector line grows in */
      @keyframes lineGrow {
        from { transform: scaleX(0); }
        to   { transform: scaleX(1); }
      }
      .connector-line {
        transform-origin: left;
        animation: lineGrow 1s ease 0.1s forwards;
        transform: scaleX(0);
      }`}</style>
      
        {/* Heading */}
        <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-3">
            Simple Process
            </p>
            <h2 className="font-semibold font-inter text-3xl md:text-4xl tracking-tight text-foreground">
            How We Work
            </h2>
            <p className="mt-3 text-sm text-foreground/50 font-sans tracking-wide max-w-md mx-auto leading-relaxed">
            Our streamlined house shifting and office relocation process ensures a safe, efficient, and stress-free moving experience.
            </p>
        </div>

        {/* Steps */}
        <ol
            className="relative grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4"
            aria-label="Our House Shifting Process in Kathmandu, Lalitpur and many more"
        >
            {/* Horizontal connector */}
            <div
            aria-hidden="true"
            className="connector-line hidden md:block absolute top-13 left-[12.5%] right-[12.5%] h-px bg-linear-to-r from-primary/20 via-primary to-primary/20"
            />
            {steps.map((step, index) => {
            const Icon = step.icon;
            return (
                <li key={index} className="step-item relative flex flex-col items-center text-center">
                {/* Circle badge */}
                <div className="relative z-10 flex items-center justify-center w-18 h-18 rounded-full bg-primary shadow-lg shadow-primary/30 mb-6">
                    <Icon size={26} className="text-white" strokeWidth={1.8} />
                    {/* Step number badge */}
                    <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 rounded-full bg-white border border-primary/20 text-primary text-[10px] font-bold shadow-sm">
                    {index + 1}
                    </span>
                </div>

                {/* Card */}
                <div className="w-full rounded-2xl border border-foreground/8 bg-white/70 backdrop-blur-sm shadow-sm px-5 py-6 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                    <h3 className="text-base font-semibold text-foreground mb-2">
                    {step.title}
                    </h3>
                    <p className="text-xs text-foreground/55 leading-relaxed">
                    {step.desc}
                    </p>
                </div>

                {/* Mobile vertical connector */}
                {index < steps.length - 1 && (
                    <div
                    aria-hidden="true"
                    className="md:hidden w-px h-8 bg-linear-to-b from-primary/60 to-primary/10 mt-2"
                    />
                )}
                </li>
            );
            })}
        </ol>
        <div className="mt-14 text-center">
            <p className="text-sm text-foreground/60 mb-4">
                Ready for a safe and hassle-free relocation?
            </p>

            <Link
                href="/get-quote"
                className="inline-flex rounded-xl bg-secondary px-6 py-3 text-white font-medium shadow-md hover:scale-105 transition"
            >
                Get Your Free Moving Quote
            </Link>
        </div>
    </section>
  )
}

export default HowWeWork;
"use client";
import { Phone, FileText, Truck, PackageCheck } from "lucide-react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    icon: FileText,
    title: "Request Quote",
    desc: "Share your house shifting details and get an instant quote from our trusted packers and movers team.",
  },
  {
    icon: Phone,
    title: "Receive Call",
    desc: "Our team contacts you to confirm details and plan your move smoothly.",
  },
  {
    icon: Truck,
    title: "Packing & Pickup",
    desc: "We pack and handle your belongings with professional care and precision.",
  },
  {
    icon: PackageCheck,
    title: "Safe Delivery",
    desc: "Your items are delivered safely and on time, exactly where you need them.",
  },
];

const HowItWorks = () => {
  const howItWorksRef = useRef<HTMLElement | null>(null);

  useGSAP(() => {
    if (!howItWorksRef.current) return;

    gsap.from(".step-item", {
      y: 40,
      opacity: 0,
      duration: 0.6,
      stagger: 0.15,
      scrollTrigger: {
        trigger: howItWorksRef.current,
        start: "top 80%",
      },
    });
  });


  return (
    <section 
     aria-label="How Our Packers and Movers Service Works"
     id="how-it-works"  
     className="w-full max-w-7xl mx-auto px-4 md:px-8 py-16"
     ref={howItWorksRef}
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
        How It Works
        </h2>
        <p className="mt-3 text-sm text-foreground/50 font-sans tracking-wide max-w-md mx-auto leading-relaxed">
        A simple, reliable process designed to make your move smooth from
        start to finish.
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
      {/* CTA */}
      <div className="mt-16 rounded-2xl bg-white border border-primary/20 p-7 text-center shadow-sm">
        <p className="text-sm text-foreground/60 mb-3">
          Ready to move? Get an instant estimate or talk to our team.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button className="bg-primary text-white px-6 py-3 rounded-full hover:scale-105 transition-transform shadow-lg">
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
    </section>
  );
};

export default HowItWorks;
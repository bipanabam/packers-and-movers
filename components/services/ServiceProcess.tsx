// const steps = [
//   "Request Quote",
//   "Survey & Planning",
//   "Packing & Loading",
//   "Transportation",
//   "Unloading & Setup",
// ];

// const ServiceProcess = () => {
//   return (
//     <section className="bg-linear-to-br from-primary to-primary/90 py-24 text-white">
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         <div className="text-center">
//           <span className="rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
//             Process
//           </span>

//           <h2 className="mt-5 font-inter text-3xl font-semibold tracking-tight md:text-5xl">
//             Simple & Organized Moving Process
//           </h2>
//         </div>

//         <div className="mt-16 grid gap-6 md:grid-cols-5">
//           {steps.map((step, index) => (
//             <div
//               key={step}
//               className="rounded-4xl border border-white/10 bg-white/10 p-6 backdrop-blur-sm"
//             >
//               <span className="text-sm text-white/60">
//                 Step {index + 1}
//               </span>

//               <h3 className="mt-5 text-xl font-semibold">
//                 {step}
//               </h3>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServiceProcess;

"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Phone, FileText, Truck, PackageCheck, PackageOpen } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    icon: FileText,
    title: "Request Quote",
    desc: "Share your house shifting details and get an instant quote from our trusted packers and movers team.",
  },
  {
    icon: Phone,
    title: "Survey & Planning",
    desc: "Our team contacts you to confirm details and plan your move smoothly.",
  },
  {
    icon: Truck,
    title:  "Packing & Loading",
    desc: "We pack and handle your belongings with professional care and precision.",
  },
  {
    icon: PackageCheck,
    title: "Safe Transportation",
    desc: "Your items are delivered safely and on time, exactly where you need them.",
  },
   {
    icon: PackageOpen,
    title: "Unloading & Setup",
    desc: "Your items are unloaded safely to your door step.",
  },
];


const ServiceProcess = () => {

    const serviceProcessRef = useRef<HTMLElement | null>(null);

    useGSAP(() => {
        if (!serviceProcessRef.current) return;

        gsap.from(".process-step", {
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        scrollTrigger: {
            trigger: serviceProcessRef.current,
            start: "top 80%",
        },
        });
    });

  return (
    <section 
      className="w-full py-20"
      ref={serviceProcessRef}>
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
      
      <div className="mx-auto max-w-7xl px-8">
        <div className="text-center">
          <span className="rounded-full border border-secondary/20 bg-secondary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
            Process
          </span>

          <h2 className="mt-5 font-inter text-3xl font-semibold tracking-tight md:text-4xl">
            Simple & Organized Moving Process
          </h2>
        </div>

        {/* Steps */}
        <ol
          className="relative grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-10 mt-20"
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
            <li key={index} className="process-step relative flex flex-col items-center text-center">
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
      </div>
    </section>
  );
};

export default ServiceProcess;
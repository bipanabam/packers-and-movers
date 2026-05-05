import AreasWeServe from "@/components/AreasWeServe";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import InstantQuoteForm from "@/components/InstantQuoteForm";
import ServicesCard from "@/components/ServicesCard";
import WhyChooseUs from "@/components/WhyChooseUs";
import { ClockFading, House, Building, Motorbike, CarFront, PackageCheck, Move } from "lucide-react";

export default function Home() {

  return (
    <div className="w-full flex flex-col flex-1 items-center justify-center bg-background/80 font-sans px-5 md:px-10 pt-16">
      <Hero />
      {/* Instant Quote Form */}
      <div className="bg-primary w-full rounded-2xl px-4 md:px-6 pt-6 pb-2 m-10">
        <div className="flex flex-col items-center gap-2 mb-4">
          <div className="flex gap-5 items-center justify-center">
            <div className="rounded-full p-3 bg-white text-primary">
              <ClockFading size={40} />
            </div>
            <div className="flex flex-col gap-2 items-center">
              <h2 className="text-xl md:text-3xl text-white font-semibold">
                Get an Instant Quote
              </h2>
              <p className="text-sm text-white/80 md:text-lg">
                Fast and quick
              </p>
            </div>
          </div>
          <InstantQuoteForm />
        </div>
      </div>
      {/* Moving Services */}
      <div className="flex flex-col gap-2 items-center w-5/6 m-10">
        <h1 className="font-inter font-semibold text-3xl md:text-4xl tracking-tight text-foreground">
          Our Moving Services
        </h1>
        <p className="text-sm font-normal font-sans tracking-widest text-foreground/50">
          Professional relocation solutions for homes and businesses.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 p-4 sm:p-6">
          <ServicesCard 
            icon={House}
            title="Home Shifting"
            description="Experience a stress-free transition with our reliable residential relocation experts. From villas to apartments, we move it all."
          />
           <ServicesCard 
            icon={Building}
            title="Office Relocation"
            description="Ensure business continuity with efficient corporate moves. We handle electronics and bulky furniture with precision."
          />
           <ServicesCard 
            icon={Motorbike}
            title="Bike Transport"
            description="Fast and safe two-wheeler shipping across the country. Specialized crating and handling for all motorcycle types."
          />
           <ServicesCard 
            icon={CarFront}
            title="Car Shifting"
            description="Secure automobile carrier services for your precious vehicles. GPS tracking and fully insured transport options available."
          />
           <ServicesCard 
            icon={PackageCheck}
            title="Packing Services"
            description="Professional multi-layer packing using high-quality materials. We protect your fragile items with specialized care."
          />
           <ServicesCard 
            icon={Move}
            title="Loading / Unloading"
            description="Skilled handling of your belongings. Our team uses ergonomic tools and techniques to ensure zero damage during transit."
          />
        </div>
      </div>

      {/* Why choose us */}
      <WhyChooseUs />
      {/* How It Works */}
      <HowItWorks />
      {/* Areas we cover */}
      <AreasWeServe />
    </div>
  );
}

import AreasWeServe from "@/components/AreasWeServe";
import CTA from "@/components/CTA";
import CustomerReview from "@/components/CustomerReview";
import FrequentlyAskedQuestions from "@/components/FrequentlyAskedQuestions";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import InstantQuoteForm from "@/components/InstantQuoteForm";
import ServicesCard from "@/components/ServicesCard";
import WhyChooseUs from "@/components/WhyChooseUs";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { ClockFading, House, Building, Motorbike, CarFront, PackageCheck, Move } from "lucide-react";

export default function Home() {

  return (
    <div className="w-full flex flex-col flex-1 items-center justify-center bg-background/80 font-sans px-5 md:px-10">
      <Hero />

      {/* Moving Services */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-16">

        <div className="flex flex-col gap-2 items-center">
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
      </div>

      {/* How It Works */}
      <HowItWorks />
      {/* Why choose us */}
      <WhyChooseUs />
      {/* Customer Review */}
      <CustomerReview />
      {/* Instant Quote Form */}
      <div className="w-full mx-auto px-4 md:px-8 py-16">
        <div className="bg-primary rounded-3xl overflow-hidden shadow-2xl p-8 md:p-10">
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
      </div>
      {/* Areas we cover */}
      <AreasWeServe />
      <FrequentlyAskedQuestions />
      {/* Conversion Push */}
      <CTA />
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50 group">
        {/* <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full animate-ping"></span> */}
        <a
          href="https://wa.me/977XXXXXXXXX"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-16 h-16 rounded-full bg-green-500 shadow-xl hover:scale-110 transition"
        >
          <WhatsAppIcon size={28} color="#fff" />
        </a>

        {/* Tooltip */}
        <div className="absolute right-17 bottom-2/3 translate-y-1/2 bg-primary text-white text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-200 transition whitespace-nowrap">
          Chat with us
        </div>
      </div>
    </div>
  );
}

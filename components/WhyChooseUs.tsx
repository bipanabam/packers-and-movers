import Image from "next/image";
import { Check, UserCheck, BadgeDollarSign, ShieldCheck, Clock, FileCheck, MapPin } from "lucide-react";
import Button from "./Button";

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="w-full mx-auto px-4 md:px-8 py-16">
        <div className="flex flex-col lg:flex-row items-center md:items-start justify-center gap-8 md:gap-5">
            {/* Left */}
            <div className="w-full md:flex-1 relative">
                <div className="relative w-full h-87.5 md:h-137.5 rounded-2xl overflow-hidden shadow-xl">
                    <Image
                        src="/assets/why-choose-us.png"
                        alt="hero"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="absolute bottom-4 left-4  text-secondary bg-white/50 rounded-lg px-4 py-2 shadow-lg backdrop-blur-2xl hover:scale-105">
                <p className="text-xs text-foreground/80">Trusted by</p>
                <p className="text-sm font-semibold text-secondary">500+ customers</p>
                </div>
            </div>
            {/* Right */}
            <div className="flex-1 px-8">
                <div className="flex flex-col items-start gap-5 w-full">
                    <div className="flex flex-col gap-2 mb-6">
                        <h1 className="font-inter font-semibold text-3xl md:text-4xl tracking-tight text-foreground">
                        Why Choose Us?
                        </h1>
                        <p className="text-sm font-normal font-sans tracking-widest text-foreground/50">
                        Experience excellence in relocation with our expert team. We turn the stress of moving into a seamless, organized journey.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                        <div className="flex items-start gap-3 group">
                            <div className="rounded-lg p-2 bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition">
                                <UserCheck size={20} />
                            </div>
                            <div>
                                <p className="text-base font-semibold text-foreground/80 tracking-wider ">
                                Trained Movers
                                </p>
                                <p className="text-sm text-foreground/60">
                                Experienced professionals trained to handle your belongings with care.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 group">
                            <div className="rounded-lg p-2 bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition">
                                <BadgeDollarSign size={20} />
                            </div>
                            <div>
                                <p className="text-base font-semibold text-foreground/80 tracking-wider ">
                                Affordable Pricing
                                </p>
                                <p className="text-sm text-foreground/60">
                                Transparent rates with no hidden charges, tailored to fit your budget.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 group">
                            <div className="rounded-lg p-2 bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition">
                                <ShieldCheck size={20} />
                            </div>
                            <div>
                                <p className="text-base font-semibold text-foreground/80 tracking-wider ">
                                Safe Packing
                                </p>
                               <p className="text-sm text-foreground/60">
                                High-quality materials and careful wrapping to protect even the most fragile items.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 group">
                            <div className="rounded-lg p-2 bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition">
                                <Clock size={20} />
                            </div>
                            <div>
                                <p className="text-base font-semibold text-foreground/80 tracking-wider ">
                                On-Time Delivery
                                </p>
                               <p className="text-sm text-foreground/60">
                                Reliable scheduling and timely delivery so you can plan your move with confidence.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 group">
                            <div className="rounded-lg p-2 bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition">
                                <FileCheck size={20} />
                            </div>
                            <div>
                                <p className="text-base font-semibold text-foreground/80 tracking-wider ">
                                Insured Handling
                                </p>
                               <p className="text-sm text-foreground/60">
                                Comprehensive insurance coverage for complete peace of mind during transit.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 group">
                            <div className="rounded-lg p-2 bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition">
                                <MapPin size={20} />
                            </div>
                            <div>
                                <p className="text-base font-semibold text-foreground/80 tracking-wider ">
                                Nepal Coverage
                                </p>
                               <p className="text-sm text-foreground/60">
                                Nationwide service across Nepal, connecting cities and remote locations seamlessly.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-10 mt-4">
                            <div>
                                <p className="text-3xl font-semibold text-primary">500+</p>
                                <p className="text-xs text-foreground/60 uppercase tracking-wide">
                                    Moves completed
                                </p>
                            </div>
                            <div>
                                <p className="text-3xl font-semibold text-primary">4.9★</p>
                                <p className="text-xs text-foreground/60 uppercase tracking-wide">
                                Customer rating
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex flex-col items-start gap-3 mt-4">
                        <p className="text-sm text-foreground/60">
                            Get a free quote in under 2 minutes
                        </p>
                        <Button title="Book Your Move" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default WhyChooseUs;
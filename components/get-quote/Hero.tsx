
import { Check } from "lucide-react";

const Hero = () => {
  return (
    <section className="w-full px-4 md:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Left */}
            <div className="flex flex-col items-start gap-5 w-full">
                <span className="rounded-full bg-secondary/20 px-4 py-1 text-secondary font-medium font-inter text-xs tracking-wider">
                Free Moving Estimate 
                </span>
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col font-inter font-medium text-5xl">
                        <p className="text-foreground">Get Your
                            <span className="text-secondary"> Packers </span> 
                            &
                        </p>
                        <p>
                        Movers Quote in Minutes
                        </p>
                    </div>
                    <p className="text-sm font-normal font-sans tracking-widest text-foreground/50">
                        Tell us your moving details. Our team will contact you quickly with pricing and availability.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-5 items-start mt-5 md:mt-10">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center shrink-0 text-white">
                            <Check size={20} strokeWidth={3} />
                        </div>
                        <span className="text-foreground/80 text-base">No Obligation</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center shrink-0 text-white">
                            <Check size={20} strokeWidth={3} />
                        </div>
                        <span className="text-foreground/80 text-base">Fast Response</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center shrink-0 text-white">
                            <Check size={20} strokeWidth={3} />
                        </div>
                        <span className="text-foreground/80 text-base">
                        Competitive Rates
                        </span>
                    </div>
                </div>

            </div>
            {/* Right */}
            <div className="relative">
                <div className="bg-linear-to-br from-primary/10 to-transparent rounded-3xl shadow-xl">
                    <img
                    src="/illustrations/loading-a-truck.svg"
                    alt="Loading a Truck Illustration"
                    className="w-full h-auto hover:scale-105 transition-transform duration-700"
                    />
                </div>
            </div>
                
        </div>

    </section>
  )
}

export default Hero;

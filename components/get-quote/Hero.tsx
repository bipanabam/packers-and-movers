import Image from "next/image";
import { Check } from "lucide-react";

const Hero = () => {
  return (
    <section className="w-full px-4 md:px-8 py-10 md:py-14">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
            {/* Left */}
            <div className="flex flex-col items-start gap-5 w-full">
                <span className="rounded-full bg-secondary/20 px-4 py-1 text-secondary font-medium font-inter text-xs tracking-wider">
                Free Moving Estimate 
                </span>
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col font-inter font-medium text-5xl">
                        <p className="text-foreground">Get a Free
                            <span className="text-primary"> Packers </span> 
                            &
                        </p>
                        <p>
                            <span className="text-secondary"> Movers </span> 
                         Quote in Minutes
                        </p>
                    </div>
                    <p className="text-sm font-normal font-sans tracking-wider text-foreground/50 leading-7">
                        Planning a home, office, bike, or vehicle move? 
                        Share your moving details and receive a fast, transparent estimate 
                        from our professional packers and movers team.
                    </p>
                </div>
                <div className="flex flex-wrap gap-4 mt-6">
                    {[
                        "Free Estimate",
                        "No Hidden Charges",
                        "Fast Response",
                        "Verified Movers",
                    ].map((item) => (
                        <div
                        key={item}
                        className="flex items-center gap-2 rounded-full border border-primary/10 bg-white px-4 py-2 shadow-sm"
                        >
                        <Check
                            size={16}
                            className="text-secondary"
                            strokeWidth={3}
                        />
                        <span className="text-sm text-foreground/70">
                            {item}
                        </span>
                        </div>
                    ))}
                </div>
                <div className="flex flex-wrap gap-6 mt-6">
                    <div>
                        <p className="text-2xl font-semibold text-primary">500+</p>
                        <span className="text-sm text-foreground/50">
                        Successful Moves
                        </span>
                    </div>

                    <div>
                        <p className="text-2xl font-semibold text-primary">4.9★</p>
                        <span className="text-sm text-foreground/50">
                        Customer Rating
                        </span>
                    </div>

                    <div>
                        <p className="text-2xl font-semibold text-primary">24/7</p>
                        <span className="text-sm text-foreground/50">
                        Support Available
                        </span>
                    </div>
                    </div>

            </div>
            {/* Right */}
            <div className="relative">
                <div className="bg-linear-to-br from-primary/10 to-transparent rounded-3xl shadow-xl">
                    <Image
                    src="/illustrations/loading-a-truck.svg"
                    alt="Professional packers and movers loading household goods into a truck"
                    width={700}
                    height={600}
                    priority
                    className="w-full h-auto"
                    />
                </div>
                <div className="absolute bottom-4 left-4 rounded-2xl bg-white p-3 shadow-xl">
                    <p className="text-xs text-foreground/50">
                        Average Response Time
                    </p>
                    <p className="text-lg font-semibold text-primary">
                        ~15 Minutes
                    </p>
                </div>
                <div className="absolute top-4 right-4 rounded-2xl bg-white p-3 shadow-xl">
                    <p className="text-xs text-foreground/50">
                        Trusted by Families
                    </p>
                    <p className="text-lg font-semibold text-primary">
                        500+ Moves
                    </p>
                </div>
            </div>
                
        </div>

    </section>
  )
}

export default Hero;

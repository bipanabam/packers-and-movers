import Button from "./Button";

import { GitBranch, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";
import NepalCoverageMap from "./NepalCoverageMap";

const CITIES = [
  { name: "Kathmandu", slug: "kathmandu-packers-movers" },
  { name: "Lalitpur", slug: "lalitpur-packers-movers" },
  { name: "Bhaktapur", slug: "bhaktapur-packers-movers" },
  { name: "Chitwan", slug: "chitwan-packers-movers" },
  { name: "Pokhara", slug: "pokhara-packers-movers" },
];

const AreasWeServe = () => {
  return (
     <section id="areas-we-serve" className="w-full mx-auto px-4 md:px-8 py-16">
        <div className="flex flex-col-reverse lg:flex-row items-center md:items-start justify-center gap-8 md:gap-5">
            {/* Left */}
            <div className="w-full md:flex-1 relative">
                <NepalCoverageMap />
            </div>
            {/* Right */}
            <div className="flex-1 px-8">
                <div className="flex flex-col items-start gap-5 w-full">
                    <span className="rounded-full bg-secondary/20 px-4 py-1 text-secondary font-medium font-inter text-xs tracking-wider">
                    Our Presence Across Nepal
                    </span>
                    <div className="space-y-4">
                        <h2 className="font-inter font-semibold text-3xl md:text-4xl tracking-tight text-foreground">
                        Serving the Entire Nation
                        </h2>
                        <p className="text-sm font-normal font-sans tracking-widest text-foreground/50">
                            From the bustling streets of Kathmandu to the serene valleys of Pokhara, we bridge the distance with precision and care. Our logistical network covers all major urban hubs.                       
                        </p>
                    </div>

                    {/* List of all cities we serve */}
                    <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full mt-4">
                        {CITIES.map((city) => (
                        <li key={city.slug}>
                        <Link 
                            href={`/${city.slug}`}
                            title={`Packers and Movers in ${city.name}`}
                            className="flex items-center gap-2 p-3 rounded-lg border border-foreground/30 bg-white hover:border-primary hover:text-primary hover:scale-105 transition-all duration-200 group"
                        >
                            <MapPin size={16} strokeWidth={2.5} className="text-foreground/50 group-hover:text-primary transition-colors" />
                            <span className="text-sm font-medium">{city.name}</span>
                        </Link>
                        </li>
                        ))}
                        <li>
                            <Link href="/" className="flex items-center gap-2 p-3 text-sm font-semibold text-primary underline decoration-2 underline-offset-4 hover:opacity-80">
                            View 20+ Cities <ArrowRight size={14} />
                            </Link>
                        </li>
                    </ul>
                    
                    <div className="w-full pt-6 border-t border-primary/30 mt-4">
                        <div className="flex flex-col sm:flex-row w-full gap-4 mt-6">
                            <Button title="Check Availability" />
                            <Link
                                href="/"
                                className="flex items-center justify-center gap-2 px-6 py-2 bg-white text-secondary rounded-lg ring-2 ring-secondary text-sm md:text-base font-semibold shadow-sm hover:scale-105 transition-transform"
                            >
                                View all branches
                                <GitBranch  size={22} strokeWidth={1.5} />
                            </Link>
                            <a
                                href="tel:+977XXXXXXXXX"
                                className="text-sm text-secondary underline"
                            >
                                Call Now
                            </a>
                                
                        </div>
                        <p className="text-xs text-foreground/50 mt-4 italic">
                            *500+ successful moves completed in Kathmandu Valley & beyond.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AreasWeServe;
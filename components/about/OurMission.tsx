import { Check } from "lucide-react";

const OurMission = () => {
  return (
    <section className="w-full mx-auto px-4 md:px-8 py-14 md:py-20">
        <div className="rounded-3xl bg-primary p-8 md:p-12 shadow-xl">
            <div className="flex flex-col items-center justify-between gap-8">
                {/* Heading */}
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="mt-4 font-inter text-3xl md:text-4xl font-semibold tracking-tight text-white">
                        Our Mission
                    </h2>

                    <p className="mt-4 text-sm leading-relaxed text-white/70 max-w-2xl">
                    Our mission is to provide safe, affordable, and stress-free house shifting,
                    office relocation, and packing services across Kathmandu and Nepal through
                    reliable logistics and customer-first service.
                    </p>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 pt-6">
                {[
                    "Unwavering Customer Satisfaction",
                    "Safe Handling Guarantee",
                    "Precision On-time Delivery",
                ].map((item) => (
                    <div
                    key={item}
                    className="flex items-center gap-2 text-sm text-white"
                    >
                    {/* Icon */}
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary">
                        <Check
                        size={20}
                        className="text-primary"
                        strokeWidth={2}
                        />
                    </div>
                    <span>{item}</span>
                    </div>
                ))}
                </div>
                <div className="flex flex-wrap items-center justify-center gap-6 pt-3 mt-5">
                    <div
                        className="min-w-35 rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md px-5 py-3 text-center shadow-lg"
                    >
                        <p className="text-2xl font-semibold text-white">
                            99%
                        </p>

                        <span className="text-sm text-white/70">
                            Safety Rate
                        </span>
                    </div>
                    <div
                        className="min-w-35 rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md px-5 py-3 text-center shadow-lg"
                    >
                        <p className="text-2xl font-semibold text-white">
                            24/7
                        </p>

                        <span className="text-sm text-white/70">
                            Support
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default OurMission;
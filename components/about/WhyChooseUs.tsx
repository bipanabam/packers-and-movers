import { UserCheck, BadgeDollarSign, ShieldCheck, Clock, Zap, MapPin } from "lucide-react";

const WhyChooseUs = () => {
  return (
    <section className="w-full px-5 md:px-10 py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
            {/* Heading */}
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="mt-4 font-inter text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
                    Why Choose Us
                </h2>

                <p className="mt-4 text-sm leading-relaxed text-foreground/60">
                    Trusted house shifting, office relocation, and packing services designed
                    to make moving across Kathmandu and Nepal simple and stress-free.
                </p>
            </div>
             {/* Cards */}
            <div className="mt-12 grid gap-6 md:grid-cols-3">
                <div className="flex flex-col items-center text-center gap-3 group rounded-3xl border border-primary/10 bg-white px-7 py-5 shadow-sm hover:shadow-xl">
                    <div className="rounded-lg p-2 bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white transition">
                        <UserCheck size={30} />
                    </div>
                    <div>
                        <p className="text-base font-semibold text-foreground/80 tracking-wider ">
                        Verified & Trained Movers
                        </p>
                        <p className="text-sm text-foreground/60">
                        Experienced professionals trained to handle your belongings with care.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center text-center gap-3 group rounded-3xl border border-primary/10 bg-white px-7 py-5 shadow-sm hover:shadow-xl">
                    <div className="rounded-lg p-2 bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white transition">
                        <BadgeDollarSign size={30} />
                    </div>
                    <div>
                        <p className="text-base font-semibold text-foreground/80 tracking-wider ">
                       Transparent & Affordable Pricing
                        </p>
                        <p className="text-sm text-foreground/60">
                        Transparent rates with no hidden charges, tailored to fit your budget.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center text-center gap-3 group rounded-3xl border border-primary/10 bg-white px-7 py-5 shadow-sm hover:shadow-xl">
                    <div className="rounded-lg p-2 bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white transition">
                        <ShieldCheck size={30} />
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
                <div className="flex flex-col items-center text-center gap-3 group rounded-3xl border border-primary/10 bg-white px-7 py-5 shadow-sm hover:shadow-xl">
                    <div className="rounded-lg p-2 bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white transition">
                        <Clock size={30} />
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
                <div className="flex flex-col items-center text-center gap-3 group rounded-3xl border border-primary/10 bg-white px-7 py-5 shadow-sm hover:shadow-xl">
                    <div className="rounded-lg p-2 bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white transition">
                        <Zap size={30} />
                    </div>
                    <div>
                        <p className="text-base font-semibold text-foreground/80 tracking-wider ">
                        Fast Response
                        </p>
                        <p className="text-sm text-foreground/60">
                        Quick turnaround for quotes and immediate execution of move plans.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center text-center gap-3 group rounded-3xl border border-primary/10 bg-white px-7 py-5 shadow-sm hover:shadow-xl">
                    <div className="rounded-lg p-2 bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white transition">
                        <MapPin size={30} />
                    </div>
                    <div>
                        <p className="text-base font-semibold text-foreground/80 tracking-wider ">
                        Local Expertise
                        </p>
                        <p className="text-sm text-foreground/60">
                        Nationwide service across Nepal, connecting cities and remote locations seamlessly.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default WhyChooseUs
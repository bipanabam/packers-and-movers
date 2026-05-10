import Image from "next/image";

const WhoWeAre = () => {
  return (
    <div className="w-full px-4 md:px-8 py-10 md:py-14">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
            {/* Left */}
            <div className="relative">
                <div className="relative w-full h-80 md:h-124 bg-linear-to-br from-primary/10 to-transparent rounded-tr-4xl rounded-bl-4xl shadow-xl overflow-hidden">
                    <Image
                    src="/assets/who-we-are.png"
                    alt="Professional packers and movers loading household goods into a truck"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    priority
                    />
                </div>
                <div className="absolute bottom-5 left-5 bg-white/90 backdrop-blur-md rounded-2xl px-4 py-3 shadow-lg">
                    <p className="text-xs text-foreground/50">
                        Average Response Time
                    </p>
                    <p className="text-lg font-semibold text-primary">
                        ~15 Minutes
                    </p>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md rounded-2xl px-4 py-3 shadow-lg">
                    <p className="text-xs text-foreground/50">
                        Trusted by Families
                    </p>
                    <p className="text-lg font-semibold text-primary">
                        500+ Moves
                    </p>
                </div>
            </div>
            {/* Right */}
            <div className="flex flex-col items-start gap-5 w-full">
                <div className="flex flex-col gap-6">
                    <h2 className="font-inter font-semibold text-3xl md:text-4xl tracking-tight text-secondary">
                    Who We Are
                    </h2>
                    <div className="flex flex-col gap-4 text-base font-normal text-foreground/50">
                        <p className="leading-5 tracking-normal">
                            Established with a vision to redefine the moving experience in Nepal, Pashupati Packers & Movers is more than just a logistics company. We provide trusted house shifting, office relocation, and packing services for families and businesses across Kathmandu Valley and Nepal. We are your local partners in transition, deeply rooted in the heart of Kathmandu.
                        </p>
                        <p className="leading-5 tracking-normal">
                            Our journey began with a simple observation: moving is stressful. We set out to change that by combining traditional Nepali hospitality with modern, high-efficiency logistics standards. Our team of experienced movers in Kathmandu brings years of expertise to every relocation project, ensuring your belongings are packed, transported, and delivered safely.
                        </p>
                        <p className="leading-5 tracking-normal">
                            Whether you need local house shifting inside Kathmandu or long-distance relocation services across Nepal, we prioritize reliability, affordability, and safety in every move. From narrow city alleys to nationwide highways, we know every route and every challenge of moving in Nepal.
                        </p>
                    </div>
                </div>
                <div className="flex flex-wrap gap-3 pt-2">
                    {[
                        "500+ Successful Moves",
                        "Verified Movers",
                        "Fully Insured",
                        "Same Day Support",
                    ].map((item) => (
                        <div
                        key={item}
                        className="rounded-full bg-primary/5 border border-primary/10 px-4 py-2 text-sm text-foreground/70"
                        >
                        {item}
                        </div>
                    ))}
                </div>

            </div>
                
        </div>

    </div>
  )
}

export default WhoWeAre
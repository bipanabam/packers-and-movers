import Link from "next/link";

import { ArrowRight } from "lucide-react";

const ServicesCard = ({icon: Icon, title, description} : any) => {
  return (
    <div className="bg-mutedPrimary px-5 py-4 rounded-lg w-full shadow-lg border border-mutedPrimary hover:scale-[1.01] hover:shadow-2xl transition-all duration-200 ease-out hover:border-primary/30">
        <div className="flex items-start gap-5">
            <div className="rounded-xl p-3 bg-white text-primary shadow-sm">
                <Icon size={25} />
            </div>
            <div className="flex flex-col gap-2 items-start">
                <h2 className="text-lg md:text-xl text-foreground font-semibold">
                {title}
                </h2>
                <p className="text-xs text-foreground/50 lg:text-sm tracking-wide">
                {description}
                </p>
                <Link href="/" className="flex items-center gap-1 text-sm font-medium text-secondary group">
                    Learn More
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
            </div>
        </div>
    </div>
  )
}

export default ServicesCard;
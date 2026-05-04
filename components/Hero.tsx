import Image from "next/image"
import GetFreeQuoteButton from "./GetFreeQuoteButton"
import CallNowButton from "./CallNowButton"
import { Truck, Clock, Users } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="w-full">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-10 md:gap-2">
            {/* Left */}
            <div className="flex-1 px-8">
                <div className="flex flex-col items-start gap-5 w-full">
                    <div className="rounded-xl bg-secondary/20 px-3 py-1 flex items-center">
                        <p className="text-secondary font-medium text-xs font-inter">Trusted Relocation Experts in Nepal</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-col font-inter font-medium text-5xl">
                            <p className="text-foreground">Safe, Fast & 
                                <span className="text-secondary"> Affordable</span> 
                            </p>
                            <p>
                            Packers and Movers
                            </p>
                        </div>
                        <div className="flex flex-col text-sm font-normal font-sans tracking-widest text-foreground/50">
                            <p>
                                House shifting, office relocation, bike/car transport,
                            </p>
                            <p>
                                packing services across Kathmandu and  Nepal.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-10">
                        <GetFreeQuoteButton />
                        <CallNowButton />
                    </div>

                    <hr className="border-primary/30 mt-2 mb-4 w-full" />

                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 w-4/5">
                        <div className="flex items-center gap-3 text-secondary">
                            <Truck size={30} />
                            <div className="flex flex-col text-[16px]">
                                <span>1000+</span>
                                <span className="text-neutral text-xs">moves completed</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 text-secondary">
                            <Clock size={30} />
                            <div className="flex flex-col text-[16px]">
                                <span>Same day</span>
                                <span className="text-neutral text-xs">available</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 text-secondary">
                            <Users size={30} />
                            <div className="flex flex-col text-[16px]">
                                <span>Professional</span>
                                <span className="text-neutral text-xs">team</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/* Right */}
            <div className="w-full md:flex-1 relative">
                <div className="relative w-full h-87.5 md:h-137.5 rounded-2xl overflow-hidden">
                    <Image
                        src="/assets/hero.png"
                        alt="hero"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2 text-secondary bg-white/30 rounded-md px-2.5 py-1 backdrop-blur-2xl shadow-sm hover:scale-105">
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                                <path d="M5.83325 10.5C5.83325 8.33405 6.69367 6.25682 8.22521 4.72527C9.75676 3.19373 11.834 2.33331 13.9999 2.33331C16.1659 2.33331 18.2431 3.19373 19.7746 4.72527C21.3062 6.25682 22.1666 8.33405 22.1666 10.5V11.7075C24.1453 11.991 25.6666 13.6931 25.6666 15.75V16.0416C25.6666 18.1125 23.8804 19.9278 21.7793 19.831C20.9159 22.3043 18.7203 23.9715 16.3508 24.3938C15.8024 24.5945 15.1538 24.5 14.5833 24.5C14.1191 24.5 13.674 24.3156 13.3458 23.9874C13.0176 23.6592 12.8333 23.2141 12.8333 22.75C12.8333 22.2859 13.0176 21.8407 13.3458 21.5125C13.674 21.1844 14.1191 21 14.5833 21C15.5084 21 16.5328 20.8658 17.1581 21.7105C18.6701 20.9906 19.8333 19.4705 19.8333 17.5V10.5C19.8333 8.95288 19.2187 7.46915 18.1247 6.37519C17.0307 5.28123 15.547 4.66665 13.9999 4.66665C12.4528 4.66665 10.9691 5.28123 9.87513 6.37519C8.78117 7.46915 8.16659 8.95288 8.16659 10.5V17.7916C8.16659 18.3331 7.95148 18.8524 7.5686 19.2353C7.18571 19.6182 6.6664 19.8333 6.12492 19.8333C5.11931 19.8333 4.15488 19.4338 3.44381 18.7228C2.73273 18.0117 2.33325 17.0473 2.33325 16.0416V15.75C2.333 14.7679 2.6867 13.8186 3.32953 13.0762C3.97236 12.3337 4.86124 11.8478 5.83325 11.7075V10.5Z" fill="#FF7A00"/>
                            </svg>
                            <p className="text-sm">
                                24/7 support
                            </p>
                        </div>
                        <div className="flex items-center gap-2 text-secondary bg-white/30 rounded-md px-2.5 py-1 backdrop-blur-2xl shadow-sm hover:scale-105">
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                                <path d="M20.4167 12.8334V8.51669C20.4167 5.87652 20.4167 4.55702 19.5126 3.73685C18.6072 2.91669 17.1524 2.91669 14.2392 2.91669H9.09425C6.18108 2.91669 4.72625 2.91669 3.82091 3.73685C2.91558 4.55702 2.91675 5.87652 2.91675 8.51669V15.9834C2.91675 18.6235 2.91675 19.943 3.82091 20.7632C4.72625 21.5834 6.18108 21.5834 9.09425 21.5834H12.8334" stroke="#FF7A00" strokeWidth="1.5" strokeLinecap="round"/>
                                <path d="M6.41675 7.58337H16.9167M6.41675 12.25H7.58341M11.0834 12.25H12.2501M15.7501 12.25H16.9167M6.41675 16.9167H7.58341M11.0834 16.9167H12.2501" stroke="#FF7A00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M20.4167 25.0833C22.994 25.0833 25.0833 22.994 25.0833 20.4167C25.0833 17.8393 22.994 15.75 20.4167 15.75C17.8393 15.75 15.75 17.8393 15.75 20.4167C15.75 22.994 17.8393 25.0833 20.4167 25.0833Z" stroke="#FF7A00" strokeWidth="1.5"/>
                                <path d="M21.5834 21L20.4167 20.4167V18.6667" stroke="#FF7A00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <p className="text-sm">
                                Free estimate
                            </p>
                        </div>
                        <div className="flex items-center gap-2 text-secondary bg-white/30 rounded-md px-2.5 py-1 backdrop-blur-2xl shadow-sm hover:scale-105">
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
                                <path d="M17.083 18.25L17.328 18.495C17.7585 18.9255 17.9732 19.1402 18.2334 19.125C18.4935 19.111 18.6837 18.8742 19.064 18.3982L20.583 16.5M17.2825 7.645V9.5M17.2825 7.645C17.2825 6.76533 18.0222 6.0525 18.9334 6.0525C19.8434 6.0525 20.583 6.76533 20.583 7.64383V9.5M17.2825 7.645V4.46117C17.2825 3.58267 16.544 2.86983 15.6329 2.86983C14.7217 2.86983 13.982 3.5815 13.982 4.46117M13.982 4.46117V9.5M13.982 4.46117V2.34133C13.982 1.46167 13.2447 0.75 12.3324 0.75C11.42 0.75 10.6827 1.46167 10.6827 2.34133V5.52167M10.6827 5.52167C10.6827 4.64317 9.94303 3.93033 9.03187 3.93033C8.12187 3.93033 7.3822 4.642 7.3822 5.52167V13.1598C7.3822 13.6452 6.76037 13.875 6.42203 13.5157L3.75037 10.6702C3.52324 10.4069 3.21881 10.2221 2.88048 10.1421C2.54214 10.0621 2.18718 10.0909 1.8662 10.2245C0.690199 10.711 0.413699 12.4272 1.17787 13.4165C2.48687 15.1105 3.8262 17.4217 4.90887 19.4598C6.37887 22.2283 9.27803 24.0833 12.5004 24.0833M10.6827 5.52167V9.5M13.583 16.4463V16.8967C13.583 18.299 13.583 19.0002 13.7557 19.6418C13.9714 20.4377 14.3774 21.1692 14.9387 21.7733C15.3937 22.2657 15.9957 22.6483 17.1985 23.4148C17.7364 23.7578 18.0059 23.9293 18.2929 24.0098C18.6464 24.1078 19.0209 24.1078 19.3744 24.0098C19.6602 23.9293 19.9297 23.7578 20.4675 23.4148C21.6704 22.6483 22.2724 22.2657 22.7274 21.7733C23.2886 21.1692 23.6946 20.4377 23.9104 19.6418C24.083 19.0002 24.083 18.3002 24.083 16.8967V16.4463C24.083 15.5737 24.083 15.1373 23.9174 14.7687C23.8134 14.5411 23.6673 14.3353 23.4869 14.162C23.1917 13.882 22.7729 13.728 21.9352 13.4212L20.2155 12.7912C19.5319 12.5415 19.19 12.4167 18.833 12.4167C18.476 12.4167 18.1342 12.5415 17.4505 12.7923L15.7309 13.4223C14.8932 13.728 14.4744 13.8808 14.1792 14.162C13.9983 14.3352 13.8518 14.541 13.7475 14.7687C13.583 15.1373 13.583 15.5737 13.583 16.4463Z" stroke="#FF7A00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <p className="text-sm">
                                Safe handling
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero;

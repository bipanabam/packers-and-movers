import Link from "next/link";
import Image from "next/image";
import { MapPinIcon, PhoneIcon, MailIcon, MessageCircleMore } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full mt-auto">
        <div className="px-10 py-16 flex flex-col items-center md:flex-row md:items-start justify-between gap-12 bg-[#E8EDF2]">
          {/* Company Info */}
            <div className="flex flex-col items-center justify-center">
                {/* Name and description */}
                <div className="flex flex-col items-center justify-center gap-3 h-full text-center">
                    <h1 className="font-mono text-2xl font-bold tracking-[-0.04em] text-primary">
                    Nepal Packers & Movers
                    </h1>
                    <div className="flex flex-col items-center justify-center font-inter text-sm font-medium tracking-widest text-foreground/50">
                        <p>
                            Precision Logistics & Expert Moving 
                        </p>
                        <p>
                            Services. Reliable, efficient, and careful 
                        </p>
                        <p>
                            with your belongings across Nepal.
                        </p>
                    </div>
                </div>
                {/* Social Links */}
                <div className="flex items-center justify-center gap-5 m-2">
                    <div className="p-2 rounded-xl hover:shadow-lg hover:scale-105 transition">
                        <a href="https://facebook.com" target="_blank">
                            <Image
                                src="/assets/tiktok.png"
                                alt="Facebook"
                                width={20}
                                height={20}
                                className="hover:scale-110 transition"
                            />
                        </a>
                    </div>
                    <div className="p-2 rounded-xl hover:shadow-lg hover:scale-105 transition">
                        <a href="https://instagram.com" target="_blank">
                            <Image
                                src="/assets/instagram.png"
                                alt="Instagram"
                                width={20}
                                height={20}
                                className="hover:scale-110 transition"
                            />
                        </a>
                    </div>
                    <div className="p-2 rounded-xl hover:shadow-lg hover:scale-105 transition">
                        <a href="https://tiktok.com" target="_blank">
                            <Image
                                src="/assets/tiktok.png"
                                alt="TikTok"
                                width={20}
                                height={20}
                                className="hover:scale-110 transition"
                            />
                        </a>
                    </div>
                </div>
                <p className="font-inter text-xs font-medium tracking-widest text-foreground/60">
                   @2026 Nepal Movers and Packers.All rights reserved.
                </p>
            </div>
         
            <div className="flex flex-col gap-4 text-[16px] items-center md:items-start font-inter">
                <p className="font-sans text-xl font-bold tracking-widest text-primary">
                    Company
                </p>
                <Link href="/" className="text-foreground/50 hover:text-secondary hover:scale-105 transition-colors">
                    About
                </Link>
                <Link href="/" className="text-foreground/50 hover:text-secondary hover:scale-105 transition-colors">
                    Services
                </Link>
                <Link href="/" className="text-foreground/50 hover:text-secondary hover:scale-105 transition-colors">
                    Company
                </Link>
            </div>
            <div className="flex flex-col gap-4 text-[16px] items-center md:items-start font-inter">
                <p className="font-sans text-xl font-bold tracking-widest text-primary">
                    Services
                </p>
                <Link href="/" className="text-foreground/50 hover:text-secondary hover:scale-105 transition-colors">
                    House
                </Link>
                <Link href="/" className="text-foreground/50 hover:text-secondary hover:scale-105 transition-colors">
                    Office
                </Link>
                <Link href="/" className="text-foreground/50 hover:text-secondary hover:scale-105 transition-colors">
                    Vehicle
                </Link>
            </div>
            <div className="flex flex-col gap-4 text-[16px] items-center md:items-start font-inter">
                <p className="font-sans text-xl font-bold tracking-widest text-primary">
                    Contact
                </p>
                <div className="flex items-center gap-2 font-inter">
                    <PhoneIcon className="w-5 h-5 text-primary"/>
                    <span className="text-foreground/50">+977 9812345678</span>
                </div>
                <div className="flex items-center gap-2 font-inter">
                    <MailIcon className="w-5 h-5 text-primary"/>
                    <span className="text-foreground/50">info@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 font-inter">
                    <MessageCircleMore className="w-5 h-5 text-primary"/>
                    <span className="text-foreground/50">+977 9812345678</span>
                </div>
                <div className="flex items-center gap-2 font-inter">
                    <MapPinIcon className="w-5 h-5 text-primary"/>
                    <span className="text-foreground/50">Kathmandu, Nepal 44600</span>
                </div>
            </div>
           
        </div>
    </footer>
  )
}

export default Footer;
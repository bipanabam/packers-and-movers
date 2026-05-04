"use client";

import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPinIcon, Clock, PhoneIcon, MailIcon, MessageCircleMore, TruckIcon } from "lucide-react";

import WhatsAppIcon from "./icons/WhatsAppIcon";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const navRef = useRef<HTMLElement | null>(null);

  useGSAP(() => {
    if (!navRef.current) return;

    gsap.fromTo(
      navRef.current,
      {
        backgroundColor: "rgba(255,255,255,1)",
        backdropFilter: "blur(0px)",
        boxShadow: "0 0 0 rgba(0,0,0,0)",
      },
      {
        backgroundColor: "rgba(255,255,255,0.75)",
        backdropFilter: "blur(12px)",
        boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: navRef.current,
          start: "bottom top",
        },
      }
    );
  });
  return (
    <header className="w-full sticky top-0 z-50">
        {/*Info */}
        <div className="hidden md:flex items-center justify-between bg-primary px-6 py-3 text-sm text-white/90 font-sans">
            {/* Left */}
            <div className="flex gap-5">
                <div className="flex items-center gap-2">
                    <div className="bg-white p-1 rounded-full">
                        <MapPinIcon className="w-5 h-5" color="#FFFFFF" fill="#547A95" />
                    </div>
                    <span>Kathmandu, Nepal 44600</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="bg-white p-1 rounded-full">
                        <Clock className="w-5 h-5" color="#FFFFFF" fill="#547A95" />
                    </div>
                    <span>Available 7 Days</span>
                </div>
            </div>
            {/* Right */}
            <div className="flex gap-5">
                <div className="flex items-center gap-2">
                    <div className="bg-white p-1 rounded-full">
                        <PhoneIcon className="w-5 h-5" color="#FFFFFF" fill="#547A95" />
                    </div>
                    <span>+977 1-4445566</span>
                </div>
                 <div className="flex items-center gap-2">
                    <div className="bg-white p-1 rounded-full">
                      <WhatsAppIcon size={18} color="#547A95" />
                    </div>
                    <span>WhatsApp</span>
                </div>
                 <div className="flex items-center gap-2">
                    <div className="bg-white p-1 rounded-full">
                        <MailIcon className="w-5 h-5 bg-white text-primary" />
                    </div>
                    <span>info@gmail.com</span>
                </div>
            </div>
        </div>

        {/* MAIN NAVBAR */}
        <nav ref={navRef} className="bg-white shadow-sm px-6 py-5 flex items-center justify-between">
            
            {/* Logo */}
            <div className="flex items-center gap-3">
                <div className="bg-primary text-white p-2 rounded-xl">
                    <TruckIcon width={20} height={20} />
                </div>
                <div>
                    <h1 className="text-lg font-semibold text-primary">
                    Nepal Packers
                    </h1>
                    <p className="text-xs text-foreground/70">
                    & Movers
                    </p>
                </div>
            </div>

            {/* Navigation */}
            <ul className="hidden md:flex items-center md:gap-4 lg:gap-8 md:text-xs lg:text-[16px] font-medium font-inter">
                <NavItem href="/" label="Home" active />
                <NavItem href="/" label="About" />
                <NavItem href="/" label="Services" />
                <NavItem href="/" label=" Areas we serve" />
                <NavItem href="/" label=" Gallery" />
                <NavItem href="/" label="Contact" />
            </ul>

            {/* Primary CTA */}
            <button className="px-5 py-2 bg-secondary text-white rounded-lg text-sm md:text-[15px] font-semibold shadow-sm hover:scale-105 transition">
                Get Free Quote
            </button>
        </nav>
    </header>
  )
}

export default Navbar;

const NavItem = ({ href, label, active = false }: { href: string; label: string; active?: boolean }) => {
  return (
    <Link href={href} className="relative group">
      <p className={`tracking-widest transition-colors ${
          active ? "text-primary" : "text-foreground/70 hover:text-primary"
        }`}>
        {label}
      </p>
      <div className={`absolute -bottom-2 left-0 h-1 w-full bg-primary transition-transform duration-300 ${
        active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
      }`} />
    </Link>
  );
};
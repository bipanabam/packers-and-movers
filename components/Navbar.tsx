"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPinIcon, Clock, PhoneIcon, MailIcon, TruckIcon, X, Menu } from "lucide-react";

import WhatsAppIcon from "./icons/WhatsAppIcon";
import Logo from "./icons/Logo";

gsap.registerPlugin(ScrollTrigger);

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/areas", label: "Areas we serve" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const Navbar = () => {
  const navRef = useRef<HTMLElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

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
    <>
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
          <Link href="/" className="flex items-center gap-3">
            <Logo />
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center md:gap-4 lg:gap-8 md:text-xs lg:text-[15px] font-medium font-inter">
            {NAV_LINKS.map((link, i) => (
              <NavItem
                key={link.href + i}
                href={link.href}
                label={link.label}
                active={pathname === link.href}
              />
            ))}
          </ul>

          {/* Desktop CTA */}
          <Link 
            href="/get-quote" 
            className="hidden md:block px-5 py-2 bg-secondary text-white rounded-lg text-sm font-semibold shadow-sm hover:scale-105 transition">
            Get Free Quote
          </Link>

          {/* Mobile right side */}
          <div className="flex md:hidden items-center gap-3">
            <a
              href="tel:+97714445566"
              className="flex items-center gap-1.5 text-xs font-medium text-primary border border-primary/30 rounded-lg px-3 py-2"
            >
              <PhoneIcon size={13} />
              Call now
            </a>
            <button
              onClick={() => setIsOpen(true)}
              aria-label="Open navigation menu"
              className="p-2 rounded-lg border border-primary/20 text-primary hover:bg-primary/5 transition"
            >
              <Menu size={20} />
            </button>
          </div>
        </nav>
    </header>

    {isOpen && (
      <>
        {/* Overlay */}
        <div
          onClick={() => setIsOpen(false)}
          className={`fixed inset-0 z-60 bg-mutedPrimary/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        />

        {/* Drawer */}
        <div
          className={`fixed top-0 right-0 z-70 h-full w-[80%] max-w-sm bg-white flex flex-col shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Drawer header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-primary/10">
            {/* Logo */}
            <div className="flex items-center gap-2.5">
              <div className="bg-primary text-white p-1.5 rounded-lg">
                <TruckIcon width={16} height={16} />
              </div>
              <div>
                <p className="text-sm font-semibold text-primary leading-tight">Nepal Packers</p>
                <p className="text-[10px] text-foreground/60 leading-tight">& Movers</p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close navigation menu"
              className="p-1.5 rounded-lg text-foreground/60 hover:text-primary hover:bg-primary/5 transition"
            >
              <X size={20} />
            </button>
          </div>

          {/* Nav links */}
          <ul className="flex flex-col px-4 py-5 gap-1 flex-1 overflow-y-auto">
            {NAV_LINKS.map((link, i) => (
              <li key={link.href + i}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium font-inter transition-colors ${
                    link.href === pathname
                      ? "bg-primary/10 text-primary"
                      : "text-foreground/70 hover:bg-primary/5 hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Drawer footer */}
          <div className="px-4 py-5 border-t border-primary/10 flex flex-col gap-3">
            <Link
              href="/get-quote"
              onClick={() => setIsOpen(false)}
              className="w-full py-3 flex justify-center bg-secondary text-white rounded-xl text-sm font-semibold shadow-sm hover:opacity-90 transition"
            >
              Get Free Quote
            </Link>
            <div className="grid grid-cols-2 gap-2">
              <a
                href="tel:+97714445566"
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-primary/20 text-primary text-xs font-medium hover:bg-primary/5 transition"
              >
                <PhoneIcon size={13} /> Call us
              </a>
              <a
                href="https://wa.me/97714445566"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-green-200 text-green-700 text-xs font-medium hover:bg-green-50 transition"
              >
                <WhatsAppIcon size={13} color="#15803d" /> WhatsApp
              </a>
            </div>
            <div className="flex items-center gap-2 text-xs text-foreground/50 justify-center pt-1">
              <MapPinIcon size={12} />
              Kathmandu, Nepal · Available 7 days
            </div>
          </div>
        </div>
      </>
    )}
    </>
  );
};


export default Navbar;

const NavItem = ({ href, label, active = false }: { href: string; label: string; active?: boolean }) => {
  return (
    <li>
      <Link href={href} className="relative group">
        <p className={`tracking-wide transition-colors ${active ? "text-primary" : "text-foreground/70 hover:text-primary"}`}>
          {label}
        </p>
        <div className={`absolute -bottom-2 left-0 h-0.5 w-full bg-primary transition-transform duration-300 ${
          active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
        }`} />
      </Link>
    </li>
  );
};

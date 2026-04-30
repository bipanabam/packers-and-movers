"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { TruckIcon, LayoutDashboard, MessageSquare, Van, LogOut, Settings } from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex flex-col fixed left-0 top-0 h-screen w-64 glass-sidebar bg-neutral/30 backdrop-blur shadow-lg px-6 py-4">
        <div className="flex flex-col gap-3 h-full">
            {/* Logo and Title */}
            <div className="flex items-center gap-3">
                <div className="bg-blue-500 text-white rounded-lg p-2 w-10 h-10 flex items-center justify-center">
                    <TruckIcon width={20} height={20} />
                </div>
                <h1 className="text-xl font-semibold text-foreground">Nepal Packers and Movers</h1>
            </div>
            <hr className="border-primary/70" />

            {/* Links */}
            <div className="flex flex-col gap-2 mt-5">
                <Link href="/" className="flex items-center gap-3 px-3 py-2 rounded-lg text-lg text-foreground/70 hover:text-primary hover:bg-blue-50 hover:border-r-4 hover:border-primary hover:scale-105 transition-colors">
                    <LayoutDashboard width={20} height={20} />
                    Dashboard
                </Link>
                <Link href="/inquiries" className="flex items-center gap-3 px-3 py-2 rounded-lg text-lg text-foreground/70 hover:text-primary hover:bg-blue-50 hover:border-r-4 hover:border-primary hover:scale-105 transition-colors">
                    <MessageSquare width={20} height={20} />
                    Inquiries
                </Link>
                <Link href="/quotes" className="flex items-center gap-3 px-3 py-2 rounded-lg text-lg text-foreground/70 hover:text-primary hover:bg-blue-50 hover:border-r-4 hover:border-primary hover:scale-105 transition-colors">
                    <LayoutDashboard width={20} height={20} />
                    Quotes
                </Link>
                <Link href="/bookings" className="flex items-center gap-3 px-3 py-2 rounded-lg text-lg text-foreground/70 hover:text-primary hover:bg-blue-50 hover:border-r-4 hover:border-primary hover:scale-105 transition-colors">
                    <MessageSquare width={20} height={20} />
                    Bookings
                </Link>
                <Link href="/vehicles" className="flex items-center gap-3 px-3 py-2 rounded-lg text-lg text-foreground/70 hover:text-primary hover:bg-blue-50 hover:border-r-4 hover:border-primary hover:scale-105 transition-colors">
                    <Van width={20} height={20} />
                    Vehicles
                </Link>
                <Link href="/payments" className="flex items-center gap-3 px-3 py-2 rounded-lg text-lg text-foreground/70 hover:text-primary hover:bg-blue-50 hover:border-r-4 hover:border-primary hover:scale-105 transition-colors">
                    <LayoutDashboard width={20} height={20} />
                    Payments
                </Link>
                <Link href="/customers" className="flex items-center gap-3 px-3 py-2 rounded-lg text-lg text-foreground/70 hover:text-primary hover:bg-blue-50 hover:border-r-4 hover:border-primary hover:scale-105 transition-colors">
                    <MessageSquare width={20} height={20} />
                    Customers
                </Link>
            </div>

            <div className="flex-1" />

            <div className="flex flex-col gap-2 pt-4 mb-4 border-t border-primary/70">
                <Link href="/settings" className="flex items-center gap-3 px-3 py-2 rounded-lg text-lg text-foreground/70 hover:text-primary hover:bg-blue-50 hover:border-r-4 hover:border-primary hover:scale-105 transition-colors">
                    <Settings width={20} height={20} />
                    Settings
                </Link>
                <Link href="/logout" className="flex items-center gap-3 px-3 py-2 rounded-lg text-lg text-foreground/70 hover:text-primary hover:bg-blue-50 hover:border-r-4 hover:border-primary hover:scale-105 transition-colors">
                    <LogOut width={20} height={20} />
                    Logout
                </Link>
            </div>
        </div>
    </aside>
  );
}
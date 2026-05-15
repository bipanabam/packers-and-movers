"use client";

import Link from "next/link";
import {
  Phone,
  MessageCircle,
  FileText,
} from "lucide-react";

const CityStickyCTA = () => {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-white/90 backdrop-blur-xl supports-backdrop-filter:bg-white/70 md:hidden">
      <div className="grid grid-cols-3">
        <Link
          href="tel:+9779800000000"
          className="flex flex-col items-center justify-center gap-1 py-3 text-xs font-medium text-foreground transition hover:bg-primary/5"
        >
          <Phone
            size={18}
            className="text-primary"
          />
          Call
        </Link>

        <Link
          href="https://wa.me/9779800000000"
          target="_blank"
          className="flex flex-col items-center justify-center gap-1 border-x border-primary/10 py-3 text-xs font-medium text-foreground transition hover:bg-green-50"
        >
          <MessageCircle
            size={18}
            className="text-green-600"
          />
          WhatsApp
        </Link>

        <Link
          href="/get-quote"
          className="flex flex-col items-center justify-center gap-1 py-3 text-xs font-medium text-foreground transition hover:bg-secondary/5"
        >
          <FileText
            size={18}
            className="text-secondary"
          />
          Quote
        </Link>
      </div>
    </div>
  );
};

export default CityStickyCTA;
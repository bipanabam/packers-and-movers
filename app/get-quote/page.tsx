"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import { Phone } from "lucide-react";

import Hero from "@/components/get-quote/Hero";
import ContactInformationForm from "@/components/get-quote/ContactInformationForm";
import MovingDetailForm from "@/components/get-quote/MovingDetailForm";
import InventoryAndLocationForm from "@/components/get-quote/InventoryAndLocationForm";
import ReviewAndSubmitForm from "@/components/get-quote/ReviewAndSubmitForm";
import FormSection from "@/components/get-quote/FormSection";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { 
  QuoteFormData
 } from "@/libs/validations/quote";
import HowItWorks from "@/components/HowItWorks";
import FrequentlyAskedQuestions from "@/components/FrequentlyAskedQuestions";
import { quoteFaq } from "@/constants/faq";
import UrgentCTA from "@/components/get-quote/UrgentCTA";
import QuoteFormSection from "@/components/get-quote/QuoteFormSection";

const GetQuotePage = () => {
  return (
    <div className="w-full flex flex-col flex-1 items-center justify-center bg-background/80 font-sans px-5 md:px-10">
      <Hero />
      {/* Quote Form */}
      <QuoteFormSection />
      <HowItWorks />
      <FrequentlyAskedQuestions  variant="compact" items={quoteFaq} />
      <UrgentCTA />
    </div>
  )
}

export default GetQuotePage;



 {/* Mini Customer Testimonial */}
{/* <div className="rounded-3xl bg-secondary p-6 text-white">
  <div className="flex items-center gap-1 text-yellow-300">
    ★★★★★
  </div>

  <p className="mt-4 text-sm leading-relaxed text-white/90">
    “The team arrived on time, packed everything safely, and completed our move within a day. Highly professional service.”
  </p>

  <div className="mt-5">
    <p className="font-medium">Aayush Sharma</p>
    <span className="text-xs text-white/70">
      Lalitpur → Kathmandu
    </span>
  </div>
</div> */}

{/* <div className="w-full rounded-3xl bg-[#D9EFFFB2] p-8">
  <h3 className="text-2xl font-semibold text-primary">
    Why Choose Us ?
  </h3>

  <ul className="flex flex-col gap-6 text-sm text-white/80 w-full h-fit mt-4">
    <li className="flex gap-1 items-center w-full">
      <Package size={20} className="text-secondary" />
      <div className="flex flex-col">
        <p className="text-sm text-foreground">
        Safe Packaging
        </p>
        <span className="text-xs text-foreground/50">
          Multi-layer bubble wrap and heavy-duty corrugated boxes.
        </span>
      </div>
    </li>
    <li className="flex gap-1 items-center w-full">
      <Banknote size={20} className="text-secondary" />
      <div className="flex flex-col">
        <p className="text-sm text-foreground">
        Affordable Rates
        </p>
        <span className="text-xs text-foreground/50">
        Transparent pricing with no hidden fees or charges.
        </span>
      </div>
    </li>
    <li className="flex gap-1 items-center w-full">
      <Clock size={20} className="text-secondary" />
      <div className="flex flex-col">
        <p className="text-sm text-foreground">
        On-time Service
        </p>
        <span className="text-xs text-foreground/50">
          Strict adherence to schedules for zero delays.
        </span>
      </div>
    </li>
    <li className="flex gap-1 items-center w-full">
      <Users size={20} className="text-secondary" />
      <div className="flex flex-col">
        <p className="text-sm text-foreground">
        Trained Movers
        </p>
        <span className="text-xs text-foreground/50">
        Background-checked and physically trained professionals.
        </span>
      </div>
    </li>
  </ul>
</div> */}

{/* Service Areas */}
{/* <div className="rounded-3xl border border-primary/10 bg-white p-6 shadow-sm">
  <h3 className="text-lg font-semibold text-foreground">
    Popular Service Areas
  </h3>

  <div className="flex flex-wrap gap-2 mt-4">
    {[
      "Kathmandu",
      "Lalitpur",
      "Bhaktapur",
      "Baneshwor",
      "Koteshwor",
      "Boudha",
      "Thamel",
      "Kapan",
    ].map((area) => (
      <span
        key={area}
        className="rounded-full bg-primary/5 px-3 py-1 text-xs text-primary"
      >
        {area}
      </span>
    ))}
  </div>
</div> */}
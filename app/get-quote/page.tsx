"use client";

import { useSearchParams } from "next/navigation";
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

const steps = [
  {
    id:1,
    title: "Contact Information",
    description: "Enter your contact information."
  },
  {
    id:2,
    title: "Move Details",
    description: "Enter your move type for better estimation of required assistance."
  },
  {
    id:3,
    title: "Inventory & Locations",
    description: "Provide your pickup and drop off location with all the inventory list."
  },
  {
    id:4,
    title: "Review & Submit",
    description: "Check the filled up details and make your move success"
  }
]
const GetQuotePage = () => {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState<QuoteFormData>({
    contact: {},
    move: {},
    inventory: {},
    review: {},
  });

  const activeStep = parseInt(searchParams.get("step") || "1");

  const stepComponents = {
    1: (
      <ContactInformationForm
        setFormData={setFormData}
      />
    ),

    2: formData.contact ? (
      <MovingDetailForm
        setFormData={setFormData}
      />
    ) : (
      <p className="text-sm text-foreground/50">
        Please fill contact information first.
      </p>
    ),

    3: formData.move ? (
      <InventoryAndLocationForm
        setFormData={setFormData}
      />
    ) : (
      <p className="text-sm text-foreground/50">
        Please fill move details first.
      </p>
    ),

    4: formData.inventory ? (
      <ReviewAndSubmitForm
        formData={formData}
        setFormData={setFormData}
      />
      ) : (
        <p className="text-sm text-foreground/50">
          Please complete inventory details first.
        </p>
      ),
  };

  return (
    <div className="w-full flex flex-col flex-1 items-center justify-center bg-background/80 font-sans px-5 md:px-10">
      <Hero />
      {/* Quote Form */}
      <div className="w-full mx-auto px-4 md:px-8 py-10 md:py-14">
        <div className="grid xl:grid-cols-[minmax(0,1fr)_320px] gap-8 mx-auto">
          {/* Left */}
          <div className="max-w-5xl">
            <div className="flex flex-col items-start gap-2 mb-4">
              <h2 className="text-xl md:text-3xl text-foreground/80 font-medium">
              Request A Free Quote
              </h2>
              <div className="flex items-center gap-2 text-sm text-foreground/50">
                <span>✓ Takes less than 2 minutes</span>
                <span>•</span>
                <span>✓ Free quote</span>
              </div>
              {/* Steps */}
              <div className="w-full mt-8 mb-4">
                <div className="flex items-center justify-between relative">

                  {/* Progress Line */}
                  <div className="absolute top-5 left-0 h-1 w-full bg-primary/10 rounded-full">
                    <div
                      className="h-full bg-primary rounded-full transition-all duration-300"
                      style={{
                        width: `${((activeStep - 1) / (steps.length - 1)) * 100}%`,
                      }}
                    />
                  </div>

                  {steps.map((step) => {
                    const isActive = activeStep === step.id;
                    const isCompleted = activeStep > step.id;

                    return (
                      <div
                        key={step.id}
                        className="relative z-10 flex flex-col items-center gap-2"
                      >
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-full border-4 text-sm font-semibold transition-all
                          ${
                            isCompleted
                              ? "bg-primary border-primary text-white"
                              : isActive
                              ? "bg-white border-primary text-primary"
                              : "bg-white border-primary/20 text-foreground/40"
                          }`}
                        >
                          {step.id}
                        </div>

                        <p
                          className={`hidden md:block text-xs font-medium text-center
                          ${
                            isActive
                              ? "text-foreground"
                              : "text-foreground/50"
                          }`}
                        >
                          {step.title}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Description for the active step */}
              <FormSection
                step={activeStep}
                title={steps[activeStep - 1].title}
                description={steps[activeStep - 1].description}
              >
                {stepComponents[activeStep as keyof typeof stepComponents]}
              </FormSection>
  
            </div>
          </div>

          {/* Right */}
          <div className="hidden xl:flex flex-col gap-4 w-80 sticky top-24 self-start">
            {/* Trust card */}
            <div className="rounded-3xl border border-primary/10 bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-foreground">
                Trusted Across Kathmandu Valley
              </h3>

              <p className="mt-2 text-sm text-foreground/60 leading-relaxed">
                Reliable movers for homes, apartments, offices, and vehicle transport.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mt-6 items-center">
                <div className="rounded-2xl bg-primary/5 p-4 items-center">
                  <p className="text-xl font-bold text-primary">500+</p>
                  <span className="text-[11px] text-foreground/60">
                    Successful Moves
                  </span>
                </div>
                 <div className="rounded-2xl bg-primary/5 p-4 items-center">
                  <p className="text-xl font-bold text-primary">24/7</p>
                  <span className="text-[11px] text-foreground/60">
                    Support Available
                  </span>
                </div>

                <div className="rounded-2xl bg-primary/5 p-4">
                  <p className="text-xl font-bold text-primary">15+</p>
                  <span className="text-[11px] text-foreground/60">
                    Areas Covered
                  </span>
                </div>

                <div className="rounded-2xl bg-primary/5 p-4">
                  <p className="text-xl font-bold text-primary">4.9★</p>
                  <span className="text-[11px] text-foreground/60">
                    Customer Rating
                  </span>
                </div>
              </div>

              {/* Features */}
              <div className="mt-6 flex flex-col gap-4">
                {[
                  "Safe Packaging",
                  "Affordable Pricing",
                  "On-time Service",
                  "Trained Professionals",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-secondary" />
                    <p className="text-sm text-foreground/80">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA card */}
            <div className="rounded-3xl bg-primary p-7">
              <h3 className="text-xl font-semibold text-white">
                Need Help Quickly?
              </h3>

              <p className="mt-2 text-sm text-white/70">
                Speak directly with our moving experts.
              </p>

              <div className="mt-6 flex flex-col gap-3">
                <a
                  href="https://wa.me/977XXXXXXXXX"
                  className="flex items-center justify-center gap-2 rounded-xl bg-green-500 px-5 py-3 text-white transition hover:scale-[1.02]"
                >
                  <WhatsAppIcon size={18} />
                  Chat on WhatsApp
                </a>

                <a
                  href="tel:+977XXXXXXXXX"
                  className="flex items-center justify-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-white hover:bg-white/10"
                >
                  <Phone size={18} />
                  Call Now
                </a>
              </div>

              <p className="mt-4 text-xs text-white/60">
                Usually replies within 10 minutes
              </p>
            </div>
          </div>
        </div>
      </div>

      <HowItWorks />
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
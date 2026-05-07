"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import { Package , Clock, Users, Banknote
} from "lucide-react";

import Hero from "@/components/get-quote/Hero";
import ContactInformationForm from "@/components/get-quote/ContactInformationForm";
import MovingDetailForm from "@/components/get-quote/MovingDetailForm";
import InventoryAndLocationForm from "@/components/get-quote/InventoryAndLocationForm";
import ReviewAndSubmitForm from "@/components/get-quote/ReviewAndSubmitForm";
import FormSection from "@/components/get-quote/FormSection";
import { 
  ContactInformationInputs,
  MovingDetailInputs,
  InventoryAndLocationInputs,
  ReviewAndSubmitInputs,
  QuoteFormData
 } from "@/libs/validations/quote";

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
        <div className="w-full mx-auto px-4 md:px-8 py-16">
          <div className="grid lg:grid-cols-[minmax(0,1fr)_320px] gap-8 mx-auto">
            {/* Left */}
            <div className="max-w-5xl">
              <div className="flex flex-col items-start gap-2 mb-4">
                <h2 className="text-xl md:text-3xl text-foreground/80 font-medium">
                Request A Free Quote
                </h2>
                {/* Steps */}
                <div className="w-full mt-8">
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
                {/* <div className="w-full flex flex-col md:flex-row gap-16">
                  <div className="w-full flex flex-col gap-8 bg-white rounded-xl shadow-md divide-y">
                    {activeStep === 1 ? (
                      <ContactInformationForm setContactFormData={setContactFormData} />
                      ) : 
                        activeStep === 2 ? ( contactFormData ? <MovingDetailForm setMoveDetailFormData={setMoveDetailFormData} /> : <p className="text-sm text-foreground/50"> Please fill out contact information first</p>) 
                        :
                        activeStep === 3 ? (moveDetailFormData ? <InventoryAndLocationForm setInventoryAndLocationFormData={setInventoryAndLocationFormData} /> : <p className="text-sm text-foreground/50">Please fill out the move details before.</p>)
                        : (activeStep == 4 && inventoryAndLocationFormData ? <ReviewAndSubmitForm setReviewAndSubmitFormdata={setReviewAndSubmitFormdata} /> : <p>Please fill out location details</p>)
                    }
                  </div>
                </div> */}
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
            <div className="hidden lg:flex flex-col gap-4 w-80 ">
              <div className="w-full rounded-3xl bg-[#D9EFFFB2] p-8">

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
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default GetQuotePage;
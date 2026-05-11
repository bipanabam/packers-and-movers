"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import { Phone } from "lucide-react";

import ContactInformationForm from "@/components/get-quote/ContactInformationForm";
import MovingDetailForm from "@/components/get-quote/MovingDetailForm";
import InventoryAndLocationForm from "@/components/get-quote/InventoryAndLocationForm";
import ReviewAndSubmitForm from "@/components/get-quote/ReviewAndSubmitForm";
import FormSection from "@/components/get-quote/FormSection";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { 
  QuoteFormData
} from "@/libs/validations/quote";
import QuoteFormSidebar from "./QuoteFormSidebar";

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

const QuoteFormSection = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
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
    <section className='w-full'>
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
                        {activeStep > 1 && (
                        <button
                            onClick={() => router.push(`/get-quote?step=${activeStep - 1}`, {scroll: false})}
                            className="text-sm text-primary mt-4 hover:underline"
                        >
                            ← Go back to previous step
                        </button>
                        )}
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
                <QuoteFormSidebar />
            </div>
        </div>
    </section>
  )
}

export default QuoteFormSection;
"use client";

import {
  ArrowRight,
} from "lucide-react";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import {
  ReviewAndSubmitInputs,
  reviewAndSubmitFormSchema,
  QuoteFormData
} from "@/libs/validations/quote";
import ReviewCard from "./ReviewCard";

type ReviewAndSubmitFormProps = {
  formData: QuoteFormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
};

const ReviewAndSubmitForm = ({
  formData,
  setFormData,
}: ReviewAndSubmitFormProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<ReviewAndSubmitInputs>({
        resolver: zodResolver(reviewAndSubmitFormSchema),
      })
    
      const router = useRouter();
    
      const handleReviewAndSubmitFormSubmit: SubmitHandler<ReviewAndSubmitInputs> = (data) => {
        setFormData((prev) => ({
        ...prev,
        review: data,
        }));
        router.push("/get-quote", {scroll: false});
        console.log("Review Form Data:", data);
      }
  return (
    <form 
      className="flex flex-col gap-4 p-4 sm:p-6 items-center w-full"
      onSubmit={handleSubmit(handleReviewAndSubmitFormSubmit)}
    >  
        {/* Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-center">
            {/* Contact Information */}
            <ReviewCard title="Contact Information">
            <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                <p className="text-foreground/50">Full Name</p>
                <p className="font-medium">
                    {formData.contact.fullName || "-"}
                </p>
                </div>

                <div>
                <p className="text-foreground/50">Phone</p>
                <p className="font-medium">
                    {formData.contact.phoneNumber || "-"}
                </p>
                </div>

                <div>
                <p className="text-foreground/50">WhatsApp</p>
                <p className="font-medium">
                    {formData.contact.whatsappNumber || "-"}
                </p>
                </div>

                <div>
                <p className="text-foreground/50">Email</p>
                <p className="font-medium">
                    {formData.contact.email || "-"}
                </p>
                </div>
            </div>
            {/* <button
                type="button"
                onClick={() => router.push("/get-quote?step=1", {scroll: false})}
                className="text-sm text-primary hover:underline"
            >
            Edit
            </button> */}
            </ReviewCard>

            {/* Move Details */}
            <ReviewCard title="Move Details">
            <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                <p className="text-foreground/50">Move Type</p>
                <p className="font-medium">
                    {formData.move.movingType || "-"}
                </p>
                </div>

                <div>
                <p className="text-foreground/50">Property Size</p>
                <p className="font-medium">
                    {formData.move.propertySize || "-"}
                </p>
                </div>

                <div>
                <p className="text-foreground/50">Moving Date</p>
                <p className="font-medium">
                    {formData.move.movingDate || "-"}
                </p>
                </div>

                <div>
                <p className="text-foreground/50">Preferred Time</p>
                <p className="font-medium">
                    {formData.move.movingTime || "-"}
                </p>
                </div>
            </div>
            </ReviewCard>

            {/* Locations */}
            <ReviewCard title="Pickup & Drop Locations">
            <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                <p className="text-foreground/50">Pickup</p>
                <p className="font-medium">
                    {formData.inventory.pickupLocation || "-"}
                </p>
                </div>

                <div>
                <p className="text-foreground/50">Drop</p>
                <p className="font-medium">
                    {formData.inventory.dropLocation || "-"}
                </p>
                </div>

                <div>
                <p className="text-foreground/50">Floor</p>
                <p className="font-medium">
                    {formData.inventory.floorNumber || "-"}
                </p>
                </div>

                <div>
                <p className="text-foreground/50">Lift Available</p>
                <p className="font-medium">
                    {formData.inventory.liftAvailable ? "Yes" : "No"}
                </p>
                </div>
            </div>
            </ReviewCard>

            {/* Inventory */}
            <ReviewCard title="Inventory Items">
            <div className="flex flex-wrap gap-2">
                {formData.inventory.inventory?.length ? (
                formData.inventory.inventory.map((item: string) => (
                    <span
                    key={item}
                    className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary"
                    >
                    {item}
                    </span>
                ))
                ) : (
                <p className="text-sm text-foreground/50">
                    No inventory selected
                </p>
                )}
            </div>
            </ReviewCard>
        </div>

        {/* Notes */}
        <div className="flex flex-col gap-4.5 w-full mt-4">
            <p className="text-sm">Any special requirements ?</p>
            <div className="relative">
                <textarea
                id="comment"
                rows={5}
                placeholder="Tell us about fragile items, parking issues, narrow stairs, urgent shifting, or any special instructions..."
                className="w-full rounded-xl border border-primary/30 bg-white/90 px-4 py-3 text-sm text-foreground placeholder:text-muted/60 outline-none resize-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
                {...register("comment")}
                />
                <p className="absolute -bottom-5 text-xs text-red-500">
                    {errors.comment?.message}
                </p>
            </div>
        </div>
    
        <button
          type="submit"
          className="flex items-center justify-center gap-2 w-full bg-secondary text-white px-5 py-2.5 rounded-md text-base font-semibold mt-3 md:mt-0 hover:cursor-pointer whitespace-nowrap transition"
        >
          <p>Get my Quote</p>
          <ArrowRight size={22} strokeWidth={1.5} />
        </button>
        <span className="text-sm text-foreground/50">We usually respond within minutes during business hours.</span>
    </form>
)};

export default ReviewAndSubmitForm;
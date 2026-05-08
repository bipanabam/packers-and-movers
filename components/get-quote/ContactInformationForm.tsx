"use client";

import {
  User,
  Phone,
  Mail,
  ArrowRight
} from "lucide-react";
import WhatsAppIcon from "../icons/WhatsAppIcon";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import {
  ContactInformationInputs,
  contactInformationFormSchema,
} from "@/libs/validations/quote";

const ContactInformationForm = ({setFormData} : { setFormData: React.Dispatch<React.SetStateAction<FormData>>}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<ContactInformationInputs>({
        resolver: zodResolver(contactInformationFormSchema),
      })
    
      const router = useRouter();
    
      const handleContactInformationFormSubmit: SubmitHandler<ContactInformationInputs> = (data) => {
        setFormData((prev) => ({
        ...prev,
        contact: data,
        }));
        router.push("/get-quote?step=2", {scroll: false});
        console.log("Contact Form Data:", data);
        // You can perform further actions here, such as sending the data to an API or navigating to the next step.
      }
  return (
    <form 
      className="flex flex-col gap-4 p-4 sm:p-6 items-center w-full"
      onSubmit={handleSubmit(handleContactInformationFormSubmit)}
    >
        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-5">
            <div className="flex flex-col gap-1.5">
                <label htmlFor="fullName" className="text-foreground/70 text-sm font-medium">Full Name *</label>
                <div className="relative">
                    <div className="flex items-center gap-2 bg-white/90 px-3 py-3 rounded-lg border border-primary/30 w-full transition hover:border-primary focus:ring-4 focus:ring-primary/10">
                        <User className="text-foreground/70" size={20} />
                        <input 
                        type="text"
                        id="fullName" 
                        placeholder="John Doe" 
                        className="bg-transparent outline-none text-sm w-full placeholder:text-muted/60 text-foreground"
                        {...register("fullName")} 
                        />
                    </div>
                    <p className="absolute -bottom-5 text-xs text-red-500">
                        {errors.fullName?.message}
                    </p>
                </div>
            </div>
            <div className="flex flex-col gap-1.5">
                <label htmlFor="phoneNumber" className="text-foreground/70 text-sm font-medium">Phone Number *</label>
                <div className="relative">
                    <div className="flex items-center gap-2 bg-white/90 px-3 py-3 rounded-lg border border-primary/30 w-full hover:border-primary ">
                        <Phone className="text-foreground/70" size={20} />
                        <input 
                        type="tel" 
                        id="phoneNumber" 
                        placeholder="123-456-7890"  
                        className="bg-transparent outline-none text-sm w-full placeholder:text-muted/60 text-foreground"
                        {...register("phoneNumber")} 
                        />
                    </div>
                    <p className="absolute -bottom-5 text-xs text-red-500">
                        {errors.phoneNumber?.message}
                    </p>
                </div>
            </div>
            <div className="flex flex-col gap-1.5">
                <label htmlFor="whatsappNumber" className="text-foreground/70 text-sm font-medium">WhatsApp Number</label>
                <div className="relative">
                    <div className="flex items-center gap-2 bg-white/90 px-3 py-3 rounded-lg border border-primary/30 w-full hover:border-primary ">
                        <WhatsAppIcon color="#919191" size={20} />
                        <input 
                        type="tel"
                        id="whatsappNumber" 
                        placeholder="Optional" 
                        className="bg-transparent outline-none text-sm w-full placeholder:text-muted/60 text-foreground"
                        {...register("whatsappNumber")} 
                        />
                    </div>
                    <p className="absolute -bottom-5 text-xs text-red-500">
                        {errors.whatsappNumber?.message}
                    </p>
                </div>
            </div>
            <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-foreground/70 text-sm font-medium">Email</label>
                <div className="relative">
                    <div className="flex items-center gap-2 bg-white/90 px-3 py-3 rounded-lg border border-primary/30 w-full hover:border-primary">
                        <Mail className="text-foreground/70" size={20} />
                        <input 
                        type="email"
                        id="email" 
                        placeholder="info@gmail.com (Optional)" 
                        className="bg-transparent outline-none text-sm w-full placeholder:text-muted/60 text-foreground"
                        {...register("email")} 
                        />
                    </div>
                    <p className="absolute -bottom-5 text-xs text-red-500">
                        {errors.email?.message}
                    </p>
                </div>
            </div>
        </div>
        <button
          type="submit"
          className="flex items-center justify-center gap-2 w-full bg-secondary text-white px-5 py-2.5 rounded-md text-base font-semibold mt-3 md:mt-0 hover:cursor-pointer whitespace-nowrap transition"
        >
          <p>Continue with Move Detail</p>
          <ArrowRight size={22} strokeWidth={1.5} />
        </button>
    </form>
  )
}

export default ContactInformationForm;
"use client";

import {
  ArrowRight,
  User,
  Phone,
  ArrowLeftFromLine,
  ArrowRightToLine,
} from "lucide-react";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import {
  InstantQuoteFormInputs,
  instantQuoteFormSchema,
} from "@/libs/validations/quote";


const ServiceQuoteForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InstantQuoteFormInputs>({
    resolver: zodResolver(instantQuoteFormSchema),
  })

  const router = useRouter();

  const handleInstantQuoteFormSubmit: SubmitHandler<InstantQuoteFormInputs> = (data) => {
    router.push("/", {scroll: false});
    console.log("Quote Form Data:", data);
    // You can perform further actions here, such as sending the data to an API or navigating to the next step.
  }
  return (
    <form 
      className="grid grid-cols-1 md:grid-cols-5 gap-4 p-4 sm:p-6 items-end"
      onSubmit={handleSubmit(handleInstantQuoteFormSubmit)}
     >
        <div className="flex flex-col gap-1">
            <label htmlFor="fullName" className="text-white text-lg font-medium">Full Name</label>
            <div className="relative">
                <div className="flex items-center gap-2 h-12 rounded-xl border border-white/10 bg-white/10 px-4 text-sm text-white outline-none placeholder:text-white/70">
                    <User className="text-white/70" size={18} />
                    <input 
                    type="text"
                    id="fullName" 
                    placeholder="John Doe" 
                    className="bg-transparent outline-none text-sm w-full placeholder:text-white/70 text-white"
                    {...register("fullName")} 
                    />
                </div>
                <p className="absolute -bottom-5 text-xs text-red-500">
                    {errors.fullName?.message}
                </p>
            </div>
        </div>
        <div className="flex flex-col gap-1">
            <label htmlFor="phone" className="text-white text-lg font-medium">Phone Number</label>
            <div className="relative">
                <div className="flex items-center gap-2 h-12 rounded-xl border border-white/10 bg-white/10 px-4 text-sm text-white outline-none placeholder:text-white/40">
                    <Phone className="text-white/70" size={18} />
                    <input 
                    type="tel" 
                    id="phone" 
                    placeholder="123-456-7890" 
                    className="bg-transparent outline-none text-sm w-full placeholder:text-white/70 text-white"
                    {...register("phone")}
                    />
                </div>
                <p className="absolute -bottom-5 text-xs text-red-500">
                    {errors.phone?.message}
                </p>
            </div>
        </div>
        <div className="flex flex-col gap-1">
            <label htmlFor="fromaddress" className="text-white text-lg font-medium">From</label>
            <div className="relative">
                <div className="flex items-center gap-2 h-12 rounded-xl border border-white/10 bg-white/10 px-4 text-sm text-white outline-none placeholder:text-white/40">
                    <ArrowRightToLine className="text-white/70" size={18} />
                    <input 
                    type="text" 
                    id="fromaddress" 
                    placeholder="From" 
                    className="bg-transparent outline-none text-sm w-full placeholder:text-white/70 text-white"
                    {...register("fromAddress")} 
                    />
                </div>
                <p className="absolute -bottom-5 text-xs text-red-500">
                    {errors.fromAddress?.message}
                </p>
            </div>
        </div>
        <div className="flex flex-col gap-1">
            <label htmlFor="toAddress" className="text-white text-lg font-medium">To</label>
            <div className="relative">
                <div className="flex items-center gap-2 h-12 rounded-xl border border-white/10 bg-white/10 px-4 text-sm text-white outline-none placeholder:text-white/40">
                    <ArrowLeftFromLine className="text-white/70" size={18} />
                    <input 
                    type="text" 
                    id="toAddress" 
                    placeholder="To"
                    className="bg-transparent outline-none text-sm w-full placeholder:text-white/70 text-white"
                    {...register("toAddress")} 
                    />
                </div>
                <p className="absolute -bottom-5 text-xs text-red-500">
                    {errors.toAddress?.message}
                </p>
            </div>
        </div>

        <button
          type="submit"
          className="flex items-center justify-center gap-2 rounded-xl bg-secondary px-6 py-3 text-sm font-medium text-white mt-3 md:mt-0"
        >
          Check Pricing
          <ArrowRight size={22} strokeWidth={1.5} />
        </button>
    </form>
  )
}

export default ServiceQuoteForm;
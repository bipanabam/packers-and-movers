"use client";

import {
  ArrowRight,
  User,
  Phone,
  Mail,
  Building,
  Truck,
} from "lucide-react";
import WhatsAppIcon from "../icons/WhatsAppIcon";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import {
  QuoteFormInputs,
  quoteFormSchema,
} from "@/libs/validations/quote";


const QuoteForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<QuoteFormInputs>({
    resolver: zodResolver(quoteFormSchema),
  })

  const router = useRouter();

  const handleQuoteFormSubmit: SubmitHandler<QuoteFormInputs> = (data) => {
    router.push("/", {scroll: false});
    console.log("Quote Form Data:", data);
    // You can perform further actions here, such as sending the data to an API or navigating to the next step.
  }
  return (
    <form 
      className="flex flex-col gap-4 p-4 sm:p-6 items-center w-full"
      onSubmit={handleSubmit(handleQuoteFormSubmit)}
    >
        {/* Contact Information */}
        <div className="flex flex-col gap-4.5 w-full">
            <div className="flex items-center gap-2">
                <div className="bg-primary w-5 h-5 flex items-center justify-center shrink-0 rounded-full text-white">1</div>
                <p className="text-sm">Contact Information</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-2">
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="fullName" className="text-foreground/70 text-sm font-medium">Full Name *</label>
                    <div className="relative">
                        <div className="flex items-center gap-2 bg-white/90 px-3 py-3 rounded-lg border border-primary/50 w-full transition hover:border-primary focus:ring-4 focus:ring-primary/10">
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
                        <div className="flex items-center gap-2 bg-white/90 px-3 py-3 rounded-lg border border-primary/50 w-full hover:border-primary ">
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
                        <div className="flex items-center gap-2 bg-white/90 px-3 py-3 rounded-lg border border-primary/50 w-full hover:border-primary ">
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
                        <div className="flex items-center gap-2 bg-white/90 px-3 py-3 rounded-lg border border-primary/50 w-full hover:border-primary">
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
        </div>

        {/* Move Details */}
          <div className="flex flex-col gap-4.5 w-full">
            <div className="flex items-center gap-2">
                <div className="bg-primary w-5 h-5 flex items-center justify-center shrink-0 rounded-full text-white">2</div>
                <p className="text-sm">Move Details</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-2">
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="movingType" className="text-foreground/70 text-sm font-medium">Moving Type</label>
                    <div className="relative">
                        <div className="flex items-center gap-2 bg-white/90 px-3 py-3 rounded-lg border border-primary/50 w-full hover:border-primary">
                            <select
                                id="movingType"
                                className="bg-transparent outline-none text-sm w-full text-foreground"
                                {...register("movingType")}
                                >
                                <option value="">Select Moving Type</option>
                                <option value="House Shift">House Shift</option>
                                <option value="Office Shift">Office Shift</option>
                                <option value="Bike Transport">Bike Transport</option>
                                <option value="Car Transport">Car Transport</option>
                            </select>
                        </div>
                        <p className="absolute -bottom-5 text-xs text-red-500">
                            {errors.movingType?.message}
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="propertySize" className="text-foreground/70 text-sm font-medium">Property Size</label>
                    <div className="relative">
                        <div className="flex items-center gap-2 bg-white/90 px-3 py-3 rounded-lg border border-primary/50 w-full hover:border-primary">
                            <select
                            {...register("propertySize")}
                            className="bg-transparent outline-none text-sm w-full"
                            >
                            <option value="">Property Size</option>
                            <option value="1 RK">1 RK</option>
                            <option value="1 BHK">1 BHK</option>
                            <option value="2 BHK">2 BHK</option>
                            <option value="3 BHK">3 BHK</option>
                            <option value="Villa">Villa</option>
                            <option value="Office">Office</option>
                            </select>
                        </div>
                        <p className="absolute -bottom-5 text-xs text-red-500">
                            {errors.propertySize?.message}
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-1.5">
                    <label htmlFor="movingDate" className="text-foreground/70 text-sm font-medium">Moving Date</label>
                    <div className="relative">
                        <div className="flex items-center gap-2 bg-white/90 px-3 py-3 rounded-lg border border-primary/50 w-full hover:border-primary ">
                            <input 
                            type="date" 
                            id="movingDate" 
                            placeholder="123-456-7890"  
                            className="bg-transparent outline-none text-sm w-full placeholder:text-muted/60 text-foreground"
                            {...register("movingDate")} 
                            />
                        </div>
                        <p className="absolute -bottom-5 text-xs text-red-500">
                            {errors.movingDate?.message}
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="movingTime" className="text-foreground/70 text-sm font-medium">Moving Time</label>
                    <div className="relative">
                        <div className="flex items-center gap-2 bg-white/90 px-3 py-3 rounded-lg border border-primary/50 w-full hover:border-primary ">
                            <select
                                id="movingTime"
                                className="bg-transparent outline-none text-sm w-full text-foreground"
                                {...register("movingTime")}
                                >
                                <option value="" className="text-foreground/50">Preferred Time</option>
                                <option value="Morning (7AM - 11AM)">
                                    Morning (7AM - 11AM)
                                </option>
                                <option value="Afternoon (12PM - 4PM)">
                                    Afternoon (12PM - 4PM)
                                </option>
                                <option value="Evening (5PM - 9PM)">
                                    Evening (5PM - 9PM)
                                </option>
                            </select>
                        </div>
                        <p className="absolute -bottom-5 text-xs text-red-500">
                            {errors.movingTime?.message}
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* Location Details */}
        <div className="flex flex-col gap-4.5 w-full">
            <div className="flex items-center gap-2">
                <div className="bg-primary w-5 h-5 flex items-center justify-center shrink-0 rounded-full text-white">3</div>
                <p className="text-sm">Location Detail</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-2">
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="pickupLocation" className="text-foreground/70 text-sm font-medium">Pickup Location *</label>
                    <div className="relative">
                        <div className="flex items-center gap-2 bg-white/90 px-3 py-3 rounded-lg border border-primary/50 w-full hover:border-primary">
                            <Truck className="text-foreground/70" size={20} />
                            <input 
                            type="text"
                            id="pickupLocation" 
                            placeholder="street, City" 
                            className="bg-transparent outline-none text-sm w-full placeholder:text-muted/60 text-foreground"
                            {...register("pickupLocation")} 
                            />
                        </div>
                        <p className="absolute -bottom-5 text-xs text-red-500">
                            {errors.pickupLocation?.message}
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="dropLocation" className="text-foreground/70 text-sm font-medium">Drop Location *</label>
                    <div className="relative">
                        <div className="flex items-center gap-2 bg-white/90 px-3 py-3 rounded-lg border border-primary/50 w-full hover:border-primary ">
                            <Truck className="text-foreground/70" size={20} />
                            <input 
                            type="tel" 
                            id="dropLocation" 
                            placeholder="street, City"  
                            className="bg-transparent outline-none text-sm w-full placeholder:text-muted/60 text-foreground"
                            {...register("dropLocation")} 
                            />
                        </div>
                        <p className="absolute -bottom-5 text-xs text-red-500">
                            {errors.dropLocation?.message}
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="floorNumber" className="text-foreground/70 text-sm font-medium">Floor Number</label>
                    <div className="relative">
                        <div className="flex items-center gap-2 bg-white/90 px-3 py-3 rounded-lg border border-primary/50 w-full hover:border-primary ">
                            <Building color="#919191" size={20} />
                            <select
                            id="floorNumber"
                            className="bg-transparent outline-none text-sm w-full text-foreground"
                            {...register("floorNumber")}
                            >
                            <option value="">Select Floor Number</option>
                            <option value="House Shift">Ground Floor</option>
                            <option value="Office Shift">1st Floor</option>
                            <option value="Bike Transport">2nd Floor</option>
                            <option value="Car Transport">3rd Floor</option>
                            </select>
                        </div>
                        <p className="absolute -bottom-5 text-xs text-red-500">
                            {errors.floorNumber?.message}
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-1.5 justify-center">
                    <div className="relative">
                        <div className="flex gap-3 items-center">
                            <label htmlFor="liftAvailable" className="text-foreground/70 text-sm font-medium">Lift Available?</label>
                            <input type="checkbox" {...register("liftAvailable")} />
                            <span className="text-foreground/60 text-sm">(yes)</span>
                        </div>

                        <p className="absolute -bottom-5 text-xs text-red-500">
                            {errors.liftAvailable?.message}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        {/* Inventory Items */}
        <div className="flex flex-col gap-4.5 w-full">
            <div className="flex items-center gap-2">
                <div className="bg-primary w-5 h-5 flex items-center justify-center shrink-0 rounded-full text-white">4</div>
                <p className="text-sm">Inventory Items</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-4xl w-full">
                {[
                    "Bed",
                    "Sofa",
                    "Fridge",
                    "Washing Machine",
                    "TV",
                    "Dining Table",
                ].map((item) => (
                    <label
                    key={item}
                    className="flex items-center gap-2 bg-white px-3 py-2"
                    >
                    <input
                        type="checkbox"
                        value={item}
                        {...register("inventory")}
                    />
                    <span className="text-sm">{item}</span>
                    </label>
                ))}
            </div>
        </div>
        {/* Notes */}
        <div className="flex flex-col gap-4.5 w-full">
            <div className="flex items-center gap-2">
                <div className="bg-primary w-5 h-5 flex items-center justify-center shrink-0 rounded-full text-white">4</div>
                <p className="text-sm">Any special requirements ?</p>
            </div>
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
  )
}

export default QuoteForm;
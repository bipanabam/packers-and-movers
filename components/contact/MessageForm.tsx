"use client";

import {
  User,
  Phone,
  Truck,
  ArrowRight,
  Home,
  Building2,
  CarFront,
  Bike,
} from "lucide-react";
import WhatsAppIcon from "../icons/WhatsAppIcon";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import {
    messageFormSchema,
    MessageFormInputs,
    MovingType
} from "@/libs/validations/contact";

const movingOptions: {
  value: MovingType;
  icon: any;
  desc: string;
}[] = [
  {
    value: "House Shift",
    icon: Home,
    desc: "Apartments, flats & homes",
  },
  {
    value: "Office Shift",
    icon: Building2,
    desc: "Corporate & business moves",
  },
  {
    value: "Bike Transport",
    icon: Bike,
    desc: "Safe two-wheeler transport",
  },
  {
    value: "Car Transport",
    icon: CarFront,
    desc: "Secure four-wheeler relocation",
  },
];

const MessageForm = ({setFormData} : { setFormData: React.Dispatch<React.SetStateAction<FormData>>}) => {
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors },
      } = useForm<MessageFormInputs>({
        resolver: zodResolver(messageFormSchema),
      })
    
      const router = useRouter();
    
      const handleMessageFormSubmit: SubmitHandler<MessageFormInputs> = (data) => {
        setFormData((prev) => ({
        ...prev,
        contact: data,
        }));
        router.push("/contact");
        console.log("Contact Form Data:", data);
        // You can perform further actions here, such as sending the data to an API or navigating to the next step.
      }
  return (
    <form 
      className="flex flex-col gap-4 p-4 sm:p-6 items-center w-full"
      onSubmit={handleSubmit(handleMessageFormSubmit)}
    >
        {/* Contact Information */}
        <div className="grid grid-cols-1 w-full gap-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                <label htmlFor="movingType" className="text-foreground/70 text-sm font-medium">Moving Type</label>
                <div className="relative">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {movingOptions.map((item) => {
                        const Icon = item.icon;
                        const active = watch("movingType") === item.value;

                        return (
                        <button
                            key={item.value}
                            type="button"
                            onClick={() => setValue("movingType", item.value)}
                            className={`
                            group relative overflow-hidden rounded-2xl border p-5 text-left transition-all duration-300
                            ${
                                active
                                ? "border-primary bg-primary/5 shadow-md"
                                : "border-primary/10 bg-white hover:border-primary/30 hover:shadow-sm"
                            }
                            `}
                        >
                            {/* Active glow */}
                            {active && (
                            <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent" />
                            )}

                            <div className="relative z-10 flex items-start gap-4">
                            {/* Icon */}
                            <div
                                className={`
                                flex h-12 w-12 items-center justify-center rounded-xl transition
                                ${
                                    active
                                    ? "bg-primary text-white"
                                    : "bg-primary/5 text-primary"
                                }
                                `}
                            >
                                <Icon size={22} />
                            </div>

                            {/* Content */}
                            <div>
                                <h3 className="text-sm font-semibold text-foreground">
                                {item.value}
                                </h3>

                                <p className="mt-1 text-xs leading-relaxed text-foreground/50">
                                {item.desc}
                                </p>
                            </div>
                            </div>
                        </button>
                        );
                    })}
                    </div>
                    <input type="hidden" {...register("movingType")} />
                    <p className="absolute -bottom-5 text-xs text-red-500">
                        {errors.movingType?.message}
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-5">
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="pickupLocation" className="text-foreground/70 text-sm font-medium">Pickup Location *</label>
                    <div className="relative">
                        <div className="flex items-center gap-2 bg-white/90 px-3 py-3 rounded-lg border border-primary/30 w-full hover:border-primary">
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
                        <div className="flex items-center gap-2 bg-white/90 px-3 py-3 rounded-lg border border-primary/30 w-full hover:border-primary ">
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
            </div>
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
        </div>
        <button
          type="submit"
          className="flex items-center justify-center gap-2 w-full bg-secondary text-white px-5 py-2.5 rounded-md text-base font-semibold mt-3 md:mt-0 hover:cursor-pointer whitespace-nowrap transition"
        >
          Send Message
          <ArrowRight size={22} strokeWidth={1.5} />
        </button>
    </form>
  )
}

export default MessageForm;
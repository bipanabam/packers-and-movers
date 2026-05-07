"use client";

import {
  Building,
  Truck,
  ArrowRight
} from "lucide-react";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import {
  InventoryAndLocationInputs,
  inventoryAndLocationFormSchema,
} from "@/libs/validations/quote";

const InventoryAndLocationForm = ({setFormData} : { setFormData: React.Dispatch<React.SetStateAction<FormData>>}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<InventoryAndLocationInputs>({
        resolver: zodResolver(inventoryAndLocationFormSchema),
      })
    
      const router = useRouter();
    
      const handleInventoryAndLocationFormSubmit: SubmitHandler<InventoryAndLocationInputs> = (data) => {
        setFormData((prev) => ({
        ...prev,
        inventory: data,
        }));
        router.push("/get-quote?step=4", {scroll: false});
        console.log("Inventory and Location Form Data:", data);
        // You can perform further actions here, such as sending the data to an API or navigating to the next step.
      }
  return (
    <form 
      className="flex flex-col gap-4 p-4 sm:p-6 items-center w-full"
      onSubmit={handleSubmit(handleInventoryAndLocationFormSubmit)}
    >
        {/* Location Details */}
        <div className="flex flex-col gap-4.5 w-full">
            <div className="flex items-center gap-2">
                <div className="bg-primary w-5 h-5 flex items-center justify-center shrink-0 rounded-full text-white" />
                <p className="text-sm">Location Detail</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-2">
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
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="floorNumber" className="text-foreground/70 text-sm font-medium">Floor Number</label>
                    <div className="relative">
                        <div className="flex items-center gap-2 bg-white/90 px-3 py-3 rounded-lg border border-primary/30 w-full hover:border-primary ">
                            <Building color="#919191" size={20} />
                            <select
                            id="floorNumber"
                            className="bg-transparent outline-none text-sm w-full text-foreground"
                            {...register("floorNumber")}
                            >
                            <option value="">Select Floor Number</option>
                            <option value="Ground Floor">Ground Floor</option>
                            <option value="1st Floor">1st Floor</option>
                            <option value="2nd Floor">2nd Floor</option>
                            <option value="3rd Floor">3rd Floor</option>
                            <option value="4th+ Floor">4th+ Floor</option>
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
        <div className="flex flex-col gap-4.5 w-full mt-3">
            <div className="flex items-center gap-2">
                <div className="bg-primary w-5 h-5 flex items-center justify-center shrink-0 rounded-full text-white" />
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
        <button
          type="submit"
          className="flex items-center justify-center gap-2 w-full bg-secondary text-white px-5 py-2.5 rounded-md text-base font-semibold mt-3 md:mt-0 hover:cursor-pointer whitespace-nowrap transition"
        >
          <p>Proceed to Review</p>
          <ArrowRight size={22} strokeWidth={1.5} />
        </button>
    </form>
  )
}

export default InventoryAndLocationForm;
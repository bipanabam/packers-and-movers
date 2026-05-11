"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import {
  MovingDetailInputs,
  movingDetailFormSchema,
  movingTypes,
  propertySizes
} from "@/libs/validations/quote";
import { ArrowRight } from "lucide-react";

const MovingDetailForm = ({setFormData} : { setFormData: React.Dispatch<React.SetStateAction<FormData>>}) => {
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors },
      } = useForm<MovingDetailInputs>({
        resolver: zodResolver(movingDetailFormSchema),
    })

    const router = useRouter();

    const handleMovingDetailFormSubmit: SubmitHandler<MovingDetailInputs> = (data) => {
        setFormData((prev) => ({
        ...prev,
        move: data,
        }));
        router.push("/get-quote?step=3", {scroll: false});
        console.log("Moving Detail Form Data:", data);
        // You can perform further actions here, such as sending the data to an API or navigating to the next step.
    }
  return (
    <form 
      className="flex flex-col gap-4 p-4 sm:p-6 items-center w-full"
      onSubmit={handleSubmit(handleMovingDetailFormSubmit)}
    >
        {/* Move Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-5">
            <div className="flex flex-col gap-1.5">
                <label htmlFor="movingType" className="text-foreground/70 text-sm font-medium">Moving Type</label>
                <div className="relative">
                    <div className="grid grid-cols-2 gap-4">
                        {movingTypes.map((type) => (
                            <button
                            key={type}
                            type="button"
                            onClick={() => setValue("movingType", type)}
                            className={`
                                rounded-2xl border p-5 text-left transition
                                ${
                                watch("movingType") === type
                                    ? "border-primary bg-primary/5"
                                    : "border-primary/10"
                                }
                            `}
                            >
                            <p className="font-medium">{type}</p>
                            </button>
                        ))}
                    </div>
                    <input type="hidden" {...register("movingType")} />
                    <p className="absolute -bottom-5 text-xs text-red-500">
                        {errors.movingType?.message}
                    </p>
                </div>
            </div>
            <div className="flex flex-col gap-1.5">
                <label htmlFor="propertySize" className="text-foreground/70 text-sm font-medium">Property Size</label>
                <div className="relative">
                    <div className="grid grid-cols-4 gap-4">
                        {propertySizes.map((type) => (
                            <button
                            key={type}
                            type="button"
                            onClick={() => setValue("propertySize", type)}
                            className={`
                                rounded-2xl border p-3 text-left transition
                                ${
                                watch("propertySize") === type
                                    ? "border-primary bg-primary/5"
                                    : "border-primary/10"
                                }
                            `}
                            >
                            <p className="font-medium">{type}</p>
                            </button>
                        ))}
                    </div>
                    <input type="hidden" {...register("propertySize")} />
                    <p className="absolute -bottom-5 text-xs text-red-500">
                        {errors.propertySize?.message}
                    </p>
                </div>
            </div>

            <div className="flex flex-col gap-1.5">
                <label htmlFor="movingDate" className="text-foreground/70 text-sm font-medium">Moving Date</label>
                <div className="relative">
                    <div className="flex items-center gap-2 bg-white/90 px-3 py-3 rounded-lg border border-primary/30 w-full hover:border-primary ">
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
                    <div className="flex items-center gap-2 bg-white/90 px-3 py-3 rounded-lg border border-primary/30 w-full hover:border-primary ">
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
        <button
          type="submit"
          className="flex items-center justify-center gap-2 w-full bg-secondary text-white px-5 py-2.5 rounded-md text-base font-semibold mt-3 md:mt-0 hover:cursor-pointer whitespace-nowrap transition"
        >
          <p>Continue to next step</p>
          <ArrowRight size={22} strokeWidth={1.5} />
        </button>
    </form>
  )
}

export default MovingDetailForm;
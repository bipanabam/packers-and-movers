import { email, z } from "zod";


export const instantQuoteFormSchema = z.object({
    fullName: z.string().min(2, "Full Name must be at least 2 characters"),
    phone: z.string().min(10, "Phone number must be at least 10 digits").regex(/^\d+$/, "Phone number must contain only digits/numbers"),
    fromAddress: z.string().min(5, "Please set pickup point"),
    toAddress: z.string().min(5, "Destination address is required"),
    // country: z.string().min(2, "Country is required"),
});

export type InstantQuoteFormInputs = z.infer<typeof instantQuoteFormSchema>;

export const quoteFormSchema = z.object({
    // contact information
    fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters"),
    phoneNumber: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .regex(/^[0-9]+$/, "Only numbers allowed"),
    whatsappNumber: z
    .string()
    .regex(/^[0-9]*$/, "Only numbers allowed")
    .optional(),
    email: z
    .string()
    .email("Invalid email address")
    .optional()
    .or(z.literal("")),

    // move details
    movingType: z.enum([
        "House Shift",
        "Office Shift",
        "Bike Transport",
        "Car Transport",
    ]),
    propertySize: z.enum([
        "1 RK",
        "1 BHK",
        "2 BHK",
        "3 BHK",
        "Villa",
        "Office",
    ]),
    movingDate: z.string().min(1, "Moving date is required"),
    movingTime: z.enum([
        "Morning (7AM - 11AM)",
        "Afternoon (12PM - 4PM)",
        "Evening (5PM - 9PM)",
    ]),

    // location details
    pickupLocation: z
    .string()
    .min(5, "Pickup location required"),
    dropLocation: z
    .string()
    .min(5, "Drop location required"),
    floorNumber: z.enum([
        "Ground Floor",
        "1st Floor",
        "2nd Floor",
        "3rd Floor",
        "4th+ Floor",
    ]),
    liftAvailable: z.boolean(),

    // inventory items -> checkbox: Bed, Sofa, Fridge, so on
    inventory: z.array(z.string()).optional(),

    // Notes
    comment: z.string().optional(),
});
export type QuoteFormInputs = z.infer<typeof quoteFormSchema>;

// Breaking QuoteFormInputs into different steps
export const contactInformationFormSchema = z.object({
    // contact information
    fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters"),
    phoneNumber: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .regex(/^[0-9]+$/, "Only numbers allowed"),
    whatsappNumber: z
    .string()
    .regex(/^[0-9]*$/, "Only numbers allowed")
    .optional(),
    email: z
    .string()
    .email("Invalid email address")
    .optional()
    .or(z.literal(""))
})
export type ContactInformationInputs = z.infer<typeof contactInformationFormSchema>;

export const movingTypes = [
  "House Shift",
  "Office Shift",
  "Bike Transport",
  "Car Transport",
] as const;
export type MovingType = (typeof movingTypes)[number];

export const propertySizes = [
"1 RK",
"1 BHK",
"2 BHK",
"3 BHK",
"Villa",
"Office",
] as const;
export type PropertySize = (typeof propertySizes)[number];

export const movingDetailFormSchema = z.object({
    movingType: z.enum(movingTypes),
    propertySize: z.enum(propertySizes),
    movingDate: z.string().min(1, "Moving date is required"),
    movingTime: z.enum([
        "Morning (7AM - 11AM)",
        "Afternoon (12PM - 4PM)",
        "Evening (5PM - 9PM)",
    ]),
})
export type MovingDetailInputs = z.infer<typeof movingDetailFormSchema>;

export const inventoryAndLocationFormSchema = z.object({
    pickupLocation: z
    .string()
    .min(5, "Pickup location required"),
    dropLocation: z
    .string()
    .min(5, "Drop location required"),
    floorNumber: z.enum([
        "Ground Floor",
        "1st Floor",
        "2nd Floor",
        "3rd Floor",
        "4th+ Floor",
    ]),
    liftAvailable: z.boolean(),
    // inventory items -> checkbox: Bed, Sofa, Fridge, so on
    inventory: z.array(z.string()).optional(),
})
export type InventoryAndLocationInputs = z.infer<typeof inventoryAndLocationFormSchema>;

export const reviewAndSubmitFormSchema = z.object({
    // Notes
    comment: z.string().optional(),
})
export type ReviewAndSubmitInputs = z.infer<typeof reviewAndSubmitFormSchema>;

export type QuoteFormData = {
  contact: Partial<ContactInformationInputs>;
  move: Partial<MovingDetailInputs>;
  inventory: Partial<InventoryAndLocationInputs>;
  review: Partial<ReviewAndSubmitInputs>;
};

import { z } from "zod";

export const movingTypes = [
  "House Shift",
  "Office Shift",
  "Bike Transport",
  "Car Transport",
] as const;
export type MovingType = (typeof movingTypes)[number];

export const messageFormSchema = z.object({
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

    // move details
    movingType: z.enum([
        "House Shift",
        "Office Shift",
        "Bike Transport",
        "Car Transport",
    ]),
    pickupLocation: z
    .string()
    .min(5, "Pickup location required"),
    dropLocation: z
    .string()
    .min(5, "Drop location required"),
    // Notes
    comment: z.string().optional(),
});
export type MessageFormInputs = z.infer<typeof messageFormSchema>;
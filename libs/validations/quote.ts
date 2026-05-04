import { z } from "zod";


export const instantQuoteFormSchema = z.object({
    fullName: z.string().min(2, "Full Name must be at least 2 characters"),
    phone: z.string().min(10, "Phone number must be at least 10 digits").regex(/^\d+$/, "Phone number must contain only digits/numbers"),
    fromAddress: z.string().min(5, "Please set pickup point"),
    toAddress: z.string().min(5, "Destination address is required"),
    // country: z.string().min(2, "Country is required"),
});

export type InstantQuoteFormInputs = z.infer<typeof instantQuoteFormSchema>;

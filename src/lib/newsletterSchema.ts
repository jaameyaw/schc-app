import { z } from "zod";

// Single source of truth for newsletter-signup validation.
// Imported by the client form and the API route so client and server
// enforce the exact same rules.
export const newsletterSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .max(254, "Email is too long")
    .pipe(z.email("Enter a valid email")),
});

export type NewsletterFormData = z.infer<typeof newsletterSchema>;

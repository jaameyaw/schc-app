import { z } from "zod";

// Email rules stay shared so the API still accepts older email-only posts.
const emailField = z
  .string()
  .trim()
  .min(1, "Email is required")
  .max(254, "Email is too long")
  .pipe(z.email("Enter a valid email"));

export const newsletterSchema = z.object({
  email: emailField,
  name: z.string().trim().max(80, "Name is too long").optional(),
  contact: z.string().trim().max(40, "Contact is too long").optional(),
});

export const newsletterFormSchema = z.object({
  email: emailField,
  name: z
    .string()
    .trim()
    .min(1, "Name is required")
    .max(80, "Name is too long"),
  contact: z
    .string()
    .trim()
    .min(1, "Contact is required")
    .max(40, "Contact is too long"),
});

export type NewsletterFormData = z.infer<typeof newsletterFormSchema>;

import { z } from "zod";

export const leadSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().min(7, "Please enter a valid phone number."),
  company: z.string().optional(),
  projectType: z.string().min(2, "Please select a project type."),
  squareFeet: z.coerce.number().min(1, "Enter square footage."),
  city: z.string().optional(),
  timeline: z.string().min(2, "Please select a timeline."),
  message: z.string().max(4000).optional(),
  source: z.string().optional(),
  page: z.string().optional(),
  honey: z.string().max(0).optional().default(""),
  startedAt: z.string().optional()
});

export type LeadInput = z.infer<typeof leadSchema>;

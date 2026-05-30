import { z } from "zod";

export const inquirySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address"),
  phone: z.string().max(30).optional(),
  type: z.enum(["scheduled", "charter", "scenic", "transfer", "other"]),
  message: z.string().min(10, "Message must be at least 10 characters").max(2000),
  from: z.string().max(100).optional(),
  to: z.string().max(100).optional(),
  date: z.string().max(50).optional(),
  passengers: z.number().min(1).max(50).optional(),
  honeypot: z.string().max(0, "Bot detected").optional(),
});

export const emailCaptureSchema = z.object({
  email: z.string().email("Invalid email address"),
  honeypot: z.string().max(0, "Bot detected").optional(),
});

export type InquiryInput = z.infer<typeof inquirySchema>;
export type EmailCaptureInput = z.infer<typeof emailCaptureSchema>;

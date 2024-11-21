import { z } from "zod";

export const createBlogSchema = z.object({
  title: z
    .string()
    .max(255)
    .min(3, { message: "title cannot be less that 3 characters" }),
  content: z
    .string()
    .min(3, { message: "content cannot be less that 3 characters" }),
});

export const patchBlogSchema = z.object({
  title: z
    .string()
    .max(255)
    .min(3, { message: "title cannot be less that 3 characters" })
    .optional(),
  content: z
    .string()
    .min(3, { message: "content cannot be less that 3 characters" })
    .optional(),
});
export const registrationSchema = z.object({
  email: z.string().email().max(255),
  password: z.string().min(5),
});

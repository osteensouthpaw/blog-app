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

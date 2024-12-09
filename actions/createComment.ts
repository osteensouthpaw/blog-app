"use server";
import { CommentFormData } from "@/app/blogs/[id]/CommentForm";
import { commentSchema } from "@/app/validationSchemas";
import { auth } from "@/auth";
import prisma from "@/prisma/client";
import { revalidatePath } from "next/cache";

export const createComment = async (
  formData: CommentFormData,
  blogId: number
) => {
  const session = await auth();
  const validation = commentSchema.safeParse(formData);
  if (!session || !session.user) return { error: "Login to comment" };
  if (!validation.success) return { error: "Invalid Data" };

  const { content } = validation.data;
  try {
    const createdComment = await prisma.comment.create({
      data: {
        content,
        userId: session.user.id!,
        blogId,
      },
    });
    revalidatePath(`/blogs/${blogId}`);
    return { data: createdComment };
  } catch (error) {
    console.log(error);
    return { error: "An error occured! Please try again" };
  }
};

"use server";

import { CommentFormData } from "@/app/blogs/[id]/CommentForm";
import { commentSchema } from "@/app/validationSchemas";
import prisma from "@/prisma/client";
import { Comment } from "@prisma/client";

export const updateComment = async (
  comment: Comment,
  data: CommentFormData
) => {
  const validation = commentSchema.safeParse(data);
  if (!validation.success) return { error: "Invalid Input " };

  const commentToUpdate = await prisma.comment.findUnique({
    where: { id: comment.id },
  });

  if (!commentToUpdate) return { error: "Comment does not exist" };

  const { content } = validation.data;

  try {
    const updatedComment = await prisma.comment.update({
      where: { id: commentToUpdate.id },
      data: { content },
    });
    return { data: updatedComment };
  } catch (error) {
    console.error(error);
    return { error: "An Error occured! please try again" };
  }
};

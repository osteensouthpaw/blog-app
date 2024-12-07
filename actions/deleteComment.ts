"use server";

import prisma from "@/prisma/client";
import { revalidatePath } from "next/cache";

export const deleteComment = async (commentId: number) => {
  const comment = await prisma.comment.findUnique({
    where: { id: commentId },
  });

  if (!comment) return { error: "comment does not exist" };

  try {
    await prisma.comment.delete({
      where: { id: comment.id },
    });
    revalidatePath(`/blogs/${comment.blogId}`);
  } catch (error) {
    console.error(error);
  }
};

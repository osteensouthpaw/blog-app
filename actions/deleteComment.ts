"use server";

import prisma from "@/prisma/client";

export const deleteComment = async (commentId: number) => {
  const comment = await prisma.comment.findUnique({
    where: { id: commentId },
  });

  if (!comment) return { error: "comment does not exist" };

  try {
    await prisma.comment.delete({
      where: { id: comment.id },
    });
  } catch (error) {
    console.error(error);
  }
};

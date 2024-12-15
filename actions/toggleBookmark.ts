"use server";

import { auth } from "@/auth";
import prisma from "@/prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const toggleBookmark = async (blogId: number) => {
  if (!blogId) throw new Error("blogId must be provided");

  const session = await auth();
  if (!session || !session.user || !session.user.id)
    return redirect("/auth/signin");

  const userId = session.user.id;

  const isBookmarkPresent = await prisma.bookmark.findFirst({
    where: { userId, blogId },
  });

  try {
    if (isBookmarkPresent) {
      await prisma.bookmark.delete({
        where: {
          userId_blogId: { blogId, userId },
        },
      });
    } else {
      await prisma.bookmark.create({
        data: { blogId, userId },
      });
    }
  } catch (error) {
    console.log({ error });
  } finally {
    revalidatePath(`/blogs/${blogId}`);
  }
};

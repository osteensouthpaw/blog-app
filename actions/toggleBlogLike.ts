"use server";

import { auth } from "@/auth";
import prisma from "@/prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const toggleBlogLike = async (blogId: number) => {
  if (!blogId) throw new Error("Post id must be provided");
  const session = await auth();

  if (!session || !session.user || !session.user.id)
    return redirect("/auth/signin");

  const userId = session.user.id;
  const isLiked = await prisma.blogLike.findFirst({
    where: { blogId, userId },
  });

  try {
    if (isLiked) {
      await prisma.blogLike.delete({
        where: {
          userId_blogId: { blogId, userId },
        },
      });
    } else {
      await prisma.blogLike.create({
        data: { blogId, userId },
      });
    }
    return { isLiked: !!isLiked };
  } catch (error) {
    console.log(error);
    return { error: "An error occured" };
  } finally {
    revalidatePath(`/blogs/${blogId}`);
  }
};

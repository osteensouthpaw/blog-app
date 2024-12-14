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

  const isLiked = await prisma.blogLike.count({
    where: { blogId, userId: session.user.id },
  });

  return isLiked
    ? await unlikePost(blogId, session.user.id)
    : await likePost(blogId, session.user.id);
};

const unlikePost = async (blogId: number, userId: string) => {
  try {
    return await prisma.blogLike.delete({
      where: {
        userId_blogId: {
          blogId,
          userId,
        },
      },
    });
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong! Please try again" };
  } finally {
    revalidatePath(`/blogs/${blogId}`);
  }
};

const likePost = async (blogId: number, userId: string) => {
  try {
    return await prisma.blogLike.create({
      data: {
        blogId,
        userId,
      },
    });
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong! Please try again" };
  } finally {
    revalidatePath(`/blogs/${blogId}`);
  }
};

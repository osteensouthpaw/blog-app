"use server";

import { auth } from "@/auth";
import prisma from "@/prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const toggleFollow = async (followingId: string) => {
  if (!followingId) throw new Error("userId must be provided");

  const session = await auth();
  if (!session || !session.user || !session.user.id)
    return redirect("/auth/signin");

  const followerId = session.user.id;

  const isFollower = await prisma.follower.findFirst({
    where: { followerId, followingId },
  });

  try {
    if (isFollower) {
      await prisma.follower.delete({
        where: { followerId_followingId: { followerId, followingId } },
      });
    } else {
      await prisma.follower.create({
        data: { followerId, followingId },
      });
    }
  } catch (err) {
    console.error(err);
    throw new Error("an error occured");
  } finally {
    revalidatePath(`/users/profile/${followingId}`);
  }
};

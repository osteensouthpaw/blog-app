"use server";

import { UserUpdateFormData } from "@/app/users/[id]/edit/UserEditForm";
import { userUpdateSchema } from "@/app/validationSchemas";
import prisma from "@/prisma/client";
import { revalidatePath } from "next/cache";

export const updateUser = async (
  formData: UserUpdateFormData,
  userId: string
) => {
  const validation = userUpdateSchema.safeParse(formData);
  if (!validation.success) return { error: "Invalid Details" };

  const { name, bio } = validation.data;

  const user = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (!user) return { error: "User not found" };

  try {
    await prisma.user.update({
      where: { id: user.id },
      data: { name, bio },
    });
  } catch (error) {
    console.error(error);
    return { error: "An Error occurred. Please try again" };
  }
};

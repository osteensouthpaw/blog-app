"use server";

import { RegistrationFormData } from "@/app/auth/register/page";
import { registrationSchema } from "@/app/validationSchemas";
import prisma from "@/prisma/client";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import bcrypt from "bcrypt";
import { revalidatePath } from "next/cache";

export const register = async (values: RegistrationFormData) => {
  const validation = registrationSchema.safeParse(values);

  if (!validation.success) return { error: "Invalid details" };

  const { email, password, name } = validation.data;

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (user) return { error: "Email already exists" };

  const hashedPassword = await bcrypt.hash(password, 8);
  await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  revalidatePath(DEFAULT_LOGIN_REDIRECT);
  return { success: "Successful" };
};

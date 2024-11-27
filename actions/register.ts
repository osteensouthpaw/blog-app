"use server";

import { RegistrationFormData } from "@/app/auth/register/page";
import { registrationSchema } from "@/app/validationSchemas";
import prisma from "@/prisma/client";
import bcrypt from "bcrypt";

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

  return { success: "Successful" };
};

"use server";

import { SignInFormData } from "@/app/auth/signin/page";
import { loginSchema } from "@/app/validationSchemas";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";

export const login = async (values: SignInFormData) => {
  const validation = loginSchema.safeParse(values);

  if (!validation.success) return { error: "Invalid credentials" };

  const { email, password } = validation.data;

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
    // return { success: "Successful" };
  } catch (error) {
    if (error instanceof AuthError) {
      const errorMessage =
        error.type === "CredentialsSignin"
          ? "Invalid credentials"
          : "Something went wrong!";

      return { error: errorMessage };
    }

    throw error;
  }
};

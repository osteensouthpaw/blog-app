"use client";
import { loginSchema } from "@/app/validationSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Field, Form, Label, Message } from "@radix-ui/react-form";
import {
  Box,
  Button,
  Callout,
  Heading,
  Text,
  TextField,
} from "@radix-ui/themes";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Social from "../Social";
import FormError from "@/app/components/FormError";
import FormSuccess from "@/app/components/FormSuccess";

type SignInFormData = z.infer<typeof loginSchema>;

const LoginPage = () => {
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = handleSubmit(async (data: SignInFormData) => {
    try {
      return await signIn("credentials", { ...data, redirect: false });
    } catch (error) {
      setError("An error occurred please try again");
      throw new Error();
    }
  });

  return (
    <>
      {error && <Callout.Root>{error}</Callout.Root>}
      <Form onSubmit={onSubmit}>
        <Box className="mx-auto overflow-hidden rounded-lg">
          <Box className="p-6 md:p-8 space-y-6">
            <Box className="space-y-2 text-center">
              <Heading className="text-3xl font-bold">Login In</Heading>
              <Text className="text-gray-500 dark:text-gray-400">
                Login in by filling the details below
              </Text>
            </Box>
            <Box>
              <Box className="space-y-4">
                <Field name="email" className="space-y-2">
                  <Label htmlFor="email">Email</Label>

                  <TextField.Root
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    {...register("email")}
                  />
                  {errors.email && (
                    <Message color="red">{errors.email.message}</Message>
                  )}
                </Field>
                <Field name="password" className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <TextField.Root
                    id="password"
                    type="password"
                    required
                    {...register("password")}
                  />
                  {errors.password && (
                    <Message className="text-xs" color="red">
                      {errors.password.message}
                    </Message>
                  )}
                </Field>
                <FormError />
                <FormSuccess />
                <Button type="submit" className="w-full">
                  Login
                </Button>
                <Social />
              </Box>
              <div className="mt-4 text-center text-sm">
                Don&#39;t have an account?{" "}
                <Link
                  href="/auth/register"
                  className="underline"
                  prefetch={false}
                >
                  Register
                </Link>
              </div>
            </Box>
          </Box>
        </Box>
      </Form>
    </>
  );
};

export default LoginPage;

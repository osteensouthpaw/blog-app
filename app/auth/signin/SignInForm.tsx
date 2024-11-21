"use client";
import React from "react";
import { Field, Form, Label } from "@radix-ui/react-form";
import { Box, Button, Heading, Text, TextField } from "@radix-ui/themes";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { ClientSafeProvider, signIn } from "next-auth/react";
import { z } from "zod";
import { registrationSchema } from "@/app/validationSchemas";
import { zodResolver } from "@hookform/resolvers/zod";

interface Props {
  providers: Record<string, ClientSafeProvider> | null;
}

type SignInFormData = z.infer<typeof registrationSchema>;

const SignInForm = ({ providers }: Props) => {
  const { register, handleSubmit } = useForm<SignInFormData>({
    resolver: zodResolver(registrationSchema),
  });

  return (
    <Form
      onSubmit={handleSubmit(async (data) => {
        // await signIn();
      })}
    >
      <Box className="w-full max-w-xl mx-auto overflow-hidden rounded-lg">
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
              </Field>
              <Field name="password" className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <TextField.Root
                  id="password"
                  type="password"
                  required
                  {...register("password")}
                />
              </Field>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </Box>
            <Box>
              {providers &&
                Object.values(providers).map(
                  (provider) =>
                    provider.name !== "Credentials" && (
                      <div key={provider.name}>
                        <Button
                          variant="ghost"
                          onClick={async () => await signIn(provider.id)}
                        >
                          Sign In With {provider.name}
                        </Button>
                      </div>
                    ),
                )}
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
  );
};

export default SignInForm;

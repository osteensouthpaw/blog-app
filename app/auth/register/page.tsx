"use client";
import { register as registerUser } from "@/actions/register";
import FormError from "@/app/components/FormError";
import FormSuccess from "@/app/components/FormSuccess";
import { registrationSchema } from "@/app/validationSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Field, Form, Label } from "@radix-ui/react-form";
import {
  Box,
  Button,
  Heading,
  Spinner,
  Text,
  TextField,
} from "@radix-ui/themes";
import Link from "next/link";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Social from "../Social";

export type RegistrationFormData = z.infer<typeof registrationSchema>;

const RegistrationForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const { register, handleSubmit } = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema),
  });

  const onSubmit = handleSubmit((data) => {
    setError("");
    setSuccess("");
    startTransition(() => {
      registerUser(data).then((data) => {
        setError(data.error);
        setSuccess(data.success);
      });
    });
  });

  return (
    <Form onSubmit={onSubmit}>
      <Box className="w-full mx-auto overflow-hidden rounded-lg">
        <Box className="p-6 md:p-8 space-y-6">
          <Box className="space-y-2 text-center">
            <Heading className="text-3xl font-bold">Sign Up</Heading>
            <Text className="text-gray-500 dark:text-gray-400">
              Create your account by filling the details below
            </Text>
          </Box>
          <Box>
            <Box className="space-y-4">
              <Field name="full-name" className="space-y-2">
                <Label htmlFor="full-name">Full Name</Label>
                <TextField.Root
                  {...register("name")}
                  id="full-name"
                  placeholder="John Doe"
                  required
                />
              </Field>
              <Field name="email" className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <TextField.Root
                  {...register("email")}
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                />
              </Field>
              <Field name="password" className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <TextField.Root
                  {...register("password")}
                  id="password"
                  type="password"
                  required
                />
              </Field>
              <Field name="confirm-password" className="space-y-2">
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <TextField.Root
                  id="confirm-password"
                  type="password"
                  required
                />
              </Field>
              <FormError message={error} />
              <FormSuccess message={success} />
              <Button disabled={isPending} type="submit" className="w-full">
                {isPending && <Spinner />} Sign Up
              </Button>
            </Box>
            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <Link href="/auth/signin" className="underline" prefetch={false}>
                Login
              </Link>
            </div>
          </Box>
          <Social />
        </Box>
      </Box>
    </Form>
  );
};

export default RegistrationForm;

"use client";
import React, { useState } from "react";
import { Box, Button, Heading, Text, TextField } from "@radix-ui/themes";
import Link from "next/link";
import { Field, Form, Label } from "@radix-ui/react-form";
import Social from "../Social";
import { z } from "zod";
import { registrationSchema } from "@/app/validationSchemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import FormError from "@/app/components/FormError";
import FormSuccess from "@/app/components/FormSuccess";

type RegistrationFormData = z.infer<typeof registrationSchema>;

const RegistrationForm = () => {
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema),
  });

  const onSubmit = handleSubmit((data) =>
    axios
      .post("/api/register", data)
      .then((res) => res.data)
      .catch((err) => {
        console.log(err);
        setError(err);
      })
  );

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
              <FormSuccess />
              <Button disabled={isSubmitting} type="submit" className="w-full">
                Sign Up
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

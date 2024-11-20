import React from "react";
import { Box, Button, Heading, Text, TextField } from "@radix-ui/themes";
import { Field, Form, Label } from "@radix-ui/react-form";
import Link from "next/link";

const LoginPage = () => {
  return (
    <Form>
      <Box className="w-full max-w-xl mx-auto overflow-hidden rounded-lg -mt-20">
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
                />
              </Field>
              <Field name="password" className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <TextField.Root id="password" type="password" required />
              </Field>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </Box>
            <div className="mt-4 text-center text-sm">
              Don't have an account?{" "}
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

export default LoginPage;

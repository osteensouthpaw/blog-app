"use client";
import React from "react";
import { Button, Flex } from "@radix-ui/themes";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

const Social = () => {
  const login = (provider: "google" | "github") =>
    signIn(provider, { callbackUrl: DEFAULT_LOGIN_REDIRECT });
  return (
    <Flex align="center" gap="2">
      <Button
        variant="outline"
        onClick={() => login("google")}
        className="flex-1 cursor-pointer"
      >
        <FcGoogle size={20} />
      </Button>
      <Button
        variant="outline"
        onClick={() => login("github")}
        className="flex-1 cursor-pointer"
      >
        <FaGithub size={20} />
      </Button>
    </Flex>
  );
};

export default Social;

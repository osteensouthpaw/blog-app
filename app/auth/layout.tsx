"use client";
import React, { PropsWithChildren } from "react";
import { Flex } from "@radix-ui/themes";

const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <Flex
      justify="center"
      height="full"
      align="center"
      style={{ backgroundImage: "url(background-image.svg)" }}
    >
      <section>{children}</section>
    </Flex>
  );
};

export default AuthLayout;

"use client";
import React, { PropsWithChildren } from "react";
import { Grid } from "@radix-ui/themes";

const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <Grid columns={{ initial: "1", md: "2" }} className="min-h-svh">
      <section>{children}</section>
      <section className="bg-amber-200">Image here</section>
    </Grid>
  );
};

export default AuthLayout;

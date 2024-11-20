"use client";
import React, { PropsWithChildren } from "react";

const AuthLayout = ({ children }: PropsWithChildren) => {
  return <section>{children} </section>;
};

export default AuthLayout;
